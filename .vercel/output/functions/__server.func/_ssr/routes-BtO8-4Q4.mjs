import { o as __toESM } from "../_runtime.mjs";
import { a as creationProjects, c as processSteps, f as testimonials, l as projectCategories, m as whyChooseUs, n as clients, o as images, t as MATERIALS, u as projects } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
import { t as SectionHeading } from "./SectionHeading-BAR4EN5f.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight, h as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BtO8-4Q4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const [activeVideo, setActiveVideo] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("All Projects");
	const filtered = filter === "All Projects" ? projects : projects.filter((p) => p.tags.includes(filter) || p.category === filter);
	const videos = [
		{
			src: "/influence/Final.mp4",
			number: "01",
			category: "Sculpture",
			title: "Sculptural Art"
		},
		{
			src: "/influence/Final2.mp4",
			number: "02",
			category: "Murals",
			title: "Wall Art"
		},
		{
			src: "/influence/Final3.mp4",
			number: "03",
			category: "Metalwork",
			title: "Gates & Jali"
		},
		{
			src: "/influence/Final2.mp4",
			number: "04",
			category: "CNC & Design",
			title: "Precision Art"
		}
	];
	(0, import_react.useEffect)(() => {
		if (activeVideo !== null) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [activeVideo]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (activeVideo === null) return;
			if (e.key === "Escape") {
				setActiveVideo(null);
				return;
			}
			if (e.key === "ArrowRight") {
				setActiveVideo((activeVideo + 1) % videos.length);
				return;
			}
			if (e.key === "ArrowLeft") setActiveVideo((activeVideo - 1 + videos.length) % videos.length);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeVideo]);
	const nextVideo = (e) => {
		e.stopPropagation();
		setActiveVideo((current) => {
			if (current === null) return null;
			return (current + 1) % videos.length;
		});
	};
	const previousVideo = (e) => {
		e.stopPropagation();
		setActiveVideo((current) => {
			if (current === null) return null;
			return (current - 1 + videos.length) % videos.length;
		});
	};
	const closeVideo = () => {
		setActiveVideo(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[92vh] items-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "absolute inset-0 size-full object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/work7.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold-soft/80",
							children: "Since 1996 \xA0·\xA0 Mumbai, India"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-ink-foreground",
							children: [
								"Turning Imagination Into",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "Art"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg",
							children: "Customised sculptures, murals, decorative metalwork and architectural elements — conceived, crafted and installed by one team for over three decades."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase transition-transform hover:scale-[1.02]",
								children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-3 border border-ink-foreground/30 px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:border-gold hover:text-gold",
								children: "Discuss Your Project"
							})]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-black/5 bg-[#f3efe7] py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-40 top-10 h-[450px] w-[450px] rounded-full border border-[#b08d57]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 bottom-[-150px] h-[500px] w-[500px] rounded-full border border-[#b08d57]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute right-[-30px] top-[-80px] select-none font-display text-[18rem] leading-none text-[#b08d57]/[0.06] sm:text-[28rem]",
					children: "30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1400px] px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-16 max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.35em] text-[#b08d57]",
								children: "Our Journey"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 font-display text-4xl leading-tight text-[#1c1917] sm:text-5xl lg:text-6xl",
								children: ["Three Decades of", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block italic text-[#b08d57]",
									children: "Creating the Extraordinary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#57534e] sm:text-base",
								children: "From bold ideas to lasting installations, every creation is shaped through experience, craftsmanship and complete in-house execution."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								k: "30+",
								v: "Years of Craftsmanship",
								featured: true
							},
							{
								k: "500+",
								v: "Projects Delivered"
							},
							{
								k: "9",
								v: "Material Specialities"
							},
							{
								k: "100%",
								v: "In-House Execution"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${s.featured ? "bg-[#1c1917] text-white shadow-2xl" : "border border-black/5 bg-white shadow-sm hover:shadow-xl"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `absolute -right-3 -top-8 font-display text-[9rem] leading-none ${s.featured ? "text-white/[0.05]" : "text-[#b08d57]/[0.06]"}`,
									children: s.k.replace("+", "").replace("%", "")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `font-display text-6xl sm:text-7xl ${s.featured ? "text-[#d4af72]" : "text-[#1c1917]"}`,
											children: s.k
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-6 h-[2px] w-14 transition-all duration-500 group-hover:w-24 ${s.featured ? "bg-[#d4af72]" : "bg-[#b08d57]"}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `mt-5 text-xs uppercase tracking-[0.18em] ${s.featured ? "text-white/70" : "text-[#78716c]"}`,
											children: s.v
										})
									]
								})]
							})
						}, s.k))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[#eee6d9] py-20 lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full border border-[#8a6845]/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full border border-[#8a6845]/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1400px] px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] tracking-[0.3em] text-[#8a6845] uppercase",
									children: "Stories We Shape"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-5 font-display text-4xl leading-[1.05] text-[#241c16] sm:text-5xl lg:text-6xl",
									children: ["Different Creations.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-3 text-[#8a6845] italic",
										children: "One Craft."
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-sm leading-relaxed text-[#66594c]",
								children: "From sculptural forms to architectural details, every creation carries the character of the hands that made it."
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setActiveVideo(0),
										className: "group relative cursor-pointer overflow-hidden bg-[#241c16]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[9/16]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
													src: "/influence/Final.mp4",
													autoPlay: true,
													muted: true,
													loop: true,
													playsInline: true,
													className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl text-white/70",
													children: "01"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-0 left-0 w-full p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase",
													children: "Sculpture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl text-white",
													children: "Sculptural Art"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setActiveVideo(1),
										className: "group relative cursor-pointer overflow-hidden bg-[#241c16]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[9/16]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
													src: "/influence/Final2.mp4",
													autoPlay: true,
													muted: true,
													loop: true,
													playsInline: true,
													className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl text-white/70",
													children: "02"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-0 left-0 w-full p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase",
													children: "Murals"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl text-white",
													children: "FRP Art"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 160,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setActiveVideo(2),
										className: "group relative cursor-pointer overflow-hidden bg-[#241c16]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[9/16]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
													src: "/influence/Final3.mp4",
													autoPlay: true,
													muted: true,
													loop: true,
													playsInline: true,
													className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl text-white/70",
													children: "03"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-0 left-0 w-full p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase",
													children: "Metalwork"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl text-white",
													children: "FRP Art"
												})]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 240,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => setActiveVideo(3),
										className: "group relative cursor-pointer overflow-hidden bg-[#241c16]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[9/16]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
													src: "/influence/Final2.mp4",
													autoPlay: true,
													muted: true,
													loop: true,
													playsInline: true,
													className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-3xl text-white/70",
													children: "04"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-0 left-0 w-full p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase",
													children: "CNC & Design"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl text-white",
													children: "Precision Art"
												})]
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 300,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 flex flex-col gap-5 border-t border-[#8a6845]/20 pt-8 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl text-[#3a2d23] sm:text-2xl",
									children: ["Every material has a story.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-[#8a6845] italic",
										children: "We give it form."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] tracking-[0.25em] text-[#8a6845] uppercase",
									children: "Sculpt · Shape · Create"
								})]
							})
						})
					]
				})
			]
		}),
		activeVideo !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md",
			onClick: closeVideo,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: previousVideo,
					"aria-label": "Previous video",
					className: "absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-4xl font-light text-white transition-opacity hover:opacity-60 sm:left-8",
					children: "‹"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-[90vh] max-h-[900px] w-auto max-w-[90vw] items-center justify-center",
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: videos[activeVideo]?.src,
						autoPlay: true,
						playsInline: true,
						muted: false,
						controls: false,
						className: "h-full max-h-[90vh] w-auto max-w-[90vw] object-contain"
					}, activeVideo)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: nextVideo,
					"aria-label": "Next video",
					className: "absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-4xl font-light text-white transition-opacity hover:opacity-60 sm:right-8",
					children: "›"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: closeVideo,
					"aria-label": "Close video",
					className: "absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center text-3xl font-light text-white transition-opacity hover:opacity-60 sm:right-8 sm:top-8",
					children: "×"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: "/work4.mp4",
				className: "aspect-[4/5] w-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				controls: true,
				children: "Your browser does not support the video tag."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHeading, {
				eyebrow: "Who We Are",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Three decades of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "Custom Creation"
				})] }),
				intro: "Siddhi On Creation is a creative art and design studio specializing in Sculptures, Murals, FRP, GRC, Metal Art, Decorative Grills, Planters, Furniture, Painting and Customized Architectural Artworks.Founded and led by Mr. Shekhar Suresh Satardekar, an artist who has completed his studies at Sir J. J. School of Art, we have been working in the field of art, sculpture and design for over 30 years. ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-5",
					children: whyChooseUs.slice(0, 3).map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l border-gold/60 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-bold text-xl text-foreground",
							children: w.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: w.text
						})]
					}, w.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					className: "mt-10 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] text-foreground uppercase hover:text-gold",
					children: ["More about us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What We Create",
					tone: "dark",
					title: "Our Expertise",
					intro: "From bespoke sculptures and artistic murals to FRP creations and architectural detailing, every project is crafted around your vision, materials and space."
				}), (() => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								number: "01",
								title: "Sculptures & Artistic Installations",
								slug: "sculptures",
								image: "/service/siddhioncreationwork.png",
								description: "FRP, GRC and metal sculptures, landscape art and customised artistic installations.",
								services: [
									"FRP Sculptures",
									"GRC Sculptures",
									"Metal Sculptures",
									"Landscape Sculptures",
									"Thematic & Conceptual Sculptures",
									"Customized Sculptural Installations"
								]
							},
							{
								number: "02",
								title: "Murals & Wall Art",
								slug: "murals",
								image: "/service/wallart.png",
								description: "Artistic murals, decorative wall panels and bespoke wall installations.",
								services: [
									"FRP Murals",
									"GRC Murals",
									"Metal Murals",
									"Decorative Wall Panels",
									"Thematic Wall Art",
									"Artistic Installations"
								]
							},
							{
								number: "03",
								title: "FRP Products & Furniture",
								slug: "frp-products",
								image: "/service/frp.png",
								description: "Custom FRP products, planters, furniture and decorative architectural elements.",
								services: [
									"FRP Planters & Trays",
									"Indoor & Outdoor Furniture",
									"Seating & Benches",
									"Decorative Gates & Grills",
									"FRP Platforms & Panels",
									"Customized FRP Structures"
								]
							},
							{
								number: "04",
								title: "Metal & Decorative Work",
								slug: "decorative-gates-grills",
								image: "/work/work8.png",
								description: "Decorative metalwork, architectural screens and customised metal elements.",
								services: [
									"Decorative Metal Grills",
									"Gates & Screens",
									"Zalli Work",
									"Metal Murals",
									"Metal Sculptures",
									"Customized Architectural Elements"
								]
							},
							{
								number: "05",
								title: "Architectural & Multi-Material Work",
								slug: "architectural-decorative-work",
								image: "/service/cnc_router.png",
								description: "Bespoke architectural details and decorative work across a variety of materials.",
								services: [
									"MDF Carving",
									"Corian / Solid Surface",
									"WPC & Wood Work",
									"Tile Work",
									"Stone Work",
									"Customized Architectural Features"
								]
							}
						].map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: service.slug },
								className: "group block h-full border border-ink-foreground/10 transition-colors duration-500 hover:border-gold/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: service.image,
											alt: service.title,
											loading: "lazy",
											className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-5 left-5 border border-white/40 px-3 py-2 text-xs tracking-[0.2em] text-white",
											children: service.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "absolute right-5 bottom-5 size-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl leading-snug text-ink-foreground sm:text-2xl",
											children: service.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-ink-foreground/60",
											children: service.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 space-y-3 border-t border-ink-foreground/10 pt-5",
											children: service.services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3 text-sm text-ink-foreground/70",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
											}, item))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-7 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase",
											children: ["Explore Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
										})
									]
								})]
							})
						}, service.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 250,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "inline-flex items-center gap-3 border border-gold/50 px-8 py-4 text-xs tracking-[0.18em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink",
								children: ["View All Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						})
					})] });
				})()]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected Work",
					title: "Projects & Portfolio",
					intro: "A selection of commissions across sculpture, murals, metalwork, CNC and facade art."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: projectCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(c),
						className: "border px-5 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase transition-colors " + (filter === c ? "border-gold bg-gold text-ink" : "border-border text-muted-foreground hover:border-gold hover:text-foreground"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: p.slug },
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/5] overflow-hidden bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										loading: "lazy",
										className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[0.66rem] tracking-[0.2em] text-gold uppercase",
									children: p.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl text-foreground",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.location
								})
							]
						})
					}, p.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[#16130f] py-24 lg:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full border border-gold/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full border border-gold/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[1400px] px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.65rem] tracking-[0.3em] text-gold uppercase",
								children: "Behind Every Creation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl ",
								children: ["From Raw Material", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold pl-3",
									children: "To Remarkable Art."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-white/60",
								children: "Step inside our creative process and watch ideas transform into sculptures, architectural elements and artistic installations."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: creationProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreationVideoCard, { project })
						}, project.id))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "How We Work",
						title: "Our Approach "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col py-10 gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl leading-relaxed text-muted-foreground",
							children: "We believe every project is unique."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl leading-relaxed text-muted-foreground",
							children: "Our process focuses on understanding the client's vision, design intent, site requirements and functional needs before developing the final artwork."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: " grid gap-10 sm:grid-cols-2 lg:grid-cols-5",
						children: processSteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: i * 80,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl text-gold",
									children: s.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "gold-rule mt-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-xl text-foreground",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: s.text
								})
							]
						}, s.number))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-10 text-xl leading-relaxed text-muted-foreground",
						children: "We work collaboratively with Architects, Interior Designers, Landscape Designers, Developers and Project Consultants to achieve the desired design outcome."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black text-white py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1500px] px-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display text-[2.7rem] leading-none sm:text-6xl lg:text-[5rem]",
						children: ["Crafted Across ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "Materials"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm leading-relaxed text-stone",
						children: "Each material is chosen for how it will look on day one — and on day ten thousand."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5",
					children: MATERIALS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 5 * 70,
						className: "group relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "zoom-frame relative aspect-square",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.image,
									alt: `${m.name} material texture`,
									loading: "lazy",
									className: "h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55 transition-colors duration-700 group-hover:bg-ink/25" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display text-3xl text-bone",
										children: m.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mt-2 text-[0.55rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100",
										children: m.note
									})]
								})
							]
						})
					}, m.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-y border-border py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[0.66rem] tracking-[0.28em] text-muted-foreground uppercase",
				children: "Trusted by leading developers & architects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
					children: clients.map((client, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\n          group relative flex min-h-[170px] flex-col items-center\n          justify-center overflow-hidden rounded-2xl\n          border border-border/60 bg-background\n          px-6 py-6 shadow-sm\n          transition-all duration-300 ease-out\n          hover:-translate-y-2\n          hover:border-primary/30\n          hover:shadow-xl\n        ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\n            absolute inset-0 opacity-0 transition-opacity duration-300\n            group-hover:opacity-100\n            bg-gradient-to-br from-primary/5 via-transparent to-primary/10\n          " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\n            relative z-10 flex h-20 w-full items-center justify-center\n            transition-transform duration-300\n            group-hover:scale-110\n          ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: client.logo,
									alt: client.name,
									className: "\n              max-h-16 max-w-[150px]\n              object-contain\n              transition-all duration-300\n              \n              group-hover:grayscale-0\n              group-hover:opacity-100\n            "
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative z-10 my-4 h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\n            relative z-10 text-center\n            font-display text-sm font-medium\n            text-foreground/70\n            transition-colors duration-300\n            group-hover:text-foreground\n          ",
								children: client.name
							})
						]
					}, client.name || index))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-y border-border bg-secondary py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.035]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full",
					style: {
						backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
						backgroundSize: "55px 55px"
					}
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-14 max-w-[1400px] px-5 sm:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold",
									children: "Client Stories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl",
									children: [
										"What our clients",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-serif italic text-gold",
											children: "say."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-sm leading-7 text-muted-foreground",
									children: "From concept to completion, every creation is built with precision, creativity and attention to detail."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-secondary to-transparent md:w-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-secondary to-transparent md:w-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "testimonial-track flex w-max",
								children: [testimonials.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "testimonial-card group relative mx-3 w-[320px] shrink-0 md:w-[390px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "\n                relative\n                min-h-[350px]\n                overflow-hidden\n                border\n                border-border\n                bg-background\n                p-7\n                transition-all\n                duration-500\n                group-hover:-translate-y-1\n                group-hover:border-gold/40\n                group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]\n                md:p-8\n              ",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 opacity-[0.04]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full w-full",
													style: {
														backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
														backgroundSize: "28px 28px"
													}
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-35px] top-[-35px] h-24 w-24 rotate-45 border border-gold/20" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 font-serif text-6xl leading-none text-gold/30",
												children: "“"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 mt-2 flex gap-1",
												children: Array.from({ length: testimonial.rating }).map((_, starIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-gold",
													children: "★"
												}, starIndex))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative z-10 mt-6 text-[15px] leading-7 text-foreground/80",
												children: testimonial.quote
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 mt-8 flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: testimonial.image,
														alt: testimonial.name,
														className: "\n                      h-full\n                      w-full\n                      object-cover\n                      transition-transform\n                      duration-700\n                      group-hover:scale-110\n                    "
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "truncate text-sm font-semibold text-foreground",
															children: testimonial.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 truncate text-xs uppercase tracking-[0.15em] text-gold",
															children: testimonial.company
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 truncate text-xs text-muted-foreground",
															children: testimonial.project
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-5 right-6 text-[10px] tracking-[0.3em] text-muted-foreground/40",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" })
										]
									})
								}, `testimonial-first-${index}`)), testimonials.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "testimonial-card group relative mx-3 w-[320px] shrink-0 md:w-[390px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "\n                relative\n                min-h-[350px]\n                overflow-hidden\n                border\n                border-border\n                bg-background\n                p-7\n                transition-all\n                duration-500\n                group-hover:-translate-y-1\n                group-hover:border-gold/40\n                group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]\n                md:p-8\n              ",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 opacity-[0.04]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full w-full",
													style: {
														backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
														backgroundSize: "28px 28px"
													}
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[-35px] top-[-35px] h-24 w-24 rotate-45 border border-gold/20" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 font-serif text-6xl leading-none text-gold/30",
												children: "“"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 mt-2 flex gap-1",
												children: Array.from({ length: testimonial.rating }).map((_, starIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-gold",
													children: "★"
												}, starIndex))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative z-10 mt-6 text-[15px] leading-7 text-foreground/80",
												children: testimonial.quote
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 mt-8 flex items-center gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: testimonial.image,
														alt: testimonial.name,
														className: "\n                      h-full\n                      w-full\n                      object-cover\n                      transition-transform\n                      duration-700\n                      group-hover:scale-110\n                    "
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "truncate text-sm font-semibold text-foreground",
															children: testimonial.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 truncate text-xs uppercase tracking-[0.15em] text-gold",
															children: testimonial.company
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 truncate text-xs text-muted-foreground",
															children: testimonial.project
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-5 right-6 text-[10px] tracking-[0.3em] text-muted-foreground/40",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" })
										]
									})
								}, `testimonial-second-${index}`))]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 flex max-w-[1400px] items-center justify-between border-t border-border px-5 pt-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
							children: "Siddhi On Creation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
							children: "Client Experiences"
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.ctaWorkshop,
					alt: "Workshop at dusk",
					loading: "lazy",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8 lg:py-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold-soft/80",
							children: "Let's Create"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto mt-6 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-ink-foreground",
							children: "Have a space that deserves something made for it?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-10 inline-flex items-center gap-3 bg-gold px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase",
							children: ["Start a Conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					] })
				})
			]
		})
	] });
}
function CreationVideoCard({ project }) {
	const videoRef = (0, import_react.useRef)(null);
	const handleMouseEnter = () => {
		if (!videoRef.current) return;
		videoRef.current.currentTime = 0;
		videoRef.current.play().catch(() => {});
	};
	const handleMouseLeave = () => {
		if (!videoRef.current) return;
		videoRef.current.pause();
		videoRef.current.currentTime = 0;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group cursor-pointer",
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] overflow-hidden bg-black",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: project.title,
						className: "absolute inset-0 size-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: project.video,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "metadata",
						className: "absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-5 left-5 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex size-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-gold" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.6rem] tracking-[0.18em] text-white uppercase",
							children: "Watch Creation"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[0.62rem] tracking-[0.22em] text-gold uppercase",
				children: project.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-2xl text-white",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-white/55",
				children: project.description
			})
		]
	});
}
//#endregion
export { Index as component };
