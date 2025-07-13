// src/app/components/Footer.tsx
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">CoastCityHomes</h4>
          <p className="text-sm">
            Discover clean, verified, and affordable furnished BnBs across the Kenyan coast.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
          <p className="text-sm">Phone: +254 713 122 760</p>
          <p className="text-sm">Email: coastcityhomes@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="text-sm space-y-1">
            <li><Link href="#" className="hover:text-blue-600">Explore Listings</Link></li>
            <li><Link href="#" className="hover:text-blue-600">FAQs</Link></li>
            <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Chat with Us */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Chat with Us</h5>
          <div className="flex space-x-4">
            <Link href="https://wa.me/254713122760" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
  <div className="text-center text-sm text-gray-500 py-4 border-t">
    © {new Date().getFullYear()} CoastCityHomes. All rights reserved.
  </div>
  
    </footer>
  );
}
