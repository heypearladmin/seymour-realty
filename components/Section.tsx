import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  background?: "softwhite" | "beige" | "navy" | "transparent";
  padding?: "standard" | "compact" | "spacious";
  align?: "left" | "center";
  id?: string;
}

export default function Section({
  eyebrow,
  title,
  intro,
  children,
  background = "softwhite",
  padding = "standard",
  align = "left",
  id,
}: SectionProps) {
  const bg =
    background === "beige"
      ? "bg-beige/40"
      : background === "navy"
      ? "bg-navy text-softwhite"
      : background === "transparent"
      ? ""
      : "bg-softwhite";

  const pad =
    padding === "compact"
      ? "py-16 md:py-20"
      : padding === "spacious"
      ? "py-28 md:py-40"
      : "py-20 md:py-28";

  const alignClasses =
    align === "center" ? "text-center mx-auto" : "";

  return (
    <section id={id} className={`${bg} ${pad}`}>
      <div className={`max-w-editorial mx-auto px-6 lg:px-10 ${alignClasses}`}>
        {(eyebrow || title || intro) && (
          <header className={`mb-14 md:mb-20 ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
            {eyebrow && (
              <p
                className={`eyebrow mb-5 ${
                  background === "navy" ? "text-softwhite/60" : ""
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`font-display text-4xl md:text-5xl leading-[1.08] tracking-tight ${
                  background === "navy" ? "text-softwhite" : "text-navy"
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-6 text-lg leading-relaxed ${
                  background === "navy"
                    ? "text-softwhite/80"
                    : "text-charcoal/85"
                }`}
              >
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
