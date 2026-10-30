'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'renter' | 'partner'>('renter');

  // Customer booking form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'scooty',
    pickupLocation: 'Varanasi Cantt Station',
    startDate: '',
    duration: '1',
    message: ''
  });

  // Partner fleet onboarding form state
  const [partnerData, setPartnerData] = useState({
    ownerName: '',
    phone: '',
    agencyName: '',
    fleetCount: '1-5',
    vehicleTypes: 'Activa & Jupiters',
    location: 'Varanasi'
  });

  const handleRenterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Booking Request (via Website):
• Name: ${formData.name}
• Phone: ${formData.phone}
• Vehicle: ${formData.vehicleType}
• Pickup: ${formData.pickupLocation}
• Start Date: ${formData.startDate || 'Immediate'}
• Duration: ${formData.duration} day(s)
• Message: ${formData.message || 'None'}`;

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Fleet Partner Onboarding Request:
• Owner Name: ${partnerData.ownerName}
• Phone: ${partnerData.phone}
• Agency / Fleet: ${partnerData.agencyName || 'Individual Owner'}
• Total Vehicles: ${partnerData.fleetCount}
• Vehicle Types: ${partnerData.vehicleTypes}
• City / Hub: ${partnerData.location}`;

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-dark-50/70 via-white to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 badge-pill mb-4">
            <span>💬</span>
            <span>Direct Desk & Partner Onboarding</span>
          </div>
          <h1 className="heading-xl mb-4">Get in Touch</h1>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Book your ride or list your two-wheeler fleet on the Awaken Rentals platform. Our Varanasi support desk is available 7 AM – 9 PM daily.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Channels */}
      <section className="section-padding bg-white border-t border-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-dark-200/80 rounded-3xl p-6 sm:p-8 shadow-card">
                
                {/* Form Tabs */}
                <div className="flex rounded-xl bg-dark-100 p-1 mb-8">
                  <button
                    onClick={() => setActiveTab('renter')}
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      activeTab === 'renter'
                        ? 'bg-white text-dark-950 shadow-subtle'
                        : 'text-dark-600 hover:text-dark-950'
                    }`}
                  >
                    🛵 Renter Booking
                  </button>
                  <button
                    onClick={() => setActiveTab('partner')}
                    className={`flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      activeTab === 'partner'
                        ? 'bg-white text-dark-950 shadow-subtle'
                        : 'text-dark-600 hover:text-dark-950'
                    }`}
                  >
                    💼 List Your Fleet (Partner)
                  </button>
                </div>

                {activeTab === 'renter' ? (
                  <form onSubmit={handleRenterSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="name@email.com"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Vehicle Type *
                        </label>
                        <select
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        >
                          <option value="Scooty - Honda Activa 6G (₹299/day)">🛵 Honda Activa 6G (₹299/day)</option>
                          <option value="Scooty - TVS Jupiter (₹299/day)">🛵 TVS Jupiter (₹299/day)</option>
                          <option value="Scooty - Hero Pleasure+ (₹299/day)">🛵 Hero Pleasure+ (₹299/day)</option>
                          <option value="Bike - Honda CB Shine (₹499/day)">🏍️ Honda CB Shine 125 (₹499/day)</option>
                          <option value="Bike - Bajaj Pulsar 150 (₹599/day)">🏍️ Bajaj Pulsar 150 (₹599/day)</option>
                          <option value="Bike - Royal Enfield 350 (₹799/day)">🏍️ Royal Enfield 350 (₹799/day)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Pickup Hub *
                        </label>
                        <select
                          value={formData.pickupLocation}
                          onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        >
                          <option value="Varanasi Cantt Station">Varanasi Cantt Station</option>
                          <option value="Assi Ghat Hub">Assi Ghat</option>
                          <option value="BHU Lanka Hub">BHU Lanka</option>
                          <option value="Sigra Central">Sigra</option>
                          <option value="Godowlia Temple Hub">Godowlia</option>
                          <option value="Mahmoorganj">Mahmoorganj</option>
                          <option value="Sarnath Circuit">Sarnath</option>
                          <option value="Hotel Doorstep Delivery">Hotel Doorstep Delivery</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Start Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Duration (Days) *
                        </label>
                        <input
                          type="number"
                          min="1"
                          required
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={formData.duration}
                          onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                        Special Requests (Hotel address, extra helmet, etc.)
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Any questions or specific delivery locations..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full text-sm sm:text-base py-3.5 rounded-xl font-semibold justify-center"
                    >
                      <span>Send Booking Request via WhatsApp</span>
                      <span>→</span>
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                        Your Name / Agency Owner *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Singh"
                        className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        value={partnerData.ownerName}
                        onChange={(e) => setPartnerData({...partnerData, ownerName: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          WhatsApp Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={partnerData.phone}
                          onChange={(e) => setPartnerData({...partnerData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Agency / Brand Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Banaras Bike Care"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={partnerData.agencyName}
                          onChange={(e) => setPartnerData({...partnerData, agencyName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          Vehicles in Fleet
                        </label>
                        <select
                          value={partnerData.fleetCount}
                          onChange={(e) => setPartnerData({...partnerData, fleetCount: e.target.value})}
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        >
                          <option value="1-3">1 to 3 vehicles (Individual)</option>
                          <option value="4-10">4 to 10 vehicles</option>
                          <option value="11-25">11 to 25 vehicles</option>
                          <option value="25+">25+ vehicles (Full Agency)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                          City / Operating Hub
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                          value={partnerData.location}
                          onChange={(e) => setPartnerData({...partnerData, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark-700 uppercase mb-1.5">
                        Vehicle Models (Activa, Classic 350, Jupiter, etc.)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-dark-50 border border-dark-200/80 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all"
                        value={partnerData.vehicleTypes}
                        onChange={(e) => setPartnerData({...partnerData, vehicleTypes: e.target.value})}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full text-sm sm:text-base py-3.5 rounded-xl font-semibold justify-center"
                    >
                      <span>Submit Fleet Partner Application</span>
                      <span>→</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Direct Contact Channels Column */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* WhatsApp Card */}
              <div className="card-minimal">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                  Fastest Response (2 Mins)
                </span>
                <h3 className="font-bold text-base text-dark-950 mb-1">WhatsApp Helpdesk</h3>
                <p className="text-xs text-dark-500 mb-3">Instant booking, helmet queries, and live availability</p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-bold text-base hover:underline flex items-center gap-1.5"
                >
                  <span>💬 {siteConfig.contact.phoneDisplay}</span>
                  <span>→</span>
                </a>
              </div>

              {/* Direct Call Card */}
              <div className="card-minimal">
                <h3 className="font-bold text-base text-dark-950 mb-1">Phone Call Support</h3>
                <p className="text-xs text-dark-500 mb-3">Speak directly with our Varanasi pickup desk</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-dark-900 font-bold text-base hover:underline"
                >
                  📞 {siteConfig.contact.phoneDisplay}
                </a>
                <p className="text-[11px] text-dark-400 mt-1">Available 7:00 AM – 9:00 PM everyday</p>
              </div>

              {/* Email Card */}
              <div className="card-minimal">
                <h3 className="font-bold text-base text-dark-950 mb-1">Business & Fleet Enquiries</h3>
                <p className="text-xs text-dark-500 mb-3">Partnerships, group bookings, and corporate tie-ups</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-dark-900 font-medium text-sm hover:underline"
                >
                  ✉️ {siteConfig.contact.email}
                </a>
              </div>

              {/* Physical Station Hub */}
              <div className="card-subtle">
                <h3 className="font-bold text-base text-dark-950 mb-1">Main Pickup Desk</h3>
                <p className="text-xs text-dark-600 leading-relaxed mb-2">
                  {siteConfig.contact.address}
                </p>
                <span className="text-[11px] text-dark-500 font-medium">
                  Convenient 3-minute walk from Varanasi Cantt Railway Station Exit
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
