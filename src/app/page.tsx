'use client';
import Link from 'next/link';
import TopNav from './components/TopNav';

export default function Home() {
  return (
    <main className="font-sans">
      <TopNav />

      {/* Hero section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Discover Trusted Furnished BnBs Across Coast
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Book clean, comfortable, and affordable Airbnbs — managed and verified by CoastCityHomes.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input type="text" placeholder="Enter Location" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded w-full">
            <option>Any Type</option>
            <option>Studio</option>
            <option>1 Bedroom</option>
            <option>2+ Bedrooms</option>
          </select>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>

      {/* 🆕 Featured listings grid */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Listings</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Modern Studio in Kilifi', image: '/BL1.jpg', price: 2500 },
            { name: '1 Bedroom in Nyali', image: '/BRL1.jpg', price: 3000 },
            { name: 'Beachside Room', image: '/WK2.jpg', price: 4500 },
          ].map((listing, i) => (
            <div key={i} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
              <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{listing.name}</h3>
                <p className="text-blue-600 font-bold">Ksh {listing.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-100 text-gray-700 mt-12 border-t">
  <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <li><a href="#" className="hover:text-blue-600">Explore Listings</a></li>
        <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
      <div className="flex space-x-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
        </Link>
        <Link href="https://www.instagram.com/coast_cityhomes_001?igsh=cG9raTBnMHBjcDBp" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
        </Link>
        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Tiktok" className="w-6 h-6" />
        </Link>
      </div>
    </div>

    {/* Chat with Us */}
    <div>
      <h5 className="text-lg font-semibold mb-2">Chat with Us</h5>
      <div className="flex space-x-4">
        <Link href="https://wa.me/254713122760" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" />
        </Link>
      </div>
    </div>
  </div>

  {/* Bottom strip */}
  <div className="text-center text-sm text-gray-500 py-4 border-t">
    © {new Date().getFullYear()} CoastCityHomes. All rights reserved.
  </div>
</footer>

{/* ✅ Floating Chat Buttons */}
<div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">

  {/* WhatsApp */}
  <Link
    href="https://wa.me/254713122760"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
    aria-label="Chat on WhatsApp"
  >
    <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
  </Link>

  {/* TikTok */}
  <Link
    href="https://tiktok.com/@coastcityhomes"  // Replace with your real TikTok handle
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-800 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg"
    aria-label="Visit our TikTok"
  >
    <img src="/tiktok.svg" alt="TikTok" className="w-6 h-6" />
  </Link>
</div>


    </main>
  );
}
