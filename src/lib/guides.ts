import { getProduct } from "@/lib/catalog";
import { APP_NAME } from "@/lib/seo";

export type GuideFaq = { q: string; a: string };

export type GuideListItem = {
  name: string;
  description: string;
  /** Site path, e.g. /shop/second-window-16 */
  path?: string;
  /** Absolute official or retailer URL when there is no shop page. */
  url?: string;
  image?: string;
  brand?: string;
};

export type Guide = {
  slug: string;
  title: string;
  /** Visible H1 when it should differ from the document title. */
  heading?: string;
  /** Document title when it should differ from the card / index title. */
  metaTitle?: string;
  kicker: string;
  description: string;
  published: string;
  /** Visible + JSON-LD dateModified when the log was revised after publish. */
  updated?: string;
  faqs?: GuideFaq[];
  itemList?: {
    name: string;
    description?: string;
    items: GuideListItem[];
  };
  relatedSlugs: string[];
  affiliateSlug: string;
};

export const CAA_PACK_RIGHT =
  "https://www.caa.co.uk/air-passengers/about-your-trip/baggage/pack-right-safe-flight/";

export const AIRLINE_POWER_BANK_SOURCES = {
  ryanair: "https://help.ryanair.com/hc/en-gb/articles/12890774807569-What-items-are-permitted-on-board",
  easyjetRestricted: "https://www.easyjet.com/en/help/baggage/restricted-and-unusual-items",
  easyjetDangerous: "https://www.easyjet.com/en/terms-and-conditions/dangerous-goods",
  easyjetCheckin: "https://www.easyjet.com/en/checkin/dangerousgoods",
  ba: "https://www.britishairways.com/content/information/baggage-essentials/liquids-and-restrictions",
  jet2: "https://www.jet2.com/en/dangerous-goods",
} as const;

export type AirlinePowerBankRow = {
  airline: string;
  maxBanks: string;
  whLimit: string;
  whereOnBoard: string;
  rechargeBank: string;
  chargePhone: string;
  sources: { label: string; href: string }[];
};

/** Official-site rows. Unverified cells stay "Check with airline". */
export const AIRLINE_POWER_BANK_ROWS: AirlinePowerBankRow[] = [
  {
    airline: "Ryanair",
    maxBanks: "2 per passenger",
    whLimit: "100Wh, with no exceptions (nothing over 100Wh in cabin or hold)",
    whereOnBoard: "On you or in the under-seat bag. Not in overhead lockers",
    rechargeBank: "No",
    chargePhone: "Yes, except during taxi, take-off and landing, or when crew say no",
    sources: [{ label: "Ryanair Help Centre", href: AIRLINE_POWER_BANK_SOURCES.ryanair }],
  },
  {
    airline: "easyJet",
    maxBanks: "2 per customer",
    whLimit: "Up to 160Wh (easyJet gives automatic approval up to 160Wh)",
    whereOnBoard: "Cabin bags only. Ideally somewhere you can monitor it",
    rechargeBank: "No",
    chargePhone: "No",
    sources: [
      { label: "easyJet restricted items", href: AIRLINE_POWER_BANK_SOURCES.easyjetRestricted },
      { label: "easyJet dangerous goods", href: AIRLINE_POWER_BANK_SOURCES.easyjetDangerous },
      { label: "easyJet check-in dangerous goods", href: AIRLINE_POWER_BANK_SOURCES.easyjetCheckin },
    ],
  },
  {
    airline: "British Airways",
    maxBanks: "2 per person (within 4 spare batteries in total)",
    whLimit: "100Wh. Must display a capacity rating",
    whereOnBoard: "Seat pocket or a bag under the seat in front",
    rechargeBank: "No. Seat power is for your devices, not power banks",
    chargePhone: "Check with airline",
    sources: [{ label: "BA restricted items", href: AIRLINE_POWER_BANK_SOURCES.ba }],
  },
  {
    airline: "Jet2",
    maxBanks: "2 per person",
    whLimit: "Up to 160Wh (Jet2 gives automatic approval above 100Wh)",
    whereOnBoard: "Hand luggage, placed under your seat",
    rechargeBank: "No",
    chargePhone: "No",
    sources: [{ label: "Jet2 dangerous goods", href: AIRLINE_POWER_BANK_SOURCES.jet2 }],
  },
];

