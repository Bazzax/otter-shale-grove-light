import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp, Search } from "lucide-react";
import { AmazonSearchLink } from "@/components/amazon-search-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { askAl, type ChatTurn } from "@/lib/ask-al";
import { parseAskAlReply } from "@/lib/ask-al-reply";
import {
  catalog,
  getProduct,
  isAmazonPick,
  matchCatalog,
  TECH_SEARCH_CHIPS,
  type Product,
} from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { APP_NAME, pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

type AskSearch = { about?: string; q?: string };

export const Route = createFileRoute("/ask-al")({
  validateSearch: (search: Record<string, unknown>): AskSearch => ({
    about: typeof search.about === "string" ? search.about : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () =>
    pageHead(
      `Hail Al | ${APP_NAME}`,
      "Search Amazon UK tech with a tagged affiliate link, or radio the drone. Al matches the bay and will not invent products, prices, or ratings.",
      "/ask-al",
    ),
  component: AskAlPage,
});

const SUGGESTIONS = [
  "A quiet desk setup.",
  "Best charger under fifty.",
  "Travel kit for a week.",
  "What ships the fastest?",
];

const AFFILIATE_DISCLOSURE =
  "As an Amazon Associate, Al's AI Drop Ship earns from qualifying purchases. Search links go to Amazon UK and include our affiliate tag.";

function AskAlPage() {
  const { about, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/ask-al" });
  const aboutProduct = about ? getProduct(about) : undefined;
  const [messages, setMessages] = useState<ChatTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchDraft, setSearchDraft] = useState(q ?? "");
  const bottomRef = useRef<HTMLDivElement>(null);

  const activeQuery = q?.trim() ?? "";
  const catalogHits = useMemo(
    () => (activeQuery ? matchCatalog(activeQuery) : []),
    [activeQuery],
  );

  useEffect(() => {
    setSearchDraft(q ?? "");
  }, [q]);

  useEffect(() => {
    if (aboutProduct) {
      setDraft(
        `Is ${aboutProduct.name} worth loading into the bay, or should I use the affiliate link?`,
      );
    }
  }, [aboutProduct]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pending]);

  function runSearch(next: string) {
    const query = next.trim();
    setSearchDraft(query);
    void navigate({
      search: (prev) => ({
        ...prev,
        q: query || undefined,
      }),
    });
  }

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;
    const next: ChatTurn[] = [...messages, { role: "user", content }];
    setMessages(next);
    setDraft("");
    setPending(true);
    setError(null);
    try {
      const result = await askAl({ data: { messages: next } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setMessages([...next, { role: "assistant", content: result.text }]);
    } catch {
      setError("Telemetry dropped. Hail Al again in a moment.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs font-medium tracking-widest text-clay uppercase">Radio</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
        Hail Al
      </h1>
      <p className="mt-3 max-w-2xl text-pretty text-stone">
        Search all of Amazon UK tech from the hangar — tagged so Al earns if you
        buy. The drone still flies the bay underneath, and will open a search
        when cargo is the wrong tool.
      </p>

      <section
        aria-labelledby="tech-search-heading"
        className="mt-8 rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)]"
      >
        <div className="rounded-xl bg-paper px-4 py-4 sm:px-6 sm:py-6">
          <h2 id="tech-search-heading" className="font-display text-xl font-medium tracking-tight">
            Scan Amazon UK tech
          </h2>
          <p className="mt-1 text-sm text-stone">
            No live Amazon prices or scraped listings — just a tagged search and
            anything already in the bay.
          </p>

          <form
            className="mt-4"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(searchDraft);
            }}
          >
            <label htmlFor="tech-search" className="sr-only">
              Search Amazon UK tech
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                id="tech-search"
                type="search"
                value={searchDraft}
                onChange={(e) => setSearchDraft(e.target.value)}
                placeholder="Webcam, 65W GaN charger, mechanical keyboard…"
                autoComplete="off"
                enterKeyHint="search"
                className="h-12 flex-1 rounded-xl text-base md:text-base"
              />
              <Button type="submit" size="lg" className="h-12 shrink-0 sm:min-w-36">
                <Search aria-hidden />
                Search
              </Button>
            </div>
          </form>

          {activeQuery ? (
            <div className="mt-4">
              <AmazonSearchLink query={activeQuery} />
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Quick tech searches">
            {TECH_SEARCH_CHIPS.map((chip) => {
              const active = activeQuery.toLowerCase() === chip.toLowerCase();
              return (
                <button
                  key={chip}
                  type="button"
                  aria-pressed={active}
                  className={cn(
                    "h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                    active
                      ? "bg-clay text-paper"
                      : "bg-cream text-stone shadow-[var(--shadow-border)] hover:text-ink",
                  )}
                  onClick={() => runSearch(chip)}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-dust">{AFFILIATE_DISCLOSURE}</p>

          {activeQuery ? (
            catalogHits.length > 0 ? (
              <div className="mt-5 border-t border-line pt-5">
                <h3 className="text-xs font-medium tracking-widest text-dust uppercase">
                  In the bay
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {catalogHits.map((product) => (
                    <li key={product.slug}>
                      <CatalogHit product={product} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-3 text-sm text-stone">
                Nothing in the bay for “{activeQuery}”. Amazon UK is the aisle.
              </p>
            )
          ) : null}
        </div>
      </section>

      <div className="mt-10 grid flex-1 gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">
            Channel
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
            Ask the drone
          </h2>
          <p className="mt-3 text-stone">
            Name a job — quiet desk, travel kit, fastest ship. Al matches cargo
            in the bay and can hand you a tagged Amazon UK search when the
            catalog runs out.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:block">
            <img
              src="/al-drone.jpg"
              alt="Al the delivery drone, charcoal airframe with a mint visor"
              className="aspect-[4/3] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
        </aside>

        <section
          aria-labelledby="hail-al-chat-heading"
          className="flex min-h-[32rem] flex-col rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:col-span-8"
        >
          <h2 id="hail-al-chat-heading" className="sr-only">
            Hail Al chat
          </h2>
          <div className="flex min-h-0 flex-1 flex-col rounded-xl bg-paper">
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-6">
              {messages.length === 0 && !pending ? (
                <div className="flex h-full flex-col justify-end gap-6 py-4">
                  <p className="max-w-md text-stone">
                    Channel open. {catalog.length} SKUs in the bay, plus a tagged
                    search across Amazon UK tech. Start with a job, not a brand —
                    or search the aisle above.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="h-11 rounded-full bg-cream px-4 text-sm text-ink shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-clay hover:text-paper hover:shadow-none"
                        onClick={() => send(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((m, i) => (
                    <Bubble key={`${m.role}-${i}`} turn={m} />
                  ))}
                  {pending ? (
                    <p className="text-sm text-dust">Al is scanning cargo…</p>
                  ) : null}
                  {error ? <p className="text-sm text-clay">{error}</p> : null}
                  <div ref={bottomRef} />
                </>
              )}
            </div>
            <form
              className="border-t border-line p-3 sm:p-4"
              onSubmit={(e) => {
                e.preventDefault();
                void send(draft);
              }}
            >
              <div className="flex items-end gap-2">
                <Textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send(draft);
                    }
                  }}
                  placeholder="What should Al fly?"
                  aria-label="Message to Al"
                  rows={2}
                  className="min-h-14 w-auto min-w-0 flex-1 resize-none"
                  maxLength={600}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="shrink-0"
                  disabled={pending || !draft.trim()}
                  aria-label="Send to Al"
                >
                  <ArrowUp className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function CatalogHit({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="flex gap-3 rounded-xl bg-cream p-2 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <img
        src={product.image}
        alt=""
        className="size-16 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
      />
      <span className="min-w-0 py-1">
        <span className="block truncate font-display text-sm font-medium">{product.name}</span>
        <span className="mt-0.5 block truncate text-xs text-stone">{product.tagline}</span>
        <span className="mt-1 block text-xs tabular-nums text-dust">
          {isAmazonPick(product) ? "Amazon UK pick" : formatPrice(product.price)}
        </span>
      </span>
    </Link>
  );
}

function Bubble({ turn }: { turn: ChatTurn }) {
  const parsed = useMemo(
    () => (turn.role === "assistant" ? parseAskAlReply(turn.content) : null),
    [turn],
  );

  if (turn.role === "user") {
    return (
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-clay px-4 py-3 text-paper">
        <p className="text-sm leading-relaxed">{turn.content}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[92%]">
      <div className="rounded-2xl rounded-bl-md bg-cream px-4 py-3 shadow-[var(--shadow-border)]">
        <p className="text-sm leading-relaxed whitespace-pre-wrap text-ink">
          {parsed?.cleaned ?? turn.content}
        </p>
      </div>
      {parsed?.slugs.length ? (
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {parsed.slugs.map((slug) => {
            const product = getProduct(slug);
            if (!product) return null;
            return (
              <li key={slug}>
                <CatalogHit product={product} />
              </li>
            );
          })}
        </ul>
      ) : null}
      {parsed?.searches.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {parsed.searches.map((query) => (
            <AmazonSearchLink key={query} query={query} variant="chip" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
