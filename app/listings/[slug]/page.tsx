import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import ListingGallery from "@/components/listings/ListingGallery";
import { listings, getListingBySlug, formatPrice } from "@/lib/listings-data";
import { JsonLd } from "@/components/seo/JsonLd";
import { residenceListingSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Listing Not Found" };

  const title = `${listing.address}, ${listing.city}, ${listing.state} — ${formatPrice(listing.price)}`;
  const description =
    listing.bedrooms > 0
      ? `${listing.bedrooms} bed, ${listing.bathrooms} bath home at ${listing.address} in ${listing.city}, ${listing.state}. ${listing.squareFeet.toLocaleString()} sqft, listed at ${formatPrice(listing.price)}.`
      : `${listing.squareFeet.toLocaleString()} sqft property at ${listing.address} in ${listing.city}, ${listing.state}, listed at ${formatPrice(listing.price)}.`;

  return {
    title,
    description,
    alternates: { canonical: `/listings/${listing.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.company.website}/listings/${listing.slug}`,
      images: [{ url: listing.heroImage.src, alt: listing.heroImage.alt }],
    },
  };
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const others = listings.filter((l) => l.slug !== listing.slug).slice(0, 2);
  const pageUrl = `${site.company.website}/listings/${listing.slug}`;

  return (
    <>
      <JsonLd
        schema={residenceListingSchema({
          name: `${listing.address}, ${listing.city}, ${listing.state}`,
          description: listing.description,
          url: pageUrl,
          image: `${site.company.website}${listing.heroImage.src}`,
          price: listing.price,
          streetAddress: listing.address,
          addressLocality: listing.city,
          addressRegion: listing.state,
          postalCode: listing.zip,
          numberOfBedrooms: listing.bedrooms,
          numberOfBathrooms: listing.bathrooms,
          floorSize: listing.squareFeet,
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: site.company.website },
          { name: "Listings", url: `${site.company.website}/listings` },
          { name: listing.address, url: pageUrl },
        ])}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={listing.heroImage.src}
          alt={listing.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/25 to-navy/75" />
        <div className="relative max-w-editorial mx-auto w-full px-6 lg:px-10 pb-14 md:pb-20">
          <Link
            href="/listings"
            className="inline-block text-[0.72rem] tracking-editorial uppercase text-softwhite/85 hover:text-terracotta transition-colors duration-300 mb-8"
          >
            ← All Listings
          </Link>
          <p className="eyebrow text-softwhite/85 mb-5">{listing.status}</p>
          <h1 className="font-display text-softwhite text-4xl md:text-6xl leading-[1.05] tracking-tight">
            {listing.address}
          </h1>
          <p className="mt-4 text-softwhite/90 text-lg">
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </div>
      </section>

      {/* Price + stats bar */}
      <section className="py-10 bg-navy">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-8">
          <p className="font-display text-softwhite text-4xl md:text-5xl tracking-tight">
            {formatPrice(listing.price)}
          </p>
          <div className="flex flex-wrap items-center gap-8 text-softwhite/85">
            <div>
              <p className="text-softwhite/50 text-xs tracking-widest uppercase mb-1">Beds</p>
              <p className="font-display text-2xl">{listing.bedrooms}</p>
            </div>
            <div>
              <p className="text-softwhite/50 text-xs tracking-widest uppercase mb-1">Baths</p>
              <p className="font-display text-2xl">{listing.bathrooms}</p>
            </div>
            <div>
              <p className="text-softwhite/50 text-xs tracking-widest uppercase mb-1">Square Feet</p>
              <p className="font-display text-2xl">{listing.squareFeet.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-softwhite/50 text-xs tracking-widest uppercase mb-1">Lot Size</p>
              <p className="font-display text-2xl">{listing.lotSizeSqft.toLocaleString()} sqft</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <ListingGallery images={listing.images} />
        </div>
      </section>

      {/* Description + details */}
      <section className="py-16 md:py-24 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-7">
            <p className="eyebrow text-terracotta mb-5">About This Home</p>
            <p className="text-charcoal/85 leading-relaxed text-[1.0625rem] whitespace-pre-line">
              {listing.description}
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow text-charcoal/60 mb-5">Key Features</p>
            <ul className="space-y-3">
              {listing.features.map((f, i) => (
                <li key={i} className="border-b border-charcoal/15 pb-3 text-charcoal/85">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Property details grid */}
      <section className="py-20 md:py-24 bg-beige/40">
        <div className="max-w-editorial mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/60 mb-10">Property Details</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-10">
            {listing.yearBuilt && (
              <div className="border-t border-charcoal/15 pt-6">
                <p className="eyebrow text-charcoal/60 mb-2">Year Built</p>
                <p className="text-charcoal/85">{listing.yearBuilt}</p>
              </div>
            )}
            <div className="border-t border-charcoal/15 pt-6">
              <p className="eyebrow text-charcoal/60 mb-2">Subdivision</p>
              <p className="text-charcoal/85">{listing.subdivision}</p>
            </div>
            <div className="border-t border-charcoal/15 pt-6">
              <p className="eyebrow text-charcoal/60 mb-2">MLS Number</p>
              <p className="text-charcoal/85">{listing.mlsNumber}</p>
            </div>
            {listing.hoaFee && (
              <div className="border-t border-charcoal/15 pt-6">
                <p className="eyebrow text-charcoal/60 mb-2">HOA</p>
                <p className="text-charcoal/85">{listing.hoaFee}</p>
              </div>
            )}
            <div className="border-t border-charcoal/15 pt-6">
              <p className="eyebrow text-charcoal/60 mb-2">Lot Size</p>
              <p className="text-charcoal/85">{listing.lotSizeSqft.toLocaleString()} sqft</p>
            </div>
            <div className="border-t border-charcoal/15 pt-6">
              <p className="eyebrow text-charcoal/60 mb-2">Listed By</p>
              <p className="text-charcoal/85">
                {listing.listingAgent.name}, {listing.listingAgent.brokerage}
                <br />
                {listing.listingAgent.phone}
              </p>
            </div>
          </div>
          <p className="mt-10 text-charcoal/50 text-xs max-w-2xl">
            Property details are sourced from the MLS listing and are believed accurate but not guaranteed.
            Contact {site.agent.fullName} at {site.company.phone} for the most current information.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Interested in This Property?"
        title={`Let's talk about ${listing.address}.`}
        body="Schedule a private showing or request more information — Laurel is happy to walk you through every detail."
        primaryCta={{ label: "Schedule a Showing", href: "/contact" }}
        secondaryCta={{ label: "All Listings", href: "/listings" }}
      />

      {/* Other listings */}
      {others.length > 0 && (
        <section className="py-20 md:py-28 bg-softwhite">
          <div className="max-w-editorial mx-auto px-6 lg:px-10">
            <p className="eyebrow text-charcoal/60 mb-10">Other Listings</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {others.map((o) => (
                <ListingCard key={o.id} listing={o} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
