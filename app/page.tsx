import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { locations } from '@/lib/locations';
import { vehicles } from '@/lib/pricing';
import { siteConfig, getWhatsAppBookingUrl, getWhatsAppPartnerUrl } from '@/lib/config';
import QuickBookWidget from '@/components/QuickBookWidget';

// Dynamic imports for performance
const LocationCard = dynamic(() => import('@/components/LocationCard'), {
  loading: () => <div className="h-28 bg-dark-50 animate-pulse rounded-2xl border border-dark-200/50"></div>
});
const FAQItem = dynamic(() => import('@/components/FAQItem'));
const StructuredData = dynamic(() => import('@/components/StructuredData'));
const ReviewCarousel = dynamic(() => import('@/components/ReviewCarousel'));

export const metadata: Metadata = {
  title: "Scooty & Bike Rental in Varanasi | Starting ₹299/day • Verified Fleets",
  description: "Book affordable scooty and bike rentals in Varanasi from verified local fleets. Honda Activa, TVS Jupiter, Royal Enfield near Cantt, BHU, Assi Ghat, Sigra. By Awaken AI.",
  keywords: [
    "scooty rental in varanasi",
    "bike rental in varanasi",
    "rent scooty in banaras",
    "rent bike in kashi",
    "two wheeler rental varanasi",
    "self drive scooty varanasi",
    "affordable bike rental banaras",
    "activa on rent in varanasi",
    "kashi rentals awaken ai"
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Scooty & Bike Rental in Varanasi | Starting ₹299/day • Kashi Rentals",
    description: "Explore Varanasi with freedom. Affordable scooty & bike rental from verified local fleets. Instant WhatsApp confirmation in 2 mins.",
    url: siteConfig.url,
    type: 'website',
  },
};

