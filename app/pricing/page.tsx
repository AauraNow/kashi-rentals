import { Metadata } from 'next';
import Link from 'next/link';
import { pricingPlans, rentalFeatures, requiredDocuments } from '@/lib/pricing';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Scooty & Bike Rental Pricing in Varanasi | Starting ₹299/day",
  description: "Transparent pricing for scooty and bike rental in Varanasi. Daily, weekly, monthly rates. Scooty ₹299/day, Bike ₹499/day. No hidden charges. View all rates.",
  keywords: [
    "scooty rental price varanasi",
    "bike rental cost varanasi",
    "rental rates banaras",
    "cheap scooty rental varanasi",
    "affordable bike rental kashi"
  ],
  alternates: {
    canonical: 'https://varanasibikerental.com/pricing',
  },
};

export default function PricingPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Scooty Rental in Varanasi",
    "price": "299",
    "priceCurrency": "INR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "LocalBusiness",
      "name": "Varanasi Bike Rental"
    }
  };

  return (
    <>
      <StructuredData data={offerSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Transparent Rental Pricing</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            No hidden charges. No surprises. Simple, affordable pricing for scooty and bike rental in Varanasi.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Rental Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white border border-dark-200 rounded-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Duration</th>
                  <th className="px-6 py-4 text-center">Scooty</th>
                  <th className="px-6 py-4 text-center">Bike</th>
                  <th className="px-6 py-4 text-center">Security Deposit</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-dark-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{plan.duration}</td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-primary-600">₹{plan.scootyPrice}</td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-primary-600">₹{plan.bikePrice}</td>
                    <td className="px-6 py-4 text-center text-dark-700">₹{plan.deposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-dark-600 mb-4">* Security deposit is fully refundable upon safe return</p>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What&apos;s Included in Rental Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {rentalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">✓</div>
                <p className="font-semibold text-dark-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Documents Required for Rental</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-8">
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">{index + 1}.</span>
                    <span className="text-dark-800 text-lg">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Special Discounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-500">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Student Discount</h3>
              <p className="text-dark-700 mb-4">BHU students get special monthly rates</p>
              <p className="text-3xl font-bold text-primary-600">₹1999/month</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-500">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Weekly Rental</h3>
              <p className="text-dark-700 mb-4">Save ₹200 on 7-day rental</p>
              <p className="text-3xl font-bold text-primary-600">₹1899</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-500">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Monthly Package</h3>
              <p className="text-dark-700 mb-4">Best value for long stay</p>
              <p className="text-3xl font-bold text-primary-600">₹6499</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-8">Important Information</h2>
          <div className="space-y-4 text-dark-700">
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💰 Payment Methods</h3>
              <p>We accept cash, UPI, Google Pay, PhonePe, Paytm, and bank transfer.</p>
            </div>
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⏰ Rental Duration</h3>
              <p>24 hours is counted as 1 day. Late returns charged at hourly rate.</p>
            </div>
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⛽ Fuel Policy</h3>
              <p>Vehicle provided with minimal fuel. Refuel as needed. Return with same fuel level or pay refueling charges.</p>
            </div>
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔒 Security Deposit</h3>
              <p>Fully refundable within 24-48 hours after vehicle inspection. Deductions for damages if any.</p>
            </div>
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📏 Kilometer Limit</h3>
              <p>Unlimited kilometers. Ride as much as you want within Varanasi and nearby areas.</p>
            </div>
            <div className="bg-dark-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🛡️ Insurance</h3>
              <p>Basic third-party insurance included. Rider responsible for own safety and traffic violations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8">Get your scooty or bike at the best price in Varanasi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-50 transition-colors">
              Book Now
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-dark-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-800 transition-colors">
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
