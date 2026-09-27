export const PRICE_LOCALE = "en-GB";
export const PRICE_CURRENCY = "GBP";

export function formatPrice(amount: number) {
  const pence = Math.round(amount * 100) % 100 !== 0;
  return new Intl.NumberFormat(PRICE_LOCALE, {
    style: "currency",
    currency: PRICE_CURRENCY,
    minimumFractionDigits: pence ? 2 : 0,
    maximumFractionDigits: pence ? 2 : 0,
  }).format(amount);
}

/** Whole-bay display helper — dropship and Amazon picks are both GBP. */
export function formatProductPrice(product: { price: number }) {
  return formatPrice(product.price);
}

export function formatEta(days: [number, number]) {
  return `${days[0]}–${days[1]} days`;
}
