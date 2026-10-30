import { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/components/FAQItem';
import StructuredData from '@/components/StructuredData';
import { siteConfig, getWhatsAppBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: "Scooty Rental in Varanasi | Honda Activa & TVS Jupiter from ₹299/day",
  description: "Best scooty rental in Varanasi, Banaras, Kashi from verified local fleets. Honda Activa 6G, TVS Jupiter, Hero Pleasure+ available. Self-drive rental near BHU, Assi, Cantt from ₹299/day.",
  keywords: [
    "scooty rental in varanasi",
    "activa rental varanasi",
    "rent scooty in banaras",
    "self drive scooty kashi",
    "two wheeler rental varanasi",
    "scooty on rent near me varanasi",
    "honda activa rent varanasi"
  ],
  alternates: {
    canonical: `${siteConfig.url}/scooty-rental-in-varanasi`,
  },
};

export default function ScootyRentalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Scooty Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kashi Rentals • by Awaken AI"
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

  const scooties = [
    {
      name: "Honda Activa 6G",
      price: 299,
      badge: "Most Popular",
      specs: [
        "110cc Silent Start Engine",
        "45+ kmpl Proven Mileage",
        "Telescopic Suspension for Cobblestones",
        "Mobile Charging Port",
        "Spacious Footboard & Boot",
        "Free ISI Helmet Included"
      ]
    },
    {
      name: "TVS Jupiter 110",
      price: 299,
      badge: "Best Comfort",
      specs: [
        "110cc EcoThrust Engine",
        "50+ kmpl High Fuel Efficiency",
        "Largest Under-Seat Storage in Class",
        "External Fuel Fill",
        "Bright LED Headlamp for Ghats",
        "Free ISI Helmet Included"
      ]
    },
    {
      name: "Hero Pleasure Plus",
      price: 299,
      badge: "Easy Handling",
      specs: [
        "110cc Lightweight Body",
        "Effortless to Park in Narrow Gallis",
        "Low Seat Height – Ideal for Solo Travel",
        "45+ kmpl City Mileage",
        "Smooth Automatic Twist-and-Go",
        "Free ISI Helmet Included"
      ]
    }
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>🛵</span>
            <span>Self-Drive Scooty Fleet</span>
          </div>

          <h1 className="heading-xl mb-4">
            Scooty Rental in Varanasi <br className="hidden sm:inline" />
            <span className="text-primary-600">Starting at Just ₹299/day</span>
          </h1>

          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto mb-8">
            Rent automatic Honda Activa and TVS Jupiter scooties from verified local fleets. Effortless navigation through Banaras lanes, ghats, and temple corridors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppBookingUrl({ vehicle: "Honda Activa 6G", duration: 1 })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              <span>Instant WhatsApp Booking</span>
              <span>→</span>
            </a>
            <Link href="/pricing" className="btn-outline text-sm py-3 px-5">
              View Rental Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Scooty Fleet Cards */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="heading-lg mb-2">Our Scooty Fleet</h2>
            <p className="text-dark-600 text-sm">
              Serviced, washed, and tanked before every booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scooties.map((scooty, index) => {
              const bookUrl = getWhatsAppBookingUrl({
                vehicle: scooty.name,
                duration: 1
              });

              return (
                <div
                  key={index}
                  className="bg-white border border-dark-200/80 rounded-2xl p-6 sm:p-7 shadow-subtle hover:border-dark-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge-ember text-[11px]">
                        {scooty.badge}
                      </span>
                      <span className="badge-verified text-[11px]">
                        ✓ In Stock
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-dark-950 mb-1">{scooty.name}</h3>
                    
                    <div className="flex items-baseline gap-1 my-3">
                      <span className="text-3xl font-extrabold text-primary-600">₹{scooty.price}</span>
                      <span className="text-xs text-dark-500">/ day (24 hrs)</span>
                    </div>

                    <div className="space-y-2 py-4 border-t border-b border-dark-100 my-4">
                      {scooty.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-dark-700">
                          <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-xs py-2.5 rounded-xl justify-center font-semibold"
                  >
                    <span>Book {scooty.name}</span>
                    <span>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Rent Scooty in Varanasi */}
      <section className="section-padding bg-dark-50/60 border-t border-b border-dark-100">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="heading-lg mb-2">Why Scooty is the Best Choice in Kashi</h2>
            <p className="text-dark-600 text-sm">Freedom to access lanes where cars and large buses can never enter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Conquer Ancient Lanes</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Varanasi&apos;s most beautiful temples, lassi shops, and river ghats are tucked inside narrow streets. An automatic scooty slips right through.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Cheaper Than Auto Taxis</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                A single auto ride between Cantt and Assi can cost ₹250. At ₹299/day, you get unlimited 24-hour freedom across the entire city.
              </p>
            </div>

            <div className="card-minimal">
              <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-dark-950 mb-1.5">Hassle-Free Parking</h3>
              <p className="text-xs text-dark-600 leading-relaxed">
                Designated two-wheeler parking stands exist outside all major ghats, Vishwanath Temple corridors, and BHU campus gates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Scooty Routes */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-2">Recommended Itinerary Routes</h2>
            <p className="text-dark-600 text-sm">Tested and loved by thousands of travelers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
              <span className="text-xs font-bold text-primary-600 uppercase">Route 01 • Ghat Circuit</span>
              <h3 className="font-bold text-sm text-dark-950 my-1">Assi Ghat → Dashashwamedh → Manikarnika</h3>
              <p className="text-xs text-dark-600">Distance: ~8 km • Catch Subah-e-Banaras at 5 AM and evening Ganga Aarti.</p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
              <span className="text-xs font-bold text-primary-600 uppercase">Route 02 • Temple Trail</span>
              <h3 className="font-bold text-sm text-dark-950 my-1">Kashi Vishwanath → Durga Temple → Sankat Mochan</h3>
              <p className="text-xs text-dark-600">Distance: ~10 km • Easy two-wheeler parking at all temple stands.</p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
              <span className="text-xs font-bold text-primary-600 uppercase">Route 03 • Buddhist Circuit</span>
              <h3 className="font-bold text-sm text-dark-950 my-1">Varanasi Center → Sarnath Stupa & Museum</h3>
              <p className="text-xs text-dark-600">Distance: ~22 km roundtrip • Smooth 4-lane highway ride on an Activa.</p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200/80">
              <span className="text-xs font-bold text-primary-600 uppercase">Route 04 • Green Campus Tour</span>
              <h3 className="font-bold text-sm text-dark-950 my-1">BHU Gate → New VT → Bharat Kala Bhavan</h3>
              <p className="text-xs text-dark-600">Distance: ~6 km • Serene tree-lined campus boulevards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-dark-50/60 border-t border-dark-100">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-center mb-10">Scooty Rental FAQs</h2>
          <div className="space-y-3.5">
            <FAQItem
              question="Which scooty is best for Varanasi roads?"
              answer="Honda Activa 6G is the crowd favorite with great suspension for cobblestone roads. TVS Jupiter offers slightly more legroom and high fuel efficiency."
            />
            <FAQItem
              question="Can I rent a scooty for 2-3 days or weekly?"
              answer="Yes! We provide 1-day, 3-day, 7-day, and monthly packages. Extended bookings receive automated multi-day discounts."
            />
            <FAQItem
              question="Is an original Driving License required?"
              answer="Yes, a valid original two-wheeler driving license is required for verification. We take a quick digital photo and hand back your original on the spot."
            />
            <FAQItem
              question="What if the scooty gets a flat tire or battery issue?"
              answer="We operate a 24/7 on-call roadside assistance network across Varanasi. We will reach your location with a mechanic or replacement scooty within 2 hours."
            />
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="section-padding bg-white border-t border-dark-100 text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-lg mb-3">Book Your Scooty in 2 Minutes</h2>
          <p className="text-dark-600 text-sm mb-6">
            Instant confirmation on WhatsApp with zero advance fee. Pick up at Cantt, Assi, BHU, or your hotel.
          </p>
          <a
            href={getWhatsAppBookingUrl({ vehicle: "Honda Activa 6G", duration: 1 })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-8 justify-center"
          >
            <span>Book Scooty on WhatsApp Now</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
