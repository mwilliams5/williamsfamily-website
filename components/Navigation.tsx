"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cookbook", label: "Cook Book" },
  { href: "/gallery", label: "Gallery" },
  { href: "/updates", label: "Updates" },
  { href: "/robert-williams", label: "Robert R. Williams" },
];

const reunionLinks = [
  { href: "/reunion-2026", label: "Reunion 2026 🎉" },
  { href: "/reunion-2021", label: "Reunion 2021 📸" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reunionOpen, setReunionOpen] = useState(false);
  const [mobileReunionOpen, setMobileReunionOpen] = useState(false);

  const isReunionActive = reunionLinks.some((l) => pathname === l.href);

  return (
    <header className="bg-primary-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wide hover:text-primary-100 transition-colors">
          The Williams Family
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
              pathname === "/" ? "text-warm-500 border-b-2 border-warm-500 pb-0.5" : "text-white"
            }`}
          >
            Home
          </Link>

          {/* Reunions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setReunionOpen(true)}
            onMouseLeave={() => setReunionOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                isReunionActive ? "text-warm-500 border-b-2 border-warm-500 pb-0.5" : "text-white"
              }`}
              aria-haspopup="true"
              aria-expanded={reunionOpen}
            >
              Reunions
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${reunionOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {reunionOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {reunionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-800 ${
                      pathname === link.href
                        ? "bg-primary-50 text-primary-800 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                pathname === link.href
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
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
              pathname === "/" ? "text-warm-500" : "text-white"
            }`}
          >
            Home
          </Link>

          {/* Reunions accordion */}
          <div>
            <button
              onClick={() => setMobileReunionOpen(!mobileReunionOpen)}
              className={`flex items-center justify-between w-full py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                isReunionActive ? "text-warm-500" : "text-white"
              }`}
            >
              Reunions
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${mobileReunionOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileReunionOpen && (
              <div className="pl-4 border-l border-primary-700 mb-1">
                {reunionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setMenuOpen(false); setMobileReunionOpen(false); }}
                    className={`block py-2 text-sm font-medium transition-colors hover:text-primary-100 ${
                      pathname === link.href ? "text-warm-500" : "text-primary-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-100 ${
                pathname === link.href ? "text-warm-500" : "text-white"
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
