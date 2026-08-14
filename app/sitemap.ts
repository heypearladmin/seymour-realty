import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts, getAllFaqs, slugifyFaq } from "@/lib/blog-data";
import { neighborhoods } from "@/lib/neighborhood-data";

const base = site.company.website.replace(/\/$/, "");
const now = new Date();

function parsePublishedAt(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? now : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  type Entry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  const staticPages: Entry[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/neighborhoods", priority: 0.9, changeFrequency: "monthly" },
    { path: "/relocation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
    { path: "/sms-consent", priority: 0.3, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const neighborhoodEntries: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${base}/neighborhoods/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: parsePublishedAt(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const faqEntries: MetadataRoute.Sitemap = getAllFaqs().map((faq) => ({
    url: `${base}/faq/${faq.postSlug}/${slugifyFaq(faq.question)}`,
    lastModified: parsePublishedAt(faq.postPublishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...neighborhoodEntries, ...blogEntries, ...faqEntries];
}
