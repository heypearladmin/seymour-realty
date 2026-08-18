import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo/schema";
import { getPostsByPillar } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const metadata = {
  title: "Selling Your Home in Austin — Complete Seller's Resource Center",
  description:
    "Everything an Austin seller needs, in one place: home value, preparation, staging, pricing, marketing, offers, negotiation, and closing — guided by Realtor Laurel Seymour.",
  alternates: { canonical: "/services/selling" },
};

const sellingResources = getPostsByPillar("selling");

export default function SellingServicesPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Austin Home Selling Services",
          url: `${site.company.website}/services/selling`,
          description:
            "Full-service seller representation for Austin home sales — pricing strategy, presentation, marketing, negotiation, and closing, including luxury listings.",
          category: "Real Estate Seller Representation",
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "Services", url: `${site.company.website}/services/selling` },
          { name: "Selling", url: `${site.company.website}/services/selling` },
        ])}
      />
      <JsonLd
        schema={faqPageSchema([
          {
            question: "How do I find out what my Austin home is worth?",
            answer:
              "The most accurate number comes from a comparative market analysis (CMA) — a review of recent, truly comparable sales in your exact micro-market, adjusted for condition, updates, and lot factors. Online estimators are a starting point at best; Austin's block-by-block price variation means they're frequently off by a meaningful margin.",
          },
          {
            question: "How long does it take to sell a home in Austin?",
            answer:
              "Well-priced, well-presented Austin homes in strong micro-markets often go under contract within 2–4 weeks of listing, with closing following 30–45 days later. Pricing above market or skipping preparation both extend that timeline significantly.",
          },
          {
            question: "Do I need to stage my home to sell it in Austin?",
            answer:
              "Staging isn't required, but it consistently affects both price and speed of sale — buyers form an opinion within seconds of walking in, and staged homes tend to photograph and show better against competing listings. The right level of staging depends on the home's price point and current condition.",
          },
        ])}
      />

      <Hero
        eyebrow="Selling Resource Center"
        headline="A strategy for every stage of the sale."
        subheadline="Selling well in Austin takes more than a sign in the yard. This is the complete resource for pricing, presenting, marketing, and closing your home with a plan — not a guess."
        image="/images/town-lake-lifestyle-authentic.jpg"
        imageAlt="Austin skyline near Lady Bird Lake in late afternoon light — the market a seller is positioning their home within"
        primaryCta={{ label: "Get Your Home Value", href: "/contact" }}
        secondaryCta={{ label: "About Laurel", href: "/about" }}
        height="standard"
      />

      {/* Overview */}
      <Section
        eyebrow="Selling a Home"
        title="Good outcomes come from sequence, not luck."
        intro="Pricing, preparation, and marketing all reinforce each other — get the order right, and an Austin home sells faster and for more. Below is the full path, along with the resources that go deeper on each stage."
      >
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              Sellers who treat their home like a product — priced,
              presented, and marketed with intention — consistently outsell
              neighbors who treat it like a formality. Austin buyers are
              well-informed and comparison-shop aggressively, so the details
              matter.
            </p>
            <p>
              I work with sellers across every price point, from first-sale
              starter homes to architectural estates, and the plan below is
              the same one I use for my own listings — adjusted for your
              specific home and timeline.
            </p>
          </div>
          <div className="md:col-span-5">
            <Link
              href="/contact"
              className="inline-block bg-navy text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300"
            >
              Let&apos;s Talk About Selling
            </Link>
          </div>
        </div>
      </Section>

      {/* What's My Home Worth */}
      <Section
        id="home-value"
        eyebrow="Step One"
        title="What's my home worth?"
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            A real valuation starts with a comparative market analysis —
            genuinely comparable recent sales in your exact micro-market,
            adjusted for square footage, condition, updates, and lot quality.
            Online home-value tools use broad averages and routinely miss
            the block-by-block variation that defines Austin pricing.
          </p>
          <p>
            I build every CMA by hand, walking the comparables the same way
            a buyer&apos;s agent will, so the number we land on is one that
            actually holds up once the home is on the market — not one that
            looks good on a report and falls apart at showings.
          </p>
        </div>
      </Section>

      {/* Preparing & Staging */}
      <Section
        eyebrow="Step Two"
        title="Preparing and staging your home"
        intro="Buyers decide how they feel about a home within seconds of walking in. Preparation and staging are how you control that first impression instead of leaving it to chance."
      >
        <div className="grid sm:grid-cols-2 gap-8 text-charcoal/85">
          {[
            { title: "Repairs first", body: "Deferred maintenance reads as risk to buyers. Addressing it before listing prevents inspection-stage renegotiation later." },
            { title: "Declutter and depersonalize", body: "Buyers need to picture themselves in the space — not tour someone else's life." },
            { title: "Strategic staging", body: "Full staging isn't always necessary, but key rooms — primary suite, kitchen, living areas — almost always benefit from it." },
            { title: "Photography that matches reality", body: "Overly edited photos create disappointed showings. Great, honest photography converts online interest into real visits." },
          ].map((item) => (
            <div key={item.title} className="border-t border-charcoal/20 pt-5">
              <h3 className="font-display text-xl text-navy leading-snug">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/blog/how-to-prepare-your-home-for-sale-in-austin"
            className="inline-block text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
          >
            Full Home Preparation Guide →
          </Link>
        </div>
      </Section>

      {/* Pricing */}
      <Section
        id="pricing"
        eyebrow="Step Three"
        title="Pricing your home"
        background="navy"
      >
        <div className="grid md:grid-cols-2 gap-12 text-softwhite/85 leading-relaxed">
          <p>
            The most common seller mistake is pricing for what you need,
            hope for, or what a neighbor got two years ago — instead of
            pricing for what the current market will actually support. In a
            market where buyers see every comparable sale instantly, an
            overpriced listing sits, goes stale, and eventually sells for
            less than a correctly priced one would have.
          </p>
          <p>
            The right price accounts for current inventory, absorption rate
            in your specific micro-market, and how your home compares to
            what&apos;s actively competing for the same buyers right now —
            not last quarter&apos;s numbers.
          </p>
        </div>
      </Section>

      {/* Marketing */}
      <Section
        id="marketing"
        eyebrow="Step Four"
        title="Marketing your home"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            Strong marketing is more than a listing on the MLS. It&apos;s
            professional photography, a compelling written narrative, smart
            digital promotion, and — for the right properties — print and
            broker-network exposure that reaches buyers who aren&apos;t
            actively scrolling portals yet.
          </p>
          <p>
            The goal is always the same: create enough qualified demand in
            the first two weeks that the home sells on your terms, not the
            market&apos;s. Homes that generate strong early interest
            routinely sell faster and closer to (or above) asking.
          </p>
        </div>
      </Section>

      {/* Offers & Negotiation */}
      <Section
        eyebrow="Step Five"
        title="Understanding and negotiating offers"
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div id="understanding-offers" className="scroll-mt-24">
            <h3 className="font-display text-2xl text-navy leading-snug">Understanding offers</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              A strong offer isn&apos;t just the highest price — it&apos;s the
              combination of price, financing strength, contingencies, and
              closing timeline that gives you the best real outcome. I break
              down every offer the same way, so you're comparing full
              pictures, not just headline numbers.
            </p>
          </div>
          <div id="negotiating-offers" className="scroll-mt-24">
            <h3 className="font-display text-2xl text-navy leading-snug">Negotiating offers</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Multiple-offer situations and single-offer negotiations call for
              different strategies. In both cases, the work is protecting
              your position without losing a buyer who's genuinely the right
              fit — a balance that comes from experience, not a script.
            </p>
          </div>
        </div>
      </Section>

      {/* Inspections (seller side) */}
      <Section
        id="inspections"
        eyebrow="Step Six"
        title="Home inspections, from the seller's side"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            Once you&apos;re under contract, the buyer&apos;s inspection is
            where deals most often get renegotiated. A pre-listing
            inspection can flag issues before a buyer does — giving you the
            choice to fix them, price around them, or disclose them clearly,
            rather than negotiating from a defensive position later.
          </p>
          <p>
            I help sellers decide which repairs are worth making before
            listing and which are better handled as a negotiated credit — a
            decision that meaningfully affects both your net proceeds and how
            smoothly the transaction closes.
          </p>
        </div>
      </Section>

      {/* Closing & Luxury */}
      <Section
        eyebrow="Closing the Sale"
        title="Closing the sale, and selling at the luxury tier"
        background="navy"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div id="closing-the-sale" className="scroll-mt-24">
            <h3 className="font-display text-2xl text-softwhite leading-snug">Closing the sale</h3>
            <p className="mt-3 text-softwhite/85 leading-relaxed">
              From accepted offer to closing table, I manage the timeline —
              option period, buyer financing milestones, title work, and the
              final walkthrough — so nothing stalls in the final stretch and
              your proceeds land on schedule.
            </p>
          </div>
          <div id="luxury-selling" className="scroll-mt-24">
            <h3 className="font-display text-2xl text-softwhite leading-snug">Luxury home selling</h3>
            <p className="mt-3 text-softwhite/85 leading-relaxed">
              Estates in Tarrytown, Westlake, and Rollingwood require
              discretion, a targeted buyer network, and marketing that
              matches the property&apos;s caliber. I position luxury listings
              for the buyers who are actually looking at this tier — not a
              generic audience.
            </p>
          </div>
        </div>
      </Section>

      {/* Related resources */}
      {sellingResources.length > 0 && (
        <Section
          eyebrow="Go Deeper"
          title="More selling resources"
          background="beige"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {sellingResources.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        eyebrow="Ready When You Are"
        title="Let's talk about selling."
        body="Whether you're weeks from listing or just starting to think about it, a grounded conversation about value and timing is the right place to begin."
        primaryCta={{ label: "Get Your Home Value", href: "/contact" }}
        secondaryCta={{ label: "Buying Instead?", href: "/services/buying" }}
      />
    </>
  );
}
