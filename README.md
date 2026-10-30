# Kashi Rentals - Next.js 14 Website

A production-ready, SEO-optimized Next.js 14 website for a scooty and bike rental business in Varanasi (Kashi/Banaras). Built with TypeScript, Tailwind CSS, and designed to dominate local search results.

## 🎯 Features

- **SEO Optimized**: Comprehensive metadata, JSON-LD structured data, dynamic sitemap
- **8 Hyperlocal Location Pages**: Sigra, Mahmoorganj, BHU, Assi Ghat, Lanka, Cantt, Godowlia, Sarnath
- **Blog System**: MDX-based blog with travel guides, route maps, and local insights
- **Mobile Responsive**: Fully responsive design with mobile-first approach
- **Performance**: Static Site Generation (SSG) for optimal loading speeds
- **Conversion Optimized**: Floating WhatsApp CTA, clear booking flow
- **Multi-language Font Support**: Poppins font with Hindi/Devanagari support (हिंदी)
- **Google Analytics Integration**: Track visitors, page views, and user behavior
- **Proper Markdown Rendering**: Blog posts with tables, bold text, lists, and links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rental-vehicle

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
rental-vehicle/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   ├── blog/                     # Blog listing & dynamic routes
│   ├── locations/                # Dynamic location pages
│   ├── pricing/                  # Pricing page
│   ├── contact/                  # Contact form
│   ├── api/                      # API routes (mock availability)
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # Robots.txt
├── components/                   # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FloatingCTA.tsx
│   ├── LocationCard.tsx
│   ├── FAQItem.tsx
│   └── StructuredData.tsx
├── lib/                          # Data & utilities
│   ├── locations.ts              # Location data (8 areas)
│   └── pricing.ts                # Vehicle & pricing data
├── types/                        # TypeScript type definitions
│   └── index.ts
├── content/                      # MDX blog content
│   └── blog/
│       ├── best-way-to-travel-in-varanasi.mdx
│       ├── 2-day-varanasi-itinerary.mdx
│       └── ...
└── public/                       # Static assets
```

## 🔑 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **MDX**: Blog content with frontmatter
- **JSON-LD**: Structured data for SEO

## 📄 Pages Overview

### Core Pages
- `/` - Homepage with hero, locations, fleet, FAQ
- `/pricing` - Transparent pricing table with plans
- `/scooty-rental-in-varanasi` - Scooty-specific landing page
- `/bike-rental-in-varanasi` - Bike-specific landing page
- `/contact` - Contact form with WhatsApp integration
- `/about` - About the business
- `/terms-and-conditions` - T&C

### Dynamic Pages
- `/locations/[slug]` - 8 hyperlocal location pages
- `/blog/[slug]` - Blog post pages (MDX)

## 🎨 Customization

### Fonts & Multi-language Support

The website uses **Poppins** font with support for:
- ✅ Latin characters (English)
- ✅ Devanagari script (Hindi: हिंदी, Marathi, Nepali)
- ✅ Latin Extended (European languages)

The font is optimized for readability and loads efficiently with `font-display: swap`.

### Analytics & Visitor Tracking

Track your website visitors and understand user behavior:

1. **Create Google Analytics Account** (Free)
   - Go to [analytics.google.com](https://analytics.google.com)
   - Follow the setup wizard
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **View Your Data**
   - Real-time visitors
   - Most visited pages
   - User demographics
   - Traffic sources (Google search, social media, direct)

📖 **Detailed Guide**: See [ANALYTICS_SETUP.md](ANALYTICS_SETUP.md) for complete setup instructions and how to interpret your data.

### Updating Contact Information

**All contact information is now configured via environment variables!**

1. **For Development**: Edit `.env.local`
2. **For Production**: Set environment variables in your deployment platform (Vercel, Netlify, etc.)

```env
# .env.local or deployment environment variables
NEXT_PUBLIC_WHATSAPP_NUMBER=917348745464
NEXT_PUBLIC_BUSINESS_PHONE=+917348745464
NEXT_PUBLIC_BUSINESS_EMAIL=contact@awakenais.com
```

**Important**: After changing phone numbers, restart your dev server:
```bash
# Stop the server (Ctrl+C) and restart
npm run dev
```

### Updating Base URL

Update the `baseUrl` in `app/sitemap.ts`:

```typescript
const baseUrl = 'https://yourdomain.com';
```

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Blog Title"
description: "Meta description"
category: "Travel Guides"
date: "2024-01-20"
readTime: "8 min read"
keywords: ["keyword1", "keyword2"]
---

Your content here...
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

**Required for all deployments:**

In your Vercel/Netlify dashboard, add these environment variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=917348745464
NEXT_PUBLIC_BUSINESS_PHONE=+917348745464
NEXT_PUBLIC_BUSINESS_EMAIL=contact@awakenais.com
```

**Optional for future FastAPI integration:**

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

**How to add in Vercel:**
1. Go to Project Settings → Environment Variables
2. Add each variable (name and value)
3. Select all environments (Production, Preview, Development)
4. Redeploy the project

## 📊 SEO Features

- ✅ Comprehensive metadata on all pages
- ✅ JSON-LD structured data (LocalBusiness, FAQ, Breadcrumb)
- ✅ Dynamic sitemap generation
- ✅ robots.txt configured
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Internal linking strategy
- ✅ 8 hyperlocal landing pages
- ✅ Blog content for topical authority

## 🔗 Target Keywords

Primary keywords this website targets:
- scooty rental in varanasi
- bike rental in varanasi
- rent scooty in banaras
- bike on rent near BHU
- two wheeler rental kashi
- scooty rental near [location]

## 📝 TODO for Production

- [ ] Add real vehicle images to `/public/images/`
- [ ] Replace mock API with actual FastAPI backend
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Add real business photos
- [ ] Complete remaining 20 blog posts
- [ ] Set up automated backups
- [ ] Configure CDN for images

## 🤝 Contributing

This is a client project. For changes, please open an issue first.

## 📄 License

Proprietary - All rights reserved

## 📞 Support

For support, email contact@awakenais.com or call +91 7348745464
