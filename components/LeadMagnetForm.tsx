"use client";

import { useState } from "react";
import { getLeadMagnetBySlug } from "@/lib/lead-magnets";

interface LeadMagnetFormProps {
  magnetSlug: string;
  description?: string;
}

function trackEvent(name: string, category: string, label?: string) {
  const w = window as unknown as { gtag?: (cmd: string, event: string, params: object) => void };
  if (typeof window !== "undefined" && w.gtag) {
    w.gtag("event", name, { event_category: category, event_label: label });
  }
}

export default function LeadMagnetForm({ magnetSlug, description }: LeadMagnetFormProps) {
  const magnet = getLeadMagnetBySlug(magnetSlug);
  const [form, setForm] = useState({ firstName: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  if (!magnet) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, magnetSlug }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setPdfUrl(data.pdfUrl);
        trackEvent("lead_magnet_conversion", "Lead Magnet", magnetSlug);
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="my-16 md:my-20 border border-charcoal/15 bg-beige/25 px-6 md:px-10 py-10 md:py-12">
      <p className="eyebrow text-terracotta mb-3">Free Guide</p>
      <h3 className="font-display text-2xl md:text-3xl text-navy leading-snug tracking-tight mb-3 max-w-xl">
        {magnet.ctaLabel}
      </h3>
      {description && (
        <p className="text-charcoal/80 leading-relaxed mb-8 max-w-xl">{description}</p>
      )}

      {status === "success" && pdfUrl ? (
        <div className="max-w-md">
          <p className="font-display text-xl text-navy mb-2">Your guide is ready.</p>
          <p className="text-charcoal/75 leading-relaxed mb-6">
            Your free guide is ready to download.
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300"
          >
            Download Your Guide
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-5 max-w-2xl items-end">
          <label className="block sm:col-span-1">
            <span className="eyebrow text-charcoal/60 block mb-2 text-[0.66rem]">
              First name <span className="text-terracotta">*</span>
            </span>
            <input
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-charcoal/30 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
              placeholder="First name"
            />
          </label>
          <label className="block sm:col-span-1">
            <span className="eyebrow text-charcoal/60 block mb-2 text-[0.66rem]">
              Email <span className="text-terracotta">*</span>
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-charcoal/30 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
              placeholder="you@email.com"
            />
          </label>
          <label className="block sm:col-span-1">
            <span className="eyebrow text-charcoal/60 block mb-2 text-[0.66rem]">
              Phone <span className="text-charcoal/40">(optional)</span>
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-charcoal/30 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
              placeholder="(512) 000-0000"
            />
          </label>

          {status === "error" && (
            <p className="sm:col-span-3 text-sm text-red-600">{errorMsg}</p>
          )}

          <div className="sm:col-span-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto bg-navy text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : magnet.ctaLabel}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
