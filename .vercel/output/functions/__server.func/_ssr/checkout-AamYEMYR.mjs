import { i as __toESM } from "../_runtime.mjs";
import { a as getProduct } from "./catalog-MFXjSP1z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as cartTotal, d as cn, l as useCart, o as Button, p as formatPrice, s as cartCount, u as useHydrated } from "./router-BWN1sZKx.mjs";
import { t as Textarea } from "./textarea-BpPs8qTt.mjs";
import { t as Input } from "./input-CM9yqk1a.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-AamYEMYR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-ink", className),
	...props
}));
Label.displayName = Root.displayName;
function CheckoutPage() {
	const hydrated = useHydrated();
	const navigate = useNavigate();
	const lines = useCart((s) => s.lines);
	const placeOrder = useCart((s) => s.placeOrder);
	const count = hydrated ? cartCount(lines) : 0;
	const total = hydrated ? cartTotal(lines) : 0;
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		if (!hydrated || count === 0) return;
		if (!name.trim() || !email.trim() || !address.trim() || !city.trim() || !country.trim()) {
			setError("Al needs a name, a place to send it, and an email for the note.");
			return;
		}
		placeOrder({
			name: name.trim(),
			email: email.trim(),
			address: address.trim(),
			city: city.trim(),
			country: country.trim(),
			notes: notes.trim() || void 0
		});
		navigate({ to: "/order" });
	}
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-stone",
			children: "Opening the bay…"
		})
	});
	if (count === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-medium tracking-tight",
				children: "Bay is empty."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-stone",
				children: "Load dropship cargo from the bay, or use an affiliate link on a product."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8 w-fit",
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Open the cargo bay"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid w-full max-w-6xl flex-1 gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-clay uppercase",
					children: "Demonstration only"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight",
					children: "Checkout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-lg text-stone",
					children: "Demo dropship only — no payment. Affiliate Amazon buttons on product cards are separate and live."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 space-y-5",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							htmlFor: "name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								autoComplete: "name",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							htmlFor: "email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								autoComplete: "email",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Street address",
							htmlFor: "address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "address",
								value: address,
								onChange: (e) => setAddress(e.target.value),
								autoComplete: "street-address",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								htmlFor: "city",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "city",
									value: city,
									onChange: (e) => setCity(e.target.value),
									autoComplete: "address-level2",
									required: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Country",
								htmlFor: "country",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "country",
									value: country,
									onChange: (e) => setCountry(e.target.value),
									autoComplete: "country-name",
									required: true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Note for Al (optional)",
							htmlFor: "notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								rows: 3,
								placeholder: "USB-C length, gift note, access code."
							})
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-clay",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full sm:w-auto",
							children: "Confirm demo order"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: "Dropship crate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-4",
						children: lines.map((line) => {
							const product = getProduct(line.slug);
							if (!product) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: "",
									className: "size-16 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate font-medium",
										children: product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-stone tabular-nums",
										children: [
											line.qty,
											" × ",
											formatPrice(product.price)
										]
									})]
								})]
							}, line.slug);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-baseline justify-between border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-stone",
							children: "Estimated total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tabular-nums",
							children: formatPrice(total)
						})]
					})
				]
			})
		})]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
//#endregion
export { CheckoutPage as component };