export const PACKING_POWER_FAQS: GuideFaq[] = [
  {
    q: "Is a 20,000mAh power bank allowed on a plane?",
    a: "Usually yes — in cabin / hand luggage only, never the hold. 20,000 mAh at 3.7V nominal is about 74Wh (Wh = mAh × V ÷ 1000), which sits under the CAA's 100Wh line. The CAA allows a maximum of two power banks per person. Always check the airline you booked.",
  },
  {
    q: "Can I put a power bank in hold luggage?",
    a: "No. The UK Civil Aviation Authority says always take power banks with you in the cabin. Never pack them in checked luggage.",
  },
  {
    q: "How many power banks can I take on a UK flight?",
    a: "The CAA says you can only take two power banks per person. They should never be recharged onboard the aircraft. Check your airline's own size and quantity limits as well.",
  },
  {
    q: "What do the 100Wh and 160Wh cabin limits mean?",
    a: "On the CAA pack-right page: under 100Wh is the common size for phones, laptops and cameras, and those should travel in the cabin. 100Wh to 160Wh needs airline approval. Over 160Wh is prohibited in passenger baggage.",
  },
  {
    q: "How do I convert mAh to Wh for airport security?",
    a: "The CAA formula is (V × mAh) ÷ 1000 = Wh. If the case does not print Wh, use the nominal cell voltage — typically 3.7V for lithium-ion — not the 5V USB output.",
  },
];

export const CAA_LITHIUM_RULES =
  "https://www.caa.co.uk/commercial-industry/airlines/dangerous-goods/changes-to-rules-on-the-carriage-of-lithium-cellsbatteries-and-power-banks/";

export const CAA_BATTERY_CHECKLIST =
  "https://www.caa.co.uk/newsroom/news/regulator-launches-lithium-battery-safety-checklist-ahead-of-busy-half-term-travel-period/";

export const CAA_PACKRIGHT_SHORT = "https://www.caa.co.uk/packright";

export const ONBOARD_POWER_BANK_SOURCES = {
  easyjet: "https://www.easyjet.com/en/help-centre/baggage/dangerous-goods",
  ryanair: "https://help.ryanair.com/hc/en-gb/sections/12503055461777-Permitted-Items-On-Board",
  ba: "https://www.britishairways.com/content/information/baggage-essentials/liquids-and-restrictions",
  virgin: "https://www.virginatlantic.com/policies/dangerous-or-restricted-items",
  jet2: "https://www.jet2.com/restricted-items",
  jet2News: "https://www.jet2.com/news/2026/08/Jet2_issues_important_reminder_to_customers_travelling_with_these_items_",
  tuiGroupPdf:
    "https://cdn.content.tuigroup.com/adamtui/2026_5/18_7/c369a17d-82a6-4868-b930-b44e007f21d5/ITEMS_ALLOWED_ON_BOARD_ED67_V2_MAY2026.pdf",
} as const;

export const ONBOARD_RULES_CHECKED = "Rules checked 26 Oct 2026";

export type OnboardPowerBankRow = {
  airline: string;
  maxBanks: string;
  whLimit: string;
  chargeDevices: string;
  rechargeBank: string;
  stowage: string;
  sources: { label: string; href: string }[];
  checked: string;
};

