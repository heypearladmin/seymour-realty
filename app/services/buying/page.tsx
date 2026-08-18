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
  title: "Buying a Home in Austin — Complete Buyer's Resource Center",
  description:
    "Everything an Austin homebuyer needs, in one place: pre-approval, finding the right home, making an offer, inspections, closing, new construction, and luxury buying — guided by Realtor Laurel Seymour.",
  alternates: { canonical: "/services/buying" },
};

const buyingResources = getPostsByPillar("buying");

export default function BuyingServicesPage() {
  return (
    <>
      <JsonLd
        schema={serviceSchema({
          name: "Austin Home Buying Services",
          url: `${site.company.website}/services/buying`,
          description:
            "Comprehensive buyer representation for Austin home purchases — from pre-approval through closing, including first-time buyers, new construction, and luxury acquisitions.",
          category: "Real Estate Buyer Representation",
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "Services", url: `${site.company.website}/services/buying` },
          { name: "Buying", url: `${site.company.website}/services/buying` },
        ])}
      />
      <JsonLd
        schema={faqPageSchema([
          {
            question: "How do I start buying a home in Austin?",
            answer:
              "Start with mortgage pre-approval so you know your real budget, then work with a local Realtor to identify the neighborhoods and price range that fit your life. Austin's micro-markets vary enormously block by block, so local guidance matters more here than in most cities.",
          },
          {
            question: "How much do I need for a down payment in Austin?",
            answer:
              "Conventional loans typically require 5–20% down, while FHA loans allow as little as 3.5%. On Austin's median home price, that ranges from roughly $15,000 to $90,000+ depending on loan type and price point. A lender can confirm exact numbers for your situation during pre-approval.",
          },
          {
            question: "How long does it take to buy a home in Austin?",
            answer:
              "From pre-approval to closing, most Austin purchases take 30–60 days once an offer is accepted, plus however long the search itself takes — often 1–3 months for buyers with clear criteria. Competitive listings can move in days, so being pre-approved before you start touring is essential.",
          },
        ])}
      />

      <Hero
        eyebrow="Buying Resource Center"
        headline="A clear path from search to closing day."
        subheadline="Buying a home in Austin involves more steps — and more nuance — than most buyers expect. This is the complete resource for doing it with confidence, from your first pre-approval call to the day you get the keys."
        image="/images/austin-neighborhood-lifestyle-authentic.jpg"
        imageAlt="A walkable, tree-lined Austin neighborhood street — the kind of block a buyer evaluates closely before making an offer"
        primaryCta={{ label: "Start Your Home Search", href: "/contact" }}
        secondaryCta={{ label: "Explore Neighborhoods", href: "/neighborhoods" }}
        height="standard"
      />

      {/* Overview */}
      <Section
        eyebrow="Buying a Home"
        title="The process is knowable. Most buyers just haven't seen it mapped out."
        intro="Every Austin purchase moves through the same core stages — pre-approval, search, offer, inspection, and closing — but the details inside each stage are where deals are won or lost. Below is the full path, along with the resources that go deeper on each step."
      >
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-5 text-charcoal/85 leading-relaxed text-[1.0625rem]">
            <p>
              Buyers who move through this process with a plan consistently do
              better than buyers who improvise it — not because the market
              rewards perfection, but because Austin's competitive listings
              punish hesitation and unclear budgets.
            </p>
            <p>
              I work with first-time buyers, move-up buyers, relocation
              clients, and luxury purchasers across every stage below. The
              goal is always the same: a confident decision, made with full
              information, on a timeline that respects your life.
            </p>
          </div>
          <div className="md:col-span-5">
            <Link
              href="/contact"
              className="inline-block bg-navy text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300"
            >
              Let&apos;s Find Your Home
            </Link>
          </div>
        </div>
      </Section>

      {/* Getting Pre-Approved */}
      <Section
        id="pre-approved"
        eyebrow="Step One"
        title="Getting pre-approved"
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            Pre-approval is the single most important thing to do before
            touring homes — not pre-qualification, which is a rough estimate,
            but full pre-approval, which means a lender has verified your
            income, assets, and credit. In Austin&apos;s competitive listings,
            sellers routinely disregard offers without a strong pre-approval
            letter attached.
          </p>
          <p>
            I work with a small group of Austin-based lenders who move
            quickly and communicate clearly — a meaningful advantage when a
            listing you love appears on a Friday and needs an offer by
            Monday. If you don&apos;t already have a lender relationship,
            that&apos;s one of the first things we&apos;ll set up together.
          </p>
        </div>
      </Section>

      {/* Finding the Right Home */}
      <Section
        eyebrow="Step Two"
        title="Finding the right home"
        intro="Austin behaves like thirty distinct micro-markets, not one city-wide market. The right home is rarely the one with the most photos online — it's the one that fits your actual life, in a neighborhood that holds its value."
      >
        <div className="grid sm:grid-cols-2 gap-8 text-charcoal/85">
          {[
            { title: "Lifestyle fit", body: "Walkability, commute, school zone, and pace of life all narrow the map faster than price alone." },
            { title: "Long-term value", body: "Some blocks appreciate steadily; others are more exposed to market swings. Local context makes the difference." },
            { title: "Condition vs. cosmetics", body: "A confident buyer can see past paint and staging to the bones of a house — and knows when a fixable flaw is a real discount opportunity." },
            { title: "Moving with clarity", body: "The best offers come from buyers who've already decided what they want — not ones still deciding while the clock runs." },
          ].map((item) => (
            <div key={item.title} className="border-t border-charcoal/20 pt-5">
              <h3 className="font-display text-xl text-navy leading-snug">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Making an Offer */}
      <Section
        id="making-an-offer"
        eyebrow="Step Three"
        title="Making an offer"
        background="navy"
      >
        <div className="grid md:grid-cols-2 gap-12 text-softwhite/85 leading-relaxed">
          <p>
            A strong Austin offer is built from more than price — it accounts
            for the specific seller&apos;s timeline, the property&apos;s days
            on market, comparable sales in that exact micro-market, and how
            many other offers are likely on the table. Overpaying and
            underbidding are both real risks, and both come from guessing
            instead of knowing.
          </p>
          <p>
            I build every offer from a real comparative market analysis, not
            a general sense of &ldquo;what things are going for.&rdquo; That
            means option periods, earnest money, and contingencies are set
            deliberately — protecting you without making the offer
            uncompetitive.
          </p>
        </div>
      </Section>

      {/* Home Inspections */}
      <Section
        id="inspections"
        eyebrow="Step Four"
        title="Home inspections"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            Texas&apos;s option period exists for exactly this reason —
            giving you a defined window to have the home professionally
            inspected before you&apos;re fully committed. In Austin, that
            typically means a general inspection at minimum, with foundation,
            roof, and (where relevant) flood-zone review layered in depending
            on the property&apos;s age and location.
          </p>
          <p>
            I bring in inspectors I trust — not the cheapest option, but ones
            who explain findings clearly and help you separate a genuine
            deal-breaker from a normal repair item. That distinction alone
            has saved buyers from walking away from good homes, and walked
            others away from expensive mistakes.
          </p>
        </div>
      </Section>

      {/* Closing Day */}
      <Section
        id="closing-day"
        eyebrow="Step Five"
        title="Closing day"
        background="beige"
      >
        <div className="grid md:grid-cols-2 gap-12 text-charcoal/85 leading-relaxed text-[1.0625rem]">
          <p>
            Closing in Texas typically happens at a title company, with a
            final walkthrough beforehand to confirm the home is in the
            agreed-upon condition. Most Austin closings take 30–45 minutes
            once you arrive — the real work happens in the days before, when
            title, insurance, and lender documents all come together.
          </p>
          <p>
            I coordinate that timeline directly so nothing surprises you at
            the table — including a clear breakdown of closing costs well
            before you sign anything. For a full walk-through of what those
            costs include, see the{" "}
            <Link
              href="/blog/austin-property-taxes-what-buyers-need-to-know"
              className="text-terracotta underline underline-offset-2 hover:text-navy transition-colors"
            >
              Austin property tax and closing cost guide
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* New Construction & Luxury */}
      <Section
        eyebrow="Specialized Buying"
        title="New construction and luxury acquisitions"
        intro="Two paths that follow the same fundamentals, with meaningfully different details."
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border-t border-charcoal/20 pt-6">
            <h3 className="font-display text-2xl text-navy leading-snug">New construction</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Builder contracts, upgrade allowances, and builder-preferred
              lenders all work differently than a resale purchase — and
              having your own representation in that process protects
              interests the builder&apos;s sales office isn&apos;t
              positioned to protect.
            </p>
            <Link
              href="/blog/austin-new-construction-vs-resale-homes"
              className="inline-block mt-4 text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
            >
              New Construction vs. Resale Guide →
            </Link>
          </div>
          <div id="luxury-buying" className="border-t border-charcoal/20 pt-6 scroll-mt-24">
            <h3 className="font-display text-2xl text-navy leading-snug">Luxury home buying</h3>
            <p className="mt-3 text-charcoal/85 leading-relaxed">
              Austin&apos;s luxury market — Tarrytown, Westlake, Rollingwood,
              and the city&apos;s architectural estates — moves on discretion,
              relationships, and off-market opportunity as much as public
              listings. I bring both the market fluency and the network this
              tier requires.
            </p>
            <Link
              href="/neighborhoods/tarrytown"
              className="inline-block mt-4 text-[0.76rem] tracking-wider uppercase text-terracotta border-b border-terracotta pb-1 hover:text-navy hover:border-navy transition-colors duration-300"
            >
              Explore Tarrytown →
            </Link>
          </div>
        </div>
      </Section>

      {/* Related resources */}
      {buyingResources.length > 0 && (
        <Section
          eyebrow="Go Deeper"
          title="More buying resources"
          background="beige"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {buyingResources.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      )}

      <CTASection
        eyebrow="Ready When You Are"
        title="Let's find your home."
        body="Whether you're pre-approved and ready to tour, or still six months out and gathering information, a real conversation now beats a guess later."
        primaryCta={{ label: "Start Your Home Search", href: "/contact" }}
        secondaryCta={{ label: "Selling Instead?", href: "/services/selling" }}
      />
    </>
  );
}
