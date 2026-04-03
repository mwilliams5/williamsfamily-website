import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Family photos, memories, and special moments from the Williams family.",
};

const photos = [
  {
    src: "/photos/reunion-group.jpg",
    caption: "All of Us! — Williams Family Reunion 2001",
    category: "Reunions",
    width: 900,
    height: 500,
  },
  {
    src: "/photos/annie-family.jpg",
    caption: "Annie Williams & Family",
    category: "Family",
    width: 600,
    height: 450,
  },
  {
    src: "/photos/sarah-williams.jpg",
    caption: "Sarah Williams",
    category: "Family",
    width: 400,
    height: 500,
  },
  {
    src: "/photos/luke-chloe-yugawa.jpg",
    caption: "Luke Akira Yugawa & Chloe Terry Yugawa",
    category: "Family",
    width: 600,
    height: 450,
  },
  {
    src: "/photos/shelby.gif",
    caption: "Shelby Morgan Champion (born December 18, 1997)",
    category: "Family",
    width: 400,
    height: 400,
  },
  {
    src: "/photos/santa.jpg",
    caption: "Santa spotted in the OC Register — Damian Williams",
    category: "Fun & Holidays",
    width: 400,
    height: 500,
  },
  {
    src: "/photos/santa-group.gif",
    caption: "Shelby, Courtnie & Cody with Santa at the Mansion",
    category: "Fun & Holidays",
    width: 600,
    height: 450,
  },
  {
    src: "/photos/mansion-lights.gif",
    caption: "The Rambo Mansion in Lights",
    category: "Fun & Holidays",
    width: 600,
    height: 450,
  },
  {
    src: "/photos/bighouse.jpg",
    caption: "The Lights on the Rambo Mansion",
    category: "Fun & Holidays",
    width: 600,
    height: 400,
  },
];

const categories = ["All", "Reunions", "Family", "Fun & Holidays"];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="section-heading">Photo Gallery</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl mb-4">
          A collection of our favorite moments — from big milestones to
          everyday memories.
        </p>
        <Link
          href="/gallery/submit"
          className="inline-flex items-center gap-2 border border-primary-300 hover:border-primary-500 text-primary-700 hover:bg-primary-50 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
        >
          📸 Submit a Photo
        </Link>
      </div>

      {/* Category chips (static — no JS filtering needed for now) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) =>
          cat === "Reunions" ? (
            <Link
              key={cat}
              href="/reunions"
              className="bg-primary-100 text-primary-800 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary-200 transition-colors"
            >
              {cat}
            </Link>
          ) : (
            <span
              key={cat}
              className="bg-primary-100 text-primary-800 text-sm font-medium px-4 py-1.5 rounded-full"
            >
              {cat}
            </span>
          )
        )}
      </div>

      {/* Photo grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo) => (
          <div key={photo.src} className="break-inside-avoid card overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.caption}
              width={photo.width}
              height={photo.height}
              className="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3">
              <p className="text-xs text-gray-500 italic">{photo.caption}</p>
              <span className="inline-block mt-1 text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        More photos coming soon! Contact us to submit your family photos.
      </p>
    </div>
  );
}
