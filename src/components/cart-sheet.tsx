import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useHydrated } from "@/hooks/use-hydrated";
import { getProduct } from "@/lib/catalog";
import { cartCount, cartTotal, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { QtyStepper } from "@/components/qty-stepper";

export function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const hydrated = useHydrated();
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const count = hydrated ? cartCount(lines) : 0;
  const total = hydrated ? cartTotal(lines) : 0;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cargo bay</SheetTitle>
          <SheetDescription>
            {count === 0
              ? "Empty. Load dropship cargo, or use an affiliate link on a product."
              : `${count} ${count === 1 ? "item" : "items"} ready to dropship.`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col">
          {count === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-16 text-center">
              <ShoppingBag className="size-8 text-dust" />
              <p className="max-w-xs text-sm text-pretty text-stone">
                Al stocks a short tech list. The bay is for dropship. Amazon
                buttons are affiliate.
              </p>
              <Button asChild variant="secondary">
                <Link to="/shop" onClick={() => onOpenChange(false)}>
                  Browse the cargo
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <ul className="min-h-0 flex-1 space-y-4 overflow-y-auto px-6">
                {lines.map((line) => {
                  const product = getProduct(line.slug);
                  if (!product) return null;
                  return (
                    <li key={line.slug} className="flex gap-3">
                      <Link
                        to="/shop/$slug"
                        params={{ slug: product.slug }}
                        onClick={() => onOpenChange(false)}
                        className="size-20 shrink-0 overflow-hidden rounded-lg bg-cream"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                        />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <Link
                              to="/shop/$slug"
                              params={{ slug: product.slug }}
                              onClick={() => onOpenChange(false)}
                              className="font-display text-base font-medium tracking-tight"
                            >
                              {product.name}
                            </Link>
                            <p className="text-sm tabular-nums text-stone">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="text-xs text-dust hover:text-ink"
                            onClick={() => remove(line.slug)}
                          >
                            Remove
                          </button>
                        </div>
                        <QtyStepper
                          value={line.qty}
                          min={1}
                          onChange={(qty) => setQty(line.slug, qty)}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-line p-6">
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="text-sm text-stone">Estimated total</span>
                  <span className="font-display text-2xl tabular-nums">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="mb-4 text-xs text-pretty text-dust">
                  Demo bay. No payment. Dropship lead times are on each product.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link to="/checkout" onClick={() => onOpenChange(false)}>
                    Checkout
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
