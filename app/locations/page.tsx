import { Metadata } from 'next';
import Link from 'next/link';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/lib/locations';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

export const metadata: Metadata = {
  title: "Scooty & Bike Rental Locations in Varanasi | All Areas Covered",
  description: "Find scooty and bike rental across all areas of Varanasi including Sigra, BHU, Assi Ghat, Lanka, Cantt, Mahmoorganj, Godowlia, Sarnath. Flexible pickup points.",
  keywords: [
    "scooty rental locations varanasi",
    "bike rental areas varanasi",
    "rental near me varanasi",
    "all location bike rental banaras"
  ],
  alternates: {
    canonical: 'https://varanasibikerental.com/locations',
  },
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Scooty & Bike Rental Locations Across Varanasi</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            We serve all major areas in Varanasi, Banaras, Kashi. Choose your convenient pickup location
            for scooty and bike rental starting ₹299/day.
          </p>
        </div>
      </section>

      {/* All Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                name={location.name}
                slug={location.slug}
                description={location.description.substring(0, 120) + '...'}
                icon="📍"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Text */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Our Service Coverage</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-dark-700 mb-6">
              We provide scooty and bike rental services across all major tourist and residential areas in Varanasi.
              Whether you&apos;re staying near the railway station, university campus, or the ghats, we&apos;ve got you covered.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-dark-800">
              <div>✓ Railway Stations</div>
              <div>✓ Airport</div>
              <div>✓ All Ghats</div>
              <div>✓ BHU Campus</div>
              <div>✓ Hotels & Hostels</div>
              <div>✓ Markets</div>
              <div>✓ Temples</div>
              <div>✓ Tourist Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Can&apos;t Find Your Location?</h2>
          <p className="text-xl mb-8">Contact us! We offer delivery across Varanasi.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Contact Us
            </Link>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
