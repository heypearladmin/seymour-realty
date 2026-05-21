import NeighborhoodCard from "@/components/NeighborhoodCard";
import CTASection from "@/components/CTASection";
import { neighborhoods } from "@/lib/neighborhood-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

export const metadata = {
  title: "Austin Neighborhoods — A Micro-Market Directory",
  description:
    "An editorial directory of Austin's most distinctive neighborhoods — Tarrytown, Westlake, Barton Hills, Zilker, South Congress, East Austin, Bouldin, Clarksville, and Rollingwood — by lifestyle, architecture, and long-term value.",
  alternates: { canonical: "/neighborhoods" },
};

export default function NeighborhoodsIndexPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: site.company.website }, { name: "Neighborhoods", url: `${site.company.website}/neighborhoods` }])} />
      <header className="pt-40 pb-16 md:pt-48 md:pb-24 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/65 mb-6">Austin Micro-Markets</p>
          <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.04] tracking-tight max-w-4xl">
            Many Austins. <span className="italic">One city.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-charcoal/85 text-lg leading-relaxed">
            A working directory of the neighborhoods that define Austin&apos;s
            character — each with its own pace, architecture, and long-term
            story. Choose a place to begin.
          </p>
        </div>
      </header>

      <section className="pb-24 md:pb-32">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {neighborhoods.map((n) => (
              <NeighborhoodCard key={n.slug} neighborhood={n} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Don't See Yours?"
        title="Austin is layered. I can help you find the layer that fits."
        body="If you have a neighborhood in mind that isn't listed — or no idea where to start — that's the conversation worth having first. The best moves start with clarity, not urgency."
        primaryCta={{ label: "Talk With Laurel", href: "/contact" }}
        secondaryCta={{ label: "Relocation Intelligence", href: "/relocation" }}
        background="navy"
      />
    </>
  );
}
