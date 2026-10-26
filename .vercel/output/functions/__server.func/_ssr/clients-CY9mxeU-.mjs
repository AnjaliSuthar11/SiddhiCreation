import { o as __toESM } from "../_runtime.mjs";
import { f as testimonials, n as clients } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
import { t as SectionHeading } from "./SectionHeading-BAR4EN5f.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ChevronRight, g as ArrowRight, p as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clients-CY9mxeU-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ClientsPage() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	if (!testimonials || testimonials.length === 0) return null;
	const previousIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
	const nextIndex = (activeIndex + 1) % testimonials.length;
	const previousTestimonial = testimonials[previousIndex];
	const activeTestimonial = testimonials[activeIndex];
	const nextTestimonial = testimonials[nextIndex];
	const handleNext = () => {
		setDirection(1);
		setActiveIndex((prev) => {
			return (prev + 1) % testimonials.length;
		});
	};
	const handlePrevious = () => {
		setDirection(-1);
		setActiveIndex((prev) => {
			return (prev - 1 + testimonials.length) % testimonials.length;
		});
	};
	const visibleTestimonials = [
		{
			index: previousIndex,
			testimonial: previousTestimonial,
			position: "left"
		},
		{
			index: activeIndex,
			testimonial: activeTestimonial,
			position: "center"
		},
		{
			index: nextIndex,
			testimonial: nextTestimonial,
			position: "right"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-ink pt-36 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-soft/80",
					children: "Clients"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground",
					children: [
						"Long relationships,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "repeat work"
						})
					]
				})] })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Trusted By",
				title: "Developers, architects and design studios"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
					children: clients.map((client, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\n                  group relative flex min-h-[170px] flex-col items-center\n                  justify-center overflow-hidden rounded-2xl\n                  border border-border/60 bg-background\n                  px-6 py-6 shadow-sm\n                  transition-all duration-300 ease-out\n                  hover:-translate-y-2\n                  hover:border-primary/30\n                  hover:shadow-xl\n                ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\n                    absolute inset-0 opacity-0 transition-opacity duration-300\n                    group-hover:opacity-100\n                    bg-gradient-to-br from-primary/5 via-transparent to-primary/10\n                  " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\n                    relative z-10 flex h-20 w-full items-center justify-center\n                    transition-transform duration-300\n                    group-hover:scale-110\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: client.logo,
									alt: client.name,
									className: "\n                      max-h-16 max-w-[150px]\n                      object-contain\n                      transition-all duration-300\n                      group-hover:grayscale-0\n                      group-hover:opacity-100\n                    "
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative z-10 my-4 h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\n                    relative z-10 text-center\n                    font-display text-sm font-medium\n                    text-foreground/70\n                    transition-colors duration-300\n                    group-hover:text-foreground\n                  ",
								children: client.name
							})
						]
					}, client.name || index))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden border-y border-border bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Testimonials",
							title: "In their words"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handlePrevious,
								className: "flex h-11 w-11 items-center justify-center border border-border bg-background transition-all duration-300 hover:bg-foreground hover:text-background",
								"aria-label": "Previous testimonial",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleNext,
								className: "flex h-11 w-11 items-center justify-center border border-border bg-background transition-all duration-300 hover:bg-foreground hover:text-background",
								"aria-label": "Next testimonial",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden min-h-[400px] items-center gap-4 md:grid md:grid-cols-[0.8fr_1.4fr_0.8fr] lg:gap-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								mode: "popLayout",
								children: visibleTestimonials.map(({ index, testimonial, position }) => {
									const isCenter = position === "center";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										layout: true,
										initial: {
											opacity: 0,
											x: position === "left" ? direction === -1 ? -120 : -60 : position === "right" ? direction === 1 ? 120 : 60 : direction === 1 ? 100 : -100,
											scale: .92
										},
										animate: {
											opacity: isCenter ? 1 : .7,
											x: 0,
											scale: 1
										},
										exit: {
											opacity: 0,
											x: direction === 1 ? -160 : 160,
											scale: .9
										},
										transition: {
											layout: {
												duration: .85,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											opacity: { duration: .45 },
											x: {
												duration: .85,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											scale: {
												duration: .85,
												ease: [
													.22,
													1,
													.36,
													1
												]
											}
										},
										className: `group relative flex flex-col overflow-hidden border border-border bg-background ${isCenter ? "z-10 h-[380px] p-7 shadow-lg" : "h-[300px] p-5"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-0 opacity-[0.035]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] ${isCenter ? "bg-[size:32px_32px]" : "bg-[size:28px_28px]"}` })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative z-10 flex h-full flex-col",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: isCenter ? "text-xs uppercase tracking-[0.25em] text-muted-foreground" : "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
														children: position === "left" ? "Previous" : position === "center" ? "Client Voice" : "Up Next"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: isCenter ? "font-display text-5xl leading-none text-foreground/10" : "font-display text-3xl leading-none text-foreground/10",
														children: String(index + 1).padStart(2, "0")
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: isCenter ? "relative mt-7 flex flex-1 items-center" : "relative mt-5 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: isCenter ? "absolute -left-2 top-0 font-serif text-8xl leading-none text-foreground/10" : "absolute -left-1 -top-6 font-serif text-6xl leading-none text-foreground/10",
														children: "“"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: isCenter ? "relative pt-8 font-display text-lg leading-relaxed text-foreground sm:text-xl" : "relative pt-5 text-sm leading-relaxed text-foreground",
														children: testimonial.quote
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: isCenter ? "border-t border-border pt-5" : "flex items-center gap-3 border-t border-border pt-4",
													children: isCenter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-4",
														children: [
															testimonial.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: testimonial.image,
																alt: testimonial.name,
																className: "h-14 w-14 shrink-0 rounded-full object-cover"
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg",
																children: testimonial.name?.charAt(0)
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate font-display text-base font-medium text-foreground",
																	children: testimonial.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate text-xs text-muted-foreground",
																	children: testimonial.company
																})]
															}),
															testimonial.project && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "ml-auto hidden max-w-[130px] truncate text-right text-[10px] uppercase tracking-wider text-muted-foreground sm:block",
																children: testimonial.project
															})
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [testimonial.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: testimonial.image,
														alt: testimonial.name,
														className: "h-10 w-10 shrink-0 rounded-full object-cover"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm",
														children: testimonial.name?.charAt(0)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "truncate text-sm font-medium text-foreground",
															children: testimonial.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "truncate text-[10px] text-muted-foreground",
															children: testimonial.company
														})]
													})] })
												})
											]
										})]
									}, index);
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										x: direction === 1 ? 60 : -60
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: direction === 1 ? -60 : 60
									},
									transition: {
										duration: .5,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "group relative flex min-h-[380px] flex-col overflow-hidden border border-border bg-background p-6 shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-0 opacity-[0.035]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:28px_28px]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 flex h-full flex-1 flex-col",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs uppercase tracking-[0.25em] text-muted-foreground",
													children: "Client Voice"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-4xl text-foreground/10",
													children: String(activeIndex + 1).padStart(2, "0")
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative mt-8 flex flex-1 items-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute -left-2 top-0 font-serif text-7xl text-foreground/10",
													children: "“"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "relative pt-8 font-display text-lg leading-relaxed text-foreground",
													children: activeTestimonial.quote
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-8 border-t border-border pt-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4",
													children: [activeTestimonial.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: activeTestimonial.image,
														alt: activeTestimonial.name,
														className: "h-12 w-12 rounded-full object-cover"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-12 w-12 items-center justify-center rounded-full bg-secondary",
														children: activeTestimonial.name?.charAt(0)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-sm font-medium text-foreground",
														children: activeTestimonial.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: activeTestimonial.company
													})] })]
												})
											})
										]
									})]
								}, activeIndex)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center gap-2",
						children: testimonials.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setDirection(index > activeIndex ? 1 : -1);
								setActiveIndex(index);
							},
							className: `h-1 transition-all duration-300 ${index === activeIndex ? "w-8 bg-foreground" : "w-4 bg-foreground/20"}`,
							"aria-label": `Go to testimonial ${index + 1}`
						}, index))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mx-auto max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-tight text-foreground",
				children: "Join the list of spaces we've transformed."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "mt-10 inline-flex items-center gap-3 bg-ink px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase",
				children: ["Talk To Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	] });
}
//#endregion
export { ClientsPage as component };
