export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatEta(days: [number, number]) {
  return `${days[0]}–${days[1]} days`;
}
