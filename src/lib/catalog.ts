export const AMAZON_ASSOCIATE_TAG = "alsaidropship-21";
const AMAZON_UK_DP = "https://www.amazon.co.uk/dp";
const AMAZON_UK_SEARCH = "https://www.amazon.co.uk/s";

/** Tagged Amazon UK product URL for a verified ASIN. */
export function affiliateProduct(asin: string) {
  return `${AMAZON_UK_DP}/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

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
} as const;

type ProductBase = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  details: string[];
  alNote: string;
  image: string;
  asin: string;
  affiliateUrl: string;
  affiliateLabel: string;
  featured?: boolean;
};

export type DropshipProduct = ProductBase & {
  amazonPick?: false;
  price: number;
  shipsFrom: string;
  etaDays: [number, number];
};

/** Amazon UK affiliate pick — not sold as dropship cargo, no on-site price. */
export type AmazonPickProduct = ProductBase & {
  amazonPick: true;
};

export type Product = DropshipProduct | AmazonPickProduct;

export function isAmazonPick(product: Product): product is AmazonPickProduct {
  return product.amazonPick === true;
}

export const catalog: Product[] = [
  {
    slug: "pulse-one",
    name: "Pulse One",
    price: 179,
    category: "Audio",
    tagline: "ANC headphones that stay quiet on a 14-hour charge.",
    description:
      "Closed-back wireless headphones with hybrid ANC and a fold-flat hinge. Tuned for voices first, then bass. The case is skipped on purpose — they hang, they travel, they do not need another brick in the bag.",
    details: [
      "Hybrid ANC, transparency mode",
      "40 mm drivers, USB-C + Bluetooth 5.3",
      "Up to 14 hours with ANC on",
      "Fold-flat, replaceable ear pads",
    ],
    alNote:
      "I ran these against three louder pairs. Pulse One wins on a plane. If you mix music for a living, look at the affiliate list instead.",
    shipsFrom: "Shenzhen",
    etaDays: [8, 14],
    image: "/products/pulse-one.jpg",
    asin: "B0C3HCD34R",
    affiliateUrl: affiliateProduct("B0C3HCD34R"),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "drift-75",
    name: "Drift 75",
    price: 149,
    category: "Desk",
    tagline: "A 75% board with a gasket mount and no RGB circus.",
    description:
      "Aluminum case, gasket mount, hot-swap. The layout keeps arrows and a function row without the numpad tax. Switches are pre-lubed. Lights stay off unless you insist.",
    details: [
      "75% gasket-mount aluminum",
      "Hot-swap sockets, south-facing",
      "USB-C, QMK/VIA",
      "Includes extra keycaps for Mac and Win",
    ],
    alNote:
      "This is the board I would actually put on a desk. If you want clicky and loud, the affiliate aisle has those. Drift is for typing.",
    shipsFrom: "Taipei",
    etaDays: [10, 16],
    image: "/products/drift-75.jpg",
    asin: "B0CQ7XPLMQ",
    affiliateUrl: affiliateProduct("B0CQ7XPLMQ"),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "arc-gan",
    name: "Arc 65W GaN",
    price: 42,
    category: "Power",
    tagline: "One brick. Laptop, phone, buds. Folding pins.",
    description:
      "A 65W GaN charger that is smaller than the cable it ships with. Two USB-C ports, PD 3.1, folding prongs. It does not get hot enough to be a story.",
    details: [
      "65W GaN, dual USB-C",
      "PD 3.1 / PPS",
      "Folding US pins, 100–240V",
      "1.5 m USB-C cable in the box",
    ],
    alNote:
      "Buy this if you still travel with two chargers. I checked the usual Amazon bricks — same silicon, louder logos. Arc is the one I dropship.",
    shipsFrom: "Dongguan",
    etaDays: [6, 11],
    image: "/products/arc-gan.jpg",
    asin: "B094JHYK55",
    affiliateUrl: affiliateProduct("B094JHYK55"),
    affiliateLabel: "Amazon UK",
    featured: true,
  },
  {
    slug: "nimbus-ssd",
    name: "Nimbus 2TB",
    price: 189,
    category: "Storage",
    tagline: "Pocket SSD. USB 3.2. No spinning, no drama.",
    description:
      "A 2TB NVMe enclosure that fits in a jacket pocket. Sequential reads around 1,050 MB/s. The sleeve is fabric, not plastic theater.",
    details: [
      "2TB NVMe, USB 3.2 Gen 2",
      "Up to 1,050 MB/s read",
      "Hardware encryption toggle",
      "Fabric sleeve included",
    ],
    alNote:
      "Cloud is fine until a tarmac has no signal. Nimbus is the backup I would actually pack. Shop the affiliate link if you need 4TB.",
    shipsFrom: "Seoul",
    etaDays: [7, 13],
    image: "/products/nimbus-ssd.jpg",
    asin: "B087DDGWKL",
    affiliateUrl: affiliateProduct("B087DDGWKL"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "orbit-bank",
    name: "Orbit Mag",
    price: 58,
    category: "Power",
    tagline: "Magnetic 5,000 mAh puck. Snaps. Charges. Leaves.",
    description:
      "A thin magnetic power bank for phones that still pretend they do not need cables. 5,000 mAh, 15W Mag-compatible, USB-C pass-through. It is a puck, not a brick.",
    details: [
      "5,000 mAh, 15W magnetic charge",
      "USB-C in/out",
      "Qi2-ready magnet array",
      "10.5 mm thick",
    ],
    alNote:
      "Airline-safe capacity. If your phone is not magnetic, skip this and take Arc instead.",
    shipsFrom: "Shenzhen",
    etaDays: [6, 12],
    image: "/products/orbit-bank.jpg",
    asin: "B0B6DLWMJF",
    affiliateUrl: affiliateProduct("B0B6DLWMJF"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "trace-hub",
    name: "Trace Hub",
    price: 64,
    category: "Desk",
    tagline: "Seven ports, one cable, HDMI that actually hits 4K60.",
    description:
      "A USB-C hub that does HDMI 4K60, two USB-A, two USB-C, SD, and PD passthrough up to 100W. Aluminum, not a melting dongle.",
    details: [
      "HDMI 4K60, SD / microSD",
      "2× USB-A, 2× USB-C",
      "100W PD passthrough",
      "1.2 m host cable",
    ],
    alNote:
      "Most hubs lie about 4K60. This one does not, on the two laptops I tested. Affiliate clones are cheaper and drop to 30 Hz.",
    shipsFrom: "Taipei",
    etaDays: [8, 13],
    image: "/products/trace-hub.jpg",
    asin: "B0DXJQT19B",
    affiliateUrl: affiliateProduct("B0DXJQT19B"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "quietframe",
    name: "QuietFrame",
    price: 72,
    category: "Desk",
    tagline: "A monitor light bar that does not bounce off the screen.",
    description:
      "Asymmetric LEDs that wash the desk and spare the panel. Stepless dimming, 3000–5000K, USB-C powered from the display or a hub.",
    details: [
      "Asymmetric optical design",
      "3000–5000K, stepless dim",
      "USB-C, 5V",
      "Fits 0.4–1.2 in bezels",
    ],
    alNote:
      "If your room has one overhead light, this is the upgrade. I would not pay flagship prices for the same diodes — check the affiliate pair if you want a name plate.",
    shipsFrom: "Hangzhou",
    etaDays: [9, 15],
    image: "/products/quietframe.jpg",
    asin: "B0785D93KD",
    affiliateUrl: affiliateProduct("B0785D93KD"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "ember-buds",
    name: "Ember Buds",
    price: 89,
    category: "Audio",
    tagline: "ANC buds, 28-hour case, tips that stay in.",
    description:
      "True wireless buds with ANC, IPX4, and a case that lasts a work week. Four tip sizes. Multipoint for a laptop and a phone.",
    details: [
      "ANC + transparency",
      "6 + 22 hours",
      "IPX4, USB-C case",
      "Multipoint Bluetooth 5.3",
    ],
    alNote:
      "Pulse One if you sit. Ember if you walk. I would not stack both unless you lose things for sport.",
    shipsFrom: "Shenzhen",
    etaDays: [7, 12],
    image: "/products/ember-buds.jpg",
    asin: "B0BZV4QFP8",
    affiliateUrl: affiliateProduct("B0BZV4QFP8"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "slip-sleeve",
    name: "Slip 14",
    price: 36,
    category: "Carry",
    tagline: "A 14-inch sleeve with a padded spine and one pocket.",
    description:
      "Technical fabric, 4 mm padding, a spine that takes a knock. One flat pocket for a charger. No branding patch.",
    details: [
      "Fits 13–14 in laptops",
      "Water-resistant shell",
      "Padded spine, YKK zip",
      "Interior stash pocket",
    ],
    alNote:
      "A sleeve is a sleeve. This one is thin enough to go inside a backpack. Affiliate neoprene is cheaper and pills in a month.",
    shipsFrom: "Ho Chi Minh City",
    etaDays: [8, 14],
    image: "/products/slip-sleeve.jpg",
    asin: "B0B4VG6XBP",
    affiliateUrl: affiliateProduct("B0B4VG6XBP"),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "flightbrick-100",
    name: "FlightBrick 100",
    amazonPick: true,
    category: "Power",
    tagline: "100W GaN, three ports, a live wattage display, folding UK pins.",
    description:
      "Anker’s 100W 3-port GaN brick with a smart display. Two USB-C, one USB-A, foldable Type-G pins, and a readout of what each port is actually pulling. USB-C cable in the box. This is an Amazon UK affiliate pick — Al does not dropship it.",
    details: [
      "100W GaN, 3 ports (2× USB-C + USB-A)",
      "Smart display / live wattage readout",
      "Foldable UK Type-G pins, 100–240V",
      "USB-C cable included · dark grey · B121B/A121B",
    ],
    alNote:
      "Hotel desks have one free socket. If you still travel with a 65W brick plus a phone cube, this is the step up. I do not invent the live price — tap the listing.",
    image: "/products/flightbrick-100.svg",
    asin: AMAZON_PICK_ASINS.flightbrick100,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.flightbrick100),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "runway-riser",
    name: "Runway Riser",
    amazonPick: true,
    category: "Desk",
    tagline: "Fold-flat aluminium stand. Raises the screen. Packs in a pouch.",
    description:
      "UGREEN’s adjustable aluminium laptop riser for café and hotel tables. Five height options, folds into a carry pouch, covers roughly 8–17.3 inch machines. Scratch-padded. Amazon UK affiliate — not dropship cargo.",
    details: [
      "Adjustable aluminium riser, five heights",
      "Folds flat into a carry pouch",
      "Fits 8–17.3 in laptops and tablets",
      "Scratch-padded · silver · model 40289",
    ],
    alNote:
      "Working flat on a table for eight hours is how trips get expensive in physio. Pair it with Drift if you already carry a separate board. Price lives on Amazon.",
    image: "/products/runway-riser.svg",
    asin: AMAZON_PICK_ASINS.runwayRiser,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.runwayRiser),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "cabin-cursor",
    name: "Cabin Cursor",
    amazonPick: true,
    category: "Desk",
    tagline: "MX Master 3S in graphite. Quiet clicks. Switches machines.",
    description:
      "Logitech MX Master 3S — the mouse that earns bag space on a long edit day. MagSpeed scrolling, quiet clicks for hotel calls, glass tracking, Easy-Switch across machines, USB-C and Bluetooth. Graphite. Affiliate listing only.",
    details: [
      "MX Master 3S · graphite · 910-006559",
      "Quiet clicks, MagSpeed scroll, 8K DPI",
      "Tracks on glass · Easy-Switch, up to 3 devices",
      "USB-C + Bluetooth · Windows, Linux, Chrome",
    ],
    alNote:
      "Trackpads survive short flights. Spreadsheets do not. I do not dropship Logitech. Shop the tagged UK listing and read the live stock.",
    image: "/products/cabin-cursor.svg",
    asin: AMAZON_PICK_ASINS.cabinCursor,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.cabinCursor),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "twin-lead-240",
    name: "Twin Lead 240",
    amazonPick: true,
    category: "Power",
    tagline: "240W-rated right-angle USB-C pair. Braided. Six feet each.",
    description:
      "Anker’s 240W USB-C to USB-C right-angle 2-pack. Braided 90-degree ends for tight laptop ports, cars, and hotel nightstands. Six feet each. A 100W brick with a tired 60W cable is cosplay. Amazon UK affiliate pick.",
    details: [
      "240W-rated USB-C to USB-C, 2-pack",
      "Right-angle / 90° ends, braided jacket",
      "6 ft each · model A81L6",
      "For MacBook, iPhone 15/16/17, iPad, Galaxy",
    ],
    alNote:
      "Pack a pair, leave one at the desk. Right-angle ends survive bag crush better than a straight lead yanked at the port. Check the live UK listing — I do not print a price.",
    image: "/products/twin-lead-240.svg",
    asin: AMAZON_PICK_ASINS.twinLead240,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.twinLead240),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "second-window-16",
    name: "Second Window 16",
    amazonPick: true,
    category: "Desk",
    tagline: "16.1 inch FHD 144Hz portable panel. USB-C. Kickstand. Backpackable.",
    description:
      "ARZOPA Z1FC — a 16.1 inch FHD 144Hz portable monitor for hotel desks and café dual-screen mode. 106% sRGB, HDR, USB-C plug-and-play or Mini HDMI, kickstand, slim enough to sit beside the laptop. Affiliate only. Al does not hold a panel.",
    details: [
      "16.1 in FHD 144Hz · Z1FC",
      "106% sRGB, HDR, eye-protection mode",
      "USB-C plug-and-play + Mini HDMI",
      "Kickstand · backpack-slim · ~1.7 lb class",
    ],
    alNote:
      "One laptop panel means Slack eating half the spreadsheet. Your machine needs a full-featured USB-C port for single-cable video. Sleeve the panel so it does not share scratches with the brick.",
    image: "/products/second-window-16.svg",
    asin: AMAZON_PICK_ASINS.secondWindow16,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.secondWindow16),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "call-latch",
    name: "CallLatch",
    amazonPick: true,
    category: "Carry",
    tagline: "1080p clip-on cam. Stereo mics. A shutter that actually closes.",
    description:
      "Logitech C920S HD Pro — a Full HD 1080p/30fps webcam with dual stereo mics, HD light correction, and a physical privacy shutter for hotel and café calls when the laptop cam is a joke. USB plug-and-play for Zoom, Skype, PC, Mac, and tablets. Amazon UK affiliate pick — Al does not dropship it.",
    details: [
      "Logitech C920S HD Pro · 1080p/30fps",
      "Clear stereo audio · HD light correction",
      "Physical privacy shutter",
      "USB · Zoom / Skype / PC / Mac · model 960-001252",
    ],
    alNote:
      "Laptop cams lie. Clip this on, close the shutter when you leave the desk. I do not invent the live UK price — tap the tagged listing.",
    image: "/products/call-latch.svg",
    asin: AMAZON_PICK_ASINS.callLatch,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.callLatch),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "worldbrick-70",
    name: "WorldBrick 70",
    amazonPick: true,
    category: "Power",
    tagline: "70W GaN world plug. UK, EU, AU, US pins. Five USB ports.",
    description:
      "MOMAX 70W GaN universal travel adapter — one brick with UK/EU/AU/US pins, three USB-C PD ports and two USB-A QC ports. Laptop and phones without a pouch of country plugs. It is an adapter, not a voltage converter. Amazon UK affiliate — not dropship cargo.",
    details: [
      "70W GaN · UK / EU / AU / US pins",
      "3× USB-C PD + 2× USB-A QC",
      "Laptop, tablet, phone, headset class loads",
      "Not a voltage converter · black · 1-World",
    ],
    alNote:
      "Arc and FlightBrick cover a UK socket. This one covers the socket in the other country. Pack it, leave the bag of plugs at home. Price lives on Amazon.",
    image: "/products/worldbrick-70.svg",
    asin: AMAZON_PICK_ASINS.worldBrick70,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.worldBrick70),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "twinview-dock",
    name: "TwinView Dock",
    amazonPick: true,
    category: "Desk",
    tagline: "One USB-C, two HDMI. Dual 4K60. 100W through the same cable.",
    description:
      "UGREEN Revodok 206 — a packable 6-in-1 dual-HDMI USB-C dock. Dual 4K@60Hz, single 8K, 100W Power Delivery, and three 5Gbps USB data ports. Trace Hub is a simple multiport stick; this is hotel dual-monitor mode. Windows can extend two desks; macOS typically mirrors both externals. Affiliate listing only.",
    details: [
      "UGREEN Revodok 206 · 6-in-1 USB-C dock",
      "2× HDMI · dual 4K@60Hz · single 8K",
      "100W Power Delivery passthrough",
      "3× 5Gbps USB data ports",
    ],
    alNote:
      "A basic hub is one screen. This is two. Confirm your laptop’s USB-C can drive dual display before you pack it as gospel. I do not print a price.",
    image: "/products/twinview-dock.svg",
    asin: AMAZON_PICK_ASINS.twinViewDock,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.twinViewDock),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "softdeck-mini",
    name: "SoftDeck Mini",
    amazonPick: true,
    category: "Desk",
    tagline: "MX Keys Mini, graphite, UK layout. Quiet. Fits a sleeve.",
    description:
      "Logitech MX Keys Mini — compact backlit Bluetooth keyboard in graphite with a QWERTY UK layout. USB-C, Easy-Switch across three devices, metal build. Drift 75 stays on the home desk; this one slides into a sleeve next to the laptop. Pairs cleanly with Cabin Cursor. Amazon UK affiliate — Al does not dropship Logitech.",
    details: [
      "MX Keys Mini · graphite · QWERTY UK",
      "Backlit, Bluetooth, USB-C",
      "Easy-Switch, up to 3 devices",
      "macOS, iOS, Windows, Linux, Android",
    ],
    alNote:
      "Hotel walls are thin. This board is quiet on purpose. I do not dropship it and I do not invent the live listing price.",
    image: "/products/softdeck-mini.svg",
    asin: AMAZON_PICK_ASINS.softDeckMini,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.softDeckMini),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "spotcue",
    name: "SpotCue",
    amazonPick: true,
    category: "Desk",
    tagline: "Digital highlight remote. 30-metre range. Timer that buzzes.",
    description:
      "Logitech Spotlight — a wireless presentation remote with digital highlight and magnify instead of a red laser that dies on LED walls. Dual connectivity (2.4 GHz USB receiver and Bluetooth), about 30-metre range, on-device timer with haptic cue. Grey. Client pitch kit. Affiliate only.",
    details: [
      "Logitech Spotlight · grey",
      "Digital highlight and magnify",
      "30-metre range · Bluetooth + USB receiver",
      "On-device timer with haptic cue · PC / Mac / iOS / Android",
    ],
    alNote:
      "A red laser is cosplay on a bright panel. This draws a circle the room can see. Shop the tagged UK listing and read the live stock.",
    image: "/products/spotcue.svg",
    asin: AMAZON_PICK_ASINS.spotCue,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.spotCue),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "fieldmat",
    name: "FieldMat",
    amazonPick: true,
    category: "Desk",
    tagline: "30×70 Studio mat. Spill-resistant. Quiet glide. Packs flat.",
    description:
      "Logitech Studio Series desk mat in grey — a multifunctional 30×70 cm pad with an anti-slip base and a spill-resistant surface. Grounds Cabin Cursor and SoftDeck Mini on a sticky hotel desk without a permanent setup. Amazon UK affiliate pick. Al does not hold mats.",
    details: [
      "Logitech Studio Series desk mat · grey",
      "About 30 × 70 cm extended pad",
      "Spill-resistant surface · anti-slip base",
      "Quiet mouse glide · packs flat",
    ],
    alNote:
      "Hotel laminate is loud and sticky. This is the cheap desk upgrade that folds into a sleeve. Check the live UK listing — I do not print a price.",
    image: "/products/fieldmat.svg",
    asin: AMAZON_PICK_ASINS.fieldMat,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.fieldMat),
    affiliateLabel: "Amazon UK",
  },
  {
    slug: "magdeck-10",
    name: "MagDeck 10",
    amazonPick: true,
    category: "Power",
    tagline: "10K Qi2 MagGo. Snap. Charge. Kickstand FaceTime.",
    description:
      "Anker MagGo 10,000 mAh Qi2-certified 15W MagSafe-compatible power bank with a smart display, foldable stand, and a USB-C cable in the box. Orbit Mag is the 5,000 mAh day puck; this is the bigger travel bank for iPhone 13 / 14 / 15 / 16. Amazon UK affiliate — not dropship cargo.",
    details: [
      "Anker MagGo · 10,000 mAh · Qi2 15W",
      "MagSafe-compatible · smart display",
      "Foldable stand · USB-C cable included",
      "iPhone 13 / 14 / 15 / 16 MagSafe series",
    ],
    alNote:
      "Orbit Mag covers a day. MagDeck 10 covers the day you miss the socket. Snap it, read the display, prop FaceTime. Price lives on the tagged listing.",
    image: "/products/magdeck-10.svg",
    asin: AMAZON_PICK_ASINS.magDeck10,
    affiliateUrl: affiliateProduct(AMAZON_PICK_ASINS.magDeck10),
    affiliateLabel: "Amazon UK",
  },
];

export function getProduct(slug: string) {
  return catalog.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return catalog.filter((p) => p.featured);
}

const STOP_TERMS = new Set(["the", "and", "for", "with", "from"]);

/** Extra search terms so chips like "Keyboards" hit Drift without inventing SKUs. */
const PRODUCT_SEARCH_HINTS: Record<string, string> = {
  "drift-75": "keyboard keyboards mechanical keys",
  "quietframe": "monitor monitors light bar",
  "slip-sleeve": "laptop sleeve case",
  "orbit-bank": "power bank puck",
  "arc-gan": "charger chargers gan brick",
  "trace-hub": "usb-c hub dongle dock",
  "pulse-one": "headphones headset cans",
  "ember-buds": "earbuds buds headphones",
  "flightbrick-100": "charger chargers gan brick 100w",
  "runway-riser": "laptop stand stands riser",
  "cabin-cursor": "mouse mice cursor",
  "twin-lead-240": "cable cables usb-c lead",
  "second-window-16": "monitor monitors portable screen",
  "call-latch": "webcam webcams camera video call zoom",
  "worldbrick-70": "travel adapter adapters plug charger chargers gan international",
  "twinview-dock": "dock docks hub usb-c hdmi dual monitor",
  "softdeck-mini": "keyboard keyboards compact travel keys",
  "spotcue": "remote remotes presentation pointer clicker",
  "fieldmat": "desk mat mats mousepad pad",
  "magdeck-10": "power bank magsafe qi2 magnetic charger",
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
    const channel = isAmazonPick(p)
      ? "Amazon UK affiliate pick — not dropshipped, no on-site price"
      : `$${p.price} | dropship from ${p.shipsFrom} in ${p.etaDays[0]}-${p.etaDays[1]} days`;
    return `${p.slug} | ${p.name} | ${p.category} | ${p.tagline} | ${channel} | affiliate ${p.affiliateLabel}: ${p.affiliateUrl}`;
  })
  .join("\n");
