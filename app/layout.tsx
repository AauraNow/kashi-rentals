import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SplashScreen from "@/components/SplashScreen";
import { siteConfig } from "@/lib/config";

// Plus Jakarta Sans – modern, geometric, crisp sans-serif font
const fontSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin", "latin-ext"],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kashi Rentals • by Awaken AI | Scooty & Bike Rental in Varanasi",
    template: "%s | Kashi Rentals"
  },
  description: "Affordable scooty and bike rental in Varanasi from verified local fleets. Self-drive two-wheeler rental starting ₹299/day near Cantt Station, BHU, Assi Ghat, Sigra, and Lanka. By Awaken AI.",
  keywords: [
    "scooty rental in varanasi",
    "bike rental in varanasi",
    "rent scooty in banaras",
    "rent bike in kashi",
    "kashi rentals",
    "two wheeler rental varanasi",
    "scooty rental near assi ghat",
    "bike rental near BHU",
    "bike rental near varanasi cantt railway station",
    "two wheeler rental in sarnath",
    "self drive scooty in lanka varanasi",
    "affordable bike rental varanasi",
    "activa rental varanasi",
    "honda dio rental banaras",
    "awaken ai rentals"
  ],
  authors: [{ name: "Kashi Rentals by Awaken AI" }],
  creator: "Awaken AI Mobility Network",
  publisher: "Kashi Rentals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: 'Kashi Rentals • by Awaken AI | Scooty & Bike Rental in Varanasi',
    description: 'Affordable two-wheeler rentals from verified local fleets starting ₹299/day. Doorstep pickup, sanitized helmet, and 24/7 roadside assistance.',
    siteName: 'Kashi Rentals • by Awaken AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashi Rentals • by Awaken AI | Scooty & Bike Rental in Varanasi',
    description: 'Affordable scooties & bikes in Varanasi starting ₹299/day from verified local fleets.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${fontSans.variable} font-sans min-h-screen flex flex-col bg-white text-dark-950 selection:bg-primary-100 selection:text-primary-950`}>
        <SplashScreen />
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
