import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllFaqs, getPostBySlug, getRelatedPosts, slugifyFaq } from "@/lib/blog-data";
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
  const description = (faq.answer).slice(0, 155);
  return {
    title: faq.question,
    description,
    alternates: { canonical: `/faq/${postSlug}/${faqSlug}` },
    openGraph: {
      title: faq.question,
      description,
      type: "article",
      publishedTime: faq.postPublishedAt,
      authors: [site.agent.fullName],
      images: [{ url: faq.postImage, alt: faq.postImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: faq.question,
      description,
      images: [faq.postImage],
    },
  };
}

// Render expanded content paragraphs with heading detection
function renderExpandedParagraph(p: string, key: number) {
  if (p.includes("\n- ") || p.startsWith("- ")) {
    const items = p
      .split("\n")
      .map((line) => line.replace(/^-\s*/, "").trim())
      .filter(Boolean);
    return (
      <ul key={key} className="my-5 space-y-2 pl-0 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-charcoal/85 leading-relaxed">
            <span className="mt-2 shrink-0 w-1.5 h-px bg-terracotta block" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  const trimmed = p.trim();
  if (
    trimmed.length > 0 &&
    trimmed.length <= 80 &&
    !/[.!?,;:]$/.test(trimmed) &&
    !/^[""'"]/.test(trimmed)
  ) {
    return (
      <h2
        key={key}
        className="font-display text-xl md:text-2xl text-navy leading-snug mt-10 mb-4"
      >
        {trimmed}
      </h2>
    );
  }
  return (
    <p key={key} className="text-charcoal/85 leading-[1.85] text-[1.0625rem] mb-5">
      {p}
    </p>
  );
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

  // Related questions: other FAQs from same post
  const relatedQuestions = allFaqs
    .filter((f) => f.postSlug === postSlug && f.faqSlug !== faqSlug)
    .slice(0, 5);

  // Related articles from same category
  const relatedArticles = post ? getRelatedPosts(postSlug, 3) : [];

  const lastUpdated = faq.lastUpdated ?? faq.postPublishedAt;

  return (
    <>
      <JsonLd schema={faqPageSchema([{ question: faq.question, answer: faq.answer }])} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "Journal", url: `${site.company.website}/blog` },
          { name: faq.postTitle, url: `${site.company.website}/blog/${postSlug}` },
          { name: faq.question, url: pageUrl },
        ])}
      />

      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────────── */}
        <header className="pt-36 md:pt-44 pb-14 bg-softwhite">
          <div className="max-w-prose mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.68rem] tracking-wider uppercase text-charcoal/45">
                <li>
                  <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href="/blog" className="hover:text-terracotta transition-colors">Journal</Link>
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
                <li className="text-charcoal/30">Answer</li>
              </ol>
            </nav>

            <p className="eyebrow text-terracotta mb-4">Frequently Asked</p>
            <h1 className="font-display text-3xl md:text-5xl text-navy leading-[1.06] tracking-tight">
              {faq.question}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] tracking-wider uppercase text-charcoal/45">
              <span>{faq.postCategory}</span>
              <span aria-hidden="true">·</span>
              <span>By {site.agent.fullName}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={lastUpdated}>Updated {lastUpdated}</time>
            </div>
          </div>
        </header>

        {/* ── 2. QUICK ANSWER ──────────────────────────────────────────── */}
        <section aria-label="Quick answer" className="bg-softwhite pb-10">
          <div className="max-w-prose mx-auto px-6">
            <div className="border-l-4 border-terracotta bg-beige/25 rounded-r px-6 py-5">
              <p className="eyebrow text-terracotta mb-2">Quick Answer</p>
              <p className="text-charcoal/90 leading-relaxed text-[1.0625rem]">
                {faq.answer}
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. KEY TAKEAWAYS ─────────────────────────────────────────── */}
        {faq.keyTakeaways && faq.keyTakeaways.length > 0 && (
          <section aria-labelledby="takeaways-heading" className="py-10 bg-softwhite border-t border-charcoal/8">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-charcoal/55 mb-5" id="takeaways-heading">
                Key Takeaways
              </p>
              <ul className="space-y-3">
                {faq.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="#C66B3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-charcoal/85 leading-relaxed text-[1rem]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── 4. EXPANDED ARTICLE CONTENT ──────────────────────────────── */}
        {faq.expandedContent && faq.expandedContent.length > 0 && (
          <section className="py-14 md:py-20 border-t border-charcoal/8">
            <div className="max-w-prose mx-auto px-6">
              {faq.expandedContent.map((p, i) => renderExpandedParagraph(p, i))}
            </div>
          </section>
        )}

        {/* ── 5. COMPARISON TABLE ──────────────────────────────────────── */}
        {faq.comparisonTable && (
          <section aria-labelledby="comparison-heading" className="py-12 md:py-16 bg-beige/20 border-t border-charcoal/8">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-charcoal/55 mb-5" id="comparison-heading">Comparison</p>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[480px] border-collapse text-[0.9375rem]">
                  <thead>
                    <tr>
                      {faq.comparisonTable.headers.map((h, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="text-left py-3 px-4 font-sans font-medium text-[0.72rem] tracking-wider uppercase text-charcoal/55 border-b border-charcoal/15 bg-beige/30"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {faq.comparisonTable.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className={ri % 2 === 0 ? "bg-softwhite" : "bg-beige/10"}
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="py-3.5 px-4 text-charcoal/80 leading-relaxed border-b border-charcoal/8"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ── 6. AUTHOR + LAST UPDATED ─────────────────────────────────── */}
        <section aria-label="About the author" className="py-12 md:py-16 border-t border-charcoal/8">
          <div className="max-w-prose mx-auto px-6">
            <div className="flex items-start gap-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={site.agent.headshot}
                  alt={site.agent.headshotAlt}
                  fill
                  sizes="56px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[0.84rem] font-medium text-navy leading-tight">
                  {site.agent.fullName}
                </p>
                <p className="text-[0.76rem] text-charcoal/55 mt-0.5">
                  Austin Realtor · TX License #{site.company.trec} ·{" "}
                  <Link href="/about" className="hover:text-terracotta transition-colors underline underline-offset-2">
                    About Laurel
                  </Link>
                </p>
                <p className="text-[0.76rem] text-charcoal/45 mt-2">
                  Last Updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. RELATED QUESTIONS ─────────────────────────────────────── */}
        {relatedQuestions.length > 0 && (
          <section aria-labelledby="related-q-heading" className="py-14 md:py-20 bg-beige/20 border-t border-charcoal/8">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-charcoal/55 mb-3" id="related-q-heading">
                Related Questions
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-navy tracking-tight mb-8">
                More people also ask
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedQuestions.map((f) => (
                  <Link
                    key={f.faqSlug}
                    href={`/faq/${f.postSlug}/${f.faqSlug}`}
                    className="group block border border-charcoal/12 bg-softwhite px-5 py-4 hover:border-terracotta/40 hover:bg-beige/20 transition-all duration-200"
                  >
                    <p className="font-display text-[1rem] text-navy leading-snug group-hover:text-terracotta transition-colors duration-200 mb-2">
                      {f.question}
                    </p>
                    <span className="text-[0.68rem] tracking-wider uppercase text-terracotta">
                      Read answer →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-charcoal/10 pt-6">
                <Link
                  href={`/blog/${postSlug}`}
                  className="text-[0.76rem] tracking-wider uppercase text-charcoal/55 hover:text-terracotta transition-colors duration-200"
                >
                  ← Back to full article
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 8. SOURCES ───────────────────────────────────────────────── */}
        {faq.sources && faq.sources.length > 0 && (
          <section aria-labelledby="sources-heading" className="py-10 md:py-14 border-t border-charcoal/8">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-charcoal/55 mb-5" id="sources-heading">Sources</p>
              <ul className="space-y-2">
                {faq.sources.map((source, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.875rem]">
                    <span className="text-charcoal/35 shrink-0 mt-0.5">•</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy/75 hover:text-terracotta underline underline-offset-2 transition-colors duration-200"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── 9. RELATED ARTICLES ──────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section aria-labelledby="related-articles-heading" className="py-14 md:py-20 bg-softwhite border-t border-charcoal/8">
            <div className="max-w-editorial mx-auto px-6 lg:px-10">
              <p className="eyebrow text-charcoal/55 mb-3" id="related-articles-heading">
                Continue reading
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-navy tracking-tight mb-10">
                Related articles from the journal
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {relatedArticles.map((article) => (
                  <BlogCard key={article.slug} post={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 10. CTA (single, subtle) ─────────────────────────────────── */}
        <section aria-label="Contact" className="py-14 md:py-20 bg-navy text-softwhite">
          <div className="max-w-prose mx-auto px-6 text-center">
            <p className="eyebrow text-softwhite/40 mb-4">When you&apos;re ready</p>
            <h2 className="font-display text-2xl md:text-3xl leading-snug tracking-tight mb-3">
              Need help with your Austin move?
            </h2>
            <p className="text-softwhite/60 text-[0.9375rem] mb-8 max-w-md mx-auto">
              Reach Laurel directly for a focused, no-pressure conversation about
              buying or selling in Austin.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-softwhite/30 px-8 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-softwhite hover:text-navy transition-colors duration-300"
            >
              Talk to Laurel
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
