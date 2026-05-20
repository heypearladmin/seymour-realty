import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seymourrealtygroup.com"),
  title: {
    default: "Laurel Seymour | Austin Real Estate Authority",
    template: "%s | Laurel Seymour",
  },
  description:
    "Laurel Seymour is an Austin-native real estate advisor offering thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets. Seymour Realty Group.",
  keywords: [
    "Laurel Seymour",
    "Seymour Realty Group",
    "Austin real estate",
    "Austin relocation",
    "Tarrytown",
    "Westlake",
    "Barton Hills",
    "South Congress",
    "East Austin",
    "Zilker",
    "Bouldin",
    "Clarksville",
    "Rollingwood",
    "Austin micro-markets",
  ],
  authors: [{ name: "Laurel Seymour" }],
  creator: "Laurel Seymour",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seymourrealtygroup.com",
    siteName: "Laurel Seymour | Seymour Realty Group",
    title: "Austin. Understood.",
    description:
      "An Austin-native real estate advisor. Thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurel Seymour | Austin Real Estate Authority",
    description:
      "Hyperlocal Austin intelligence. Relocation strategy. Thoughtful planning for better moves.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Site-wide RealEstateAgent JSON-LD — address intentionally omitted; service
// area signals GEO without exposing a physical street address.
const siteSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.company.name,
  url: site.company.website,
  telephone: site.company.phone,
  email: site.company.email,
  image: `https://seymourrealtygroup.com${site.agent.headshot}`,
  areaServed: {
    "@type": "City",
    name: "Austin",
    containedInPlace: {
      "@type": "State",
      name: "Texas",
    },
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.youtube,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-softwhite text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
