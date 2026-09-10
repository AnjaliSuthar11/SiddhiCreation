import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projects, services } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Custom Art & Architectural Work" },
      {
        name: "description",
        content:
          "A visual gallery of sculptures, murals, decorative metalwork, CNC panels, FRP features and landscape elements crafted by Siddhi On Creation.",
      },
      { property: "og:title", content: "Gallery — Siddhi On Creation" },
      {
        property: "og:description",
        content: "Photographs of completed custom art and architectural installations.",
      },
    ],
  }),
  component: GalleryPage,
});

const items = [
  ...projects.map((p) => ({ src: p.image, caption: p.name })),
  ...projects.flatMap((p) =>
    p.gallery.map((g, i) => ({ src: g, caption: `${p.name} — detail ${i + 1}` })),
  ),
  ...services.map((s) => ({ src: s.image, caption: s.title })),
].filter(
  (item, index, all) => all.findIndex((x) => x.src === item.src) === index,
);

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <section className="surface-ink pt-36 pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-soft/80">Gallery</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] text-ink-foreground">
              A closer look at the <span className="text-gold">craft</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="mt-3 block text-left text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 p-2 text-ink-foreground"
          >
            <X className="size-7" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[88vh]">
            <img
              src={items[active]!.src}
              alt={items[active]!.caption}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.16em] text-ink-foreground/70 uppercase">
              {items[active]!.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
