import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Seymour Realty Group Privacy Policy — how we collect, use, and protect your information, including SMS opt-in data for A2P 10DLC compliance.",
  alternates: { canonical: "/privacy-policy" },
};

const effective = "Effective May 2026";

export default function PrivacyPolicyPage() {
  const { company } = site;

  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-softwhite">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="eyebrow text-charcoal/60 mb-6">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-charcoal/80 text-lg leading-relaxed">
            A clear, plain-language summary of how Seymour Realty Group
            collects, uses, and protects information — including SMS opt-in
            data for A2P 10DLC compliance.
          </p>
          <p className="mt-6 text-charcoal/70 text-sm tracking-wider uppercase">
            {effective}
          </p>
        </div>
      </section>

      <article className="pb-28 md:pb-40">
        <div className="max-w-prose mx-auto px-6">
          <div className="prose-editorial">
            <h2>Overview</h2>
            <p>
              Seymour Realty Group (&ldquo;Seymour Realty Group,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is the
              real estate practice of Laurel Seymour, serving buyers and
              sellers across Austin, Texas. This Privacy Policy describes how
              we collect and use information across our website at
              seymourrealtygroup.com and our client engagements.
            </p>
            <p>
              We aim to collect the least information necessary to deliver our
              services, and we never sell personal information.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your first
              name, last name, email address, phone number, and message
              contents when you submit a form, schedule a conversation, or
              become a client.
            </p>
            <p>
              We also collect limited technical information automatically,
              such as device, browser, IP address, and usage data, to improve
              site performance and security.
            </p>

            <h2>How We Use Information</h2>
            <p>
              We use the information you provide to respond to your inquiries,
              schedule and deliver services, send transactional communications,
              and — when you have given consent — to send conversational text
              messages by SMS or follow-up communications by email or phone
              related to your inquiry or active real estate engagement.
            </p>
            <p>We do not sell personal information to third parties.</p>

            <h2>SMS &amp; Phone Communications</h2>
            <p>
              By providing your phone number and checking the consent box on
              our contact form, you expressly consent to receive recurring
              text messages and phone calls from Laurel Seymour and Seymour
              Realty Group, at the phone number you provided, regarding real
              estate inquiries, appointments, and related services.
            </p>
            <p>
              Message frequency varies. Message and data rates may apply. You
              can opt out of SMS at any time by replying <strong>STOP</strong>{" "}
              to any text message. Reply <strong>HELP</strong> for help, or
              contact us at{" "}
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>
              .
            </p>
            <p>
              <strong>
                No mobile information will be shared with third
                parties/affiliates for marketing/promotional purposes. All
                other categories exclude text messaging originator opt-in data
                and consent; this information will not be shared with any
                third parties.
              </strong>
            </p>

            <h2>Cookies and Analytics</h2>
            <p>
              Our website uses essential cookies and privacy-respecting
              analytics to understand site performance. You can configure your
              browser to refuse cookies, though this may affect site
              functionality.
            </p>

            <h2>How We Protect Information</h2>
            <p>
              We use industry-standard administrative, technical, and physical
              safeguards to protect personal information. No method of
              transmission or storage is 100% secure, but we continually work
              to maintain reasonable safeguards.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time. To opt out of SMS, reply STOP
              to any text message. To opt out of email communications, reply
              to any email with the word UNSUBSCRIBE or contact us directly.
              For any other request, contact us at{" "}
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>{" "}
              and we will respond promptly.
            </p>

            <h2>Children&rsquo;s Privacy</h2>
            <p>
              Seymour Realty Group&rsquo;s services are not directed to
              children under 13, and we do not knowingly collect personal
              information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the &ldquo;Effective&rdquo;
              date above and, where appropriate, by additional notice.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this Privacy Policy can be sent to{" "}
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
              </Link>{" "}
              and{" "}
              <Link href="/sms-consent" className="link-underline">
                SMS Consent
              </Link>{" "}
              for additional detail.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
