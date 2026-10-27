import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Siddhi On Creation`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div>
      <section className="relative flex min-h-[75vh] items-end overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-16 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">{project.category}</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              {project.name}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-foreground/85">
            {project.description}
          </p>
          <div className="mt-14 space-y-10">
            {[
              { label: "The Challenge", text: project.challenge },
              { label: "Our Approach", text: project.approach },
              { label: "Process", text: project.process },
              { label: "The Result", text: project.result },
            ].map((b) => (
              <div key={b.label}>
                <p className="eyebrow">{b.label}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="h-fit border border-border p-8">
          <dl className="space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Client</dt>
              <dd className="mt-2 text-foreground">{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2 text-foreground">{project.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Materials</dt>
              <dd className="mt-2 text-foreground">{project.materials.join(", ")}</dd>
            </div>
          </dl>
          <Link
            to="/contact"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase"
          >
            Enquire About Similar Work <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {project.gallery.map((g, i) => (
            <Reveal key={`${g}-${i}`} delay={i * 70}>
              <img
                src={g}
                alt={`${project.name} detail ${i + 1}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="eyebrow">More Projects</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-display text-xl text-foreground">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
