import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    "Laurel Seymour is an Austin-native real estate authority. Hyperlocal neighborhood intelligence, relocation strategy, and editorial market insight from Seymour Realty Group.",
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
      "An Austin-native real estate authority. Hyperlocal neighborhood intelligence, relocation strategy, and editorial market insight.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurel Seymour | Austin Real Estate Authority",
    description:
      "Hyperlocal Austin intelligence. Relocation strategy. Neighborhood expertise.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-softwhite text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
