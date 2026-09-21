import { i as __toESM } from "../_runtime.mjs";
import { a as getProduct } from "./catalog-MFXjSP1z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as ArrowUp } from "../_libs/lucide-react.mjs";
import { d as cn, i as Route$4, o as Button, p as formatPrice } from "./router-BWN1sZKx.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as Textarea } from "./textarea-BpPs8qTt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-al-BdTNfjRY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
}).handler(createSsrRpc("38c87ac6dc05c338c9728fe5e79a8b13fe192b26d07d97b19a7181d26ae3f748"));
var SUGGESTIONS = [
	"A quiet desk setup.",
	"Best charger under fifty.",
	"Travel kit for a week.",
	"What ships the fastest?"
];
function parseReply(text) {
	const slugs = [];
	return {
		cleaned: text.replace(/\[\[([a-z0-9-]+)\]\]/g, (_m, slug) => {
			if (!slugs.includes(slug) && getProduct(slug)) slugs.push(slug);
			const product = getProduct(slug);
			return product ? product.name : slug;
		}),
		slugs
	};
}
function AskAlPage() {
	const { about } = Route$4.useSearch();
	const aboutProduct = about ? getProduct(about) : void 0;
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const bottomRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (aboutProduct) setDraft(`Is ${aboutProduct.name} worth loading into the bay, or should I use the affiliate link?`);
	}, [aboutProduct]);
	(0, import_react.useEffect)(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, pending]);
	async function send(text) {
		const content = text.trim();
		if (!content || pending) return;
		const next = [...messages, {
			role: "user",
			content
		}];
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
			setMessages([...next, {
				role: "assistant",
				content: result.text
			}]);
		} catch {
			setError("Telemetry dropped. Hail Al again in a moment.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid flex-1 gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-clay uppercase",
						children: "Radio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight",
						children: "Hail Al"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-stone",
						children: "The drone is online. Name a job — quiet desk, travel kit, fastest ship. Al only flies cargo in the bay, and will flag affiliate links when that is the better buy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 hidden overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/al-drone.jpg",
							alt: "Al the delivery drone, charcoal airframe with a mint visor",
							className: "aspect-[4/3] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "flex min-h-[32rem] flex-col rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1 flex-col rounded-xl bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-6",
						children: messages.length === 0 && !pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col justify-end gap-6 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-stone",
								children: "Channel open. Nine SKUs in the bay, affiliate armed. Start with a job, not a brand."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: SUGGESTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-11 rounded-full bg-cream px-4 text-sm text-ink shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-clay hover:text-paper hover:shadow-none",
									onClick: () => send(item),
									children: item
								}, item))
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, { turn: m }, `${m.role}-${i}`)),
							pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-dust",
								children: "Al is scanning cargo…"
							}) : null,
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-clay",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						className: "border-t border-line p-3 sm:p-4",
						onSubmit: (e) => {
							e.preventDefault();
							send(draft);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										send(draft);
									}
								},
								placeholder: "What should Al fly?",
								"aria-label": "Message to Al",
								rows: 2,
								className: "min-h-14 w-auto min-w-0 flex-1 resize-none",
								maxLength: 600
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "icon",
								className: "shrink-0",
								disabled: pending || !draft.trim(),
								"aria-label": "Send to Al",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
							})]
						})
					})]
				})
			})]
		})
	});
}
function Bubble({ turn }) {
	const parsed = (0, import_react.useMemo)(() => turn.role === "assistant" ? parseReply(turn.content) : null, [turn]);
	if (turn.role === "user") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-clay px-4 py-3 text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed",
			children: turn.content
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[92%]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl rounded-bl-md bg-cream px-4 py-3 shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed whitespace-pre-wrap text-ink",
				children: parsed?.cleaned ?? turn.content
			})
		}), parsed?.slugs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: parsed.slugs.map((slug) => {
				const product = getProduct(slug);
				if (!product) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop/$slug",
					params: { slug },
					className: cn("flex gap-3 rounded-xl bg-cream p-2 shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: "",
						className: "size-16 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display text-sm font-medium",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs tabular-nums text-stone",
							children: formatPrice(product.price)
						})]
					})]
				}) }, slug);
			})
		}) : null]
	});
}
//#endregion
export { AskAlPage as component };
