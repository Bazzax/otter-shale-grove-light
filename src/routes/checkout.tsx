import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { useHydrated } from "@/hooks/use-hydrated";
import { getProduct } from "@/lib/catalog";
import { cartCount, cartTotal, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { APP_NAME, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/checkout")({
  head: () =>
    pageHead(
      `Bay | ${APP_NAME}`,
      "Demo dropship checkout for Al's AI Drop Ship. Nothing is billed. Affiliate Amazon buttons live on product cards.",
    ),
  component: CheckoutPage,
});

function CheckoutPage() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const lines = useCart((s) => s.lines);
  const placeOrder = useCart((s) => s.placeOrder);
  const count = hydrated ? cartCount(lines) : 0;
  const total = hydrated ? cartTotal(lines) : 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!hydrated || count === 0) return;
    if (!name.trim() || !email.trim() || !address.trim() || !city.trim() || !country.trim()) {
      setError("Al needs a name, a place to send it, and an email for the note.");
      return;
    }
    placeOrder({
      name: name.trim(),
      email: email.trim(),
      address: address.trim(),
      city: city.trim(),
      country: country.trim(),
      notes: notes.trim() || undefined,
    });
    void navigate({ to: "/order" });
  }

  if (!hydrated) {
    return (
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6">
        <p className="text-stone">Opening the bay…</p>
      </main>
    );
  }

  if (count === 0) {
    return (
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 sm:px-6">
        <h1 className="font-display text-4xl font-medium tracking-tight">Bay is empty.</h1>
        <p className="mt-3 text-stone">
          Load dropship cargo from the bay, or use an affiliate link on a product.
        </p>
        <Button asChild className="mt-8 w-fit" size="lg">
          <Link to="/shop">Open the cargo bay</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="text-xs font-medium tracking-widest text-clay uppercase">
          Demonstration only
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          Checkout
        </h1>
        <p className="mt-3 max-w-lg text-stone">
          Demo dropship only — no payment. Affiliate Amazon buttons on product
          cards are separate and live.
        </p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <Field label="Name" htmlFor="name">
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </Field>
          <Field label="Street address" htmlFor="address">
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
              required
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="City" htmlFor="city">
              <Input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                autoComplete="address-level2"
                required
              />
            </Field>
            <Field label="Country" htmlFor="country">
              <Input
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                autoComplete="country-name"
                required
              />
            </Field>
          </div>
          <Field label="Note for Al (optional)" htmlFor="notes">
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="USB-C length, gift note, access code."
            />
          </Field>
          {error ? <p className="text-sm text-clay">{error}</p> : null}
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Confirm demo order
          </Button>
        </form>
      </div>

      <aside className="lg:col-span-5">
        <div className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-6">
          <h2 className="font-display text-2xl font-medium tracking-tight">Dropship crate</h2>
          <ul className="mt-5 space-y-4">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li key={line.slug} className="flex gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="size-16 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="text-sm text-stone tabular-nums">
                      {line.qty} × {formatPrice(product.price)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex items-baseline justify-between border-t border-line pt-4">
            <span className="text-sm text-stone">Estimated total</span>
            <span className="font-display text-2xl tabular-nums">{formatPrice(total)}</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
