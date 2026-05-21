import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = {
  title: "Contact Laurel Seymour",
  description:
    "Begin a conversation with Laurel Seymour, Austin-native real estate advisor and founder of Seymour Realty Group. Thoughtful planning, strategic guidance, and clear direction.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { company, social, agent } = site;

  return (
    <>
      <JsonLd schema={localBusinessSchema()} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: company.website }, { name: "Contact", url: `${company.website}/contact` }])} />

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
                  className="font-display text-2xl text-navy link-underline"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow text-terracotta mb-3">Email</p>
                <a
                  href={company.emailHref}
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

          <form
            className="mt-14 grid gap-6"
            aria-label="Contact form"
            method="post"
            action="mailto:laurel@seymourrealtygroup.com"
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
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300"
                placeholder="(512) 000-0000"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-charcoal/60 block mb-2">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-navy transition-colors duration-300 resize-none"
                placeholder="A few sentences is plenty."
              />
            </label>

            {/* SMS consent — NOT pre-checked, per TCPA / A2P 10DLC */}
            <fieldset className="mt-2 border-t border-charcoal/15 pt-6">
              <legend className="sr-only">SMS messaging consent</legend>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="smsConsent"
                  value="yes"
                  defaultChecked={false}
                  className="mt-1 h-4 w-4 border border-charcoal/40 text-terracotta focus:ring-terracotta accent-terracotta"
                />
                <span className="text-sm leading-relaxed text-charcoal/85">
                  I agree to receive text messages from Laurel Seymour and
                  Seymour Realty Group at the phone number provided regarding
                  real estate inquiries and related services. Message
                  frequency varies. Message &amp; data rates may apply. Reply
                  STOP to unsubscribe. Reply HELP for help. By submitting this
                  form, you agree to our{" "}
                  <Link
                    href="/terms-of-service"
                    className="underline hover:text-terracotta"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-terracotta"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <p className="mt-5 text-xs leading-relaxed text-charcoal/65">
                By providing your phone number, you consent to receive calls
                and text messages from Laurel Seymour and Seymour Realty
                Group regarding your inquiry and related real estate services.
                See our{" "}
                <Link
                  href="/sms-consent"
                  className="underline hover:text-terracotta"
                >
                  SMS Consent
                </Link>{" "}
                page for full details. No mobile information will be shared
                with third parties/affiliates for marketing/promotional
                purposes.
              </p>
            </fieldset>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-block bg-navy text-softwhite px-7 py-3.5 text-[0.78rem] tracking-wider uppercase hover:bg-terracotta transition-colors duration-300"
              >
                Send Message
              </button>
              <p className="mt-4 text-xs text-charcoal/55">
                By submitting, you confirm the consent above.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
