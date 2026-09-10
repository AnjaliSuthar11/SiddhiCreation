import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "dark" && "text-gold-soft/80")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
