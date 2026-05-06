import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import NeighborhoodCard from "@/components/NeighborhoodCard";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/lib/blog-data";
import { neighborhoods } from "@/lib/neighborhood-data";
import { site } from "@/lib/site";

export const metadata = {
  title: "Austin. Understood. — Laurel Seymour",
  description:
    "An Austin-native real estate authority. Hyperlocal neighborhood intelligence, relocation strategy, and editorial market insight from Laurel Seymour and Seymour Realty Group.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const featuredNeighborhoods = neighborhoods.slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="Laurel Seymour · Seymour Realty Group"
        headline="Austin. Understood."
        subheadline="An Austin-native authority on relocation, neighborhood strategy, and the city's quietly distinct micro-markets. You won't just get a Realtor — you'll get Austin decoded."
        image="/images/hero-austin-skyline.jpg"
        imageAlt="Cinematic view of Austin skyline at dusk with Lady Bird Lake in the foreground"
        primaryCta={{ label: "Work With Laurel", href: "/contact" }}
        secondaryCta={{ label: "Explore Neighborhoods", href: "/neighborhoods" }}
      />

      {/* Intro Section */}
      <Section
        eyebrow="A Word From Laurel"
        background="softwhite"
        padding="spacious"
      >
        <div className="grid md:grid-cols-12 gap-14 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige/40">
              <Image
                src={site.agent.headshot}
                alt={site.agent.headshotAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[0.72rem] tracking-editorial uppercase text-charcoal/60">
              Laurel Seymour · Founder, Seymour Realty Group
            </p>
          </div>

          <div className="md:col-span-7 md:pt-10">
            <p className="font-display text-3xl md:text-[2.6rem] leading-[1.18] text-navy tracking-tight">
              Austin isn&apos;t one market. It&apos;s thirty micro-markets,
              quietly operating at once.
            </p>
            <div className="mt-8 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
              <p>
                I&apos;ve spent a career mapping this city block by block —
                learning how Tarrytown lives differently than Barton Hills,
                how Westlake school zones shape generations of decisions, how
                East Austin moves on a different rhythm than the corridor that
                runs through it.
              </p>
              <p>
                My approach is calm, strategic, and grounded in local
                intelligence rather than market hype. I work with relocation
                buyers, lifelong Austinites, and sellers who want their home
                positioned with the care it deserves.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-block border border-charcoal/30 px-6 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-navy hover:text-softwhite hover:border-navy transition-colors duration-300"
              >
                About Laurel
              </Link>
              <Link
                href="/relocation"
                className="inline-block text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
              >
                Relocation Intelligence →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Austin Micro-Markets */}
      <Section
        eyebrow="Austin Micro-Markets"
        title="A city understood one neighborhood at a time."
        intro="Six places that show how layered Austin really is. Each one operates by its own rules — pricing, lifestyle, and long-term value all behave differently."
        background="beige"
        padding="spacious"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredNeighborhoods.map((n) => (
            <NeighborhoodCard key={n.slug} neighborhood={n} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/neighborhoods"
            className="inline-block border border-charcoal/30 px-7 py-3.5 text-[0.76rem] tracking-wider uppercase hover:bg-navy hover:text-softwhite hover:border-navy transition-colors duration-300"
          >
            View All Neighborhoods
          </Link>
        </div>
      </Section>

      {/* Featured Blog */}
      <Section
        eyebrow="The Journal"
        title="Editorial intelligence on Austin real estate."
        intro="Field notes, market analysis, and relocation guidance — written for thoughtful buyers and sellers who want substance over noise."
      >
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-block text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
          >
            Read All Articles →
          </Link>
        </div>
      </Section>

      {/* Relocation Intelligence */}
      <section className="relative bg-navy text-softwhite py-28 md:py-40 overflow-hidden">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-softwhite/60 mb-5">
              Austin Relocation Intelligence
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Moving to Austin is exciting. Choosing where to live is
              everything.
            </h2>
            <p className="mt-7 max-w-xl text-softwhite/80 leading-relaxed text-lg">
              Most relocation buyers begin with the wrong question. Instead of
              asking what to buy, they should be asking how they want to live.
              I help buyers translate lifestyle into the exact part of Austin
              that fits.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-softwhite/85 text-sm">
              <li className="border-l border-terracotta pl-4">
                Micro-market analysis
              </li>
              <li className="border-l border-terracotta pl-4">
                Commute & lifestyle mapping
              </li>
              <li className="border-l border-terracotta pl-4">
                School district guidance
              </li>
              <li className="border-l border-terracotta pl-4">
                Long-term value strategy
              </li>
            </ul>
            <div className="mt-10">
              <Link
                href="/relocation"
                className="inline-block bg-terracotta text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-softwhite hover:text-navy transition-colors duration-300"
              >
                Explore Relocation
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home-relocation-feature.jpg"
                alt="Quiet Austin neighborhood street with mature oaks at golden hour"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <Section
        eyebrow="The Austin Lifestyle"
        title="A city built around how it feels to live in it."
        intro="Coffee shops on quiet corners. Greenbelts a few blocks from anywhere. Architecture that listens to the trees. Austin rewards people who pay attention to the small things."
        background="softwhite"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            {
              src: "/images/lifestyle-coffee.jpg",
              alt: "Independent Austin coffee shop interior with warm natural light",
            },
            {
              src: "/images/lifestyle-hill-country.jpg",
              alt: "Hill Country landscape outside Austin at dusk",
            },
            {
              src: "/images/lifestyle-architecture.jpg",
              alt: "Architectural detail of a modern Austin home",
            },
            {
              src: "/images/lifestyle-walkable.jpg",
              alt: "Walkable neighborhood street with restaurants and trees",
            },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] md:translate-y-10"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Video Authority */}
      <Section
        eyebrow="On Camera"
        title="Austin, in long form."
        intro="Neighborhood tours, market briefings, and relocation conversations — published on YouTube and across the Seymour Realty Group video channels."
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative aspect-video bg-navy/90 flex items-center justify-center group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500">
                <Image
                  src={
                    i === 1
                      ? "/images/video-thumb-neighborhood-tour.jpg"
                      : "/images/video-thumb-market-briefing.jpg"
                  }
                  alt={
                    i === 1
                      ? "Modern Austin neighborhood featured in video tour"
                      : "Aerial Austin view featured in market briefing"
                  }
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-center text-softwhite px-6">
                <div className="w-16 h-16 mx-auto rounded-full border border-softwhite/70 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:border-terracotta transition-colors duration-300">
                  <span className="ml-1 border-l-[10px] border-l-softwhite border-y-[7px] border-y-transparent" />
                </div>
                <p className="eyebrow text-softwhite/80">
                  {i === 1 ? "Neighborhood Tour" : "Market Briefing"}
                </p>
                <p className="font-display text-2xl md:text-3xl mt-2">
                  {i === 1
                    ? "Inside Tarrytown"
                    : "Austin Q2 — What's Actually Moving"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
          >
            Visit the YouTube Channel →
          </a>
        </div>
      </Section>

      {/* Soft CTA */}
      <CTASection
        eyebrow="When You're Ready"
        title="A quiet conversation goes a long way."
        body="Whether you're months away from buying or just beginning to think about Austin, I'd love to hear what you're imagining. No pressure. No pitch. Just clarity."
        primaryCta={{ label: "Reach Out", href: "/contact" }}
        secondaryCta={{ label: "About Laurel", href: "/about" }}
      />
    </>
  );
}
