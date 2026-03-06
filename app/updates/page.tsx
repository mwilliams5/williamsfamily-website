import type { Metadata } from "next";
import Link from "next/link";
import { christmasLetters } from "@/lib/christmasLettersData";

export const metadata: Metadata = {
  title: "Family Updates",
  description: "News, birth announcements, Christmas letters, and family updates from the Williams family.",
};

const birthAnnouncements = [
  { name: "Ariana Grace Malayna Williams", date: "September 2003", parents: "Thomas (Tbone) Williams & family" },
  { name: "Haylee Marie Eslinger", date: "August 2003", parents: "Williams family" },
  { name: "Sarah Victoria Noel McDevitt", date: "July 2003", parents: "McDevitt family" },
  { name: "Samuel Charles Blackmon", date: "January 2003", parents: "Williams family" },
  { name: "Kendall Leslie Cox", date: "January 2003", parents: "Williams family" },
  { name: "Isabella Marie Adeline Williams", date: "October 2002", parents: "Damian Williams & family" },
  { name: "Rebecca Ashley Marjan McDevitt", date: "May 2002", parents: "McDevitt family" },
];

const reunionUpdates = [
  {
    year: "2021",
    title: "Reunion 2021 – Back Together Again!",
    body: "After years apart, the Williams family reunited in July 2021 for a wonderful gathering full of laughter, memories, and good food. Browse the photo gallery to relive the fun.",
    link: "/reunion-2021",
    linkLabel: "View Photos →",
  },
  {
    year: "2006",
    title: "Reunion 2006 – A Great Time Had by All!",
    body: "The Williams Family Reunion 2006 was a wonderful occasion, bringing together family members from across the country for good food, great stories, and cherished memories.",
    link: null,
    linkLabel: null,
  },
  {
    year: "2001",
    title: "Reunion 2001 – A Great Success!",
    body: "The Williams Family Reunion 2001 was a huge success with outstanding attendance from family members scattered across the United States. We enjoyed great food (including the now-legendary Peach Cobbler), wonderful company, and memories to last a lifetime. A heartfelt thank-you letter was written by Grandma Peggy to all who attended.",
    link: null,
    linkLabel: null,
  },
];

export default function UpdatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="section-heading">Family Updates</h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 max-w-2xl">
          News, announcements, Christmas letters, and milestones from the
          Williams family over the years.
        </p>
      </div>

      {/* Reunion Updates */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-6 flex items-center gap-2">
          <span>🏡</span> Reunions
        </h2>
        <div className="space-y-6">
          {reunionUpdates.map((item) => (
            <div key={item.year} className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-1">
                {item.year}
              </p>
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              {item.link && (
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                >
                  {item.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Birth Announcements */}
      <section className="mb-14">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-6 flex items-center gap-2">
          <span>👶</span> Birth Announcements
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {birthAnnouncements.map((baby) => (
            <div
              key={baby.name}
              className="bg-warm-50 border border-warm-200 rounded-xl p-5"
            >
              <p className="font-serif font-bold text-primary-800 text-base mb-0.5">
                {baby.name}
              </p>
              <p className="text-sm text-warm-700 font-medium">{baby.date}</p>
              <p className="text-xs text-gray-500 mt-1">{baby.parents}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Christmas Letters */}
      <section id="christmas-letters">
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-6 flex items-center gap-2">
          <span>🎄</span> Christmas Letters
        </h2>
        <div className="space-y-3">
          {christmasLetters.map((letter) => (
            <Link
              key={letter.slug}
              href={`/christmas-letters/${letter.slug}`}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <div>
                <p className="font-medium text-gray-800 group-hover:text-primary-800 transition-colors">
                  {letter.title}
                </p>
                <p className="text-sm text-gray-500">From: {letter.author}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {letter.year}
                </span>
                <span className="text-primary-400 group-hover:text-primary-700 transition-colors text-lg">›</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
