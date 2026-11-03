import { formatProductPrice } from "./format";

export const AMAZON_ASSOCIATE_TAG = "alsaidropship-21";
const AMAZON_UK_DP = "https://www.amazon.co.uk/dp";
const AMAZON_UK_SEARCH = "https://www.amazon.co.uk/s";
const AMAZON_MEDIA_HOST = "https://m.media-amazon.com";

/** Tagged Amazon UK product URL for a verified ASIN. */
export function affiliateProduct(asin: string) {
  return `${AMAZON_UK_DP}/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

/**
 * Amazon-hosted product image URL. Display by linking — do not download or
 * self-host. Size suffix defaults to the Associates-style `_SL1000_`.
 */
export function amazonProductImage(imageId: string, size = "SL1000") {
  return `${AMAZON_MEDIA_HOST}/images/I/${imageId}._${size}_.jpg`;
}

export function isAmazonHostedImage(src: string) {
  return src.startsWith(`${AMAZON_MEDIA_HOST}/`);
}

export const AMAZON_PRODUCT_IMAGES = {
  samsungT7: amazonProductImage("51VwCn6Fj6L"),
  soundcoreQ20i: amazonProductImage("51V2SOMrpXL"),
  liberty4Nc: amazonProductImage("5130BCxweAL"),
  ugreen65w: amazonProductImage("41ygrpBR13L"),
  omoton75: amazonProductImage("61kzGy95aoL"),
  belkin5000: amazonProductImage("41Q0Pif-2CL"),
  anker7in1: amazonProductImage("71Z9T0VgGyL"),
  benqScreenbar: amazonProductImage("41nI6sm%2BOKS"),
  tomtoc14: amazonProductImage("815e-oxdUVL"),
  anker100w: amazonProductImage("71Oc5ZPHiaL"),
  ugreenStand: amazonProductImage("61XXLkcBMyS"),
  mxMaster3s: amazonProductImage("618IJzC-fFL"),
  anker240wCable: amazonProductImage("41WNM8IFMzL"),
  arzopaZ1fc: amazonProductImage("71DQbPASQqL"),
  c920s: amazonProductImage("71y7HsMxOaL"),
  momax70w: amazonProductImage("61N1ocLV0XL"),
  ugreenDualDock: amazonProductImage("71ytW-063tL"),
  mxKeysMini: amazonProductImage("71jgJ6SY3rL"),
  spotlight: amazonProductImage("51-uRUtczhL"),
  deskMatStudio: amazonProductImage("51O92he9okL"),
  maggo10000: amazonProductImage("51tLiKYI4DL"),
} as const;

/** Tagged Amazon UK search URL. The associate tag lives only here. */
export function affiliateSearch(query: string) {
  const params = new URLSearchParams({
    k: query.trim(),
    tag: AMAZON_ASSOCIATE_TAG,
  });
  return `${AMAZON_UK_SEARCH}?${params.toString()}`;
}

export const TECH_SEARCH_CHIPS = [
  "Chargers",
  "Power banks",
  "USB-C hubs",
  "Headphones",
  "Keyboards",
  "Mice",
  "Monitors",
  "Webcams",
  "Laptop stands",
] as const;

export const CATEGORIES = ["Audio", "Power", "Desk", "Storage", "Carry"] as const;
export type Category = (typeof CATEGORIES)[number];

/** Verified Amazon UK ASINs for affiliate-only bay picks. */
export const AMAZON_PICK_ASINS = {
  flightbrick100: "B0FL2DR4TH",
  runwayRiser: "B08TLVKBMJ",
  cabinCursor: "B07W5JKHFZ",
  twinLead240: "B0CFZPSPBY",
  secondWindow16: "B0CJCBQYDY",
  ableweHub: "B0DN9F245H",
  ankerZolo20k: "B0CZ9LH53B",
  callLatch: "B07MM4V7NR",
  worldBrick70: "B0BHQNMDNC",
  twinViewDock: "B0BY8QNV1C",
  softDeckMini: "B07W6GGC8W",
  spotCue: "B06WP4QCKT",
  fieldMat: "B07W5JK3Z2",
  magDeck10: "B0CFDQ9QH5",
  iniu20k45w: "B0DCZ82MGG",
  iniu10k45w: "B0DQD385HN",
  ankerA1695: "B0DCBB2YTR",
  samsungT7: "B087DDGWKL",
  soundcoreQ20i: "B0C3HCD34R",
  liberty4Nc: "B0BZV4QFP8",
  ugreen65w: "B094JHYK55",
  omoton75: "B0GK195YDY",
  belkin5000: "B0B6DLWMJF",
  anker7in1: "B0DXJQT19B",
  benqScreenbar: "B0785D93KD",
  tomtoc14: "B0B4VG6XBP",
} as const;

/** Old shop slugs that must 308 to the current product path. */
export const PRODUCT_SLUG_REDIRECTS: Record<string, string> = {
  "arc-gan": "ugreen-65w-gan",
  "drift-75": "omoton-75-iso-uk-keyboard",
  "orbit-bank": "belkin-5000-magnetic-power-bank",
  "trace-hub": "anker-7-in-1-usb-c-hub",
  quietframe: "benq-screenbar",
  "slip-sleeve": "tomtoc-14-laptop-case",
  "flightbrick-100": "anker-100w-gan-charger",
  "runway-riser": "ugreen-laptop-stand",
  "cabin-cursor": "logitech-mx-master-3s",
  "twin-lead-240": "anker-240w-right-angle-cable",
  "second-window-16": "arzopa-z1fc-portable-monitor",
  "call-latch": "logitech-c920s-webcam",
  "worldbrick-70": "momax-70w-travel-adapter",
  "twinview-dock": "ugreen-6-in-1-dual-monitor-dock",
  "softdeck-mini": "logitech-mx-keys-mini",
  spotcue: "logitech-spotlight-remote",
  fieldmat: "logitech-desk-mat-studio",
  "magdeck-10": "anker-maggo-10000-power-bank",
  "nimbus-ssd": "samsung-t7-ssd-2tb",
  "pulse-one": "soundcore-q20i",
  "ember-buds": "soundcore-liberty-4-nc",
};

type ProductBase = {
  slug: string;
  name: string;
  /** GBP. Amazon picks are a listing snapshot — live Amazon checkout may differ. */
  price: number;
  category: Category;
  tagline: string;
  description: string;
  details: string[];
  alNote: string;
  image: string;
  /** Manufacturer brand when the Amazon listing names one. */
  brand?: string;
  asin: string;
  affiliateUrl: string;
  affiliateLabel: string;
  featured?: boolean;
};

/** Amazon UK affiliate pick. `price` is a GBP listing snapshot. */
export type Product = ProductBase & {
  amazonPick: true;
};

export function isAmazonPick(product: Product): boolean {
  return product.amazonPick === true;
}

const PRICE_CHECKED =
  "Approx. UK price, checked 3 Nov 2026. Amazon's live checkout may differ.";

export const catalog: Product[] = [
  {
    slug: "soundcore-q20i",
    name: "Soundcore Anker Q20i hybrid ANC foldable headphones",
    amazonPick: true,
    price: 31.99,
    category: "Audio",
    tagline: "Hybrid ANC over-ears. Foldable. Up to 40 hours with ANC on.",
    description:
      "Soundcore Anker Q20i hybrid active noise cancelling foldable headphones. Over-ear, black. Four built-in mics filter background noise in an office, on a train, or on a street — noise cancellation is not available in AUX mode. Wireless mode uses BassUp; the 3.5 mm jack unlocks Hi-Res audio. Up to 40 hours with ANC on; 5 minutes of charging gives 4 hours. Multipoint switches audio between phone and laptop. Transparency mode keeps announcements in. The free soundcore app adds AI translation between over 100 languages, EQ customisation, mode adjustment, and customised white noise. Listing overview: 16 Ohms, 20 kHz frequency response, 95 dB sensitivity, model Q20i. Approx. UK price is a snapshot from 25 Oct 2026 — Amazon’s live checkout may differ.",
    details: [
      "Hybrid ANC · transparency · four built-in mics (ANC off in AUX)",
      "Over-ear, foldable, black · 3.5 mm jack · BassUp / AUX Hi-Res",
      "Up to 40 hours with ANC on · 5 minutes charge → 4 hours listening",
      "Multipoint · soundcore app (EQ, modes, white noise, AI translation)",
      "16 Ohms · 20 kHz · 95 dB · model Q20i",
      "Amazon UK: 4.6 out of 5 stars (77,829 ratings), checked 25 Oct 2026",
    ],
    alNote:
      "Over-ear hybrid ANC for a packed train. I do not dropship Soundcore. Approx. UK price is on the card — Amazon’s live checkout may differ.",
    image: AMAZON_PRODUCT_IMAGES.soundcoreQ20i,
    brand: "Soundcore",
    asin: AMAZON_PICK_ASINS.soundcoreQ20i,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.soundcoreQ20i),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "omoton-75-iso-uk-keyboard",
    name: "OMOTON 75% ISO-UK Mechanical Keyboard",
    amazonPick: true,
    price: 69.99,
    category: "Desk",
    tagline: "75% ISO-UK layout. Tri-mode wireless. QMK/VIA.",
    description:
      "OMOTON Mechanical Keyboard Gaming 75% ISO-UK, tri-mode wireless, QMK/VIA. ISO-UK layout, UK legends, large Enter key. Hot-swappable, gasket mount, RGB backlit, 4000mAh battery, volume knob. In stock at £69.99 when checked, only 6 left, sold by OM-Treasure-EU, dispatched by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "ISO-UK layout · UK legends · large Enter key",
      "Tri-mode wireless",
      "QMK/VIA",
      "Hot-swappable · gasket mount · RGB backlit · 4000mAh battery · volume knob",
      "£69.99 · only 6 left when checked 3 Nov 2026",
    ],
    alNote:
      "This is the UK ISO board on the card. US-layout 75% boards are a different listing. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.omoton75,
    brand: "OMOTON",
    asin: AMAZON_PICK_ASINS.omoton75,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.omoton75),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "ugreen-65w-gan",
    name: "UGREEN 65W GaN Charger (2 USB-C, UK plug)",
    amazonPick: true,
    price: 22.99,
    category: "Power",
    tagline: "White 65W GaN. Two USB-C ports. UK 3-pin plug.",
    description:
      "UGREEN USB C Charger 65W Plug GaN 2C. White. Two USB-C ports, no USB-A. 65W max, and 65W total when charging both. UK 3-pin plug (BS 1363). The listing does not say the pins fold. In stock at £22.99 (RRP £29.99), dispatched by Amazon, sold by UGREEN GROUP LIMITED UK. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "65W GaN · 2× USB-C · no USB-A",
      "65W max · 65W total when charging both",
      "UK 3-pin plug (BS 1363). Listing does not say folding",
      "White · sold by UGREEN GROUP LIMITED UK · dispatched by Amazon",
      "£22.99 (RRP £29.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "Amazon UK affiliate pick. Al does not dropship it. Dual USB-C, UK plug, 65W total if both ports are in use. Approx. UK price is on the card. Amazon's live checkout may differ.",
    image: AMAZON_PRODUCT_IMAGES.ugreen65w,
    brand: "UGREEN",
    asin: AMAZON_PICK_ASINS.ugreen65w,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.ugreen65w),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "samsung-t7-ssd-2tb",
    name: "Samsung T7 Portable SSD 2TB",
    amazonPick: true,
    price: 316.17,
    category: "Storage",
    tagline: "Portable 2TB SSD. USB 3.0. Indigo blue.",
    description:
      "Samsung T7 Portable SSD in indigo-blue, 2 TB. The Amazon UK listing calls it a portable solid-state drive with a 2.5-inch form factor, USB 3.0 interface, and USB connectivity. Compatible devices listed: laptop, desktop, smartphone, and television. In the box: the portable SSD, USB Type-C to C and Type-A to A cables, and a user manual. Samsung’s brand comparison table on that page states a transfer speed of up to 1,050 MB/s; the feature bullets do not. Approx. UK price is a snapshot from 25 Oct 2026 — Amazon’s live checkout may differ.",
    details: [
      "2 TB portable SSD · indigo blue · 2.5-inch form factor",
      "USB 3.0 interface (listing overview) · USB connectivity",
      "Compatible: laptop, desktop, smartphone, television",
      "In the box: SSD, USB-C to C and USB-A to A cables, user manual",
      "Samsung-stated maximum: up to 1,050 MB/s (A+ comparison table only)",
      "Amazon UK: 4.7 out of 5 stars (41,012 ratings), checked 25 Oct 2026",
    ],
    alNote:
      "Cloud is fine until a tarmac has no signal. This is the 2TB T7 the affiliate link actually opens. Approx. UK price is on the card — Amazon’s live checkout may differ.",
    image: AMAZON_PRODUCT_IMAGES.samsungT7,
    brand: "Samsung",
    asin: AMAZON_PICK_ASINS.samsungT7,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.samsungT7),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "belkin-5000-magnetic-power-bank",
    name: "Belkin 5000mAh Magnetic Wireless Power Bank",
    amazonPick: true,
    price: 39.9,
    category: "Power",
    tagline: "5,000 mAh MagSafe-compatible puck. 7.5W wireless. Kickstand.",
    description:
      "Belkin 5000mAh Magnetic Wireless Power Bank, MagSafe-compatible, black. 7.5W wireless output, 10W input, USB-C, fold-out kickstand, pass-through charging. 5,000 mAh is about 18.5Wh at 3.7V (5,000 × 3.7 ÷ 1000), under the 100Wh cabin line. Listing had no buy box at check time; other offers from £46.82; check the live price. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "5,000 mAh · about 18.5Wh at 3.7V",
      "MagSafe-compatible wireless 7.5W · 10W input · USB-C",
      "Fold-out kickstand · pass-through charging · black",
      "Listing had no buy box at check time; other offers from £46.82; check the live price",
      "£39.90 listing snapshot, checked 3 Nov 2026",
    ],
    alNote:
      "Airline-safe capacity if you use the 3.7V sum: about 18.5Wh. Magnetic phones only for the snap. Listing had no buy box at check time; other offers from £46.82; check the live price. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.belkin5000,
    brand: "Belkin",
    asin: AMAZON_PICK_ASINS.belkin5000,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.belkin5000),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "anker-7-in-1-usb-c-hub",
    name: "Anker USB-C Hub, 7-in-1",
    amazonPick: true,
    price: 18.94,
    category: "Desk",
    tagline: "7-in-1 USB-C hub. 4K@60Hz HDMI. 85W max PD. Grey.",
    description:
      "Anker USB C Hub, 7-in-1. 4K@60Hz HDMI, 85W max PD, 2× USB 3.0 plus 1 USB-C data, SD/TF reader. Charger not included. Grey. 18-month warranty. In stock at £18.94 (RRP £24.99), AnkerDirect UK, dispatched by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "7-in-1 · 4K@60Hz HDMI · SD/TF reader",
      "2× USB 3.0 + 1 USB-C data",
      "85W max PD · charger not included",
      "Grey · 18-month warranty · AnkerDirect UK · dispatched by Amazon",
      "£18.94 (RRP £24.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A 7-in-1 stick, not a dual-monitor dock. 85W max PD, charger not in the box. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.anker7in1,
    brand: "Anker",
    asin: AMAZON_PICK_ASINS.anker7in1,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.anker7in1),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "benq-screenbar",
    name: "BenQ ScreenBar Monitor Light Bar",
    amazonPick: true,
    price: 89,
    category: "Desk",
    tagline: "Monitor light bar. Auto-dimming. 2700K-6500K. USB-powered.",
    description:
      "BenQ ScreenBar Monitor Light Bar. Auto dimming, glare-free, adjustable colour temperature, universal clamp, USB-powered. Clamp for 1-3 cm monitors. Touch control. 2700K-6500K, 230-955 lux. Aluminium, 800 g. In stock at £89.00, BenQ UK Webstore, dispatched by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Auto-dimming sensor · touch control",
      "2700K-6500K · 230-955 lux",
      "Clamp for 1-3 cm monitors · USB-powered",
      "Aluminium · 800 g · BenQ UK Webstore · dispatched by Amazon",
      "£89.00, in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A light bar that sits on the monitor, not a desk lamp. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.benqScreenbar,
    brand: "BenQ",
    asin: AMAZON_PICK_ASINS.benqScreenbar,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.benqScreenbar),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "soundcore-liberty-4-nc",
    name: "Anker Soundcore Liberty 4 NC adaptive ANC earbuds",
    amazonPick: true,
    price: 54.99,
    category: "Audio",
    tagline: "Adaptive ANC earbuds. Up to 98.5% noise reduction. IPX4.",
    description:
      "Anker Soundcore Liberty 4 NC adaptive noise cancelling wireless earbuds in velvet black. Adaptive ANC 2.0 adjusts to ear canals and the surroundings; the listing says the buds cancel up to 98.5% of noise. 11 mm custom-tuned drivers, Hi-Res wireless audio, and LDAC — the listing says that transfers 3× more data than regular Bluetooth. HearID 2.0 finds a sound profile; the EQ is fully adjustable, or pick from 22 presets. Battery: 10 hours per charge or 50 hours with the case in normal mode; 8 hours / 40 hours with ANC on. Bluetooth 5.3, multipoint, quick pairing with Android, and auto-play and pause on wear. IPX4 water-resistance for light rain or a spill. Six beamforming mics and an AI algorithm for calls. In the box: Liberty 4 NC, charging case (listing says it extends battery life up to 50 hours), pre-installed XS/S/M/L ear tips, and a USB-C charging cable. Listing overview: in-ear, 10 Ohms, 20 kHz, 102 dB, no jack, model A3947. Approx. UK price is a snapshot from 25 Oct 2026 — Amazon’s live checkout may differ.",
    details: [
      "Adaptive ANC 2.0 · listing says up to 98.5% noise reduction",
      "11 mm drivers · Hi-Res wireless · LDAC",
      "HearID 2.0 · fully adjustable EQ or 22 presets",
      "10 h / 50 h case (normal) · 8 h / 40 h with ANC",
      "Bluetooth 5.3 · multipoint · auto play/pause · IPX4",
      "6-mic AI calls · velvet black · in-ear · model A3947",
      "In the box: buds, case, XS/S/M/L tips, USB-C cable",
      "Amazon UK: 4.3 out of 5 stars (28,682 ratings), checked 25 Oct 2026",
    ],
    alNote:
      "Q20i if you sit. Liberty 4 NC if you walk. I do not dropship Soundcore. Approx. UK price is on the card — Amazon’s live checkout may differ.",
    image: AMAZON_PRODUCT_IMAGES.liberty4Nc,
    brand: "Soundcore",
    asin: AMAZON_PICK_ASINS.liberty4Nc,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.liberty4Nc),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "tomtoc-14-laptop-case",
    name: "tomtoc 360 Protective 14-inch Laptop Case",
    amazonPick: true,
    price: 27.99,
    category: "Carry",
    tagline: "Structured 14-inch case. 360 CornerArmor. Navy. Not a sleeve.",
    description:
      "tomtoc 360 Protective Laptop Case for 14-inch MacBook Pro. Also fits Dell XPS 14 and 13.8-inch Surface Laptop. Water-resistant. 360 CornerArmor, drop-tested. GRS recycled water-resistant fabric, YKK zips, front pocket and strap. Navy blue. It is a structured protective case, not a plain sleeve. In stock at £27.99, tomtoc EU Official, dispatched by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Structured 360 protective case for 14-inch MacBook Pro",
      "Also listed for Dell XPS 14 and 13.8-inch Surface Laptop",
      "360 CornerArmor, drop-tested · GRS recycled water-resistant fabric",
      "YKK zips · front pocket and strap · navy blue",
      "£27.99, in stock, tomtoc EU Official, dispatched by Amazon, checked 3 Nov 2026",
    ],
    alNote:
      "A structured case with a pocket, not a thin sleeve. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.tomtoc14,
    brand: "tomtoc",
    asin: AMAZON_PICK_ASINS.tomtoc14,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.tomtoc14),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "anker-100w-gan-charger",
    name: "Anker 100W USB-C GaN Charger",
    amazonPick: true,
    price: 59.89,
    category: "Power",
    tagline: "100W GaN, 3 ports, smart display, foldable plug.",
    description:
      "Anker 100W USB C Charger, 3-port GaN, smart display, touch control. USB-C cable included. 100W max, 2× USB-C + 1 USB-A, foldable plug 69×55×34 mm, 95W+5W mode, 18-month warranty, dark grey. List £59.89; Prime members £44.99 when checked. In stock, AnkerDirect UK. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "100W max · 2× USB-C + 1 USB-A",
      "Smart display · touch control · USB-C cable included",
      "Foldable plug 69×55×34 mm · 95W+5W mode · dark grey",
      "18-month warranty · AnkerDirect UK",
      "£59.89 list · Prime £44.99 when checked 3 Nov 2026",
    ],
    alNote:
      "One socket, three ports, a display. List price is on the card; Prime was lower when checked. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.anker100w,
    brand: "Anker",
    asin: AMAZON_PICK_ASINS.flightbrick100,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.flightbrick100),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "ugreen-laptop-stand",
    name: "UGREEN Laptop Stand",
    amazonPick: true,
    price: 13.94,
    category: "Desk",
    tagline: "Adjustable aluminium stand. Folds. Carry bag. 8-17.3 inch.",
    description:
      "UGREEN Laptop Stand for Desk, adjustable, portable aluminium, folding, with carry bag, for 8-17.3 inch laptops. Aluminium alloy, 5 height settings, scratch-resistant padding, silver. In stock at £13.94 (RRP £17.99), UGREEN GROUP LIMITED UK. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Adjustable aluminium stand · 5 height settings",
      "Folds · carry bag included",
      "For 8-17.3 inch laptops · scratch-resistant padding · silver",
      "UGREEN GROUP LIMITED UK",
      "£13.94 (RRP £17.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A fold-flat riser, not a standing desk. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.ugreenStand,
    brand: "UGREEN",
    asin: AMAZON_PICK_ASINS.runwayRiser,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.runwayRiser),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    amazonPick: true,
    price: 81,
    category: "Desk",
    tagline: "MX Master 3S, graphite. 8000 DPI. Quiet clicks. MagSpeed.",
    description:
      "Logitech MX Master 3S wireless mouse, Graphite. 8000 DPI, quiet clicks, MagSpeed scrolling, ergonomic. Bluetooth + USB-C. Logi Options+ / FLOW. In stock at £81.00. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "MX Master 3S · graphite",
      "8000 DPI · quiet clicks · MagSpeed scrolling · ergonomic",
      "Bluetooth + USB-C · Logi Options+ / FLOW",
      "£81.00, in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A work mouse, not a toy. Amazon UK affiliate pick. Al does not dropship Logitech. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.mxMaster3s,
    brand: "Logitech",
    asin: AMAZON_PICK_ASINS.cabinCursor,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.cabinCursor),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "anker-240w-right-angle-cable",
    name: "Anker 240W Right-Angle USB-C Cable, 2-pack",
    amazonPick: true,
    price: 18.99,
    category: "Power",
    tagline: "240W right-angle USB-C, 2-pack, 6 ft, braided.",
    description:
      "Anker USB C Cable Right Angle, 240W, 2-pack, 6 ft, braided. 90-degree connectors, 10,000+ bends, 24-month warranty. In stock at £18.99 (Prime £12.99), AnkerDirect UK. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "240W USB-C to USB-C · 2-pack · 6 ft each",
      "Right-angle / 90° connectors · braided",
      "10,000+ bends · 24-month warranty",
      "AnkerDirect UK",
      "£18.99 · Prime £12.99 when checked 3 Nov 2026",
    ],
    alNote:
      "A pair of right-angle leads. The brick cannot outrun a tired cable. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.anker240wCable,
    brand: "Anker",
    asin: AMAZON_PICK_ASINS.twinLead240,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.twinLead240),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "arzopa-z1fc-portable-monitor",
    name: "ARZOPA Z1FC 16.1-inch Portable Monitor",
    amazonPick: true,
    price: 119.99,
    category: "Desk",
    tagline: "16.1 inch FHD 144Hz. Matte. 2× USB-C + mini HDMI.",
    description:
      "ARZOPA 16.1-inch 144Hz Portable Gaming Monitor, FHD, 106% sRGB, HDR, ultra slim, Z1FC. 1920×1080, 144 Hz, matte, 2× USB-C + mini HDMI, dual speakers, black. In stock at £119.99 (Prime £99.99), ARZOPA Official Store. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "16.1 in FHD 1920×1080 · 144 Hz · Z1FC",
      "106% sRGB · HDR · matte · black",
      "2× USB-C + mini HDMI · dual speakers",
      "ARZOPA Official Store",
      "£119.99 · Prime £99.99 when checked 3 Nov 2026",
    ],
    alNote:
      "A backpack panel, not a desktop. Your USB-C port has to do video. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.arzopaZ1fc,
    brand: "ARZOPA",
    asin: AMAZON_PICK_ASINS.secondWindow16,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.secondWindow16),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "logitech-c920s-webcam",
    name: "Logitech C920S HD Pro Webcam",
    amazonPick: true,
    price: 50.99,
    category: "Desk",
    tagline: "1080p/30fps webcam. Privacy shutter. Dual stereo mics.",
    description:
      "Logitech C920S HD Pro Webcam, Full HD 1080p/30fps. Built-in privacy shutter, dual stereo mics, autofocus, black. It is a webcam, not a cover or clip. In stock at £50.99 (RRP £84.99), sold by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Logitech C920S HD Pro · 1080p/30fps webcam",
      "Built-in privacy shutter · dual stereo mics · autofocus",
      "Black · sold by Amazon",
      "£50.99 (RRP £84.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A webcam. Close the shutter when you leave. Amazon UK affiliate pick. Al does not dropship Logitech. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.c920s,
    brand: "Logitech",
    asin: AMAZON_PICK_ASINS.callLatch,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.callLatch),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "momax-70w-travel-adapter",
    name: "MOMAX 70W GaN Universal Travel Adapter",
    amazonPick: true,
    price: 29.98,
    category: "Power",
    tagline: "70W GaN world adapter. UK/EU/AU/US. Black.",
    description:
      "MOMAX Universal Travel Adapter 70W GaN, UK/EU/AU/US. Also listed for JP/CN sockets. 150+ countries. 7.7×5.5×5.3 cm, black. In stock at £29.98 (RRP £39.99), MOMAX GLOBAL. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "70W GaN · UK / EU / AU / US sockets (+JP/CN listed)",
      "150+ countries · 7.7×5.5×5.3 cm · black",
      "MOMAX GLOBAL",
      "£29.98 (RRP £39.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "The UK-plug bricks cover a UK socket. This one covers the socket in the other country. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.momax70w,
    brand: "MOMAX",
    asin: AMAZON_PICK_ASINS.worldBrick70,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.worldBrick70),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "ugreen-6-in-1-dual-monitor-dock",
    name: "UGREEN 6-in-1 Dual Monitor USB-C Dock",
    amazonPick: true,
    price: 29.99,
    category: "Desk",
    tagline: "Entry-level 6-in-1. Dual 4K@60Hz HDMI. 100W PD.",
    description:
      "UGREEN Laptop Docking Station Dual Monitor, 6-in-1 Dual 4K@60Hz USB C Hub. 2× HDMI (dual 4K@60Hz), 100W USB-C PD, 5Gbps USB-C data, 2× USB-A, space grey. Entry-level 6-in-1 hub. In stock at £29.99 (Prime £25.99), UGREEN GROUP LIMITED UK. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "6-in-1 USB-C hub · space grey",
      "2× HDMI · dual 4K@60Hz",
      "100W USB-C PD · 5Gbps USB-C data · 2× USB-A",
      "UGREEN GROUP LIMITED UK",
      "£29.99 · Prime £25.99 when checked 3 Nov 2026",
    ],
    alNote:
      "An entry-level dual-HDMI hub, not a thunderbolt dock. Confirm your laptop can drive two screens. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.ugreenDualDock,
    brand: "UGREEN",
    asin: AMAZON_PICK_ASINS.twinViewDock,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.twinViewDock),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "logitech-mx-keys-mini",
    name: "Logitech MX Keys Mini",
    amazonPick: true,
    price: 51.99,
    category: "Desk",
    tagline: "Compact backlit Bluetooth keyboard, graphite. Listing does not state the layout.",
    description:
      "Logitech MX Keys Mini Minimalist Wireless Illuminated Keyboard, Graphite. Bluetooth, compact, smart backlit keys, Easy-Switch, 29.6×13.2×2.1 cm. It is a keyboard, not a desk mat. The Amazon listing does not state the keyboard layout. Check the layout in the product photos and reviews before buying if you need UK keys. In stock at £51.99 (RRP £84.99), sold by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "MX Keys Mini · graphite · compact keyboard",
      "Bluetooth · smart backlit keys · Easy-Switch",
      "29.6×13.2×2.1 cm · sold by Amazon",
      "The Amazon listing does not state the keyboard layout. Check the layout in the product photos and reviews before buying if you need UK keys",
      "£51.99 (RRP £84.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A compact keyboard. The Amazon listing does not state the keyboard layout. Check the layout in the product photos and reviews before buying if you need UK keys. Amazon UK affiliate pick. Al does not dropship Logitech. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.mxKeysMini,
    brand: "Logitech",
    asin: AMAZON_PICK_ASINS.softDeckMini,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.softDeckMini),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "logitech-spotlight-remote",
    name: "Logitech Spotlight Presentation Remote",
    amazonPick: true,
    price: 55.93,
    category: "Desk",
    tagline: "Wireless presentation remote. Highlight and magnify. Grey.",
    description:
      "Logitech Spotlight Wireless Presentation Remote. Wireless, gyroscope cursor control, highlight and magnify, grey. It is a presentation remote, not a desk light. £55.93 (was £59.08). 7 left when checked, Quality Exchange LTD, dispatched by Amazon. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Logitech Spotlight · presentation remote · grey",
      "Wireless · gyroscope cursor control",
      "Highlight and magnify",
      "Quality Exchange LTD · dispatched by Amazon",
      "£55.93 (was £59.08) · 7 left when checked 3 Nov 2026",
    ],
    alNote:
      "A clicker for a slide, not a lamp for a desk. Amazon UK affiliate pick. Al does not dropship Logitech. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.spotlight,
    brand: "Logitech",
    asin: AMAZON_PICK_ASINS.spotCue,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.spotCue),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "logitech-desk-mat-studio",
    name: "Logitech Desk Mat, Studio Series",
    amazonPick: true,
    price: 14.91,
    category: "Desk",
    tagline: "30×70 cm Studio mat. Spill-repellent cloth. Grey.",
    description:
      "Logitech Desk Mat, Studio Series. Rubber base, 30×70 cm, 286 g, spill-repellent cloth surface, grey. In stock at £14.91 (RRP £16.99). This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Logitech Studio Series desk mat · grey",
      "30 × 70 cm · 286 g",
      "Spill-repellent cloth surface · rubber base",
      "£14.91 (RRP £16.99), in stock, checked 3 Nov 2026",
    ],
    alNote:
      "A mat. That is the whole job. Amazon UK affiliate pick. Al does not dropship Logitech. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.deskMatStudio,
    brand: "Logitech",
    asin: AMAZON_PICK_ASINS.fieldMat,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.fieldMat),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "anker-maggo-10000-power-bank",
    name: "Anker MagGo 10,000mAh Qi2 Power Bank",
    amazonPick: true,
    price: 67.99,
    category: "Power",
    tagline: "10,000 mAh Qi2. 15W wireless. Smart display. White.",
    description:
      "Anker MagGo Power Bank, 10,000mAh Qi2-certified, 15W max. USB-C, smart display, white. 10,000 mAh is about 37Wh at 3.7V (10,000 × 3.7 ÷ 1000). £67.99 (Prime £55.99; RRP £89.99). 2 left when checked. This is an Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    details: [
      "Anker MagGo · 10,000 mAh · about 37Wh at 3.7V",
      "Qi2-certified · 15W max wireless · USB-C",
      "Smart display · white",
      "£67.99 · Prime £55.99 · RRP £89.99 · 2 left when checked 3 Nov 2026",
    ],
    alNote:
      "Ten thousand milliamp-hours at 3.7V is about 37Wh. Amazon UK affiliate pick. Al does not dropship it. " +
      PRICE_CHECKED,
    image: AMAZON_PRODUCT_IMAGES.maggo10000,
    brand: "Anker",
    asin: AMAZON_PICK_ASINS.magDeck10,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.magDeck10),
    affiliateLabel: "Amazon UK",
  },
];

export function getProduct(slug: string) {
  const resolved = PRODUCT_SLUG_REDIRECTS[slug] ?? slug;
  return catalog.find((p) => p.slug === resolved);
}

export function featuredProducts() {
  return catalog.filter((p) => p.featured);
}

const STOP_TERMS = new Set(["the", "and", "for", "with", "from"]);

/** Extra search terms so chips like "Keyboards" hit catalog items without inventing SKUs. */
const PRODUCT_SEARCH_HINTS: Record<string, string> = {
  "omoton-75-iso-uk-keyboard": "keyboard keyboards mechanical keys iso uk qmk via omoton",
  "benq-screenbar": "monitor monitors light bar benq screenbar",
  "tomtoc-14-laptop-case": "laptop case sleeve bag tomtoc 14",
  "belkin-5000-magnetic-power-bank": "power bank puck magsafe magnetic belkin 5000",
  "ugreen-65w-gan": "charger chargers gan brick ugreen 65w usb-c",
  "anker-7-in-1-usb-c-hub": "usb-c hub dongle dock anker 7-in-1",
  "samsung-t7-ssd-2tb": "ssd storage samsung t7 portable",
  "soundcore-q20i": "headphones headset cans soundcore anker q20i anc",
  "soundcore-liberty-4-nc": "earbuds buds headphones soundcore anker liberty 4 nc",
  "anker-100w-gan-charger": "charger chargers gan brick 100w anker",
  "ugreen-laptop-stand": "laptop stand stands riser ugreen",
  "logitech-mx-master-3s": "mouse mice cursor logitech mx master",
  "anker-240w-right-angle-cable": "cable cables usb-c lead anker 240w",
  "arzopa-z1fc-portable-monitor": "monitor monitors portable screen arzopa z1fc",
  "logitech-c920s-webcam": "webcam webcams camera video call zoom logitech c920s",
  "momax-70w-travel-adapter": "travel adapter adapters plug charger chargers gan international momax",
  "ugreen-6-in-1-dual-monitor-dock": "dock docks hub usb-c hdmi dual monitor ugreen",
  "logitech-mx-keys-mini": "keyboard keyboards compact travel keys logitech mx keys mini",
  "logitech-spotlight-remote": "remote remotes presentation pointer clicker logitech spotlight",
  "logitech-desk-mat-studio": "desk mat mats mousepad pad logitech studio",
  "anker-maggo-10000-power-bank": "power bank magsafe qi2 magnetic charger anker maggo",
};

function queryTermGroups(query: string): string[][] {
  return query
    .toLowerCase()
    .split(/[\s,/]+/)
    .map((raw) => raw.replace(/[^a-z0-9+-]+/g, ""))
    .filter((term) => term.length > 1 && !STOP_TERMS.has(term))
    .map((term) => {
      const opts = new Set([term]);
      if (term === "mice") opts.add("mouse");
      if (term === "usbc") opts.add("usb-c");
      if (term === "usb-c" || term === "usbc") opts.add("usb");
      if (term.endsWith("s") && term.length > 3) opts.add(term.slice(0, -1));
      return [...opts];
    });
}

function catalogSearchHaystack(product: Product) {
  return [
    product.name,
    product.category,
    product.tagline,
    product.description,
    product.alNote,
    ...product.details,
    PRODUCT_SEARCH_HINTS[product.slug] ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

/** Client-side match on name, category, description, and a few search tags. */
export function matchCatalog(query: string): Product[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  const groups = queryTermGroups(needle);
  if (groups.length === 0) return [];
  return catalog.filter((product) => {
    const hay = catalogSearchHaystack(product);
    if (hay.includes(needle)) return true;
    return groups.every((opts) => opts.some((term) => hay.includes(term)));
  });
}

export const catalogDigest = catalog
  .map((p) => {
    const channel = `${formatProductPrice(p)} approx. Amazon UK affiliate pick. Delivery is Amazon's. Live Amazon checkout may differ`;
    return `${p.slug} | ${p.name} | ${p.category} | ${p.tagline} | ${channel} | affiliate ${p.affiliateLabel}: ${p.affiliateUrl}`;
  })
  .join("\n");
