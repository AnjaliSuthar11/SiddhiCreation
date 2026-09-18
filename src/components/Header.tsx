import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { company } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink-foreground/10 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span>
              <img src="/favicon.ico" alt="Siddhi On Creation" className="w-5" />
            </span>

            <span className="font-display text-xl tracking-wide text-ink-foreground sm:text-2xl">
              Siddhi <span className="text-gold">On</span> Creation
            </span>
          </div>

          <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-ink-foreground/50 uppercase">
            &amp; {company.sister}
          </span>

          
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-[0.8rem] tracking-[0.14em] text-ink-foreground/75 uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden border border-gold/60 px-6 py-3 text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-ink sm:inline-block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-ink-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-ink-foreground/10 bg-ink/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="border-b border-ink-foreground/10 py-4 font-display text-2xl text-ink-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-gold px-6 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink uppercase"
            >
              Get a Quote
            </Link>
            <a
              href={company.phoneHref}
              className="border border-ink-foreground/25 px-6 py-4 text-center text-[0.72rem] tracking-[0.2em] text-ink-foreground uppercase"
            >
              Call {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
