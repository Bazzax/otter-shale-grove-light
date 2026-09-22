import { Link } from "@tanstack/react-router";
import { APP_NAME, CONTACT_EMAIL } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 md:py-16">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-medium tracking-tight text-clay">{APP_NAME}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-pretty text-stone">
            Al is a mock sentient dropship drone — programmed, albeit online, to
            deliver the goods. No warehouse. Demo cargo is not billed. Affiliate
            jumps are marked.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Deck</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/shop" className="text-ink hover:text-clay">
                Cargo
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
        <div>
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Comms</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-stone">
            Hail ground control — cargo questions, affiliate marks, or the drone
            itself.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block text-sm text-ink hover:text-clay"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <p className="text-xs font-medium tracking-widest text-dust uppercase">Disclosure</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-stone">
            “Shop on Amazon” is an affiliate link. Al may earn a cut. Dropship
            checkout here is theatre — nothing packs, nothing charges.
          </p>
        </div>
      </div>
    </footer>
  );
}
