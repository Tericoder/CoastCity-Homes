// src/app/components/TopNav.tsx
'use client';

import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600">CoastCityHomes</span>
        </Link>

        <nav className="space-x-4 hidden sm:flex items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/listings" className="text-gray-700 hover:text-blue-600">Listings</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>

          {/* Spacer */}
          <span className="mx-4" />

          {/* Auth Links */}
          <Link href="/login" className="font-bold text-blue-600 hover:underline">Log In</Link>
          <Link href="/signup">
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full transition">
              Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
