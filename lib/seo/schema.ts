import { site } from "@/lib/site";

type SchemaObject = Record<string, unknown>;

const base = site.company.website;

function withContext(schema: SchemaObject): SchemaObject {
  return { "@context": "https://schema.org", ...schema };
}

export function realEstateAgentSchema(): SchemaObject {
  return withContext({
    "@type": "RealEstateAgent",
    "@id": `${base}/#agent`,
    name: site.company.name,
    alternateName: site.agent.fullName,
    url: base,
    telephone: site.company.phone,
    email: site.company.email,
    description: `${site.agent.fullName} is an Austin-native real estate advisor offering thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets. ${site.company.name}.`,
    image: `${base}${site.agent.headshot}`,
    priceRange: "$$$",
    areaServed: [
      { "@type": "City", name: "Austin", containedInPlace: "Texas" },
      { "@type": "AdministrativeArea", name: "Travis County, Texas" },
      { "@type": "AdministrativeArea", name: "Williamson County, Texas" },
    ],
    founder: {
      "@type": "Person",
      "@id": `${base}/#person`,
      name: site.agent.fullName,
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function webSiteSchema(): SchemaObject {
  return withContext({
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: `${site.agent.fullName} | Austin Real Estate Authority`,
    description:
      "An Austin-native real estate advisor offering thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets.",
    inLanguage: "en-US",
    publisher: { "@id": `${base}/#agent` },
  });
}

export function personSchema(): SchemaObject {
  return withContext({
    "@type": "Person",
    "@id": `${base}/#person`,
    name: site.agent.fullName,
    url: base,
    jobTitle: site.agent.title,
    description: `${site.agent.fullName} is an Austin-native real estate advisor and founder of ${site.company.name}. Thoughtful planning, strategic guidance, and hyperlocal intelligence across Austin's micro-markets.`,
    worksFor: { "@id": `${base}/#agent` },
    image: {
      "@type": "ImageObject",
      url: `${base}${site.agent.headshot}`,
      caption: site.agent.headshotAlt,
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function localBusinessSchema(): SchemaObject {
  return withContext({
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${base}/#localbusiness`,
    name: site.company.name,
    url: base,
    telephone: site.company.phone,
    email: site.company.email,
    priceRange: "$$$",
    areaServed: [
      { "@type": "City", name: "Austin", containedInPlace: "Texas" },
      { "@type": "AdministrativeArea", name: "Travis County, Texas" },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.youtube,
    ],
  });
}

export function serviceSchema(params: {
  name: string;
  url: string;
  description: string;
  category?: string;
}): SchemaObject {
  return withContext({
    "@type": "Service",
    "@id": `${params.url}#service`,
    name: params.name,
    url: params.url,
    description: params.description,
    serviceType: params.category ?? "Real Estate Services",
    areaServed: [
      { "@type": "City", name: "Austin", containedInPlace: "Texas" },
      { "@type": "AdministrativeArea", name: "Travis County, Texas" },
    ],
    provider: { "@id": `${base}/#agent` },
  });
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): SchemaObject {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function blogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  keywords?: string[];
}): SchemaObject {
  return withContext({
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image
      ? {
          image: params.image.startsWith("http")
            ? params.image
            : `${base}${params.image}`,
        }
      : {}),
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    ...(params.keywords ? { keywords: params.keywords.join(", ") } : {}),
    author: { "@id": `${base}/#person` },
    publisher: { "@id": `${base}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  });
}

export function neighborhoodPageSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
}): SchemaObject {
  return withContext({
    "@type": "Article",
    "@id": `${params.url}#article`,
    headline: params.title,
    description: params.description,
    url: params.url,
    about: {
      "@type": "Place",
      name: params.title,
      description: params.description,
      containedInPlace: {
        "@type": "City",
        name: "Austin",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
    },
    ...(params.image
      ? {
          image: params.image.startsWith("http")
            ? params.image
            : `${base}${params.image}`,
        }
      : {}),
    author: { "@id": `${base}/#person` },
    publisher: { "@id": `${base}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  });
}
