import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/254713122760"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative w-6 h-6">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* TikTok */}
      <Link
        href="https://www.tiktok.com/@coastcityhomes"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
        aria-label="Follow on TikTok"
      >
        <div className="relative w-6 h-6">
          <Image
            src="/tiktok.svg"
            alt="TikTok"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      
        {/* Instagram */}
      <Link
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
        aria-label="Follow on Instagram"
      >
        <div className="relative w-6 h-6">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Phone Call (Optional - Add if you want) */}
      <Link
        href="tel:+254713122760"
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 md:hidden" // Hidden on desktop, shown on mobile
        aria-label="Call us"
      >
        <div className="relative w-6 h-6">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </Link>

      
    </div>
  );
}