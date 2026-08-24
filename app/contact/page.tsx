import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Laurel Seymour — Austin Real Estate Agent",
  description:
    "Reach Laurel Seymour, Austin Realtor and founder of Seymour Realty Group. Call, email, or send a message to start a conversation about buying or selling in Austin.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
