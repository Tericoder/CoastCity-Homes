// app/data/listingsData.ts
export interface Listing {
  id: string;
  slug: string;
  name: string;
  price: number;
  type: string;
  location: string;
  images: string[]; // filenames only, we build full path dynamically
  description: string;
}

export const listingsData: Listing[] = [
  {
    id: '1',
    slug: '1bamburistudio01',
    name: 'Cozy Studio in Nyali',
    price: 2500,
    type: 'Studio',
    location: 'Nyali',
    images: ['bedroom.jpeg', 'kitchen.jpeg', 'sitting.jpeg', 'main.jpeg'],
    description:
      'A cozy and modern studio located in the heart of Bamburi. Perfect for solo travelers or couples looking for a serene getaway. Fast Wi-Fi, hot shower, and a smart TV included.',
  },
  {
    id: '2',
    slug: '2nyali1br01',
    name: 'Stand Alone Apartment Nyali',
    price: 4500,
    type: '1 Bedroom',
    location: 'Nyali',
    images: ['bedroom1.jpeg', 'bedroom2.jpeg', 'dining.jpeg', 'exterior.jpeg', 'kitchen1.jpeg', 'kitchen2.jpeg', 'livingroom1.jpeg', 'livingroom2.jpeg', 'livingroom3.jpeg', 'livingroom4.jpeg', 'swimmingpool1.jpeg','swimmingpool2.jpeg', 'main.jpeg', 'washroom1.jpeg'],
    description:
      'A stand alone 1BR in Nyali with a swimming pool. Fully furnished, walkable to restaurants and local shops.',
  },
  {
    id: '3',
    slug: '3nyali2br01',
    name: 'Cozy Apartment Nyali',
    price: 8000,
    type: '1 Bedroom',
    location: 'Nyali',
    images: ['balcony1.jpeg', 'bedroom1.jpeg', 'bedroom2.jpeg', 'dining.jpeg', 'exterior.jpeg', 'kitchen1.jpeg', 'kitchen2.jpeg', 'livingroom1.jpeg', 'livingroom2.jpeg', 'livingroom3.jpeg', 'livingroom4.jpeg', 'swimmingpool1.jpeg','swimmingpool2.jpeg', 'main.jpeg', 'washroom1.jpeg'],
    description:
      'Wake up to the sound of waves in this oceanfront 1-bedroom apartment. Fully furnished with an amazing sea view, walkable to restaurants and local shops.',
  },
  {
    id: '4',
    slug: '4nyali3br01',
    name: 'Budget Studio in Vipingo',
    price: 2500,
    type: 'Studio',
    location: 'Vipingo',
    images: ['studio1.jpeg', 'kitchenette.jpeg', 'balcony.jpeg'],
    description:
      'Affordable and neat studio near the highway. Easy access to public transport and local markets.',
  },
  {
    id: '6',
    slug: 'malindibeachvilla01',
    name: 'Malindi Beachfront Villa',
    price: 9500,
    type: '3 Bedroom',
    location: 'Malindi',
    images: ['villa_exterior.jpeg', 'beachview.jpeg', 'livingarea.jpeg'],
    description:
      'Luxury beachfront villa with stunning views and private beach access. Perfect for families or groups.',
  },
  {
    id: '7',
    slug: 'mombasatownroom01',
    name: 'Private Room in Mombasa Town',
    price: 1800,
    type: 'Room',
    location: 'Mombasa Town',
    images: ['room1.jpeg', 'sharedbath.jpeg', 'corridor.jpeg'],
    description:
      'Clean and affordable room ideal for backpackers and solo travelers. Close to CBD and ferry.',
  },
  {
    id: '8',
    slug: 'dianibeachcottage01',
    name: 'Diani Beach Cottage',
    price: 6800,
    type: '2 Bedroom',
    location: 'Diani',
    images: ['cottage_front.jpeg', 'patio.jpeg', 'bedroom2.jpeg'],
    description:
      'Charming 2-bedroom beach cottage just steps from the white sands of Diani. Great for couples or small families.',
  },
  {
    id: '9',
    slug: 'shanzuapartment01',
    name: 'Shanzu Holiday Apartment',
    price: 4100,
    type: '1 Bedroom',
    location: 'Shanzu',
    images: ['shanzu_lounge.jpeg', 'shanzu_kitchen.jpeg', 'shanzu_bedroom.jpeg'],
    description:
      'Fully furnished apartment in the vibrant neighborhood of Shanzu. 24/7 security and near shopping centers.',
  },
  {
    id: '10',
    slug: 'nyalipenthouse01',
    name: 'Penthouse with Ocean View - Nyali',
    price: 12000,
    type: '3 Bedroom Penthouse',
    location: 'Nyali',
    images: ['penthouse_balcony.jpeg', 'penthouse_view.jpeg', 'penthouse_living.jpeg'],
    description:
      'Top-floor penthouse offering panoramic ocean views, luxurious finishes, and private rooftop access. Ideal for VIP guests.',
  },
  // Add more listings here...
];
