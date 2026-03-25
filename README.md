# Strasan Group Limited – Next.js Website

A full Next.js 14 (App Router) implementation for Strasan Group Limited,
a civil engineering consultancy based in Nairobi, Kenya.

## Pages

| Route              | Description |
|--------------------|-------------|
| `/`                | Home – hero, blog, white papers, project showcases, seminars, revenue zone |
| `/services`        | 8 civil engineering service lines with deliverable lists + process steps |
| `/knowledge`       | White papers & technical library |
| `/shop`            | Digital shop – worksheets, handbook, CAD downloads, bundle CTA |
| `/team`            | Founders profiles + full engineering team |
| `/blog`            | Blog listing with featured post |
| `/blog/[slug]`     | Single blog post with sidebar + related articles |
| `/prices`          | Kenya KNBS Construction Input Price Tracker (CIPI) |

## Tech Stack
- Next.js 14 (App Router, Static Generation)
- TypeScript
- Tailwind CSS (custom forest + gold color system)
- Lucide React icons
- Unsplash images (no API key needed)

## Setup

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Customisation

All content lives in `lib/data.ts` — edit team, services, blog posts, white papers,
shop products, seminars, and price data without touching any UI files.
