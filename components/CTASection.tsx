import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: "navy" | "beige" | "softwhite";
}

export default function CTASection({
  eyebrow = "Begin a Conversation",
  title,
  body,
  primaryCta,
  secondaryCta,
  background = "navy",
}: CTASectionProps) {
  const bg =
    background === "navy"
      ? "bg-navy text-softwhite"
      : background === "beige"
      ? "bg-beige/40 text-charcoal"
      : "bg-softwhite text-charcoal";

  const isDark = background === "navy";

  return (
    <section className={`${bg} py-24 md:py-32`}>
      <div className="max-w-editorial mx-auto px-6 lg:px-10 text-center">
        <p
          className={`eyebrow ${
            isDark ? "text-softwhite/60" : "text-charcoal/55"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display text-4xl md:text-6xl mt-5 leading-[1.05] tracking-tight max-w-3xl mx-auto ${
            isDark ? "text-softwhite" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {body && (
          <p
            className={`mt-7 max-w-xl mx-auto leading-relaxed text-lg ${
              isDark ? "text-softwhite/80" : "text-charcoal/80"
            }`}
          >
            {body}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`inline-block px-7 py-3.5 text-[0.78rem] tracking-wider uppercase transition-colors duration-300 ${
                  isDark
                    ? "bg-terracotta text-softwhite hover:bg-softwhite hover:text-navy"
                    : "bg-navy text-softwhite hover:bg-terracotta"
                }`}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-block border px-7 py-3.5 text-[0.78rem] tracking-wider uppercase transition-colors duration-300 ${
                  isDark
                    ? "border-softwhite/40 text-softwhite hover:bg-softwhite hover:text-navy"
                    : "border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-softwhite"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
