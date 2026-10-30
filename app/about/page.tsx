import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "About Us | The Awaken AI Mobility Network & Kashi Rentals",
  description: "Learn about Kashi Rentals by Awaken AI — modernizing two-wheeler mobility in Varanasi by aggregating verified local fleets. Transparent pricing, sanitized helmets, 24/7 support.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>🛵</span>
            <span>Platform Vision</span>
          </div>
          <h1 className="heading-xl mb-4">
            Modern Two-Wheeler Mobility in Varanasi
          </h1>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            {siteConfig.name} ({siteConfig.brandSubtitle}) was founded to help travelers, students, and pilgrims navigate Kashi with complete independence, fair prices, and reliable vehicles.
          </p>
        </div>
      </section>

      {/* Story & Aggregator Mission */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6 text-sm sm:text-base text-dark-700 leading-relaxed">
            <h2 className="heading-md text-dark-950">Our Story & Aggregator Platform</h2>
            <p>
              Varanasi is one of the oldest living cities in the world. Its true magic lives inside ancient cobblestone lanes, riverside ghats, and neighbourhood sweet shops — places where tourist buses and auto rickshaws cannot reach.
            </p>
            <p>
              Before Kashi Rentals, renting a scooty in Varanasi meant dealing with fragmented roadside shops, unpredictable pricing, arbitrary security deposit disputes, and unmaintained vehicles. We set out to fix that by building a modern rental aggregator network.
            </p>
            <p>
              Today, we partner with verified local fleet operators across Varanasi. We inspect every vehicle across 18 safety checkpoints, enforce standardized fair pricing starting at ₹299/day, guarantee prompt deposit refunds, and back every rider with 24/7 on-call roadside assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-lg text-center mb-10">Our Standards of Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Strict Fleet Vetting</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Only well-maintained Honda Activa, TVS Jupiter, and Royal Enfield vehicles that pass comprehensive braking and engine checks are allowed on our platform.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">100% Deposit Security</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                We eliminate the risk of unfair deductions. The refundable security deposit is transferred back instantly via UPI upon standard vehicle return.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Emergency Assistance</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Punctures, battery drained, or key misplacement? Our on-ground Varanasi quick-response network dispatches help within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-City Expansion Roadmap */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <span className="badge-ember text-xs mb-3">Expansion Roadmap</span>
          <h2 className="heading-lg mb-4">From Kashi to India&apos;s Cultural Circuits</h2>
          <p className="text-dark-600 text-sm max-w-2xl mx-auto mb-8">
            Varanasi is our launch hub. Under the Awaken AI mobility banner, we are preparing expansion into Ayodhya, Prayagraj, and Rishikesh to deliver the same reliable two-wheeler freedom.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500 text-white">
              ● Varanasi (Active)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 text-dark-600">
              Ayodhya (Coming Soon)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 text-dark-600">
              Prayagraj (Coming Soon)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 text-dark-600">
              Rishikesh (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section-padding bg-dark-50 border-t border-dark-100 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-lg mb-3">Experience Varanasi with Freedom</h2>
          <p className="text-dark-600 text-sm mb-6">
            Book your scooty or motorcycle from verified local fleets starting at ₹299/day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I want to rent a vehicle in Varanasi. Please confirm availability." })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-8 justify-center"
            >
              <span>Instant WhatsApp Booking</span>
              <span>→</span>
            </a>
            <Link href="/pricing" className="btn-outline text-sm py-3 px-6 justify-center">
              View Rental Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
