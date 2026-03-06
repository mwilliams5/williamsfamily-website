import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rwwDocuments, getRWWDocument } from "@/lib/robertWilliamsData";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return rwwDocuments.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getRWWDocument(params.slug);
  if (!doc) return {};
  return {
    title: `${doc.title} — ${doc.author} | Robert R. Williams`,
    description: `${doc.type} by ${doc.author} — ${doc.service}`,
  };
}

const typeLabel: Record<string, string> = {
  Eulogy: "Eulogy",
  Letter: "Letter",
  Poem: "Poem",
  Notes: "Speaking Notes",
};

const typeIcon: Record<string, string> = {
  Eulogy: "🕊️",
  Letter: "✉️",
  Poem: "📜",
  Notes: "📝",
};

export default function RWWDocumentPage({ params }: Props) {
  const doc = getRWWDocument(params.slug);
  if (!doc) notFound();

  const isPoemStyle = doc.type === "Poem" || doc.author.includes("Mary Elizabeth") || doc.author.includes("Heather");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/robert-williams"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
        >
          ← Robert R. Williams
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">{typeIcon[doc.type]}</span>
          <span className="text-xs font-bold uppercase tracking-widest text-warm-600">
            {typeLabel[doc.type]}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-2">
          {doc.title}
        </h1>
        <p className="text-lg font-medium text-gray-700">
          {doc.author}
          {doc.role && (
            <span className="text-gray-400 font-normal"> &nbsp;·&nbsp; {doc.role}</span>
          )}
        </p>
        <p className="text-sm text-gray-500 mt-1">{doc.service}</p>

        {doc.note && (
          <p className="mt-3 text-sm italic text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
            {doc.note}
          </p>
        )}

        <div className="section-divider mt-6"></div>
      </div>

      {/* Content */}
      <article
        className={`text-gray-800 leading-relaxed ${
          isPoemStyle
            ? "font-serif text-lg space-y-5"
            : "prose prose-lg max-w-none space-y-5"
        }`}
      >
        {doc.content.split("\n\n").map((paragraph, i) => {
          const lines = paragraph.split("\n");
          return (
            <p key={i} className={isPoemStyle ? "whitespace-pre-line" : ""}>
              {lines.length === 1 ? (
                paragraph
              ) : (
                lines.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < lines.length - 1 && <br />}
                  </span>
                ))
              )}
            </p>
          );
        })}
      </article>

      {/* Footer */}
      <div className="mt-14 pt-8 border-t border-gray-200 flex justify-center">
        <Link
          href="/robert-williams"
          className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
        >
          ← Back to Robert R. Williams
        </Link>
      </div>
    </div>
  );
}
