import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Reunion 2026",
  description: "Williams Family Reunion 2026 — July 17, 2026 in Rock Hill, SC.",
};

export const revalidate = 300; // refresh RSVP list every 5 minutes

const details = [
  { icon: "📅", label: "Date", value: "Friday, July 17, 2026" },
  { icon: "📍", label: "Location", value: "Rock Hill, South Carolina" },
  { icon: "👨‍👩‍👧‍👦", label: "Who", value: "All Williams family members & families" },
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

      {/* Live Countdown */}
      <section className="bg-primary-900 rounded-2xl p-8 text-white text-center mb-10">
        <CountdownTimer />
        <Link
          href="/reunion-2026/rsvp"
          className="inline-block mt-6 bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-md"
        >
          🎉 RSVP Now
        </Link>
      </section>

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

      {/* Who's Coming */}
      <section className="mb-14">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xl font-serif font-bold text-primary-800">Who&apos;s Coming</h2>
          {approvedRsvps.length > 0 && (
            <span className="text-sm text-gray-500">{approvedRsvps.length} {approvedRsvps.length === 1 ? "family" : "families"} · {totalGuests} guests</span>
          )}
        </div>
        {approvedRsvps.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center text-gray-500">
            <p className="text-2xl mb-2">📋</p>
            <p>No RSVPs yet — be the first!</p>
            <Link href="/reunion-2026/rsvp" className="inline-block mt-4 text-sm font-semibold text-primary-700 hover:underline">RSVP Now →</Link>
          </div>
        ) : (
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
            <div className="text-center pt-2">
              <Link href="/reunion-2026/rsvp" className="text-sm font-semibold text-primary-700 hover:underline">
                + Add your RSVP
              </Link>
            </div>
          </div>
        )}
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

      {/* Hidden calendar link */}
      <div className="flex justify-end mb-6">
        <Link href="/reunion-2026/calendar" className="text-gray-300 hover:text-gray-400 transition-colors" title="Calendar">
          📅
        </Link>
      </div>

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
