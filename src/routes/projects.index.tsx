import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projectCategories, projects } from "@/data/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Siddhi On Creation" },
      {
        name: "description",
        content:
          "Explore completed sculptures, murals, decorative gates, CNC facades, FRP features and landscape elements across residential and commercial projects.",
      },
      { property: "og:title", content: "Projects & Portfolio — Siddhi On Creation" },
      {
        property: "og:description",
        content:
          "Selected commissions in sculpture, murals, architectural metal, CNC and FRP.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All Projects");
  const filtered =
    filter === "All Projects"
      ? projects
      : projects.filter((p) => p.tags.includes(filter) || p.category === filter);

  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Portfolio</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              Projects that <span className="text-gold">define spaces</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="flex flex-wrap gap-3">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={
                "border px-5 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase transition-colors " +
                (filter === c
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[0.66rem] tracking-[0.2em] text-gold uppercase">
                  {p.category}
                </p>
                <h2 className="mt-2 font-display text-2xl text-foreground">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {p.location} · {p.client}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
