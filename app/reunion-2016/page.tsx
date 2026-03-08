import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Reunion 2016 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2016.",
};

const photos = [
  "IMG_0840.jpg",            // hero — full family group photo on mansion steps
  "IMG_9555.jpg",
  "IMG_0578.jpg",
  "IMG_9921.jpg",
  "IMG_9835.jpg",
  "IMG_0922.jpg",
  "IMG_9850.jpg",
  "IMG_0467.jpg",
  "IMG_9595.jpg",
  "IMG_9685.jpg",
  "IMG_0501.jpg",
  "IMG_0521.jpg",
  "IMG_0528.jpg",
  "IMG_0538.jpg",
  "IMG_0559.jpg",
  "IMG_0588.jpg",
  "IMG_0599.jpg",
  "IMG_0605.jpg",
  "IMG_0630.jpg",
  "IMG_0635.jpg",
  "IMG_0643.jpg",
  "IMG_0649.jpg",
  "IMG_0703.jpg",
  "IMG_0709.jpg",
  "IMG_0714.jpg",
  "IMG_0723.jpg",
  "IMG_0729.jpg",
  "IMG_0735.jpg",
  "IMG_0736.jpg",
  "IMG_0738.jpg",
  "IMG_0742.jpg",
  "IMG_0747.jpg",
  "IMG_0752.jpg",
  "IMG_0753.jpg",
  "IMG_0758.jpg",
  "IMG_0765.jpg",
  "IMG_0816.jpg",
  "IMG_0896.jpg",
  "IMG_0900.jpg",
  "IMG_0909.jpg",
  "IMG_0910.jpg",
  "IMG_0913.jpg",
  "IMG_0914.jpg",
  "IMG_0915.jpg",
  "IMG_0916.jpg",
  "IMG_0917.jpg",
  "IMG_0927.jpg",
  "IMG_0930.jpg",
  "IMG_0934.jpg",
  "IMG_0939.jpg",
  "IMG_0942.jpg",
  "IMG_0947.jpg",
  "IMG_0961.jpg",
  "IMG_0962.jpg",
  "IMG_0963.jpg",
  "IMG_0964.jpg",
  "IMG_0965.jpg",
  "IMG_0966.jpg",
  "IMG_0969.jpg",
  "IMG_7866.jpg",
  "IMG_9543.jpg",
  "IMG_9558.jpg",
  "IMG_9561.jpg",
  "IMG_9562.jpg",
  "IMG_9635.jpg",
  "IMG_9726.jpg",
  "IMG_9766.jpg",
  "IMG_9789.jpg",
  "IMG_9790.jpg",
  "IMG_9796.jpg",
  "IMG_9797.jpg",
  "IMG_9800.jpg",
  "IMG_9831.jpg",
  "IMG_9838.jpg",
  "IMG_9841.jpg",
  "IMG_9853.jpg",
  "IMG_9905.jpg",
  "IMG_9908.jpg",
  "IMG_9934.jpg",
  "IMG_9935.jpg",
  "IMG_9938.jpg",
  "IMG_9944.jpg",
  "IMG_9947.jpg",
  "IMG_9955.jpg",
  "IMG_9992.jpg",
  "FB_IMG_1467887220435.jpg",
  "2020-11-07.jpg",
  "2020-11-071.jpg",
  "2020-11-072.jpg",
  "2020-11-073.jpg",
  "2020-11-074.jpg",
  "2020-11-075.jpg",
  "2020-11-076.jpg",
  "2020-11-077.jpg",
  "2020-11-078.jpg",
  "2020-11-079.jpg",
  "2020-11-0710.jpg",
  "2020-11-0711.jpg",
  "2020-11-0712.jpg",
  "2020-11-0713.jpg",
  "2020-11-0714.jpg",
  "2020-11-0715.jpg",
  "2020-11-0716.jpg",
  "2020-11-0717.jpg",
  "2020-11-0718.jpg",
  "2020-11-0719.jpg",
  "2020-11-0720.jpg",
  "2020-11-0721.jpg",
  "2020-11-0722.jpg",
  "2020-11-0723.jpg",
  "2020-11-0724.jpg",
  "2020-11-0725.jpg",
  "2020-11-0726.jpg",
  "2020-11-0727.jpg",
  "2020-11-0728.jpg",
  "2020-11-0729.jpg",
  "2020-11-0730.jpg",
  "2020-11-0731.jpg",
  "2020-11-0732.jpg",
  "2020-11-0733.jpg",
  "2020-11-0734.jpg",
  "2020-11-0735.jpg",
  "2020-11-0736.jpg",
  "2020-11-0737.jpg",
  "2020-11-0738.jpg",
  "2020-11-0739.jpg",
  "2020-11-0740.jpg",
  "2020-11-0741.jpg",
  "2020-11-0742.jpg",
  "2020-11-0743.jpg",
  "2020-11-0744.jpg",
  "2020-11-0745.jpg",
  "2020-11-0746.jpg",
  "2020-11-0747.jpg",
  "2020-11-0748.jpg",
  "2020-11-0749.jpg",
];

export default function Reunion2016Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Family Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2016
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          {photos.length} photos
        </p>
        <div className="section-divider"></div>
      </div>

      {/* Hero photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <Image
          src={`/photos/reunion-2016/${photos[0]}`}
          alt="Williams Family Reunion 2016 — full family group photo"
          width={1200}
          height={700}
          className="w-full object-cover max-h-[520px]"
          priority
        />
      </div>

      {/* Description */}
      <div className="bg-warm-50 border border-warm-200 rounded-2xl px-8 py-6 mb-10 text-gray-700 leading-relaxed">
        <p>
          The 2016 Williams Family Reunion brought together more than eighty family members at the beloved Williams family estate — the grand white antebellum mansion in South Carolina that has anchored so many Williams gatherings over the decades. The weekend was a perfect mix of generations and activities: elders relaxing in lawn chairs beneath towering shade trees catching up on a year&apos;s worth of stories, while the cousins ran through the sprawling green grounds playing disc games and taking turns with a piñata that absolutely exploded in a shower of candy. Inside the mansion, family members gathered in the formal living rooms for portraits and quieter conversations. Outside, the men fired up the BBQ as the smell of grilling drifted across the lawn. The reunion captured everything that makes these gatherings special — the laughter, the familiar faces, the kids who&apos;ve grown a foot since last time, and the moment everyone lined up on the mansion steps for the big family photo that somehow, against all odds, turned out beautifully.
        </p>
      </div>

      {/* Photo gallery with lightbox */}
      <section className="mb-14">
        <h2 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-5">
          Photos ({photos.length - 1})
        </h2>
        <PhotoGallery
          photos={photos.slice(1)}
          basePath="/photos/reunion-2016"
          altPrefix="Williams Family Reunion 2016"
        />
      </section>

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
