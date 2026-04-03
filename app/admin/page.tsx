"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Memory {
  id: string;
  created_at: string;
  name: string;
  memory: string;
  timeframe: string | null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

export default function AdminPage() {
  const router = useRouter();
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState<string | null>(null);

  const fetchMemories = async () => {
    const res = await fetch("/api/admin/memories");
    if (res.status === 401) { router.push("/admin/login"); return; }
    const data = await res.json();
    setMemories(data.memories ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchMemories(); }, []);

  const handleAction = async (id: string, action: "approve" | "delete") => {
    setWorking(id + action);
    await fetch("/api/admin/memories", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    setMemories((prev) => prev.filter((m) => m.id !== id));
    setWorking(null);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary-900">Admin</h1>
          <p className="text-sm text-gray-500 mt-0.5">Williams Family Website</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-600 transition-colors"
        >
          Sign out
        </button>
      </div>

      {/* Memories Section */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-serif font-bold text-primary-800">Pending Memories</h2>
          {!loading && (
            <span className="text-xs font-bold bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full">
              {memories.length}
            </span>
          )}
        </div>

        {loading && (
          <p className="text-gray-400 text-sm py-8 text-center">Loading…</p>
        )}

        {!loading && memories.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-gray-500 font-medium">All caught up — nothing pending.</p>
          </div>
        )}

        <div className="space-y-4">
          {memories.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-semibold text-primary-800">{m.name}</p>
                  {m.timeframe && (
                    <p className="text-xs text-warm-600 mt-0.5">{m.timeframe}</p>
                  )}
                </div>
                <p className="text-xs text-gray-400 shrink-0">{formatDate(m.created_at)}</p>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed font-serif italic border-l-4 border-primary-100 pl-4 mb-5">
                {m.memory}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(m.id, "approve")}
                  disabled={working !== null}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                >
                  {working === m.id + "approve" ? "Approving…" : "✓ Approve"}
                </button>
                <button
                  onClick={() => handleAction(m.id, "delete")}
                  disabled={working !== null}
                  className="flex-1 bg-red-50 hover:bg-red-100 disabled:opacity-50 text-red-600 font-bold py-2.5 rounded-xl text-sm border border-red-200 transition-colors"
                >
                  {working === m.id + "delete" ? "Deleting…" : "✕ Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
