import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { CartSheet } from "@/components/cart-sheet";
import { useHydrated } from "@/hooks/use-hydrated";
import { cartCount, useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/shop" as const, label: "Cargo" },
  { to: "/ask-al" as const, label: "Hail Al" },
];

export function SiteHeader() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hydrated = useHydrated();
  const lines = useCart((s) => s.lines);
  const count = hydrated ? cartCount(lines) : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="h-1.5 bg-clay" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="online-dot size-2.5 shrink-0 rounded-full bg-clay" aria-hidden />
          <span className="flex min-w-0 items-baseline gap-2">
            <span className="font-display text-xl font-medium tracking-tight text-clay sm:text-2xl">
              Al's
            </span>
            <span className="truncate text-xs font-medium tracking-widest text-clay uppercase">
              Drop Ship
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-stone transition-colors duration-150 hover:text-clay"
              activeProps={{ className: "text-clay" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-lg text-ink hover:bg-ink/5 hover:text-clay"
            onClick={() => setCartOpen(true)}
            aria-label={count ? `Open cargo bay, ${count} items` : "Open cargo bay"}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-clay text-xs leading-none font-medium text-paper tabular-nums">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-lg text-ink hover:bg-ink/5 hover:text-clay md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-line md:hidden", menuOpen ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex h-12 items-center text-base text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
