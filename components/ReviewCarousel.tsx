'use client';

import { useState, useEffect } from 'react';

interface Review {
  name: string;
  rating: number;
  review: string;
  location: string;
  vehicle: string;
}

const reviews: Review[] = [
  {
    name: "Pragati Sinha",
    rating: 5,
    review: "Excellent service! Rented an Activa 6G for 3 days to explore Varanasi. The scooty was in pristine condition, smooth engine, and pickup near BHU was super fast. Highly recommend for any tourist visiting Kashi!",
    location: "BHU Lanka Hub",
    vehicle: "Honda Activa 6G"
  },
  {
    name: "Sandip Kumar",
    rating: 5,
    review: "Super smooth experience. Booked a bike for a week during my stay. Minimal paperwork on WhatsApp, provided sanitized helmet, and dropped off on time. Will definitely use again.",
    location: "Sigra Central",
    vehicle: "Bajaj Pulsar 150"
  },
  {
    name: "Navita Singh",
    rating: 5,
    review: "Perfect for solo exploration! Having my own scooty gave me complete freedom to visit Assi Ghat for Subah-e-Banaras at 5 AM. Affordable rates and prompt 24/7 WhatsApp support.",
    location: "Assi Ghat Hub",
    vehicle: "TVS Jupiter"
  },
  {
    name: "Arun Verma",
    rating: 5,
    review: "Reliable and transparent. I've taken monthly packages for my daily commute in Varanasi. Far cheaper than daily auto charges and the vehicle was serviced right before handover.",
    location: "Cantt Railway Station",
    vehicle: "Honda Activa 6G"
  },
  {
    name: "Priya Mishra",
    rating: 5,
    review: "Quickest booking ever! Came to Varanasi for Dev Deepawali with friends. Got 2 scooties delivered right to our hotel near Godowlia. Zero hassles and full refund of security deposit.",
    location: "Godowlia Hub",
    vehicle: "Hero Pleasure Plus"
  },
  {
    name: "Rahul Tiwari",
    rating: 5,
    review: "Rented Royal Enfield Classic 350 for a day trip to Chunar Fort and Sarnath. Great engine thump, smooth highway ride, and transparent fuel policy. 5/5 stars!",
    location: "Varanasi Cantt",
    vehicle: "Royal Enfield 350"
  }
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate reviews every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsTransitioning(false);
      }, 350);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-dark-200 fill-dark-200'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
          isTransitioning ? 'opacity-40 translate-y-1' : 'opacity-100 translate-y-0'
        }`}
      >
        {getVisibleReviews().map((review, index) => (
          <div
            key={`${review.name}-${currentIndex}-${index}`}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-dark-200/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 text-primary-600 font-bold flex items-center justify-center text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-dark-950">{review.name}</h3>
                    <p className="text-xs text-dark-500">{review.location}</p>
                  </div>
                </div>
                <span className="badge-verified">
                  ✓ Verified
                </span>
              </div>

              <div className="mb-3">
                {renderStars(review.rating)}
              </div>

              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                &ldquo;{review.review}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-dark-100 flex items-center justify-between text-[11px] text-dark-400 font-medium">
              <span>Rented: <strong className="text-dark-700 font-semibold">{review.vehicle}</strong></span>
              <span className="text-emerald-600 font-semibold">100% Deposit Returned</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center gap-1.5 mt-8">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-primary-500' : 'w-1.5 bg-dark-200 hover:bg-dark-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
