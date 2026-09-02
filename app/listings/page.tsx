import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import { getAllListings } from "@/lib/listings-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Listings — Homes for Sale with Laurel Seymour",
  description:
    "Browse current property listings represented by Laurel Seymour of Seymour Realty Group, including photos, pricing, and property details.",
  alternates: { canonical: "/listings" },
  openGraph: {
    title: "Listings — Homes for Sale with Laurel Seymour",
    description:
      "Browse current property listings represented by Laurel Seymour of Seymour Realty Group, including photos, pricing, and property details.",
    url: `${site.company.website}/listings`,
  },
};

export default function ListingsPage() {
  const allListings = getAllListings();

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 max-w-3xl">
          <p className="eyebrow text-terracotta mb-5">Current Listings</p>
          <h1 className="font-display text-navy text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Listings
          </h1>
          <p className="mt-7 text-charcoal/85 leading-relaxed text-lg">
            Below are properties currently represented by Laurel Seymour. Each
            listing includes photos, pricing, and the property details
            available at this time. Reach out for a private showing or more
            information on any home.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          {allListings.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {allListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-t border-charcoal/15">
              <p className="font-display text-2xl text-navy mb-3">
                No active listings at the moment.
              </p>
              <p className="text-charcoal/70 max-w-md mx-auto">
                Check back soon, or reach out directly to hear about upcoming
                properties before they&apos;re publicly listed.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Looking to Buy or Sell?"
        title="Let's talk about the right move for you."
        body="Whether you're searching for a home or considering listing your own, Laurel brings hyperlocal market intelligence and a thoughtful, strategic approach to every transaction."
        primaryCta={{ label: "Contact Laurel", href: "/contact" }}
        secondaryCta={{ label: "Learn About Buying", href: "/services/buying" }}
      />
    </>
  );
}
