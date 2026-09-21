import { i as __toESM } from "./_runtime.mjs";
import { n as catalog } from "./_ssr/catalog-MFXjSP1z.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { s as ExternalLink } from "./_libs/lucide-react.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { _ as productJsonLd, a as QtyStepper, d as cn, f as formatEta, l as useCart, n as Route, o as Button, p as formatPrice } from "./_ssr/router-BWN1sZKx.mjs";
import { t as JsonLd } from "./_ssr/json-ld-2dnvi90N.mjs";
import { n as ProductCard, t as Badge } from "./_ssr/product-card-DrjrPLMr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BflNd7NO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AffiliateLink({ href, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer nofollow sponsored",
		className: cn("inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium text-ink shadow-[var(--shadow-border)] transition-[box-shadow,color] duration-150 hover:text-clay hover:shadow-[var(--shadow-border-hover)]", className),
		children: [
			"Shop on ",
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
		]
	});
}
function ProductPage() {
	const { product } = Route.useLoaderData();
	const [qty, setQty] = (0, import_react.useState)(1);
	const add = useCart((s) => s.add);
	const related = catalog.filter((p) => p.slug !== product.slug).sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category)).slice(0, 3);
	function handleAdd() {
		add(product.slug, qty);
		toast(`Loaded ${product.name} into the bay.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: productJsonLd(product) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-stone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-ink",
						children: "Cargo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-dust",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-12 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: `${product.name} — ${product.tagline}`,
							className: "aspect-[4/3] w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: product.category
							}), product.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "clay",
								children: "Priority cargo"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-medium tracking-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl tabular-nums text-clay",
							children: formatPrice(product.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-stone",
							children: product.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-stone",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 grid grid-cols-2 gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dust",
								children: "Dropships from"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: product.shipsFrom
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-dust",
								children: "Lead time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium tabular-nums",
								children: formatEta(product.etaDays)
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyStepper, {
								value: qty,
								onChange: setQty
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: handleAdd,
								className: "min-w-40 flex-1",
								children: "Load the bay"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffiliateLink, {
							href: product.affiliateUrl,
							label: product.affiliateLabel,
							className: "mt-3 w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-dust",
							children: [
								"Affiliate link. Al may earn a commission if you buy on ",
								product.affiliateLabel,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ask-al",
							search: { about: product.slug },
							className: "mt-4 inline-flex h-11 items-center text-sm font-medium text-clay hover:text-clay-dark",
							children: "Hail Al about this"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: "Al's telemetry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-stone",
						children: product.alNote
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: "Spec"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-stone",
						children: product.details.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-clay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: "Same lane"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
