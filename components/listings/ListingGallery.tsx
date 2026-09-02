"use client";

import Image from "next/image";
import { useState } from "react";
import { ListingImage } from "@/lib/listings-data";

interface ListingGalleryProps {
  images: ListingImage[];
}

export default function ListingGallery({ images }: ListingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div>
      <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-beige/30">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
          priority={activeIndex === 0}
        />
      </div>
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`View photo ${i + 1}: ${image.alt}`}
            aria-current={i === activeIndex}
            className={`relative aspect-square overflow-hidden transition-opacity duration-300 ${
              i === activeIndex ? "opacity-100 ring-2 ring-terracotta" : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
