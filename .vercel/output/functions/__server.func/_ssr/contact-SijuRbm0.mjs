import { o as __toESM } from "../_runtime.mjs";
import { d as services, i as company, p as whatsappLink } from "./site-DyhvXyU-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-CX-2Eckl.mjs";
import { d as Clock, n as Upload, o as MapPin, r as Phone, s as Mail, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-SijuRbm0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		service: services[0]?.title ?? "",
		message: ""
	});
	const [referenceImages, setReferenceImages] = (0, import_react.useState)([]);
	const [imagePreviews, setImagePreviews] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const previews = referenceImages.map((file) => URL.createObjectURL(file));
		setImagePreviews(previews);
		return () => {
			previews.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [referenceImages]);
	const handleImageUpload = (e) => {
		const selectedFiles = Array.from(e.target.files ?? []);
		const allowedTypes = [
			"image/jpeg",
			"image/png",
			"image/webp"
		];
		const maxFileSize = 5242880;
		setError("");
		const remainingSlots = 5 - referenceImages.length;
		if (remainingSlots <= 0) {
			setError("You can upload a maximum of 5 images.");
			e.target.value = "";
			return;
		}
		const validFiles = [];
		const rejectedFiles = [];
		for (const file of selectedFiles) {
			if (!allowedTypes.includes(file.type)) {
				rejectedFiles.push(`${file.name}: unsupported image format`);
				continue;
			}
			if (file.size > maxFileSize) {
				rejectedFiles.push(`${file.name}: image exceeds 5 MB`);
				continue;
			}
			validFiles.push(file);
		}
		const availableFiles = validFiles.slice(0, remainingSlots);
		setReferenceImages((previous) => [...previous, ...availableFiles]);
		if (rejectedFiles.length > 0) setError(`${rejectedFiles.join(". ")}. Please use JPG, PNG, or WebP images up to 5 MB each.`);
		else if (validFiles.length > remainingSlots) setError("Only 5 reference images are allowed.");
		e.target.value = "";
	};
	const removeReferenceImage = (index) => {
		setReferenceImages((previous) => previous.filter((_, i) => i !== index));
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);
		setError("");
		try {
			const data = new FormData();
			data.append("name", form.name);
			data.append("phone", form.phone);
			data.append("email", form.email);
			data.append("service", form.service);
			data.append("message", form.message);
			referenceImages.forEach((file) => {
				data.append("referenceImages", file);
			});
			const response = await fetch("/api/contact", {
				method: "POST",
				body: data
			});
			const result = await response.json();
			if (!response.ok || !result.success) throw new Error(result.message || "Failed to send your enquiry.");
			setSent(true);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	const field = "mt-2 w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "surface-ink pt-36 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-gold-soft/80",
				children: "Contact"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground",
				children: [
					"Tell us what you'd like",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "made"
					})
				]
			})] })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-gold/50 p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-foreground",
				children: "Thank you."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: [
					"Your enquiry has been sent successfully. We'll review your project details and reference images. For the fastest response, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: company.phoneHref,
						className: "text-gold",
						children: company.phone
					}),
					" ",
					"or message us on WhatsApp."
				]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "border border-border p-8 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Project Enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs tracking-[0.16em] text-muted-foreground uppercase",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								maxLength: 150,
								autoComplete: "name",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs tracking-[0.16em] text-muted-foreground uppercase",
							children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "tel",
								maxLength: 40,
								autoComplete: "tel",
								value: form.phone,
								onChange: (e) => setForm({
									...form,
									phone: e.target.value
								}),
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								maxLength: 254,
								autoComplete: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2",
							children: ["Service Required", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								required: true,
								value: form.service,
								onChange: (e) => setForm({
									...form,
									service: e.target.value
								}),
								className: field,
								children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s.title,
									children: s.title
								}, s.slug))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2",
							children: ["Project Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 5,
								required: true,
								maxLength: 1e4,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: field,
								placeholder: "Tell us about your project, dimensions, preferred materials, location, or design requirements..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
									children: "Reference Images (Optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Share images of designs, artwork, or inspiration for your project."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "referenceImages",
									className: "mt-4 flex cursor-pointer flex-col items-center justify-center border border-dashed border-gold/50 p-8 text-center transition-colors hover:border-gold hover:bg-gold/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mb-3 size-7 text-gold" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-foreground",
											children: "Click to upload reference images"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 text-xs text-muted-foreground",
											children: "JPG, PNG, or WebP · Maximum 5 MB per image"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [referenceImages.length, " of 5 images selected"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "referenceImages",
									type: "file",
									accept: "image/jpeg,image/png,image/webp",
									multiple: true,
									disabled: loading || referenceImages.length >= 5,
									onChange: handleImageUpload,
									className: "sr-only"
								}),
								imagePreviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3",
									children: imagePreviews.map((preview, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative min-w-0 border border-border p-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: preview,
												alt: `Project reference ${index + 1}`,
												className: "h-36 w-full object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 truncate text-xs text-muted-foreground",
												children: referenceImages[index]?.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												disabled: loading,
												onClick: () => removeReferenceImage(index),
												className: "mt-2 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 disabled:opacity-50",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" }), "Remove"]
											})
										]
									}, `${referenceImages[index]?.name}-${index}`))
								})
							]
						})
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-5 border border-red-500/40 bg-red-500/5 p-4 text-sm text-red-600",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: loading,
					className: "mt-8 w-full bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60",
					children: loading ? "Sending Enquiry..." : "Send Enquiry"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			delay: 80,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-7 border border-border p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-1 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Call"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: company.phoneHref,
							className: "mt-1 block text-foreground",
							children: company.phone
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-1 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.email}`,
							className: "mt-1 block text-foreground",
							children: company.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Workshop & Studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-foreground",
							children: company.address
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-1 size-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-foreground",
							children: company.hours
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink(),
						target: "_blank",
						rel: "noreferrer noopener",
						className: "block border border-gold px-8 py-4 text-center text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink",
						children: "Chat on WhatsApp"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Siddhi On Creation location map",
				src: "https://www.google.com/maps?q=Bhandup%20Industrial%20Estate%20Mumbai&output=embed",
				loading: "lazy",
				className: "mt-8 h-72 w-full border border-border"
			})]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
