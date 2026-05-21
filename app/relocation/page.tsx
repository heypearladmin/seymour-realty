import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

export const metadata = {
  title: "Austin Relocation Intelligence",
  description:
    "A trusted advisor for relocation buyers moving to Austin. Thoughtful planning, micro-market analysis, lifestyle mapping, school guidance, and long-term value strategy from Laurel Seymour.",
  alternates: { canonical: "/relocation" },
};

export default function RelocationPage() {
  return (
    <>
      <JsonLd schema={serviceSchema({ name: "Austin Relocation Intelligence", url: `${site.company.website}/relocation`, description: "A trusted advisor for relocation buyers moving to Austin. Thoughtful planning, micro-market analysis, lifestyle mapping, school guidance, and long-term value strategy." })} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: site.company.website }, { name: "Relocation", url: `${site.company.website}/relocation` }])} />
      <Hero
        eyebrow="Austin Relocation Intelligence"
        headline="Planning early changes everything."
        subheadline="Most relocation buyers begin by asking what to buy. The better question is how you want to live. A thoughtful plan turns that question into the right part of Austin — and the right home inside it."
        image="/images/austin-relocation-thoughtful.jpg"
        imageAlt="A central Austin street in late-afternoon light — the kind of block a thoughtful relocation buyer learns to read before making a move"
        primaryCta={{ label: "Begin a Conversation", href: "/contact" }}
        secondaryCta={{ label: "About Laurel", href: "/about" }}
        height="standard"
      />

      {/* Moving to Austin */}
      <Section
        eyebrow="Moving to Austin"
        title="A city that rewards careful research and grounded guidance."
        intro="Austin draws buyers from across the country for good reason — but the city is more layered than the headlines suggest. Relocation buyers who take the time to understand its micro-markets consistently make better long-term decisions."
      >
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              Living ten miles away in Austin doesn&apos;t always mean a quick
              drive. School zones don&apos;t always follow zip-code intuition.
              Two streets in the same neighborhood can sit in completely
              different price brackets — and behave differently when the market
              shifts.
            </p>
            <p>
              That kind of nuance doesn&apos;t show up in online estimates.
              It&apos;s the work of someone who has walked these streets for
              decades and can translate them into a clear, informed plan.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige/40">
              <Image
                src="/images/austin-neighborhood-lifestyle-authentic.jpg"
                alt="A walkable, tree-lined Austin neighborhood — the kind of block that defines daily life here"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Micro-markets */}
      <Section
        eyebrow="Understanding Micro-Markets"
        title="Austin isn't one market. It's thirty."
        intro="The single most important thing a relocation buyer can learn before searching is that Austin behaves like a network of distinct micro-markets — each shaped by school district, walkability, architecture, and long-term value drivers."
        background="beige"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "By Lifestyle",
              body: "Walkability, food, music, outdoor access — different neighborhoods deliver these in very different proportions.",
            },
            {
              title: "By School",
              body: "Eanes, AISD, Round Rock, Lake Travis — district choice can shape a generation of decisions.",
            },
            {
              title: "By Architecture",
              body: "From mid-century Tarrytown to modern East Austin infill, the home itself signals the neighborhood character.",
            },
            {
              title: "By Commute",
              body: "Austin's geography rewards strategic location. We map your real day-to-day, not just the address.",
            },
            {
              title: "By Long-Term Value",
              body: "Different micro-markets appreciate on different curves. Local context is the difference between a guess and a strategy.",
            },
            {
              title: "By Pace",
              body: "Some neighborhoods feel central and active. Others are more residential by design. Both are valid — what matters is the match.",
            },
          ].map((item) => (
            <div key={item.title} className="border-t border-charcoal/20 pt-6">
              <h3 className="font-display text-2xl text-navy leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-charcoal/80 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lifestyle considerations */}
      <Section
        eyebrow="Lifestyle Considerations"
        title="The smallest details often decide the right neighborhood."
        intro="Coffee shops you actually walk to. Trails you can reach without a car. Whether the morning sun hits the kitchen. These are the things that decide whether a place feels like home — and whether the plan was a good one."
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-charcoal/85">
          {[
            "Daily routines and walkability",
            "Outdoor access — parks, trails, water",
            "Food, coffee, and neighborhood culture",
            "Central energy vs. residential pace",
            "Family rhythms and school proximity",
            "Home-office and work-from-home flow",
            "Long-term plans and life stage",
            "Architectural taste and design preferences",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              <span className="font-display text-3xl text-terracotta leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed pt-1">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Commute strategy */}
      <Section
        eyebrow="Commute Strategy"
        title="Where you live decides how Austin feels."
        intro="Austin's geography is more nuanced than its grid. Highway access, bridge crossings, and the difference between rush-hour realities and Google Maps estimates all shape the neighborhood that fits your day."
        background="navy"
      >
        <div className="grid md:grid-cols-3 gap-10 text-softwhite">
          {[
            {
              n: "01",
              title: "We map your real day.",
              body: "Where you work, where your kids go to school, where you spend weekends — translated into neighborhood feasibility.",
            },
            {
              n: "02",
              title: "Highways aren't equal.",
              body: "MoPac, I-35, 360, and the bridges all behave differently. Living west of MoPac is a different city than living east of it.",
            },
            {
              n: "03",
              title: "Future infrastructure matters.",
              body: "Project Connect, transit lines, and major corridor changes all influence long-term livability and value.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-display text-2xl text-terracotta">{s.n}</p>
              <h3 className="font-display text-2xl mt-2 leading-snug">
                {s.title}
              </h3>
              <p className="mt-4 text-softwhite/80 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Family relocation */}
      <Section
        eyebrow="Family Relocation"
        title="When the move involves more than just you."
        intro="Family relocation is a different conversation. Schools, community fit, neighborhood pace, weekend rhythms, and how a family settles into a new city all matter as much as the home itself."
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              Families relocating to Austin often start by focusing on schools,
              and rightly so — Eanes ISD, AISD magnets, and a strong network of
              independent schools each carry distinct identities and trade-offs.
            </p>
            <p>
              But the school is only part of the story. Community fit, drive
              times, the rhythm of the block, and how a neighborhood actually
              welcomes new families all influence how quickly Austin starts to
              feel like home.
            </p>
          </div>
          <div className="space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              I help relocation families think through this with intention —
              including connecting them to school admissions, neighborhood
              parents, and the kinds of details you don&apos;t find on a
              listing site.
            </p>
            <p>
              The right Austin neighborhood for a family is one where the
              family is going to thrive — not just live.
            </p>
          </div>
        </div>
      </Section>

      {/* Austin culture */}
      <Section
        eyebrow="Austin Culture"
        title="A city that actually rewards living in it."
        intro="The reason people move to Austin and stay is the same reason it's hard to summarize on a website. The city is layered, generous, and worth taking your time to understand."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            {
              src: "/images/culture-music.jpg",
              alt: "Austin live music venue interior",
            },
            {
              src: "/images/culture-restaurant.jpg",
              alt: "Independent Austin restaurant exterior",
            },
            {
              src: "/images/culture-greenbelt.jpg",
              alt: "Barton Creek Greenbelt trail running through Austin",
            },
            {
              src: "/images/culture-streetart.jpg",
              alt: "Austin street art on a walkable east-side corridor",
            },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden">
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

      {/* Why local guidance */}
      <Section
        eyebrow="Why Local Guidance Matters"
        title="A relocation move isn't a search. It's a translation."
        background="softwhite"
      >
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-display text-3xl md:text-4xl text-navy leading-[1.18] tracking-tight italic">
              &ldquo;You won&apos;t just get a Realtor.
              <br /> You&apos;ll get Austin decoded.&rdquo;
            </p>
          </div>
          <div className="md:col-span-7 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              Online tools can tell you what a home cost. They can&apos;t tell
              you why it matters that the lot backs to a creek, or that the
              elementary school is changing principals, or that the corridor
              two streets over is about to redevelop.
            </p>
            <p>
              That&apos;s the work of an actual local advisor. And when
              you&apos;re moving across the country, that translation is worth
              more than anything else in the process.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-[0.78rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
            >
              Begin a Relocation Conversation →
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Begin a Relocation Conversation"
        title="Thoughtful starts lead to better moves."
        body="Whether you're a year out or weeks away, a clear conversation now will save months later. I'd love to hear what you're planning."
        primaryCta={{ label: "Reach Out", href: "/contact" }}
        secondaryCta={{ label: "Explore Neighborhoods", href: "/neighborhoods" }}
      />
    </>
  );
}
