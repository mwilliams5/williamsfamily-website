import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

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
        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto mb-8">
          Family is everything. Welcome to our corner of the internet — a place
          to share, remember, and stay connected.
        </p>
        <Link href="/reunion-2026" className="btn-primary bg-warm-500 hover:bg-warm-600 text-gray-900 font-semibold">
          🎉 Reunion 2026 Info
        </Link>
      </section>

      {/* Reunion 2026 Banner with Countdown */}
      <section className="bg-primary-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-300 mb-1">Save the Date</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">Williams Family Reunion 2026</h2>
            <p className="text-primary-200 mt-1">July 17, 2026 &nbsp;·&nbsp; Rock Hill, SC</p>
            <p className="text-primary-300 mt-2 italic text-sm">&ldquo;We&apos;re in this together... because we don&apos;t have a choice&rdquo;</p>
          </div>
          <CountdownTimer />

          {/* West Coast sub-countdown */}
          <div className="border-t border-white/10 pt-5 mt-1">
            <CountdownTimer
              targetDate="2026-07-11T00:00:00"
              label="West Coast Williams Incoming"
              expiredMessage="🌊 The West Coast Williams Have Arrived!"
              small
            />
          </div>

          <Link
            href="/reunion-2026"
            className="inline-block bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Reunion Details →
          </Link>
        </div>
      </section>

      {/* Welcome message */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="section-heading">Welcome!</h2>
        <div className="section-divider mx-auto"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          This website is a place for the Williams family to stay connected,
          share memories, and keep up with each other&apos;s lives. Whether
          you&apos;re planning the next reunion or just catching up, you&apos;ll
          find everything here. We hope you feel right at home.
        </p>
      </section>

      {/* Family photo */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/photos/reunion-group.jpg"
            alt="The Williams Family at the Reunion"
            width={900}
            height={500}
            className="w-full object-cover"
            priority
          />
          <p className="text-center text-sm text-gray-500 italic py-3 bg-white">
            All of Us! — Williams Family Reunion 2001
          </p>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Explore</h2>
          <div className="section-divider mx-auto mb-10"></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {highlights.map((item) => (
              <div key={item.href} className="card p-8 text-center flex flex-col items-center">
                <span className="text-5xl mb-4">{item.icon}</span>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-1">{item.description}</p>
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
    </>
  );
}
