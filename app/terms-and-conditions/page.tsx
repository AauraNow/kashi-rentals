import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: "Terms and Conditions & Rental Policy | Kashi Rentals",
  description: "Terms and conditions for two-wheeler rentals in Varanasi. Transparent rental policies, security deposit rules, documents, and cancellation guidelines.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white border-b border-dark-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>⚖️</span>
            <span>Policy & Guidelines</span>
          </div>
          <h1 className="heading-xl mb-4">Terms & Conditions</h1>
          <p className="text-sm sm:text-base text-dark-600 max-w-2xl mx-auto">
            Please review our rental agreement, document requirements, and security deposit terms before picking up your vehicle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-10 text-sm sm:text-base text-dark-700 leading-relaxed">
            
            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">1. Rental Agreement</h2>
              <p className="text-dark-600">
                By booking and receiving a vehicle from {siteConfig.name} ({siteConfig.brandSubtitle}), you agree to these operating terms. The renter must be at least 18 years of age and hold a valid government-issued two-wheeler driving license.
              </p>
            </div>

            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">2. Required Verification Documents</h2>
              <ul className="space-y-2 text-dark-600 list-disc list-inside">
                <li>Original Driving License (valid for 2-wheeler/gearless or geared vehicle).</li>
                <li>Aadhar Card, Passport, or Voter ID for identity verification.</li>
                <li>Digital photocopy or capture during pickup.</li>
                <li>Local address proof (for tourists: hotel booking voucher or digital confirmation).</li>
              </ul>
            </div>

            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">3. Refundable Security Deposit</h2>
              <p className="text-dark-600 mb-2">
                A refundable security deposit of ₹1,000 to ₹1,500 is collected at pickup.
              </p>
              <p className="text-dark-600">
                The deposit is returned 100% immediately via UPI upon safe inspection of the vehicle, provided there is no severe accidental damage or traffic challan.
              </p>
            </div>

            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">4. Rental Calculation & Fair Fuel Policy</h2>
              <p className="text-dark-600 mb-2">
                Rentals run on a full 24-hour cycle from the pickup timestamp. Late returns beyond a 30-minute grace period will be billed at standard hourly rates.
              </p>
              <p className="text-dark-600">
                Vehicles are provided with sufficient fuel to reach the nearest petrol station. Riders refuel as needed and return the vehicle with approximately the same fuel level.
              </p>
            </div>

            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">5. Safety & Helmet Mandate</h2>
              <p className="text-dark-600 mb-2">
                Wearing a helmet is mandatory by law in Uttar Pradesh for both the rider and pillion passenger. One sanitized ISI-approved helmet is provided completely free of charge. Extra helmets can be requested for ₹50/day.
              </p>
              <p className="text-dark-600">
                Riding under the influence of alcohol, narcotics, or dangerous stunt driving is strictly prohibited and results in immediate rental termination.
              </p>
            </div>

            <div className="pb-8 border-b border-dark-100">
              <h2 className="text-xl font-bold text-dark-950 mb-3">6. Roadside Assistance & Maintenance</h2>
              <p className="text-dark-600">
                In the rare event of a puncture or mechanical breakdown, contact our 24/7 support desk via WhatsApp or phone. We will dispatch assistance or replace your vehicle within 2 hours across Varanasi city limits.
              </p>
            </div>

            {/* Contact Box */}
            <div className="card-minimal bg-dark-50 p-6 sm:p-8">
              <h3 className="font-bold text-base text-dark-950 mb-3">Support & Escalations</h3>
              <div className="text-xs sm:text-sm text-dark-600 space-y-1.5">
                <p><strong>Desk Phone:</strong> {siteConfig.contact.phoneDisplay}</p>
                <p><strong>Support Email:</strong> {siteConfig.contact.email}</p>
                <p><strong>Location:</strong> {siteConfig.contact.address}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-dark-200/80 flex items-center justify-between text-xs text-dark-500">
                <span>Last Updated: October 2026</span>
                <Link href="/contact" className="text-primary-600 font-semibold hover:underline">
                  Contact Desk →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
