import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grandma Peggy's Thank You Letter — Williams Family Reunion 2001",
  description: "A thank you letter from Grandma Peggy Williams, written after the Williams Family Reunion 2001 celebrating her 90th birthday.",
};

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">

      {/* Back link */}
      <Link
        href="/reunion-2001"
        className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-800 mb-8 transition-colors"
      >
        ← Back to Reunion 2001
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-warm-600 mb-2">
          Williams Family Reunion 2001
        </p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-1">
          A Letter from Grandma Peggy
        </h1>
        <p className="text-sm text-gray-500">Written August 31, 2001</p>
        <div className="section-divider mt-4"></div>
      </div>

      {/* Letter */}
      <article className="bg-warm-50 border border-warm-200 rounded-2xl p-8 md:p-10 shadow-sm">
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-5">

          <p>Dear Beautiful, Healthy, Thinking Family</p>

          <p>
            I am indebted to each one for the recent gathering which celebrated my
            90 years of Life. From Denver, Colorado, 1922 to Rock Hill, SC, 2001
            was a long list of experiences. The final list of the past 67 years
            have in that room, from our wedding 4-14-34 to 8-11-01.
          </p>

          <p>
            I just sat all afternoon and watched my life play out in front of me.
            I will never get over this phenomenal experience. I sat with Chance &amp;
            Koji discussing religion as a starter. Then moved my chair to the spot
            where I would &ldquo;receive&rdquo; friends and well-wishes all afternoon. My
            entire family was with me all afternoon to meet &amp; greet our hometown
            friends. It was chaotic. There were five generations meeting &amp; greeting
            &amp; remembering &amp; reminding &amp; shrieking &amp; laughing. Right now as I try to
            relive the day I keep saying &ldquo;It&apos;s unbelievable&rdquo; — 90 years gathered
            together in one room for one afternoon and it was sort of like a forest.
            The grounds was full of tiny crawling and very joyful beings. They were
            organizing &amp; interacting with one another. And next level is those who
            are asking themselves, Who am I? And above that are those who have taken
            a direction and progressed down the way, and so on.
          </p>

          <p>
            Anyway the whole story was right there in front of me and I loved every
            moment of the performance. It&apos;s unbelievable. It&apos;s not a video tape or
            a recording: But a happening. How can I say &ldquo;Thank you&rdquo;. There isn&apos;t a
            word large enough. We are one Gorgeous Family. God has blest us all,
            each one singularly.
          </p>

          <p>We thank Him every day.</p>

          <div className="pt-4 border-t border-warm-200">
            <p className="font-semibold text-primary-900">My love,</p>
            <p className="text-2xl font-serif font-bold text-primary-800 mt-1">Grandma Peggy</p>
            <p className="text-sm text-gray-500 mt-1">August 31, 2001</p>
          </div>

        </div>
      </article>

    </div>
  );
}
