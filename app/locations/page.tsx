import { Metadata } from 'next';
import Link from 'next/link';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/lib/locations';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "Scooty & Bike Rental Pickup Hubs in Varanasi | All Areas Covered",
  description: "Find verified scooty and bike rental pickup hubs across Varanasi: Cantt Railway Station, Assi Ghat, BHU Lanka, Sigra, Godowlia, Sarnath, and Mahmoorganj. Doorstep hotel delivery available.",
  keywords: [
    "scooty rental locations varanasi",
    "bike rental areas varanasi",
    "rental near me varanasi",
    "scooty rental assi ghat",
    "bike rental cantt station varanasi",
    "all location bike rental banaras"
  ],
  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>📍</span>
            <span>12+ Pickup Hubs</span>
          </div>
          <h1 className="heading-xl mb-4">
            Pickup Hubs Across Varanasi
          </h1>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Convenient pickup and drop-off points near major transit terminals, river ghats, student campuses, and temple corridors.
          </p>
        </div>
      </section>

      {/* Hubs Grid */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                name={location.name}
                slug={location.slug}
                description={location.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Highlights */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="heading-md mb-3">Doorstep Delivery Across Varanasi</h2>
          <p className="text-dark-600 text-sm max-w-2xl mx-auto mb-8">
            Staying at a hotel, guesthouse, or hostel? Our partner delivery network can bring your sanitized scooty or bike directly to your doorstep.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-dark-800">
            <div className="bg-white p-3 rounded-xl border border-dark-200/80 shadow-subtle">
              🚂 Cantt & Manduadih
            </div>
            <div className="bg-white p-3 rounded-xl border border-dark-200/80 shadow-subtle">
              🌊 Assi & Dashashwamedh
            </div>
            <div className="bg-white p-3 rounded-xl border border-dark-200/80 shadow-subtle">
              🎓 BHU & Lanka Hub
            </div>
            <div className="bg-white p-3 rounded-xl border border-dark-200/80 shadow-subtle">
              ☸️ Sarnath Circuit
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-lg mb-3">Can&apos;t Find Your Location?</h2>
          <p className="text-dark-600 text-sm mb-6">
            Share your hotel location on WhatsApp and we will dispatch the nearest verified vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I need a scooty/bike delivered to my location in Varanasi. Can you check delivery availability?" })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-8 justify-center"
            >
              <span>Request Delivery on WhatsApp</span>
              <span>→</span>
            </a>
            <Link href="/contact" className="btn-outline text-sm py-3 px-6 justify-center">
              View Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
