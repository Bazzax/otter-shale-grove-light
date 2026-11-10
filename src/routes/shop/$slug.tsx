import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { AffiliateLink } from "@/components/affiliate-link";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { AmazonImageCredit, ProductImage } from "@/components/product-image";
import { Badge } from "@/components/ui/badge";
import { catalog, getProduct, isAmazonHostedImage, PRODUCT_SLUG_REDIRECTS } from "@/lib/catalog";
import { formatProductPrice } from "@/lib/format";
import { APP_NAME, pageHead, productJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/shop/$slug")({
  beforeLoad: ({ params }) => {
    const next = PRODUCT_SLUG_REDIRECTS[params.slug];
    if (next) {
      throw redirect({
        to: "/shop/$slug",
        params: { slug: next },
        statusCode: 308,
      });
    }
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return pageHead(`Cargo | ${APP_NAME}`, "Product not in the bay.");
    return pageHead(
      `${product.name} — Amazon UK pick | ${APP_NAME}`,
      product.price == null
        ? `${product.tagline} Amazon UK affiliate pick. Check the live price on Amazon.`
        : `${product.tagline} Amazon UK affiliate pick, about ${formatProductPrice(product)}. Shop the tagged listing. Amazon’s live price may differ.`,
      `/shop/${product.slug}`,
      { image: product.image },
    );
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = catalog
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

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
            <ProductImage
              product={product}
              alt={`${product.name} — ${product.tagline}`}
              className="aspect-[4/3] w-full rounded-xl outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
          {isAmazonHostedImage(product.image) ? (
            <AmazonImageCredit className="mt-2" />
          ) : null}
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{product.category}</Badge>
            <Badge variant="clay">Amazon affiliate</Badge>
            {product.featured ? <Badge variant="clay">Priority cargo</Badge> : null}
          </div>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight">
            {product.name}
          </h1>
          <p className="mt-2 font-display text-2xl tabular-nums text-clay">
            {formatProductPrice(product)}
          </p>
          <p className="mt-1 text-sm text-dust">
            {product.price == null
              ? "No new featured offer when last checked. Check the live listing on Amazon."
              : "Approx. Amazon UK price. Check the live listing — checkout is on Amazon."}
          </p>
          <p className="mt-4 leading-relaxed text-stone">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-stone">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-dust">Source</dt>
              <dd className="mt-1 font-medium">Amazon UK affiliate</dd>
            </div>
            <div>
              <dt className="text-dust">Price</dt>
              <dd className="mt-1 font-medium tabular-nums">
                {product.price == null
                  ? formatProductPrice(product)
                  : `${formatProductPrice(product)} approx.`}
              </dd>
            </div>
          </dl>

          <AffiliateLink href={product.affiliateUrl} label={product.affiliateLabel} className="mt-8 w-full" />
          <p className="mt-2 text-xs text-dust">
            Affiliate link. Al may earn a commission if you buy on {product.affiliateLabel}.
            Not sold from the bay. Live Amazon price may differ.
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
