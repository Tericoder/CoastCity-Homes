'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600">CoastCityHomes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/listings" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Listings
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact Us
          </Link>

          {/* Spacer */}
          <span className="mx-2" />

          {/* Auth Links */}
          <Link href="/login" className="font-bold text-blue-600 hover:underline transition-colors duration-200">
            Log In
          </Link>
          <Link href="/signup">
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 text-sm">
              Sign Up
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/listings" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="border-t border-gray-200 pt-3 mt-3">
              <Link 
                href="/login" 
                className="block text-blue-600 font-bold hover:underline transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="block mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}