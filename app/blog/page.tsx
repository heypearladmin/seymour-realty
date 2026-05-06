import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

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
      <header className="pt-40 pb-16 md:pt-48 md:pb-20 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/65 mb-6">The Journal</p>
          <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.04] tracking-tight max-w-4xl">
            Austin, in long form.
          </h1>
          <p className="mt-7 max-w-2xl text-charcoal/85 text-lg leading-relaxed">
            Market intelligence, neighborhood guides, and relocation strategy —
            written for thoughtful buyers and sellers who want substance over
            noise.
          </p>
        </div>
      </header>

      <section className="pb-28 md:pb-40">
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
