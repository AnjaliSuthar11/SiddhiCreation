import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Siddhi On Creation`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-16 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Service</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              {service.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="eyebrow">Overview</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            {service.overview}
          </p>
          <p className="eyebrow mt-14">Types of Work</p>
          <ul className="mt-6 space-y-4">
            {service.types.map((t) => (
              <li key={t} className="flex gap-3 text-base text-muted-foreground">
                <Check className="mt-1 size-4 shrink-0 text-gold" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="h-fit border border-border p-8">
          <p className="eyebrow">Materials</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.materials.map((m) => (
              <span
                key={m}
                className="border border-border px-4 py-2 text-[0.66rem] tracking-[0.16em] text-muted-foreground uppercase"
              >
                {m}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase"
          >
            Request a Quote <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-secondary py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <p className="eyebrow">Frequently Asked</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {service.faqs.map((f) => (
              <div key={f.q} className="grid gap-3 py-8 lg:grid-cols-[1fr_1.4fr]">
                <h2 className="font-display text-xl text-foreground">{f.q}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <p className="eyebrow">Other Services</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group block border border-border transition-colors hover:border-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="p-6 font-display text-xl text-foreground">{s.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
