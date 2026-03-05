"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function MemoryForm() {
  const [name, setName] = useState("");
  const [memory, setMemory] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/memories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), memory: memory.trim(), timeframe: timeframe.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setName("");
      setMemory("");
      setTimeframe("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">💌</div>
        <h2 className="text-2xl font-serif font-bold text-primary-800 mb-2">
          Thank you!
        </h2>
        <p className="text-gray-600 mb-8">
          Your memory has been shared with the family.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/memories"
            className="inline-flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
          >
            📖 View All Memories
          </Link>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center gap-2 border border-primary-300 hover:border-primary-500 text-primary-700 font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-primary-50"
          >
            💌 Share Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
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
          placeholder="e.g. Aunt Sarah, Uncle Bob"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Timeframe */}
      <div>
        <label htmlFor="timeframe" className="block text-sm font-semibold text-gray-700 mb-1.5">
          When was this?{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <input
          id="timeframe"
          type="text"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          placeholder="e.g. Summer 2001, Christmas 1995, Reunion 2006"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-shadow"
        />
      </div>

      {/* Memory */}
      <div>
        <label htmlFor="memory" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Your Memory <span className="text-red-500">*</span>
        </label>
        <textarea
          id="memory"
          required
          rows={7}
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          placeholder="Share a special memory, story, or moment with the family…"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none transition-shadow"
        />
        <p className="text-xs text-gray-400 mt-1">{memory.length} characters</p>
      </div>

      {errorMsg && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          ⚠️ {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary-800 hover:bg-primary-900 disabled:bg-primary-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-sm shadow-md hover:shadow-lg"
      >
        {status === "loading" ? "Sharing…" : "💌 Share My Memory"}
      </button>
    </form>
  );
}
