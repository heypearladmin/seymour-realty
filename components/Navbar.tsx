"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        scrolled
          ? "bg-softwhite/95 backdrop-blur-sm border-b border-charcoal/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-editorial mx-auto px-6 lg:px-10 flex items-center justify-between h-20"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-3 leading-tight"
          aria-label="Laurel Seymour — Seymour Realty Group home"
        >
          <Image
            src={site.logo.dark}
            alt={site.logo.alt}
            width={48}
            height={48}
            className="h-9 w-auto md:h-11"
            priority
          />
          <span className="hidden sm:flex flex-col">
            <span className="font-display text-lg leading-none tracking-tight text-navy">
              Laurel Seymour
            </span>
            <span className="text-[0.58rem] tracking-editorial uppercase text-charcoal/60 mt-1">
              Seymour Realty Group
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.78rem] tracking-wider uppercase text-charcoal hover:text-terracotta transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block text-[0.78rem] tracking-wider uppercase border border-charcoal/30 px-5 py-2.5 hover:bg-navy hover:text-softwhite hover:border-navy transition-colors duration-300"
        >
          Work With Laurel
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-charcoal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-charcoal mb-1.5" />
          <span className="block w-6 h-px bg-charcoal mb-1.5" />
          <span className="block w-4 h-px bg-charcoal" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-charcoal/10 bg-softwhite">
          <ul className="px-6 py-6 space-y-5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm tracking-wider uppercase text-charcoal"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-block text-[0.78rem] tracking-wider uppercase border border-charcoal/30 px-5 py-2.5"
                onClick={() => setOpen(false)}
              >
                Work With Laurel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
