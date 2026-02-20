import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Us | Varanasi's Trusted Scooty & Bike Rental Service",
  description: "Learn about Varanasi Bike Rental - your trusted partner for affordable scooty and bike rental in Banaras. Quality vehicles, transparent pricing, 24/7 support.",
  alternates: {
    canonical: 'https://varanasibikerental.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-xl mb-6 text-center">About Varanasi Bike Rental</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto text-center">
            Your trusted partner for exploring the spiritual city of Varanasi on two wheels
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-dark-700">
            <p>
              Varanasi Bike Rental was founded with a simple mission: to help travelers explore the ancient city
              of Varanasi with freedom, flexibility, and affordability. We understand that the best way to experience
              Banaras is at your own pace, discovering hidden lanes, ghats, and temples that standard tourist packages miss.
            </p>
            <p>
              Having served thousands of tourists, students, and local residents, we've built a reputation for
              reliability, transparent pricing, and exceptional customer service. Our fleet of well-maintained scootys
              and bikes ensures that you have a safe and comfortable ride throughout your journey in Kashi.
            </p>
            <p>
              Whether you're a foreign tourist visiting for spiritual awakening, a BHU student needing daily transport,
              or a domestic traveler exploring the cultural heritage, we have the perfect two-wheeler solution for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold mb-3">Quality Fleet</h3>
              <p className="text-dark-600">Well-maintained Honda, TVS, Bajaj, and Royal Enfield vehicles serviced regularly</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-dark-600">No hidden charges. What you see is what you pay. Starting ₹299/day</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Full Insurance</h3>
              <p className="text-dark-600">All vehicles covered with comprehensive third-party insurance</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Multiple Locations</h3>
              <p className="text-dark-600">Pickup and drop available across Varanasi - Cantt, BHU, Assi, Lanka, Sigra</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-dark-600">Round-the-clock roadside assistance and customer support</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">5000+ Happy Customers</h3>
              <p className="text-dark-600">Trusted by tourists from across India and around the world</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-6">Our Commitment</h2>
          <div className="space-y-4 text-lg text-dark-700">
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <p><strong>Safety First:</strong> All vehicles undergo thorough safety checks before each rental</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <p><strong>Hygiene:</strong> Helmets and vehicles sanitized after every use</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <p><strong>Customer Service:</strong> Prompt response to queries and issues</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <p><strong>Flexibility:</strong> Customized rental packages for students, tourists, and long-term renters</p>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 text-2xl mr-3">✓</span>
              <p><strong>Local Expertise:</strong> Our team knows Varanasi inside out and can suggest best routes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Explore Varanasi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose us for their Varanasi adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Your Ride
            </Link>
            <Link href="/pricing" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
