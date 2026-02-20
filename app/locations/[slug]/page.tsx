import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';

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
    title: location.title,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `https://varanasibikerental.com/locations/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `https://varanasibikerental.com/locations/${location.slug}`,
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
        "item": "https://varanasibikerental.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://varanasibikerental.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://varanasibikerental.com/locations/${location.slug}`
      }
    ]
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <nav className="text-sm mb-4 text-dark-600">
            <Link href="/" className="hover:text-primary-600">Home</Link> /
            <Link href="/locations" className="hover:text-primary-600 ml-1">Locations</Link> /
            <span className="ml-1 text-dark-900">{location.name}</span>
          </nav>
          <h1 className="heading-xl mb-4">{location.title}</h1>
          <p className="text-2xl text-primary-600 font-semibold mb-6">{location.subtitle}</p>
          <p className="text-lg text-dark-700 max-w-4xl">{location.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book Now in {location.name}
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp Booking
            </a>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Rent Here */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Why Rent a Scooty in {location.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.whyRentHere.map((reason, index) => (
              <div key={index} className="flex items-start bg-dark-50 p-4 rounded-lg">
                <span className="text-primary-500 text-2xl mr-3">✓</span>
                <p className="text-dark-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Popular Routes from {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.popularRoutes.map((route, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark-900 mb-2">📍 {route.destination}</h3>
                <p className="text-dark-600">Distance: <span className="font-semibold">{route.distance}</span></p>
                <p className="text-dark-600">Time: <span className="font-semibold text-primary-600">{route.time}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Nearby Landmarks to Explore from {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.landmarks.map((landmark, index) => (
              <div key={index} className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h3 className="font-bold text-dark-900">{landmark.name}</h3>
                <p className="text-dark-600">Distance: {landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Who Should Rent in {location.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.idealFor.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">👤</div>
                <p className="text-dark-800">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Rental Pricing in {location.name}</h2>
          <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg border-2 border-primary-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">🛵 Scooty Rental</h3>
                <p className="text-4xl font-bold text-primary-600 mb-2">₹299<span className="text-lg">/day</span></p>
                <p className="text-dark-600">Honda Activa, TVS Jupiter, Hero Pleasure</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">🏍️ Bike Rental</h3>
                <p className="text-4xl font-bold text-primary-600 mb-2">₹499<span className="text-lg">/day</span></p>
                <p className="text-dark-600">Honda CB Shine, Bajaj Pulsar, Royal Enfield</p>
              </div>
            </div>
            <Link href="/pricing" className="btn-primary">
              View Detailed Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Frequently Asked Questions - {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.faq.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-8">Explore More Rental Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/locations/sigra" className="text-primary-600 hover:underline">Scooty Rental in Sigra</Link>
            <Link href="/locations/assi-ghat" className="text-primary-600 hover:underline">Rental near Assi Ghat</Link>
            <Link href="/locations/bhu" className="text-primary-600 hover:underline">Rental near BHU</Link>
            <Link href="/locations/lanka" className="text-primary-600 hover:underline">Rental in Lanka</Link>
            <Link href="/locations/varanasi-cantt" className="text-primary-600 hover:underline">Rental at Cantt</Link>
            <Link href="/locations/mahmoorganj" className="text-primary-600 hover:underline">Rental in Mahmoorganj</Link>
            <Link href="/locations/godowlia" className="text-primary-600 hover:underline">Rental in Godowlia</Link>
            <Link href="/locations/sarnath" className="text-primary-600 hover:underline">Rental in Sarnath</Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/scooty-rental-in-varanasi" className="text-primary-600 hover:underline font-semibold">Main Scooty Rental Page</Link>
            <Link href="/bike-rental-in-varanasi" className="text-primary-600 hover:underline font-semibold">Main Bike Rental Page</Link>
            <Link href="/blog" className="text-primary-600 hover:underline font-semibold">Travel Guides & Tips</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Rent in {location.name}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your scooty or bike now for hassle-free exploration of Varanasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Now
            </Link>
            <a href="tel:+919876543210" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
