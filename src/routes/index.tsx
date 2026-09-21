import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CityTicker } from "@/components/city-ticker";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { Telemetry } from "@/components/telemetry";
import { Button } from "@/components/ui/button";
import { catalog, featuredProducts } from "@/lib/catalog";
import { APP_DESCRIPTION, APP_NAME, APP_TAGLINE, FAQS, faqJsonLd, pageHead, websiteJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead(`${APP_NAME} | Sentient delivery drone`, APP_DESCRIPTION),
  component: Home,
});

function Home() {
  const featured = featuredProducts();
  const lead = featured[0];
  const restFeatured = featured.slice(1);
  const rest = catalog.filter((p) => !p.featured);

  return (
    <main>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="rise-in inline-flex h-8 items-center gap-2 rounded-full bg-clay px-3 text-xs font-medium tracking-widest text-paper uppercase">
              <span className="online-dot size-2 rounded-full bg-paper" />
              Online · programmed to deliver
            </p>
            <h1 className="rise-in-2 mt-5 font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
              Al's AI <span className="text-clay">Drop Ship</span>
            </h1>
            <p className="rise-in-3 mt-5 max-w-xl text-lg leading-relaxed text-stone">
              {APP_TAGLINE} Hail the drone for a short tech catalog. Cargo
              dropships from suppliers. Affiliate links fire when the better buy
              is already in the wild.
            </p>
            <div className="rise-in-3 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/shop">
                  Open the cargo bay
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/ask-al">Hail Al</Link>
              </Button>
            </div>
          </div>
          <figure className="rise-in-3 lg:col-span-6">
            <div className="relative">
              <div className="drone-hover overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border-hover)]">
                <img
                  src="/hero.jpg"
                  alt="Al, a compact charcoal delivery drone with mint visor lights, hovering over a hangar pad"
                  className="aspect-video w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10 lg:aspect-[4/3]"
                />
              </div>
              <figcaption className="mt-3 text-sm text-stone">
                Callsign AL-1. Always online. Never a warehouse.
              </figcaption>
            </div>
          </figure>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <Telemetry />
        </div>
      </section>

      <CityTicker />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">Flight plan</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            How the drone delivers
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Step
              n="01"
              title="Hail"
              body="Tell Al a job: quiet desk, travel kit, fastest ship. The drone only recommends cargo it actually flies."
            />
            <Step
              n="02"
              title="Dropship"
              body="No hangar inventory. Add to the bay and a supplier packs it. Lead times sit on every card."
            />
            <Step
              n="03"
              title="Affiliate"
              body="Need a brand Al does not stock? Jump the Amazon link. Those are affiliate. Al may earn a cut."
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/hangar.jpg"
          alt="Night hangar pad with mint runway lights and stacked cargo crates"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-paper/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">From the visor</p>
          <blockquote className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            “I was compiled to move cargo. I stayed online. The bay is short on
            purpose.”
          </blockquote>
          <p className="mt-4 text-stone">— Al, dropship drone</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest text-clay uppercase">Priority cargo</p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              What Al flies first
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1 text-sm font-medium text-clay hover:text-clay-dark sm:inline-flex"
          >
            Full bay
            <ArrowRight className="size-4" />
          </Link>
        </div>
        {lead ? (
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProductCard product={lead} size="lg" />
            </div>
            <div className="grid gap-5">
              {restFeatured.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <p className="text-xs font-medium tracking-widest text-clay uppercase">Also in the bay</p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Secondary payload
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">Briefing</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Questions Al already answered
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {FAQS.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-xl font-medium tracking-tight">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article>
      <p className="inline-flex size-10 items-center justify-center rounded-full bg-clay font-display text-sm tabular-nums text-paper">
        {n}
      </p>
      <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
    </article>
  );
}
