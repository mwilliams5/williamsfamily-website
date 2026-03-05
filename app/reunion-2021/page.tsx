import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reunion 2021 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2021.",
};

const photos = [
  { src: "/photos/reunion-2021/20260223_080427.jpg", caption: "Williams Family Reunion 2021 — Photo 1" },
  { src: "/photos/reunion-2021/20260224_070836.jpg", caption: "Williams Family Reunion 2021 — Photo 2" },
  { src: "/photos/reunion-2021/20260225_071843.jpg", caption: "Williams Family Reunion 2021 — Photo 3" },
  { src: "/photos/reunion-2021/20260226_070942.jpg", caption: "Williams Family Reunion 2021 — Photo 4" },
  { src: "/photos/reunion-2021/20260227_111547.jpg", caption: "Williams Family Reunion 2021 — Photo 5" },
];

export default function Reunion2021Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Family Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2021
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A wonderful time together with family
        </p>
        <div className="section-divider"></div>
      </div>

      {/* Photo Gallery */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-6 flex items-center gap-2">
          📸 Reunion Photos
        </h2>

        {/* First photo — full width hero */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
          <Image
            src={photos[0].src}
            alt={photos[0].caption}
            width={1200}
            height={700}
            className="w-full object-cover max-h-[500px]"
          />
          <p className="text-sm italic text-gray-500 text-center py-3 bg-white border-t border-gray-100">
            {photos[0].caption}
          </p>
        </div>

        {/* Remaining photos — 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {photos.slice(1).map((photo, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={700}
                height={500}
                className="w-full object-cover max-h-[320px]"
              />
              <p className="text-sm italic text-gray-500 text-center py-3 border-t border-gray-100">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-10"></div>

      {/* Links */}
      <section className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/reunion-2026"
          className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
        >
          🎉 Reunion 2026 Info
        </Link>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 border border-primary-300 hover:border-primary-500 text-primary-700 hover:text-primary-900 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-primary-50"
        >
          📷 Family Gallery
        </Link>
      </section>
    </div>
  );
}
