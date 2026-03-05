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
      </div>
    </footer>
  );
}
