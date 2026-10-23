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
      "Over-ear isolation or buds you can pocket? Al compares Pulse One and Ember Buds for trains, bikes, and offices — and when to jump Amazon UK instead.",
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
    relatedSlugs: ["arc-gan", "orbit-bank", "ember-buds", "nimbus-ssd"],
    affiliateSlug: "nimbus-ssd",
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
    relatedSlugs: ["arc-gan", "orbit-bank", "trace-hub"],
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
  return `${guide.title} | ${APP_NAME}`;
}

export function relatedProducts(guide: Guide) {
  return guide.relatedSlugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}
