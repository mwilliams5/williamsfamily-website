import type { Metadata } from "next";
import Link from "next/link";
import { supabase, type Memory } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Family Memories — Williams Family",
  description: "Stories and memories shared by Williams family members across the generations.",
};

// Revalidate every 60 seconds so new submissions appear without a full redeploy
export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function MemoriesPage() {
  const { data, error } = await supabase
    .from("memories")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  const memories: Memory[] = data ?? [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Stories &amp; Memories
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Family Memories
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Cherished moments shared by Williams family members across the generations.
        </p>
        <Link
          href="/share-a-memory"
          className="inline-flex items-center gap-2 bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
        >
          💌 Share a Memory
        </Link>
        <div className="section-divider mt-8"></div>
      </div>

      {/* Error state */}
      {error && (
        <div className="text-center py-12 text-red-500">
          <p>Unable to load memories. Please try again later.</p>
        </div>
      )}

      {/* Empty state */}
      {!error && memories.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">💌</div>
          <h2 className="text-xl font-serif font-bold text-primary-800 mb-2">
            No memories yet — be the first!
          </h2>
          <p className="text-gray-500 mb-6">
            Share a story, moment, or memory with the family.
          </p>
          <Link
            href="/share-a-memory"
            className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
          >
            💌 Share the First Memory
          </Link>
        </div>
      )}

      {/* Memories list */}
      {memories.length > 0 && (
        <>
          <p className="text-sm text-gray-400 mb-6 text-center">
            {memories.length} {memories.length === 1 ? "memory" : "memories"} shared
          </p>
          <div className="space-y-6">
            {memories.map((m) => (
              <article
                key={m.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary-200 transition-all"
              >
                {/* Quote mark */}
                <div className="text-4xl text-primary-100 font-serif leading-none mb-2 select-none">
                  &ldquo;
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-serif italic mb-5">
                  {m.memory}
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-primary-800 text-sm">
                      — {m.name}
                    </p>
                    {m.timeframe && (
                      <p className="text-xs text-warm-600 mt-0.5">{m.timeframe}</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{formatDate(m.created_at)}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/share-a-memory"
              className="inline-flex items-center gap-2 bg-warm-500 hover:bg-warm-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              💌 Add Your Memory
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
