import { Link } from "@tanstack/react-router";
import { NewsletterForm } from "@/components/newsletter-form";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 md:py-16">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl font-medium tracking-tight text-clay">{APP_NAME}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-pretty text-stone">
            Al is a mock sentient dropship drone — programmed, albeit online, to
            deliver the goods. No warehouse. Demo cargo is not billed. Affiliate
            jumps are marked.
          </p>
        </div>
        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Deck</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/shop" className="text-ink hover:text-clay">
                Cargo
              </Link>
            </li>
            <li>
              <Link to="/guides" className="text-ink hover:text-clay">
                Flight log
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-ink hover:text-clay">
                Briefing
              </Link>
            </li>
            <li>
              <Link to="/ask-al" className="text-ink hover:text-clay">
                Hail Al
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="text-ink hover:text-clay">
                Bay
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Disclosure</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-stone">
            “Shop on Amazon” is an affiliate link. Al may earn a cut. Dropship
            checkout here is theatre — nothing packs, nothing charges. Hail{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:text-clay">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Flight log</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-stone">
            Occasional notes. No sold lists.
          </p>
          <div className="relative mt-4">
            <NewsletterForm source="footer" compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
