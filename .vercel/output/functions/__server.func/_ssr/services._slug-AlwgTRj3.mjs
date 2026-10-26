import { d as services } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
import { t as SectionHeading } from "./SectionHeading-BAR4EN5f.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight, h as ArrowUpRight, m as Check } from "../_libs/lucide-react.mjs";
import { t as Route } from "./services._slug-Ca1ZqTDU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-AlwgTRj3.js
var import_jsx_runtime = require_jsx_runtime();
var subServices = {
	sculptures: [
		{
			title: "FRP Sculptures",
			slug: "frp-sculptures",
			description: "Lightweight, durable sculptural forms crafted in fibre-reinforced plastic for interiors, landscapes and themed environments."
		},
		{
			title: "GRC Sculptures",
			slug: "grc-sculptures",
			description: "Sculptural forms made with glass-fibre-reinforced concrete for architectural, commercial and landscape applications."
		},
		{
			title: "Metal Sculptures",
			slug: "metal-sculptures",
			description: "Custom metal artworks developed with distinctive forms, textures and finishes for indoor and outdoor spaces."
		},
		{
			title: "Landscape Sculptures",
			slug: "landscape-sculptures",
			description: "Site-responsive sculptures designed to complement gardens, courtyards, resorts and public landscapes."
		},
		{
			title: "Thematic & Conceptual Sculptures",
			slug: "thematic-conceptual-sculptures",
			description: "Original sculptural concepts created around a story, theme, brand identity or architectural design brief."
		},
		{
			title: "Customized Sculptural Installations",
			slug: "customized-sculptural-installations",
			description: "Made-to-order installations developed to suit project dimensions, materials, surroundings and creative vision."
		}
	],
	murals: [
		{
			title: "FRP Murals",
			slug: "frp-murals",
			description: "Dimensional FRP wall features and reliefs designed for decorative interiors, facades and themed spaces."
		},
		{
			title: "GRC Murals",
			slug: "grc-murals",
			description: "Architectural reliefs and textured wall compositions created for distinctive decorative applications."
		},
		{
			title: "Metal Murals",
			slug: "metal-murals",
			description: "Metal wall artworks using shaped, layered and patterned elements to create depth and visual interest."
		},
		{
			title: "Decorative Wall Panels",
			slug: "decorative-wall-panels",
			description: "Custom wall panels introducing pattern, texture and architectural detail into residential and commercial spaces."
		},
		{
			title: "Thematic Wall Art",
			slug: "thematic-wall-art",
			description: "Wall art designed around a specific concept, setting, narrative or visual identity."
		},
		{
			title: "Artistic Installations",
			slug: "artistic-installations",
			description: "Three-dimensional artistic features designed to become focal points within a space."
		}
	],
	"frp-products": [
		{
			title: "FRP Planters & Trays",
			slug: "frp-planters-trays",
			description: "Custom planters and trays designed in varied shapes, dimensions and finishes for indoor and outdoor use."
		},
		{
			title: "FRP Indoor & Outdoor Furniture",
			slug: "frp-indoor-outdoor-furniture",
			description: "Bespoke FRP furniture designed around project requirements, intended use and preferred finishes."
		},
		{
			title: "FRP Seating & Benches",
			slug: "frp-seating-benches",
			description: "Custom seating and benches for landscaped gardens, commercial environments and public spaces."
		},
		{
			title: "FRP Decorative Gates & Grills",
			slug: "frp-decorative-gates-grills",
			description: "Decorative FRP gate and grill elements developed for distinctive architectural settings."
		},
		{
			title: "FRP Platforms",
			slug: "frp-platforms",
			description: "Custom platforms and raised elements fabricated to suit project dimensions and functional requirements."
		},
		{
			title: "FRP Panels",
			slug: "frp-panels",
			description: "Moulded FRP panels for decorative, themed and architectural applications."
		},
		{
			title: "Customized FRP Structures",
			slug: "customized-frp-structures",
			description: "Purpose-designed FRP structures produced to meet specific shapes, dimensions and project requirements."
		}
	],
	"decorative-gates-grills": [
		{
			title: "Decorative Metal Grills",
			slug: "decorative-metal-grills",
			description: "Decorative metal grill patterns tailored for architectural openings, partitions and feature applications."
		},
		{
			title: "Gates & Screens",
			slug: "gates-screens",
			description: "Custom gates and screens combining decorative detailing with the practical requirements of an entrance or space."
		},
		{
			title: "Zalli Work",
			slug: "zalli-work",
			description: "Patterned jali-style work introducing privacy, filtered light and decorative character into architectural spaces."
		},
		{
			title: "Metal Murals",
			slug: "metal-murals",
			description: "Bespoke metal wall art and reliefs designed with layered forms, patterns and distinctive finishes."
		},
		{
			title: "Metal Sculptures",
			slug: "metal-sculptures",
			description: "Custom metal sculptures developed for architectural, landscape and artistic environments."
		},
		{
			title: "Customized Architectural Elements",
			slug: "customized-architectural-elements",
			description: "Made-to-order metal details and features developed to complement an architectural concept."
		}
	],
	"architectural-decorative-work": [
		{
			title: "MDF Carving",
			slug: "mdf-carving",
			description: "Decorative MDF carving and patterned elements for panels, partitions, furniture and interior features."
		},
		{
			title: "Corian / Solid Surface",
			slug: "corian-solid-surface",
			description: "Custom solid-surface features shaped and finished for decorative and architectural applications."
		},
		{
			title: "WPC Work",
			slug: "wpc-work",
			description: "WPC elements designed for selected decorative, screening and architectural applications."
		},
		{
			title: "Wood Work",
			slug: "wood-work",
			description: "Custom wood details and decorative features developed around the project's design and finish requirements."
		},
		{
			title: "Tile Work",
			slug: "tile-work",
			description: "Tile-based decorative treatments and compositions for feature surfaces and bespoke design applications."
		},
		{
			title: "Stone Work",
			slug: "stone-work",
			description: "Stone elements and decorative applications selected to complement architectural and landscape schemes."
		},
		{
			title: "GRC Architectural Elements",
			slug: "grc-architectural-elements",
			description: "Decorative GRC elements, including architectural features, reliefs and project-specific components."
		},
		{
			title: "Customized Decorative Features",
			slug: "customized-decorative-features",
			description: "Bespoke multi-material architectural details developed to bring a coordinated design vision to life."
		}
	]
};
function ServiceDetail() {
	const { service } = Route.useLoaderData();
	const items = subServices[service.slug] || [];
	const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[75vh] items-end overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.title,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1400px] px-5 pt-36 pb-20 sm:px-8 lg:pb-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold-soft/80",
							children: "Siddhi On Creation / Our Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.03] text-ink-foreground",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg",
							children: service.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-9 inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs tracking-[0.18em] text-ink uppercase transition-colors hover:bg-gold-soft",
							children: ["Discuss Your Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "About This Service"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-4xl",
					children: [
						"Thoughtfully designed.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Carefully crafted."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-7 text-base leading-[1.9] text-muted-foreground sm:text-lg",
					children: service.overview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-[1.9] text-muted-foreground",
					children: "Every project is developed around its intended application, design concept, material requirements and finishing details. We work to translate your ideas, references and drawings into custom-made creations."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				className: "h-fit border border-border p-7 sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Materials & Finishes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: service.materials.map((material) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "border border-border px-4 py-3 text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase",
							children: material
						}, material))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: "Have a specific material, finish or design in mind? Tell us about your requirements."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "mt-5 inline-flex items-center gap-3 text-xs tracking-[0.15em] text-foreground uppercase transition-colors hover:text-gold",
							children: ["Request a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary py-20 sm:py-24 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Explore Our Capabilities",
					title: `Our ${service.title}`,
					intro: "Discover the different types of work we create within this category. Each can be customised to suit your project.",
					align: "left"
				}) }), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index % 3 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col overflow-hidden border border-border bg-background transition-colors duration-500 hover:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden bg-secondary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: `/service/subservices/${item.slug}.png`,
										alt: item.title,
										loading: "lazy",
										onError: (event) => {
											const image = event.currentTarget;
											if (image.dataset["fallback"] !== "true") {
												image.dataset["fallback"] = "true";
												image.src = service.image;
											}
										},
										className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 left-4 border border-white/50 bg-ink/20 px-3 py-2 text-[0.65rem] tracking-[0.16em] text-white uppercase backdrop-blur-sm",
										children: String(index + 1).padStart(2, "0")
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6 sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl leading-snug text-foreground",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 flex-1 text-sm leading-[1.9] text-muted-foreground",
										children: item.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 border-t border-border pt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/contact",
											className: "inline-flex items-center gap-2 text-[0.68rem] tracking-[0.16em] text-foreground uppercase transition-colors hover:text-gold",
											children: ["Enquire About This Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
										})
									})
								]
							})]
						})
					}, item.slug))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: service.types.map((type, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index % 3 * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border border-border bg-background p-7 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl text-foreground",
									children: type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-muted-foreground",
									children: service.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-foreground uppercase hover:text-gold",
									children: ["Make an Enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})
					}, type))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "From Concept to Creation",
				title: "Our Approach",
				intro: "A considered process that brings your concept from the initial discussion through fabrication and final finishing.",
				align: "center"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						number: "01",
						title: "Understand",
						description: "We discuss your concept, references, dimensions, application and project requirements."
					},
					{
						number: "02",
						title: "Design",
						description: "We develop the creative direction, material selection and design details for your project."
					},
					{
						number: "03",
						title: "Create",
						description: "The approved design moves into fabrication, craftsmanship and detailed finishing."
					},
					{
						number: "04",
						title: "Complete",
						description: "We coordinate the final requirements, delivery and installation where included in the project scope."
					}
				].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-gold/60 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl text-gold",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl text-foreground",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: step.description
							})
						]
					})
				}, step.number))
			})]
		}),
		service.faqs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Frequently Asked Questions",
					title: "Things You May Want to Know",
					align: "left"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-border border-y border-border",
					children: service.faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 py-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-foreground",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-[1.9] text-muted-foreground sm:text-base",
								children: faq.a
							})]
						})
					}, faq.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Explore Further",
				title: "Related Services",
				intro: "Discover more of our artistic, decorative and architectural capabilities.",
				align: "left"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
				children: others.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: item.slug },
						className: "group block h-full border border-border transition-colors hover:border-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.title,
								loading: "lazy",
								className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-foreground",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: item.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-foreground uppercase transition-colors group-hover:text-gold",
									children: ["Explore Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
								})
							]
						})]
					})
				}, item.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "surface-ink border-t border-ink-foreground/10 py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1000px] px-5 text-center sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-soft/80",
						children: "Let's Create Together"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-3xl leading-tight text-ink-foreground sm:text-5xl",
						children: "Have an idea worth bringing to life?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base",
						children: "Tell us about your project, share your inspiration and explore the possibilities with Siddhi On Creation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.18em] text-ink uppercase transition-colors hover:bg-gold-soft",
						children: ["Request a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] })
			})
		})
	] });
}
//#endregion
export { ServiceDetail as component };
