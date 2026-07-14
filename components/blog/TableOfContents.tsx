"use client";

import { useState } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-10 border border-charcoal/12 bg-softwhite"
    >
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="md:hidden w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="eyebrow text-charcoal/70">In this article</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`text-charcoal/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Desktop heading */}
      <div className="hidden md:block px-6 pt-5 pb-1">
        <p className="eyebrow text-charcoal/70">In this article</p>
      </div>

      {/* List — always visible on md+, toggled on mobile */}
      <ol
        className={`px-6 pb-5 pt-2 space-y-2 ${open ? "block" : "hidden md:block"}`}
      >
        {items.map((item, i) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              className="text-[0.875rem] text-navy/80 hover:text-terracotta transition-colors duration-150 leading-snug block"
            >
              <span className="text-charcoal/35 mr-2 font-sans text-[0.75rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
