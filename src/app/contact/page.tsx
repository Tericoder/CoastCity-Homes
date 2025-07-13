'use client';

import React from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import FloatingIcons from '../components/FloatingIcons';

export default function ContactPage() {
  return (
    <main className="font-sans">
      <TopNav />

      <section className="bg-gradient-to-br from-blue-100 to-white py-14 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Got questions, property requests, or feedback? Reach out to us anytime.
        </p>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Send a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Our Info</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Phone:</strong> +254 713 122 760</li>
            <li><strong>Email:</strong> coastcityhomes@gmail.com</li>
            <li><strong>Location:</strong> Nyali, Mombasa, Kenya</li>
            <li><strong>Working Hours:</strong> Mon - Sat | 8AM - 6PM</li>
          </ul>

          <div className="mt-6">
            <h3 className="font-medium mb-2 text-gray-700">Find Us on the Map</h3>
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Google Maps Embed (Coming Soon)
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingIcons />
    </main>
  );
}
