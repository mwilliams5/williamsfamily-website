"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/reunions", label: "Reunions 🎉" },
  { href: "/cookbook", label: "Cook Book" },
  { href: "/gallery", label: "Gallery" },
  { href: "/memories", label: "Memories" },
  { href: "/updates", label: "Updates" },
  { href: "/robert-williams", label: "Robert R. Williams" },
  { href: "/family-tree", label: "🌳 Family Tree" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Treat any /reunion-* path as active for the Reunions nav link
  // Treat /share-a-memory as active for the Memories nav link
  const isActive = (href: string) => {
    if (href === "/reunions") return pathname === "/reunions" || pathname.startsWith("/reunion-");
    if (href === "/memories") return pathname === "/memories" || pathname === "/share-a-memory";
    return pathname === href;
  };

  return (
    <header className="bg-primary-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:text-primary-100 transition-colors">
          <Image
            src="/photos/williams-logo.png"
            alt="Williams Family Crest"
            width={32}
            height={28}
            className="brightness-0 invert"
          />
          <span className="text-2xl font-serif font-bold tracking-wide">The Williams Family</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                isActive(link.href)
                  ? "text-warm-500 border-b-2 border-warm-500 pb-0.5"
                  : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-900 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                isActive(link.href) ? "text-warm-500" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
