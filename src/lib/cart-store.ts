import { create } from "zustand";
import { persist } from "zustand/middleware";
import { catalog, getProduct, isAmazonPick } from "./catalog";

export type Line = { slug: string; qty: number };

export type OrderLine = {
  slug: string;
  qty: number;
  name: string;
  price: number;
  image: string;
};

export type Order = {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
  notes?: string;
  lines: OrderLine[];
  total: number;
  createdAt: string;
};

type CartState = {
  lines: Line[];
  lastOrder: Order | null;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  placeOrder: (details: Omit<Order, "id" | "lines" | "total" | "createdAt">) => Order;
};

function makeOrderId() {
  const n = Math.floor(10000 + Math.random() * 90000);
  return `AL-${n}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      lastOrder: null,
      add: (slug, qty = 1) => {
        const product = getProduct(slug);
        if (!product || isAmazonPick(product)) return;
        const lines = get().lines;
        const existing = lines.find((l) => l.slug === slug);
        if (existing) {
          set({
            lines: lines.map((l) =>
              l.slug === slug ? { ...l, qty: Math.min(l.qty + qty, 9) } : l,
            ),
          });
        } else {
          set({ lines: [...lines, { slug, qty: Math.min(qty, 9) }] });
        }
      },
      setQty: (slug, qty) => {
        if (qty < 1) {
          set({ lines: get().lines.filter((l) => l.slug !== slug) });
          return;
        }
        set({
          lines: get().lines.map((l) =>
            l.slug === slug ? { ...l, qty: Math.min(qty, 9) } : l,
          ),
        });
      },
      remove: (slug) => set({ lines: get().lines.filter((l) => l.slug !== slug) }),
      clear: () => set({ lines: [] }),
      placeOrder: (details) => {
        const lines: OrderLine[] = get()
          .lines.map((l) => {
            const product = getProduct(l.slug);
            if (!product || isAmazonPick(product)) return null;
            return {
              slug: l.slug,
              qty: l.qty,
              name: product.name,
              price: product.price,
              image: product.image,
            };
          })
          .filter((l): l is OrderLine => l !== null);

        const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
        const order: Order = {
          ...details,
          id: makeOrderId(),
          lines,
          total,
          createdAt: new Date().toISOString(),
        };
        set({ lastOrder: order, lines: [] });
        return order;
      },
    }),
    { name: "als-emporium-cart-v1" },
  ),
);

export function cartCount(lines: Line[]) {
  return lines.reduce((n, l) => n + l.qty, 0);
}

export function cartTotal(lines: Line[]) {
  return lines.reduce((sum, l) => {
    const product = catalog.find((p) => p.slug === l.slug);
    if (!product || isAmazonPick(product)) return sum;
    return sum + product.price * l.qty;
  }, 0);
}
