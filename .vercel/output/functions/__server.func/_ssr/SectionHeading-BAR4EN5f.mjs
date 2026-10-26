import { r as cn } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-BAR4EN5f.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("eyebrow", tone === "dark" && "text-gold-soft/80"),
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]", tone === "dark" ? "text-ink-foreground" : "text-foreground"),
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-6 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground"),
				children: intro
			}) : null,
			children
		]
	});
}
//#endregion
export { SectionHeading as t };
