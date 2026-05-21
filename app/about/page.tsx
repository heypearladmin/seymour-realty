import Image from "next/image";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = {
  title: "About Laurel Seymour",
  description:
    "Laurel Seymour is an Austin-native real estate advisor offering thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={personSchema()} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: site.company.website }, { name: "About", url: `${site.company.website}/about` }])} />
      {/* Editorial header */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-charcoal/65 mb-6">
              About · Laurel Seymour
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.04] tracking-tight">
              Austin native. <br />
              Strategic advisor. <br />
              <span className="italic text-terracotta">Long view.</span>
            </h1>
            <p className="mt-8 max-w-xl text-charcoal/85 text-lg leading-relaxed">
              I&apos;ve spent my life in Austin and a career studying it. Every
              part of how I work — grounded, strategic, and deeply local —
              comes from that.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige/40">
              <Image
                src={site.agent.editorialPortrait}
                alt={site.agent.editorialPortraitAlt}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[0.72rem] tracking-editorial uppercase text-charcoal/60">
              Laurel Seymour · Founder, Seymour Realty Group
            </p>
          </div>
        </div>
      </section>

      {/* Bio + Philosophy */}
      <Section background="softwhite" padding="standard">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="eyebrow text-terracotta mb-5">Philosophy</p>
            <p className="font-display text-3xl md:text-4xl text-navy leading-[1.18] tracking-tight">
              Austin isn&apos;t one market. It&apos;s thirty micro-markets.
            </p>
          </div>

          <div className="md:col-span-7 space-y-6 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              That single idea shapes everything I do. The street you live on
              in Austin matters more than the zip code, and the zip code matters
              more than the headlines about &ldquo;the Austin market.&rdquo;
            </p>
            <p>
              For buyers, that means looking past listing photos to understand
              how a block actually lives — where the morning light falls, how
              the school commute works in real traffic, what changes when the
              neighborhood three streets over starts to shift.
            </p>
            <p>
              For sellers, it means positioning a home with the precision of
              someone who knows exactly which buyer is looking for it, and
              exactly what they expect when they walk in.
            </p>
            <p>
              I built Seymour Realty Group to do this work the way it deserves
              to be done: editorially, strategically, and with the patience to
              get it right the first time.
            </p>
          </div>
        </div>
      </Section>

      {/* Pull-quote / approach band */}
      <section className="bg-navy text-softwhite py-24 md:py-32">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow text-softwhite/55 mb-6">The Approach</p>
          <p className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight max-w-4xl mx-auto">
            &ldquo;You won&apos;t just get a Realtor.
            <br className="hidden md:block" />
            You&apos;ll get Austin{" "}
            <span className="italic text-terracotta">decoded</span>.&rdquo;
          </p>
        </div>
      </section>

      {/* What that looks like */}
      <Section
        eyebrow="In Practice"
        title="What strategy-driven real estate actually looks like."
        intro="The work happens before any contract is signed. It happens in conversations, neighborhood walks, and the small details that decide whether a move was a good one a decade from now."
      >
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {[
            {
              n: "01",
              title: "Plan with clarity.",
              body: "Before any property comes up, the conversation is about how you want your day to feel and what a smart move looks like a year, three years, ten years out.",
            },
            {
              n: "02",
              title: "Map the city.",
              body: "I translate lifestyle into the right Austin micro-markets — by school, commute, walkability, architecture, and long-term value.",
            },
            {
              n: "03",
              title: "Move with intention.",
              body: "Negotiation, diligence, and timing handled with the discipline of someone who has watched these neighborhoods change for decades.",
            },
          ].map((step) => (
            <div key={step.n} className="border-t border-charcoal/15 pt-7">
              <p className="font-display text-2xl text-terracotta">{step.n}</p>
              <h3 className="font-display text-2xl text-navy mt-2 leading-snug">
                {step.title}
              </h3>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who I work with */}
      <Section
        eyebrow="Who I Work With"
        title="Thoughtful buyers and sellers who want substance over noise."
        background="beige"
      >
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Relocation Buyers",
              body: "Professionals and families moving to Austin from major metros who need the city translated, not just toured — and a plan that matches their timeline.",
            },
            {
              title: "Lifelong Austinites",
              body: "Local clients buying their next home — often a more considered one — and looking for an advisor who respects the long view.",
            },
            {
              title: "Sellers Who Care",
              body: "Owners who want their home presented and positioned with the precision the home itself deserves.",
            },
          ].map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-2xl text-navy leading-snug">
                {g.title}
              </h3>
              <p className="mt-3 text-charcoal/80 leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Begin a Conversation"
        title="The best outcomes come from thoughtful beginnings."
        body="Whether you're a year out or actively looking, a clear conversation now sets up the smarter decision later. I'd love to hear what you're planning."
        primaryCta={{ label: "Contact Laurel", href: "/contact" }}
        secondaryCta={{ label: "Read the Journal", href: "/blog" }}
      />
    </>
  );
}
