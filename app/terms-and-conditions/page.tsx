import { Metadata } from 'next';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
const phoneNumber = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';
const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@varanasibikerental.com';

export const metadata: Metadata = {
  title: "Terms and Conditions | Kashi Rentals",
  description: "Terms and conditions for scooty and bike rental in Varanasi. Rental agreement, policies, and guidelines.",
  alternates: {
    canonical: 'https://rentals.awakenais.com/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <h1 className="heading-xl mb-6 text-center">Terms and Conditions</h1>
          <p className="text-lg text-dark-600 text-center max-w-3xl mx-auto">
            Please read these terms carefully before renting a scooty or bike from us
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">1. Rental Agreement</h2>
              <div className="space-y-3 text-dark-700">
                <p>By renting a vehicle from Kashi Rentals, you agree to these terms and conditions.</p>
                <p>The renter must be at least 18 years old and hold a valid driving license.</p>
                <p>The rental agreement is between the customer and Kashi Rentals.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">2. Required Documents</h2>
              <ul className="space-y-2 text-dark-700 list-disc list-inside">
                <li>Valid original driving license (mandatory)</li>
                <li>Aadhar Card or any government-issued photo ID</li>
                <li>Self-attested photocopies of both documents</li>
                <li>Local address proof (for tourists: hotel booking confirmation)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">3. Security Deposit</h2>
              <div className="space-y-3 text-dark-700">
                <p>A refundable security deposit is required at the time of vehicle pickup.</p>
                <p>Deposit amount: ₹1,000 to ₹3,000 depending on vehicle type and rental duration.</p>
                <p>Deposit will be refunded within 24-48 hours after vehicle return and inspection.</p>
                <p>Deductions from deposit may occur for damages, traffic violations, or fuel shortage.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">4. Rental Charges</h2>
              <div className="space-y-3 text-dark-700">
                <p>Rental charges are based on 24-hour periods from time of pickup.</p>
                <p>Late returns will be charged at hourly rates (1/24th of daily rate per hour).</p>
                <p>Payment accepted: Cash, UPI, Google Pay, PhonePe, Paytm, Bank Transfer.</p>
                <p>Advance payment of 50% may be required for booking confirmation.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">5. Fuel Policy</h2>
              <div className="space-y-3 text-dark-700">
                <p>Vehicles are provided with minimal fuel (₹50-100 worth).</p>
                <p>Customer is responsible for all fuel costs during rental period.</p>
                <p>Vehicle must be returned with same fuel level or pay refueling charges.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">6. Usage Restrictions</h2>
              <ul className="space-y-2 text-dark-700 list-disc list-inside">
                <li>Vehicles not to be used for racing, stunts, or illegal activities</li>
                <li>No subleasing or lending to third parties</li>
                <li>Maximum 2 riders per vehicle (rider + pillion)</li>
                <li>Helmets mandatory for both riders (provided free)</li>
                <li>Riding under influence of alcohol/drugs strictly prohibited</li>
                <li>Long outstation trips require prior approval</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">7. Insurance and Liability</h2>
              <div className="space-y-3 text-dark-700">
                <p>All vehicles covered with third-party insurance.</p>
                <p>Rider is responsible for personal safety and any injuries.</p>
                <p>Customer liable for damages to vehicle during rental period.</p>
                <p>Traffic violations and fines are customer&apos;s responsibility.</p>
                <p>Theft or total loss requires police FIR and full vehicle cost.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">8. Maintenance and Breakdowns</h2>
              <div className="space-y-3 text-dark-700">
                <p>Report any mechanical issues immediately to our support team.</p>
                <p>Do not attempt self-repairs without authorization.</p>
                <p>We provide 24/7 roadside assistance across Varanasi.</p>
                <p>Replacement vehicle arranged within 1-2 hours if needed.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">9. Cancellation Policy</h2>
              <div className="space-y-3 text-dark-700">
                <p>Cancellations 24+ hours before pickup: Full refund of advance</p>
                <p>Cancellations 12-24 hours before: 50% refund</p>
                <p>Cancellations less than 12 hours: No refund</p>
                <p>We reserve right to cancel bookings in unforeseen circumstances</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">10. Vehicle Return</h2>
              <ul className="space-y-2 text-dark-700 list-disc list-inside">
                <li>Return vehicle at agreed time and location</li>
                <li>Vehicle must be in same condition as provided</li>
                <li>Inform us 2 hours in advance if extension needed</li>
                <li>Late returns charged at hourly rate</li>
                <li>Fuel level same as pickup or pay refueling cost</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">11. Prohibited Use</h2>
              <ul className="space-y-2 text-dark-700 list-disc list-inside">
                <li>Commercial use or taxi service</li>
                <li>Carrying illegal goods or substances</li>
                <li>Off-road riding or racing</li>
                <li>Overloading beyond recommended capacity</li>
                <li>Using without valid license</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark-900">12. Dispute Resolution</h2>
              <div className="space-y-3 text-dark-700">
                <p>Any disputes will be resolved amicably through discussion.</p>
                <p>If unresolved, jurisdiction lies with Varanasi courts only.</p>
                <p>Terms subject to change without prior notice.</p>
              </div>
            </div>

            <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-dark-900">Contact Information</h2>
              <div className="space-y-2 text-dark-700">
                <p><strong>Phone:</strong> {phoneNumber}</p>
                <p><strong>WhatsApp:</strong> {phoneNumber}</p>
                <p><strong>Email:</strong> {businessEmail}</p>
                <p><strong>Address:</strong> Near Varanasi Cantt Railway Station, Varanasi - 221002</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-dark-600 italic">Last Updated: February 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
