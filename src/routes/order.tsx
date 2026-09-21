import { createFileRoute, Link } from "@tanstack/react-router";
import { useHydrated } from "@/hooks/use-hydrated";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { APP_NAME } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: `Flight logged | ${APP_NAME}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const hydrated = useHydrated();
  const lastOrder = useCart((s) => s.lastOrder);

  if (!hydrated) {
    return (
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-16 sm:px-6">
        <p className="text-stone">Checking the last order…</p>
      </main>
    );
  }

  if (!lastOrder) {
    return (
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 sm:px-6">
        <h1 className="font-display text-4xl font-medium tracking-tight">
          No order yet.
        </h1>
        <p className="mt-3 text-stone">Load cargo and confirm a demo flight first.</p>
        <Button asChild className="mt-8 w-fit" size="lg">
          <Link to="/shop">Open the cargo bay</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-widest text-clay uppercase">
        Demonstration complete
      </p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Written as {lastOrder.id}
      </h1>
      <p className="mt-4 text-stone">
        {lastOrder.name}, Al logged the demo flight. Nothing was charged and
        nothing will ship. Dropship lead times stay on each cargo card.
      </p>

      <div className="mt-10 rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-6">
        <p className="text-sm text-stone">
          {lastOrder.address}, {lastOrder.city}, {lastOrder.country}
        </p>
        <p className="mt-1 text-sm text-dust">{lastOrder.email}</p>
        {lastOrder.notes ? (
          <p className="mt-4 text-sm text-stone">Note: {lastOrder.notes}</p>
        ) : null}
        <ul className="mt-6 space-y-3 border-t border-line pt-5">
          {lastOrder.lines.map((line) => (
            <li key={line.slug} className="flex items-center justify-between gap-4">
              <span>
                {line.name}
                <span className="text-stone"> × {line.qty}</span>
              </span>
              <span className="tabular-nums">{formatPrice(line.price * line.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
          <span className="text-sm text-stone">Estimated total</span>
          <span className="font-display text-2xl tabular-nums">
            {formatPrice(lastOrder.total)}
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/shop">Return to cargo</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link to="/ask-al">Hail Al again</Link>
        </Button>
      </div>
    </main>
  );
}
