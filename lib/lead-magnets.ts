export interface LeadMagnet {
  slug: string;
  title: string;
  ctaLabel: string;
  pdfPath: string;
  category: "buyer" | "neighborhood";
  ghlSource: string;
  ghlTag: string;
}

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "flood-zones-austin",
    title: "Austin Flood Zones Guide",
    ctaLabel: "Get Your Free Austin Flood Zones Guide",
    pdfPath: "/downloads/seymour-realty-austin-flood-zones-homebuyers-guide.pdf",
    category: "buyer",
    ghlSource: "Website Buyer Guide — Flood Zones",
    ghlTag: "pdf-flood-zones-austin",
  },
  {
    slug: "homeowners-insurance-austin",
    title: "Austin Homeowners Insurance Guide",
    ctaLabel: "Get Your Free Austin Homeowners Insurance Guide",
    pdfPath: "/downloads/seymour-realty-austin-homeowners-insurance-guide-2026.pdf",
    category: "buyer",
    ghlSource: "Website Buyer Guide — Homeowners Insurance",
    ghlTag: "pdf-homeowners-insurance-austin",
  },
  {
    slug: "mortgage-rates-financing-austin",
    title: "Austin Mortgage Rates & Financing Guide",
    ctaLabel: "Get Your Free Austin Mortgage & Financing Guide",
    pdfPath: "/downloads/seymour-realty-austin-mortgage-rates-financing-guide-2026.pdf",
    category: "buyer",
    ghlSource: "Website Buyer Guide — Mortgage Rates & Financing",
    ghlTag: "pdf-mortgage-rates-financing-austin",
  },
  {
    slug: "neighborhood-tarrytown",
    title: "Tarrytown Neighborhood Guide",
    ctaLabel: "Get Your Free Tarrytown Neighborhood Guide",
    pdfPath: "/downloads/seymour-realty-tarrytown-austin-neighborhood-guide.pdf",
    category: "neighborhood",
    ghlSource: "Website Neighborhood Guide — Tarrytown",
    ghlTag: "pdf-neighborhood-tarrytown",
  },
  {
    slug: "neighborhood-east-austin",
    title: "East Austin Neighborhood Guide",
    ctaLabel: "Get Your Free East Austin Neighborhood Guide",
    pdfPath: "/downloads/seymour-realty-east-austin-neighborhood-guide.pdf",
    category: "neighborhood",
    ghlSource: "Website Neighborhood Guide — East Austin",
    ghlTag: "pdf-neighborhood-east-austin",
  },
  {
    slug: "neighborhood-westlake-rollingwood",
    title: "Westlake Hills & Rollingwood Neighborhood Guide",
    ctaLabel: "Get Your Free Westlake Hills & Rollingwood Neighborhood Guide",
    pdfPath: "/downloads/seymour-realty-westlake-hills-rollingwood-neighborhood-guide.pdf",
    category: "neighborhood",
    ghlSource: "Website Neighborhood Guide — Westlake Hills & Rollingwood",
    ghlTag: "pdf-neighborhood-westlake-rollingwood",
  },
];

export function getLeadMagnetBySlug(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((m) => m.slug === slug);
}
