import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

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
        content: "Share your requirement and we'll come back with ideas and a quote.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0]!.title,
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
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
              Tell us what you'd like <span className="text-gold">made</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          {sent ? (
            <div className="border border-gold/50 p-10">
              <h2 className="font-display text-3xl text-foreground">Thank you.</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Your enquiry has been noted. For the fastest response, call{" "}
                <a href={company.phoneHref} className="text-gold">
                  {company.phone}
                </a>{" "}
                or message us on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="border border-border p-8 sm:p-10">
              <p className="eyebrow">Project Enquiry</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                  />
                </label>
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                  />
                </label>
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                  />
                </label>
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Service Required
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={field}
                  >
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs tracking-[0.16em] text-muted-foreground uppercase sm:col-span-2">
                  Project Details
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={field}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink"
              >
                Send Enquiry
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
                <a href={company.phoneHref} className="mt-1 block text-foreground">
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
                <p className="mt-1 text-foreground">{company.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 size-4 shrink-0 text-gold" />
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-1 text-foreground">{company.hours}</p>
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
