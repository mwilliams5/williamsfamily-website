import Link from "next/link";
import RandomQuote from "./RandomQuote";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-900 text-primary-100 text-center py-8 mt-auto">
      <RandomQuote />
      <div className="mt-6">
        <p className="text-sm">
          &copy; {year} The Williams Family &mdash; All rights reserved.
        </p>
        <p className="text-xs mt-1 text-primary-300">
          Built with Next.js &amp; hosted on Vercel
        </p>
        {/* Hidden preview link — remove once Family Tree is live in nav */}
        <Link
          href="/family-tree"
          className="text-xs mt-2 inline-block text-primary-700 hover:text-primary-400 transition-colors"
          title="Family Tree (preview)"
        >
          🌳
        </Link>
      </div>
    </footer>
  );
}
