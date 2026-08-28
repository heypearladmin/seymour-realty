"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { getPostBySlug } from "@/lib/blog-data";
import { getNeighborhoodBySlug } from "@/lib/neighborhood-data";

function trackEvent(name: string, category: string) {
  const w = window as unknown as { gtag?: (cmd: string, event: string, params: object) => void };
  if (typeof window !== "undefined" && w.gtag) {
    w.gtag("event", name, { event_category: category });
  }
}

interface StickyCTAProps {
  pillText?: string;
}

// Classifies the current route into a sticky-CTA variant (Phase 7: buyer,
// seller, relocation, neighborhood, or general) so every page gets a
// contextual teaser without any page needing to pass one in manually.
function useContextualPillText(): string {
  const pathname = usePathname();
  return useMemo(() => {
    const agent = site.agent.firstName;

    if (pathname?.startsWith("/blog/")) {
      const slug = pathname.split("/")[2];
      const post = slug ? getPostBySlug(slug) : undefined;
      if (post?.pillar === "buying") return `Ready to Find Your Home? Talk to ${agent}`;
      if (post?.pillar === "selling") return "Curious What Your Home Is Worth?";
      if (post?.category === "Relocation") return `Moving to Austin? Talk to ${agent}`;
      if (post?.category === "Neighborhood Guide") return "Want to Know More About This Area?";
    }

    if (pathname?.startsWith("/neighborhoods/")) {
      const slug = pathname.split("/")[2];
      const n = slug ? getNeighborhoodBySlug(slug) : undefined;
      if (n) return `Want to Know More About ${n.name}?`;
    }

    if (pathname === "/services/buying") return `Ready to Find Your Home? Talk to ${agent}`;
    if (pathname === "/services/selling") return "Curious What Your Home Is Worth?";
    if (pathname === "/relocation") return `Moving to Austin? Talk to ${agent}`;

    return `Have Questions? Talk to ${agent}`;
  }, [pathname]);
}

export default function StickyCTA({ pillText }: StickyCTAProps) {
  const contextualPillText = useContextualPillText();
  const resolvedPillText = pillText ?? contextualPillText;
  const [open, setOpen] = useState(false);
  const [pillDismissed, setPillDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {/* Expanded card */}
      {open && (
        <div className="w-[300px] bg-softwhite border border-charcoal/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-navy text-softwhite px-5 py-4 flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-lg leading-tight">Need anything?</p>
              <p className="text-softwhite/70 text-[0.82rem] leading-snug mt-1">
                Call or send a message — whatever&apos;s easiest.
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="shrink-0 text-softwhite/70 hover:text-softwhite transition-colors duration-200 mt-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="py-2">
            <a
              href={site.company.phoneHref}
              onClick={() => trackEvent("phone_click", "StickyCTA")}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-beige/25 transition-colors duration-200"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.7 3.6.7.6 0 1 .5 1 1v3.6c0 .6-.4 1-1 1C10.6 21.2 2.8 13.4 2.8 4.1c0-.6.5-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.4 0 .8-.3 1l-2.2 2.1z"
                    stroke="#C66B3D"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-[0.92rem] font-medium text-navy leading-tight">
                  Call {site.agent.firstName}
                </span>
                <span className="block text-[0.8rem] text-charcoal/55 leading-tight mt-0.5">
                  {site.company.phone}
                </span>
              </span>
            </a>

            <Link
              href="/contact"
              onClick={() => {
                trackEvent("sticky_cta_message_click", "StickyCTA");
                setOpen(false);
              }}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-beige/25 transition-colors duration-200"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 11.5a8.4 8.4 0 0 1-1.2 4.4L21 20l-4.3-1.1a8.5 8.5 0 1 1 4.3-7.4Z"
                    stroke="#C66B3D"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="block text-[0.92rem] font-medium text-navy leading-tight">
                  Send a Message
                </span>
                <span className="block text-[0.8rem] text-charcoal/55 leading-tight mt-0.5">
                  Get a reply within a business day
                </span>
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Collapsed pill + FAB row */}
      <div className="flex items-center gap-3">
        {!open && !pillDismissed && (
          <div className="flex items-center gap-2 bg-softwhite border border-charcoal/10 rounded-full shadow-md pl-4 pr-2 py-2.5">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-[0.82rem] text-charcoal/85 hover:text-terracotta transition-colors duration-200 whitespace-nowrap"
            >
              {resolvedPillText}
            </button>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setPillDismissed(true)}
              className="shrink-0 w-5 h-5 flex items-center justify-center text-charcoal/40 hover:text-charcoal/70 transition-colors duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        <button
          type="button"
          aria-label={open ? "Close" : "Open contact options"}
          aria-expanded={open}
          onClick={() => {
            const next = !open;
            setOpen(next);
            if (next) trackEvent("sticky_cta_open", "StickyCTA");
          }}
          className="shrink-0 w-14 h-14 rounded-full bg-navy text-softwhite shadow-lg flex items-center justify-center hover:bg-terracotta transition-colors duration-300"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.7 3.6.7.6 0 1 .5 1 1v3.6c0 .6-.4 1-1 1C10.6 21.2 2.8 13.4 2.8 4.1c0-.6.5-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.4 0 .8-.3 1l-2.2 2.1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
