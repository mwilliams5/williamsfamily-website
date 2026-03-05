import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "Family Reunions — Williams Family",
  description: "Williams Family Reunions — past gatherings and the upcoming 2026 reunion in Rock Hill, SC.",
};

export default function ReunionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Page Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Together Again
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunions
        </h1>
        <div className="section-divider"></div>
      </div>

      {/* ── UPCOMING REUNION ─────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-5">
          Upcoming
        </h2>

        <div className="bg-primary-900 rounded-2xl overflow-hidden shadow-xl text-white">
          {/* Banner */}
          <div className="px-8 pt-8 pb-4 text-center">
            <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-1">
              Save the Date
            </p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-1">
              Reunion 2026
            </h3>
            <p className="text-primary-200 text-lg">
              Friday, July 17, 2026 &nbsp;·&nbsp; Rock Hill, SC
            </p>
          </div>

          {/* Countdown */}
          <div className="px-8 pb-8 pt-2">
            <CountdownTimer />
          </div>

          {/* CTA */}
          <div className="bg-primary-800 px-8 py-5 text-center">
            <Link
              href="/reunion-2026"
              className="inline-flex items-center gap-2 bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              🎉 View Full Reunion Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── PAST REUNIONS ────────────────────────────────────── */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-5">
          Past Reunions
        </h2>

        <div className="space-y-6">

          {/* ── 2021 ── */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary-300 transition-all">
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="relative h-48 md:h-full bg-gray-100">
                <Image
                  src="/photos/reunion-2021/20260223_080427.jpg"
                  alt="Williams Family Reunion 2021"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-1">
                    2021
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                    Williams Family Reunion 2021
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A wonderful gathering of the Williams family. Browse the photos
                    from our 2021 reunion.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    href="/reunion-2021"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 border border-primary-200 hover:border-primary-400 px-4 py-2 rounded-lg transition-all hover:bg-primary-50"
                  >
                    📸 View Photos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── 2001 ── */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary-300 transition-all">
            <div className="grid md:grid-cols-[280px_1fr]">
              <div className="relative h-48 md:h-full bg-gray-100">
                <Image
                  src="/photos/reunion-group.jpg"
                  alt="Williams Family Reunion 2001 group photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-1">
                    2001
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
                    Williams Family Reunion 2001
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A great success! Everyone made it out and had a wonderful time.
                    Grandma Peggy's thank-you letter and reunion memories are in
                    the family updates archive.
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    href="/updates#reunion-2001"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 border border-primary-200 hover:border-primary-400 px-4 py-2 rounded-lg transition-all hover:bg-primary-50"
                  >
                    📖 View Memories
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Future placeholder note */}
        <p className="text-center text-xs text-gray-400 mt-8 italic">
          More reunions will be added as photos are gathered.
        </p>
      </section>

    </div>
  );
}
