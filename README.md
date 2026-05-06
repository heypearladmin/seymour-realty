# Laurel Seymour — Seymour Realty Group

A premium, editorial authority website for Laurel Seymour and Seymour Realty Group. Built as an Austin real-estate authority platform — not an IDX site — focused on SEO visibility, AI discoverability, content publishing, and personal-brand positioning.

> "You won't just get a Realtor. You'll get Austin decoded."

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (custom editorial palette + typography)
- **next/font** for Playfair Display + Inter
- **next/image** for optimized photography

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Brand assets

Drop the following into `public/images/` using these exact filenames:

- `seymour-realty-logo.svg` — primary logo (lion + door knocker mark)
- `seymour-realty-logo-light.svg` — light variant for dark backgrounds
- `laurel-seymour-headshot.jpg` — Laurel's editorial portrait (4:5 aspect works best)

Typographic placeholder SVGs are included so the site renders out of the box.

## Project structure

```
app/
  layout.tsx                     # Root layout, fonts, navbar/footer
  globals.css                    # Editorial typography, prose styles
  page.tsx                       # Homepage (hero, intro, micro-markets, journal, relocation, lifestyle, video, CTA)
  about/page.tsx                 # Editorial bio + philosophy
  blog/
    page.tsx                     # Journal index
    [slug]/page.tsx              # Long-form article view
  neighborhoods/
    page.tsx                     # Micro-market directory
    [slug]/page.tsx              # Individual neighborhood page
  relocation/page.tsx            # Austin relocation intelligence
  contact/page.tsx               # Contact details + form
components/
  Navbar.tsx                     # Top nav (sticky, transparent → softwhite on scroll)
  Footer.tsx                     # Brand footer with all socials + contact
  Hero.tsx                       # Cinematic hero (configurable height/align/CTAs)
  Section.tsx                    # Reusable editorial section wrapper
  BlogCard.tsx                   # Article card (standard + feature layouts)
  NeighborhoodCard.tsx           # Neighborhood card with overlay
  TestimonialCard.tsx            # Pull-quote / testimonial slot (no fake testimonials per brief)
  CTASection.tsx                 # Soft CTA band (navy/beige/softwhite)
lib/
  blog-data.ts                   # 6 full long-form posts (typed)
  neighborhood-data.ts           # 6 full neighborhood profiles (typed)
  site.ts                        # Brand, contact, social, navigation config
public/
  images/                        # Logo + headshot drop point
```

## Color palette

| Token        | Value     | Usage                       |
| ------------ | --------- | --------------------------- |
| `navy`       | `#1E2A38` | Headlines, dark sections    |
| `softwhite`  | `#F4F4F2` | Page background             |
| `charcoal`   | `#2B2B2B` | Body text                   |
| `terracotta` | `#C66B3D` | Accents, eyebrows, hovers   |
| `sage`       | `#7A8C7D` | Secondary accent (reserved) |
| `beige`      | `#D8CFC4` | Section backgrounds         |

## Typography

- **Display:** Playfair Display (loaded via `next/font`)
- **Sans:** Inter (loaded via `next/font`)
- Editorial drop-cap on the first paragraph of every long-form post (see `prose-editorial` in `globals.css`)

## SEO + AI discoverability

- Per-page `metadata` with title templates, descriptions, canonical URLs, OpenGraph, Twitter cards
- Article + Place + RealEstateAgent JSON-LD schema embedded on the relevant routes
- Semantic HTML throughout (`article`, `section`, `header`, `figure`, `address`, `nav`)
- Descriptive `alt` text on every image
- Clean URL structure (`/blog/[slug]`, `/neighborhoods/[slug]`)
- `generateStaticParams` for static generation of all blog and neighborhood routes

## Content

All six blog posts and all six neighborhoods are written long-form in `lib/blog-data.ts` and `lib/neighborhood-data.ts`. No lorem ipsum.

Per the brief, no testimonials have been fabricated. The `TestimonialCard` component exists for when real, attributable testimonials are added.

## What this site is

- An editorial authority platform
- A relocation intelligence hub
- A neighborhood content engine
- A personal brand showcase for Laurel Seymour

## What this site is NOT

- A brokerage IDX site
- A listing portal
- A template realtor page

## Deployment

Designed for Vercel. Push to a Git repo, connect the project, and ship.

```bash
npm run build
npm run start
```
