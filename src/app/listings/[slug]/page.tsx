import { notFound } from 'next/navigation';
import Image from 'next/image';
import { listingsData } from '@/app/data/listingsData';
import TopNav from '@/app/components/TopNav';
import Footer from '@/app/components/Footer';
import FloatingIcons from '@/app/components/FloatingIcons';

export default async function ListingDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const listing = listingsData.find((l) => l.slug === slug);
  if (!listing) return notFound();

  return (
    <main className="font-sans min-h-screen">
      <TopNav />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                {listing.name}
              </h1>
              <p className="text-gray-500 text-base sm:text-lg">
                {listing.type} • {listing.location} • Ksh {listing.price.toLocaleString()}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {listing.images.map((img, i) => (
                <div key={i} className="aspect-square sm:aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`/listings/${listing.slug}/${img}`}
                    alt={`${listing.name} ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {listing.description}
            </div>
          </div>

          {/* Booking Sidebar */}
          <aside className="bg-white shadow-md rounded-lg p-4 sm:p-6 h-fit sticky top-6">
            <h2 className="text-xl font-bold mb-3 sm:mb-4">Book This Stay</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Nightly Rate: <span className="font-semibold">Ksh {listing.price.toLocaleString()}</span>
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
                Request Booking
              </button>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <FloatingIcons />
    </main>
  );
}