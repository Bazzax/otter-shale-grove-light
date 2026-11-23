import type { CSSProperties } from "react";

type Flake = {
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  drift: number;
  opacity: number;
};

type SnowScene = "hero" | "hangar";

const HERO_FLAKES: Flake[] = [
  { x: 8, y: 12, size: 3, dur: 16, delay: -3, drift: 14, opacity: 0.45 },
  { x: 18, y: 38, size: 4, dur: 18, delay: -9, drift: -10, opacity: 0.35 },
  { x: 28, y: 8, size: 3, dur: 14, delay: -1, drift: 8, opacity: 0.5 },
  { x: 41, y: 22, size: 5, dur: 15, delay: -6, drift: -6, opacity: 0.42 },
  { x: 52, y: 6, size: 4, dur: 17, delay: -4, drift: 10, opacity: 0.55 },
  { x: 58, y: 30, size: 3, dur: 19, delay: -11, drift: -12, opacity: 0.48 },
  { x: 64, y: 14, size: 6, dur: 13, delay: -2, drift: 18, opacity: 0.62 },
  { x: 71, y: 4, size: 5, dur: 16, delay: -8, drift: 6, opacity: 0.7 },
  { x: 76, y: 26, size: 4, dur: 21, delay: -14, drift: -8, opacity: 0.5 },
  { x: 81, y: 10, size: 6, dur: 14, delay: -5, drift: 12, opacity: 0.68 },
  { x: 86, y: 36, size: 3, dur: 18, delay: -10, drift: -14, opacity: 0.46 },
  { x: 90, y: 18, size: 5, dur: 15, delay: -7, drift: 8, opacity: 0.6 },
  { x: 94, y: 7, size: 4, dur: 12, delay: -1.5, drift: -4, opacity: 0.72 },
  { x: 97, y: 28, size: 3, dur: 22, delay: -16, drift: 20, opacity: 0.5 },
  { x: 68, y: 44, size: 4, dur: 17, delay: -3.5, drift: -16, opacity: 0.4 },
  { x: 88, y: 48, size: 5, dur: 20, delay: -12, drift: 9, opacity: 0.44 },
];

const HANGAR_FLAKES: Flake[] = [
  { x: 52, y: 8, size: 3, dur: 18, delay: -4, drift: 10, opacity: 0.4 },
  { x: 58, y: 24, size: 5, dur: 16, delay: -8, drift: -8, opacity: 0.48 },
  { x: 66, y: 6, size: 4, dur: 20, delay: -1, drift: 14, opacity: 0.55 },
  { x: 72, y: 18, size: 6, dur: 15, delay: -11, drift: -6, opacity: 0.62 },
  { x: 78, y: 34, size: 3, dur: 19, delay: -6, drift: 12, opacity: 0.42 },
  { x: 83, y: 10, size: 5, dur: 14, delay: -2, drift: -12, opacity: 0.58 },
  { x: 88, y: 28, size: 4, dur: 17, delay: -9, drift: 8, opacity: 0.5 },
  { x: 93, y: 6, size: 6, dur: 21, delay: -13, drift: 16, opacity: 0.64 },
  { x: 97, y: 20, size: 3, dur: 13, delay: -3, drift: -10, opacity: 0.46 },
  { x: 61, y: 14, size: 4, dur: 22, delay: -15, drift: 6, opacity: 0.38 },
  { x: 86, y: 42, size: 5, dur: 16, delay: -7, drift: -14, opacity: 0.4 },
  { x: 74, y: 8, size: 3, dur: 18, delay: -5, drift: 18, opacity: 0.52 },
];

const FLAKES: Record<SnowScene, Flake[]> = {
  hero: HERO_FLAKES,
  hangar: HANGAR_FLAKES,
};

export function FallingSnow({ scene }: { scene: SnowScene }) {
  return (
    <div className={`xmas-layer xmas-snow xmas-snow--${scene}`} aria-hidden="true">
      {FLAKES[scene].map((flake, i) => (
        <span
          key={i}
          className="xmas-flake"
          style={
            {
              "--xmas-x": `${flake.x}%`,
              "--xmas-y": `${flake.y}%`,
              "--xmas-size": `${flake.size}px`,
              "--xmas-dur": `${flake.dur}s`,
              "--xmas-delay": `${flake.delay}s`,
              "--xmas-drift": `${flake.drift}px`,
              "--xmas-opacity": `${flake.opacity}`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
