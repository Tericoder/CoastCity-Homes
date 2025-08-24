'use client';

import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import FloatingIcons from '../components/FloatingIcons';
import Link from 'next/link';
import Image from 'next/image';

interface Listing {
  id: string;
  slug: string;
  name: string;
  image: string; // preview image
  price: number;
  location: string;
  type: string;
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const data: Listing[] = [
      {
        id: '1',
        slug: '1bamburistudio01',
        name: 'Cozy Studio in Bamburi',
        image: '/listings/1bamburistudio01/main.jpeg',
        price: 2500,
        location: 'Bamburi',
        type: 'Studio',
      },
      {
        id: '2',
        slug: '2nyali1br01',
        name: 'Stand Alone Apartment Nyali',
        image: '/listings/2nyali1br01/main.jpeg',
        price: 4500,
        location: 'Nyali',
        type: '1 Bedroom',
      },
      {
        id: '3',
        slug: '3nyali2br01',
        name: 'Modern 2BR in Nyali',
        image: '/listings/3nyali2br01/main.jpeg',
        price: 8000,
        location: 'Nyali',
        type: '2 Bedroom',
      },
      {
        id: '4',
        slug: '4nyali3br01',
        name: 'Nyali Sunset Suite',
        image: '/listings/4nyali3br01/main.jpeg',
        price: 11000,
        location: 'Nyali',
        type: '3 Bedroom',
      },
      {
        id: '5',
        slug: 'malindibeachvilla01',
        name: 'Cozy Studio Kilifi',
        image: '/listings/5kilifistudio01/main.jpg',
        price: 2500,
        location: 'Kilifi',
        type: 'Studio',
      },
      {
        id: '6',
        slug: '6kilifi1br01',
        name: 'Kilifi Modern 1BR',
        image: '/listings/6kilifi1br01/main.jpeg',
        price: 3000,
        location: 'Kilifi',
        type: '1 Bedroom',
      },
      {
        id: '7',
        slug: '7nyali1br02',
        name: 'Modern 1 BR In Nyali',
        image: '/listings/7nyali1br02/main.jpeg',
        price: 4000,
        location: 'Nyali',
        type: '1 Bedroom',
      },
      {
        id: '8',
        slug: '8kilifi2br01',
        name: 'Kilifi 2BR House',
        image: '/listings/8kilifi2br01/main.jpg',
        price: 4500,
        location: 'Kilifi',
        type: '2 Bedroom',
      },
      {
        id: '9',
        slug: '9kilifistudio02',
        name: 'Studio in Kilifi',
        image: '/listings/9kilifistudio02/main.jpg',
        price: 2500,
        location: 'Kilifi',
        type: 'Studio',
      },
      {
        id: '10',
        slug: '10kilifistudio03',
        name: 'Cozy Studio in Kilifi',
        image: '/listings/10kilifistudio03/main.jpg',
        price: 2500,
        location: 'Kilifi',
        type: 'Studio',
      },
      {
        id: '11',
        slug: '11nyali3br02',
        name: 'Nyali Beach House',
        image: '/listings/11nyali3br02/main.jpg',
        price: 12000,
        location: 'Nyali',
        type: '3 Bedroom',
      },
      {
        id: '12',
        slug: 'mtwapa-studio-escape',
        name: 'Mtwapa Studio Escape',
        image: '/listings/mtwapa-studio-escape/exterior1.jpg',
        price: 2500,
        location: 'Mtwapa',
        type: 'Studio',
      },
      {
        id: '13',
        slug: 'malindi-ocean-villa',
        name: 'Malindi Ocean Villa',
        image: '/listings/malindi-ocean-villa/exterior1.jpg',
        price: 6500,
        location: 'Malindi',
        type: '3 Bedroom',
      },
    ];
    setListings(data);
  }, []);

  const uniqueLocations = Array.from(new Set(listings.map((l) => l.location)));

  return (
    <main className="font-sans min-h-screen">
      <TopNav />

      {/* Hero Section */}
      <section className="bg-blue-50 py-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Furnished Listings
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Verified, affordable short stays across the Kenyan coast.
          </p>
        </div>
      </section>

      {/* Listings Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto space-y-12">
        {uniqueLocations.map((location) => (
          <div key={location} className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {location} Homes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {listings
                .filter((l) => l.location === location)
                .map((listing) => (
                  <Link href={`/listings/${listing.slug}`} key={listing.id} className="block">
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                      <div className="relative w-full h-48 sm:h-56">
                        <Image
                          src={listing.image}
                          alt={listing.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">
                          {listing.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {listing.type} • {listing.location}
                        </p>
                        <p className="text-blue-600 font-bold text-base sm:text-lg">
                          Ksh {listing.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
      <FloatingIcons />
    </main>
  );
}