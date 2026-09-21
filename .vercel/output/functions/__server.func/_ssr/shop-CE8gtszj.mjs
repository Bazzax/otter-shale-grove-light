import { i as __toESM } from "../_runtime.mjs";
import { n as catalog, t as CATEGORIES } from "./catalog-MFXjSP1z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as cn, r as Route$1 } from "./router-BWN1sZKx.mjs";
import { n as ProductCard } from "./product-card-DrjrPLMr.mjs";
import { t as Input } from "./input-CM9yqk1a.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CE8gtszj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { q } = Route$1.useSearch();
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)(q ?? "");
	const products = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return catalog.filter((p) => {
			if (filter !== "All" && p.category !== filter) return false;
			if (!needle) return true;
			return p.name.toLowerCase().includes(needle) || p.tagline.toLowerCase().includes(needle) || p.category.toLowerCase().includes(needle) || p.affiliateLabel.toLowerCase().includes(needle);
		});
	}, [filter, query]);
	const filters = ["All", ...CATEGORIES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-clay uppercase",
				children: "Nine SKUs · affiliate on every card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl",
				children: "Cargo bay"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-stone",
				children: "Dropship from the bay, or jump Amazon. Filter by desk, power, audio, storage, carry."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter cargo",
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item),
						className: cn("h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", filter === item ? "bg-clay text-paper" : "bg-cream text-stone shadow-[var(--shadow-border)] hover:text-ink"),
						children: item
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full sm:max-w-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search cargo",
						"aria-label": "Search cargo"
					})
				})]
			}),
			products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-stone",
				children: "Nothing in that lane. Hail Al, or clear the filter."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		]
	});
}
//#endregion
export { ShopPage as component };
