import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { company, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="surface-ink border-t border-ink-foreground/10">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl text-ink-foreground">
            Siddhi <span className="text-gold">On</span> Creation
          </p>
          <p className="mt-1 text-[0.6rem] tracking-[0.3em] text-ink-foreground/50 uppercase">
            &amp; {company.sister}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
            Creating customised sculptures, murals, decorative elements and
            architectural artworks for extraordinary spaces — for over 30 years.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { href: company.instagram, Icon: Instagram, label: "Instagram" },
              { href: company.facebook, Icon: Facebook, label: "Facebook" },
              { href: company.linkedin, Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-10 place-items-center border border-ink-foreground/20 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold-soft/70">Quick Links</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/65">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-soft/70">Services</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/65">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-soft/70">Contact</p>
          <ul className="mt-6 space-y-4 text-sm text-ink-foreground/65">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={company.phoneHref} className="hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-[1400px] text-xs text-ink-foreground/40">
          © {new Date().getFullYear()} Siddhi On Creation &amp; Mrudula Creation. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
