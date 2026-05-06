interface TestimonialCardProps {
  quote: string;
  attribution: string;
  context?: string;
}

/**
 * TestimonialCard renders a pull-quote / editorial quotation block.
 *
 * Per the brief, no fake testimonials are invented. This component is provided
 * for future use when real, attributable testimonials are added — or as an
 * editorial pull-quote treatment within long-form content.
 */
export default function TestimonialCard({
  quote,
  attribution,
  context,
}: TestimonialCardProps) {
  return (
    <figure className="border-l border-terracotta pl-7 py-2">
      <blockquote>
        <p className="font-display text-2xl md:text-3xl text-navy leading-snug tracking-tight">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-5 text-[0.72rem] tracking-editorial uppercase text-charcoal/65">
        {attribution}
        {context && <span className="text-charcoal/45"> — {context}</span>}
      </figcaption>
    </figure>
  );
}
