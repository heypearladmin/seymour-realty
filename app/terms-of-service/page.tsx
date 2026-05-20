import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing the use of the Seymour Realty Group website, services, and SMS messaging.",
  alternates: { canonical: "/terms-of-service" },
};

const effective = "Effective May 2026";

export default function TermsOfServicePage() {
  const { company } = site;

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-softwhite">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/60 mb-6">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal/80 text-lg leading-relaxed">
            The terms governing the use of the Seymour Realty Group website,
            real estate services, and SMS messaging.
          </p>
          <p className="mt-6 text-charcoal/70 text-sm tracking-wider uppercase">
            {effective}
          </p>
        </div>
      </section>

      <article className="pb-28 md:pb-40">
        <div className="max-w-prose mx-auto px-6">
          <div className="prose-editorial">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the Seymour Realty Group website and
              services, you agree to be bound by these Terms of Service. If
              you do not agree, please do not use the site or services.
            </p>

            <h2>Services</h2>
            <p>
              Seymour Realty Group provides residential real estate services
              in Austin, Texas — including buyer representation, seller
              representation, relocation guidance, and related advisory work
              — as described on our site or in a written agreement. Specific
              deliverables, timelines, and fees are governed by the agreement
              signed at engagement. All real estate services are provided
              subject to applicable Texas real estate laws and regulations.
            </p>

            <h2>SMS Communications</h2>
            <p>
              If you provide your mobile number and check the consent box on
              our contact form, you expressly consent to receive recurring
              text messages from Laurel Seymour and Seymour Realty Group at
              the phone number you provided. Messages may include appointment
              reminders, onboarding instructions, account updates, follow-ups,
              and communications related to your inquiry or engagement.
            </p>
            <p>
              Message frequency varies. Message and data rates may apply
              depending on your carrier and plan.
            </p>

            <h2>Opt-Out and Help (STOP / HELP)</h2>
            <p>
              You can opt out of SMS messages at any time by replying{" "}
              <strong>STOP</strong> to any text message we send. After replying
              STOP, you will receive one final confirmation message and no
              further SMS messages will be sent. To resume messaging, reply{" "}
              <strong>START</strong>.
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
              . You may opt out of phone calls at any time by telling us you
              no longer wish to be called or by emailing us at the address
              above.
            </p>

            <h2>Message &amp; Data Rates</h2>
            <p>
              Message and data rates may apply to any SMS messages exchanged
              with Seymour Realty Group. Standard messaging rates from your
              wireless carrier apply. Seymour Realty Group is not responsible
              for any charges incurred from your wireless carrier.
            </p>
            <p>
              Supported carriers include all major U.S. carriers. Carriers are
              not liable for delayed or undelivered messages.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All Seymour Realty Group branding, copy, photography, design,
              and underlying website systems are the property of Seymour
              Realty Group or its licensors. Client deliverables are licensed
              or assigned according to the engagement agreement.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You agree not to use the website or services for any unlawful
              purpose, to attempt to disrupt the site, to misuse access
              provided to you, or to submit false contact information or
              non-consensual third-party contact information through any
              Seymour Realty Group form.
            </p>

            <h2>Disclaimers</h2>
            <p>
              Seymour Realty Group services and the website are provided on an
              as-is basis. Content is for general informational purposes only
              and does not constitute legal, financial, tax, or investment
              advice. Real estate decisions depend on individual circumstances
              and should always be made in consultation with qualified
              professionals. We make no guarantees about specific search
              rankings, AI citations, market outcomes, or property valuations.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Seymour Realty Group is
              not liable for any indirect, incidental, or consequential damages
              arising from use of the website or services, including any SMS
              communications.
            </p>

            <h2>External Links</h2>
            <p>
              This website may contain links to third-party websites and
              resources. Those sites are not under our control, and we are not
              responsible for their content, accuracy, privacy practices, or
              availability. Visiting linked sites is at your own risk and
              subject to the terms and policies of those sites.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas,
              without regard to its conflict-of-laws principles. Any dispute
              arising under these Terms shall be resolved in the state or
              federal courts located in Travis County, Texas.
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of Seymour Realty Group services is also governed by
              our{" "}
              <Link href="/privacy-policy" className="link-underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect information —
              including SMS opt-in data.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>{" "}
              or called to{" "}
              <a href={company.phoneHref} className="link-underline">
                {company.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
