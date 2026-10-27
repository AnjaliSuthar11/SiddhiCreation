import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
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
        meta: [
          { title: "Service Not Found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { service } = loaderData;
    const title = `${service.title} | Siddhi On Creation`;

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

/* -------------------------------------------------------
   INDIVIDUAL SERVICES

   Each item has its own title, description, and image path.

   Place the images inside:
   public/service/subservices/

   Example:
   public/service/subservices/frp-sculptures.png
------------------------------------------------------- */

const subServices: Record<
  string,
  {
    title: string;
    slug: string;
    description: string;
  }[]
> = {
  sculptures: [
    {
      title: "FRP Sculptures",
      slug: "frp-sculptures",
      description:
        "Lightweight, durable sculptural forms crafted in fibre-reinforced plastic for interiors, landscapes and themed environments.",
    },
    {
      title: "GRC Sculptures",
      slug: "grc-sculptures",
      description:
        "Sculptural forms made with glass-fibre-reinforced concrete for architectural, commercial and landscape applications.",
    },
    {
      title: "Metal Sculptures",
      slug: "metal-sculptures",
      description:
        "Custom metal artworks developed with distinctive forms, textures and finishes for indoor and outdoor spaces.",
    },
    {
      title: "Landscape Sculptures",
      slug: "landscape-sculptures",
      description:
        "Site-responsive sculptures designed to complement gardens, courtyards, resorts and public landscapes.",
    },
    {
      title: "Thematic & Conceptual Sculptures",
      slug: "thematic-conceptual-sculptures",
      description:
        "Original sculptural concepts created around a story, theme, brand identity or architectural design brief.",
    },
    {
      title: "Customized Sculptural Installations",
      slug: "customized-sculptural-installations",
      description:
        "Made-to-order installations developed to suit project dimensions, materials, surroundings and creative vision.",
    },
  ],

  murals: [
    {
      title: "FRP Murals",
      slug: "frp-murals",
      description:
        "Dimensional FRP wall features and reliefs designed for decorative interiors, facades and themed spaces.",
    },
    {
      title: "GRC Murals",
      slug: "grc-murals",
      description:
        "Architectural reliefs and textured wall compositions created for distinctive decorative applications.",
    },
    {
      title: "Metal Murals",
      slug: "metal-murals",
      description:
        "Metal wall artworks using shaped, layered and patterned elements to create depth and visual interest.",
    },
    {
      title: "Decorative Wall Panels",
      slug: "decorative-wall-panels",
      description:
        "Custom wall panels introducing pattern, texture and architectural detail into residential and commercial spaces.",
    },
    {
      title: "Thematic Wall Art",
      slug: "thematic-wall-art",
      description:
        "Wall art designed around a specific concept, setting, narrative or visual identity.",
    },
    {
      title: "Artistic Installations",
      slug: "artistic-installations",
      description:
        "Three-dimensional artistic features designed to become focal points within a space.",
    },
  ],

  "frp-products": [
    {
      title: "FRP Planters & Trays",
      slug: "frp-planters-trays",
      description:
        "Custom planters and trays designed in varied shapes, dimensions and finishes for indoor and outdoor use.",
    },
    {
      title: "FRP Indoor & Outdoor Furniture",
      slug: "frp-indoor-outdoor-furniture",
      description:
        "Bespoke FRP furniture designed around project requirements, intended use and preferred finishes.",
    },
    {
      title: "FRP Seating & Benches",
      slug: "frp-seating-benches",
      description:
        "Custom seating and benches for landscaped gardens, commercial environments and public spaces.",
    },
    {
      title: "FRP Decorative Gates & Grills",
      slug: "frp-decorative-gates-grills",
      description:
        "Decorative FRP gate and grill elements developed for distinctive architectural settings.",
    },
    {
      title: "FRP Platforms",
      slug: "frp-platforms",
      description:
        "Custom platforms and raised elements fabricated to suit project dimensions and functional requirements.",
    },
    {
      title: "FRP Panels",
      slug: "frp-panels",
      description:
        "Moulded FRP panels for decorative, themed and architectural applications.",
    },
    {
      title: "Customized FRP Structures",
      slug: "customized-frp-structures",
      description:
        "Purpose-designed FRP structures produced to meet specific shapes, dimensions and project requirements.",
    },
  ],

  "decorative-gates-grills": [
    {
      title: "Decorative Metal Grills",
      slug: "decorative-metal-grills",
      description:
        "Decorative metal grill patterns tailored for architectural openings, partitions and feature applications.",
    },
    {
      title: "Gates & Screens",
      slug: "gates-screens",
      description:
        "Custom gates and screens combining decorative detailing with the practical requirements of an entrance or space.",
    },
    {
      title: "Zalli Work",
      slug: "zalli-work",
      description:
        "Patterned jali-style work introducing privacy, filtered light and decorative character into architectural spaces.",
    },
    {
      title: "Metal Murals",
      slug: "metal-murals",
      description:
        "Bespoke metal wall art and reliefs designed with layered forms, patterns and distinctive finishes.",
    },
    {
      title: "Metal Sculptures",
      slug: "metal-sculptures",
      description:
        "Custom metal sculptures developed for architectural, landscape and artistic environments.",
    },
    {
      title: "Customized Architectural Elements",
      slug: "customized-architectural-elements",
      description:
        "Made-to-order metal details and features developed to complement an architectural concept.",
    },
  ],

  "architectural-decorative-work": [
    {
      title: "MDF Carving",
      slug: "mdf-carving",
      description:
        "Decorative MDF carving and patterned elements for panels, partitions, furniture and interior features.",
    },
    {
      title: "Corian / Solid Surface",
      slug: "corian-solid-surface",
      description:
        "Custom solid-surface features shaped and finished for decorative and architectural applications.",
    },
    {
      title: "WPC Work",
      slug: "wpc-work",
      description:
        "WPC elements designed for selected decorative, screening and architectural applications.",
    },
    {
      title: "Wood Work",
      slug: "wood-work",
      description:
        "Custom wood details and decorative features developed around the project's design and finish requirements.",
    },
    {
      title: "Tile Work",
      slug: "tile-work",
      description:
        "Tile-based decorative treatments and compositions for feature surfaces and bespoke design applications.",
    },
    {
      title: "Stone Work",
      slug: "stone-work",
      description:
        "Stone elements and decorative applications selected to complement architectural and landscape schemes.",
    },
    {
      title: "GRC Architectural Elements",
      slug: "grc-architectural-elements",
      description:
        "Decorative GRC elements, including architectural features, reliefs and project-specific components.",
    },
    {
      title: "Customized Decorative Features",
      slug: "customized-decorative-features",
      description:
        "Bespoke multi-material architectural details developed to bring a coordinated design vision to life.",
    },
  ],
};


/* -------------------------------------------------------
   DETAIL PAGE
------------------------------------------------------- */

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  const items = subServices[service.slug] || [];

  const others = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-ink">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-36 pb-20 sm:px-8 lg:pb-24">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">
              Siddhi On Creation / Our Expertise
            </p>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.03] text-ink-foreground">
              {service.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              {service.short}
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs tracking-[0.18em] text-ink uppercase transition-colors hover:bg-gold-soft"
            >
              Discuss Your Project
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:py-28">
        <Reveal>
          <p className="eyebrow">About This Service</p>

          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Thoughtfully designed.
            <br />
            Carefully crafted.
          </h2>

          <p className="mt-7 text-base leading-[1.9] text-muted-foreground sm:text-lg">
            {service.overview}
          </p>

          <p className="mt-5 text-base leading-[1.9] text-muted-foreground">
            Every project is developed around its intended application,
            design concept, material requirements and finishing details.
            We work to translate your ideas, references and drawings into
            custom-made creations.
          </p>
        </Reveal>

        <Reveal delay={100} className="h-fit border border-border p-7 sm:p-9">
          <p className="eyebrow">Materials & Finishes</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.materials.map((material) => (
              <span
                key={material}
                className="border border-border px-4 py-3 text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase"
              >
                {material}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Have a specific material, finish or design in mind? Tell us
              about your requirements.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 text-xs tracking-[0.15em] text-foreground uppercase transition-colors hover:text-gold"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* INDIVIDUAL SERVICES */}
      <section className="border-y border-border bg-secondary py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Explore Our Capabilities"
              title={`Our ${service.title}`}
              intro="Discover the different types of work we create within this category. Each can be customised to suit your project."
              align="left"
            />
          </Reveal>

          {items.length > 0 ? (
            <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <Reveal key={item.slug} delay={(index % 3) * 70}>
                  <article className="group flex h-full flex-col overflow-hidden border border-border bg-background transition-colors duration-500 hover:border-gold">
                    {/* Individual service image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={`/service/subservices/${item.slug}.png`}
                        alt={item.title}
                        loading="lazy"
                        onError={(event) => {
                          const image = event.currentTarget;

                          if (image.dataset["fallback"] !== "true") {
  image.dataset["fallback"] = "true";
  image.src = service.image;
}
                        }}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-70" />

                      <span className="absolute top-4 left-4 border border-white/50 bg-ink/20 px-3 py-2 text-[0.65rem] tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Service information */}
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-display text-2xl leading-snug text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-4 flex-1 text-sm leading-[1.9] text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-6 border-t border-border pt-5">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.16em] text-foreground uppercase transition-colors hover:text-gold"
                        >
                          Enquire About This Service
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {service.types.map((type, index) => (
                <Reveal key={type} delay={(index % 3) * 60}>
                  <article className="border border-border bg-background p-7 sm:p-8">
                    <Check className="size-5 text-gold" />

                    <h3 className="mt-5 font-display text-2xl text-foreground">
                      {type}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {service.short}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-foreground uppercase hover:text-gold"
                    >
                      Make an Enquiry
                      <ArrowRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="From Concept to Creation"
            title="Our Approach"
            intro="A considered process that brings your concept from the initial discussion through fabrication and final finishing."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Understand",
              description:
                "We discuss your concept, references, dimensions, application and project requirements.",
            },
            {
              number: "02",
              title: "Design",
              description:
                "We develop the creative direction, material selection and design details for your project.",
            },
            {
              number: "03",
              title: "Create",
              description:
                "The approved design moves into fabrication, craftsmanship and detailed finishing.",
            },
            {
              number: "04",
              title: "Complete",
              description:
                "We coordinate the final requirements, delivery and installation where included in the project scope.",
            },
          ].map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <div className="border-t border-gold/60 pt-6">
                <span className="font-display text-4xl text-gold">
                  {step.number}
                </span>

                <h3 className="mt-5 font-display text-2xl text-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="border-y border-border bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Things You May Want to Know"
                align="left"
              />
            </Reveal>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {service.faqs.map((faq, index) => (
                <Reveal key={faq.q} delay={index * 50}>
                  <div className="grid gap-4 py-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
                    <h3 className="font-display text-xl text-foreground">
                      {faq.q}
                    </h3>

                    <p className="text-sm leading-[1.9] text-muted-foreground sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Explore Further"
            title="Related Services"
            intro="Discover more of our artistic, decorative and architectural capabilities."
            align="left"
          />
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item, index) => (
            <Reveal key={item.slug} delay={index * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="group block h-full border border-border transition-colors hover:border-gold"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.short}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-foreground uppercase transition-colors group-hover:text-gold">
                    Explore Service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-ink border-t border-ink-foreground/10 py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">
              Let's Create Together
            </p>

            <h2 className="mt-6 font-display text-3xl leading-tight text-ink-foreground sm:text-5xl">
              Have an idea worth bringing to life?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
              Tell us about your project, share your inspiration and
              explore the possibilities with Siddhi On Creation.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.18em] text-ink uppercase transition-colors hover:bg-gold-soft"
            >
              Request a Consultation
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}