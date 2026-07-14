import type { TocItem } from "@/components/blog/TableOfContents";

// A content paragraph is treated as a heading if it has no sentence-ending
// punctuation and is short (≤ 80 chars). This matches how our blog-data.ts
// uses plain strings as section headers.
export function extractTocItems(content: string[]): TocItem[] {
  const items: TocItem[] = [];
  content.forEach((p) => {
    const trimmed = p.trim();
    if (
      trimmed.length > 0 &&
      trimmed.length <= 80 &&
      !trimmed.startsWith("- ") &&
      !trimmed.includes("\n- ") &&
      !/[.!?,;:]$/.test(trimmed) &&
      !/^[""'"]/.test(trimmed)
    ) {
      items.push({
        id: slugify(trimmed),
        text: trimmed,
        level: 2,
      });
    }
  });
  return items;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}
