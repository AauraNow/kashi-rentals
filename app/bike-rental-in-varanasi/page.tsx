import { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
const phoneNumber = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';

export const metadata: Metadata = {
  title: "Bike Rental in Varanasi | Royal Enfield, Pulsar from ₹499/day",
  description: "Premium bike rental in Varanasi, Banaras, Kashi. Royal Enfield, Bajaj Pulsar, Honda CB Shine available. Self-drive bike near BHU, Cantt from ₹499/day.",
  keywords: [
    "bike rental in varanasi",
    "royal enfield rental varanasi",
    "rent bike in banaras",
    "motorcycle rental kashi",
    "bike on rent near me varanasi"
  ],
  alternates: {
    canonical: 'https://rentals.awakenais.com/bike-rental-in-varanasi',
  },
};

export default function BikeRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bike Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kashi Rentals"
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

  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Bike Rental in Varanasi - Starting ₹499/day</h1>
          <p className="text-xl text-dark-700 mb-6 max-w-4xl">
            Rent Royal Enfield Classic 350, Bajaj Pulsar, Honda CB Shine bikes in Varanasi, Banaras, Kashi.
            Perfect for highway rides to Sarnath, Ramnagar, and beyond. Self-drive motorcycle rental with
            full insurance coverage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-lg">Book Bike Now</Link>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-outline text-lg">WhatsApp Booking</a>
            <Link href="/pricing" className="btn-secondary text-lg">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Available Bikes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Premium Bike Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <div className="bg-dark-900 text-white px-4 py-2 rounded-lg inline-block mb-3 text-sm font-bold">PREMIUM</div>
              <h3 className="text-2xl font-bold mb-3">Royal Enfield Classic 350</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹799/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>350cc Powerful Engine</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Iconic Retro Design</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Perfect for Long Highway Rides</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Comfortable Upright Seating</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Premium Feel & Experience</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Best for Touring</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book Royal Enfield</Link>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-lg inline-block mb-3 text-sm font-bold">POPULAR</div>
              <h3 className="text-2xl font-bold mb-3">Bajaj Pulsar 150</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹599/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>150cc Sporty Engine</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Dynamic Sporty Look</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Powerful Performance</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Digital Console Dashboard</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Great for City & Highway</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Good Mileage 45+ kmpl</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book Pulsar</Link>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mb-3 text-sm font-bold">ECONOMICAL</div>
              <h3 className="text-2xl font-bold mb-3">Honda CB Shine</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹499/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>125cc Reliable Engine</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Most Reliable Performance</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Excellent Mileage 55+ kmpl</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Comfortable Daily Commute</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Low Maintenance</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Best Value for Money</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book CB Shine</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rent Bike */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Why Rent a Bike in Varanasi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-xl font-bold mb-2">Powerful Performance</h3>
              <p className="text-dark-700">Bikes offer more power for highway rides and better performance on rough roads compared to scootys.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🛣️</div>
              <h3 className="text-xl font-bold mb-2">Long Distance Travel</h3>
              <p className="text-dark-700">Perfect for day trips to Sarnath, Ramnagar Fort, Chunar, and exploring areas beyond Varanasi.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Faster Travel</h3>
              <p className="text-dark-700">Cover more ground quickly. Bikes are ideal for tourists with limited time wanting to see maximum places.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="text-xl font-bold mb-2">More Storage</h3>
              <p className="text-dark-700">Bikes have better luggage carrying capacity. Perfect for shopping trips or weekend getaways.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="text-xl font-bold mb-2">Better Stability</h3>
              <p className="text-dark-700">Bikes offer better stability on uneven roads and are more comfortable for taller riders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="text-xl font-bold mb-2">Adventure Experience</h3>
              <p className="text-dark-700">Royal Enfield gives that classic touring experience perfect for creating memorable travel photos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Bike Rental Available Across Varanasi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <Link href="/locations/varanasi-cantt" className="bg-primary-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-primary-200">
              <p className="font-semibold text-primary-600">Cantt Railway Station</p>
            </Link>
            <Link href="/locations/bhu" className="bg-primary-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-primary-200">
              <p className="font-semibold text-primary-600">Near BHU</p>
            </Link>
            <Link href="/locations/assi-ghat" className="bg-primary-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-primary-200">
              <p className="font-semibold text-primary-600">Assi Ghat Area</p>
            </Link>
            <Link href="/locations/sigra" className="bg-primary-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-primary-200">
              <p className="font-semibold text-primary-600">Sigra</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Bike Rental FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FAQItem
              question="Do I need a geared license for bike rental?"
              answer="Yes, for renting motorcycles like Royal Enfield and Pulsar, you need a valid geared vehicle driving license."
            />
            <FAQItem
              question="Can I take the bike outside Varanasi?"
              answer="Yes, you can take bikes for day trips to nearby areas like Sarnath, Ramnagar, Chunar. For longer outstation trips, inform us in advance."
            />
            <FAQItem
              question="Which bike is best for solo travelers?"
              answer="Honda CB Shine (₹499/day) is perfect for solo budget travelers. For premium experience, choose Royal Enfield (₹799/day)."
            />
            <FAQItem
              question="Is Royal Enfield difficult to handle?"
              answer="Royal Enfield Classic 350 is heavier but easy to handle once you get used to it. We recommend it for experienced riders only."
            />
            <FAQItem
              question="What's included in bike rental price?"
              answer="Helmet, insurance, 24/7 support included. Fuel not included - you refuel as needed."
            />
            <FAQItem
              question="Can two people ride comfortably?"
              answer="Yes, all our bikes are designed for two riders with comfortable pillion seats."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Book Your Bike in Varanasi Today!</h2>
          <p className="text-xl mb-8">Experience the thrill of riding through ancient Banaras</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Bike Now
            </Link>
            <a href={`tel:${phoneNumber}`} className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              Call: {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
