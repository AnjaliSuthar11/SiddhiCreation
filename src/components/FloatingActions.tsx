import { MessageCircle, Phone } from "lucide-react";

import { company, whatsappLink } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={company.phoneHref}
        aria-label="Call Siddhi On Creation"
        className="grid size-12 place-items-center rounded-full bg-ink/90 text-ink-foreground shadow-elegant backdrop-blur transition-transform hover:scale-105 sm:hidden"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#1faa59] px-4 py-3.5 text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
      >
        <MessageCircle className="size-5" />
        <span className="hidden text-[0.72rem] tracking-[0.18em] uppercase sm:inline">
          Discuss Your Project
        </span>
      </a>
    </div>
  );
}
