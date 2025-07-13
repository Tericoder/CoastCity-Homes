'use client';
import React from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import FloatingIcons from '../components/FloatingIcons';
import Link from 'next/link';

export default function About() {
  return (
    <main className="font-sans">
      <TopNav />

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
          About CoastCityHomes
        </h1>
        <p className="text-lg text-blue-800 max-w-3xl mx-auto">
          Your truSTsted gateway to clean, secure, and fully furnished Airbnbs across Kenyas breathtaking coastline.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-2">🏡 Verified Spaces</h3>
            <p className="text-gray-700 text-sm">
              We personally inspect and approve every listing to guarantee accurate photos, cleanliness, and comfort.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-2">🤝 Local Trust</h3>
            <p className="text-gray-700 text-sm">
              We are not just online — we are here with you. All listings are managed by a real team based on the Kenyan coast.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-2">⚡ Hassle-Free Booking</h3>
            <p className="text-gray-700 text-sm">
              Book instantly without needing an account. Pay securely and receive real-time support via WhatsApp or call.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-yellow-50 py-20 px-6 text-center border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Our Mission</h2>
          <p className="text-lg text-yellow-800">
            To simplify access to clean, affordable, and professionally managed BnBs in coastal Kenya — so you can stay, work, and travel in comfort.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <p className="text-lg mb-6">Explore our verified listings and experience the coast like never before.</p>
        <Link href="/" className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-blue-100 transition">
          Browse Listings
        </Link>
      </section>

      <Footer />
      <FloatingIcons />
    </main>
  );
}
