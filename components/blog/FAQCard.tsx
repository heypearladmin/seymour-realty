import Link from "next/link";

interface FAQCardProps {
  question: string;
  faqSlug: string;
  postSlug: string;
}

export default function FAQCard({ question, faqSlug, postSlug }: FAQCardProps) {
  return (
    <Link
      href={`/faq/${postSlug}/${faqSlug}`}
      className="group flex items-start justify-between gap-4 border-t border-charcoal/12 pt-5 pb-1 hover:border-terracotta/40 transition-colors duration-200"
    >
      <span className="font-display text-[1.0625rem] text-navy leading-snug group-hover:text-terracotta transition-colors duration-200">
        {question}
      </span>
      <span className="shrink-0 mt-0.5 text-[0.72rem] tracking-wider uppercase text-terracotta border-b border-terracotta/40 group-hover:border-terracotta transition-colors duration-200 whitespace-nowrap">
        Read answer →
      </span>
    </Link>
  );
}
