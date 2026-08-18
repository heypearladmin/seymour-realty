import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import QuickAnswer from "@/components/blog/QuickAnswer";
import TableOfContents from "@/components/blog/TableOfContents";
import FAQCard from "@/components/blog/FAQCard";
import { blogPosts, getPostBySlug, getRelatedPosts, slugifyFaq } from "@/lib/blog-data";
import { extractTocItems, slugify } from "@/lib/toc";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, speakableSchema } from "@/lib/seo/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 3);
  return cut.slice(0, cut.lastIndexOf(" ")) + "...";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const pageUrl = `${site.company.website}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [site.agent.fullName],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: truncate(post.excerpt, 125),
      images: [post.image],
    },
  };
}

function renderParagraph(p: string, key: number) {
  if (p.includes("\n- ") || p.startsWith("- ")) {
    const items = p
      .split("\n")
      .map((line) => line.replace(/^-\s*/, "").trim())
      .filter(Boolean);
    return (
      <ul key={key}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  // Short, non-punctuated strings are section headings
  const trimmed = p.trim();
  if (
    trimmed.length > 0 &&
    trimmed.length <= 80 &&
    !/[.!?,;:]$/.test(trimmed) &&
    !/^[""'"]/.test(trimmed)
  ) {
    const id = slugify(trimmed);
    return (
      <h2 key={key} id={id} className="scroll-mt-24">
        {trimmed}
      </h2>
    );
  }

  return <p key={key}>{p}</p>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 4);
  const pageUrl = `${site.company.website}/blog/${post.slug}`;
  const tocItems = extractTocItems(post.content);
  const quickAnswer = post.quickAnswer ?? post.excerpt;

  return (
    <>
      {/* Structured data */}
      <JsonLd schema={blogPostingSchema({ title: post.title, description: post.excerpt, url: pageUrl, image: post.image, datePublished: post.publishedAt })} />
      <JsonLd schema={breadcrumbSchema(
        post.pillar
          ? [
              { name: "Home", url: site.company.website },
              { name: "Services", url: `${site.company.website}/services/${post.pillar}` },
              { name: post.pillar === "buying" ? "Buying" : "Selling", url: `${site.company.website}/services/${post.pillar}` },
              { name: post.title, url: pageUrl },
            ]
          : [
              { name: "Home", url: site.company.website },
              { name: "Blog", url: `${site.company.website}/blog` },
              { name: post.title, url: pageUrl },
            ]
      )} />
      <JsonLd schema={speakableSchema(pageUrl, ["h1", "h2", ".quick-answer", ".blog-content p"])} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd schema={faqPageSchema(post.faqs)} />
      )}

      <main>
        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <header className="pt-32 md:pt-40 bg-softwhite">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.68rem] tracking-wider uppercase text-charcoal/45">
                <li>
                  <Link href="/" className="hover:text-terracotta transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                {post.pillar ? (
                  <>
                    <li className="text-charcoal/30">Services</li>
                    <li aria-hidden="true">›</li>
                    <li>
                      <Link
                        href={`/services/${post.pillar}`}
                        className="hover:text-terracotta transition-colors"
                      >
                        {post.pillar === "buying" ? "Buying" : "Selling"}
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link href="/blog" className="hover:text-terracotta transition-colors">
                      Blog
                    </Link>
                  </li>
                )}
                <li aria-hidden="true">›</li>
                <li className="text-charcoal/30 truncate max-w-[24ch]">{post.title}</li>
              </ol>
            </nav>

            <div className="flex items-center justify-center gap-3 flex-wrap mb-5">
              <p className="eyebrow text-terracotta">{post.category}</p>
              {post.pillar && (
                <Link
                  href={`/services/${post.pillar}`}
                  className="text-[0.68rem] tracking-wider uppercase text-navy/70 border border-charcoal/20 px-2.5 py-1 hover:text-terracotta hover:border-terracotta/40 transition-colors duration-200"
                >
                  {post.pillar === "buying" ? "Buying Resource Center" : "Selling Resource Center"} →
                </Link>
              )}
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-navy leading-[1.05] tracking-tight text-center">
              {post.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs tracking-wider uppercase text-charcoal/55">
              <span>By {site.agent.fullName}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mt-14 md:mt-20 max-w-editorial mx-auto px-6 lg:px-10">
            <div className="relative aspect-[16/9] overflow-hidden bg-beige/30">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1240px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* ── 2. ARTICLE BODY (with TOC sidebar on desktop) ─────── */}
        <div className="max-w-editorial mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 xl:gap-20 items-start">

            {/* Main content column */}
            <article>
              {/* Quick Answer */}
              <aside aria-label="Quick answer" className="quick-answer border-l-4 border-terracotta bg-beige/30 px-6 py-5 mb-10">
                <p className="eyebrow text-terracotta mb-2">Quick Answer</p>
                <p className="text-charcoal/90 leading-relaxed text-[1.0625rem]">{quickAnswer}</p>
              </aside>

              {/* TOC — mobile only (inline) */}
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              {/* Body */}
              <div className="blog-content prose-editorial">
                {post.content.map((p, i) => renderParagraph(p, i))}
              </div>
            </article>

            {/* Sticky sidebar — desktop TOC */}
            {tocItems.length > 0 && (
              <aside
                aria-label="Table of contents"
                className="hidden lg:block sticky top-28 self-start"
              >
                <p className="eyebrow text-charcoal/55 mb-4">In this article</p>
                <nav>
                  <ol className="space-y-2.5">
                    {tocItems.map((item, i) => (
                      <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                        <a
                          href={`#${item.id}`}
                          className="flex gap-2.5 items-start text-[0.84rem] text-navy/70 hover:text-terracotta transition-colors duration-150 leading-snug"
                        >
                          <span className="text-charcoal/30 text-[0.72rem] mt-px shrink-0 font-sans">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                {/* Author card in sidebar */}
                <div className="mt-12 border-t border-charcoal/10 pt-8">
                  <p className="eyebrow text-charcoal/45 mb-3">Written by</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={site.agent.headshot}
                        alt={site.agent.headshotAlt}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[0.84rem] font-medium text-navy leading-tight">
                        {site.agent.fullName}
                      </p>
                      <p className="text-[0.72rem] text-charcoal/50 leading-tight mt-0.5">
                        TX License #{site.company.trec}
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* ── 3. FAQ SECTION ───────────────────────────────────────── */}
        {post.faqs && post.faqs.length > 0 && (
          <section aria-labelledby="faq-heading" className="py-16 md:py-24 bg-beige/30">
            <div className="max-w-prose mx-auto px-6">
              <p className="eyebrow text-terracotta mb-4">Frequently Asked</p>
              <h2
                id="faq-heading"
                className="font-display text-3xl md:text-4xl text-navy leading-[1.1] tracking-tight mb-10"
              >
                Questions about this topic
              </h2>
              <div className="space-y-0">
                {post.faqs.map((faq, i) => (
                  <FAQCard
                    key={i}
                    question={faq.question}
                    faqSlug={slugifyFaq(faq.question)}
                    postSlug={post.slug}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 4. AUTHOR ────────────────────────────────────────────── */}
        <section aria-label="About the author" className="py-16 md:py-24 bg-softwhite">
          <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-3">
              <div className="relative aspect-[4/5] overflow-hidden max-w-[200px] md:max-w-none">
                <Image
                  src={site.agent.headshot}
                  alt={site.agent.headshotAlt}
                  fill
                  sizes="(min-width: 768px) 25vw, 200px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="eyebrow text-terracotta mb-4">About the author</p>
              <h2 className="font-display text-2xl md:text-4xl text-navy leading-[1.1] tracking-tight">
                {site.agent.fullName}
              </h2>
              <p className="mt-1 text-[0.76rem] tracking-wider uppercase text-charcoal/50">
                Austin Realtor · TX License #{site.company.trec}
              </p>
              <p className="mt-5 text-charcoal/80 leading-relaxed text-[1.0625rem] max-w-2xl">
                Laurel is an Austin native who has spent her career mapping the
                city&apos;s micro-markets block by block. She works with
                relocation buyers, lifelong Austinites, and sellers who want
                their home positioned with the precision it deserves.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="text-[0.76rem] tracking-wider uppercase text-charcoal/60 border-b border-charcoal/25 pb-0.5 hover:text-navy hover:border-navy transition-colors duration-200"
                >
                  About Laurel
                </Link>
                <Link
                  href="/contact"
                  className="text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta/40 pb-0.5 hover:border-terracotta transition-colors duration-200"
                >
                  Begin a conversation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. RELATED ARTICLES ──────────────────────────────────── */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="py-16 md:py-24">
            <div className="max-w-editorial mx-auto px-6 lg:px-10">
              <p className="eyebrow text-charcoal/55 mb-3">Continue reading</p>
              <h2
                id="related-heading"
                className="font-display text-2xl md:text-3xl text-navy tracking-tight mb-10"
              >
                More from the blog
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {related.map((r) => (
                  <BlogCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. CTA (single, subtle) ──────────────────────────────── */}
        <section aria-label="Contact" className="py-14 md:py-20 bg-navy text-softwhite">
          <div className="max-w-prose mx-auto px-6 text-center">
            <p className="eyebrow text-softwhite/45 mb-4">When you&apos;re ready</p>
            <h2 className="font-display text-2xl md:text-3xl leading-snug tracking-tight mb-2">
              Need help with your Austin move?
            </h2>
            <p className="text-softwhite/65 text-[0.9375rem] mb-8">
              Reach Laurel directly for a focused conversation — no pressure, no
              pitch.
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
