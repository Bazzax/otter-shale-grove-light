import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AffiliateLink } from "@/components/affiliate-link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { QtyStepper } from "@/components/qty-stepper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { catalog, getProduct, isAmazonPick } from "@/lib/catalog";
import { useCart } from "@/lib/cart-store";
import { formatEta, formatPrice } from "@/lib/format";
import { APP_NAME, pageHead, productJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return pageHead(`Cargo | ${APP_NAME}`, "Product not in the bay.");
    if (isAmazonPick(product)) {
      return pageHead(
        `${product.name} — Amazon UK pick | ${APP_NAME}`,
        `${product.tagline} Amazon UK affiliate pick. Shop the tagged listing — Al does not dropship this SKU or print a price.`,
        `/shop/${product.slug}`,
      );
    }
    return pageHead(
      `${product.name} — dropship from Al | ${APP_NAME}`,
      `${product.tagline} Dropships from ${product.shipsFrom} in ${product.etaDays[0]}–${product.etaDays[1]} days. Marked ${product.affiliateLabel} affiliate link on this card.`,
      `/shop/${product.slug}`,
    );
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const related = catalog
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

  function handleAdd() {
    add(product.slug, qty);
    toast(`Loaded ${product.name} into the bay.`);
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={productJsonLd(product)} />
      <p className="text-xs text-stone">
        <Link to="/shop" className="hover:text-ink">
          Cargo
        </Link>
        <span className="mx-2 text-dust">/</span>
        <span>{product.name}</span>
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)]">
            <img
              src={product.image}
              alt={`${product.name} — ${product.tagline}`}
              className="aspect-[4/3] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{product.category}</Badge>
            {isAmazonPick(product) ? (
              <Badge variant="clay">Amazon affiliate</Badge>
            ) : null}
            {product.featured ? <Badge variant="clay">Priority cargo</Badge> : null}
          </div>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight">
            {product.name}
          </h1>
          {isAmazonPick(product) ? (
            <p className="mt-2 font-display text-2xl text-clay">Amazon UK pick</p>
          ) : (
            <p className="mt-2 font-display text-2xl tabular-nums text-clay">
              {formatPrice(product.price)}
            </p>
          )}
          <p className="mt-4 leading-relaxed text-stone">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-stone">{product.description}</p>

          {isAmazonPick(product) ? (
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-dust">Source</dt>
                <dd className="mt-1 font-medium">Amazon UK affiliate</dd>
              </div>
              <div>
                <dt className="text-dust">Price</dt>
                <dd className="mt-1 font-medium">Live on the listing</dd>
              </div>
            </dl>
          ) : (
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-dust">Dropships from</dt>
                <dd className="mt-1 font-medium">{product.shipsFrom}</dd>
              </div>
              <div>
                <dt className="text-dust">Lead time</dt>
                <dd className="mt-1 font-medium tabular-nums">{formatEta(product.etaDays)}</dd>
              </div>
            </dl>
          )}

          {isAmazonPick(product) ? null : (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QtyStepper value={qty} onChange={setQty} />
              <Button size="lg" onClick={handleAdd} className="min-w-40 flex-1">
                Load the bay
              </Button>
            </div>
          )}
          <AffiliateLink
            href={product.affiliateUrl}
            label={product.affiliateLabel}
            className={isAmazonPick(product) ? "mt-8 w-full" : "mt-3 w-full"}
          />
          <p className="mt-2 text-xs text-dust">
            Affiliate link. Al may earn a commission if you buy on {product.affiliateLabel}.
            {isAmazonPick(product) ? " Not sold from the bay." : ""}
          </p>

          <Link
            to="/ask-al"
            search={{ about: product.slug }}
            className="mt-4 inline-flex h-11 items-center text-sm font-medium text-clay hover:text-clay-dark"
          >
            Hail Al about this
          </Link>
        </div>
      </div>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-2xl font-medium tracking-tight">Al's telemetry</h2>
          <p className="mt-3 leading-relaxed text-stone">{product.alNote}</p>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl font-medium tracking-tight">Spec</h2>
          <ul className="mt-3 space-y-2 text-stone">
            {product.details.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-medium tracking-tight">Same lane</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
