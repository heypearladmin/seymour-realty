"use client";

import Link from "next/link";
import { useState } from "react";
import { featuredNeighborhoods } from "@/lib/neighborhood-data";

interface MobileNeighborhoodsAccordionProps {
  onNavigate: () => void;
}

export default function MobileNeighborhoodsAccordion({ onNavigate }: MobileNeighborhoodsAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <p className="text-sm tracking-wider uppercase text-charcoal">Neighborhoods</p>

      <div className="mt-3 pl-1">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between text-left text-[0.8rem] tracking-wider uppercase text-charcoal/85 py-1"
        >
          Featured Neighborhoods
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className={`transition-transform duration-300 ease-soft ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <ul className="mt-2 mb-1 pl-3 space-y-3 border-l border-charcoal/10">
            {featuredNeighborhoods.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/neighborhoods/${n.slug}`}
                  onClick={onNavigate}
                  className="block text-sm text-charcoal/70 hover:text-terracotta transition-colors duration-200"
                >
                  {n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/neighborhoods" onClick={onNavigate} className="block text-sm text-terracotta">
                View All Neighborhoods →
              </Link>
            </li>
          </ul>
        )}
      </div>
    </li>
  );
}
