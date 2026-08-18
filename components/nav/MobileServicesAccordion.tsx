"use client";

import Link from "next/link";
import { useState } from "react";
import { servicesNav } from "@/lib/services-nav";

interface MobileServicesAccordionProps {
  onNavigate: () => void;
}

export default function MobileServicesAccordion({ onNavigate }: MobileServicesAccordionProps) {
  const [openColumn, setOpenColumn] = useState<"buying" | "selling" | null>(null);

  return (
    <li>
      <p className="text-sm tracking-wider uppercase text-charcoal">Services</p>

      <div className="mt-3 space-y-1 pl-1">
        {(["buying", "selling"] as const).map((key) => {
          const column = servicesNav[key];
          const isOpen = openColumn === key;
          return (
            <div key={key} className="border-t border-charcoal/10 pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenColumn(isOpen ? null : key)}
                className="w-full flex items-center justify-between text-left text-[0.8rem] tracking-wider uppercase text-charcoal/85 py-1"
              >
                {column.heading}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-300 ease-soft ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isOpen && (
                <ul className="mt-2 mb-1 pl-3 space-y-3 border-l border-charcoal/10">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className="block text-sm text-charcoal/70 hover:text-terracotta transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={column.href}
                      onClick={onNavigate}
                      className="block text-sm text-terracotta"
                    >
                      {column.viewAllLabel} →
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </li>
  );
}
