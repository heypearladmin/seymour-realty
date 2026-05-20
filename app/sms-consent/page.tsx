import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "SMS Consent",
  description:
    "How text messaging works with Laurel Seymour and Seymour Realty Group — what messages you receive, how often, how to opt out, and how your information is protected.",
  alternates: { canonical: "/sms-consent" },
};

const effective = "Effective May 2026";

export default function SmsConsentPage() {
  const { company, compliance } = site;

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-softwhite">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/60 mb-6">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            SMS Consent
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal/80 text-lg leading-relaxed">
            A plain-language summary of how text messaging works with Laurel
            Seymour and Seymour Realty Group — what messages you receive, how
            often, how to opt out, and how your information is protected.
          </p>
          <p className="mt-6 text-charcoal/70 text-sm tracking-wider uppercase">
            {effective}
          </p>
        </div>
      </section>

      <article className="pb-28 md:pb-40">
        <div className="max-w-prose mx-auto px-6">
          <div className="prose-editorial">
            <h2>How You Opt In</h2>
            <p>
              You opt in to receive text messages from us by affirmatively
              checking the SMS consent checkbox on our contact form. The
              checkbox is not pre-selected. Submitting a form without checking
              the box means you have not opted in to text messaging.
            </p>
            <p>The exact consent language on our form is:</p>
            <p>
              <em>&ldquo;{compliance.smsConsent}&rdquo;</em>
            </p>

            <h2>What Messages You&rsquo;ll Receive</h2>
            <p>
              We send conversational text messages only — meaning real,
              two-way messages tied to a real estate conversation you have
              initiated or are actively engaged in. We do not send promotional
              blasts, mass marketing, or unrelated content.
            </p>
            <p>Typical messages include:</p>
            <ul>
              <li>Appointment reminders</li>
              <li>Inquiry follow-ups</li>
              <li>Relocation consultations</li>
              <li>Showing and meeting confirmations</li>
              <li>Real estate conversations and questions you have asked</li>
              <li>
                Quick updates on properties, neighborhoods, or steps in a
                transaction
              </li>
            </ul>

            <h2>Message Frequency</h2>
            <p>
              Message frequency varies based on your conversation and where
              you are in the process. Some clients receive a handful of
              messages over the course of a search or a transaction; others
              receive more or fewer depending on what is happening.
            </p>

            <h2>Message &amp; Data Rates</h2>
            <p>
              Message and data rates may apply based on your mobile carrier
              and plan. Seymour Realty Group is not responsible for any
              charges your mobile carrier applies for sending or receiving
              messages.
            </p>

            <h2>How to Opt Out (STOP / HELP)</h2>
            <p>
              You can opt out of SMS at any time by replying{" "}
              <strong>STOP</strong> to any text message we send. After
              replying STOP, you will receive one final confirmation message
              and no further SMS messages will be sent. To resume messaging,
              reply <strong>START</strong>.
            </p>
            <p>
              Reply <strong>HELP</strong> to any text message for help, or
              contact us at{" "}
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>{" "}
              or{" "}
              <a href={company.phoneHref} className="link-underline">
                {company.phone}
              </a>
              .
            </p>

            <h2>How Your Mobile Information Is Handled</h2>
            <p>
              <strong>
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All
                other categories exclude text messaging originator opt-in data
                and consent; this information will not be shared with any
                third parties.
              </strong>
            </p>
            <p>
              Mobile information is used solely to provide the messaging
              services you have requested, and is handled consistent with our{" "}
              <Link href="/privacy-policy" className="link-underline">
                Privacy Policy
              </Link>
              . Consent records — including the date, source, and exact text
              of the consent — are retained as part of our compliance records.
            </p>

            <h2>Supported Carriers</h2>
            <p>
              Supported carriers include all major U.S. carriers. Carriers are
              not liable for delayed or undelivered messages.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about SMS messaging can be sent to{" "}
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>{" "}
              or called to{" "}
              <a href={company.phoneHref} className="link-underline">
                {company.phone}
              </a>
              . See also our{" "}
              <Link href="/terms-of-service" className="link-underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
