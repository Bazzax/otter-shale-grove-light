#!/usr/bin/env python3
"""Composite Amazon listing photos onto the hangar charcoal studio plate.

Original dropship SKUs were shot on a dark grey sweep. Later amazonPick
heroes kept Amazon's white cutout. This script mattes the subject (rembg)
and sits it on a charcoal plate sampled from the original cargo photos.
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parents[1]
PRODUCTS = ROOT / "public" / "products"

AMAZON_PICKS = [
    "flightbrick-100.jpg",
    "runway-riser.jpg",
    "cabin-cursor.jpg",
    "twin-lead-240.jpg",
    "second-window-16.jpg",
    "call-latch.jpg",
    "worldbrick-70.jpg",
    "twinview-dock.jpg",
    "softdeck-mini.jpg",
    "spotcue.jpg",
    "fieldmat.jpg",
    "magdeck-10.jpg",
]

# Sampled from original dropship corners / mid-sweep (pulse-one, arc-gan, drift-75).
STUDIO_INNER = np.array([48.0, 52.0, 58.0], dtype=np.float32)
STUDIO_OUTER = np.array([22.0, 24.0, 28.0], dtype=np.float32)


def studio_plate(height: int, width: int) -> np.ndarray:
    ys = np.linspace(-1.0, 1.0, height, dtype=np.float32)[:, None]
    xs = np.linspace(-1.0, 1.0, width, dtype=np.float32)[None, :]
    dist = np.sqrt(((ys + 0.12) * 0.92) ** 2 + (xs * 0.78) ** 2)
    t = np.clip((dist - 0.15) / 1.15, 0.0, 1.0)[:, :, None]
    return STUDIO_INNER * (1.0 - t) + STUDIO_OUTER * t


def contact_shadow(alpha: np.ndarray) -> np.ndarray:
    mask = Image.fromarray((np.clip(alpha, 0, 1) * 255).astype(np.uint8), mode="L")
    shadow = mask.filter(ImageFilter.GaussianBlur(radius=18))
    arr = np.asarray(shadow, dtype=np.float32) / 255.0
    shifted = np.zeros_like(arr)
    shift = 14
    shifted[shift:] = arr[:-shift]
    return np.clip(shifted * 0.28, 0.0, 1.0)


def unpremultiply_white(rgb: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    """Recover subject color assuming the listing was shot on white."""
    a = np.clip(alpha, 0.0, 1.0)[..., None]
    safe = np.maximum(a, 1e-4)
    foreground = (rgb - 255.0 * (1.0 - a)) / safe
    return np.clip(np.where(a > 0.04, foreground, rgb), 0.0, 255.0)


def composite(path: Path, session) -> Image.Image:
    source = Image.open(path).convert("RGBA")
    cutout = remove(source, session=session)
    rgba = np.asarray(cutout.convert("RGBA"), dtype=np.float32)
    alpha = np.clip(rgba[:, :, 3] / 255.0, 0.0, 1.0)
    subject = unpremultiply_white(rgba[:, :, :3], alpha)
    plate = studio_plate(*rgba.shape[:2])
    shadow = contact_shadow(alpha)
    plate = plate * (1.0 - shadow[..., None])
    out = subject * alpha[..., None] + plate * (1.0 - alpha[..., None])
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), mode="RGB")


def main() -> None:
    session = new_session()
    for name in AMAZON_PICKS:
        src = PRODUCTS / name
        if not src.exists():
            raise SystemExit(f"missing {src}")
        print(f"compositing {name}", flush=True)
        image = composite(src, session)
        image.save(src, format="JPEG", quality=90, optimize=True, subsampling=1)


if __name__ == "__main__":
    main()
