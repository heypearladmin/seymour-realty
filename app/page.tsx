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
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = {
  title: "Austin. Understood. — Laurel Seymour",
  description:
    "An Austin-native real estate authority offering thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets. Laurel Seymour, founder of Seymour Realty Group.",
  alternates: { canonical: "/" },
};

const microMarketsOnMap = [
  "Zilker",
  "Bouldin",
  "Clarksville",
  "Tarrytown",
  "Rollingwood",
  "Barton Hills",
  "South Congress",
  "East Austin",
  "Westlake",
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const featuredNeighborhoods = neighborhoods.slice(0, 6);

  return (
    <>
      <JsonLd schema={localBusinessSchema()} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: site.company.website }])} />
      <Hero
        eyebrow="Laurel Seymour · Seymour Realty Group"
        headline="Austin. Understood."
        subheadline="An Austin-native advisor offering thoughtful planning, strategic guidance, and hyperlocal intelligence across the city's distinct micro-markets. You won't just get a Realtor — you'll get Austin decoded."
        image="/images/austin-skyline-town-lake-realistic.jpg"
        imageAlt="Downtown Austin skyline rising above Lady Bird Lake at golden hour, with the Pennybacker Bridge and Hill Country in the distance"
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
              The best moves start with clarity, not urgency.
            </p>
            <div className="mt-8 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
              <p>
                I&apos;ve spent a career mapping Austin block by block —
                learning how Tarrytown lives differently than Barton Hills, how
                Westlake school zones shape generations of decisions, how East
                Austin moves on a different rhythm than the corridor that runs
                through it.
              </p>
              <p>
                My approach is grounded, strategic, and informed by local
                intelligence rather than market hype. I work with relocation
                buyers, lifelong Austinites, and sellers who want a clear plan
                and a thoughtful advisor in their corner.
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

      {/* Austin Micro-Markets Editorial Map */}
      <section
        id="micro-markets"
        className="bg-beige/40 py-28 md:py-36"
        aria-labelledby="micro-markets-heading"
      >
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14 md:mb-20">
            <p className="eyebrow mb-5">Austin Micro-Markets</p>
            <h2
              id="micro-markets-heading"
              className="font-display text-4xl md:text-5xl leading-[1.08] tracking-tight text-navy"
            >
              One city, mapped one micro-market at a time.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/85">
              Austin reads as a single skyline and behaves as thirty distinct
              neighborhoods. Each one prices, paces, and appreciates on its own
              terms. A clear plan starts with knowing exactly which one fits
              your life.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <figure className="relative w-full bg-softwhite border border-charcoal/10">
                {/*
                  Editorial map is 1672×941 (≈16:9). Render it at its natural
                  aspect ratio so nothing is cropped, and use object-contain as
                  a safety net in case the image is later swapped for one with
                  slightly different proportions.
                */}
                <Image
                  src="/images/austin-micro-markets-editorial-map.jpg"
                  alt="Editorial map of central Austin showing Zilker, Bouldin, Clarksville, Tarrytown, Rollingwood, Barton Hills, South Congress, East Austin, and Westlake"
                  width={1672}
                  height={941}
                  sizes="(min-width: 1024px) 720px, (min-width: 768px) 58vw, 100vw"
                  className="block h-auto w-full object-contain"
                  priority={false}
                />
              </figure>
              <figcaption className="mt-4 text-[0.72rem] tracking-editorial uppercase text-charcoal/55">
                Central Austin micro-markets · editorial reference
              </figcaption>
            </div>

            <div className="md:col-span-5">
              <p className="eyebrow text-terracotta mb-5">On the Map</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-charcoal/85">
                {microMarketsOnMap.map((name) => (
                  <li
                    key={name}
                    className="border-l border-terracotta/70 pl-3 text-sm md:text-[0.95rem] tracking-tight"
                  >
                    {name}
                  </li>
                ))}
              </ul>

              <p className="mt-9 text-charcoal/80 leading-relaxed">
                Each of these places operates on its own logic — by school
                zone, walkability, architecture, and long-term value. The work
                is matching the right one to the life you&apos;re planning, not
                the headlines you&apos;ve read.
              </p>

              <div className="mt-8">
                <Link
                  href="/neighborhoods"
                  className="inline-block border border-charcoal/30 px-6 py-3 text-[0.76rem] tracking-wider uppercase hover:bg-navy hover:text-softwhite hover:border-navy transition-colors duration-300"
                >
                  Explore Each Neighborhood
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhood Cards */}
      <Section
        eyebrow="Six Places to Start"
        title="Distinct neighborhoods, distinct strategies."
        intro="Six of the most layered micro-markets in central Austin. Each one rewards a different kind of buyer — and a different plan."
        background="softwhite"
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
        intro="Field notes, market analysis, and relocation strategy — written for thoughtful buyers and sellers who want substance over noise."
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
              Good moves take thoughtful planning.
            </h2>
            <p className="mt-7 max-w-xl text-softwhite/80 leading-relaxed text-lg">
              Most relocation buyers begin with the wrong question. Instead of
              asking what to buy, the better question is how you want to live
              here. I help buyers translate lifestyle into the exact part of
              Austin that fits — with a clear plan, not a guess.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-softwhite/85 text-sm">
              <li className="border-l border-terracotta pl-4">
                Micro-market analysis
              </li>
              <li className="border-l border-terracotta pl-4">
                Commute &amp; lifestyle mapping
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
                src="/images/austin-relocation-thoughtful.jpg"
                alt="A tree-lined central Austin street in soft afternoon light — the kind of block a relocation buyer learns to read"
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
        intro="Independent coffee shops on tree-lined corners. Lady Bird Lake a few blocks from anywhere downtown. Architecture that listens to the oaks. Austin rewards buyers who pay attention to the small details."
        background="softwhite"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            {
              src: "/images/austin-coffee-shop-editorial.jpg",
              alt: "Independent Austin coffee shop interior with warm natural light",
            },
            {
              src: "/images/town-lake-lifestyle-authentic.jpg",
              alt: "Lady Bird Lake (Town Lake) in central Austin with the downtown skyline behind",
            },
            {
              src: "/images/austin-neighborhood-lifestyle-authentic.jpg",
              alt: "A walkable Austin neighborhood street with mature oaks and a craftsman home",
            },
            {
              src: "/images/lifestyle-architecture.jpg",
              alt: "Architectural detail of a modern Austin home tucked among oaks",
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

      {/* Evening Editorial CTA */}
      <CTASection
        eyebrow="When You're Ready"
        title="A better move starts with a better plan."
        body="Whether you're months out from buying or already deep in the process, a clear conversation now changes everything later. No pressure. No pitch. Just direction."
        primaryCta={{ label: "Reach Out", href: "/contact" }}
        secondaryCta={{ label: "About Laurel", href: "/about" }}
        backgroundImage="/images/austin-evening-editorial.jpg"
        backgroundImageAlt="Austin in the evening, looking out across the city as the lights come on"
      />
    </>
  );
}
