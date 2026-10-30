/**
 * Platform & Lead Generation Configuration
 * Centralizes brand naming, contact channels, lead routing, and expansion cities.
 */

export const siteConfig = {
  name: "Kashi Rentals",
  brandSubtitle: "by Awaken AI",
  fullBrandName: "Kashi Rentals • by Awaken AI",
  platformTagline: "The modern two-wheeler mobility network",
  description: "Affordable scooty and bike rental in Varanasi from verified local fleets. Starting at ₹299/day with transparent rates, doorstep delivery, and 24/7 roadside assistance.",
  url: "https://rentals.awakenais.com",
  currentCity: "Varanasi",
  expansionCities: ["Ayodhya", "Prayagraj", "Rishikesh", "Jaipur"],
  
  contact: {
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+917348745464",
    phoneDisplay: "+91 7348745464",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917348745464",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@awakenais.com",
    address: "Near Varanasi Cantonment Railway Station, Mahmoorganj, Varanasi, UP 221002",
    coordinates: {
      latitude: 25.3176,
      longitude: 82.9739
    },
    businessHours: {
      open: "07:00",
      close: "21:00",
      display: "7:00 AM – 9:00 PM (Everyday)"
    }
  },

  // Configurable conversion mode: currently direct WhatsApp / Phone, ready for web endpoint or mobile app
  leadRouting: {
    mode: "whatsapp" as "whatsapp" | "web_endpoint" | "app",
    fallbackUrl: "/contact"
  }
};

/**
 * Generates a pre-filled WhatsApp lead URL for vehicle bookings
 */
export function getWhatsAppBookingUrl(params?: {
  vehicle?: string;
  location?: string;
  duration?: string | number;
  customText?: string;
}): string {
  const number = siteConfig.contact.whatsappNumber;
  let text = "Hi! I want to rent a scooty/bike in Varanasi.";

  if (params?.customText) {
    text = params.customText;
  } else if (params?.vehicle || params?.location) {
    const parts: string[] = ["Hi! I'd like to book a ride on Kashi Rentals (by Awaken AI):"];
    if (params.vehicle) parts.push(`• Vehicle: ${params.vehicle}`);
    if (params.location) parts.push(`• Pickup Hub: ${params.location}`);
    if (params.duration) parts.push(`• Duration: ${params.duration} day(s)`);
    parts.push("Please confirm availability and lowest rate.");
    text = parts.join("\n");
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a pre-filled WhatsApp lead URL for fleet partners and vehicle owners
 */
export function getWhatsAppPartnerUrl(): string {
  const number = siteConfig.contact.whatsappNumber;
  const text = `Hi! I want to list my vehicle / fleet on Kashi Rentals (by Awaken AI) in Varanasi. Please share partner onboarding details and terms.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
