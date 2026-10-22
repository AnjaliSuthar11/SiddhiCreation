import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { images, materials, processSteps, whyChooseUs } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Siddhi On Creation & Mrudula Creation" },
      {
        name: "description",
        content:
          "Over 30 years of artistic and architectural craftsmanship: our story, our workshop and the values behind every custom creation.",
      },
      { property: "og:title", content: "About Siddhi On Creation" },
      {
        property: "og:description",
        content:
          "Three decades of custom sculpture, mural and architectural art, designed and manufactured in-house.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">About Us</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              Craft, patience and <span className="text-gold">30 years</span> of custom
              work
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-start gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <img
            src={images.aboutWorkshop}
            alt="Inside the Siddhi On Creation workshop"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Siddhi on Creation"
            intro=""
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
             Siddhi On Creation is a creative art and design studio specializing in Sculptures, Murals, FRP, GRC, Metal Art, Decorative Grills, Planters, Furniture, Painting and Customized Architectural Artworks.
            </p>
            <p>
              Founded and led by Mr. Shekhar Suresh Satardekar, an artist who has completed his studies at Sir J. J. School of Art, we have been working in the field of art, sculpture and design for over 30 years. 
            </p>
            <p>
              Our expertise includes developing fictional, thematic and abstract concepts across different materials and mediums. We combine creativity, craftsmanship and technical expertise to transform ideas into distinctive and visually impactful artworks.
            </p>
            <p>
              We undertake projects for residential, commercial, hospitality, landscape, institutional and architectural spaces, working closely with architects, interior designers, landscape consultants, developers and project teams.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What sets our work apart" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 60} className="border border-border p-8">
                <p className="gold-rule" />
                <h3 className="mt-5 font-display text-2xl text-foreground">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="How We Work" title="From first sketch to installation" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 70}>
              <p className="font-display text-4xl text-gold">{s.number}</p>
              <h3 className="mt-4 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow">Materials We Work With</p>
          <div className="mt-6 flex flex-wrap gap-3">
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
        <Link
          to="/contact"
          className="mt-16 inline-flex items-center gap-3 bg-ink px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase"
        >
          Work With Us <ArrowRight className="size-4" />
        </Link>
      </section>

        <section className="border-y border-border bg-secondary">
          <div className="flex pt-20 flex-col gap-5 mx-auto max-w-[1400px] px-5 py-24 sm:px-8">

    
              <h3 className=" font-display text-3xl text-foreground">
                OUR VISION
              </h3>
              <p className="text-xl leading-relaxed text-muted-foreground">
To create innovative, distinctive and meaningful artworks that bring together art, architecture, creativity and craftsmanship.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground">
          We aim to transform ordinary spaces into memorable environments through unique artistic expressions.
              </p>
         </div>
        </section>
        
        <section className="border-y border-border bg-secondary">
          <div className="flex pt-20 flex-col gap-5 mx-auto max-w-[1400px] px-5 py-24 sm:px-8">

    
              <h3 className=" font-display text-3xl text-foreground">
              OUR COMMITMENT
              </h3>
              <p className="text-xl leading-relaxed text-muted-foreground">
At Siddhi On Creation, we believe that every space has the potential to become a work of art.


              </p>
              <p  className="text-xl leading-relaxed text-muted-foreground">
                Our goal is to understand our client's vision and transform it into a unique, aesthetically appealing and technically well-executed creation.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground">
          We believe in building long-term relationships with our clients through quality, creativity, commitment and professional execution.
              </p>
         </div>
        </section>
    </div>
  );
}
