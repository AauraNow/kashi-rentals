'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.6s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    // Remove from DOM after fade completes (0.7s transition)
    const removeTimer = setTimeout(() => setVisible(false), 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      <div
        className="flex flex-col items-center gap-4 transition-transform duration-700"
        style={{ transform: fadeOut ? 'scale(0.95)' : 'scale(1)' }}
      >
        <Image
          src="/logo.png"
          alt="Kashi Rentals"
          width={180}
          height={180}
          className="object-contain drop-shadow-xl"
          priority
        />
        {/* Subtle loading bar */}
        <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-primary-500 rounded-full splash-progress" />
        </div>
      </div>
    </div>
  );
}
