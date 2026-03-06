import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reunion 2001 — Williams Family",
  description: "Memories and photos from the Williams Family Reunion 2001, celebrating Grandma Peggy's 90th birthday in Rock Hill, SC.",
};

export default function Reunion2001Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Back link */}
      <Link
        href="/reunions"
        className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-800 mb-8 transition-colors"
      >
        ← All Reunions
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-2">2001</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-3">
          Williams Family Reunion 2001
        </h1>
        <div className="section-divider"></div>
        <p className="text-lg text-gray-600 mt-4">
          Rock Hill, SC &nbsp;·&nbsp; August 2001
        </p>
        <p className="text-gray-600 mt-2">
          A landmark gathering — the whole family came together to celebrate
          Grandma Peggy&apos;s 90th birthday. Five generations under one roof, a
          lifetime of memories relived in a single afternoon.
        </p>
      </div>

      {/* Group photo */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src="/photos/reunion-group.jpg"
          alt="Williams Family Reunion 2001 group photo"
          width={900}
          height={500}
          className="w-full object-cover"
          priority
        />
        <p className="text-center text-sm text-gray-500 italic py-3 bg-white">
          All of Us! — Williams Family Reunion 2001
        </p>
      </div>

      {/* Additional photos */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/photos/reunion-2001/grandmasfamily.gif"
            alt="Grandma Peggy with her family at the 2001 reunion"
            width={485}
            height={298}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/photos/reunion-2001/extendedfamilys.jpg"
            alt="Extended Williams family at the 2001 reunion"
            width={636}
            height={493}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Grandma Peggy's letter */}
      <section className="bg-warm-50 border border-warm-200 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">✉️</span>
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary-900">
              A Letter from Grandma Peggy
            </h2>
            <p className="text-sm text-gray-500 mt-1">Written August 31, 2001</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed italic mb-6">
          &ldquo;How can I say &lsquo;Thank you&rsquo;. There isn&apos;t a word large enough.
          We are one Gorgeous Family. God has blest us all, each one singularly.&rdquo;
        </p>
        <Link
          href="/reunion-2001/thank-you"
          className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          📖 Read Grandma Peggy&apos;s Full Letter
        </Link>
      </section>

    </div>
  );
}
