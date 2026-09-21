import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as cn, p as formatPrice } from "./router-BWN1sZKx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-DrjrPLMr.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-ink/10 text-ink",
		clay: "bg-clay text-paper",
		outline: "shadow-[var(--shadow-border)] text-stone"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function ProductCard({ product, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/shop/$slug",
		params: { slug: product.slug },
		className: cn("group flex flex-col rounded-2xl bg-cream p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]", size === "lg" && "lg:row-span-2"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl bg-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.name} — ${product.tagline}`,
				className: cn("w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-300 ease-out group-hover:scale-[1.04]", size === "lg" ? "aspect-[4/3] lg:aspect-[4/5] lg:min-h-full" : "aspect-[4/3]")
			}), product.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "clay",
				className: "absolute top-3 left-3",
				children: "Priority cargo"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-1 px-3 pt-4 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-medium tracking-tight text-balance",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tabular-nums text-clay",
						children: formatPrice(product.price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-pretty text-stone",
					children: product.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs tracking-wide text-dust uppercase",
					children: [
						product.category,
						" · ",
						product.affiliateLabel,
						" affiliate"
					]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as n, Badge as t };
