# Gym Fitness — Premium Gym Website

A world-class, mobile-first, conversion-focused website for **Gym Fitness**, the most premium fitness center in Sheikhpura, Bihar.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom luxury dark/red theme
- **Framer Motion** animations
- **Lucide React** + **React Icons** for iconography
- Fully **SEO-optimized** with structured data (LocalBusiness schema)
- **Vercel-ready** (zero-config deploy)

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Why Us, Programs, Plans, Transformations, Testimonials, BMI Calculator, Gallery, Trainers, Diet Tips, Instagram, Map, FAQ, Contact |
| `/about` | Story, Mission & Vision, Achievements, Facilities |
| `/membership` | Pricing plans + FAQ + Contact |
| `/trainers` | Full trainer profiles with certifications |
| `/gallery` | Full gallery + Transformations |
| `/contact` | Contact form + Map |

## Features

- Sticky animated navbar with mobile drawer
- Loading screen
- Floating WhatsApp + Click-to-Call buttons
- BMI Calculator (live)
- Animated counters
- Pricing cards with featured plan highlighting
- Auto-rotating testimonial slider
- Lightbox gallery
- Marquee bar
- Inquiry form (sends to WhatsApp pre-filled)
- Google Maps embed
- LocalBusiness JSON-LD structured data
- Sitemap + robots
- Custom 404

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel by importing the repository. No environment variables required.

## Configuration

All business content lives in `src/lib/site.ts` — gym name, contact info, plans, trainers, testimonials, FAQs, etc. Update once, reflected everywhere.

## Business Info

- **Address:** Chandani Chowk, VIP Rd, near Lazeez Junglee Rasoi, Sheikhpura, Bihar 811105
- **Phone:** +91 91020 21034
- **Hours:** Daily 5:00 AM – 10:00 PM
- **Rating:** 4.8/5 (71 reviews)
