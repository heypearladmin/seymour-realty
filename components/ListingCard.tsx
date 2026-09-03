import Image from "next/image";
import Link from "next/link";
import { Listing, formatPrice } from "@/lib/listings-data";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-beige/30">
        <Image
          src={listing.heroImage.src}
          alt={listing.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-navy text-softwhite text-[0.68rem] tracking-editorial uppercase px-3 py-1.5">
            {listing.status}
          </span>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-display text-2xl text-navy tracking-tight">
          {formatPrice(listing.price)}
        </p>
        <p className="mt-1 text-charcoal/85">
          {listing.address}
        </p>
        <p className="text-charcoal/60 text-sm">
          {listing.city}, {listing.state} {listing.zip}
        </p>
        <div className="mt-3 flex items-center gap-4 text-[0.82rem] text-charcoal/70">
          {listing.squareFeet ? (
            <>
              <span>{listing.bedrooms} Beds</span>
              <span className="w-px h-3 bg-charcoal/20" aria-hidden="true" />
              <span>{listing.bathrooms} Baths</span>
              <span className="w-px h-3 bg-charcoal/20" aria-hidden="true" />
              <span>{listing.squareFeet.toLocaleString()} Sqft</span>
            </>
          ) : (
            <span>{listing.lotSizeSqft.toLocaleString()} Sqft Lot</span>
          )}
        </div>
        <p className="mt-4 text-[0.72rem] tracking-editorial uppercase text-terracotta inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          View Property <span aria-hidden="true">→</span>
        </p>
      </div>
    </Link>
  );
}