/** On-board use, official pages, 26 Oct 2026. Separate from the packing-power carry table. */
export const ONBOARD_POWER_BANK_ROWS: OnboardPowerBankRow[] = [
  {
    airline: "easyJet",
    maxBanks: "Not stated on the cited page. CAA default: two per person",
    whLimit:
      "easyJet’s page uses a 160Wh figure, which differs from the CAA’s 100Wh-without-approval wording. Read easyJet’s own page",
    chargeDevices: "No. “Power banks are prohibited from use on easyJet”",
    rechargeBank: "No",
    stowage: "Not stated on the cited page. CAA: keep it easily accessible",
    sources: [{ label: "easyJet dangerous goods", href: ONBOARD_POWER_BANK_SOURCES.easyjet }],
    checked: ONBOARD_RULES_CHECKED,
  },
  {
    airline: "Ryanair",
    maxBanks: "2 power banks",
    whLimit: "Max 100Wh",
    chargeDevices:
      "Yes, “except during taxi, take-off, and landing, or when instructed otherwise by the crew”",
    rechargeBank: "No, “at any time”",
    stowage: "On you or in the under-seat bag. Never overhead",
    sources: [{ label: "Ryanair permitted items", href: ONBOARD_POWER_BANK_SOURCES.ryanair }],
    checked: ONBOARD_RULES_CHECKED,
  },
  {
    airline: "British Airways",
    maxBanks: "Up to 2 power banks per person",
    whLimit: "Must not exceed 100Wh. Must display a capacity rating",
    chargeDevices:
      "Not stated by BA, so the CAA “should not” applies. Seat power is for devices, not power banks",
    rechargeBank: "No. Seat power is for PEDs, not power banks",
    stowage: "Seat pocket or a bag under the seat in front",
    sources: [{ label: "BA liquids and restrictions", href: ONBOARD_POWER_BANK_SOURCES.ba }],
    checked: ONBOARD_RULES_CHECKED,
  },
  {
    airline: "Virgin Atlantic",
    maxBanks: "Maximum of 2 power banks",
    whLimit: "The same use ban is printed on the ≤100Wh row and the 100–160Wh (approval) row",
    chargeDevices: "No. Cannot be used onboard to charge devices",
    rechargeBank: "No. Cannot be plugged in to the onboard power supply",
    stowage: "Accessible location. Not in the overhead lockers",
    sources: [{ label: "Virgin restricted items", href: ONBOARD_POWER_BANK_SOURCES.virgin }],
    checked: ONBOARD_RULES_CHECKED,
  },
  {
    airline: "Jet2",
    maxBanks: "Max 2 per person",
    whLimit:
      "Each ≤160Wh. Jet2 gives automatic operator approval above 100Wh, not exceeding 160Wh. No clear Wh rating: forbidden",
    chargeDevices: "No. Not to charge or power any device when onboard",
    rechargeBank: "No. Not to be charged whilst onboard",
    stowage: "Under the seat. Not in the overhead locker",
    sources: [
      { label: "Jet2 restricted items", href: ONBOARD_POWER_BANK_SOURCES.jet2 },
      { label: "Jet2 reminder (26 Aug 2026)", href: ONBOARD_POWER_BANK_SOURCES.jet2News },
    ],
    checked: ONBOARD_RULES_CHECKED,
  },
  {
    airline: "TUI",
    maxBanks: "No more than two per person",
    whLimit: "Must not exceed 100Wh",
    chargeDevices: "No. Cannot be used on board to charge other devices",
    rechargeBank: "No. Cannot be charged on board",
    stowage: "Under the seat in front, or the seat-back pocket, during any phase of flight",
    sources: [{ label: "TUI Group PDF (ED67 V2, May 2026)", href: ONBOARD_POWER_BANK_SOURCES.tuiGroupPdf }],
    checked: ONBOARD_RULES_CHECKED,
  },
];

export const ONBOARD_POWER_BANK_FAQS: GuideFaq[] = [
  {
    q: "Can I use a power bank on a plane in the UK?",
    a: "Usually not. You cannot recharge it on board, and the CAA says you should not use it to charge devices. A few airlines, such as Ryanair, allow device charging outside taxi, take-off and landing. Check yours first. The crew’s instruction is final.",
  },
  {
    q: "Can I use a power bank on an easyJet flight?",
    a: "No. You can carry one in the cabin, but easyJet’s page says power banks are prohibited from use. Never recharge the bank on board either.",
  },
  {
    q: "Can I charge my phone with a power bank on Ryanair?",
    a: "Yes, except during taxi, take-off and landing, or when the crew says otherwise. Never recharge the bank itself, at any time.",
  },
  {
    q: "Can I charge a power bank from the plane’s USB socket?",
    a: "No. UK rules say power banks must not be recharged on board. British Airways and Virgin Atlantic say this specifically about seat power.",
  },
  {
    q: "How many power banks can I take?",
    a: "Two per person under the CAA rules. Ryanair, BA, Virgin, Jet2 and TUI all state two as well. Always check the airline you booked.",
  },
  {
    q: "Why can’t power banks go in the overhead locker?",
    a: "So they stay accessible and a problem can be seen and dealt with quickly. Ryanair, BA, Virgin and Jet2 all require them to stay out of the overhead lockers.",
  },
  {
    q: "What should I do if my power bank gets hot or starts smoking on a flight?",
    a: "If it starts to get hot: switch it off, stop charging, and tell the cabin crew straight away. If it starts to smoke: tell the crew at once. They are trained to deal with the issue safely.",
  },
  {
    q: "Can I keep my power bank in my checked bag to be safe?",
    a: "No. Power banks must go in hand luggage. A CAA-commissioned survey found 31% of passengers still get this wrong. Cabin carriage is where any issue can be dealt with.",
  },
  {
    q: "Does this apply to MagSafe or wireless power banks?",
    a: "Yes. Any power bank counts. Magnetic or wireless does not change the CAA rules or the airline bans on use and recharge.",
  },
];

