import type { Metadata } from "next";
import Link from "next/link";
import { christmasLetters } from "@/lib/christmasLettersData";

export const metadata: Metadata = {
  title: "Christmas Letters — Williams Family",
  description: "Annual Christmas letters from Williams family branches, collected from 2001 through 2006.",
};

// Author color palette — consistent per family branch
const authorColors: Record<string, { bg: string; border: string; badge: string; dot: string }> = {
  "Mary & Jake":               { bg: "bg-red-50",    border: "border-red-200",    badge: "bg-red-100 text-red-700",    dot: "bg-red-400" },
  "Flindt Family":             { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400" },
  "Damian Williams & Family":  { bg: "bg-blue-50",   border: "border-blue-200",   badge: "bg-blue-100 text-blue-700",   dot: "bg-blue-400" },
  "McDevitt Family":           { bg: "bg-amber-50",  border: "border-amber-200",  badge: "bg-amber-100 text-amber-700",  dot: "bg-amber-400" },
};

const defaultColors = { bg: "bg-gray-50", border: "border-gray-200", badge: "bg-gray-100 text-gray-700", dot: "bg-gray-400" };

function getColors(author: string) {
  return authorColors[author] ?? defaultColors;
}

// Group letters by year, newest first
const years = [...new Set(christmasLetters.map((l) => l.year))].sort((a, b) => b - a);

function getPreview(content: string): string | null {
  if (content.startsWith("[Letter content")) return null;
  const cleaned = content.replace(/\n+/g, " ").trim();
  return cleaned.length > 140 ? cleaned.slice(0, 140).trimEnd() + "…" : cleaned;
}

export default function ChristmasLettersPage() {
  // Collect unique authors for the legend
  const allAuthors = [...new Set(christmasLetters.map((l) => l.author))];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="mb-12">
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/updates" className="hover:text-primary-600 transition-colors">
            Updates
          </Link>
          <span>›</span>
          <span className="text-gray-600">Christmas Letters</span>
        </nav>

        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🎄</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">
            Christmas Letters
          </h1>
        </div>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Annual letters from Williams family branches — a window into each family&apos;s year,
          written in their own words.
        </p>

        {/* Author legend */}
        <div className="flex flex-wrap gap-2 mt-6">
          {allAuthors.map((author) => {
            const c = getColors(author);
            return (
              <span
                key={author}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${c.bg} ${c.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                {author}
              </span>
            );
          })}
        </div>
      </div>

      {/* Timeline — one section per year */}
      <div className="space-y-14">
        {years.map((year) => {
          const letters = christmasLetters.filter((l) => l.year === year);
          return (
            <div key={year}>
              {/* Year marker */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-serif font-bold text-primary-800">{year}</span>
                <div className="flex-1 h-px bg-primary-100" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary-300">
                  {letters.length} {letters.length === 1 ? "letter" : "letters"}
                </span>
              </div>

              {/* Letter cards in a grid */}
              <div className={`grid gap-4 ${letters.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {letters.map((letter) => {
                  const c = getColors(letter.author);
                  const preview = getPreview(letter.content);
                  return (
                    <Link
                      key={letter.slug}
                      href={`/christmas-letters/${letter.slug}`}
                      className={`group block rounded-2xl border p-6 transition-all hover:shadow-md hover:-translate-y-0.5 ${c.bg} ${c.border}`}
                    >
                      {/* Author badge */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                          {letter.author}
                        </span>
                        <span className="text-primary-400 group-hover:text-primary-700 transition-colors text-xl leading-none mt-0.5">
                          ›
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif font-bold text-primary-900 text-lg leading-snug mb-2 group-hover:text-primary-700 transition-colors">
                        {letter.title}
                      </h2>

                      {/* Preview or "coming soon" */}
                      {preview ? (
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {preview}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-400 italic">Letter coming soon…</p>
                      )}

                      {/* Read link */}
                      <p className="mt-4 text-xs font-semibold text-primary-600 group-hover:text-primary-800 transition-colors">
                        Read letter →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
