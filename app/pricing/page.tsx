import { Metadata } from 'next';
import Link from 'next/link';
import { pricingPlans, rentalFeatures, requiredDocuments } from '@/lib/pricing';
import StructuredData from '@/components/StructuredData';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "Scooty & Bike Rental Pricing in Varanasi | Starting ₹299/day",
  description: "Transparent pricing for scooty and bike rental in Varanasi from verified local fleets. Scooty starting ₹299/day, Bike ₹499/day. Weekly & monthly packages. Zero hidden fees.",
  keywords: [
    "scooty rental price varanasi",
    "bike rental cost varanasi",
    "rental rates banaras",
    "cheap scooty rental varanasi",
    "affordable bike rental kashi",
    "activa rental price varanasi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
};

export default function PricingPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Scooty & Bike Rental in Varanasi",
    "price": "299",
    "priceCurrency": "INR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "LocalBusiness",
      "name": "Kashi Rentals • by Awaken AI"
    }
  };

  return (
    <>
      <StructuredData data={offerSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>🏷️</span>
            <span>Transparent Rates</span>
          </div>
          <h1 className="heading-xl mb-4">
            Transparent Rental Pricing
          </h1>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Zero hidden charges. Zero surprise fuel penalties. Simple daily rates, weekly travel packages, and monthly commuter passes in Varanasi.
          </p>
        </div>
      </section>

      {/* Pricing Duration Cards */}
      <section className="py-8 pb-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pricingPlans.map((plan, index) => {
              const isPopular = plan.duration.includes('3 Days') || plan.duration.includes('7 Days');
              const bookUrl = getWhatsAppBookingUrl({
                duration: plan.duration,
                customText: `Hi! I want to book a two-wheeler for ${plan.duration} on Kashi Rentals. Please confirm availability.`
              });

              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                    isPopular
                      ? 'bg-white border-2 border-primary-500 shadow-card relative'
                      : 'bg-white border border-dark-200/80 shadow-subtle hover:border-dark-300'
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-white">
                      Popular Choice
                    </span>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-dark-950 mb-1">{plan.duration}</h3>
                    <p className="text-xs text-dark-500 mb-4">Deposit: ₹{plan.deposit} (Refundable)</p>

                    <div className="space-y-3 py-3 border-t border-b border-dark-100">
                      <div>
                        <span className="text-[11px] text-dark-500 block uppercase font-medium">Scooty</span>
                        <div className="text-2xl font-bold text-primary-600">
                          ₹{plan.scootyPrice}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] text-dark-500 block uppercase font-medium">Bike</span>
                        <div className="text-xl font-bold text-dark-900">
                          ₹{plan.bikePrice}
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 w-full text-center text-xs py-2.5 rounded-xl font-semibold transition-all ${
                      isPopular
                        ? 'btn-primary justify-center'
                        : 'btn-outline justify-center hover:border-dark-400'
                    }`}
                  >
                    Select Plan →
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-dark-500 mt-6">
            * All security deposits are 100% refundable upon returning the vehicle in good condition.
          </p>
        </div>
      </section>

      {/* Included Features */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="heading-lg mb-2">What&apos;s Included Free</h2>
            <p className="text-dark-600 text-sm">Every booking comes standard with these essentials</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {rentalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-dark-200/80 text-center shadow-subtle flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs font-semibold text-dark-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Special Packages Bento Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Required Documents */}
            <div className="card-minimal flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
                  <span>📄</span>
                  <span>Fast Paperless Verification</span>
                </div>
                <h3 className="heading-md mb-4">Required Documents</h3>
                <p className="text-sm text-dark-600 mb-6">
                  Ready in under 5 minutes. No physical retention of your original passport or license.
                </p>

                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-dark-700">
                      <span className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-dark-100 text-xs text-dark-500">
                Tourist Tip: Hotel or hostel digital booking screenshot works as local address proof.
              </div>
            </div>

            {/* Special Discount Packages */}
            <div className="card-subtle flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 badge-pill mb-3">
                  <span>🎁</span>
                  <span>Special Packages</span>
                </div>
                <h3 className="heading-md mb-4">Customized Rates</h3>
                <p className="text-sm text-dark-600 mb-6">
                  Extra savings for students, pilgrims, and long-term remote workers.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-xl border border-dark-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-dark-900">BHU Student Discount</h4>
                      <p className="text-xs text-dark-500">With valid BHU / college ID</p>
                    </div>
                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-lg">
                      From ₹1,999/mo
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-dark-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-dark-900">7-Day Pilgrimage Pass</h4>
                      <p className="text-xs text-dark-500">Includes ghat and Sarnath routes</p>
                    </div>
                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-lg">
                      Save ₹200
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-dark-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-dark-900">Monthly Long-Stay</h4>
                      <p className="text-xs text-dark-500">Full vehicle maintenance included</p>
                    </div>
                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-lg">
                      ₹6,499/mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={getWhatsAppBookingUrl({ customText: "Hi! I'm interested in special student or weekly discount packages on Kashi Rentals." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-xs py-2.5 justify-center"
                >
                  Claim Special Discount on WhatsApp →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Important Rental Policies */}
      <section className="section-padding bg-dark-50 border-t border-dark-100">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-8 text-center">Rental Policies & Terms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-dark-200/80 shadow-subtle">
              <h3 className="font-bold text-sm text-dark-900 mb-1 flex items-center gap-2">
                <span>💳</span> Payment Methods
              </h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                UPI (Google Pay, PhonePe, Paytm), cash, debit/credit cards, and net banking accepted.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-dark-200/80 shadow-subtle">
              <h3 className="font-bold text-sm text-dark-900 mb-1 flex items-center gap-2">
                <span>⏰</span> 24-Hour Rental Clock
              </h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Rentals are counted on a full 24-hour cycle from your pickup timestamp.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-dark-200/80 shadow-subtle">
              <h3 className="font-bold text-sm text-dark-900 mb-1 flex items-center gap-2">
                <span>⛽</span> Fair Fuel Policy
              </h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Provided with sufficient petrol to reach nearest pump. Return at same level.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-dark-200/80 shadow-subtle">
              <h3 className="font-bold text-sm text-dark-900 mb-1 flex items-center gap-2">
                <span>🛡️</span> Instant Security Refund
              </h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Your ₹1,000 security deposit is returned immediately via UPI when the vehicle is returned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Card */}
      <section className="section-padding bg-white border-t border-dark-100 text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-lg mb-3">Ready to Book at Best Rate?</h2>
          <p className="text-dark-600 text-sm max-w-lg mx-auto mb-6">
            Get instant confirmation from our Varanasi fleet desk with zero advance booking fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I want to confirm vehicle availability and book at standard daily rates." })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-8 justify-center"
            >
              <span>Instant WhatsApp Confirmation</span>
              <span>→</span>
            </a>
            <Link href="/contact" className="btn-outline text-sm py-3 px-6 justify-center">
              Fill Online Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