/** Manufacturer-verified portable-monitor rows. No UK prices. */
export const TRAVEL_DESK_MONITORS: GuideListItem[] = [
  {
    name: "Second Window 16 (ARZOPA Z1FC)",
    description:
      "16.1-inch FHD 1920×1080, 144Hz portable monitor. Official net weight 1.72 lb / 780g. USB-C can carry video and power on one cable when the laptop supports DisplayPort Alt Mode.",
    path: "/shop/second-window-16",
    image: "/products/second-window-16.jpg",
    brand: "ARZOPA",
  },
  {
    name: "ViewSonic TD1656-2K",
    description:
      "16-inch WQXGA 2560×1600 portable touch monitor. Official net weight 0.8 kg / 1.8 lb. Dual USB-C with up to 65W bidirectional power on a single cable when the source supports DP Alt Mode and USB-C PD.",
    url: "https://www.viewsonic.com/global/products/lcd/TD1656-2K",
    brand: "ViewSonic",
  },
  {
    name: "SideTrak Solo Pro 13",
    description:
      "Official Luxor Solo Pro 13-inch touchscreen listing (STFRHDTC13BL): 1920×1080 Full HD, 1.6 lb, USB-C and mini-HDMI, built-in kickstand.",
    url: "https://www.luxorworkspaces.com/solo-pro-fhd-touch-monitor-13-3-inch-black",
    brand: "SideTrak",
  },
];

