import Link from 'next/link';
import { siteConfig, getWhatsAppPartnerUrl } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-dark-400 border-t border-dark-900/80">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-dark-900">
          
          {/* Brand & Platform Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-dark-900 text-primary-400 border border-dark-800">
                {siteConfig.brandSubtitle}
              </span>
            </div>
            
            <p className="text-sm text-dark-400 leading-relaxed">
              The modern two-wheeler mobility network. We connect travelers, students, and pilgrims with vetted local scooty and bike fleets across Varanasi.
            </p>

            <div className="text-xs space-y-1.5 text-dark-400 pt-2">
              <p className="flex items-center gap-2 text-dark-300">
                <span>📍</span> Near Varanasi Cantt Railway Station, UP
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> {siteConfig.contact.email}
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> {siteConfig.contact.phoneDisplay}
              </p>
            </div>
          </div>

          {/* Renter Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore Rentals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/scooty-rental-in-varanasi" className="hover:text-primary-400 transition-colors">
                  Scooty Rental (Activa & Jupiter)
                </Link>
              </li>
              <li>
                <Link href="/bike-rental-in-varanasi" className="hover:text-primary-400 transition-colors">
                  Bike Rental (Royal Enfield & 150cc)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing & Daily / Weekly Passes
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary-400 transition-colors">
                  All 12+ Pickup Hubs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Varanasi Travel Guides & Routes
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary-400 transition-colors">
                  Rental Agreement & Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Pickup Hubs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Popular Pickup Hubs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/locations/varanasi-cantt" className="hover:text-primary-400 transition-colors">
                  Varanasi Cantt Station Hub
                </Link>
              </li>
              <li>
                <Link href="/locations/assi-ghat" className="hover:text-primary-400 transition-colors">
                  Assi Ghat & South Varanasi
                </Link>
              </li>
              <li>
                <Link href="/locations/bhu" className="hover:text-primary-400 transition-colors">
                  BHU & Lanka Student Hub
                </Link>
              </li>
              <li>
                <Link href="/locations/sigra" className="hover:text-primary-400 transition-colors">
                  Sigra & Central City
                </Link>
              </li>
              <li>
                <Link href="/locations/godowlia" className="hover:text-primary-400 transition-colors">
                  Godowlia & Temple Corridor
                </Link>
              </li>
              <li>
                <Link href="/locations/sarnath" className="hover:text-primary-400 transition-colors">
                  Sarnath Buddhist Circuit
                </Link>
              </li>
            </ul>
          </div>

          {/* For Fleet Operators & Expansion */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              For Fleet Operators
            </h4>
            <div className="bg-dark-900/90 border border-dark-800 rounded-xl p-4 text-xs space-y-3">
              <p className="text-dark-300 font-medium">
                Own scootys or bikes in Varanasi?
              </p>
              <p className="text-dark-400 leading-relaxed">
                Join our aggregator network to get verified tourist bookings and high-intent leads with zero upfront listing fees.
              </p>
              <a
                href={getWhatsAppPartnerUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors"
              >
                <span>💼 List Your Fleet</span>
                <span>→</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-dark-900 text-xs">
              <span className="text-dark-500 block">Expansion Roadmap:</span>
              <span className="text-dark-400">Ayodhya • Prayagraj • Rishikesh</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Clean SEO Breadcrumbs */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dark-500">
          <p>
            &copy; {currentYear} {siteConfig.name} ({siteConfig.brandSubtitle}). All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-dark-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">About Platform</Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-white transition-colors">Rental Rates</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
