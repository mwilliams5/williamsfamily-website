import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Family photos, memories, and special moments from the Williams family.",
};

// TODO: Replace placeholder entries with real photo data.
// For real photos, use Next.js <Image> component from "next/image".
// Store images in the /public/photos/ folder and reference them as src="/photos/filename.jpg"
const albums = [
  {
    title: "Family Reunion 2025",
    description: "Our annual get-together — sun, food, and lots of laughter.",
    placeholder: "🏡",
    count: 24,
  },
  {
    title: "Holiday Celebrations",
    description: "Christmas, Thanksgiving, and all the holidays in between.",
    placeholder: "🎄",
    count: 18,
  },
  {
    title: "Graduations & Milestones",
    description: "Celebrating the big moments in our family's journey.",
    placeholder: "🎓",
    count: 12,
  },
  {
    title: "Vacations & Travel",
    description: "Adventures near and far with the whole family.",
    placeholder: "✈️",
    count: 31,
  },
  {
    title: "Everyday Moments",
    description: "The little things that make life special.",
    placeholder: "📷",
    count: 47,
  },
  {
    title: "Archive & History",
    description: "Old photos and family history from generations past.",
    placeholder: "🗂️",
    count: 15,
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="section-heading">Photo Gallery</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of our favorite moments — from big milestones to
          everyday memories. Browse the albums below.
        </p>
      </div>

      {/* Albums grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div key={album.title} className="card group cursor-pointer">
            {/* Placeholder thumbnail — replace with <Image> for real photos */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center">
              <span className="text-7xl group-hover:scale-110 transition-transform">
                {album.placeholder}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-serif font-bold text-primary-800 mb-1">
                {album.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{album.description}</p>
              <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                {album.count} photos
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note for real photos */}
      <div className="mt-12 p-6 bg-warm-50 border border-warm-200 rounded-xl text-sm text-gray-600">
        <strong className="text-gray-800">To add real photos:</strong> Place
        image files in{" "}
        <code className="bg-gray-100 px-1 rounded">public/photos/</code>, then
        use Next.js{" "}
        <code className="bg-gray-100 px-1 rounded">&lt;Image&gt;</code> in each
        album section. Contact your developer or edit{" "}
        <code className="bg-gray-100 px-1 rounded">app/gallery/page.tsx</code>.
      </div>
    </div>
  );
}
