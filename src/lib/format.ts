export type PriceCurrency = "USD" | "GBP";

export function formatPrice(amount: number, currency: PriceCurrency = "USD") {
  const locale = currency === "GBP" ? "en-GB" : "en-US";
  const pence = currency === "GBP";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: pence ? 2 : 0,
    maximumFractionDigits: pence ? 2 : 0,
  }).format(amount);
}

/** Dropship cargo stays USD. Amazon UK picks use a GBP listing snapshot. */
export function formatProductPrice(product: { price: number; amazonPick?: boolean }) {
  return formatPrice(product.price, product.amazonPick ? "GBP" : "USD");
}

export function formatEta(days: [number, number]) {
  return `${days[0]}–${days[1]} days`;
}
