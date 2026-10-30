'use client';

import { useState } from 'react';
import { getWhatsAppBookingUrl } from '@/lib/config';

interface QuickBookWidgetProps {
  locations: { name: string; slug: string }[];
}

export default function QuickBookWidget({ locations }: QuickBookWidgetProps) {
  const [vehicle, setVehicle] = useState('Honda Activa 6G (₹299/day)');
  const [pickup, setPickup] = useState('Varanasi Cantt Station');
  const [duration, setDuration] = useState('1');

  const handleBook = () => {
    const url = getWhatsAppBookingUrl({
      vehicle,
      location: pickup,
      duration,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-dark-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <div className="text-xs font-semibold uppercase tracking-wider text-dark-500 mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-dark-900">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Quick Booking & Rate Check
        </span>
        <span className="text-primary-600 font-medium">Instant WhatsApp Confirmation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Vehicle Select */}
        <div>
          <label className="block text-[11px] font-semibold text-dark-600 uppercase mb-1">
            Choose Vehicle
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full bg-dark-50 border border-dark-200/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
          >
            <option value="Honda Activa 6G (₹299/day)">🛵 Honda Activa 6G • ₹299/day</option>
            <option value="TVS Jupiter 110cc (₹299/day)">🛵 TVS Jupiter • ₹299/day</option>
            <option value="Hero Pleasure Plus (₹299/day)">🛵 Hero Pleasure+ • ₹299/day</option>
            <option value="Honda CB Shine 125cc (₹499/day)">🏍️ Honda CB Shine 125cc • ₹499/day</option>
            <option value="Bajaj Pulsar 150 (₹599/day)">🏍️ Bajaj Pulsar 150 • ₹599/day</option>
            <option value="Royal Enfield Classic 350 (₹799/day)">🏍️ Royal Enfield 350 • ₹799/day</option>
          </select>
        </div>

        {/* Pickup Hub Select */}
        <div>
          <label className="block text-[11px] font-semibold text-dark-600 uppercase mb-1">
            Pickup Hub
          </label>
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full bg-dark-50 border border-dark-200/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
          >
            <option value="Varanasi Cantt Station">📍 Varanasi Cantt Station</option>
            <option value="Assi Ghat Hub">📍 Assi Ghat Hub</option>
            <option value="BHU Lanka Hub">📍 BHU Lanka Hub</option>
            <option value="Sigra Central">📍 Sigra Central</option>
            <option value="Godowlia Temple Hub">📍 Godowlia Temple Hub</option>
            <option value="Mahmoorganj">📍 Mahmoorganj</option>
            <option value="Sarnath Circuit">📍 Sarnath Circuit</option>
            <option value="Hotel Doorstep Delivery">🏨 Hotel Doorstep Delivery</option>
          </select>
        </div>

        {/* Duration Select & Book Button */}
        <div className="flex gap-2 items-end">
          <div className="w-24 sm:w-28 flex-shrink-0">
            <label className="block text-[11px] font-semibold text-dark-600 uppercase mb-1">
              Days
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-dark-50 border border-dark-200/80 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer"
            >
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days (Week)</option>
              <option value="15">15 Days</option>
              <option value="30">1 Month</option>
            </select>
          </div>

          <button
            onClick={handleBook}
            className="flex-1 btn-primary text-xs sm:text-sm py-2.5 px-3 rounded-xl justify-center font-semibold whitespace-nowrap"
          >
            <span>Book Ride</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
