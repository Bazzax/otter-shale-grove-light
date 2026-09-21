import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { askAl, type ChatTurn } from "@/lib/ask-al";
import { getProduct } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { APP_NAME, pageHead } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type AskSearch = { about?: string };

export const Route = createFileRoute("/ask-al")({
  validateSearch: (search: Record<string, unknown>): AskSearch => ({
    about: typeof search.about === "string" ? search.about : undefined,
  }),
  head: () =>
    pageHead(
      `Hail Al | ${APP_NAME}`,
      "Radio the sentient dropship drone. Al recommends cargo from the bay and flags affiliate links when that is the better buy.",
    ),
  component: AskAlPage,
});

const SUGGESTIONS = [
  "A quiet desk setup.",
  "Best charger under fifty.",
  "Travel kit for a week.",
  "What ships the fastest?",
];

function parseReply(text: string) {
  const slugs: string[] = [];
  const cleaned = text.replace(/\[\[([a-z0-9-]+)\]\]/g, (_m, slug: string) => {
    if (!slugs.includes(slug) && getProduct(slug)) slugs.push(slug);
    const product = getProduct(slug);
    return product ? product.name : slug;
  });
  return { cleaned, slugs };
}

function AskAlPage() {
  const { about } = Route.useSearch();
  const aboutProduct = about ? getProduct(about) : undefined;
  const [messages, setMessages] = useState<ChatTurn[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutProduct) {
      setDraft(`Is ${aboutProduct.name} worth loading into the bay, or should I use the affiliate link?`);
    }
  }, [aboutProduct]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pending]);

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
      <div className="grid flex-1 gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="text-xs font-medium tracking-widest text-clay uppercase">
            Radio
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">Hail Al</h1>
          <p className="mt-3 text-stone">
            The drone is online. Name a job — quiet desk, travel kit, fastest
            ship. Al only flies cargo in the bay, and will flag affiliate links
            when that is the better buy.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:block">
            <img
              src="/al-drone.jpg"
              alt="Al the delivery drone, charcoal airframe with a mint visor"
              className="aspect-[4/3] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
          </div>
        </aside>

        <section className="flex min-h-[32rem] flex-col rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:col-span-8">
          <div className="flex min-h-0 flex-1 flex-col rounded-xl bg-paper">
            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-6">
              {messages.length === 0 && !pending ? (
                <div className="flex h-full flex-col justify-end gap-6 py-4">
                  <p className="max-w-md text-stone">
                    Channel open. Nine SKUs in the bay, affiliate armed. Start
                    with a job, not a brand.
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

function Bubble({ turn }: { turn: ChatTurn }) {
  const parsed = useMemo(
    () => (turn.role === "assistant" ? parseReply(turn.content) : null),
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
                <Link
                  to="/shop/$slug"
                  params={{ slug }}
                  className={cn(
                    "flex gap-3 rounded-xl bg-cream p-2 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="size-16 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                  />
                  <span className="min-w-0 py-1">
                    <span className="block truncate font-display text-sm font-medium">
                      {product.name}
                    </span>
                    <span className="block text-xs tabular-nums text-stone">
                      {formatPrice(product.price)}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
