'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig, getWhatsAppBookingUrl, getWhatsAppPartnerUrl } from '@/lib/config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-dark-200/70 transition-all">
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo & Platform Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-xl overflow-hidden bg-primary-50 border border-primary-100 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Kashi Rentals - by Awaken AI"
                width={44}
                height={44}
                className="object-contain p-0.5"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg md:text-xl font-bold tracking-tight text-dark-950 group-hover:text-primary-600 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-dark-100 text-dark-600 border border-dark-200/60 uppercase tracking-wider">
                  {siteConfig.brandSubtitle}
                </span>
              </div>
              <span className="text-[11px] text-dark-500 font-medium hidden md:block">
                Launch Hub: <span className="text-dark-900 font-semibold">{siteConfig.currentCity}</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <Link 
              href="/scooty-rental-in-varanasi" 
              className="text-dark-600 hover:text-dark-950 transition-colors"
            >
              Scootys
            </Link>
            <Link 
              href="/bike-rental-in-varanasi" 
              className="text-dark-600 hover:text-dark-950 transition-colors"
            >
              Bikes
            </Link>
            <Link 
              href="/pricing" 
              className="text-dark-600 hover:text-dark-950 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/locations" 
              className="text-dark-600 hover:text-dark-950 transition-colors"
            >
              Pickup Hubs
            </Link>
            <Link 
              href="/blog" 
              className="text-dark-600 hover:text-dark-950 transition-colors"
            >
              Travel Guides
            </Link>
            
            {/* Operator Lead Capture Link */}
            <a 
              href={getWhatsAppPartnerUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-1 bg-primary-50 hover:bg-primary-100/70 px-2.5 py-1 rounded-full text-xs transition-colors"
            >
              <span>💼</span> List Your Fleet
            </a>
          </div>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-xs font-semibold text-dark-600 hover:text-dark-900 px-3 py-2 transition-colors"
            >
              📞 {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={getWhatsAppBookingUrl({ customText: "Hi! I want to check availability for scooty/bike rental in Varanasi." })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs md:text-sm py-2.5 px-5"
            >
              <span>Instant Book</span>
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Mobile Right Controls: City Tag + Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-dark-100 text-dark-700 border border-dark-200">
              📍 {siteConfig.currentCity}
            </span>

            <button
              className="p-2 rounded-lg text-dark-700 hover:bg-dark-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-200/70 py-4 px-1 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <Link
                href="/scooty-rental-in-varanasi"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-dark-50 rounded-xl text-center text-sm font-medium text-dark-800 hover:bg-dark-100"
              >
                🛵 Scooty Rental
              </Link>
              <Link
                href="/bike-rental-in-varanasi"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-dark-50 rounded-xl text-center text-sm font-medium text-dark-800 hover:bg-dark-100"
              >
                🏍️ Bike Rental
              </Link>
            </div>

            <div className="space-y-1 text-sm font-medium text-dark-700">
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-dark-100 text-dark-800"
              >
                Pricing & Packages
              </Link>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-dark-100 text-dark-800"
              >
                Pickup Hubs (12+ in Kashi)
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-dark-100 text-dark-800"
              >
                Varanasi Travel Guides & Routes
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-dark-100 text-dark-800"
              >
                About Our Fleet Network
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-dark-100 text-dark-800"
              >
                Contact & Support
              </Link>
            </div>

            <div className="pt-2 border-t border-dark-200/60 flex flex-col gap-2">
              <a
                href={getWhatsAppBookingUrl({ customText: "Hi! I want to check scooty/bike rental availability in Varanasi." })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center justify-center text-sm py-3"
              >
                Instant WhatsApp Booking
              </a>
              <a
                href={getWhatsAppPartnerUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center justify-center text-xs py-2.5 text-primary-600 border-primary-200 bg-primary-50"
              >
                💼 Partner With Us (List Your Fleet)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
