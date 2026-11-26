import { PRICE_CURRENCY, formatProductPrice } from "./format.ts";

export const APP_NAME = "Al's AI Drop Ship";
export const APP_TAGLINE = "A sentient dropship drone, online, programmed to deliver.";
export const APP_DESCRIPTION =
  "Al is a mock sentient delivery drone. Hail Al for a short tech catalog of Amazon UK affiliate picks: GaN chargers, ANC audio, desk kit. Delivery is Amazon's. Demo checkout; nothing is billed.";
export const TITLE_MAX = 60;
export const META_DESCRIPTION_MAX = 160;
const TITLE_FULL_SUFFIX = ` | ${APP_NAME}`;
const TITLE_SHORT_SUFFIX = " | Al";
export const CONTACT_EMAIL = "alsaidropship@gmail.com";
export const SITE_ORIGIN = "https://alsaidropship.com";
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function absoluteImageUrl(image?: string) {
  if (!image) return `${SITE_ORIGIN}/og.jpg`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${SITE_ORIGIN}${image}`;
}

function clipAtWord(text: string, max: number): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  const slice = t.slice(0, max);
  const at = slice.lastIndexOf(" ");
  const cut = at >= Math.floor(max * 0.7) ? slice.slice(0, at) : slice;
  return cut.replace(/[\s|–—:,;.\-/]+$/, "");
}

function stripBrandSuffix(pageTitle: string): string {
  if (pageTitle.endsWith(TITLE_FULL_SUFFIX)) {
    return pageTitle.slice(0, -TITLE_FULL_SUFFIX.length).trim();
  }
  if (pageTitle.endsWith(TITLE_SHORT_SUFFIX)) {
    return pageTitle.slice(0, -TITLE_SHORT_SUFFIX.length).trim();
  }
  return pageTitle;
}

/**
 * SERP titles: land at or under 60 characters. Keep a brand suffix when it
 * fits; shorten to " | Al", then drop it, rather than truncating the page name.
 */
export function documentTitle(pageTitle: string, options?: { branded?: boolean }): string {
  const page = stripBrandSuffix(pageTitle.trim());
  if (options?.branded || page.includes(APP_NAME) || page.includes("Al's Drop Ship")) {
    return clipAtWord(page, TITLE_MAX);
  }
  const withFull = `${page}${TITLE_FULL_SUFFIX}`;
  if (withFull.length <= TITLE_MAX) return withFull;
  const withShort = `${page}${TITLE_SHORT_SUFFIX}`;
  if (withShort.length <= TITLE_MAX) return withShort;
  if (page.length <= TITLE_MAX) return page;
  return clipAtWord(page, TITLE_MAX);
}

export function clipMetaDescription(text: string, max = META_DESCRIPTION_MAX): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  const cut = clipAtWord(t, max - 1);
  return /[.!?]$/.test(cut) ? cut : `${cut}.`;
}

export function productMetaDescription(product: { tagline: string; price?: number }): string {
  return product.price == null
    ? `${product.tagline} Amazon UK affiliate pick. Check the live price on Amazon.`
    : `${product.tagline} Amazon UK affiliate pick, about ${formatProductPrice(product)}. Live checkout may differ.`;
}

/** noindex query variants so crawlers keep following links to the clean URL. */
export function robotsForQueryParams(...values: Array<string | undefined>): string {
  const hasQuery = values.some((value) => Boolean(value?.trim()));
  return hasQuery ? "noindex, follow" : "index, follow";
}

export function pageHead(
  title: string,
  description: string,
  path?: string,
  options?: {
    type?: "website" | "article";
    robots?: string;
    image?: string;
    branded?: boolean;
  },
) {
  const url = path ? `${SITE_ORIGIN}${path}` : SITE_ORIGIN;
  const image = absoluteImageUrl(options?.image);
  const type = options?.type ?? "website";
  const resolvedTitle = documentTitle(title, { branded: options?.branded });
  const resolvedDescription = clipMetaDescription(description);
  return {
    meta: [
      { title: resolvedTitle },
      { name: "description", content: resolvedDescription },
      { name: "robots", content: options?.robots ?? "index, follow" },
      { property: "og:title", content: resolvedTitle },
      { property: "og:description", content: resolvedDescription },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: APP_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: resolvedTitle },
      { name: "twitter:description", content: resolvedDescription },
      { name: "twitter:image", content: image },
    ],
    ...(path ? { links: [{ rel: "canonical", href: url }] } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: APP_NAME,
        url: SITE_ORIGIN,
        description: APP_DESCRIPTION,
        slogan: APP_TAGLINE,
        email: CONTACT_EMAIL,
      },
      {
        "@type": "WebSite",
        name: APP_NAME,
        url: SITE_ORIGIN,
        description: APP_DESCRIPTION,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_ORIGIN}/ask-al?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function productJsonLd(product: {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price?: number;
  image: string;
  category: string;
  brand?: string;
  amazonPick?: boolean;
  affiliateUrl?: string;
}) {
  const image = absoluteImageUrl(product.image);
  const pageUrl = `${SITE_ORIGIN}/shop/${product.slug}`;
  const offers =
    product.price == null
      ? {
          "@type": "Offer",
          url: product.affiliateUrl ?? pageUrl,
          availability: "https://schema.org/OutOfStock",
          seller: { "@type": "Organization", name: "Amazon.co.uk" },
        }
      : {
          "@type": "Offer",
          priceCurrency: PRICE_CURRENCY,
          price: product.price.toFixed(2),
          availability: "https://schema.org/InStock",
          url: product.amazonPick ? (product.affiliateUrl ?? pageUrl) : pageUrl,
          ...(product.amazonPick
            ? { seller: { "@type": "Organization", name: "Amazon.co.uk" } }
            : {}),
        };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image,
    category: product.category,
    brand: { "@type": "Brand", name: product.brand ?? APP_NAME },
    offers,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  published: string;
  updated?: string;
}) {
  const url = `${SITE_ORIGIN}/guides/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_ORIGIN}/og.jpg`,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    author: { "@type": "Organization", name: APP_NAME, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: APP_NAME, url: SITE_ORIGIN },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
}

export function itemListJsonLd(list: {
  name: string;
  description?: string;
  path?: string;
  items: Array<{
    name: string;
    description: string;
    path?: string;
    url?: string;
    image?: string;
    brand?: string;
  }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: list.name,
    ...(list.description ? { description: list.description } : {}),
    ...(list.path ? { url: `${SITE_ORIGIN}${list.path}` } : {}),
    numberOfItems: list.items.length,
    itemListElement: list.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.description,
        ...(item.path
          ? { url: `${SITE_ORIGIN}${item.path}` }
          : item.url
            ? { url: item.url }
            : {}),
        ...(item.image ? { image: absoluteImageUrl(item.image) } : {}),
        ...(item.brand ? { brand: { "@type": "Brand", name: item.brand } } : {}),
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
}

export const FAQS = [
  {
    q: "Who is Al?",
    a: "Al is a mock sentient dropship drone. Programmed — albeit online — to source a short tech catalog and deliver it. Al has no surname and no warehouse.",
  },
  {
    q: "How does buying work here?",
    a: "Al recommends products and does not hold stock. Buy buttons go to Amazon UK and are affiliate links, so Al may earn a commission at no extra cost to you. Al does not take payment or ship.",
  },
  {
    q: "What are the Amazon buttons?",
    a: "Affiliate links to Amazon UK, marked sponsored. If Al does not stock the brand you want, shop the wider market. Al may earn a commission. Amazon picks show an approx. UK price from the listing — Amazon’s live checkout may differ.",
  },
  {
    q: "Will I be charged?",
    a: "No. Checkout is a demonstration. Affiliate clicks go to the retailer. Nothing is billed by Al.",
  },
  {
    q: "How long does UK delivery actually take?",
    a: "On this site, nothing packs. Every product is an Amazon UK affiliate pick. Delivery is Amazon's, and it varies. There is no factory window on these cards.",
  },
  {
    q: "Why are bay prices in pounds?",
    a: "The bay lists Amazon UK picks in GBP. The printed figure is an approx. listing snapshot; live checkout may differ. Compare the job, not the badge.",
  },
  {
    q: "Is this an honest affiliate site?",
    a: "The Amazon buttons are the real monetization. They are labelled. Every card in this bay is an Amazon UK affiliate pick. Hail Al or mail alsaidropship@gmail.com if a mark is missing.",
  },
  {
    q: "Will Al email me?",
    a: "Only if you join the flight log. Name optional, email required. No sold lists, no daily noise. Unsubscribe by mailing alsaidropship@gmail.com.",
  },
];
