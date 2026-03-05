import type { Metadata } from "next";
import Link from "next/link";
import MemoryForm from "@/components/MemoryForm";

export const metadata: Metadata = {
  title: "Share a Memory — Williams Family",
  description: "Share a special memory or story with the Williams family.",
};

export default function ShareAMemoryPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">

      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">💌</div>
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">
          Family Memories
        </p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-3">
          Share a Memory
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Have a story, funny moment, or cherished memory from a family gathering?
          Share it here and it will appear on the{" "}
          <Link href="/memories" className="text-primary-600 hover:text-primary-800 underline underline-offset-2">
            Family Memories
          </Link>{" "}
          page for everyone to enjoy.
        </p>
      </div>

      {/* Form card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        <MemoryForm />
      </div>

      {/* Back link */}
      <div className="text-center mt-8">
        <Link
          href="/memories"
          className="text-sm text-gray-500 hover:text-primary-700 transition-colors"
        >
          ← Browse family memories
        </Link>
      </div>
    </div>
  );
}
