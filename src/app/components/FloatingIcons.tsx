// src/app/components/FloatingIcons.tsx
import Link from 'next/link';
import React from 'react';

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/254713122760"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
      </Link>

      {/* TikTok */}
      <Link
        href="https://www.tiktok.com/@coastcityhomes"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-900 p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
      </Link>
    </div>
  );
}
