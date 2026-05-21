import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

export const metadata = {
  title: "The Journal — Austin Real Estate Intelligence",
  description:
    "Editorial market intelligence, neighborhood guides, and relocation strategy. Field notes from Laurel Seymour on Austin's real estate landscape.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [feature, ...rest] = blogPosts;

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: site.company.website }, { name: "Journal", url: `${site.company.website}/blog` }])} />
      {/* Editorial header with hero image */}
      <header className="relative w-full min-h-[58vh] md:min-h-[68vh] flex items-end overflow-hidden">
        <Image
          src="/images/austin-journal-hero-authentic.jpg"
          alt="Editorial image of central Austin — the city the Journal writes about"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/30 to-navy/75"
          aria-hidden="true"
        />
        <div className="relative max-w-editorial mx-auto w-full px-6 lg:px-10 pb-16 md:pb-24">
          <p className="eyebrow text-softwhite/85 mb-5">The Journal</p>
          <h1 className="font-display text-softwhite text-5xl md:text-7xl leading-[1.04] tracking-tight max-w-4xl">
            Austin, in long form.
          </h1>
          <p className="mt-6 max-w-2xl text-softwhite/85 text-lg leading-relaxed">
            Market intelligence, neighborhood guides, and relocation strategy —
            written for thoughtful buyers and sellers who want substance over
            noise.
          </p>
        </div>
      </header>

      <section className="pt-20 md:pt-28 pb-28 md:pb-40 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          {/* Featured post */}
          <div className="mb-20 md:mb-28">
            <BlogCard post={feature} layout="feature" />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
