export const AMAZON_ASSOCIATE_TAG = "alsaidropship-21";
const AMAZON_UK_DP = "https://www.amazon.co.uk/dp";
const AMAZON_UK_SEARCH = "https://www.amazon.co.uk/s";

/** Tagged Amazon UK product URL for a verified ASIN. */
export function affiliateProduct(asin: string) {
  return `${AMAZON_UK_DP}/${asin}?tag=${AMAZON_ASSOCIATE_TAG}`;
}

/** Tagged Amazon UK search URL for a product category. */
export function affiliateSearch(query: string) {
  const params = new URLSearchParams({
    k: query,
    tag: AMAZON_ASSOCIATE_TAG,
  });
  return `${AMAZON_UK_SEARCH}?${params.toString()}`;
}

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
];

export function getProduct(slug: string) {
  return catalog.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return catalog.filter((p) => p.featured);
}

export const catalogDigest = catalog
  .map((p) => {
    const channel = isAmazonPick(p)
      ? "Amazon UK affiliate pick — not dropshipped, no on-site price"
      : `$${p.price} | dropship from ${p.shipsFrom} in ${p.etaDays[0]}-${p.etaDays[1]} days`;
    return `${p.slug} | ${p.name} | ${p.category} | ${p.tagline} | ${channel} | affiliate ${p.affiliateLabel}: ${p.affiliateUrl}`;
  })
  .join("\n");
