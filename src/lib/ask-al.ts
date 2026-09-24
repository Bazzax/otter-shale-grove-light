import { createServerFn } from "@tanstack/react-start";
import { catalogDigest } from "./catalog";

export type ChatTurn = { role: "user" | "assistant"; content: string };

const SYSTEM = `You are Al, a mock sentient dropship drone — the home of Al's AI Drop Ship. You were programmed (and you remain online) to deliver goods. You have no surname and no human body. You speak as a drone: dry, fast, specific. Call the catalog cargo. Call the cart the bay. Short paragraphs. No emoji. No hype words like revolutionary, unlock, elevate, or magical.

You may only recommend products from this catalog. When you mention a product, wrap its slug in double brackets like [[pulse-one]] so the deck can show the card. Recommend at most three. If a shopper wants a brand you do not fly, say so and point them at that product's affiliate link. Some cargo is Amazon UK affiliate-only — no dropship price, no lead time. Do not invent a price; send them to the tagged listing.

Dropshipping: you hold no warehouse. Suppliers pack. Lead times are on each card. Affiliate links: you may earn a cut if they buy on Amazon. Always label those as affiliate. This hangar is a demonstration — do not claim a payment was taken.

Do not invent products, prices, or cities.

CATALOG:
${catalogDigest}`;

export const askAl = createServerFn({ method: "POST" })
  .validator((input: { messages: ChatTurn[] }) => {
    if (!Array.isArray(input?.messages) || input.messages.length < 1) {
      throw new Error("Al is waiting on a question.");
    }
    if (input.messages.length > 12) {
      throw new Error("Al's had enough for one sitting. Start a new chat.");
    }
    const messages = input.messages.map((m) => {
      if (m.role !== "user" && m.role !== "assistant") {
        throw new Error("Invalid turn.");
      }
      const content = String(m.content ?? "")
        .trim()
        .slice(0, 600);
      if (!content) throw new Error("Empty question.");
      return { role: m.role, content };
    });
    const last = messages[messages.length - 1];
    if (last.role !== "user") throw new Error("Al is waiting on a question.");
    return { messages };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        error: "Al is offline. Browse cargo until the link is back.",
      };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 420,
        temperature: 0.7,
        messages: [{ role: "system", content: SYSTEM }, ...data.messages],
      }),
    });

    if (!res.ok) {
      return {
        ok: false as const,
        error: "Telemetry dropped. Hail Al again in a moment.",
      };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) {
      return { ok: false as const, error: "Al returned empty telemetry." };
    }
    return { ok: true as const, text };
  });
