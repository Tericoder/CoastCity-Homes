import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-gray-800 mb-3">CoastCityHomes</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover clean, verified, and affordable furnished BnBs across the Kenyan coast.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h5>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Phone: +254 713 122 760</p>
              <p>Email: coastcityhomes@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h5>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/listings" className="hover:text-blue-600 transition-colors duration-200">
                  Explore Listings
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Chat */}
          <div className="space-y-4">
            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-3 text-gray-800">Follow Us</h5>
              <div className="flex space-x-4">
                <Link 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/facebook.svg"
                      alt="Facebook"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-200"
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
                <Link 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/twitter.svg"
                      alt="Twitter"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Chat with Us */}
            <div>
              <h5 className="text-lg font-semibold mb-3 text-gray-800">Chat with Us</h5>
              <Link 
                href="https://wa.me/254713122760" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity duration-200"
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
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="text-center text-sm text-gray-500 py-4 border-t mt-6 lg:mt-8">
          © {new Date().getFullYear()} CoastCityHomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}