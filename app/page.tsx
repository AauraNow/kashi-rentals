import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { locations } from '@/lib/locations';
import { vehicles } from '@/lib/pricing';

// Dynamic imports for components that aren't immediately visible
const LocationCard = dynamic(() => import('@/components/LocationCard'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
});

const FAQItem = dynamic(() => import('@/components/FAQItem'));
const StructuredData = dynamic(() => import('@/components/StructuredData'));
const ReviewCarousel = dynamic(() => import('@/components/ReviewCarousel'));

export const metadata: Metadata = {
  title: "Scooty & Bike Rental in Varanasi | Affordable Self Drive Starting ₹299/day",
  description: "Best scooty and bike rental in Varanasi, Banaras, Kashi. Self-drive two wheeler rental near BHU, Assi Ghat, Cantt, Sigra, Lanka, Sarnath. Starting ₹299/day. Book online!",
  keywords: [
    "scooty rental in varanasi",
    "bike rental in varanasi",
    "rent scooty in banaras",
    "rent bike in kashi",
    "two wheeler rental varanasi",
    "self drive scooty varanasi",
    "affordable bike rental banaras"
  ],
  alternates: {
    canonical: 'https://rentals.awakenais.com',
  },
  openGraph: {
    title: "Scooty & Bike Rental in Varanasi | Starting ₹299/day",
    description: "Explore Varanasi with affordable scooty and bike rental. Self-drive two wheeler starting ₹299/day.",
    url: 'https://rentals.awakenais.com',
    type: 'website',
  },
};

const faqs = [
  {
    question: "What is the minimum age to rent a scooty or bike?",
    answer: "You must be at least 18 years old with a valid driving license to rent a two-wheeler."
  },
  {
    question: "Do I need to pay a security deposit?",
    answer: "Yes, a refundable security deposit of ₹1,000-₹1,500 is required. It's returned within 24 hours after returning the vehicle."
  },
  {
    question: "What documents are required?",
    answer: "You need a valid driving license, Aadhaar card (or any government ID), and one passport-size photograph."
  },
  {
    question: "Is helmet provided?",
    answer: "Yes, we provide one helmet free with every rental. Additional helmets available for ₹50/day."
  },
  {
    question: "What if the vehicle breaks down?",
    answer: "We offer 24/7 roadside assistance. Call us immediately and we'll provide a replacement vehicle within 2 hours."
  },
  {
    question: "Can I extend my rental period?",
    answer: "Yes! Contact us at least 2 hours before your rental ends. Extension charges same as daily rate."
  },
  {
    question: "Is fuel included?",
    answer: "No, fuel is not included. You receive the vehicle with full tank and return it with full tank, or pay for consumed fuel."
  },
  {
    question: "Can I take the scooty outside Varanasi?",
    answer: "Yes, for nearby areas like Sarnath, Chunar. For longer trips, please inform us in advance."
  }
];

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Varanasi Bike Rental",
    "image": "https://rentals.awakenais.com/logo.png",
    "description": "Affordable scooty and bike rental service in Varanasi. Self-drive two-wheeler rental starting ₹299/day.",
    "@id": "https://rentals.awakenais.com",
    "url": "https://rentals.awakenais.com",
    "telephone": "+917348745464",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Multiple pickup locations",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "221005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3176,
      "longitude": 82.9739
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/varanasibikerental",
      "https://www.instagram.com/varanasibikerental"
    ],
    "areaServed": [
      "Varanasi",
      "Banaras",
      "Kashi",
      "Sigra",
      "BHU",
      "Assi Ghat",
      "Lanka",
      "Sarnath"
    ]
  };

  return (
    <>
      <StructuredData data={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">
              Scooty & Bike Rental in Varanasi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50">
              Explore the spiritual city with freedom. Starting at just <span className="font-bold text-3xl">₹299/day</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                Book Now - Get 10% Off
              </Link>
              <Link href="/pricing" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-all">
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Well Maintained Vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">We Serve Across Varanasi</h2>
            <p className="text-dark-600">Convenient pickup locations in all major areas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {locations.map((location) => (
              <LocationCard
                key={location.slug}
                name={location.name}
                slug={location.slug}
                description={location.description}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              View All Locations & Routes
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Why Choose Varanasi Bike Rental?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-dark-600">
                Starting at just ₹299/day with transparent pricing. No hidden charges, no surprises. Weekly and monthly discounts available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏍️</div>
              <h3 className="text-2xl font-bold mb-3">Well-Maintained Fleet</h3>
              <p className="text-dark-600">
                Regular servicing, sanitized vehicles, and quality checks before every rental. Honda Activa, Royal Enfield, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-3">Multiple Locations</h3>
              <p className="text-dark-600">
                Pickup from Sigra, BHU, Assi Ghat, Lanka, Cantt, and more. Convenient locations across Varanasi for easy access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-dark-600">
                Round-the-clock roadside assistance and customer support. Breakdown? We&apos;ll replace your vehicle within 2 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Quick Booking</h3>
              <p className="text-dark-600">
                Instant booking via WhatsApp or phone. Minimal documentation. Get on the road in just 15 minutes!
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-2xl font-bold mb-3">Tourist Friendly</h3>
              <p className="text-dark-600">
                Perfect for travelers exploring Varanasi. Visit ghats, temples, and Sarnath at your own pace. Helmet and lock included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Vehicle Fleet</h2>
            <p className="text-xl text-dark-600">Choose from our range of well-maintained scooties and bikes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.slice(0, 6).map((vehicle, index) => (
              <div key={index} className="bg-white border-2 border-dark-200 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-dark-600">{vehicle.type}</p>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary-600">₹{vehicle.pricePerDay}/day</p>
                  <p className="text-sm text-dark-500">+ fuel charges</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-dark-700">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={vehicle.type === 'scooty' ? '/scooty-rental-in-varanasi' : '/bike-rental-in-varanasi'}
                  className="btn-outline w-full text-center block"
                >
                  Rent Now
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="btn-primary inline-block">
              View All Vehicles & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          </div>
          <ReviewCarousel />
          <div className="text-center mt-8">
            <p className="text-dark-600 text-lg">
              Join hundreds of satisfied customers exploring Varanasi on our scooties and bikes!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-dark-700 mb-4">Have more questions?</p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Explore Varanasi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your scooty or bike today and discover the ancient city of Kashi with complete freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917348745464?text=Hi, I want to rent a scooty/bike in Varanasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Booking
            </a>
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors">
              Fill Booking Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
