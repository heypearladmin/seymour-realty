import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [post.image],
    },
  };
}

function renderParagraph(p: string, key: number) {
  // Lines starting with "- " in the same string become a list block.
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
  return <p key={key}>{p}</p>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      {/* Hero image + title block */}
      <section className="pt-32 md:pt-40 bg-softwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-terracotta mb-5 text-center">
            {post.category}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-navy leading-[1.05] tracking-tight text-center">
            {post.title}
          </h1>
          <div className="mt-7 flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-charcoal/60">
            <span>By Laurel Seymour</span>
            <span aria-hidden="true">·</span>
            <span>{post.publishedAt}</span>
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
      </section>

      {/* Long-form body */}
      <article className="py-20 md:py-28">
        <div className="max-w-prose mx-auto px-6">
          <div className="prose-editorial">
            {post.content.map((p, i) => renderParagraph(p, i))}
          </div>
        </div>
      </article>

      {/* Meet Laurel */}
      <section className="bg-beige/40 py-20 md:py-28">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={site.agent.headshot}
                alt={site.agent.headshotAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="eyebrow text-terracotta mb-5">Meet Laurel Seymour</p>
            <h2 className="font-display text-3xl md:text-5xl text-navy leading-[1.08] tracking-tight">
              An Austin-native authority on the city you&apos;re reading about.
            </h2>
            <p className="mt-6 text-charcoal/85 leading-relaxed text-[1.0625rem] max-w-xl">
              Laurel works with relocation buyers, lifelong Austinites, and
              sellers who want their home positioned with the precision it
              deserves. The journal exists to share that thinking openly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-block border border-charcoal/30 px-6 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-navy hover:text-softwhite hover:border-navy transition-colors duration-300"
              >
                About Laurel
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-navy text-softwhite px-6 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300"
              >
                Begin a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <Section eyebrow="Continue Reading" title="More from the journal.">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {related.map((r) => (
            <BlogCard key={r.slug} post={r} />
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="When You're Ready"
        title="A better move starts with a better plan."
        body="Whether you're months out or already in motion, a clear conversation now changes everything later."
        primaryCta={{ label: "Contact Laurel", href: "/contact" }}
        secondaryCta={{ label: "Explore Neighborhoods", href: "/neighborhoods" }}
      />
    </>
  );
}
