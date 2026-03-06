import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Reunion 2006 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2006 in Rock Hill, SC.",
};

export default function Reunion2006Page() {
  const photoDir = path.join(process.cwd(), "public/photos/reunion-2006");
  const allPhotos = fs
    .readdirSync(photoDir)
    .filter((f) => f.match(/\.(jpg|jpeg|png|gif)$/i))
    .sort();

  const heroPhoto = "img_3480.jpg";
  const galleryPhotos = allPhotos.filter((p) => p !== heroPhoto);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* Back link */}
      <Link
        href="/reunions"
        className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-800 mb-8 transition-colors"
      >
        ← All Reunions
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-2">2006</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2006
        </h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 mt-4">
          Rock Hill, SC &nbsp;·&nbsp; July 2006
        </p>
        <p className="text-gray-600 mt-3 leading-relaxed max-w-3xl">
          The 2006 Williams Family Reunion brought everyone back to Rock Hill for a 4th of July
          weekend at the historic Rambo House — a grand two-story white mansion dressed stem to stern
          in patriotic bunting. The sprawling grounds kept all ages busy: lawn relay races, ATV and
          horse rides, and a stepping-stone craft that sent every family home with a keepsake cast
          in concrete. The kids staged impromptu performances by the fireplace, evenings wound down
          over card games in the parlor, and a &ldquo;Proposed Site of a Hog Farm&rdquo; yard sign
          — planted as a prank — drew laughs from everyone who spotted it.
        </p>
      </div>

      {/* Hero photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
        <Image
          src={`/photos/reunion-2006/${heroPhoto}`}
          alt="Williams Family Reunion 2006 — group photo on the mansion steps"
          width={1200}
          height={800}
          className="w-full object-cover"
          priority
        />
        <p className="text-center text-sm text-gray-500 italic py-3 bg-white">
          The Williams Family — Reunion 2006, Rambo House, Rock Hill, SC
        </p>
      </div>

      {/* Photo gallery */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-5">
          Photos ({galleryPhotos.length})
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryPhotos.map((photo) => (
            <div
              key={photo}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={`/photos/reunion-2006/${photo}`}
                alt="Williams Family Reunion 2006"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
