"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { servicesNav } from "@/lib/services-nav";

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimeout();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
        onFocus={() => {
          clearCloseTimeout();
          setOpen(true);
        }}
        className="flex items-center gap-1.5 text-[0.78rem] tracking-wider uppercase text-charcoal hover:text-terracotta transition-colors duration-300"
      >
        Services
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform duration-300 ease-soft ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ease-soft ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="w-[520px] bg-softwhite border border-charcoal/10">
          <div className="px-8 pt-7 pb-2">
            <p className="eyebrow text-charcoal/50">Services</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 px-8 pb-7">
            {[servicesNav.buying, servicesNav.selling].map((column) => (
              <div key={column.heading}>
                <p className="font-display text-lg text-navy tracking-tight mb-3 pb-2 border-b border-charcoal/10">
                  {column.heading}
                </p>
                <ul className="space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-[0.86rem] text-charcoal/80 hover:text-terracotta transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={column.href}
                  onClick={() => setOpen(false)}
                  className="inline-block mt-4 text-[0.7rem] tracking-wider uppercase text-terracotta border-b border-terracotta/50 pb-0.5 hover:border-terracotta transition-colors duration-200"
                >
                  {column.viewAllLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
