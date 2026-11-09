import { AMAZON_PRODUCT_IMAGES, getProduct } from "@/lib/catalog";
import { APP_NAME } from "@/lib/seo";

export type GuideFaq = { q: string; a: string };

export type GuideListItem = {
  name: string;
  description: string;
  /** Site path, e.g. /shop/arzopa-z1fc-portable-monitor */
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
  {
    q: "What's the biggest power bank I can take in hand luggage in the UK?",
    a: "Anything under 100Wh with no approval, up to two per person per the CAA. That is about 27,000mAh. The ALOGIC Ark at 97.2Wh is at the top.",
  },
  {
    q: "Is a 25,000mAh power bank allowed on a plane?",
    a: "Usually yes: about 92.5Wh at 3.7V, under 100Wh. Use the Wh printed on the case.",
  },
];

export const CAA_LITHIUM_RULES =
  "https://www.caa.co.uk/commercial-industry/airlines/dangerous-goods/changes-to-rules-on-the-carriage-of-lithium-cellsbatteries-and-power-banks/";

export const CAA_BATTERY_CHECKLIST =
  "https://www.caa.co.uk/newsroom/news/regulator-launches-lithium-battery-safety-checklist-ahead-of-busy-half-term-travel-period/";

export const CAA_PACKRIGHT_SHORT = "https://www.caa.co.uk/packright";

export const CAA_CHRISTMAS_PACKING =
  "https://www.caa.co.uk/newsroom/news/pack-safe-to-fly-safe-regulator-issues-christmas-travel-advice-as-record-numbers-take-to-the-skies/";

export const CAA_FESTIVE_PACKING =
  "https://www.caa.co.uk/newsroom/news/regulator-warns-consumers-not-to-fall-foul-of-packing-rules-this-festive-season/";

export const GOV_UK_HAND_LUGGAGE = "https://www.gov.uk/hand-luggage-restrictions";

export const GOV_UK_ELECTRONIC_DEVICES =
  "https://www.gov.uk/hand-luggage-restrictions/electronic-devices-and-electrical-items";

export const GOV_UK_PERSONAL_ITEMS =
  "https://www.gov.uk/hand-luggage-restrictions/personal-items";

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
    a: "Two per person under the CAA rules. The limit is two power banks per passenger, not per bag, and it applies in the cabin; airlines can be stricter. Ryanair, BA, Virgin, Jet2 and TUI all state two as well. Always check the airline you booked.",
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

export const CHRISTMAS_TECH_GIFT_FAQS: GuideFaq[] = [
  {
    q: "Can I take wrapped Christmas presents through UK airport security?",
    a: "The CAA’s Christmas packing advice is to leave presents unwrapped, because they may need to be inspected at security. gov.uk hand-luggage pages do not set a wrapping rule. A wrapped gadget still has to follow lithium and hand-luggage rules. Check your airline.",
  },
  {
    q: "Can I pack a gifted power bank in hold luggage?",
    a: "No. The CAA says power banks must travel in the cabin, never checked luggage, and you can only take two per person. They must not be recharged on board. Check the airline you booked.",
  },
  {
    q: "How many power banks can I take from a UK airport?",
    a: "Two per person under the CAA rules in force since 27 March 2026. Under 100Wh needs no airline approval. 100Wh to 160Wh needs the airline’s approval. Over 160Wh is not allowed in passenger baggage.",
  },
  {
    q: "Can a laptop or tablet Christmas gift go in checked luggage?",
    a: "gov.uk allows phones, laptops and tablets in hand or hold luggage. The CAA says they should normally travel in the cabin; if they go in a checked bag they must be completely switched off — not standby or airplane mode — and protected from damage. Check your airline.",
  },
  {
    q: "Can spare gadget batteries go in the hold?",
    a: "No. The CAA packing advice is to take spare batteries, vapes, e-cigarettes and power banks in the cabin, and to protect spare batteries from damage. If your cabin bag is taken to the hold before boarding, take the batteries and lithium devices out first.",
  },
  {
    q: "Can I take an e-cigarette or vape gift on a UK flight?",
    a: "In the cabin only. gov.uk allows e-cigarettes in hand luggage and not in the hold. The CAA says always carry vapes with you in the cabin and never vape on board.",
  },
  {
    q: "Do new gadgets need to be charged for airport security?",
    a: "Yes. gov.uk says make sure electronic devices are charged before you travel. If a device does not switch on when requested, you will not be allowed to take it onto the aircraft.",
  },
  {
    q: "Can I recharge a power bank on the flight home?",
    a: "No. The CAA says power banks should never be recharged onboard. Using one to charge a phone is advised against unless your airline says yes. Check the airline, then the crew.",
  },
];

