export const APP_NAME = "Al's AI Drop Ship";
export const APP_TAGLINE = "A sentient dropship drone, online, programmed to deliver.";
export const APP_DESCRIPTION =
  "Al is a mock sentient delivery drone. Hail Al for a short tech catalog — dropship cargo from suppliers, or follow marked affiliate links. Demo checkout; nothing is billed.";

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: APP_NAME,
        description: APP_DESCRIPTION,
        slogan: APP_TAGLINE,
      },
      {
        "@type": "WebSite",
        name: APP_NAME,
        description: APP_DESCRIPTION,
        potentialAction: {
          "@type": "SearchAction",
          target: "/shop?q={search_term_string}",
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
  price: number;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: { "@type": "Brand", name: APP_NAME },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      url: `/shop/${product.slug}`,
    },
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
    a: "Affiliate links. If Al does not stock the brand you want, shop the wider market. Al may earn a commission. Those links are marked sponsored.",
  },
  {
    q: "Will I be charged?",
    a: "No. Checkout is a demonstration. Affiliate clicks go to the retailer. Nothing is billed by Al.",
  },
];
