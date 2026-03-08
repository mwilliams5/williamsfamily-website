import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robert R. Williams",
  description: "In memory of Robert Rambo Williams — father, grandfather, and beloved family patriarch.",
};

const eulogies = [
  {
    service: "Burial Service – November 10, 2005",
    entries: [
      { author: "Heather Marie Williams (#10)", role: "daughter", type: "Letter", slug: "letter-heather" },
    ],
  },
  {
    service: "Funeral Service – November 10, 2005",
    entries: [
      { author: "Michael Williams (#5)", role: "son", type: "Eulogy", slug: "eulogy-michael" },
      { author: "Thomas Williams (#6)", role: "son", type: "Eulogy", slug: "eulogy-thomas", note: "Notes only — Tom spoke largely from the heart." },
    ],
  },
  {
    service: "Rosary Service – November 9, 2005",
    entries: [
      { author: "Jakob (grandson)", role: "grandson", type: "Letter", slug: "letter-jakob" },
      { author: "Mary Elizabeth Williams (#9)", role: "daughter", type: "Eulogy", slug: "eulogy-mary-elizabeth" },
      { author: "Damian Williams (#4)", role: "son", type: "Eulogy", slug: "eulogy-damian" },
    ],
  },
];

const nicknames = [
  "Dad", "Pops", "Daddyo", "Paco Brown", "Grandpa", "Papa",
  "Robbie", "Uncle Robbie", "Rob", "Bob", "William", "Gandolph",
  "Santa Claus", "Husband", "Father", "Son", "Brother",
  "Uncle", "Cousin", "Friend", "Loved",
];

const typeIcon: Record<string, string> = {
  Eulogy: "🕊️",
  Letter: "✉️",
};

export default function RobertWilliamsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-2">
          Robert Rambo Williams
        </h1>
        <p className="text-lg text-gray-500 italic">
          In Loving Memory &nbsp;·&nbsp; May 16, 1936 – October 6, 2005
        </p>
      </div>

      {/* Nicknames */}
      <section className="bg-primary-50 rounded-2xl p-8 mb-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-4">
          Known and Loved As
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {nicknames.map((name) => (
            <span
              key={name}
              className="bg-white border border-primary-200 text-primary-800 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Tribute intro */}
      <section className="prose prose-lg max-w-none text-gray-700 mb-12 text-center">
        <p>
          Robert R. Williams was the beloved patriarch of the west coast Williams family (the 10) —
          a man known by many names and loved by all who were fortunate enough
          to know him. This page is dedicated to preserving his memory and the
          words spoken in his honor.
        </p>
      </section>

      {/* Services & Eulogies */}
      <section>
        <h2 className="section-heading">Memorial Services</h2>
        <div className="section-divider"></div>
        <div className="space-y-8">
          {eulogies.map((service) => (
            <div key={service.service} className="card p-6">
              <h3 className="text-base font-semibold text-primary-700 mb-4 uppercase tracking-wide">
                {service.service}
              </h3>
              <div className="space-y-3">
                {service.entries.map((entry) => (
                  <Link
                    key={entry.author}
                    href={`/robert-williams/${entry.slug}`}
                    className="flex items-start gap-4 border-l-4 border-primary-200 pl-4 py-2 rounded-r-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
                  >
                    <span className="text-xl mt-0.5 flex-shrink-0">
                      {typeIcon[entry.type] ?? "📄"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif font-bold text-gray-800 group-hover:text-primary-800 transition-colors">
                        {entry.type} by {entry.author}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {entry.role}
                      </p>
                      {entry.note && (
                        <p className="text-xs italic text-gray-400 mt-1">
                          {entry.note}
                        </p>
                      )}
                    </div>
                    <span className="text-primary-400 group-hover:text-primary-700 transition-colors text-sm font-semibold flex-shrink-0 mt-0.5">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Poem */}
      <section className="mt-12">
        <Link
          href="/robert-williams/poem-if-i-knew"
          className="block bg-warm-50 border border-warm-200 hover:border-warm-400 hover:bg-warm-100 rounded-2xl p-8 text-center transition-all group"
        >
          <div className="text-3xl mb-3">📜</div>
          <h2 className="font-serif font-bold text-primary-800 text-xl mb-2 group-hover:text-primary-900 transition-colors">
            Poem: If I Knew
          </h2>
          <p className="text-gray-600 italic text-sm mb-4">
            Read at the Rosary Service, November 9, 2005
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:text-primary-900 transition-colors">
            Read the poem →
          </span>
        </Link>
      </section>

      {/* Closing */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Services Announcement: November 7, 2005 &nbsp;·&nbsp; Rosary: November 9, 2005
          &nbsp;·&nbsp; Funeral &amp; Burial: November 10, 2005
        </p>
      </div>
    </div>
  );
}
