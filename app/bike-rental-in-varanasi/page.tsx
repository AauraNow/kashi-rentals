import { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "Bike Rental in Varanasi | Royal Enfield & Pulsar from ₹499/day",
  description: "Rent premium motorcycles in Varanasi from verified local fleets. Royal Enfield Classic 350, Bajaj Pulsar 150, Honda CB Shine near Cantt Station & BHU. By Awaken AI.",
  keywords: [
    "bike rental in varanasi",
    "royal enfield rental varanasi",
    "rent bike in banaras",
    "motorcycle rental kashi",
    "bullet on rent in varanasi",
    "bike on rent near me varanasi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/bike-rental-in-varanasi`,
  },
};

export default function BikeRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Motorcycle & Bike Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kashi Rentals • by Awaken AI"
    },
    "areaServed": {
      "@type": "City",
      "name": "Varanasi"
    },
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "INR"
    }
  };

  const bikes = [
    {
      name: "Royal Enfield Classic 350",
      price: 799,
      badge: "Cruiser Touring",
      specs: [
        "350cc J-Series Thumping Engine",
        "Dual-Channel ABS for Highway Safety",
        "Upright Ergonomic Tourer Seating",
        "Perfect for Chunar & Sarnath Rides",
        "Pre-Installed Crash Guard & Lock",
        "Free Sanitized Helmet Included"
      ]
    },
    {
      name: "Bajaj Pulsar 150",
      price: 599,
      badge: "Sport Commuter",
      specs: [
        "150cc DTS-i Peppy Engine",
        "Front Disc Brake & Gas Shock Absorbers",
        "Digital Instrument Cluster",
        "Comfortable Split Seats",
        "45+ kmpl Balanced Mileage",
        "Free Sanitized Helmet Included"
      ]
    },
    {
      name: "Honda CB Shine 125",
      price: 499,
      badge: "Best Economy",
      specs: [
        "125cc eSP Smooth Engine",
        "55+ kmpl Highest Fuel Efficiency",
        "Lightweight Clutch & 5-Speed Transmission",
        "Tubeless Tyres for Puncture Protection",
        "Low Maintenance & High Comfort",
        "Free Sanitized Helmet Included"
      ]
    }
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>🏍️</span>
            <span>Motorcycle Fleet</span>
          </div>

          <h1 className="heading-xl mb-4">
            Bike Rental in Varanasi <br className="hidden sm:inline" />
            <span className="text-primary-600">Starting at ₹499/day</span>
          </h1>

          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto mb-8">
            Tour the spiritual capital and nearby highway circuits on genuine Royal Enfields, Pulsars, and commuter bikes. Verified hosts, doorstep pickup, and 24/7 breakdown network.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppBookingUrl({ vehicle: "Royal Enfield Classic 350", duration: 1 })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              <span>Instant WhatsApp Booking</span>
              <span>→</span>
            </a>
            <Link href="/pricing" className="btn-outline text-sm py-3 px-5">
              Check Daily & Weekly Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Motorcycle Fleet Cards */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="heading-lg mb-2">Our Motorcycle Fleet</h2>
            <p className="text-dark-600 text-sm">
              All bikes serviced and tested before every booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bikes.map((bike, index) => {
              const bookUrl = getWhatsAppBookingUrl({
                vehicle: bike.name,
                duration: 1
              });

              return (
                <div
                  key={index}
                  className="bg-white border border-dark-200/80 rounded-2xl p-6 sm:p-7 shadow-subtle hover:border-dark-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-ember text-[11px]">
                        {bike.badge}
                      </span>
                      <span className="badge-verified text-[11px]">
                        ✓ Verified Fleet
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-dark-950 mb-1">{bike.name}</h3>

                    <div className="flex items-baseline gap-1 my-3">
                      <span className="text-3xl font-extrabold text-primary-600">₹{bike.price}</span>
                      <span className="text-xs text-dark-500">/ day (24 hrs)</span>
                    </div>

                    <div className="space-y-2 py-4 border-t border-b border-dark-100 my-4">
                      {bike.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-dark-700">
                          <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-xs py-2.5 rounded-xl justify-center font-semibold"
                  >
                    <span>Book {bike.name}</span>
                    <span>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Rent a Motorcycle */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="heading-lg mb-2">Why Rent a Motorcycle in Banaras?</h2>
            <p className="text-dark-600 text-sm">Power and comfort for trips beyond the inner ghats</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Highway Stability</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Sturdy chassis and telescopic forks provide smooth stability on NH19 when riding out to Ramnagar Fort, Chunar, or Sarnath.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Long-Distance Touring</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Comfortable seating for pillion riders and luggage bungee hooks make motorbikes the top choice for weekend road trips.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">The Classic Royal Vibe</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Riding a Royal Enfield Bullet across the Malviya Bridge overlooking the Ganga at sunrise is a classic Banaras bucket-list experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-center mb-10">Motorcycle Rental FAQs</h2>
          <div className="space-y-3.5">
            <FAQItem
              question="Do I need a geared two-wheeler driving license?"
              answer="Yes, Indian traffic regulations require a valid Motorcycle with Gear (MCWG) driving license for renting bikes like Royal Enfield, Pulsar, and CB Shine."
            />
            <FAQItem
              question="What is the security deposit for bikes?"
              answer="The refundable security deposit is ₹1,000 for 125cc/150cc bikes and ₹1,500 for Royal Enfield Classic 350. It is refunded instantly on vehicle return."
            />
            <FAQItem
              question="Can I take the bike to Ayodhya or Prayagraj?"
              answer="Yes, inter-city rides to Prayagraj or Ayodhya are permitted. Please inform our WhatsApp desk during booking so we can equip you with outstation documentation."
            />
            <FAQItem
              question="Is a pillion helmet provided?"
              answer="We provide one sanitized ISI helmet free with every bike. An extra helmet for your pillion companion can be requested for ₹50/day."
            />
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section-padding bg-dark-50 border-t border-dark-100 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-lg mb-3">Reserve Your Bike Today</h2>
          <p className="text-dark-600 text-sm mb-6">
            Lock in your motorcycle on WhatsApp in 2 minutes. Free helmet & 24/7 roadside assistance included.
          </p>
          <a
            href={getWhatsAppBookingUrl({ vehicle: "Royal Enfield Classic 350", duration: 1 })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-8 justify-center"
          >
            <span>Book Bike on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
