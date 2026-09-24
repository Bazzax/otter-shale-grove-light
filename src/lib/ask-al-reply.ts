import { getProduct } from "./catalog";

export type AskAlParsedReply = {
  cleaned: string;
  slugs: string[];
  searches: string[];
};

/** Pull [[slug]] cargo cards and [[search:query]] Amazon UK chips out of Al's reply. */
export function parseAskAlReply(text: string): AskAlParsedReply {
  const slugs: string[] = [];
  const searches: string[] = [];
  const cleaned = text
    .replace(/\[\[search:([^\]]+)\]\]/gi, (_match, raw: string) => {
      const query = raw.trim();
      if (query && !searches.includes(query)) searches.push(query);
      return query;
    })
    .replace(/\[\[([a-z0-9-]+)\]\]/g, (_match, slug: string) => {
      const product = getProduct(slug);
      if (product && !slugs.includes(slug)) slugs.push(slug);
      return product ? product.name : slug;
    });
  return { cleaned, slugs, searches };
}