export const PORTABLE_MONITOR_SOURCES = {
  z1fc: "https://www.arzopa.com/products/arzopa-z1fc-gray-144hz-portable-gaming-monitor-16-1-screen",
  amazonUk: "https://www.amazon.co.uk/dp/B0CJCBQYDY",
  msiSpec: "https://us.msi.com/Portable-Monitor/PRO-MP161-E2U/Specification",
  msiUk: "https://uk.msi.com/Portable-Monitor/PRO-MP161-E2U/Overview",
  asus: "https://www.asus.com/uk/displays-desktops/monitors/zenscreen/asus-zenscreen-mb16ahv/techspec/",
  lenovo: "https://psref.lenovo.com/syspool/Sys/PDF/ThinkVision/ThinkVision_M14/ThinkVision_M14_Spec.pdf",
  z1rc: "https://www.arzopa.com/products/z1rc-2k-portable-monitor",
  z1fcVsZ1rc: "https://www.arzopa.com/blogs/guide/arzopa-z1fc-vs-z1rc",
  wirecutter: "https://www.nytimes.com/wirecutter/reviews/best-portable-monitor/",
} as const;

export const PORTABLE_MONITOR_FAQS: GuideFaq[] = [
  {
    q: "What is the best portable monitor for travel in the UK?",
    a: "For most bags, the Arzopa Z1FC. Wirecutter's review recommends it; it is the panel I would pack on this site. If you need lighter than 600g and can live without HDMI, look at the Lenovo ThinkVision M14 instead.",
  },
  {
    q: "Does a portable monitor need its own charger?",
    a: "Often no. One full-featured USB-C cable can carry video and power when the laptop's USB-C port does DisplayPort Alt Mode and supplies enough watts. HDMI is picture only - then the panel wants a second USB-C into a brick or a power bank.",
  },
  {
    q: "Z1FC or Z1RC for a second screen on trains and hotel desks?",
    a: "Z1FC if you want 144Hz and the travel or gaming pick. Z1RC if the work is code, sheets, or long documents and you want the taller 16:10 2.5K panel. Same bag class either way.",
  },
];

