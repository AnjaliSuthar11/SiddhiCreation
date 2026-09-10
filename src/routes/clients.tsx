import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { clients, testimonials } from "@/data/site";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Testimonials — Siddhi On Creation" },
      {
        name: "description",
        content:
          "Developers, architects, hospitality groups and homeowners who trust Siddhi On Creation for custom art and architectural work.",
      },
      { property: "og:title", content: "Clients & Testimonials" },
      {
        property: "og:description",
        content:
          "What developers, architects and homeowners say about working with Siddhi On Creation.",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ================= ANIMATION DIRECTION =================
  const [direction, setDirection] = useState(1);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // ================= TESTIMONIAL INDEXES =================

  const previousIndex =
    (activeIndex - 1 + testimonials.length) %
    testimonials.length;

  const nextIndex =
    (activeIndex + 1) %
    testimonials.length;

  const previousTestimonial = testimonials[previousIndex]!;
  const activeTestimonial = testimonials[activeIndex]!;
  const nextTestimonial = testimonials[nextIndex]!;

  // ================= SMOOTH NEXT =================

  const handleNext = () => {
    setDirection(1);

    setActiveIndex((prev) => {
      return (prev + 1) % testimonials.length;
    });
  };

  // ================= SMOOTH PREVIOUS =================

  const handlePrevious = () => {
    setDirection(-1);

    setActiveIndex((prev) => {
      return (
        (prev - 1 + testimonials.length) %
        testimonials.length
      );
    });
  };

  // ================= VISIBLE CARDS =================
  // These are the 3 cards currently visible.
  // Keeping their actual IDs allows Framer Motion
  // to move the SAME card from one position to another.

  const visibleTestimonials = [
    {
      index: previousIndex,
      testimonial: previousTestimonial,
      position: "left",
    },
    {
      index: activeIndex,
      testimonial: activeTestimonial,
      position: "center",
    },
    {
      index: nextIndex,
      testimonial: nextTestimonial,
      position: "right",
    },
  ];

  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Clients</p>

            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              Long relationships,{" "}
              <span className="text-gold">repeat work</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Trusted By"
          title="Developers, architects and design studios"
        />

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

      {/* ================= TESTIMONIALS ================= */}

      <section className="overflow-hidden border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">

          {/* ================= HEADING + NAVIGATION ================= */}

          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Testimonials"
              title="In their words"
            />

            <div className="flex gap-2">

              {/* PREVIOUS BUTTON */}

              <button
                onClick={handlePrevious}
                className="flex h-11 w-11 items-center justify-center border border-border bg-background transition-all duration-300 hover:bg-foreground hover:text-background"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* NEXT BUTTON */}

              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center border border-border bg-background transition-all duration-300 hover:bg-foreground hover:text-background"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>

            </div>
          </div>


          {/* ===================================================== */}
          {/* SMOOTH TRAIN TESTIMONIAL CAROUSEL */}
          {/* ===================================================== */}

          <div className="mt-12">

            {/* Desktop Layout */}

            <div className="hidden min-h-[400px] items-center gap-4 md:grid md:grid-cols-[0.8fr_1.4fr_0.8fr] lg:gap-6">

              <AnimatePresence initial={false} mode="popLayout">

                {visibleTestimonials.map(
                  ({ index, testimonial, position }) => {

                    const isCenter = position === "center";

                    return (
                      <motion.div
                        key={index}
                        layout
                        initial={{
                          opacity: 0,
                          x:
                            position === "left"
                              ? direction === -1
                                ? -120
                                : -60
                              : position === "right"
                                ? direction === 1
                                  ? 120
                                  : 60
                                : direction === 1
                                  ? 100
                                  : -100,
                          scale: 0.92,
                        }}
                        animate={{
                          opacity: isCenter ? 1 : 0.7,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x:
                            direction === 1
                              ? -160
                              : 160,
                          scale: 0.9,
                        }}
                        transition={{
                          layout: {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.45,
                          },
                          x: {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          scale: {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        className={`group relative flex flex-col overflow-hidden border border-border bg-background ${
                          isCenter
                            ? "z-10 h-[380px] p-7 shadow-lg"
                            : "h-[300px] p-5"
                        }`}
                      >

                        {/* ================= GRID BACKGROUND ================= */}

                        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">

                          <div
                            className={`h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] ${
                              isCenter
                                ? "bg-[size:32px_32px]"
                                : "bg-[size:28px_28px]"
                            }`}
                          />

                        </div>


                        {/* ================= CARD CONTENT ================= */}

                        <div className="relative z-10 flex h-full flex-col">

                          {/* ================= HEADER ================= */}

                          <div className="flex items-start justify-between">

                            <span
                              className={
                                isCenter
                                  ? "text-xs uppercase tracking-[0.25em] text-muted-foreground"
                                  : "text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                              }
                            >
                              {position === "left"
                                ? "Previous"
                                : position === "center"
                                  ? "Client Voice"
                                  : "Up Next"}
                            </span>


                            <span
                              className={
                                isCenter
                                  ? "font-display text-5xl leading-none text-foreground/10"
                                  : "font-display text-3xl leading-none text-foreground/10"
                              }
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                          </div>


                          {/* ================= QUOTE ================= */}

                          <div
                            className={
                              isCenter
                                ? "relative mt-7 flex flex-1 items-center"
                                : "relative mt-5 flex-1"
                            }
                          >

                            <span
                              className={
                                isCenter
                                  ? "absolute -left-2 top-0 font-serif text-8xl leading-none text-foreground/10"
                                  : "absolute -left-1 -top-6 font-serif text-6xl leading-none text-foreground/10"
                              }
                            >
                              “
                            </span>


                            <p
                              className={
                                isCenter
                                  ? "relative pt-8 font-display text-lg leading-relaxed text-foreground sm:text-xl"
                                  : "relative pt-5 text-sm leading-relaxed text-foreground"
                              }
                            >
                              {testimonial.quote}
                            </p>

                          </div>


                          {/* ================= PROFILE ================= */}

                          <div
                            className={
                              isCenter
                                ? "border-t border-border pt-5"
                                : "flex items-center gap-3 border-t border-border pt-4"
                            }
                          >

                            {isCenter ? (

                              <div className="flex items-center gap-4">

                                {/* IMAGE */}

                                {testimonial.image ? (

                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                                  />

                                ) : (

                                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg">
                                    {testimonial.name?.charAt(0)}
                                  </div>

                                )}


                                {/* DETAILS */}

                                <div className="min-w-0">

                                  <p className="truncate font-display text-base font-medium text-foreground">
                                    {testimonial.name}
                                  </p>

                                  <p className="truncate text-xs text-muted-foreground">
                                    {testimonial.company}
                                  </p>

                                </div>


                                {/* PROJECT */}

                                {testimonial.project && (

                                  <span className="ml-auto hidden max-w-[130px] truncate text-right text-[10px] uppercase tracking-wider text-muted-foreground sm:block">
                                    {testimonial.project}
                                  </span>

                                )}

                              </div>

                            ) : (

                              <>
                                {/* SMALL IMAGE */}

                                {testimonial.image ? (

                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                                  />

                                ) : (

                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm">
                                    {testimonial.name?.charAt(0)}
                                  </div>

                                )}


                                {/* SMALL DETAILS */}

                                <div className="min-w-0">

                                  <p className="truncate text-sm font-medium text-foreground">
                                    {testimonial.name}
                                  </p>

                                  <p className="truncate text-[10px] text-muted-foreground">
                                    {testimonial.company}
                                  </p>

                                </div>
                              </>

                            )}

                          </div>

                        </div>

                      </motion.div>
                    );
                  }
                )}

              </AnimatePresence>

            </div>


            {/* ================================================= */}
            {/* MOBILE VERSION */}
            {/* ================================================= */}

            <div className="md:hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: direction === 1 ? 60 : -60,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction === 1 ? -60 : 60,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-[380px] flex-col overflow-hidden border border-border bg-background p-6 shadow-lg"
                >

                  {/* GRID */}

                  <div className="pointer-events-none absolute inset-0 opacity-[0.035]">

                    <div className="h-full w-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:28px_28px]" />

                  </div>


                  <div className="relative z-10 flex h-full flex-1 flex-col">

                    {/* HEADER */}

                    <div className="flex items-start justify-between">

                      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Client Voice
                      </span>

                      <span className="font-display text-4xl text-foreground/10">
                        {String(activeIndex + 1).padStart(2, "0")}
                      </span>

                    </div>


                    {/* QUOTE */}

                    <div className="relative mt-8 flex flex-1 items-center">

                      <span className="absolute -left-2 top-0 font-serif text-7xl text-foreground/10">
                        “
                      </span>

                      <p className="relative pt-8 font-display text-lg leading-relaxed text-foreground">
                        {activeTestimonial.quote}
                      </p>

                    </div>


                    {/* PROFILE */}

                    <div className="mt-8 border-t border-border pt-5">

                      <div className="flex items-center gap-4">

                        {activeTestimonial.image ? (

                          <img
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />

                        ) : (

                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                            {activeTestimonial.name?.charAt(0)}
                          </div>

                        )}

                        <div>

                          <p className="font-display text-sm font-medium text-foreground">
                            {activeTestimonial.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {activeTestimonial.company}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>


          {/* ================= INDICATOR ================= */}

          <div className="mt-8 flex justify-center gap-2">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => {

                  // Set direction based on where the user is going
                  setDirection(
                    index > activeIndex ? 1 : -1
                  );

                  setActiveIndex(index);
                }}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-foreground"
                    : "w-4 bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />

            ))}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8">

        <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-tight text-foreground">
          Join the list of spaces we've transformed.
        </h2>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 bg-ink px-9 py-4 text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase"
        >
          Talk To Us <ArrowRight className="size-4" />
        </Link>

      </section>

    </div>
  );
}