'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const phoneNumber = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'contact@varanasibikerental.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'scooty',
    pickupLocation: '',
    startDate: '',
    duration: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Booking Request:
Name: ${formData.name}
Phone: ${formData.phone}
Pickup: ${formData.pickupLocation}
Date: ${formData.startDate}
Duration: ${formData.duration} days
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Contact Kashi Rentals</h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto">
            Ready to explore Varanasi? Fill the form below or reach us directly via WhatsApp or phone.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="heading-md mb-6">Booking Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Vehicle Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  >
                    <option value="scooty">Scooty (₹299/day)</option>
                    <option value="bike-125cc">Bike 125cc (₹499/day)</option>
                    <option value="bike-150cc">Bike 150cc (₹599/day)</option>
                    <option value="royal-enfield">Royal Enfield (₹799/day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Pickup Location *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                  >
                    <option value="">Select Location</option>
                    <option value="Varanasi Cantt Railway Station">Varanasi Cantt Railway Station</option>
                    <option value="Sigra">Sigra</option>
                    <option value="Assi Ghat">Assi Ghat</option>
                    <option value="BHU/Lanka">BHU/Lanka</option>
                    <option value="Mahmoorganj">Mahmoorganj</option>
                    <option value="Godowlia">Godowlia</option>
                    <option value="Sarnath">Sarnath</option>
                    <option value="Other">Other (Specify in message)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Start Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-dark-700 font-semibold mb-2">Duration (Days) *</label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark-700 font-semibold mb-2">Additional Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg">
                  Send Booking Request via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    WhatsApp (Fastest Response)
                  </h3>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold text-lg hover:underline">
                    {phoneNumber}
                  </a>
                  <p className="text-dark-600 mt-2">Available 7 AM - 9 PM Daily</p>
                </div>

                <div className="bg-dark-50 p-6 rounded-lg border border-dark-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Phone Call
                  </h3>
                  <a href={`tel:${phoneNumber}`} className="text-primary-600 font-bold text-lg hover:underline">
                    {phoneNumber}
                  </a>
                  <p className="text-dark-600 mt-2">7:00 AM - 9:00 PM</p>
                </div>

                <div className="bg-dark-50 p-6 rounded-lg border border-dark-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-3">✉️</span>
                    Email
                  </h3>
                  <a href={`mailto:${email}`} className="text-primary-600 font-bold hover:underline">
                    {email}
                  </a>
                  <p className="text-dark-600 mt-2">We&apos;ll respond within 24 hours</p>
                </div>

                <div className="bg-dark-50 p-6 rounded-lg border border-dark-200">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    Office Location
                  </h3>
                  <p className="text-dark-700">Near Varanasi Cantonment Railway Station</p>
                  <p className="text-dark-700">Mahmoorganj, Varanasi - 221002</p>
                  <p className="text-dark-700">Uttar Pradesh, India</p>
                </div>

                <div className="bg-primary-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                  <p className="text-lg">Open 7 Days a Week</p>
                  <p className="text-2xl font-bold mt-2">7:00 AM - 9:00 PM</p>
                  <p className="mt-3 text-primary-100">24/7 Roadside Assistance Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">Find Us</h2>
          <p className="text-dark-600 mb-4">
            We&apos;re located near Varanasi Cantt Railway Station. Easy to reach from all parts of the city.
          </p>
          <div className="bg-white p-8 rounded-lg border border-dark-200 max-w-4xl mx-auto">
            <p className="text-lg text-dark-700">
              <strong>Coordinates:</strong> 25.3176° N, 82.9739° E
            </p>
            <p className="text-dark-600 mt-2">
              (Google Maps integration can be added in production)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
