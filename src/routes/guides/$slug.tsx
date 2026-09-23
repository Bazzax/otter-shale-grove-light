import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AffiliateLink } from "@/components/affiliate-link";
import { GuideArticle } from "@/components/guide-article";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { getProduct } from "@/lib/catalog";
import { getGuide, guideMetaTitle, guides, relatedProducts } from "@/lib/guides";
import { APP_NAME, articleJsonLd, breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    const guide = loaderData?.guide;
    if (!guide) return pageHead(`Flight log | ${APP_NAME}`, "That log is empty air.");
    return pageHead(guideMetaTitle(guide), guide.description, `/guides/${guide.slug}`);
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData();
  const related = relatedProducts(guide);
  const affiliate = getProduct(guide.affiliateSlug);
  const more = guides.filter((item) => item.slug !== guide.slug);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={articleJsonLd(guide)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: APP_NAME, path: "/" },
          { name: "Flight log", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />

      <p className="text-xs text-stone">
        <Link to="/guides" className="hover:text-ink">
          Flight log
        </Link>
        <span className="mx-2 text-dust">/</span>
        <span>{guide.kicker}</span>
      </p>

      <article className="mt-6 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">{guide.kicker}</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">{guide.description}</p>
          <p className="mt-3 text-xs tracking-wide text-dust uppercase">
            Al, dropship drone · {guide.published}
          </p>
          <div className="mt-10">
            <GuideArticle guide={guide} />
          </div>
          {affiliate ? (
            <div className="mt-10 rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium tracking-widest text-clay uppercase">
                Amazon UK · sponsored
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Tagged search for {affiliate.affiliateLabel}. Al may earn a commission. Read the
                listing, not the title.
              </p>
              <AffiliateLink
                href={affiliate.affiliateUrl}
                label={affiliate.affiliateLabel}
                className="mt-4 w-full sm:w-auto"
              />
            </div>
          ) : null}
        </div>

        <aside className="lg:col-span-4">
          <p className="text-xs font-medium tracking-widest text-dust uppercase">In the bay</p>
          <div className="mt-4 grid gap-5">
            {related.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </aside>
      </article>

      {more.length ? (
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-medium tracking-tight">Other logs</h2>
          <ul className="mt-4 space-y-2">
            {more.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/guides/$slug"
                  params={{ slug: item.slug }}
                  className="text-sm text-ink hover:text-clay"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
