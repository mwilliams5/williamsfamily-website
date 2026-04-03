"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function RSVPPage() {
  const [name, setName] = useState("");
  const [attendingCount, setAttendingCount] = useState("1");
  const [email, setEmail] = useState("");
  const [bringingDish, setBringingDish] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        attending_count: attendingCount,
        email: email.trim(),
        bringing_dish: bringingDish.trim(),
        notes: notes.trim(),
      }),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-serif font-bold text-primary-900 mb-3">You&apos;re on the list!</h1>
        <p className="text-gray-600 mb-8">
          Thanks for RSVPing for the 2026 Williams Family Reunion. We can&apos;t wait to see you in Rock Hill!
        </p>
        <Link href="/reunion-2026" className="btn-primary inline-block">
          ← Back to Reunion Info
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🎉</div>
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-2">Reunion 2026</p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-2">RSVP</h1>
        <p className="text-gray-600">July 17, 2026 · Rock Hill, SC</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Mike & Trish Williams"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="count" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Number Attending <span className="text-red-500">*</span>
            </label>
            <select
              id="count"
              value={attendingCount}
              onChange={(e) => setAttendingCount(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email <span className="font-normal text-gray-400">(optional — for updates)</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="dish" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Bringing a dish? <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="dish"
              type="text"
              value={bringingDish}
              onChange={(e) => setBringingDish(e.target.value)}
              placeholder="e.g. Buckeyes, Heart Attack Potatoes"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Notes <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Anything else you'd like us to know…"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              ⚠️ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-warm-500 hover:bg-warm-600 disabled:opacity-60 text-gray-900 font-bold py-3.5 rounded-xl transition-all text-sm shadow-md"
          >
            {status === "loading" ? "Submitting…" : "🎉 Count Me In!"}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <Link href="/reunion-2026" className="text-sm text-gray-500 hover:text-primary-700 transition-colors">
          ← Back to Reunion Info
        </Link>
      </div>
    </div>
  );
}
