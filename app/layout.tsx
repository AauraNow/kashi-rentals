import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SplashScreen from "@/components/SplashScreen";

// Poppins with optimized font weights for better performance
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin", "latin-ext"],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rentals.awakenais.com'),
  title: {
    default: "Scooty & Bike Rental in Varanasi | Affordable Self Drive Starting ₹299/day",
    template: "%s | Kashi Rentals"
  },
  description: "Affordable scooty and bike rental in Varanasi, Banaras, Kashi. Self-drive two wheeler rental near BHU, Assi Ghat, Cantt, Sigra, Lanka. Starting ₹299/day. Book now!",
  keywords: [
    "scooty rental in varanasi",
    "bike rental in varanasi",
    "rent scooty in banaras",
    "rent bike in kashi",
    "scooty rental in sigra",
    "scooty rental in mahmoorganj",
    "bike rental near BHU",
    "scooty rental near assi ghat",
    "bike rental near varanasi cantt railway station",
    "two wheeler rental in sarnath",
    "self drive scooty in lanka varanasi",
    "affordable bike rental varanasi",
    "activa rental varanasi",
    "honda dio rental banaras"
  ],
  authors: [{ name: "Kashi Rentals" }],
  creator: "Kashi Rentals",
  publisher: "Kashi Rentals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rentals.awakenais.com',
    title: 'Scooty & Bike Rental in Varanasi | Starting ₹299/day',
    description: 'Affordable scooty and bike rental in Varanasi. Self-drive two wheeler rental near BHU, Assi Ghat, Cantt. Book now!',
    siteName: 'Kashi Rentals',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scooty & Bike Rental in Varanasi',
    description: 'Affordable two wheeler rental in Varanasi starting ₹299/day',
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
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={poppins.className}>
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
