import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Williams Family website.",
};

const highlights = [
  {
    icon: "📖",
    title: "Cook Book",
    description:
      "Browse our treasured family recipes — from reunion classics to holiday favorites passed down through generations.",
    href: "/cookbook",
    linkText: "View Recipes",
  },
  {
    icon: "📸",
    title: "Photo Gallery",
    description:
      "Browse photos from family gatherings, milestones, vacations, and everyday moments.",
    href: "/gallery",
    linkText: "View Photos",
  },
  {
    icon: "🌳",
    title: "Family Tree",
    description:
      "Five generations rooted in Thomas & Peggy Williams — explore who we are and where we came from.",
    href: "/family-tree",
    linkText: "View Family Tree",
  },
  {
    icon: "🏡",
    title: "Reunions",
    description:
      "Relive the memories from past reunions and look ahead to the next time we all get together.",
    href: "/reunions",
    linkText: "View Reunions",
  },
];

const byTheNumbers = [
  { stat: "847", label: "Photos taken", note: "est. 12 where everyone's eyes are open" },
  { stat: "4", label: "Generations in one place", note: "simultaneously, which is basically a miracle" },
  { stat: "∞", label: "Leftovers sent home", note: "we cooked for 300, there were 80 of us" },
  { stat: "2031", label: "Next reunion", note: "already dreading it (lovingly)" },
];

const agreements = [
  "The food was incredible",
  "Someone arrived late",
  "Someone left early",
  "We need to do this more often",
  "Nobody can agree on who should host next time",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-24 px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Image
            src="/photos/williams-logo.png"
            alt="Williams Family Crest"
            width={80}
            height={70}
            className="brightness-0 invert"
          />
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
            The Williams Family
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto">
          Family is everything. Welcome to our corner of the internet — a place
          to share, remember, and stay connected.
        </p>
      </section>

      {/* Reunion 2026 Recap */}
      <section className="bg-primary-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="relative">
              <Image
                src="/photos/reunion-2026/2026RamboReunion-9696.jpg"
                alt="Williams Family Reunion 2026 — All of us!"
                width={1200}
                height={600}
                className="w-full object-cover max-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">July 17, 2026 · Rock Hill, SC</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                  Williams Family Reunion 2026
                </h2>
                <p className="text-white/80 italic text-sm mb-4">
                  &ldquo;We&apos;re in this together... because we don&apos;t have a choice&rdquo;
                </p>
                <Link
                  href="/reunion-2026"
                  className="inline-block bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  📸 See All Photos →
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-primary-300 text-sm mt-4">
            🎉 What a wonderful reunion! We&apos;ll see everyone again in 2031!
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-primary-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-primary-400 mb-6">Reunion 2026 — By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {byTheNumbers.map((item) => (
              <div key={item.stat} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-primary-100">
                <p className="text-4xl font-bold font-serif text-primary-800 mb-1">{item.stat}</p>
                <p className="text-sm font-semibold text-gray-700 mb-1">{item.label}</p>
                <p className="text-xs text-gray-400 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome message */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="section-heading">Welcome!</h2>
        <div className="section-divider mx-auto"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          This is the official Williams Family website — a place to share memories,
          browse recipes, and pretend we all keep in touch regularly.
          We don&apos;t. But we&apos;re working on it.
        </p>
      </section>

      {/* Things We Can All Agree On */}
      <section className="max-w-xl mx-auto px-4 pb-16">
        <div className="bg-warm-50 border border-warm-200 rounded-2xl p-7">
          <h3 className="text-sm font-bold uppercase tracking-widest text-warm-700 mb-4 text-center">
            Things We Can All Agree On
          </h3>
          <ul className="space-y-2.5">
            {agreements.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-gray-700">
                <span className="text-green-500 font-bold mt-0.5 shrink-0">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Explore</h2>
          <div className="section-divider mx-auto mb-10"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <div key={item.href} className="card p-6 text-center flex flex-col items-center">
                <span className="text-5xl mb-4">{item.icon}</span>
                <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5 flex-1 text-sm">{item.description}</p>
                <Link href={item.href} className="btn-primary text-sm">
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="section-heading">Latest News</h2>
        <div className="section-divider"></div>
        <div className="space-y-6">
          {[
            {
              date: "July 2026",
              title: "Reunion 2026 — What a Time!",
              body: "The Williams Family Reunion 2026 was a wonderful success! It was so great seeing everyone in Rock Hill. Photos are up — check them out!",
            },
            {
              date: "March 2026",
              title: "Website Relaunched!",
              body: "We've moved to a new, faster website. More updates and photos coming soon!",
            },
            {
              date: "March 2026",
              title: "Reunion 2026 Announced",
              body: "Mark your calendars — the Williams Family Reunion is happening on July 17, 2026 in Rock Hill, SC. We hope to see everyone there!",
            },
          ].map((post) => (
            <div key={post.title} className="border-l-4 border-primary-500 pl-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-1">
                {post.date}
              </p>
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-1">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Family Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="border border-dashed border-gray-300 rounded-2xl p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">⚠️ Important Notice</p>
          <p className="text-sm text-gray-500 italic leading-relaxed">
            This website may cause sudden urges to call your cousin, intense nostalgia
            for Grandma Peggy&apos;s stories, and strong opinions about who should host
            the next reunion. Side effects include uncontrollable laughter at old
            photos and an inexplicable craving for peach cobbler.
          </p>
        </div>
      </section>
    </>
  );
}