const faqs = [
  {
    question: "What is the minimum age and requirement to rent a two-wheeler?",
    answer: "You must be at least 18 years old and hold a valid government-issued two-wheeler driving license. Both Indian and international driving permits are accepted."
  },
  {
    question: "Do I need to pay a security deposit?",
    answer: "Yes, a refundable security deposit of ₹1,000 to ₹1,500 is required at pickup. It is 100% refunded immediately via UPI or cash upon returning the vehicle in safe condition."
  },
  {
    question: "What documents are needed for rental?",
    answer: "You need your original Driving License, an Aadhar Card (or Passport / Voter ID), and hotel booking confirmation or local address proof. We take minimal verification in under 5 minutes."
  },
  {
    question: "Are helmets provided with the rental?",
    answer: "Yes, one sanitized ISI-marked helmet is provided completely FREE with every scooty and bike rental. An additional pillion helmet is available for a nominal ₹50/day."
  },
  {
    question: "What happens if a vehicle breaks down or has a flat tire?",
    answer: "We provide 24/7 roadside assistance across Varanasi. Simply send us a WhatsApp location, and our partner network will dispatch help or replace your vehicle within 2 hours."
  },
  {
    question: "Can I pick up at Varanasi Cantt Railway Station and return near Assi Ghat?",
    answer: "Yes! Flexible pickup and drop-off can be arranged across our 12+ hubs including Cantt Station, Assi Ghat, Sigra, and BHU Lanka. Please request flexible drop when booking."
  },
  {
    question: "Is fuel included in the rental price?",
    answer: "No, fuel is not included. Vehicles are provided with sufficient fuel to reach the nearest petrol station, and you can return with the same level or settle consumed fuel directly."
  },
  {
    question: "Can I take the scooty or bike outside Varanasi to Sarnath or Chunar?",
    answer: "Yes! Trips to Sarnath, Ramnagar Fort, and Chunar are fully permitted. For longer inter-city trips, kindly inform our desk during WhatsApp confirmation."
  }
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kashi Rentals by Awaken AI",
    "image": `${siteConfig.url}/logo.png`,
    "description": "Affordable scooty and bike rental marketplace in Varanasi. Rent verified two-wheelers starting ₹299/day with doorstep delivery and 24/7 support.",
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "priceRange": "₹299 - ₹799",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Varanasi Cantonment Railway Station, Mahmoorganj",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "221002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.contact.coordinates.latitude,
      "longitude": siteConfig.contact.coordinates.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": siteConfig.contact.businessHours.open,
      "closes": siteConfig.contact.businessHours.close
    },
    "areaServed": ["Varanasi", "Banaras", "Kashi", "Sigra", "BHU", "Assi Ghat", "Lanka", "Sarnath", "Godowlia"]
  };

  return (
    <>
      <StructuredData data={localBusinessSchema} />

      {/* ───────────────────────────────────────────
          1. Hero Section: Modern Minimal Landing Page
      ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-dark-50/70 via-white to-white">
        {/* Subtle Ambient Radial Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary-500/10 rounded-full blur-[110px] pointer-events-none -z-10" 
          aria-hidden="true"
        />

        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-dark-200/80 shadow-subtle mb-6 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-dark-800">
                Live in Varanasi • 15-Minute Pickup Available
              </span>
              <span className="text-[10px] uppercase font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                Starting ₹299/day
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl mb-5 text-dark-950 font-extrabold tracking-tight">
              Rent Scooties & Bikes in Varanasi <br className="hidden sm:inline" />
              <span className="text-primary-600">From Verified Local Fleets</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Experience Kashi at your own pace. Clean, serviced Honda Activas, TVS Jupiters, and Royal Enfields with free helmets, zero hidden fees, and doorstep delivery.
            </p>

            {/* Interactive Quick Booking Widget */}
            <QuickBookWidget locations={locations} />

            {/* Micro Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-dark-600">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Sanitized Helmet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Roadside Assistance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Refundable Deposit</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          2. Verified Vehicle Fleet Showcase
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
                <span>🛵</span>
                <span>Verified Inventory</span>
              </div>
              <h2 className="heading-lg">Available Fleet for Rent</h2>
              <p className="text-dark-600 text-sm md:text-base mt-2">
                All vehicles pass an 18-point inspection before every customer handover
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <Link href="/scooty-rental-in-varanasi" className="btn-outline text-xs py-2 px-4">
                Scooty Fleet (₹299)
              </Link>
              <Link href="/bike-rental-in-varanasi" className="btn-outline text-xs py-2 px-4">
                Bike Fleet (₹499+)
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.slice(0, 6).map((vehicle, index) => {
              const bookingUrl = getWhatsAppBookingUrl({
                vehicle: `${vehicle.name} (₹${vehicle.pricePerDay}/day)`,
                duration: 1
              });

              return (
                <div
                  key={index}
                  className="bg-white border border-dark-200/80 rounded-2xl p-6 sm:p-7 shadow-subtle hover:border-dark-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Badge row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-pill text-[11px] uppercase tracking-wider font-semibold">
                        {vehicle.type === 'scooty' ? '🛵 Scooty' : '🏍️ Motorcycle'}
                      </span>
                      <span className="badge-verified text-[11px]">
                        ✓ Verified Fleet
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-dark-950 mb-1">
                      {vehicle.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1.5 my-3">
                      <span className="text-3xl font-extrabold text-primary-600 tracking-tight">
                        ₹{vehicle.pricePerDay}
                      </span>
                      <span className="text-xs font-medium text-dark-500">
                        / 24 hours
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="py-4 border-t border-b border-dark-100 my-4 space-y-2">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-dark-700">
                          <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center text-xs sm:text-sm py-2.5 rounded-xl font-semibold justify-center"
                    >
                      <span>Book on WhatsApp</span>
                      <span>→</span>
                    </a>
                    <Link
                      href={vehicle.type === 'scooty' ? '/scooty-rental-in-varanasi' : '/bike-rental-in-varanasi'}
                      className="text-center text-xs text-dark-500 hover:text-dark-900 transition-colors py-1"
                    >
                      View Specs & Policies
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="btn-secondary text-sm">
              <span>View All Rates & Long-Term Discounts</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          3. How It Works: 3-Step Simple Roadmap
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
              <span>⚡</span>
              <span>Fast & Frictionless</span>
            </div>
            <h2 className="heading-lg">How Kashi Rentals Works</h2>
            <p className="text-dark-600 text-sm md:text-base mt-2">
              Get on the road in under 15 minutes with our streamlined booking flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-7 rounded-2xl border border-dark-200/80 shadow-subtle relative">
              <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold flex items-center justify-center text-sm mb-4 border border-primary-100">
                01
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">Select Your Ride</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Choose an Activa, Jupiter, or motorcycle that fits your journey, duration, and pickup location in Varanasi.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-7 rounded-2xl border border-dark-200/80 shadow-subtle relative">
              <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold flex items-center justify-center text-sm mb-4 border border-primary-100">
                02
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">Quick WhatsApp Confirmation</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Tap to connect with our booking desk. Verify your Driving License and lock in your vehicle in 2 minutes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-7 rounded-2xl border border-dark-200/80 shadow-subtle relative">
              <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 font-bold flex items-center justify-center text-sm mb-4 border border-primary-100">
                03
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">Pickup & Ride Freely</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Collect keys and your free sanitized helmet from any hub or have it delivered directly to your hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          4. Why Choose Us (Aggregator Value Proposition)
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="heading-lg">Why Travelers Choose Our Platform</h2>
            <p className="text-dark-600 text-sm md:text-base mt-2">
              Built to make urban exploration in Kashi safe, affordable, and worry-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">Transparent Pricing</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Direct rates from ₹299/day. No unexpected hidden fees, no surge charges. Fully refundable deposit on return.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">18-Point Inspection</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Brakes, tires, engine, and lights thoroughly tested before each rental. Sanitized ISI helmet provided.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">12+ Pickup Hubs</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Convenient pickup at Varanasi Cantt Station, Assi Ghat, Sigra, BHU Lanka, and doorstep delivery across hotels.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">24/7 Roadside Network</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Flat tire or breakdown? Our Varanasi support network sends on-site assistance or a replacement ride in 2 hours.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">15-Min Express Pickup</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Minimal paperwork. Show your original Driving License + ID, inspect the vehicle, and start exploring instantly.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-950 mb-2">Verified Host Fleets</h3>
              <p className="text-dark-600 text-sm leading-relaxed">
                Aggregated from top-rated local operators in Banaras, giving you maximum vehicle availability even in peak festive seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          5. Pickup Hubs Across Varanasi
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-dark-50/50 border-t border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
              <span>📍</span>
              <span>Convenient Access</span>
            </div>
            <h2 className="heading-lg">Pickup Hubs Across Varanasi</h2>
            <p className="text-dark-600 text-sm md:text-base mt-2">
              Collect and return your ride close to major transit spots and ghats
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {locations.map((location) => (
              <LocationCard
                key={location.slug}
                name={location.name}
                slug={location.slug}
                description={location.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/locations" className="btn-outline text-xs sm:text-sm">
              <span>View All 12+ Pickup Locations & Route Maps</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          6. Verified Customer Testimonials
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
              <span>⭐</span>
              <span>4.9 / 5 Rating</span>
            </div>
            <h2 className="heading-lg">What Our Renters Say</h2>
            <p className="text-dark-600 text-sm md:text-base mt-2">
              Trusted by 5,000+ travelers, students, and pilgrims exploring Varanasi
            </p>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* ───────────────────────────────────────────
          7. B2B Operator Lead Funnel: List Your Fleet
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white border-t border-dark-100">
        <div className="container-custom max-w-5xl">
          <div className="bg-dark-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-dark-900 shadow-xl">
            {/* Ambient Ember Glow in corner */}
            <div 
              className="absolute -right-20 -top-20 w-80 h-80 bg-primary-500/20 rounded-full blur-[90px] pointer-events-none" 
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dark-900 text-primary-400 border border-dark-800 mb-4">
                💼 For Two-Wheeler Fleet Owners & Agencies
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                List Your Rental Fleet on Awaken Rentals
              </h2>
              <p className="text-dark-300 text-sm sm:text-base leading-relaxed mb-8">
                Do you own scooties or bikes in Varanasi or Uttar Pradesh? Join our aggregator platform to connect directly with high-intent tourists, students, and travelers. Zero upfront listing fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppPartnerUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3.5 px-6 text-sm justify-center"
                >
                  <span>Chat With Partner Onboarding</span>
                  <span>→</span>
                </a>
                <Link
                  href="/contact"
                  className="btn-outline border-dark-700 bg-dark-900 text-dark-200 hover:bg-dark-800 hover:text-white text-sm py-3.5 px-6 justify-center"
                >
                  Submit Fleet Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          8. SEO & AEO Optimized FAQ Accordion
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-3">Frequently Asked Questions</h2>
            <p className="text-dark-600 text-sm sm:text-base">
              Everything you need to know about renting a scooty or motorcycle in Varanasi
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-dark-600 mb-3">Still have a specific question?</p>
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I have a question about renting a scooty in Varanasi." })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm py-2.5 px-5"
            >
              <span>Ask Our Help Desk on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          9. Bottom High-Converting Action Card
      ─────────────────────────────────────────── */}
      <section className="section-padding bg-dark-50 border-t border-dark-100">
        <div className="container-custom max-w-4xl text-center">
          <div className="bg-white border border-dark-200/80 rounded-3xl p-8 sm:p-12 shadow-card">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark-950 mb-4">
              Ready to Ride in Varanasi?
            </h2>
            <p className="text-dark-600 text-base max-w-xl mx-auto mb-8">
              Book your ride in 2 minutes. Transparent rates starting at ₹299/day, sanitized helmet included, and instant pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppBookingUrl({ customText: "Hi! I'm ready to rent a scooty/bike in Varanasi. Please confirm availability." })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3.5 px-8 justify-center"
              >
                <span>💬 Book on WhatsApp Now</span>
              </a>
              <Link
                href="/pricing"
                className="btn-outline text-sm py-3.5 px-6 justify-center"
              >
                View Full Pricing Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
