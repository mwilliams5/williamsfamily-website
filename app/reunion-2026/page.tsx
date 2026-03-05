import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reunion 2026",
  description: "Williams Family Reunion 2026 — July 17, 2026 in Rock Hill, SC.",
};

const details = [
  { icon: "📅", label: "Date", value: "Friday, July 17, 2026" },
  { icon: "📍", label: "Location", value: "Rock Hill, South Carolina" },
  { icon: "👨‍👩‍👧‍👦", label: "Who", value: "All Williams family members & families" },
];

export default function Reunion2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Save the Date
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2026
        </h1>
        <p className="text-xl text-gray-600">
          July 17, 2026 &nbsp;·&nbsp; Rock Hill, SC
        </p>
      </div>

      {/* Details cards */}
      <section className="grid sm:grid-cols-2 gap-4 mb-14">
        {details.map((d) => (
          <div key={d.label} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 items-start shadow-sm">
            <span className="text-3xl">{d.icon}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-500 mb-0.5">
                {d.label}
              </p>
              <p className="text-gray-800 font-medium">{d.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Photo from last reunion */}
      <section className="mb-14">
        <h2 className="text-xl font-serif font-bold text-primary-800 mb-4">
          A Look Back — Reunion 2001
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/photos/reunion-group.jpg"
            alt="Williams Family Reunion 2001 group photo"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <p className="text-sm italic text-gray-500 text-center py-3 bg-white">
            All of Us! — Williams Family Reunion 2001
          </p>
        </div>
      </section>

      {/* Countdown / message */}
      <section className="bg-primary-50 border border-primary-200 rounded-2xl p-8 md:p-10 text-center mb-12">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-3">
          We Can&apos;t Wait to See You!
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          The Williams Family Reunion is always a highlight of the year — great
          food, great stories, and even better company. Mark your calendar for
          <strong> July 17, 2026</strong> in Rock Hill, SC and start making
          travel plans!
        </p>
      </section>

      {/* Past reunions link */}
      <section className="text-center">
        <h2 className="text-xl font-serif font-bold text-primary-800 mb-2">
          Remember Reunion 2001?
        </h2>
        <p className="text-gray-600 mb-4">
          Grandma Peggy&apos;s thank-you letter and reunion photos are in our
          family updates archive.
        </p>
        <a href="/updates" className="btn-primary inline-block">
          View Family Updates
        </a>
      </section>
    </div>
  );
}
