import { i as __toESM } from "../_runtime.mjs";
import { i as featuredProducts, n as catalog } from "./catalog-MFXjSP1z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as cn, g as faqJsonLd, h as FAQS, m as APP_TAGLINE, o as Button, u as useHydrated, v as websiteJsonLd } from "./router-BWN1sZKx.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { n as ProductCard } from "./product-card-DrjrPLMr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-rpx6jun9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	"AL-1 ONLINE",
	"PAYLOAD 9",
	"NO WAREHOUSE",
	"AFFILIATE ARMED",
	"ETA ON EVERY CARD",
	"HAIL AL"
];
var loop = [...items, ...items];
function CityTicker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-clay text-paper",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-8 py-3.5 pr-8 whitespace-nowrap",
			children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-8 text-sm font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display tracking-tight",
					children: item
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-paper" })]
			}, `${item}-${i}`))
		})
	});
}
function Telemetry() {
	const hydrated = useHydrated();
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const id = window.setInterval(() => setTick((n) => n + 1), 1800);
		return () => window.clearInterval(id);
	}, [hydrated]);
	const heading = ((184 + tick * 3) % 360).toString().padStart(3, "0");
	const alt = 120 + tick % 7;
	const cells = [
		{
			k: "Callsign",
			v: "AL-1"
		},
		{
			k: "Status",
			v: "ONLINE",
			hot: true
		},
		{
			k: "Payload",
			v: String(catalog.length)
		},
		{
			k: "HDG",
			v: `${heading}°`
		},
		{
			k: "ALT",
			v: `${alt} m`
		},
		{
			k: "Hold",
			v: "NONE"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-3 lg:grid-cols-6",
		children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("px-3 py-3", cell.hot ? "bg-clay text-paper" : "bg-cream"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: cn("text-xs tracking-widest uppercase", cell.hot ? "text-paper/80" : "text-dust"),
				children: cell.k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: cn("mt-1 font-display text-lg font-medium tracking-tight tabular-nums", cell.hot ? "text-paper" : "text-clay"),
				children: cell.v
			})]
		}, cell.k))
	});
}
function Home() {
	const featured = featuredProducts();
	const lead = featured[0];
	const restFeatured = featured.slice(1);
	const rest = catalog.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: websiteJsonLd() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: faqJsonLd(FAQS) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in inline-flex h-8 items-center gap-2 rounded-full bg-clay px-3 text-xs font-medium tracking-widest text-paper uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "online-dot size-2 rounded-full bg-paper" }), "Online · programmed to deliver"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise-in-2 mt-5 font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl",
							children: ["Al's AI ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-clay",
								children: "Drop Ship"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in-3 mt-5 max-w-xl text-lg leading-relaxed text-stone",
							children: [APP_TAGLINE, " Hail the drone for a short tech catalog. Cargo dropships from suppliers. Affiliate links fire when the better buy is already in the wild."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in-3 mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									children: ["Open the cargo bay", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/ask-al",
									children: "Hail Al"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "rise-in-3 lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "drone-hover overflow-hidden rounded-2xl bg-cream p-2 shadow-[var(--shadow-border-hover)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/hero.jpg",
								alt: "Al, a compact charcoal delivery drone with mint visor lights, hovering over a hangar pad",
								className: "aspect-video w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-ink/10 lg:aspect-[4/3]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-3 text-sm text-stone",
							children: "Callsign AL-1. Always online. Never a warehouse."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 pb-10 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Telemetry, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityTicker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-clay uppercase",
						children: "Flight plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl",
						children: "How the drone delivers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								n: "01",
								title: "Hail",
								body: "Tell Al a job: quiet desk, travel kit, fastest ship. The drone only recommends cargo it actually flies."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								n: "02",
								title: "Dropship",
								body: "No hangar inventory. Add to the bay and a supplier packs it. Lead times sit on every card."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								n: "03",
								title: "Affiliate",
								body: "Need a brand Al does not stock? Jump the Amazon link. Those are affiliate. Al may earn a cut."
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/hangar.jpg",
					alt: "Night hangar pad with mint runway lights and stacked cargo crates",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-paper/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-clay uppercase",
							children: "From the visor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl",
							children: "“I was compiled to move cargo. I stayed online. The bay is short on purpose.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-stone",
							children: "— Al, dropship drone"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-clay uppercase",
					children: "Priority cargo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: "What Al flies first"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "hidden items-center gap-1 text-sm font-medium text-clay hover:text-clay-dark sm:inline-flex",
					children: ["Full bay", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: lead,
						size: "lg"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5",
					children: restFeatured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
				})]
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-clay uppercase",
					children: "Also in the bay"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl",
					children: "Secondary payload"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: rest.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-clay uppercase",
						children: "Briefing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Questions Al already answered"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 grid gap-8 md:grid-cols-2",
						children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-xl font-medium tracking-tight",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm leading-relaxed text-stone",
							children: item.a
						})] }, item.q))
					})
				]
			})
		})
	] });
}
function Step({ n, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "inline-flex size-10 items-center justify-center rounded-full bg-clay font-display text-sm tabular-nums text-paper",
			children: n
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-4 font-display text-2xl font-medium tracking-tight",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-stone",
			children: body
		})
	] });
}
//#endregion
export { Home as component };
