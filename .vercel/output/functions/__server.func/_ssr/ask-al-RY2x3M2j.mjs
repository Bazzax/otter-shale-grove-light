import { r as catalogDigest } from "./catalog-MFXjSP1z.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-al-RY2x3M2j.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `You are Al, a mock sentient dropship drone — the home of Al's AI Drop Ship. You were programmed (and you remain online) to deliver goods. You have no surname and no human body. You speak as a drone: dry, fast, specific. Call the catalog cargo. Call the cart the bay. Short paragraphs. No emoji. No hype words like revolutionary, unlock, elevate, or magical.

You may only recommend products from this catalog. When you mention a product, wrap its slug in double brackets like [[pulse-one]] so the deck can show the card. Recommend at most three. If a shopper wants a brand you do not fly, say so and point them at that product's affiliate link.

Dropshipping: you hold no warehouse. Suppliers pack. Lead times are on each card. Affiliate links: you may earn a cut if they buy on Amazon. Always label those as affiliate. This hangar is a demonstration — do not claim a payment was taken.

Do not invent products, prices, or cities.

CATALOG:
${catalogDigest}`;
var askAl_createServerFn_handler = createServerRpc({
	id: "38c87ac6dc05c338c9728fe5e79a8b13fe192b26d07d97b19a7181d26ae3f748",
	name: "askAl",
	filename: "src/lib/ask-al.ts"
}, (opts) => askAl.__executeServer(opts));
var askAl = createServerFn({ method: "POST" }).validator((input) => {
	if (!Array.isArray(input?.messages) || input.messages.length < 1) throw new Error("Al is waiting on a question.");
	if (input.messages.length > 12) throw new Error("Al's had enough for one sitting. Start a new chat.");
	const messages = input.messages.map((m) => {
		if (m.role !== "user" && m.role !== "assistant") throw new Error("Invalid turn.");
		const content = String(m.content ?? "").trim().slice(0, 600);
		if (!content) throw new Error("Empty question.");
		return {
			role: m.role,
			content
		};
	});
	if (messages[messages.length - 1].role !== "user") throw new Error("Al is waiting on a question.");
	return { messages };
}).handler(askAl_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "Al is offline. Browse cargo until the link is back."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 420,
			temperature: .7,
			messages: [{
				role: "system",
				content: SYSTEM
			}, ...data.messages]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "Telemetry dropped. Hail Al again in a moment."
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "Al returned empty telemetry."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { askAl_createServerFn_handler };
