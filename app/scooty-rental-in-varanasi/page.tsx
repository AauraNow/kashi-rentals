import { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Scooty Rental in Varanasi | Honda Activa & TVS Jupiter from ₹299/day",
  description: "Best scooty rental in Varanasi, Banaras, Kashi. Honda Activa, TVS Jupiter, Hero Pleasure available. Self-drive scooty near BHU, Assi, Cantt, Lanka from ₹299/day.",
  keywords: [
    "scooty rental in varanasi",
    "activa rental varanasi",
    "rent scooty in banaras",
    "self drive scooty kashi",
    "two wheeler rental varanasi",
    "scooty on rent near me varanasi"
  ],
  alternates: {
    canonical: 'https://varanasibikerental.com/scooty-rental-in-varanasi',
  },
};

export default function ScootyRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Scooty Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Varanasi Bike Rental"
    },
    "areaServed": {
      "@type": "City",
      "name": "Varanasi"
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Scooty Rental in Varanasi - Starting ₹299/day</h1>
          <p className="text-xl text-dark-700 mb-6 max-w-4xl">
            Rent Honda Activa, TVS Jupiter, and Hero Pleasure scootys in Varanasi, Banaras, Kashi.
            Perfect for exploring ghats, temples, and narrow lanes. Self-drive scooty rental near BHU,
            Assi Ghat, Cantt Railway Station, Lanka, Sigra, and all major areas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-lg">Book Scooty Now</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-outline text-lg">WhatsApp Booking</a>
            <Link href="/pricing" className="btn-secondary text-lg">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Available Scootys */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Our Scooty Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Honda Activa 6G</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹299/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>110cc Engine - Smooth Power</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>45+ kmpl Fuel Efficiency</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Comfortable Seat for Long Rides</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Digital Speedometer</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>USB Charging Port</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Ample Storage Space</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book Activa</Link>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">TVS Jupiter</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹299/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>110cc Eco-Friendly Engine</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Excellent Mileage 50+ kmpl</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Largest Under-seat Storage</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>LED Headlamp</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Mobile Charging Port</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Comfortable for Two</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book Jupiter</Link>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Hero Pleasure Plus</h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">₹299/day</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>110cc Reliable Engine</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Lightweight & Easy Handling</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Perfect for City Navigation</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Fuel Efficient 45+ kmpl</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Stylish Design</li>
                <li className="flex items-start"><span className="text-primary-500 mr-2">✓</span>Easy to Park in Narrow Lanes</li>
              </ul>
              <Link href="/contact" className="btn-primary w-full block text-center">Book Pleasure</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rent Scooty */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Why Rent a Scooty in Varanasi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🛣️</div>
              <h3 className="text-xl font-bold mb-2">Navigate Narrow Lanes</h3>
              <p className="text-dark-700">Varanasi&apos;s old city has narrow lanes where scootys are the best mode of transport. Cars and autos can&apos;t reach many areas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Most Economical</h3>
              <p className="text-dark-700">At ₹299/day, scooty rental is cheaper than daily auto fares. Save money and have unlimited freedom to explore.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">⛽</div>
              <h3 className="text-xl font-bold mb-2">Fuel Efficient</h3>
              <p className="text-dark-700">Our scootys give 45-50 kmpl mileage. Explore entire Varanasi in minimal fuel cost.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🅿️</div>
              <h3 className="text-xl font-bold mb-2">Easy Parking</h3>
              <p className="text-dark-700">Scootys can be parked anywhere near ghats, temples, and markets. No parking hassles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-2">Perfect for Couples</h3>
              <p className="text-dark-700">Comfortable seating for two. Explore Varanasi together at your own pace.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">🌤️</div>
              <h3 className="text-xl font-bold mb-2">All-Weather Riding</h3>
              <p className="text-dark-700">Scootys are perfect for Varanasi&apos;s weather. Easy to handle in traffic and comfortable in heat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Popular Scooty Routes in Varanasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4">🕉️ Ghat Circuit</h3>
              <p className="text-dark-700 mb-3">Assi Ghat → Dashashwamedh Ghat → Manikarnika Ghat → Panchganga Ghat</p>
              <p className="text-dark-600">Distance: ~8 km | Time: 30 mins</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4">🛕 Temple Tour</h3>
              <p className="text-dark-700 mb-3">Kashi Vishwanath → Durga Temple → Sankat Mochan → Tulsi Manas</p>
              <p className="text-dark-600">Distance: ~10 km | Time: 45 mins</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4">☸️ Buddhist Circuit</h3>
              <p className="text-dark-700 mb-3">Varanasi → Sarnath (Dhamek Stupa, Museums) → Return</p>
              <p className="text-dark-600">Distance: ~22 km | Time: 1.5 hours</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4">🎓 BHU Campus Tour</h3>
              <p className="text-dark-700 mb-3">BHU Main Gate → Vishwanath Temple → Museum → Gardens</p>
              <p className="text-dark-600">Distance: ~6 km | Time: 25 mins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Locations */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Scooty Rental Available in All Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <Link href="/locations/sigra" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Sigra</p>
            </Link>
            <Link href="/locations/assi-ghat" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Assi Ghat</p>
            </Link>
            <Link href="/locations/bhu" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">BHU</p>
            </Link>
            <Link href="/locations/lanka" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Lanka</p>
            </Link>
            <Link href="/locations/varanasi-cantt" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Cantt Station</p>
            </Link>
            <Link href="/locations/mahmoorganj" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Mahmoorganj</p>
            </Link>
            <Link href="/locations/godowlia" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Godowlia</p>
            </Link>
            <Link href="/locations/sarnath" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="font-semibold text-primary-600">Sarnath</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Scooty Rental FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FAQItem
              question="Which scooty is best for Varanasi roads?"
              answer="Honda Activa is the most popular choice for Varanasi. It handles both smooth roads and rough patches well. TVS Jupiter offers best mileage for budget travelers."
            />
            <FAQItem
              question="Can I rent scooty for 2-3 hours only?"
              answer="Our minimum rental period is 24 hours (₹299). However, for BHU students, we offer flexible monthly packages."
            />
            <FAQItem
              question="Do you provide two helmets with scooty?"
              answer="Yes, we provide two ISI-marked helmets with every scooty rental at no extra cost."
            />
            <FAQItem
              question="Can I ride to Sarnath on rented scooty?"
              answer="Absolutely! Sarnath is just 10-12 km from Varanasi. Our scootys are perfect for this trip. Plan for 1-1.5 hours including visit time."
            />
            <FAQItem
              question="What if scooty breaks down during rental?"
              answer="We provide 24/7 roadside assistance. Call our support number and we'll arrange repair or replacement within 1-2 hours."
            />
            <FAQItem
              question="Is scooty easier than bike for first-time riders?"
              answer="Yes! Scootys have automatic transmission (no gears), making them easier for beginners and comfortable for city riding."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Book Your Scooty in Varanasi Today!</h2>
          <p className="text-xl mb-8">Start exploring the spiritual city with freedom and comfort</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Scooty Now
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
