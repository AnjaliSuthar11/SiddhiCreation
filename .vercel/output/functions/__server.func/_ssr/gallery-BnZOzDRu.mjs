import { o as __toESM } from "../_runtime.mjs";
import { d as services, u as projects } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BnZOzDRu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var items = [
	...projects.map((p) => ({
		src: p.image,
		caption: p.name
	})),
	...projects.flatMap((p) => p.gallery.map((g, i) => ({
		src: g,
		caption: `${p.name} — detail ${i + 1}`
	}))),
	...services.map((s) => ({
		src: s.image,
		caption: s.title
	}))
].filter((item, index, all) => all.findIndex((x) => x.src === item.src) === index);
function GalleryPage() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-ink pt-36 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-soft/80",
					children: "Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground",
					children: ["A closer look at the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "craft"
					})]
				})] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					className: "group block w-full overflow-hidden break-inside-avoid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.caption,
						loading: "lazy",
						className: "w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-3 block text-left text-xs tracking-[0.14em] text-muted-foreground uppercase",
						children: item.caption
					})]
				}, `${item.src}-${i}`))
			})
		}),
		active !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4",
			role: "dialog",
			"aria-modal": "true",
			onClick: () => setActive(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close image",
				onClick: () => setActive(null),
				className: "absolute top-6 right-6 p-2 text-ink-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-7" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				onClick: (e) => e.stopPropagation(),
				className: "max-h-[88vh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: items[active].src,
					alt: items[active].caption,
					className: "max-h-[80vh] w-auto object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-4 text-center text-xs tracking-[0.16em] text-ink-foreground/70 uppercase",
					children: items[active].caption
				})]
			})]
		}) : null
	] });
}
//#endregion
export { GalleryPage as component };
