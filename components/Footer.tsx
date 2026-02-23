import Link from 'next/link';

export default function Footer() {
  const phoneNumber = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 98765 43210';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@varanasibikerental.com';

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Varanasi Bike Rental</h3>
            <p className="text-dark-300 mb-4">
              Your trusted partner for affordable scooty and bike rental in Varanasi.
              Explore the spiritual city with freedom and flexibility.
            </p>
            <div className="text-dark-300">
              <p>📍 Near Varanasi Cantt Station</p>
              <p>✉️ {businessEmail}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/scooty-rental-in-varanasi" className="text-dark-300 hover:text-primary-400 transition-colors">Scooty Rental</Link></li>
              <li><Link href="/bike-rental-in-varanasi" className="text-dark-300 hover:text-primary-400 transition-colors">Bike Rental</Link></li>
              <li><Link href="/pricing" className="text-dark-300 hover:text-primary-400 transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="text-dark-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/terms-and-conditions" className="text-dark-300 hover:text-primary-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Popular Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/sigra" className="text-dark-300 hover:text-primary-400 transition-colors">Scooty Rental in Sigra</Link></li>
              <li><Link href="/locations/assi-ghat" className="text-dark-300 hover:text-primary-400 transition-colors">Rental near Assi Ghat</Link></li>
              <li><Link href="/locations/bhu" className="text-dark-300 hover:text-primary-400 transition-colors">Rental near BHU</Link></li>
              <li><Link href="/locations/lanka" className="text-dark-300 hover:text-primary-400 transition-colors">Rental in Lanka</Link></li>
              <li><Link href="/locations/varanasi-cantt" className="text-dark-300 hover:text-primary-400 transition-colors">Rental at Cantt Station</Link></li>
              <li><Link href="/locations/sarnath" className="text-dark-300 hover:text-primary-400 transition-colors">Rental in Sarnath</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Business Hours</h3>
            <div className="text-dark-300 space-y-2">
              <p className="font-semibold">Open 7 Days a Week</p>
              <p>Monday - Sunday</p>
              <p className="text-lg font-bold text-primary-400">7:00 AM - 9:00 PM</p>
              <p className="mt-4 text-sm">24/7 Roadside Assistance Available</p>
              <p className="mt-4">
                 <a href={`https://wa.me/${whatsappNumber}`} className="text-primary-400 hover:underline">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400">
          <p>&copy; {new Date().getFullYear()} Varanasi Bike Rental. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Keywords: Scooty Rental Varanasi | Bike Rental Banaras | Two Wheeler Rental Kashi | Self Drive Scooty Lanka | Bike Rental BHU
          </p>
        </div>
      </div>
    </footer>
  );
}
