"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";


export default function ContactPage() {
  const { company, social, agent } = site;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsentTransactional: false,
    smsConsentMarketing: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function trackEvent(name: string, category: string) {
    const w = window as unknown as { gtag?: (cmd: string, event: string, params: object) => void };
    if (typeof window !== "undefined" && w.gtag) {
      w.gtag("event", name, { event_category: category });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: fd.get("firstName") as string || form.firstName,
      lastName: fd.get("lastName") as string || form.lastName,
      email: fd.get("email") as string || form.email,
      phone: fd.get("phone") as string || form.phone,
      smsConsentTransactional: fd.get("smsConsentTransactional") === "on" || form.smsConsentTransactional,
      smsConsentMarketing: fd.get("smsConsentMarketing") === "on" || form.smsConsentMarketing,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        trackEvent("form_submit", "Contact");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>

      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-softwhite">
        <div className="max-w-editorial mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-7">
            <p className="eyebrow text-charcoal/60 mb-6">Contact</p>
            <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.04] tracking-tight">
              Clarity first. Move second.
            </h1>
            <p className="mt-8 max-w-xl text-charcoal/85 text-lg leading-relaxed">
              Whether you&apos;re months away from buying, just beginning to
              think about Austin, or considering selling a home you love —
              I&apos;d be glad to hear what you&apos;re planning. No pressure,
              no pitch. Just a clear, informed conversation.
            </p>

            <div className="mt-14 grid sm:grid-cols-2 gap-y-10 gap-x-12">
              <div>
                <p className="eyebrow text-terracotta mb-3">Phone</p>
                <a
                  href={company.phoneHref}
                  onClick={() => trackEvent("phone_click", "Contact")}
                  className="font-display text-2xl text-navy link-underline"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow text-terracotta mb-3">Email</p>
                <a
                  href={company.emailHref}
                  onClick={() => trackEvent("email_click", "Contact")}
                  className="font-display text-2xl text-navy link-underline break-words"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="eyebrow text-terracotta mb-3">Service Area</p>
                <p className="font-display text-2xl text-navy leading-snug">
                  {company.serviceArea}
                </p>
              </div>
              <div>
                <p className="eyebrow text-terracotta mb-3">Website</p>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-navy link-underline break-words"
                >
                  seymourrealtygroup.com
                </a>
              </div>
            </div>

            <div className="mt-16">
              <p className="eyebrow text-charcoal/60 mb-5">Connect</p>
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.78rem] tracking-editorial uppercase">
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige/40">
              <Image
                src={agent.headshot}
                alt={agent.headshotAlt}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-[0.72rem] tracking-editorial uppercase text-charcoal/60">
              Laurel Seymour · Founder, Seymour Realty Group
            </p>
          </div>
        </div>
      </section>

      {/* Contact form — TCPA / A2P compliant */}
      <section className="py-20 md:py-28 bg-beige/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-terracotta mb-5 text-center">
            Send a Note
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-navy leading-[1.1] tracking-tight text-center">
            A few details, in your own words.
          </h2>
          <p className="mt-6 text-charcoal/80 leading-relaxed text-center max-w-xl mx-auto">
            Share what&apos;s on your mind. I read every message personally
            and respond within one business day.
          </p>

          {status === "success" ? (
            <div className="mt-14 py-16 text-center">
              <p className="font-display text-2xl text-navy mb-4">Thank you.</p>
              <p className="text-charcoal/75 leading-relaxed">
                Your message has been received. Laurel will be in touch within one business day.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ firstName: "", lastName: "", email: "", phone: "", smsConsentTransactional: false, smsConsentMarketing: false });
                }}
                className="mt-8 inline-block text-[0.78rem] tracking-wider uppercase underline text-charcoal/60 hover:text-terracotta transition-colors duration-300"
              >
                Submit another message
              </button>
            </div>
          ) : (
            <form
              className="mt-14 grid gap-6"
              aria-label="Contact form"
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="block">
                  <span className="eyebrow text-charcoal/60 block mb-2">
                    First name <span className="text-terracotta">*</span>
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
                    placeholder="First name"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-charcoal/60 block mb-2">
                    Last name <span className="text-terracotta">*</span>
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
                    placeholder="Last name"
                  />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow text-charcoal/60 block mb-2">
                  Email <span className="text-terracotta">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
                  placeholder="you@email.com"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-charcoal/60 block mb-2">
                  Phone number <span className="text-terracotta">*</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
                  placeholder="(512) 000-0000"
                />
              </label>

              {/* SMS consent — NOT pre-checked, per TCPA / A2P 10DLC */}
              <fieldset className="mt-2 border-t border-charcoal/15 pt-6 grid gap-5">
                <legend className="sr-only">SMS messaging consent</legend>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsentTransactional"
                    checked={form.smsConsentTransactional}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 border border-charcoal/40 text-terracotta focus:ring-terracotta accent-terracotta"
                  />
                  <span className="text-sm leading-relaxed text-charcoal/85">
                    I consent to receive non-marketing text messages from{" "}
                    <strong>Seymour Realty Group</strong> regarding real estate
                    inquiries and related services. Message frequency varies.
                    Message &amp; data rates may apply. Reply HELP for
                    assistance, reply STOP to opt out.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsentMarketing"
                    checked={form.smsConsentMarketing}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 border border-charcoal/40 text-terracotta focus:ring-terracotta accent-terracotta"
                  />
                  <span className="text-sm leading-relaxed text-charcoal/85">
                    I consent to receive marketing text messages from{" "}
                    <strong>Seymour Realty Group</strong> regarding Austin real
                    estate listings, market updates, and promotional offers.
                    Message frequency varies. Message &amp; data rates may
                    apply. Reply HELP for assistance, reply STOP to opt out.
                  </span>
                </label>
              </fieldset>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-navy text-softwhite py-4 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>
                <p className="mt-5 text-xs text-center text-charcoal/55">
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-terracotta"
                  >
                    Privacy Policy
                  </Link>
                  {" | "}
                  <Link
                    href="/terms-of-service"
                    className="underline hover:text-terracotta"
                  >
                    Terms and Conditions
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
