import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reunion 2021 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2021.",
};

const photos = [
  "FB_IMG_1626092991816.jpg",   // black & white — hero
  "20210703_223451.jpg",
  "20210704_120333.jpg",
  "20210704_124814.jpg",
  "20210704_130202.jpg",
  "20210704_131906.jpg",
  "20210704_205555.jpg",
  "20210705_165149.jpg",
  "20210705_170851.jpg",
  "20210706_171929.jpg",
  "20210708_122044.jpg",
  "20210708_193812.jpg",
  "20210709_135355.jpg",
  "20210709_171629.jpg",
  "20210709_174141.jpg",
  "FB_IMG_1626092058326.jpg",
  "FB_IMG_1626092138506.jpg",
  "FB_IMG_1626092306803.jpg",
  "FB_IMG_1626092503922.jpg",
  "FB_IMG_1626092516973.jpg",
  "FB_IMG_1626092627981.jpg",
  "FullSizeR47.jpg",
  "FullSizeR48.jpg",
  "IMG_3056.jpg",
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
        <p className="text-lg text-gray-600 mb-2">
          {photos.length} photos
        </p>
        <div className="section-divider"></div>
      </div>

      {/* Hero photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <Image
          src={`/photos/reunion-2021/${photos[0]}`}
          alt="Williams Family Reunion 2021"
          width={1200}
          height={700}
          className="w-full object-cover max-h-[520px]"
          priority
        />
      </div>

      {/* Photo grid — remaining 24 photos, 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
        {photos.slice(1).map((filename, i) => (
          <div
            key={filename}
            className="rounded-xl overflow-hidden shadow-sm bg-gray-100 aspect-square"
          >
            <Image
              src={`/photos/reunion-2021/${filename}`}
              alt={`Williams Family Reunion 2021 — photo ${i + 2}`}
              width={500}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Footer links */}
      <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/reunions"
          className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
        >
          ← All Reunions
        </Link>
        <Link
          href="/reunion-2026"
          className="inline-flex items-center gap-2 border border-primary-300 hover:border-primary-500 text-primary-700 hover:text-primary-900 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-primary-50"
        >
          🎉 Reunion 2026 Info
        </Link>
      </div>
    </div>
  );
}
