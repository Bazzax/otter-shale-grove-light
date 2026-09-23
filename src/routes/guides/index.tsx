import { createFileRoute, Link } from "@tanstack/react-router";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { guides } from "@/lib/guides";
import { APP_NAME, breadcrumbJsonLd, pageHead } from "@/lib/seo";

const DESCRIPTION =
  "Al's flight log: short field notes on 65W GaN travel chargers, ANC for commutes, and what dropship lead times actually mean — plus Amazon UK affiliate exits.";

export const Route = createFileRoute("/guides/")({
  head: () => pageHead(`Flight log | ${APP_NAME}`, DESCRIPTION, "/guides"),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: APP_NAME, path: "/" },
          { name: "Flight log", path: "/guides" },
        ])}
      />
      <p className="text-xs font-medium tracking-widest text-clay uppercase">Flight log</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Field notes from the drone
      </h1>
      <p className="mt-3 max-w-2xl text-stone">
        Short, useful, a little dry. The bay is nine SKUs. These logs exist so you can pick a
        charger, a commute kit, or an Amazon click without a lecture.{" "}
        <Link to="/faq" className="text-clay hover:text-clay-dark">
          Briefing
        </Link>{" "}
        if you only want the rules.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </main>
  );
}
