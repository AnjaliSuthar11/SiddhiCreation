import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {  creationProjects } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  clients,
  images,
  MATERIALS,
  processSteps,
  projectCategories,
  projects,
  services,
  testimonials,
  whyChooseUs,
} from "@/data/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Siddhi On Creation — Custom Sculptures, Murals & Architectural Art",
      },
      {
        name: "description",
        content:
          "30+ years of customised sculptures, murals, decorative gates, CNC work, FRP products and architectural art for residential and commercial spaces in India.",
      },
      {
        property: "og:title",
        content:
          "Siddhi On Creation — Custom Sculptures, Murals & Architectural Art",
      },
      {
        property: "og:description",
        content:
          "Bespoke sculptures, murals, decorative metalwork and architectural elements — designed, manufactured and installed in-house.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  /* =====================================================
     VIDEO STATE
  ===================================================== */

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  /* =====================================================
     PROJECT FILTER
  ===================================================== */

  const [filter, setFilter] = useState<string>("All Projects");

  const filtered =
    filter === "All Projects"
      ? projects
      : projects.filter(
          (p) =>
            p.tags.includes(filter) ||
            p.category === filter
        );

  /* =====================================================
     CREATION VIDEOS
  ===================================================== */

  const videos = [
    {
      src: "/influence/Final.mp4",
      number: "01",
      category: "Sculpture",
      title: "Sculptural Art",
    },
    {
      src: "/influence/Final2.mp4",
      number: "02",
      category: "Murals",
      title: "Wall Art",
    },
    {
      src: "/influence/Final3.mp4",
      number: "03",
      category: "Metalwork",
      title: "Gates & Jali",
    },
    {
      src: "/influence/Final2.mp4",
      number: "04",
      category: "CNC & Design",
      title: "Precision Art",
    },
  ];

  /* =====================================================
     PREVENT PAGE SCROLL WHEN VIDEO IS OPEN
  ===================================================== */

  useEffect(() => {
    if (activeVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideo === null) return;

      // Close
      if (e.key === "Escape") {
        setActiveVideo(null);
        return;
      }

      // Next
      if (e.key === "ArrowRight") {
        setActiveVideo(
          (activeVideo + 1) % videos.length
        );
        return;
      }

      // Previous
      if (e.key === "ArrowLeft") {
        setActiveVideo(
          (activeVideo - 1 + videos.length) %
            videos.length
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeVideo]);

  /* =====================================================
     NEXT VIDEO
  ===================================================== */

  const nextVideo = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setActiveVideo((current) => {
      if (current === null) return null;

      return (current + 1) % videos.length;
    });
  };

  /* =====================================================
     PREVIOUS VIDEO
  ===================================================== */

  const previousVideo = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setActiveVideo((current) => {
      if (current === null) return null;

      return (
        (current - 1 + videos.length) %
        videos.length
      );
    });
  };

  /* =====================================================
     CLOSE VIDEO
  ===================================================== */

  const closeVideo = () => {
    setActiveVideo(null);
  };

  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <div>
      {/*image Hero */}
      {/* <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={images.heroInstallation}
          alt="Suspended metal ribbon sculpture in a hotel atrium"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">
              Since 1994 &nbsp;·&nbsp; Mumbai, India
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-ink-foreground">
              Turning Imagination Into <span className="text-gold">Art</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
              Customised sculptures, murals, decorative metalwork and architectural
              elements — conceived, crafted and installed by one team for over three
              decades.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase transition-transform hover:scale-[1.02]"
              >
                View Projects <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-ink-foreground/30 px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Discuss Your Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* new video one hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 size-full object-cover"
  >
    <source src="/work7.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay for text visibility */}
  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />

  <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-32 pb-20 sm:px-8">
    <Reveal>
      <p className="eyebrow text-gold-soft/80">
        Since 1994 &nbsp;·&nbsp; Mumbai, India
      </p>

      <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-ink-foreground">
        Turning Imagination Into{" "}
        <span className="text-gold">Art</span>
      </h1>

      <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
        Customised sculptures, murals, decorative metalwork and architectural
        elements — conceived, crafted and installed by one team for over three
        decades.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase transition-transform hover:scale-[1.02]"
        >
          View Projects <ArrowRight className="size-4" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 border border-ink-foreground/30 px-8 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:border-gold hover:text-gold"
        >
          Discuss Your Project
        </Link>
      </div>
    </Reveal>
  </div>

</section>

      {/* Stats */}
      {/* <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            { k: "30+", v: "Years of craftsmanship" },
            { k: "500+", v: "Projects delivered" },
            { k: "9", v: "Material specialities" },
            { k: "100%", v: "In-house execution" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 80}>
              <p className="font-display text-5xl text-foreground">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* new stats */}
      <section className="relative overflow-hidden border-b border-black/5 bg-[#f3efe7] py-24">

  {/* Decorative Background Elements */}
  <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full border border-[#b08d57]/20" />

  <div className="absolute -right-32 bottom-[-150px] h-[500px] w-[500px] rounded-full border border-[#b08d57]/20" />

  {/* Giant Background Number */}
  <div className="pointer-events-none absolute right-[-30px] top-[-80px] select-none font-display text-[18rem] leading-none text-[#b08d57]/[0.06] sm:text-[28rem]">
    30
  </div>


  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">

    {/* Heading Area */}
    <Reveal>
      <div className="mx-auto mb-16 max-w-3xl text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b08d57]">
          Our Journey
        </p>

        <h2 className="mt-5 font-display text-4xl leading-tight text-[#1c1917] sm:text-5xl lg:text-6xl">
          Three Decades of
          <span className="block italic text-[#b08d57]">
            Creating the Extraordinary
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#57534e] sm:text-base">
          From bold ideas to lasting installations, every creation is shaped
          through experience, craftsmanship and complete in-house execution.
        </p>

      </div>
    </Reveal>


    {/* Statistics */}
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          k: "30+",
          v: "Years of Craftsmanship",
          featured: true
        },
        {
          k: "500+",
          v: "Projects Delivered"
        },
        {
          k: "9",
          v: "Material Specialities"
        },
        {
          k: "100%",
          v: "In-House Execution"
        }
      ].map((s, i) => (

        <Reveal key={s.k} delay={i * 100}>

          <div
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
              s.featured
                ? "bg-[#1c1917] text-white shadow-2xl"
                : "border border-black/5 bg-white shadow-sm hover:shadow-xl"
            }`}
          >

            {/* Decorative Number */}
            <div
              className={`absolute -right-3 -top-8 font-display text-[9rem] leading-none ${
                s.featured
                  ? "text-white/[0.05]"
                  : "text-[#b08d57]/[0.06]"
              }`}
            >
              {s.k.replace("+", "").replace("%", "")}
            </div>


            <div className="relative">

              {/* Number */}
              <p
                className={`font-display text-6xl sm:text-7xl ${
                  s.featured
                    ? "text-[#d4af72]"
                    : "text-[#1c1917]"
                }`}
              >
                {s.k}
              </p>

              {/* Decorative Line */}
              <div
                className={`mt-6 h-[2px] w-14 transition-all duration-500 group-hover:w-24 ${
                  s.featured
                    ? "bg-[#d4af72]"
                    : "bg-[#b08d57]"
                }`}
              />

              {/* Text */}
              <p
                className={`mt-5 text-xs uppercase tracking-[0.18em] ${
                  s.featured
                    ? "text-white/70"
                    : "text-[#78716c]"
                }`}
              >
                {s.v}
              </p>

            </div>

          </div>

        </Reveal>

      ))}

    </div>

  </div>

</section>

{/* ================= STORIES WE SHAPE ================= */}

<section className="relative overflow-hidden bg-[#eee6d9] py-20 lg:py-32">

  {/* Background decoration */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full border border-[#8a6845]/10" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full border border-[#8a6845]/10" />

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">

    {/* ================= HEADING ================= */}

    <Reveal>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <div className="max-w-3xl">

          <p className="text-[0.65rem] tracking-[0.3em] text-[#8a6845] uppercase">
            Stories We Shape
          </p>

          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-[#241c16] sm:text-5xl lg:text-6xl">
            Different Creations.
            <span className="ml-3 text-[#8a6845] italic">
              One Craft.
            </span>
          </h2>

        </div>

        <p className="max-w-md text-sm leading-relaxed text-[#66594c]">
          From sculptural forms to architectural details, every creation
          carries the character of the hands that made it.
        </p>

      </div>

    </Reveal>


    {/* ================= FOUR CREATIONS ================= */}

    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* ================= 01 SCULPTURE ================= */}

      <Reveal delay={0}>
        <div
          onClick={() => setActiveVideo(0)}
          className="group relative cursor-pointer overflow-hidden bg-[#241c16]"
        >

          <div className="aspect-[9/16]">

            <video
              src="/influence/Final.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="font-display text-3xl text-white/70">
              01
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase">
              Sculpture
            </p>

            <h3 className="mt-2 font-display text-2xl text-white">
              Sculptural Art
            </h3>

          </div>

        </div>
      </Reveal>


      {/* ================= 02 MURAL ================= */}

      <Reveal delay={80}>
        <div
          onClick={() => setActiveVideo(1)}
          className="group relative cursor-pointer overflow-hidden bg-[#241c16]"
        >

          <div className="aspect-[9/16]">

            <video
              src="/influence/Final2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="font-display text-3xl text-white/70">
              02
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase">
              Murals
            </p>

            <h3 className="mt-2 font-display text-2xl text-white">
              FRP Art
            </h3>

          </div>

        </div>
      </Reveal>


      {/* ================= 03 METALWORK ================= */}

      <Reveal delay={160}>
        <div
          onClick={() => setActiveVideo(2)}
          className="group relative cursor-pointer overflow-hidden bg-[#241c16]"
        >

          <div className="aspect-[9/16]">

            <video
              src="/influence/Final3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="font-display text-3xl text-white/70">
              03
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase">
              Metalwork
            </p>

            <h3 className="mt-2 font-display text-2xl text-white">
            FRP Art
            </h3>

          </div>

        </div>
      </Reveal>


      {/* ================= 04 CNC ================= */}

      <Reveal delay={240}>
        <div
          onClick={() => setActiveVideo(3)}
          className="group relative cursor-pointer overflow-hidden bg-[#241c16]"
        >

          <div className="aspect-[9/16]">

            <video
              src="/influence/Final2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="font-display text-3xl text-white/70">
              04
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6">

            <p className="text-[0.6rem] tracking-[0.25em] text-[#d4a85c] uppercase">
              CNC & Design
            </p>

            <h3 className="mt-2 font-display text-2xl text-white">
              Precision Art
            </h3>

          </div>

        </div>
      </Reveal>

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}

    <Reveal delay={300}>

      <div className="mt-14 flex flex-col gap-5 border-t border-[#8a6845]/20 pt-8 sm:flex-row sm:items-center sm:justify-between">

        <p className="font-display text-xl text-[#3a2d23] sm:text-2xl">
          Every material has a story.
          <span className="ml-2 text-[#8a6845] italic">
            We give it form.
          </span>
        </p>

        <p className="text-[0.65rem] tracking-[0.25em] text-[#8a6845] uppercase">
          Sculpt · Shape · Create
        </p>

      </div>

    </Reveal>

  </div>

</section>


{/* ========================================================= */}
{/* ================= FULLSCREEN VIDEO VIEWER =============== */}
{/* ========================================================= */}

{activeVideo !== null && (

  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-md"
    onClick={closeVideo}
  >

    {/* LEFT ARROW */}

    <button
      type="button"
      onClick={previousVideo}
      aria-label="Previous video"
      className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-4xl font-light text-white transition-opacity hover:opacity-60 sm:left-8"
    >
      ‹
    </button>


    {/* VIDEO */}

    <div
      className="relative flex h-[90vh] max-h-[900px] w-auto max-w-[90vw] items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >

      <video
        key={activeVideo}
        src={videos[activeVideo]?.src}
        autoPlay
        playsInline
        muted={false}
        controls={false}
        className="h-full max-h-[90vh] w-auto max-w-[90vw] object-contain"
      />

    </div>


    {/* RIGHT ARROW */}

    <button
      type="button"
      onClick={nextVideo}
      aria-label="Next video"
      className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-4xl font-light text-white transition-opacity hover:opacity-60 sm:right-8"
    >
      ›
    </button>


    {/* CLOSE */}

    <button
      type="button"
      onClick={closeVideo}
      aria-label="Close video"
      className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center text-3xl font-light text-white transition-opacity hover:opacity-60 sm:right-8 sm:top-8"
    >
      ×
    </button>

  </div>

)}

      {/* About */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <Reveal>
          {/* <img
            src={images.aboutWorkshop}
            alt="Craftsmen at work in the Siddhi On Creation workshop"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          /> */}
          <video
    src="/work4.mp4"
    className="aspect-[4/5] w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    controls
  >
    Your browser does not support the video tag.
  </video>
          
        </Reveal>
        <SectionHeading
          eyebrow="Who We Are"
          title={
            <>
              Three decades of <span className="text-gold">custom creation</span>
            </>
          }
          intro="Siddhi On Creation, together with sister concern Mrudula Creation, designs and manufactures artistic and architectural work for homes, hospitality, offices and townships — from a single sculpture to a full decorative package."
        >
          <div className="mt-10 space-y-5">
            {whyChooseUs.slice(0, 3).map((w) => (
              <div key={w.title} className="border-l border-gold/60 pl-5">
                <p className="font-display font-bold text-xl text-foreground">{w.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] text-foreground uppercase hover:text-gold"
          >
            More about us <ArrowRight className="size-4" />
          </Link>
        </SectionHeading>
      </section>

      {/* Services */}
      <section className="surface-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <SectionHeading
            eyebrow="What We Create"
            tone="dark"
            title="Services"
            intro="Every discipline we offer is customised — designed around your space, material palette and budget."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full border border-ink-foreground/10 transition-colors hover:border-gold/50"
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
                    <h3 className="font-display text-2xl text-ink-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-foreground/60">
                      {s.short}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                      Explore <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & Portfolio"
          intro="A selection of commissions across sculpture, murals, metalwork, CNC and facade art."
        />
        <div className="mt-10 flex flex-wrap gap-3">
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-2 font-display text-2xl text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* new featured project
       */}
       <section className="relative overflow-hidden bg-[#16130f] py-24 lg:py-32">

  {/* Background Decoration */}
  <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full border border-gold/10" />

  <div className="pointer-events-none absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full border border-gold/10" />

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">

    {/* Heading */}
    <Reveal>
      <div className="">

        <p className="text-[0.65rem] tracking-[0.3em] text-gold uppercase">
          Behind Every Creation
        </p>

        <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl ">
          From Raw Material
          <span className="text-gold pl-3">
            To Remarkable Art.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
          Step inside our creative process and watch ideas transform into
          sculptures, architectural elements and artistic installations.
        </p>

      </div>
    </Reveal>


    {/* CREATION PROJECTS */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {creationProjects.map((project, i) => (

        <Reveal key={project.id} delay={i * 80}>

          <CreationVideoCard project={project} />

        </Reveal>

      ))}

    </div>

  </div>

</section>
{/* end project */}

      {/* Process */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-32">
          <SectionHeading eyebrow="How We Work" title="Our Process" />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <Reveal key={s.number} delay={i * 80}>
                <p className="font-display text-4xl text-gold">{s.number}</p>
                <p className="gold-rule mt-4" />
                <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* Materials */}
      {/* <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Materials"
          title="Nine specialities, one workshop"
          align="center"
        />
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
      </section> */}

{/* new material */}
       <section className="bg-black text-white py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-10">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="display text-[2.7rem] leading-none sm:text-6xl lg:text-[5rem]">
              Crafted Across <span className="italic text-gold">Materials</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-stone">
              Each material is chosen for how it will look on day one — and on day ten thousand.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.name} delay={(i % 5) * 70} className="group relative">
                <div className="zoom-frame relative aspect-square">
                  <img
                    src={m.image}
                    alt={`${m.name} material texture`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-ink/55 transition-colors duration-700 group-hover:bg-ink/25" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="display text-3xl text-bone">{m.name}</p>
                    <p className="eyebrow mt-2 text-[0.55rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      {m.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-y border-border py-14">
        <p className="text-center text-[0.66rem] tracking-[0.28em] text-muted-foreground uppercase">
          Trusted by leading developers &amp; architects
        </p>
       <div className="mt-12">
  {/* Client Grid */}
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {clients.map((client, index) => (
      <div
        key={client.name || index}
        className="
          group relative flex min-h-[170px] flex-col items-center
          justify-center overflow-hidden rounded-2xl
          border border-border/60 bg-background
          px-6 py-6 shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-2
          hover:border-primary/30
          hover:shadow-xl
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute inset-0 opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            bg-gradient-to-br from-primary/5 via-transparent to-primary/10
          "
        />

        {/* Logo */}
        <div
          className="
            relative z-10 flex h-20 w-full items-center justify-center
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <img
            src={client.logo}
            alt={client.name}
            className="
              max-h-16 max-w-[150px]
              object-contain
              transition-all duration-300
              
              group-hover:grayscale-0
              group-hover:opacity-100
            "
          />
        </div>

        {/* Divider */}
        <div className="relative z-10 my-4 h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary/50" />

        {/* Client Name */}
        <p
          className="
            relative z-10 text-center
            font-display text-sm font-medium
            text-foreground/70
            transition-colors duration-300
            group-hover:text-foreground
          "
        >
          {client.name}
        </p>
      </div>
    ))}
  </div>
</div>
      </section>

      {/* Testimonials */}
<section className="relative overflow-hidden border-y border-border bg-secondary py-24">

  {/* Background architectural grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "55px 55px",
      }}
    />
  </div>

  <div className="relative">

    {/* ================= HEADING ================= */}

    <div className="mx-auto mb-14 max-w-[1400px] px-5 sm:px-8">

      <div className="max-w-3xl">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Client Stories
        </p>

        <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
          What our clients{" "}
          <span className="font-serif italic text-gold">
            say.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
          From concept to completion, every creation is built with
          precision, creativity and attention to detail.
        </p>

      </div>

    </div>


    {/* ================= TESTIMONIAL TRAIN ================= */}

    <div className="relative overflow-hidden">

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-secondary to-transparent md:w-40" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-secondary to-transparent md:w-40" />


      {/* TRAIN TRACK */}

      <div className="testimonial-track flex w-max">

        {/* ================= FIRST SET ================= */}

        {testimonials.map((testimonial, index) => (

          <article
            key={`testimonial-first-${index}`}
            className="testimonial-card group relative mx-3 w-[320px] shrink-0 md:w-[390px]"
          >

            <div
              className="
                relative
                min-h-[350px]
                overflow-hidden
                border
                border-border
                bg-background
                p-7
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:border-gold/40
                group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                md:p-8
              "
            >

              {/* Card grid */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>


              {/* Top gold line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />


              {/* Decorative corner */}
              <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden">
                <div className="absolute right-[-35px] top-[-35px] h-24 w-24 rotate-45 border border-gold/20" />
              </div>


              {/* Quote mark */}
              <div className="relative z-10 font-serif text-6xl leading-none text-gold/30">
                “
              </div>


              {/* Rating */}
              <div className="relative z-10 mt-2 flex gap-1">

                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <span
                      key={starIndex}
                      className="text-sm text-gold"
                    >
                      ★
                    </span>
                  )
                )}

              </div>


              {/* Quote */}
              <p className="relative z-10 mt-6 text-[15px] leading-7 text-foreground/80">
                {testimonial.quote}
              </p>


              {/* Client information */}
              <div className="relative z-10 mt-8 flex items-center gap-4">

                {/* Client image */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>


                {/* Client details */}
                <div className="min-w-0">

                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 truncate text-xs uppercase tracking-[0.15em] text-gold">
                    {testimonial.company}
                  </p>

                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {testimonial.project}
                  </p>

                </div>

              </div>


              {/* Number */}
              <div className="absolute bottom-5 right-6 text-[10px] tracking-[0.3em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />

            </div>

          </article>

        ))}


        {/* ================= SECOND SET ================= */}

        {testimonials.map((testimonial, index) => (

          <article
            key={`testimonial-second-${index}`}
            className="testimonial-card group relative mx-3 w-[320px] shrink-0 md:w-[390px]"
          >

            <div
              className="
                relative
                min-h-[350px]
                overflow-hidden
                border
                border-border
                bg-background
                p-7
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:border-gold/40
                group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                md:p-8
              "
            >

              {/* Card grid */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>


              {/* Top gold line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />


              {/* Decorative corner */}
              <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden">
                <div className="absolute right-[-35px] top-[-35px] h-24 w-24 rotate-45 border border-gold/20" />
              </div>


              {/* Quote mark */}
              <div className="relative z-10 font-serif text-6xl leading-none text-gold/30">
                “
              </div>


              {/* Rating */}
              <div className="relative z-10 mt-2 flex gap-1">

                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <span
                      key={starIndex}
                      className="text-sm text-gold"
                    >
                      ★
                    </span>
                  )
                )}

              </div>


              {/* Quote */}
              <p className="relative z-10 mt-6 text-[15px] leading-7 text-foreground/80">
                {testimonial.quote}
              </p>


              {/* Client information */}
              <div className="relative z-10 mt-8 flex items-center gap-4">

                {/* Client image */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>


                {/* Client details */}
                <div className="min-w-0">

                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 truncate text-xs uppercase tracking-[0.15em] text-gold">
                    {testimonial.company}
                  </p>

                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {testimonial.project}
                  </p>

                </div>

              </div>


              {/* Number */}
              <div className="absolute bottom-5 right-6 text-[10px] tracking-[0.3em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />

            </div>

          </article>

        ))}

      </div>

    </div>


    {/* ================= BOTTOM LINE ================= */}

    <div className="mx-auto mt-10 flex max-w-[1400px] items-center justify-between border-t border-border px-5 pt-5 sm:px-8">

      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Siddhi On Creation
      </span>

      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Client Experiences
      </span>

    </div>

  </div>

</section>
      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={images.ctaWorkshop}
          alt="Workshop at dusk"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Let's Create</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-ink-foreground">
              Have a space that deserves something made for it?
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-gold px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink uppercase"
            >
              Start a Conversation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


function CreationVideoCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    video: string;
    description: string;
  };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;

    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* IMAGE / VIDEO */}
      <div className="relative aspect-[4/5] overflow-hidden bg-black">

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 size-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
        />

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

        {/* Watch Creation */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">

          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>

          <span className="text-[0.6rem] tracking-[0.18em] text-white uppercase">
            Watch Creation
          </span>

        </div>

      </div>


      {/* CONTENT */}

      <p className="mt-5 text-[0.62rem] tracking-[0.22em] text-gold uppercase">
        {project.category}
      </p>

      <h3 className="mt-2 font-display text-2xl text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/55">
        {project.description}
      </p>

    </div>
  );
}