import Link from "next/link";
import CTASection from "@/components/CTASection";
import { getAllFaqs } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

export const metadata = {
  title: "Austin Real Estate FAQ — Every Question, Answered",
  description:
    "Direct answers to the most common questions about buying, selling, and relocating to Austin — organized by topic, from Realtor Laurel Seymour of Seymour Realty Group.",
  alternates: { canonical: "/faq" },
};

export default function FaqIndexPage() {
  const allFaqs = getAllFaqs();

  const categories = Array.from(new Set(allFaqs.map((f) => f.postCategory)));

  const grouped = categories.map((category) => ({
    category,
    faqs: allFaqs.filter((f) => f.postCategory === category),
  }));

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "FAQ", url: `${site.company.website}/faq` },
        ])}
      />
      <JsonLd
        schema={faqPageSchema(
          allFaqs.slice(0, 20).map((f) => ({ question: f.question, answer: f.answer }))
        )}
      />

      <header className="pt-40 pb-16 md:pt-48 md:pb-24 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/65 mb-6">Answers</p>
          <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.04] tracking-tight max-w-4xl">
            Every question, <span className="italic">answered directly.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-charcoal/85 text-lg leading-relaxed">
            {allFaqs.length} questions on buying, selling, and relocating to
            Austin — pulled straight from the field notes and organized by
            topic. No fluff, no funnel — just the answer.
          </p>
        </div>
      </header>

      <section className="pb-24 md:pb-32">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 space-y-20">
          {grouped.map(({ category, faqs }) => (
            <div key={category}>
              <div className="flex items-baseline justify-between mb-8 border-b border-charcoal/10 pb-4">
                <h2 className="font-display text-2xl md:text-3xl text-navy tracking-tight">
                  {category}
                </h2>
                <span className="text-[0.72rem] tracking-wider uppercase text-charcoal/45">
                  {faqs.length} question{faqs.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {faqs.map((f) => (
                  <Link
                    key={`${f.postSlug}-${f.faqSlug}`}
                    href={`/faq/${f.postSlug}/${f.faqSlug}`}
                    className="group block border border-charcoal/12 bg-softwhite px-5 py-4 hover:border-terracotta/40 hover:bg-beige/20 transition-all duration-200"
                  >
                    <p className="font-display text-[1.0625rem] text-navy leading-snug group-hover:text-terracotta transition-colors duration-200 mb-2">
                      {f.question}
                    </p>
                    <span className="text-[0.68rem] tracking-wider uppercase text-terracotta">
                      Read answer →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Still Have a Question?"
        title="If it's not here, it's worth a real conversation."
        body="Every Austin move raises questions that don't fit a FAQ page. Reach out directly and let's talk through yours."
        primaryCta={{ label: "Talk With Laurel", href: "/contact" }}
        secondaryCta={{ label: "Read the Blog", href: "/blog" }}
        background="navy"
      />
    </>
  );
}
