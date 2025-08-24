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
    <main className="font-sans">
      <TopNav />

      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{listing.name}</h1>
          <p className="text-gray-500 mb-4">
            {listing.type} • {listing.location} • Ksh {listing.price.toLocaleString()}
          </p>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 mb-6">
            {listing.images.map((img, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={`/listings/${listing.slug}/${img}`}
                  alt={`${listing.name} ${i + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-gray-700 leading-relaxed text-lg">
            {listing.description}
          </div>
        </div>

        <aside className="bg-white shadow-md rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-2">Book This Stay</h2>
          <p className="text-gray-600 mb-4">
            Nightly Rate: <span className="font-semibold">Ksh {listing.price.toLocaleString()}</span>
          </p>
          <div className="space-y-2">
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              placeholder="Check-in"
            />
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              placeholder="Check-out"
            />
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Request Booking
            </button>
          </div>
        </aside>
      </section>

      <Footer />
      <FloatingIcons />
    </main>
  );
}