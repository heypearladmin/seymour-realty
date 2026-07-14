import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllFaqs, getPostBySlug, slugifyFaq } from "@/lib/blog-data";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo/schema";

interface Props {
  params: Promise<{ postSlug: string; faqSlug: string }>;
}

export async function generateStaticParams() {
  return getAllFaqs().map((f) => ({
    postSlug: f.postSlug,
    faqSlug: f.faqSlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postSlug, faqSlug } = await params;
  const faq = getAllFaqs().find(
    (f) => f.postSlug === postSlug && f.faqSlug === faqSlug
  );
  if (!faq) return {};
  return {
    title: faq.question,
    description: faq.answer.slice(0, 155),
    alternates: { canonical: `/faq/${postSlug}/${faqSlug}` },
    openGraph: {
      title: faq.question,
      description: faq.answer.slice(0, 155),
      type: "article",
    },
    twitter: {
      card: "summary",
      title: faq.question,
      description: faq.answer.slice(0, 155),
    },
  };
}

export default async function FaqAnswerPage({ params }: Props) {
  const { postSlug, faqSlug } = await params;

  const allFaqs = getAllFaqs();
  const faq = allFaqs.find(
    (f) => f.postSlug === postSlug && f.faqSlug === faqSlug
  );
  if (!faq) notFound();

  const post = getPostBySlug(postSlug);
  const pageUrl = `${site.company.website}/faq/${postSlug}/${faqSlug}`;

  // Related FAQs from the same article
  const relatedFaqs = allFaqs
    .filter((f) => f.postSlug === postSlug && f.faqSlug !== faqSlug)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        schema={faqPageSchema([{ question: faq.question, answer: faq.answer }])}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "Journal", url: `${site.company.website}/blog` },
          { name: faq.postTitle, url: `${site.company.website}/blog/${postSlug}` },
          { name: faq.question, url: pageUrl },
        ])}
      />

      <main>
        {/* Header */}
        <section className="pt-36 md:pt-44 pb-16 bg-softwhite">
          <div className="max-w-prose mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.72rem] tracking-wider uppercase text-charcoal/50">
                <li>
                  <Link href="/blog" className="hover:text-terracotta transition-colors">
                    Journal
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link
                    href={`/blog/${postSlug}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {faq.postTitle}
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-charcoal/35 truncate max-w-[20ch]">FAQ</li>
              </ol>
            </nav>

            <p className="eyebrow text-terracotta mb-4">Frequently Asked</p>
            <h1 className="font-display text-3xl md:text-5xl text-navy leading-[1.08] tracking-tight">
              {faq.question}
            </h1>
          </div>
        </section>

        {/* Answer */}
        <section className="py-16 md:py-20">
          <div className="max-w-prose mx-auto px-6">
            <div className="border-l-4 border-terracotta pl-6 mb-12">
              <p className="text-charcoal/90 leading-relaxed text-[1.125rem]">
                {faq.answer}
              </p>
            </div>

            <div className="border-t border-charcoal/12 pt-8">
              <p className="text-[0.875rem] text-charcoal/60 leading-relaxed">
                This answer was written by{" "}
                <strong className="text-charcoal/80">{site.agent.fullName}</strong>,
                Austin-native Realtor and founder of {site.company.name}. TX
                License #{site.company.trec}.
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs from this article */}
        {relatedFaqs.length > 0 && (
          <section className="py-12 md:py-16 bg-beige/30">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-charcoal/60 mb-6">More from this article</p>
              <div className="space-y-0">
                {relatedFaqs.map((f) => (
                  <Link
                    key={f.faqSlug}
                    href={`/faq/${f.postSlug}/${f.faqSlug}`}
                    className="group flex items-start justify-between gap-4 border-t border-charcoal/12 py-5 hover:border-terracotta/40 transition-colors duration-200"
                  >
                    <span className="font-display text-[1.0625rem] text-navy leading-snug group-hover:text-terracotta transition-colors duration-200">
                      {f.question}
                    </span>
                    <span className="shrink-0 mt-0.5 text-[0.72rem] tracking-wider uppercase text-terracotta whitespace-nowrap">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-charcoal/12 pt-6">
                <Link
                  href={`/blog/${postSlug}`}
                  className="text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta/40 hover:border-terracotta transition-colors duration-200 pb-0.5"
                >
                  ← Read the full article
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-20 bg-navy text-softwhite">
          <div className="max-w-prose mx-auto px-6 text-center">
            <p className="eyebrow text-softwhite/50 mb-4">When you&apos;re ready</p>
            <h2 className="font-display text-2xl md:text-3xl leading-snug tracking-tight mb-6">
              Questions are the beginning of a better plan.
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-terracotta text-softwhite px-8 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-softwhite hover:text-navy transition-colors duration-300"
            >
              Talk to Laurel
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
