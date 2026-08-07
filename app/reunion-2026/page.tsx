import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Reunion 2026 — Williams Family",
  description: "Photos and memories from the Williams Family Reunion 2026 in Rock Hill, SC.",
};

export const revalidate = 3600;

const photos = [
  "2026RamboReunion-7008-Copy1.jpg",
  "2026RamboReunion-7050-Copy1.jpg",
  "2026RamboReunion-7073-Copy1.jpg",
  "2026RamboReunion-7105.jpg",
  "2026RamboReunion-7145-Copy1.jpg",
  "2026RamboReunion-7197.jpg",
  "2026RamboReunion-7221.jpg",
  "2026RamboReunion-7239-Copy1.jpg",
  "2026RamboReunion-7252-Copy1.jpg",
  "2026RamboReunion-7273-Copy1.jpg",
  "2026RamboReunion-7281.jpg",
  "2026RamboReunion-7300-Copy1.jpg",
  "2026RamboReunion-7376-Copy1.jpg",
  "2026RamboReunion-7393.jpg",
  "2026RamboReunion-7454.jpg",
  "2026RamboReunion-7457.jpg",
  "2026RamboReunion-7648.jpg",
  "2026RamboReunion-7754.jpg",
  "2026RamboReunion-8063-Copy1.jpg",
  "2026RamboReunion-8126.jpg",
  "2026RamboReunion-8231.jpg",
  "2026RamboReunion-8304.jpg",
  "2026RamboReunion-8307.jpg",
  "2026RamboReunion-8326.jpg",
  "2026RamboReunion-8371.jpg",
  "2026RamboReunion-8395.jpg",
  "2026RamboReunion-8433-Copy1.jpg",
  "2026RamboReunion-8455-Copy1.jpg",
  "2026RamboReunion-8565.jpg",
  "2026RamboReunion-8849-Copy1.jpg",
  "2026RamboReunion-8888.jpg",
  "2026RamboReunion-8914.jpg",
  "2026RamboReunion-8929-Copy1.jpg",
  "2026RamboReunion-8993-Copy1.jpg",
  "2026RamboReunion-9042.jpg",
  "2026RamboReunion-9052.jpg",
  "2026RamboReunion-9185-Copy1.jpg",
  "2026RamboReunion-9200-Copy1.jpg",
  "2026RamboReunion-9214-Copy1.jpg",
  "2026RamboReunion-9254-Copy1.jpg",
  "2026RamboReunion-9306-Copy1.jpg",
  "2026RamboReunion-9362.jpg",
  "2026RamboReunion-9371-Copy1.jpg",
  "2026RamboReunion-9402.jpg",
  "2026RamboReunion-9454-Copy1.jpg",
  "2026RamboReunion-9504-Copy1.jpg",
  "2026RamboReunion-9538.jpg",
  "2026RamboReunion-9594.jpg",
  "2026RamboReunion-9696.jpg",
];

interface PublicRSVP {
  id: string;
  name: string;
  attending_count: number;
  bringing_dish: string | null;
  notes: string | null;
}

export default async function Reunion2026Page() {
  const { data: rsvps } = await supabase
    .from("rsvps")
    .select("id, name, attending_count, bringing_dish, notes")
    .eq("approved", true)
    .order("created_at", { ascending: true });

  const approvedRsvps: PublicRSVP[] = rsvps ?? [];
  const totalGuests = approvedRsvps.reduce((sum, r) => sum + r.attending_count, 0);

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
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Family Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2026
        </h1>
        <p className="text-lg text-gray-600">
          July 17, 2026 &nbsp;·&nbsp; Rock Hill, SC
        </p>
        <div className="section-divider mt-4"></div>
      </div>

      {/* Hero photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <Image
          src={`/photos/reunion-2026/${photos[0]}`}
          alt="Williams Family Reunion 2026"
          width={1200}
          height={700}
          className="w-full object-cover max-h-[520px]"
          priority
        />
      </div>

      {/* Thank you banner */}
      <section className="bg-primary-900 rounded-2xl p-8 text-white text-center mb-12">
        <p className="text-3xl mb-3">🎉</p>
        <h2 className="text-2xl font-serif font-bold mb-3">What a Reunion!</h2>
        <p className="text-primary-200 max-w-xl mx-auto leading-relaxed">
          Thank you to everyone who made it out to Rock Hill. It was wonderful to
          see so many familiar faces and make new memories together. We&apos;ll see
          you all again in 2031!
        </p>
      </section>

      {/* Photo gallery */}
      <section className="mb-14">
        <h2 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-5">
          Photos ({photos.length - 1})
        </h2>
        <PhotoGallery
          photos={photos.slice(1)}
          basePath="/photos/reunion-2026"
          altPrefix="Williams Family Reunion 2026"
        />
      </section>

      {/* Who Came */}
      {approvedRsvps.length > 0 && (
        <section className="mb-14">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-serif font-bold text-primary-800">Who Came</h2>
            <span className="text-sm text-gray-500">
              {approvedRsvps.length} {approvedRsvps.length === 1 ? "family" : "families"} · {totalGuests} guests
            </span>
          </div>
          <div className="space-y-3">
            {approvedRsvps.map((r) => (
              <div key={r.id} className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 font-bold text-sm flex items-center justify-center shrink-0">
                  {r.name.trim()[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-primary-800">{r.name}</p>
                    <span className="text-xs bg-primary-50 text-primary-600 font-semibold px-2 py-0.5 rounded-full">
                      {r.attending_count} {r.attending_count === 1 ? "guest" : "guests"}
                    </span>
                  </div>
                  {r.bringing_dish && (
                    <p className="text-sm text-warm-700 mt-0.5">🍽 {r.bringing_dish}</p>
                  )}
                  {r.notes && (
                    <p className="text-sm text-gray-500 italic mt-0.5">&ldquo;{r.notes}&rdquo;</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer links */}
      <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/reunions"
          className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
        >
          ← All Reunions
        </Link>
      </div>

    </div>
  );
}
