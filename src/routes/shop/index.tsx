import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { CATEGORIES, catalog, type Category } from "@/lib/catalog";
import { APP_NAME, pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

type ShopSearch = { q?: string };

export const Route = createFileRoute("/shop/")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () =>
    pageHead(
      `Cargo bay — dropship tech & Amazon UK | ${APP_NAME}`,
      "Tech SKUs Al dropships plus Amazon UK affiliate picks: ANC audio, GaN chargers, desk kit, SSDs, carry. Lead times on dropship cards. Tagged Shop on Amazon links — no invented prices.",
      "/shop",
    ),
  component: ShopPage,
});

type Filter = "All" | Category;

function ShopPage() {
  const { q } = Route.useSearch();
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState(q ?? "");

  const products = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return catalog.filter((p) => {
      if (filter !== "All" && p.category !== filter) return false;
      if (!needle) return true;
      return (
        p.name.toLowerCase().includes(needle) ||
        p.tagline.toLowerCase().includes(needle) ||
        p.category.toLowerCase().includes(needle) ||
        p.affiliateLabel.toLowerCase().includes(needle)
      );
    });
  }, [filter, query]);

  const filters: Filter[] = ["All", ...CATEGORIES];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-medium tracking-widest text-clay uppercase">
        {catalog.length} SKUs · affiliate on every card
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Cargo bay
      </h1>
      <p className="mt-3 max-w-xl text-stone">
        Dropship from the bay, or jump Amazon. Filter by desk, power, audio,
        storage, carry.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter cargo">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                filter === item
                  ? "bg-clay text-paper"
                  : "bg-cream text-stone shadow-[var(--shadow-border)] hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full sm:max-w-xs">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cargo"
            aria-label="Search cargo"
          />
        </div>
      </div>

      {products.length === 0 ? (
        <p className="mt-16 text-stone">Nothing in that lane. Hail Al, or clear the filter.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
