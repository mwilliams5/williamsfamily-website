import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reunion 2011 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2011.",
};

const photos = [
  "williams-family-reunion-7-9-11-028.jpg", // hero — full family group photo on mansion steps
  "williams-family-reunion-7-9-11-032.jpg",
  "williams-family-reunion-7-9-11-042.jpg",
  "williams-family-reunion-7-9-11-058.jpg",
  "williams-family-reunion-7-9-11-081.jpg",
  "williams-family-reunion-7-9-11-130.jpg",
  "williams-family-reunion-7-9-11-144.jpg",
  "williams-family-reunion-7-9-11-154.jpg",
  "williams-family-reunion-7-9-11-159.jpg",
  "williams-family-reunion-7-9-11-183.jpg",
  "img_3744.jpg",
  "img_3520.jpg",
  "img_3558.jpg",
  "img_3564.jpg",
  "img_3567.jpg",
  "img_3571.jpg",
  "img_3584.jpg",
  "img_3598.jpg",
  "img_3609.jpg",
  "img_3611.jpg",
  "img_3612.jpg",
  "img_3614.jpg",
  "img_3639.jpg",
  "img_3644.jpg",
  "img_3678.jpg",
  "img_3694.jpg",
  "img_3724.jpg",
  "img_3730.jpg",
  "img_3732.jpg",
  "img_3737.jpg",
  "img_3754.jpg",
  "img_3765.jpg",
  "img_3771.jpg",
  "img_3777.jpg",
  "img_3802.jpg",
  "img_3805.jpg",
  "img_3810.jpg",
  "img_3835.jpg",
  "img_3838.jpg",
  "img_3840.jpg",
  "img_3846.jpg",
  "img_3855.jpg",
  "img_3860.jpg",
  "img_3865.jpg",
  "img_3873.jpg",
  "img_3877.jpg",
  "img_3886.jpg",
  "img_3888.jpg",
  "img_3895.jpg",
  "img_3918.jpg",
  "img_3926.jpg",
  "img_3930.jpg",
  "img_3936.jpg",
  "img_3946.jpg",
  "img_3949.jpg",
  "img_3950.jpg",
  "img_3953.jpg",
  "img_3960.jpg",
  "img_3961.jpg",
  "img_3964.jpg",
  "img_3966.jpg",
  "img_3984.jpg",
  "img_3994.jpg",
  "img_4001.jpg",
  "img_4005.jpg",
  "img_4008.jpg",
  "img_4014.jpg",
  "img_4016.jpg",
  "img_4022.jpg",
  "20110731_42.jpg",
  "20110731_47.jpg",
  "20110731_63.jpg",
  "20110731_72.jpg",
  "20110731_77.jpg",
  "20110731_83.jpg",
  "20110731_90.jpg",
  "georgia-williams-sweatshirt2.jpg",
  "2020-11-07.jpg",
];

export default function Reunion2011Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Family Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2011
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          {photos.length} photos
        </p>
        <div className="section-divider"></div>
      </div>

      {/* Hero photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <Image
          src={`/photos/reunion-2011/${photos[0]}`}
          alt="Williams Family Reunion 2011 — full family group photo on mansion steps"
          width={1200}
          height={797}
          className="w-full object-cover max-h-[520px]"
          priority
        />
      </div>

      {/* Description */}
      <div className="bg-warm-50 border border-warm-200 rounded-2xl px-8 py-6 mb-10 text-gray-700 leading-relaxed">
        <p>
          The 2011 Williams Family Reunion brought the extended family back to the grand white antebellum mansion in South Carolina for a July weekend full of warmth, laughter, and the special energy that comes from gathering multiple generations under one roof. One of the reunion&apos;s highlights was the introduction of the newest family members — including a pair of newborn twins who made their Williams reunion debut, dressed to the nines and passed lovingly around the room. The mansion&apos;s elegant sitting room was transformed into a portrait studio, with family branches taking turns posing on the antique Victorian sofa in front of the marble fireplace for keepsake photos. Outside on the grounds, kids took turns riding the red ATV through the sunny yard while others played on the swing set and picnic area. The weekend wrapped up with the now-traditional big group photo on the mansion steps — a sea of smiling faces that captured just how much the family had grown.
        </p>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
        {photos.slice(1).map((filename, i) => (
          <div
            key={filename}
            className="rounded-xl overflow-hidden shadow-sm bg-gray-100 aspect-square"
          >
            <Image
              src={`/photos/reunion-2011/${filename}`}
              alt={`Williams Family Reunion 2011 — photo ${i + 2}`}
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