export const guides: Guide[] = [
  {
    slug: "65w-gan-charger-travel",
    title: "How to pick a 65W GaN charger that actually travels",
    kicker: "Power",
    description:
      "Al's field notes on 65W GaN bricks for UK travel: dual USB-C, folding pins, heat, and when Amazon next-day beats a dropship from Dongguan.",
    published: "2026-09-23",
    relatedSlugs: ["arc-gan", "orbit-bank", "slip-sleeve"],
    affiliateSlug: "arc-gan",
  },
  {
    slug: "anc-headphones-vs-earbuds-commute",
    title: "ANC headphones vs earbuds for the commute",
    kicker: "Audio",
    description:
      "Over-ear isolation or buds you can pocket? Al compares Soundcore Q20i hybrid ANC headphones and Liberty 4 NC adaptive ANC earbuds for trains, bikes, and offices — and when to jump Amazon UK instead.",
    published: "2026-09-23",
    relatedSlugs: ["pulse-one", "ember-buds"],
    affiliateSlug: "pulse-one",
  },
  {
    slug: "dropship-lead-times",
    title: "What dropship lead times actually mean",
    kicker: "Ops",
    description:
      "Those 6–16 day windows are not courier promises. Al explains supplier batching, UK customs, and when an Amazon affiliate click is the honest buy.",
    published: "2026-09-23",
    relatedSlugs: ["arc-gan", "orbit-bank", "trace-hub", "slip-sleeve"],
    affiliateSlug: "arc-gan",
  },
  {
    slug: "packing-power",
    title: "What I'd pack for travel power",
    heading: "What I'd actually pack for travel power",
    kicker: "Power",
    description:
      "Anker, UGREEN, Belkin, and a hotel-desk hub — plus the CAA cabin rule: power banks in hand luggage only, max two, under 100Wh. Tagged Amazon UK picks.",
    published: "2026-09-23",
    updated: "2026-10-23",
    faqs: PACKING_POWER_FAQS,
    relatedSlugs: ["arc-gan", "orbit-bank", "trace-hub", "magdeck-10"],
    affiliateSlug: "arc-gan",
  },
  {
    slug: "travel-desk",
    title: "What I'd pack for a desk away from home",
    heading: "What I'd actually pack for a desk away from home",
    kicker: "Desk",
    description:
      "Honest Amazon UK travel-desk kit — 100W GaN, a fold-flat stand, a quiet mouse, high-watt leads, and a 16-inch USB-C portable monitor. Tagged links. No gimmicks.",
    published: "2026-09-24",
    updated: "2026-10-23",
    itemList: {
      name: "Portable monitors compared for a travel desk",
      description:
        "Second Window 16 (ARZOPA Z1FC) versus ViewSonic TD1656-2K and SideTrak Solo Pro 13. Specs from manufacturer pages. No UK prices.",
      items: TRAVEL_DESK_MONITORS,
    },
    relatedSlugs: [
      "flightbrick-100",
      "runway-riser",
      "cabin-cursor",
      "twin-lead-240",
      "second-window-16",
    ],
    affiliateSlug: "flightbrick-100",
  },
  {
    slug: "after-summer-desk-reset",
    title: "Summer's unpacked. Here's what stays on the desk.",
    kicker: "Desk",
    description:
      "Five bits of travel kit that earn their place once you're home: hub, laptop stand, mouse, portable monitor, 100W charger and cables, plus the power bank for the commute.",
    published: "2026-09-24",
    relatedSlugs: [
      "runway-riser",
      "cabin-cursor",
      "second-window-16",
      "flightbrick-100",
      "twin-lead-240",
    ],
    affiliateSlug: "runway-riser",
  },
  {
    slug: "travel-power-adapter-uk",
    title: "How to pick a travel power adapter that actually works from the UK",
    heading: "How to pick a world travel adapter from a UK bag",
    kicker: "Power",
    description:
      "UK pins, EU sockets, hotel desks: what a 70W world charger must do — and when WorldBrick 70 beats a pouch of plugs or a single-country GaN.",
    published: "2026-09-27",
    relatedSlugs: ["worldbrick-70", "flightbrick-100", "arc-gan", "twin-lead-240"],
    affiliateSlug: "worldbrick-70",
  },
  {
    slug: "usb-c-dock-dual-hdmi",
    title: "USB-C dock with dual HDMI: what actually works on the road",
    kicker: "Desk",
    description:
      "Two screens from one cable: what dual-HDMI USB-C docks get wrong, when TwinView Dock is the pack, and when a single-port hub or a portable panel is enough.",
    published: "2026-09-27",
    relatedSlugs: ["twinview-dock", "trace-hub", "second-window-16", "flightbrick-100"],
    affiliateSlug: "twinview-dock",
  },
  {
    slug: "webcam-for-video-calls",
    title: "How to pick a webcam that doesn't ruin the call",
    kicker: "Desk",
    description:
      "Laptop cams lie. Al's notes on 1080p clip-ons, shutters, light, and the compact desk kit around CallLatch for hotel and remote-work calls.",
    published: "2026-09-27",
    relatedSlugs: ["call-latch", "quietframe", "runway-riser", "softdeck-mini"],
    affiliateSlug: "call-latch",
  },
  {
    slug: "power-bank-hand-luggage-uk",
    title: "Can you take a power bank on a plane from the UK?",
    heading: "Power banks in UK hand luggage: what flies, what stays home",
    kicker: "Power",
    description:
      "Cabin bag, not the hold. CAA rules since 27 March 2026: two banks, no charging on board. How watt-hours work, Orbit Mag and MagDeck 10, and why you still check the airline.",
    published: "2026-10-12",
    relatedSlugs: ["orbit-bank", "magdeck-10", "flightbrick-100"],
    affiliateSlug: "magdeck-10",
  },
  {
    slug: "power-bank-on-plane-rules-uk",
    title: "Can you use a power bank on a plane? UK airline rules (2026)",
    heading: "Can you use a power bank on a plane? The 2026 UK rules, airline by airline",
    metaTitle: "Using a Power Bank on a Plane: 2026 UK Airline Rules",
    kicker: "Power",
    description:
      "Since March 2026 you can't recharge a power bank on board, and most UK airlines ban using one. Who allows it, where to stow it and what to do if it overheats.",
    published: "2026-10-26",
    faqs: ONBOARD_POWER_BANK_FAQS,
    relatedSlugs: ["magdeck-10", "flightbrick-100", "arc-gan"],
    affiliateSlug: "magdeck-10",
  },
  {
    slug: "portable-monitor-laptop-second-screen",
    title: "Portable monitors: a second screen for trains, hotels and the kitchen table",
    heading: "A second screen that fits a bag, not a desk",
    kicker: "Desk",
    description:
      "13–16 inch tradeoffs, USB-C video that actually works, HDMI fallback, and the kit around Second Window 16 for remote days that are not at a desk.",
    published: "2026-09-30",
    relatedSlugs: [
      "second-window-16",
      "runway-riser",
      "twin-lead-240",
      "cabin-cursor",
    ],
    affiliateSlug: "second-window-16",
  },
];

/** Old dated slugs that must 308 to the current evergreen path. */
export const GUIDE_SLUG_REDIRECTS: Record<string, string> = {
  "packing-power-september": "packing-power",
  "travel-desk-september": "travel-desk",
  "flight-legal-power-bank-prime-sale": "power-bank-hand-luggage-uk",
};

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function guideMetaTitle(guide: Guide) {
  return `${guide.metaTitle ?? guide.title} | ${APP_NAME}`;
}

export function relatedProducts(guide: Guide) {
  return guide.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}
