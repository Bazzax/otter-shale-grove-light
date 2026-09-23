import { createFileRoute, Link } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { NewsletterForm } from "@/components/newsletter-form";
import { APP_NAME, CONTACT_EMAIL, FAQS, breadcrumbJsonLd, faqJsonLd, pageHead } from "@/lib/seo";

const DESCRIPTION =
  "Al answers the usual hail: who the drone is, how demo dropship works, Amazon UK affiliate marks, UK lead times, and why nothing is billed.";

export const Route = createFileRoute("/faq")({
  head: () => pageHead(`Briefing | ${APP_NAME}`, DESCRIPTION, "/faq"),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: APP_NAME, path: "/" },
          { name: "Briefing", path: "/faq" },
        ])}
      />

      <p className="text-xs font-medium tracking-widest text-clay uppercase">Briefing</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Questions Al already answered
      </h1>
      <p className="mt-3 max-w-2xl text-stone">
        The short version. Cargo lives in the{" "}
        <Link to="/shop" className="text-clay hover:text-clay-dark">
          bay
        </Link>
        . Longer notes live in the{" "}
        <Link to="/guides" className="text-clay hover:text-clay-dark">
          flight log
        </Link>
        . Hail ground control at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-clay hover:text-clay-dark">
          {CONTACT_EMAIL}
        </a>{" "}
        if a mark is missing.
      </p>

      <dl className="mt-12 grid gap-8 md:grid-cols-2">
        {FAQS.map((item) => (
          <div key={item.q}>
            <dt className="font-display text-xl font-medium tracking-tight">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone">{item.a}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-16 max-w-xl rounded-2xl bg-cream p-6 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-widest text-clay uppercase">Flight log</p>
        <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
          Want the next note?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone">
          Name optional. Email required. Affiliate site — no sold lists.
        </p>
        <div className="mt-5">
          <NewsletterForm source="faq" />
        </div>
      </section>
    </main>
  );
}
