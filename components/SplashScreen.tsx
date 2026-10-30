'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Only show for first 1.1s for fast, responsive feel
    const fadeTimer = setTimeout(() => setFadeOut(true), 1100);
    const removeTimer = setTimeout(() => setVisible(false), 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-out"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      <div
        className="flex flex-col items-center gap-4 transition-transform duration-500 ease-out"
        style={{ transform: fadeOut ? 'scale(0.96)' : 'scale(1)' }}
      >
        <div className="w-20 h-20 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center shadow-subtle p-2">
          <Image
            src="/logo.png"
            alt="Kashi Rentals - by Awaken AI"
            width={72}
            height={72}
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold tracking-tight text-dark-950">
            {siteConfig.name}
          </h1>
          <p className="text-xs text-dark-500 font-medium">
            {siteConfig.brandSubtitle} • {siteConfig.currentCity}
          </p>
        </div>

        {/* Minimal progress bar */}
        <div className="w-28 h-1 bg-dark-100 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-primary-500 rounded-full splash-progress" />
        </div>
      </div>
    </div>
  );
}
