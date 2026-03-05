import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { christmasLetters, getLetterBySlug } from "@/lib/christmasLettersData";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return christmasLetters.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const letter = getLetterBySlug(params.slug);
  if (!letter) return { title: "Not Found" };
  return {
    title: `${letter.title} (${letter.year}) — Williams Family`,
    description: `${letter.year} Christmas letter from ${letter.author}.`,
  };
}

export default function ChristmasLetterPage({ params }: Props) {
  const letter = getLetterBySlug(params.slug);
  if (!letter) notFound();

  const isPlaceholder = letter.content.startsWith("[Letter content");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1.5">
        <Link href="/updates" className="hover:text-primary-600 transition-colors">
          Updates
        </Link>
        <span>›</span>
        <span>Christmas Letters</span>
        <span>›</span>
        <span className="text-gray-600">{letter.year} · {letter.author}</span>
      </nav>

      {/* Header */}
      <div className="mb-10 border-b-2 border-primary-100 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🎄</span>
          <span className="text-sm font-bold uppercase tracking-widest text-primary-500">
            Christmas {letter.year}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-2">
          {letter.title}
        </h1>
        <p className="text-gray-500 text-sm">From: {letter.author}</p>
      </div>

      {/* Letter body */}
      <article className="prose prose-lg max-w-none">
        {isPlaceholder ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-amber-800 font-semibold mb-1">Letter coming soon</p>
            <p className="text-amber-700 text-sm">
              The text for this letter hasn&apos;t been added yet. If you have a copy,
              paste it into <code className="bg-amber-100 px-1 rounded">lib/christmasLettersData.ts</code> under the <code className="bg-amber-100 px-1 rounded">{letter.slug}</code> entry.
            </p>
          </div>
        ) : (
          <div className="font-serif text-gray-800 leading-relaxed whitespace-pre-wrap">
            {letter.content}
          </div>
        )}
      </article>

      {/* Navigation between letters */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/updates"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 border border-primary-200 hover:border-primary-400 px-4 py-2 rounded-lg transition-all hover:bg-primary-50"
        >
          ← Back to Updates
        </Link>
        <Link
          href="/updates#christmas-letters"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-400 px-4 py-2 rounded-lg transition-all hover:bg-gray-50"
        >
          🎄 All Christmas Letters
        </Link>
      </div>
    </div>
  );
}
