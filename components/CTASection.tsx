import Image from "next/image";
import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  background?: "navy" | "beige" | "softwhite";
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export default function CTASection({
  eyebrow = "Begin a Conversation",
  title,
  body,
  primaryCta,
  secondaryCta,
  background = "navy",
  backgroundImage,
  backgroundImageAlt = "",
}: CTASectionProps) {
  const hasBgImage = Boolean(backgroundImage);

  // When a background image is provided, treat the section as a dark editorial
  // panel (image + navy scrim) regardless of the `background` prop.
  const isDark = hasBgImage || background === "navy";

  const bg = hasBgImage
    ? "text-softwhite"
    : background === "navy"
    ? "bg-navy text-softwhite"
    : background === "beige"
    ? "bg-beige/40 text-charcoal"
    : "bg-softwhite text-charcoal";

  return (
    <section className={`relative overflow-hidden ${bg} py-24 md:py-32`}>
      {hasBgImage && (
        <>
          <Image
            src={backgroundImage as string}
            alt={backgroundImageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy/85"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative max-w-editorial mx-auto px-6 lg:px-10 text-center">
        <p
          className={`eyebrow ${
            isDark ? "text-softwhite/65" : "text-charcoal/55"
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
              isDark ? "text-softwhite/85" : "text-charcoal/80"
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
                    ? "border-softwhite/50 text-softwhite hover:bg-softwhite hover:text-navy"
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
