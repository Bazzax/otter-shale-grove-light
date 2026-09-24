export const APP_NAME = "Al's AI Drop Ship";
export const APP_TAGLINE = "A sentient dropship drone, online, programmed to deliver.";
export const APP_DESCRIPTION =
  "Al is a mock sentient delivery drone. Hail Al for a short tech catalog — GaN chargers, ANC audio, desk kit — then dropship from suppliers or follow marked Amazon UK affiliate links. Demo checkout; nothing is billed.";
export const CONTACT_EMAIL = "alsaidropship@gmail.com";
export const SITE_ORIGIN = "https://alsaidropship.com";
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONTACT_EMAIL}`;
export const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function pageHead(
  title: string,
  description: string,
  path?: string,
  options?: { type?: "website" | "article" },
) {
  const url = path ? `${SITE_ORIGIN}${path}` : SITE_ORIGIN;
  const image = `${SITE_ORIGIN}/og.jpg`;
  const type = options?.type ?? "website";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: APP_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
  amazonPick?: boolean;
  affiliateUrl?: string;
}) {
  const image = product.image.startsWith("http")
    ? product.image
    : `${SITE_ORIGIN}${product.image}`;
  const pageUrl = `${SITE_ORIGIN}/shop/${product.slug}`;
  const offers =
    product.amazonPick || product.price == null
      ? {
          "@type": "Offer",
          url: product.affiliateUrl ?? pageUrl,
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "Amazon.co.uk" },
        }
      : {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.price.toFixed(2),
          availability: "https://schema.org/InStock",
          url: pageUrl,
        };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image,
    category: product.category,
    brand: { "@type": "Brand", name: APP_NAME },
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
}) {
  const url = `${SITE_ORIGIN}/guides/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_ORIGIN}/og.jpg`,
    datePublished: article.published,
    dateModified: article.published,
    author: { "@type": "Organization", name: APP_NAME, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: APP_NAME, url: SITE_ORIGIN },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
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
    q: "How does dropshipping work here?",
    a: "Al does not hold stock. Add cargo to the bay and a supplier packs it. Lead times are printed on every product. This demo does not charge or ship.",
  },
  {
    q: "What are the Amazon buttons?",
    a: "Affiliate links to Amazon UK, tagged alsaidropship-21 and marked sponsored. If Al does not stock the brand you want, shop the wider market. Al may earn a commission. Al does not scrape Amazon or invent live prices.",
  },
  {
    q: "Will I be charged?",
    a: "No. Checkout is a demonstration. Affiliate clicks go to the retailer. Nothing is billed by Al.",
  },
  {
    q: "How long does UK delivery actually take?",
    a: "On this site, nothing packs. If you used a real dropshipper, the window on the card (often 6–16 days from Shenzhen, Taipei, Seoul) is supplier to door, not a courier promise. Weekends, batching, and a customs pause can stretch it. Amazon UK affiliate orders use Amazon's own UK delivery times — usually the move if you need it this week.",
  },
  {
    q: "Why are bay prices in US dollars?",
    a: "The catalog is listed in USD. Amazon UK checkout is in pounds. Compare the job, not the currency badge.",
  },
  {
    q: "Is this an honest affiliate site?",
    a: "The Amazon buttons are the real monetization. They are labelled. Al will tell you to use them when dropship lead time is the wrong tool. Hail Al or mail alsaidropship@gmail.com if a mark is missing.",
  },
  {
    q: "Will Al email me?",
    a: "Only if you join the flight log. Name optional, email required. No sold lists, no daily noise. Unsubscribe by mailing alsaidropship@gmail.com.",
  },
];
