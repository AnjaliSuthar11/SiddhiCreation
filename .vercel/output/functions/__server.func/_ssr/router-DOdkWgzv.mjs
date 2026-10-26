import { o as __toESM } from "../_runtime.mjs";
import { d as services, i as company, p as whatsappLink, r as cn } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Linkedin, i as MessageCircle, l as Instagram, o as MapPin, r as Phone, s as Mail, t as X, u as Facebook } from "../_libs/lucide-react.mjs";
import { t as Route$9 } from "./projects._slug-CXiH6Nq3.mjs";
import { t as Route$10 } from "./services._slug-Ca1ZqTDU.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_cloudinary } from "../_libs/cloudinary+lodash.mjs";
import { t as nodemailer } from "../_libs/nodemailer.mjs";
import { Buffer } from "node:buffer";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DOdkWgzv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_cloudinary = require_cloudinary();
var styles_default = "/assets/styles-k4Fy1oIm.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/clients",
		label: "Clients"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "border-b border-ink-foreground/10 bg-ink/85 backdrop-blur-xl" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/favicon.ico",
							alt: "Siddhi On Creation",
							className: "w-5"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-xl tracking-wide text-ink-foreground sm:text-2xl",
							children: [
								"Siddhi ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "On"
								}),
								" Creation"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 text-[0.6rem] tracking-[0.3em] text-ink-foreground/50 uppercase",
						children: ["& ", company.sister]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-gold" },
						className: "text-[0.8rem] tracking-[0.14em] text-ink-foreground/75 uppercase transition-colors hover:text-gold",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden border border-gold/60 px-6 py-3 text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-ink sm:inline-block",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "p-2 text-ink-foreground lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("overflow-hidden border-t border-ink-foreground/10 bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden", open ? "max-h-[32rem]" : "max-h-0 border-t-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-6 py-6",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: item.to === "/" },
					activeProps: { className: "text-gold" },
					className: "border-b border-ink-foreground/10 py-4 font-display text-2xl text-ink-foreground",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "bg-gold px-6 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink uppercase",
						children: "Get a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: company.phoneHref,
						className: "border border-ink-foreground/25 px-6 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase",
						children: ["Call ", company.phone]
					})]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-ink border-t border-ink-foreground/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl text-ink-foreground",
						children: [
							"Siddhi ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "On"
							}),
							" Creation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[0.6rem] tracking-[0.3em] text-ink-foreground/50 uppercase",
						children: ["& ", company.sister]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/60",
						children: "Creating customised sculptures, murals, decorative elements and architectural artworks for extraordinary spaces — for over 30 years."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-3",
						children: [
							{
								href: company.instagram,
								Icon: Instagram,
								label: "Instagram"
							},
							{
								href: company.facebook,
								Icon: Facebook,
								label: "Facebook"
							},
							{
								href: company.linkedin,
								Icon: Linkedin,
								label: "LinkedIn"
							}
						].map(({ href, Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: "_blank",
							rel: "noreferrer noopener",
							"aria-label": label,
							className: "grid size-10 place-items-center border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, label))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-soft/70",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3 text-sm text-ink-foreground/65",
					children: [
						{
							to: "/",
							label: "Home"
						},
						{
							to: "/about",
							label: "About Us"
						},
						{
							to: "/services",
							label: "Services"
						},
						{
							to: "/projects",
							label: "Projects"
						},
						{
							to: "/gallery",
							label: "Gallery"
						},
						{
							to: "/contact",
							label: "Contact"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "transition-colors hover:text-gold",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-soft/70",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3 text-sm text-ink-foreground/65",
					children: services.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "transition-colors hover:text-gold",
						children: s.title
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-soft/70",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4 text-sm text-ink-foreground/65",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.phoneHref,
								className: "hover:text-gold",
								children: company.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "hover:text-gold",
								children: company.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.address })]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-foreground/10 px-5 py-6 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-[1400px] text-xs text-ink-foreground/40",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Siddhi On Creation & Mrudula Creation. All rights reserved."
				]
			})
		})]
	});
}
function FloatingActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: company.phoneHref,
			"aria-label": "Call Siddhi On Creation",
			className: "grid size-12 place-items-center rounded-full bg-ink/90 text-ink-foreground shadow-elegant backdrop-blur transition-transform hover:scale-105 sm:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: whatsappLink(),
			target: "_blank",
			rel: "noreferrer noopener",
			"aria-label": "Chat with us on WhatsApp",
			className: "group flex items-center gap-3 rounded-full bg-[#1faa59] px-4 py-3.5 text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-[0.72rem] tracking-[0.18em] uppercase sm:inline",
				children: "Discuss Your Project"
			})]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Siddhi On Creation — Custom Sculptures, Murals & Architectural Art" },
			{
				name: "description",
				content: "30+ years of customised sculptures, murals, decorative gates, CNC designs, FRP products and architectural art for residential and commercial spaces."
			},
			{
				name: "author",
				content: "Siddhi On Creation"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@200;300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-BtO8-4Q4.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Siddhi On Creation — Custom Sculptures, Murals & Architectural Art" },
		{
			name: "description",
			content: "30+ years of customised sculptures, murals, decorative gates, CNC work, FRP products and architectural art for residential and commercial spaces in India."
		},
		{
			property: "og:title",
			content: "Siddhi On Creation — Custom Sculptures, Murals & Architectural Art"
		},
		{
			property: "og:description",
			content: "Bespoke sculptures, murals, decorative metalwork and architectural elements — designed, manufactured and installed in-house."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-CXtQ1iqp.mjs");
var Route$6 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Siddhi On Creation & Mrudula Creation" },
		{
			name: "description",
			content: "Over 30 years of artistic and architectural craftsmanship: our story, our workshop and the values behind every custom creation."
		},
		{
			property: "og:title",
			content: "About Siddhi On Creation"
		},
		{
			property: "og:description",
			content: "Three decades of custom sculpture, mural and architectural art, designed and manufactured in-house."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./clients-CY9mxeU-.mjs");
var Route$5 = createFileRoute("/clients")({
	head: () => ({ meta: [
		{ title: "Clients & Testimonials — Siddhi On Creation" },
		{
			name: "description",
			content: "Developers, architects, hospitality groups and homeowners who trust Siddhi On Creation for custom art and architectural work."
		},
		{
			property: "og:title",
			content: "Clients & Testimonials"
		},
		{
			property: "og:description",
			content: "What developers, architects and homeowners say about working with Siddhi On Creation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-SijuRbm0.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Siddhi On Creation, Mumbai" },
		{
			name: "description",
			content: "Call, WhatsApp or send an enquiry to discuss a custom sculpture, mural, gate, CNC or architectural art project with Siddhi On Creation."
		},
		{
			property: "og:title",
			content: "Contact Siddhi On Creation"
		},
		{
			property: "og:description",
			content: "Share your requirement and we'll come back with ideas and a quote."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-BnZOzDRu.mjs");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Custom Art & Architectural Work" },
		{
			name: "description",
			content: "A visual gallery of sculptures, murals, decorative metalwork, CNC panels, FRP features and landscape elements crafted by Siddhi On Creation."
		},
		{
			property: "og:title",
			content: "Gallery — Siddhi On Creation"
		},
		{
			property: "og:description",
			content: "Photographs of completed custom art and architectural installations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var cloudName = process.env["CLOUDINARY_CLOUD_NAME"];
var cloudApiKey = process.env["CLOUDINARY_API_KEY"];
var cloudApiSecret = process.env["CLOUDINARY_API_SECRET"];
if (!cloudName || !cloudApiKey || !cloudApiSecret) throw new Error("Missing Cloudinary environment variables in .env.local");
import_cloudinary.v2.config({
	cloud_name: cloudName,
	api_key: cloudApiKey,
	api_secret: cloudApiSecret
});
var allowedTypes = [
	"image/jpeg",
	"image/png",
	"image/webp"
];
var MAX_FILE_SIZE = 5242880;
var MAX_FILES = 5;
function escapeHtml(value) {
	return value.replace(/[&<>"']/g, (character) => {
		return {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}[character];
	});
}
function uploadImage(buffer, filename) {
	return new Promise((resolve, reject) => {
		import_cloudinary.v2.uploader.upload_stream({
			folder: "siddhi-on-creation/enquiries",
			resource_type: "image",
			public_id: `${Date.now()}-${filename.replace(/\.[^.]+$/, "")}`
		}, (error, result) => {
			if (error || !result) {
				reject(error || /* @__PURE__ */ new Error("Image upload failed."));
				return;
			}
			resolve(result.secure_url);
		}).end(buffer);
	});
}
var Route$2 = createFileRoute("/api/contact")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const gmailUser = process.env["GMAIL_USER"];
		const gmailPassword = process.env["GMAIL_APP_PASSWORD"];
		const recipient = process.env["CONTACT_TO_EMAIL"];
		const cloudinaryName = process.env["CLOUDINARY_CLOUD_NAME"];
		const cloudinaryKey = process.env["CLOUDINARY_API_KEY"];
		const cloudinarySecret = process.env["CLOUDINARY_API_SECRET"];
		if (!gmailUser || !gmailPassword || !recipient || !cloudinaryName || !cloudinaryKey || !cloudinarySecret) {
			console.error("Contact form environment variables are missing.");
			return Response.json({
				success: false,
				message: "The enquiry service is not configured yet."
			}, { status: 500 });
		}
		const data = await request.formData();
		const name = String(data.get("name") || "").trim();
		const phone = String(data.get("phone") || "").trim();
		const email = String(data.get("email") || "").trim();
		const service = String(data.get("service") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (!name || !phone || !email || !service || !message) return Response.json({
			success: false,
			message: "Please complete all required fields."
		}, { status: 400 });
		if (name.length > 150 || phone.length > 40 || email.length > 254 || service.length > 200 || message.length > 1e4) return Response.json({
			success: false,
			message: "Some enquiry fields are too long."
		}, { status: 400 });
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({
			success: false,
			message: "Please enter a valid email address."
		}, { status: 400 });
		const uploadedFiles = data.getAll("referenceImages").filter((item) => item instanceof File && item.size > 0);
		if (uploadedFiles.length > MAX_FILES) return Response.json({
			success: false,
			message: "You can upload a maximum of 5 images."
		}, { status: 400 });
		for (const file of uploadedFiles) if (!allowedTypes.includes(file.type) || file.size > MAX_FILE_SIZE) return Response.json({
			success: false,
			message: "Each image must be JPG, PNG, or WebP and no larger than 5 MB."
		}, { status: 400 });
		const imageLinks = [];
		for (const file of uploadedFiles) {
			const imageUrl = await uploadImage(Buffer.from(await file.arrayBuffer()), file.name.replace(/[^a-zA-Z0-9_-]/g, "_"));
			imageLinks.push(imageUrl);
		}
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: gmailUser,
				pass: gmailPassword
			}
		});
		const safeName = escapeHtml(name);
		const safePhone = escapeHtml(phone);
		const safeEmail = escapeHtml(email);
		const safeService = escapeHtml(service);
		const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
		const imageHtml = imageLinks.length ? imageLinks.map((url, index) => `<p><a href="${url}" target="_blank" rel="noopener noreferrer">View reference image ${index + 1}</a></p>`).join("") : "<p>No reference images uploaded.</p>";
		await transporter.sendMail({
			from: `"Siddhi On Creation Website" <${gmailUser}>`,
			to: recipient,
			replyTo: email,
			subject: `New Website Enquiry - ${name}`,
			text: [
				"New enquiry from the Siddhi On Creation website",
				"",
				`Name: ${name}`,
				`Phone: ${phone}`,
				`Email: ${email}`,
				`Service: ${service}`,
				"",
				"Project Details:",
				message,
				"",
				"Reference Images:",
				...imageLinks.length ? imageLinks : ["No reference images uploaded."]
			].join("\n"),
			html: `
              <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;color:#292929">
                <h2 style="color:#9a793e">New Project Enquiry</h2>
                <p>You have received a new enquiry from the Siddhi On Creation website.</p>
                <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
                  <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
                  <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
                  <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
                  <tr><td><strong>Service Required</strong></td><td>${safeService}</td></tr>
                </table>
                <h3>Project Details</h3>
                <p>${safeMessage}</p>
                <h3>Reference Images</h3>
                ${imageHtml}
              </div>
            `
		});
		return Response.json({
			success: true,
			message: "Your enquiry has been sent successfully."
		});
	} catch (error) {
		console.error("Contact form submission failed:", error);
		return Response.json({
			success: false,
			message: "We could not send your enquiry. Please try again."
		}, { status: 500 });
	}
} } } });
var $$splitComponentImporter$1 = () => import("./projects.index-DiITXM_R.mjs");
var Route$1 = createFileRoute("/projects/")({
	head: () => ({ meta: [
		{ title: "Projects & Portfolio — Siddhi On Creation" },
		{
			name: "description",
			content: "Explore completed sculptures, murals, decorative gates, CNC facades, FRP features and landscape elements across residential and commercial projects."
		},
		{
			property: "og:title",
			content: "Projects & Portfolio — Siddhi On Creation"
		},
		{
			property: "og:description",
			content: "Selected commissions in sculpture, murals, architectural metal, CNC and FRP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.index-BOhLDqeL.mjs");
var Route = createFileRoute("/services/")({
	head: () => ({ meta: [
		{ title: "Our Services | Sculptures, Murals, FRP & Metal Work" },
		{
			name: "description",
			content: "Explore custom sculptures, murals, FRP products, decorative metalwork, MDF carving and architectural art by Siddhi On Creation."
		},
		{
			property: "og:title",
			content: "Our Services — Siddhi On Creation"
		},
		{
			property: "og:description",
			content: "Bespoke sculptures, murals, FRP products, metalwork and architectural decorative solutions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$6.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var ClientsRoute = Route$5.update({
	id: "/clients",
	path: "/clients",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$8
});
var ApiContactRoute = Route$2.update({
	id: "/api/contact",
	path: "/api/contact",
	getParentRoute: () => Route$8
});
var ProjectsIndexRoute = Route$1.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$8
});
var ProjectsSlugRoute = Route$9.update({
	id: "/projects/$slug",
	path: "/projects/$slug",
	getParentRoute: () => Route$8
});
var ServicesIndexRoute = Route.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ClientsRoute,
	ContactRoute,
	GalleryRoute,
	ApiContactRoute,
	ProjectsSlugRoute,
	ServicesSlugRoute: Route$10.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$8
	}),
	ProjectsIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