/** Manufacturer-verified portable-monitor rows. No UK prices. */
export const TRAVEL_DESK_MONITORS: GuideListItem[] = [
  {
    name: "ARZOPA Z1FC",
    description:
      "16.1-inch FHD 1920×1080, 144Hz portable monitor. Official net weight 1.72 lb / 780g. USB-C can carry video and power on one cable when the laptop supports DisplayPort Alt Mode.",
    path: "/shop/arzopa-z1fc-portable-monitor",
    image: AMAZON_PRODUCT_IMAGES.arzopaZ1fc,
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
      "Al's field notes on 65W GaN bricks for UK travel: dual USB-C, a UK 3-pin plug, heat, and the UGREEN Amazon UK pick versus a 100W folding brick.",
    published: "2026-09-23",
    updated: "2026-11-03",
    relatedSlugs: ["ugreen-65w-gan", "belkin-5000-magnetic-power-bank", "tomtoc-14-laptop-case"],
    affiliateSlug: "ugreen-65w-gan",
  },
  {
    slug: "anc-headphones-vs-earbuds-commute",
    title: "ANC headphones vs earbuds for the commute",
    kicker: "Audio",
    description:
      "Over-ear isolation or buds you can pocket? Al compares Soundcore Q20i hybrid ANC headphones and Liberty 4 NC adaptive ANC earbuds for trains, bikes, and offices, and when to jump Amazon UK instead.",
    published: "2026-09-23",
    updated: "2026-11-03",
    relatedSlugs: ["soundcore-q20i", "soundcore-liberty-4-nc"],
    affiliateSlug: "soundcore-q20i",
  },
  {
    slug: "dropship-lead-times",
    title: "How long does Amazon UK delivery take?",
    kicker: "Ops",
    description:
      "Every card is an Amazon UK affiliate pick. Delivery is Amazon's, and it varies. Al does not pack or ship.",
    published: "2026-09-23",
    updated: "2026-11-03",
    relatedSlugs: ["ugreen-65w-gan", "belkin-5000-magnetic-power-bank", "anker-7-in-1-usb-c-hub", "tomtoc-14-laptop-case"],
    affiliateSlug: "ugreen-65w-gan",
  },
  {
    slug: "packing-power",
    title: "What I'd pack for travel power",
    heading: "What I'd actually pack for travel power",
    kicker: "Power",
    description:
      "Anker, UGREEN, Belkin, and a hotel-desk hub — plus the CAA cabin rule: power banks in hand luggage only, max two, under 100Wh. Tagged Amazon UK picks.",
    published: "2026-09-23",
    updated: "2026-11-03",
    faqs: PACKING_POWER_FAQS,
    relatedSlugs: ["ugreen-65w-gan", "belkin-5000-magnetic-power-bank", "anker-7-in-1-usb-c-hub", "anker-maggo-10000-power-bank"],
    affiliateSlug: "ugreen-65w-gan",
  },
  {
    slug: "travel-desk",
    title: "What I'd pack for a desk away from home",
    heading: "What I'd actually pack for a desk away from home",
    kicker: "Desk",
    description:
      "Honest Amazon UK travel-desk kit — 100W GaN, a fold-flat stand, a quiet mouse, high-watt leads, and a 16-inch USB-C portable monitor. Tagged links. No gimmicks.",
    published: "2026-09-24",
    updated: "2026-11-03",
    itemList: {
      name: "Portable monitors compared for a travel desk",
      description:
        "ARZOPA Z1FC versus ViewSonic TD1656-2K and SideTrak Solo Pro 13. Specs from manufacturer pages. No UK prices.",
      items: TRAVEL_DESK_MONITORS,
    },
    relatedSlugs: [
      "anker-100w-gan-charger",
      "ugreen-laptop-stand",
      "logitech-mx-master-3s",
      "anker-240w-right-angle-cable",
      "arzopa-z1fc-portable-monitor",
    ],
    affiliateSlug: "anker-100w-gan-charger",
  },
  {
    slug: "after-summer-desk-reset",
    title: "Summer's unpacked. Here's what stays on the desk.",
    kicker: "Desk",
    description:
      "Five bits of travel kit that earn their place once you're home: hub, laptop stand, mouse, portable monitor, 100W charger and cables, plus the power bank for the commute.",
    published: "2026-09-24",
    updated: "2026-11-03",
    relatedSlugs: [
      "ugreen-laptop-stand",
      "logitech-mx-master-3s",
      "arzopa-z1fc-portable-monitor",
      "anker-100w-gan-charger",
      "anker-240w-right-angle-cable",
    ],
    affiliateSlug: "ugreen-laptop-stand",
  },
  {
    slug: "travel-power-adapter-uk",
    title: "How to pick a travel power adapter that actually works from the UK",
    heading: "How to pick a world travel adapter from a UK bag",
    kicker: "Power",
    description:
      "UK pins, EU sockets, hotel desks: what a 70W world charger must do, and when the MOMAX 70W adapter beats a pouch of plugs or a single-country GaN.",
    published: "2026-09-27",
    updated: "2026-11-03",
    relatedSlugs: ["momax-70w-travel-adapter", "anker-100w-gan-charger", "ugreen-65w-gan", "anker-240w-right-angle-cable"],
    affiliateSlug: "momax-70w-travel-adapter",
  },
  {
    slug: "usb-c-dock-dual-hdmi",
    title: "USB-C dock with dual HDMI: what actually works on the road",
    kicker: "Desk",
    description:
      "Two screens from one cable: what dual-HDMI USB-C docks get wrong, when the UGREEN 6-in-1 is the pack, and when a single-port hub or a portable panel is enough.",
    published: "2026-09-27",
    updated: "2026-11-03",
    relatedSlugs: ["ugreen-6-in-1-dual-monitor-dock", "anker-7-in-1-usb-c-hub", "arzopa-z1fc-portable-monitor", "anker-100w-gan-charger"],
    affiliateSlug: "ugreen-6-in-1-dual-monitor-dock",
  },
  {
    slug: "webcam-for-video-calls",
    title: "How to pick a webcam that doesn't ruin the call",
    kicker: "Desk",
    description:
      "Laptop cams lie. Al's notes on 1080p webcams, shutters, light, and the compact desk kit around the Logitech C920S for hotel and remote-work calls.",
    published: "2026-09-27",
    updated: "2026-11-03",
    relatedSlugs: ["logitech-c920s-webcam", "benq-screenbar", "ugreen-laptop-stand", "logitech-mx-keys-mini"],
    affiliateSlug: "logitech-c920s-webcam",
  },
  {
    slug: "power-bank-hand-luggage-uk",
    title: "Can you take a power bank on a plane from the UK?",
    heading: "Power banks in UK hand luggage: what flies, what stays home",
    kicker: "Power",
    description:
      "Cabin bag, not the hold. CAA rules since 27 March 2026: two banks, no charging on board. How watt-hours work, the Belkin 5000mAh and Anker MagGo 10,000mAh, and why you still check the airline.",
    published: "2026-10-12",
    updated: "2026-11-03",
    relatedSlugs: ["belkin-5000-magnetic-power-bank", "anker-maggo-10000-power-bank", "anker-100w-gan-charger"],
    affiliateSlug: "anker-maggo-10000-power-bank",
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
    updated: "2026-11-03",
    faqs: ONBOARD_POWER_BANK_FAQS,
    relatedSlugs: ["anker-maggo-10000-power-bank", "anker-100w-gan-charger", "ugreen-65w-gan"],
    affiliateSlug: "anker-maggo-10000-power-bank",
  },
  {
    slug: "flying-christmas-tech-gifts-uk",
    title: "Flying from the UK at Christmas with tech gifts",
    heading: "Flying from the UK at Christmas with tech gifts: wrapping, security and lithium batteries",
    metaTitle: "Flying from the UK at Christmas with Tech Gifts: Wrapping and Lithium Rules",
    kicker: "Power",
    description:
      "Leave presents unwrapped for security. Power banks cabin only, max two per person since 27 March 2026. Devices in the hold fully off. Sourced from the CAA and gov.uk. Check your airline.",
    published: "2026-11-09",
    faqs: CHRISTMAS_TECH_GIFT_FAQS,
    relatedSlugs: ["anker-maggo-10000-power-bank", "belkin-5000-magnetic-power-bank", "anker-100w-gan-charger"],
    affiliateSlug: "anker-maggo-10000-power-bank",
  },
  {
    slug: "portable-monitor-laptop-second-screen",
    title: "Portable monitors: a second screen for trains, hotels and the kitchen table",
    heading: "A second screen that fits a bag, not a desk",
    kicker: "Desk",
    description:
      "13-16 inch tradeoffs, USB-C video that actually works, HDMI fallback, and the kit around the ARZOPA Z1FC for remote days that are not at a desk.",
    published: "2026-09-30",
    updated: "2026-11-09",
    faqs: PORTABLE_MONITOR_FAQS,
    relatedSlugs: [
      "arzopa-z1fc-portable-monitor",
      "ugreen-laptop-stand",
      "anker-240w-right-angle-cable",
      "logitech-mx-master-3s",
    ],
    affiliateSlug: "arzopa-z1fc-portable-monitor",
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
