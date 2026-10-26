
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Upload, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { company, services, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Siddhi On Creation, Mumbai" },
      {
        name: "description",
        content:
          "Call, WhatsApp or send an enquiry to discuss a custom sculpture, mural, gate, CNC or architectural art project with Siddhi On Creation.",
      },
      { property: "og:title", content: "Contact Siddhi On Creation" },
      {
        property: "og:description",
        content:
          "Share your requirement and we'll come back with ideas and a quote.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0]?.title ?? "",
    message: "",
  });

  const [referenceImages, setReferenceImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    const previews = referenceImages.map((file) =>
      URL.createObjectURL(file),
    );

    setImagePreviews(previews);

    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [referenceImages]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFiles = Array.from(e.target.files ?? []);
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxFileSize = 5 * 1024 * 1024;

    setError("");

    const remainingSlots = 5 - referenceImages.length;

    if (remainingSlots <= 0) {
      setError("You can upload a maximum of 5 images.");
      e.target.value = "";
      return;
    }

    const validFiles: File[] = [];
    const rejectedFiles: string[] = [];

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

    setReferenceImages((previous) => [
      ...previous,
      ...availableFiles,
    ]);

    if (rejectedFiles.length > 0) {
      setError(
        `${rejectedFiles.join(". ")}. Please use JPG, PNG, or WebP images up to 5 MB each.`,
      );
    } else if (validFiles.length > remainingSlots) {
      setError("Only 5 reference images are allowed.");
    }

    e.target.value = "";
  };

  const removeReferenceImage = (index: number) => {
    setReferenceImages((previous) =>
      previous.filter((_, i) => i !== index),
    );
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
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
        body: data,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your enquiry.",
        );
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const field =
    "mt-2 w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-gold";

  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Contact</p>

            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              Tell us what you&apos;d like{" "}
              <span className="text-gold">made</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          {sent ? (
            <div className="border border-gold/50 p-10">
              <h2 className="font-display text-3xl text-foreground">
                Thank you.
              </h2>

              <p className="mt-4 text-base text-muted-foreground">
                Your enquiry has been sent successfully. We&apos;ll
                review your project details and reference images.
                For the fastest response, call{" "}
                <a
                  href={company.phoneHref}
                  className="text-gold"
                >
                  {company.phone}
                </a>{" "}
                or message us on WhatsApp.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="border border-border p-8 sm:p-10"
            >
              <p className="eyebrow">Project Enquiry</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Name
                  <input
                    required
                    maxLength={150}
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className={field}
                  />
                </label>

                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Phone
                  <input
                    required
                    type="tel"
                    maxLength={40}
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className={field}
                  />
                </label>

                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Email
                  <input
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className={field}
                  />
                </label>

                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Service Required

                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        service: e.target.value,
                      })
                    }
                    className={field}
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Project Details

                  <textarea
                    rows={5}
                    required
                    maxLength={10000}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className={field}
                    placeholder="Tell us about your project, dimensions, preferred materials, location, or design requirements..."
                  />
                </label>

                {/* Reference Image Upload */}
                <div className="sm:col-span-2">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Reference Images (Optional)
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Share images of designs, artwork, or inspiration
                    for your project.
                  </p>

                  <label
                    htmlFor="referenceImages"
                    className="mt-4 flex cursor-pointer flex-col items-center justify-center border border-dashed border-gold/50 p-8 text-center transition-colors hover:border-gold hover:bg-gold/5"
                  >
                    <Upload className="mb-3 size-7 text-gold" />

                    <span className="text-sm text-foreground">
                      Click to upload reference images
                    </span>

                    <span className="mt-2 text-xs text-muted-foreground">
                      JPG, PNG, or WebP · Maximum 5 MB per image
                    </span>

                    <span className="mt-1 text-xs text-muted-foreground">
                      {referenceImages.length} of 5 images selected
                    </span>
                  </label>

                  <input
                    id="referenceImages"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    disabled={
                      loading || referenceImages.length >= 5
                    }
                    onChange={handleImageUpload}
                    className="sr-only"
                  />

                  {/* Selected Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {imagePreviews.map((preview, index) => (
                        <div
                          key={`${referenceImages[index]?.name}-${index}`}
                          className="relative min-w-0 border border-border p-2"
                        >
                          <img
                            src={preview}
                            alt={`Project reference ${index + 1}`}
                            className="h-36 w-full object-cover"
                          />

                          <p className="mt-2 truncate text-xs text-muted-foreground">
                            {referenceImages[index]?.name}
                          </p>

                          <button
                            type="button"
                            disabled={loading}
                            onClick={() =>
                              removeReferenceImage(index)
                            }
                            className="mt-2 inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 disabled:opacity-50"
                          >
                            <X className="size-3" />
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-5 border border-red-500/40 bg-red-500/5 p-4 text-sm text-red-600"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Enquiry..." : "Send Enquiry"}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-7 border border-border p-8">
            <div className="flex gap-4">
              <Phone className="mt-1 size-4 shrink-0 text-gold" />

              <div>
                <p className="eyebrow">Call</p>
                <a
                  href={company.phoneHref}
                  className="mt-1 block text-foreground"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 size-4 shrink-0 text-gold" />

              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-foreground"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" />

              <div>
                <p className="eyebrow">Workshop &amp; Studio</p>
                <p className="mt-1 text-foreground">
                  {company.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 size-4 shrink-0 text-gold" />

              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-1 text-foreground">
                  {company.hours}
                </p>
              </div>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="block border border-gold px-8 py-4 text-center text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              Chat on WhatsApp
            </a>
          </div>

          <iframe
            title="Siddhi On Creation location map"
            src="https://www.google.com/maps?q=Bhandup%20Industrial%20Estate%20Mumbai&output=embed"
            loading="lazy"
            className="mt-8 h-72 w-full border border-border"
          />
        </Reveal>
      </section>
    </div>
  );
}
