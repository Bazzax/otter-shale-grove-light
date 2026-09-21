import { i as __toESM } from "../_runtime.mjs";
import { a as getProduct, n as catalog } from "./catalog-MFXjSP1z.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Minus, i as Plus, n as TriangleAlert, o as Menu, r as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-B0yeMtCb.js
var APP_NAME = "Al's AI Drop Ship";
var APP_TAGLINE = "A sentient dropship drone, online, programmed to deliver.";
var APP_DESCRIPTION = "Al is a mock sentient delivery drone. Hail Al for a short tech catalog — dropship cargo from suppliers, or follow marked affiliate links. Demo checkout; nothing is billed.";
function pageHead(title, description) {
	return { meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] };
}
function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "Organization",
			name: APP_NAME,
			description: APP_DESCRIPTION,
			slogan: APP_TAGLINE
		}, {
			"@type": "WebSite",
			name: APP_NAME,
			description: APP_DESCRIPTION,
			potentialAction: {
				"@type": "SearchAction",
				target: "/shop?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}]
	};
}
function productJsonLd(product) {
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image: product.image,
		category: product.category,
		brand: {
			"@type": "Brand",
			name: APP_NAME
		},
		offers: {
			"@type": "Offer",
			priceCurrency: "USD",
			price: product.price.toFixed(2),
			availability: "https://schema.org/InStock",
			url: `/shop/${product.slug}`
		}
	};
}
function faqJsonLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
}
var FAQS = [
	{
		q: "Who is Al?",
		a: "Al is a mock sentient dropship drone. Programmed — albeit online — to source a short tech catalog and deliver it. Al has no surname and no warehouse."
	},
	{
		q: "How does dropshipping work here?",
		a: "Al does not hold stock. Add cargo to the bay and a supplier packs it. Lead times are printed on every product. This demo does not charge or ship."
	},
	{
		q: "What are the Amazon buttons?",
		a: "Affiliate links. If Al does not stock the brand you want, shop the wider market. Al may earn a commission. Those links are marked sponsored."
	},
	{
		q: "Will I be charged?",
		a: "No. Checkout is a demonstration. Affiliate clicks go to the retailer. Nothing is billed by Al."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C0qDabj2.js
function formatPrice(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
function formatEta(days) {
	return `${days[0]}–${days[1]} days`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BWN1sZKx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-line bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-medium tracking-tight text-clay",
						children: APP_NAME
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xs text-sm leading-relaxed text-pretty text-stone",
						children: "Al is a mock sentient dropship drone — programmed, albeit online, to deliver the goods. No warehouse. Demo cargo is not billed. Affiliate jumps are marked."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-dust uppercase",
						children: "Deck"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "text-ink hover:text-clay",
								children: "Cargo"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ask-al",
								className: "text-ink hover:text-clay",
								children: "Hail Al"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								className: "text-ink hover:text-clay",
								children: "Bay"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-dust uppercase",
					children: "Disclosure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-pretty text-stone",
					children: "“Shop on Amazon” is an affiliate link. Al may earn a cut. Dropship checkout here is theatre — nothing packs, nothing charges."
				})] })
			]
		})
	});
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function makeOrderId() {
	return `AL-${Math.floor(1e4 + Math.random() * 9e4)}`;
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	lastOrder: null,
	add: (slug, qty = 1) => {
		if (!getProduct(slug)) return;
		const lines = get().lines;
		if (lines.find((l) => l.slug === slug)) set({ lines: lines.map((l) => l.slug === slug ? {
			...l,
			qty: Math.min(l.qty + qty, 9)
		} : l) });
		else set({ lines: [...lines, {
			slug,
			qty: Math.min(qty, 9)
		}] });
	},
	setQty: (slug, qty) => {
		if (qty < 1) {
			set({ lines: get().lines.filter((l) => l.slug !== slug) });
			return;
		}
		set({ lines: get().lines.map((l) => l.slug === slug ? {
			...l,
			qty: Math.min(qty, 9)
		} : l) });
	},
	remove: (slug) => set({ lines: get().lines.filter((l) => l.slug !== slug) }),
	clear: () => set({ lines: [] }),
	placeOrder: (details) => {
		const lines = get().lines.map((l) => {
			const product = getProduct(l.slug);
			if (!product) return null;
			return {
				slug: l.slug,
				qty: l.qty,
				name: product.name,
				price: product.price,
				image: product.image
			};
		}).filter((l) => l !== null);
		const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
		const order = {
			...details,
			id: makeOrderId(),
			lines,
			total,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({
			lastOrder: order,
			lines: []
		});
		return order;
	}
}), { name: "als-emporium-cart-v1" }));
function cartCount(lines) {
	return lines.reduce((n, l) => n + l.qty, 0);
}
function cartTotal(lines) {
	return lines.reduce((sum, l) => {
		const product = catalog.find((p) => p.slug === l.slug);
		return sum + (product ? product.price * l.qty : 0);
	}, 0);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-clay text-paper hover:bg-clay-dark",
			secondary: "bg-transparent text-clay shadow-[0_0_0_1px_var(--color-clay)] hover:bg-clay hover:text-paper hover:shadow-none",
			ghost: "bg-transparent text-ink hover:bg-ink/5",
			inverse: "bg-ink text-paper hover:bg-ink/90"
		},
		size: {
			sm: "h-10 rounded-lg px-3.5 text-sm",
			md: "h-11 rounded-lg px-4 text-sm",
			lg: "h-12 rounded-xl px-5 text-base",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-paper/80", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-paper text-ink shadow-xl", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-lg text-stone hover:bg-ink/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 p-6 pr-14", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-2xl font-medium tracking-tight", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		className: cn("text-sm text-stone", className),
		...props
	});
}
function QtyStepper({ value, onChange, min = 1, max = 9, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex h-11 items-center rounded-lg bg-cream shadow-[var(--shadow-border)]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-11 items-center justify-center text-ink hover:bg-ink/5 disabled:opacity-40",
				onClick: () => onChange(Math.max(min, value - 1)),
				disabled: value <= min,
				"aria-label": "Decrease quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "flex size-11 items-center justify-center text-ink hover:bg-ink/5 disabled:opacity-40",
				onClick: () => onChange(Math.min(max, value + 1)),
				disabled: value >= max,
				"aria-label": "Increase quantity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
function CartSheet({ open, onOpenChange }) {
	const hydrated = useHydrated();
	const lines = useCart((s) => s.lines);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const count = hydrated ? cartCount(lines) : 0;
	const total = hydrated ? cartTotal(lines) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Cargo bay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: count === 0 ? "Empty. Load dropship cargo, or use an affiliate link on a product." : `${count} ${count === 1 ? "item" : "items"} ready to dropship.` })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-0 flex-1 flex-col",
			children: count === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-8 text-dust" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-sm text-pretty text-stone",
						children: "Al stocks a short tech list. The bay is for dropship. Amazon buttons are affiliate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: () => onOpenChange(false),
							children: "Browse the cargo"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-h-0 flex-1 space-y-4 overflow-y-auto px-6",
				children: lines.map((line) => {
					const product = getProduct(line.slug);
					if (!product) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop/$slug",
							params: { slug: product.slug },
							onClick: () => onOpenChange(false),
							className: "size-20 shrink-0 overflow-hidden rounded-lg bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								className: "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop/$slug",
										params: { slug: product.slug },
										onClick: () => onOpenChange(false),
										className: "font-display text-base font-medium tracking-tight",
										children: product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm tabular-nums text-stone",
										children: formatPrice(product.price)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-xs text-dust hover:text-ink",
									onClick: () => remove(line.slug),
									children: "Remove"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
								value: line.qty,
								min: 1,
								onChange: (qty) => setQty(line.slug, qty)
							})]
						})]
					}, line.slug);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-line p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-stone",
							children: "Estimated total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tabular-nums",
							children: formatPrice(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs text-pretty text-dust",
						children: "Demo bay. No payment. Dropship lead times are on each product."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							onClick: () => onOpenChange(false),
							children: "Checkout"
						})
					})
				]
			})] })
		})] })
	});
}
var nav = [{
	to: "/shop",
	label: "Cargo"
}, {
	to: "/ask-al",
	label: "Hail Al"
}];
function SiteHeader() {
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const hydrated = useHydrated();
	const lines = useCart((s) => s.lines);
	const count = hydrated ? cartCount(lines) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-clay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-3",
						onClick: () => setMenuOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "online-dot size-2.5 shrink-0 rounded-full bg-clay",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-medium tracking-tight text-clay sm:text-2xl",
								children: "Al's"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs font-medium tracking-widest text-clay uppercase",
								children: "Drop Ship"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 md:flex",
						"aria-label": "Primary",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm font-medium text-stone transition-colors duration-150 hover:text-clay",
							activeProps: { className: "text-clay" },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "relative flex size-11 items-center justify-center rounded-lg text-ink hover:bg-ink/5 hover:text-clay",
							onClick: () => setCartOpen(true),
							"aria-label": count ? `Open cargo bay, ${count} items` : "Open cargo bay",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-clay text-xs leading-none font-medium text-paper tabular-nums",
								children: count
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-11 items-center justify-center rounded-lg text-ink hover:bg-ink/5 hover:text-clay md:hidden",
							onClick: () => setMenuOpen((v) => !v),
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							"aria-expanded": menuOpen,
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("border-t border-line md:hidden", menuOpen ? "block" : "hidden"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl flex-col px-4 py-2",
					"aria-label": "Mobile",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "flex h-12 items-center text-base text-ink",
						onClick: () => setMenuOpen(false),
						children: item.label
					}, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {
				open: cartOpen,
				onOpenChange: setCartOpen
			})
		]
	});
}
var styles_default = "/assets/styles-Cw07by1c.css";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: APP_DESCRIPTION
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#00FFC2"
			},
			{
				name: "author",
				content: "Al, dropship drone"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-dvh flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					position: "bottom-right",
					toastOptions: { className: "font-sans bg-cream text-ink border-0 shadow-[var(--shadow-border)]" }
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex w-full max-w-xl flex-1 flex-col items-start justify-center px-4 py-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-dust uppercase",
				children: "Off course"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium tracking-tight",
				children: "Al has no waypoint for that."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-stone",
				children: "That route is empty air. Open the cargo bay, or hail the drone."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/shop",
				className: "mt-8 text-sm font-medium text-clay hover:text-clay-dark",
				children: "Back to cargo"
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-rpx6jun9.mjs");
var Route$5 = createFileRoute("/")({
	head: () => pageHead(`${APP_NAME} | Sentient delivery drone`, APP_DESCRIPTION),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./ask-al-BdTNfjRY.mjs");
var Route$4 = createFileRoute("/ask-al")({
	validateSearch: (search) => ({ about: typeof search.about === "string" ? search.about : void 0 }),
	head: () => pageHead(`Hail Al | ${APP_NAME}`, "Radio the sentient dropship drone. Al recommends cargo from the bay and flags affiliate links when that is the better buy."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./checkout-AamYEMYR.mjs");
var Route$3 = createFileRoute("/checkout")({
	head: () => pageHead(`Bay | ${APP_NAME}`, "Demo dropship checkout for Al's AI Drop Ship. Nothing is billed. Affiliate Amazon buttons live on product cards."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./order-C2QCTeuk.mjs");
var Route$2 = createFileRoute("/order")({
	head: () => ({ meta: [{ title: `Flight logged | ${APP_NAME}` }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./shop-CE8gtszj.mjs");
var Route$1 = createFileRoute("/shop/")({
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : void 0 }),
	head: () => pageHead(`Cargo bay | ${APP_NAME}`, "Nine tech SKUs Al dropships, plus affiliate links on every card. Filter by audio, power, desk, storage, or carry."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-BflNd7NO.mjs");
var Route = createFileRoute("/shop/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const product = loaderData?.product;
		if (!product) return pageHead(`Cargo | ${APP_NAME}`, "Product not in the bay.");
		return pageHead(`${product.name} — dropship from Al | ${APP_NAME}`, `${product.tagline} Dropships from ${product.shipsFrom}. Affiliate link to ${product.affiliateLabel} on this card.`);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AskAlRoute = Route$4.update({
	id: "/ask-al",
	path: "/ask-al",
	getParentRoute: () => Route$6
});
var CheckoutRoute = Route$3.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$6
});
var OrderRoute = Route$2.update({
	id: "/order",
	path: "/order",
	getParentRoute: () => Route$6
});
var ShopIndexRoute = Route$1.update({
	id: "/shop/",
	path: "/shop/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AskAlRoute,
	CheckoutRoute,
	OrderRoute,
	ShopSlugRoute: Route.update({
		id: "/shop/$slug",
		path: "/shop/$slug",
		getParentRoute: () => Route$6
	}),
	ShopIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { productJsonLd as _, QtyStepper as a, cartTotal as c, cn as d, formatEta as f, faqJsonLd as g, FAQS as h, Route$4 as i, useCart as l, APP_TAGLINE as m, Route as n, Button as o, formatPrice as p, Route$1 as r, cartCount as s, router_exports as t, useHydrated as u, websiteJsonLd as v };
