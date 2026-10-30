import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `${location.title} | Kashi Rentals`,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `${siteConfig.url}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `${siteConfig.url}/locations/${location.slug}`,
      type: 'website',
    },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${siteConfig.url}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `${siteConfig.url}/locations/${location.slug}`
      }
    ]
  };

  const bookAtLocationUrl = getWhatsAppBookingUrl({
    location: location.name,
    duration: 1,
    customText: `Hi! I need a scooty or bike rental near ${location.name}, Varanasi. Please confirm availability and rates.`
  });

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs mb-4 text-dark-500 flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-dark-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-dark-900 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-dark-900 font-semibold">{location.name}</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>📍</span>
            <span>Varanasi Pickup Hub</span>
          </div>

          <h1 className="heading-xl mb-3 text-dark-950 font-extrabold tracking-tight">
            {location.title}
          </h1>

          <p className="text-lg font-semibold text-primary-600 mb-4">
            {location.subtitle}
          </p>

          <p className="text-sm sm:text-base text-dark-600 leading-relaxed mb-8 max-w-3xl">
            {location.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={bookAtLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              <span>Instant Book at {location.name}</span>
              <span>→</span>
            </a>
            <Link href="/pricing" className="btn-outline text-sm py-3 px-5">
              View Rental Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Why Rent Here */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-md mb-8">Why Rent a Two-Wheeler in {location.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {location.whyRentHere.map((reason, index) => (
              <div key={index} className="p-5 rounded-2xl bg-white border border-dark-200/80 shadow-subtle flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-xs sm:text-sm text-dark-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-md mb-8">Popular Routes from {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {location.popularRoutes.map((route, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-dark-200/80 shadow-subtle flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-primary-600 uppercase block mb-1">Route</span>
                  <h3 className="font-bold text-sm text-dark-950 mb-2">{route.destination}</h3>
                </div>
                <div className="pt-3 border-t border-dark-100 flex items-center justify-between text-xs text-dark-600">
                  <span>Distance: <strong>{route.distance}</strong></span>
                  <span className="text-primary-600 font-semibold">{route.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-md mb-8">Key Landmarks Near {location.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {location.landmarks.map((landmark, index) => (
              <div key={index} className="p-4 rounded-xl bg-dark-50 border border-dark-200/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-dark-900">{landmark.name}</span>
                <span className="text-dark-500 font-medium">{landmark.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-padding bg-dark-50/50 border-t border-b border-dark-100">
        <div className="container-custom max-w-4xl">
          <div className="bg-white border border-dark-200/80 rounded-3xl p-6 sm:p-10 shadow-card">
            <h2 className="heading-md mb-2">Available Vehicle Rates in {location.name}</h2>
            <p className="text-xs sm:text-sm text-dark-500 mb-8">Free sanitized helmet & 24/7 breakdown support included</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
                <span className="badge-pill text-[11px] uppercase font-semibold mb-2">Scooty Rental</span>
                <div className="text-3xl font-extrabold text-primary-600 my-1">
                  ₹299<span className="text-xs font-normal text-dark-500"> / 24 hrs</span>
                </div>
                <p className="text-xs text-dark-600 mt-2">Honda Activa 6G, TVS Jupiter, Hero Pleasure+</p>
              </div>

              <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
                <span className="badge-pill text-[11px] uppercase font-semibold mb-2">Motorcycle Rental</span>
                <div className="text-3xl font-extrabold text-primary-600 my-1">
                  ₹499+<span className="text-xs font-normal text-dark-500"> / 24 hrs</span>
                </div>
                <p className="text-xs text-dark-600 mt-2">Honda CB Shine, Pulsar 150, Royal Enfield 350</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={bookAtLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-3 px-6 justify-center"
              >
                <span>Check Live Availability in {location.name}</span>
                <span>→</span>
              </a>
              <Link href="/pricing" className="btn-outline text-xs sm:text-sm py-3 px-5 justify-center">
                Full Pricing Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-8 text-center">Frequently Asked Questions — {location.name}</h2>
          <div className="space-y-3.5">
            {location.faq.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Breadcrumbs */}
      <section className="py-12 bg-dark-50 border-t border-dark-100">
        <div className="container-custom max-w-5xl">
          <h3 className="text-xs uppercase font-bold text-dark-500 tracking-wider mb-4">
            Explore Other Pickup Hubs
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/locations/sigra" className="badge-pill hover:bg-dark-200 transition-colors">Sigra Hub</Link>
            <Link href="/locations/assi-ghat" className="badge-pill hover:bg-dark-200 transition-colors">Assi Ghat</Link>
            <Link href="/locations/bhu" className="badge-pill hover:bg-dark-200 transition-colors">BHU Campus</Link>
            <Link href="/locations/lanka" className="badge-pill hover:bg-dark-200 transition-colors">Lanka Hub</Link>
            <Link href="/locations/varanasi-cantt" className="badge-pill hover:bg-dark-200 transition-colors">Cantt Station</Link>
            <Link href="/locations/mahmoorganj" className="badge-pill hover:bg-dark-200 transition-colors">Mahmoorganj</Link>
            <Link href="/locations/godowlia" className="badge-pill hover:bg-dark-200 transition-colors">Godowlia</Link>
            <Link href="/locations/sarnath" className="badge-pill hover:bg-dark-200 transition-colors">Sarnath</Link>
          </div>
        </div>
      </section>
    </>
  );
}
