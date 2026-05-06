import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import { neighborhoods, getNeighborhoodBySlug } from "@/lib/neighborhood-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) return { title: "Neighborhood Not Found" };
  return {
    title: `${n.name} — An Austin Micro-Market Guide`,
    description: n.shortDescription,
    alternates: { canonical: `/neighborhoods/${n.slug}` },
    openGraph: {
      title: `${n.name} — An Austin Micro-Market Guide`,
      description: n.shortDescription,
      images: [{ url: n.image, alt: n.imageAlt }],
    },
  };
}

export default async function NeighborhoodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) notFound();

  const others = neighborhoods.filter((x) => x.slug !== n.slug).slice(0, 3);

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${n.name}, Austin, TX`,
    description: n.shortDescription,
    image: n.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden">
        <Image
          src={n.image}
          alt={n.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/25 to-navy/75" />
        <div className="relative max-w-editorial mx-auto w-full px-6 lg:px-10 pb-16 md:pb-24">
          <Link
            href="/neighborhoods"
            className="inline-block text-[0.72rem] tracking-editorial uppercase text-softwhite/85 hover:text-terracotta transition-colors duration-300 mb-8"
          >
            ← All Neighborhoods
          </Link>
          <p className="eyebrow text-softwhite/85 mb-5">
            Austin Micro-Market · {n.lifestyleAngle}
          </p>
          <h1 className="font-display text-softwhite text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            {n.name}
          </h1>
          <p className="mt-6 max-w-2xl font-display italic text-2xl md:text-3xl text-softwhite/90 leading-snug">
            {n.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <p className="eyebrow text-terracotta mb-5">Overview</p>
            <p className="font-display text-2xl md:text-3xl text-navy leading-[1.2] tracking-tight">
              {n.shortDescription}
            </p>
          </div>
          <div className="md:col-span-8 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>{n.overview}</p>
          </div>
        </div>
      </section>

      {/* Detail grid */}
      <section className="py-20 md:py-24 bg-beige/40">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-x-14 gap-y-14">
          {[
            { label: "Lifestyle", body: n.lifestyle },
            { label: "Real Estate Style", body: n.realEstateStyle },
            { label: "Architecture", body: n.architecture },
            { label: "Walkability", body: n.walkability },
            { label: "Schools", body: n.schools },
            { label: "Community Vibe", body: n.communityVibe },
          ].map((item) => (
            <div key={item.label} className="border-t border-charcoal/15 pt-7">
              <p className="eyebrow text-charcoal/60 mb-4">{item.label}</p>
              <p className="text-charcoal/85 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why people move + attractions */}
      <section className="py-20 md:py-28 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <p className="eyebrow text-terracotta mb-5">Why People Move Here</p>
            <h2 className="font-display text-3xl md:text-5xl text-navy leading-[1.1] tracking-tight">
              The decision behind the address.
            </h2>
            <p className="mt-7 text-charcoal/85 leading-relaxed text-[1.0625rem]">
              {n.whyPeopleMove}
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow text-charcoal/60 mb-5">Local Attractions</p>
            <ul className="space-y-3">
              {n.attractions.map((a, i) => (
                <li
                  key={i}
                  className="border-b border-charcoal/15 pb-3 text-charcoal/85"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow={`Considering ${n.name}?`}
        title={`Let's talk about ${n.name} the way it deserves.`}
        body="Every neighborhood has nuances that don't show up in a listing photo or an online estimate. The conversation starts there."
        primaryCta={{ label: "Reach Out", href: "/contact" }}
        secondaryCta={{ label: "Other Neighborhoods", href: "/neighborhoods" }}
      />

      {/* Related neighborhoods */}
      {others.length > 0 && (
        <section className="py-20 md:py-28 bg-softwhite">
          <div className="max-w-editorial mx-auto px-6 lg:px-10">
            <p className="eyebrow text-charcoal/60 mb-10">Other Micro-Markets</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {others.map((o) => (
                <NeighborhoodCard key={o.slug} neighborhood={o} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
