import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "center";
  height?: "tall" | "standard" | "compact";
}

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  align = "left",
  height = "tall",
}: HeroProps) {
  const heightClass =
    height === "tall"
      ? "min-h-[92vh]"
      : height === "standard"
      ? "min-h-[70vh]"
      : "min-h-[52vh]";

  return (
    <section
      className={`relative w-full ${heightClass} flex items-end overflow-hidden`}
      aria-label={headline}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/25 to-navy/70"
        aria-hidden="true"
      />

      <div
        className={`relative max-w-editorial mx-auto w-full px-6 lg:px-10 pb-20 md:pb-28 ${
          align === "center" ? "text-center mx-auto" : ""
        }`}
      >
        <div className={align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          {eyebrow && (
            <p className="eyebrow text-softwhite/85 mb-6">{eyebrow}</p>
          )}
          <h1 className="font-display text-softwhite text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-7 max-w-xl text-softwhite/85 text-lg leading-relaxed">
              {subheadline}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-block bg-terracotta text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-softwhite hover:text-navy transition-colors duration-300"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-block border border-softwhite/60 text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-softwhite hover:text-navy transition-colors duration-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
