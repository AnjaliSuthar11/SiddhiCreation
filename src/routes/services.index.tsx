import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { materials } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Our Services | Sculptures, Murals, FRP & Metal Work",
      },
      {
        name: "description",
        content:
          "Explore custom sculptures, murals, FRP products, decorative metalwork, MDF carving and architectural art by Siddhi On Creation.",
      },
      {
        property: "og:title",
        content: "Our Services — Siddhi On Creation",
      },
      {
        property: "og:description",
        content:
          "Bespoke sculptures, murals, FRP products, metalwork and architectural decorative solutions.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceGroups = [
  {
    number: "01",
    title: "Sculptures & Artistic Installations",
    slug: "sculptures",
    image: "/service/siddhioncreationwork.png",
    description:
      "Bespoke sculptures and artistic installations created for landscapes, architectural spaces, commercial developments and distinctive environments.",
    services: [
      "FRP Sculptures",
      "GRC Sculptures",
      "Metal Sculptures",
      "Landscape Sculptures",
      "Thematic & Conceptual Sculptures",
      "Customized Sculptural Installations",
    ],
  },
  {
    number: "02",
    title: "Murals & Wall Art",
    slug: "murals",
    image: "/service/wallart.png",
    description:
      "Artistic wall treatments, sculptural reliefs and decorative panels that bring character, texture and individuality to interiors and exteriors.",
    services: [
      "FRP Murals",
      "GRC Murals",
      "Metal Murals",
      "Decorative Wall Panels",
      "Thematic Wall Art",
      "Artistic Installations",
    ],
  },
  {
    number: "03",
    title: "FRP Products & Furniture",
    slug: "frp-products",
    image: "/service/frp.png",
    description:
      "Custom FRP creations combining versatility, durability and design for architectural projects, landscapes and indoor and outdoor spaces.",
    services: [
      "FRP Planters & Trays",
      "FRP Indoor & Outdoor Furniture",
      "FRP Seating & Benches",
      "FRP Decorative Gates & Grills",
      "FRP Platforms",
      "FRP Panels",
      "Customized FRP Structures",
    ],
  },
  {
    number: "04",
    title: "Metal & Decorative Work",
    slug: "decorative-gates-grills",
    image: "/work/work8.png",
    description:
      "Distinctive metalwork and architectural details combining craftsmanship, precision and decorative design for bespoke projects.",
    services: [
      "Decorative Metal Grills",
      "Gates & Screens",
      "Zalli Work",
      "Metal Murals",
      "Metal Sculptures",
      "Customized Architectural Elements",
    ],
  },
  {
    number: "05",
    title: "Architectural & Multi-Material Work",
    slug: "architectural-decorative-work",
    image: "/service/cnc_router.png",
    description:
      "Custom architectural features and decorative finishes created using a versatile range of materials, techniques and craftsmanship.",
    services: [
      "MDF Carving",
      "Corian / Solid Surface",
      "WPC Work",
      "Wood Work",
      "Tile Work",
      "Stone Work",
      "GRC Architectural Elements",
      "Customized Decorative Features",
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="surface-ink relative overflow-hidden pt-36 pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">
              Our Services
            </p>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-ink-foreground">
              Crafting art.
              <br />
              <span className="text-gold">
                Shaping spaces.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">
              From bespoke sculptures and artistic murals to FRP
              creations, decorative metalwork and architectural
              detailing, we transform ideas into distinctive
              creations through craftsmanship and material expertise.
            </p>

            <a
              href="#service-categories"
              className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-7 py-4 text-xs tracking-[0.18em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              Explore Our Expertise
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section
        id="service-categories"
        className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28"
      >
        <Reveal>
          <SectionHeading
            eyebrow="What We Create"
            title="Our Areas of Expertise"
            align="left"
          />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explore our specialist services, grouped by their
            application and purpose. Every creation can be tailored
            to your design vision, material requirements and project
            specifications.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-24">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.slug} delay={index * 60}>
              <article className="group grid overflow-hidden border border-border lg:grid-cols-[0.9fr_1.1fr]">
                {/* IMAGE */}
                <Link
                  to="/services/$slug"
                  params={{ slug: group.slug }}
                  className="relative block min-h-[300px] overflow-hidden bg-secondary sm:min-h-[400px]"
                >
                  <img
                    src={group.image}
                    alt={group.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                  <span className="absolute top-6 left-6 border border-white/40 px-4 py-2 text-xs tracking-[0.2em] text-white">
                    {group.number}
                  </span>

                  <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between gap-4">
                    <p className="max-w-sm font-display text-2xl leading-tight text-white sm:text-3xl">
                      {group.title}
                    </p>

                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </Link>

                {/* CATEGORY DETAILS */}
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <p className="eyebrow text-gold">
                    Specialised Services
                  </p>

                  <h2 className="mt-4 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {group.title}
                  </h2>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {group.description}
                  </p>

                  {/* SUBSERVICES */}
                  <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
                    {group.services.map((serviceName) => (
                      <Link
                        key={serviceName}
                        to="/services/$slug"
                        params={{ slug: group.slug }}
                        className="group/item flex items-start gap-3 border-b border-border py-4 text-sm text-foreground/80 transition-colors hover:text-gold"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 bg-gold" />

                        <span className="flex-1 leading-relaxed">
                          {serviceName}
                        </span>

                        <ArrowUpRight className="mt-0.5 size-4 shrink-0 opacity-40 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/services/$slug"
                    params={{ slug: group.slug }}
                    className="mt-8 inline-flex w-fit items-center gap-3 bg-ink px-6 py-4 text-xs tracking-[0.16em] text-ink-foreground uppercase transition-colors hover:bg-gold hover:text-ink"
                  >
                    Explore This Category
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MATERIALS SECTION */}
      <section className="border-y border-border bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Material Expertise"
              title="Worked Across Materials"
              align="center"
            />

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our work brings together material knowledge, fabrication
              techniques and detailed finishing to meet the needs of
              diverse architectural and artistic projects.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {materials.map((material) => (
              <span
                key={material}
                className="border border-border px-5 py-3 text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:border-gold hover:text-foreground sm:px-6"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="surface-ink py-20 md:py-28">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">
              Have a Project in Mind?
            </p>

            <h2 className="mt-6 font-display text-3xl leading-tight text-ink-foreground sm:text-5xl">
              Let&apos;s create something
              <span className="text-gold"> extraordinary.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">
              Share your concept, drawings or inspiration with us.
              We&apos;ll help you explore the right materials,
              fabrication methods and creative possibilities.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs tracking-[0.18em] text-ink uppercase transition-colors hover:bg-gold-soft"
            >
              Discuss Your Project
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}