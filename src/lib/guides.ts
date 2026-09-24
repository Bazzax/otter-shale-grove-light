import { getProduct } from "@/lib/catalog";
import { APP_NAME } from "@/lib/seo";

export type Guide = {
  slug: string;
  title: string;
  /** Visible H1 when it should differ from the document title. */
  heading?: string;
  kicker: string;
  description: string;
  published: string;
  relatedSlugs: string[];
  affiliateSlug: string;
};

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
    slug: "packing-power-september",
    title: "What I'd pack for power this month",
    heading: "What I'd actually pack for power this month",
    kicker: "Power",
    description:
      "Anker, UGREEN, Belkin, and a hotel-desk hub — tagged Amazon UK picks that match how people actually travel right now.",
    published: "2026-09-23",
    relatedSlugs: ["arc-gan", "orbit-bank", "trace-hub"],
    affiliateSlug: "arc-gan",
  },
  {
    slug: "travel-desk-september",
    title: "What I'd pack for a desk away from home",
    heading: "What I'd actually pack for a desk away from home",
    kicker: "Desk",
    description:
      "Honest Amazon UK travel-desk kit — 100W GaN, a fold-flat stand, a quiet mouse, high-watt leads, and a backpack second screen. Tagged links. No gimmicks.",
    published: "2026-09-24",
    relatedSlugs: [
      "flightbrick-100",
      "runway-riser",
      "cabin-cursor",
      "twin-lead-240",
      "second-window-16",
    ],
    affiliateSlug: "flightbrick-100",
  },
];

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
