'use client';

import { useState, useEffect } from 'react';

interface Review {
  name: string;
  rating: number;
  review: string;
  location: string;
}

const reviews: Review[] = [
  {
    name: "Pragati Sinha",
    rating: 5,
    review: "Excellent service! I rented an Activa for 3 days to explore Varanasi. The scooty was in perfect condition, well-maintained and comfortable. The staff was very helpful and the pickup near BHU was super convenient. Highly recommend for anyone visiting Varanasi!",
    location: "BHU Area"
  },
  {
    name: "Sandip Kumar",
    rating: 4,
    review: "Great experience overall. Rented a bike for a week during my stay in Varanasi. The process was smooth, minimal paperwork, and they provided a helmet and lock. Only improvement would be slightly better fuel efficiency, but otherwise very satisfied with the service.",
    location: "Sigra"
  },
  {
    name: "Navita Singh",
    rating: 5,
    review: "Perfect for exploring the city! As a solo traveler, having my own scooty gave me the freedom to visit all the ghats and temples at my own pace. The pricing is very reasonable and the 24/7 support gave me peace of mind. Will definitely rent again on my next visit!",
    location: "Assi Ghat"
  },
  {
    name: "Arun Verma",
    rating: 4,
    review: "Good reliable service. I've been renting from them for the past 6 months for my daily commute. The monthly package is affordable and saves a lot compared to daily auto rides. Vehicles are clean and they respond quickly if there's any issue. Value for money!",
    location: "Lanka"
  },
  {
    name: "Priya Mishra",
    rating: 5,
    review: "Best decision ever!! Came to Varanasi for Diwali with friends. Got 2 Activas from them. Super quick booking on WhatsApp and they delivered to our hotel near Dashashwamedh. No hassles at all. Thank you!",
    location: "Godowlia"
  },
  {
    name: "Rahul Tiwari",
    rating: 4,
    review: "Been using for last 2 months. Decent service, fair pricing. One time had flat tire, they replaced quickly. Document process could be faster but overall happy with my rental.",
    location: "Cantt"
  },
  {
    name: "Anjali Yadav",
    rating: 5,
    review: "Rented Honda Dio for weekend trip to Sarnath. Bike was clean, tank full. Staff explained everything clearly. Returned late evening, no extra charges. Will use again when visiting parents here.",
    location: "Sarnath"
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

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

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
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
        }`}
      >
        {getVisibleReviews().map((review, index) => (
          <div
            key={`${review.name}-${currentIndex}-${index}`}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {review.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-dark-900">{review.name}</h3>
                <p className="text-sm text-dark-500">{review.location}</p>
              </div>
            </div>
            {renderStars(review.rating)}
            <p className="text-dark-700 leading-relaxed">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
