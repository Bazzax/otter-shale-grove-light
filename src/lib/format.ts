export const PRICE_LOCALE = "en-GB";
export const PRICE_CURRENCY = "GBP";

export function formatPrice(amount: number) {
  return new Intl.NumberFormat(PRICE_LOCALE, {
    style: "currency",
    currency: PRICE_CURRENCY,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEta(days: [number, number]) {
  return `${days[0]}–${days[1]} days`;
}
