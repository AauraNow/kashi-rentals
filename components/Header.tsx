'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom px-4 py-2 md:py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo + Brand name (desktop: left-aligned together) */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Kashi Rentals - Scooty & Bike Rental in Varanasi"
              width={64}
              height={64}
              className="h-10 w-10 md:h-16 md:w-16 object-contain"
              priority
            />
            {/* Brand name – visible on desktop only next to logo */}
            <span
              className="hidden md:block text-[2.2rem] font-extrabold tracking-wide text-primary-600"
              style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)" }}
            >
              Kashi Rentals
            </span>

            {/* Brand name – centered on mobile between logo and hamburger */}
            <span
              className="md:hidden absolute left-1/2 -translate-x-1/2 text-[1.1rem] font-extrabold tracking-wide text-primary-600 whitespace-nowrap"
              style={{ fontFamily: "var(--font-nunito, 'Nunito', sans-serif)" }}
            >
              Kashi Rentals
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-dark-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/scooty-rental-in-varanasi" className="text-dark-700 hover:text-primary-600 transition-colors">
              Scooty Rental
            </Link>
            <Link href="/bike-rental-in-varanasi" className="text-dark-700 hover:text-primary-600 transition-colors">
              Bike Rental
            </Link>
            <Link href="/locations" className="text-dark-700 hover:text-primary-600 transition-colors">
              Locations
            </Link>
            <Link href="/pricing" className="text-dark-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-dark-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/scooty-rental-in-varanasi" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Scooty Rental
            </Link>
            <Link href="/bike-rental-in-varanasi" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Bike Rental
            </Link>
            <Link href="/locations" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Locations
            </Link>
            <Link href="/pricing" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block text-dark-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary inline-block">
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
