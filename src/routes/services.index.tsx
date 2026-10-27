import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { materials, services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Custom Sculptures, Murals, Gates & CNC Work" },
      {
        name: "description",
        content:
          "Custom sculptures, murals, decorative gates and grills, CNC and MDF designs, FRP products, planters and architectural decorative work.",
      },
      { property: "og:title", content: "Our Services — Siddhi On Creation" },
      {
        property: "og:description",
        content:
          "Seven custom-creation disciplines, from sculpture and murals to architectural metal and FRP.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Services</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              Everything we make is <span className="text-gold">made to order</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70">
              Choose a discipline to see the types of work, materials and answers to the
              questions clients ask most.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full border border-border transition-colors hover:border-gold"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-2xl text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                    View details <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionHeading eyebrow="Materials" title="Worked in-house" align="center" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {materials.map((m) => (
              <span
                key={m}
                className="border border-border px-6 py-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
