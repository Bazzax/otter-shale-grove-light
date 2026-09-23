import { getProduct } from "@/lib/catalog";
import { APP_NAME } from "@/lib/seo";

export type Guide = {
  slug: string;
  title: string;
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
