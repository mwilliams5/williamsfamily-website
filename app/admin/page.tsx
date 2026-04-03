"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Tab = "memories" | "recipes" | "photos" | "rsvps";

interface Memory {
  id: string; created_at: string; name: string; memory: string; timeframe: string | null;
}
interface Recipe {
  id: string; created_at: string; contributor: string; recipe_name: string;
  category: string; ingredients: string; instructions: string;
}
interface Photo {
  id: string; created_at: string; uploader_name: string; caption: string | null;
  event: string | null; storage_path: string; signed_url: string | null;
}
interface RSVP {
  id: string; created_at: string; name: string; attending_count: number;
  email: string | null; bringing_dish: string | null; notes: string | null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function Badge({ n }: { n: number }) {
  if (n === 0) return null;
  return <span className="ml-1.5 text-xs font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full">{n}</span>;
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("memories");
  const [memories, setMemories] = useState<Memory[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    const [mRes, recRes, phRes, rsvpRes] = await Promise.all([
      fetch("/api/admin/memories"),
      fetch("/api/admin/recipes"),
      fetch("/api/admin/photos"),
      fetch("/api/admin/rsvps"),
    ]);
    if (mRes.status === 401) { router.push("/admin/login"); return; }
    const [mData, recData, phData, rsvpData] = await Promise.all([
      mRes.json(), recRes.json(), phRes.json(), rsvpRes.json(),
    ]);
    setMemories(mData.memories ?? []);
    setRecipes(recData.recipes ?? []);
    setPhotos(phData.photos ?? []);
    setRsvps(rsvpData.rsvps ?? []);
    setLoading(false);
  }, [router]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const handleMemoryAction = async (id: string, action: "approve" | "delete") => {
    setWorking(id + action);
    await fetch("/api/admin/memories", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action }) });
    setMemories((p) => p.filter((m) => m.id !== id));
    setWorking(null);
  };

  const handleRecipeAction = async (id: string, action: "approve" | "delete") => {
    setWorking(id + action);
    await fetch("/api/admin/recipes", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action }) });
    setRecipes((p) => p.filter((r) => r.id !== id));
    setWorking(null);
  };

  const handlePhotoAction = async (id: string, action: "approve" | "delete", storage_path: string) => {
    setWorking(id + action);
    await fetch("/api/admin/photos", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action, storage_path }) });
    setPhotos((p) => p.filter((ph) => ph.id !== id));
    setWorking(null);
  };

  const handleRsvpDelete = async (id: string) => {
    setWorking(id + "delete");
    await fetch("/api/admin/rsvps", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setRsvps((p) => p.filter((r) => r.id !== id));
    setWorking(null);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const totalRsvpGuests = rsvps.reduce((sum, r) => sum + r.attending_count, 0);

  const tabs: { key: Tab; label: string; count: number | null }[] = [
    { key: "memories", label: "Memories", count: memories.length },
    { key: "recipes", label: "Recipes", count: recipes.length },
    { key: "photos", label: "Photos", count: photos.length },
    { key: "rsvps", label: "RSVPs", count: null },
  ];

  const ActionButtons = ({ id, onApprove, onDelete, approveLabel = "✓ Approve" }: {
    id: string; onApprove?: () => void; onDelete: () => void; approveLabel?: string;
  }) => (
    <div className="flex gap-3 mt-4">
      {onApprove && (
        <button onClick={onApprove} disabled={working !== null}
          className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
          {working === id + "approve" ? "Approving…" : approveLabel}
        </button>
      )}
      <button onClick={onDelete} disabled={working !== null}
        className={`${onApprove ? "flex-1" : "w-full"} bg-red-50 hover:bg-red-100 disabled:opacity-50 text-red-600 font-bold py-2.5 rounded-xl text-sm border border-red-200 transition-colors`}>
        {working === id + "delete" ? "Deleting…" : "✕ Delete"}
      </button>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary-900">Admin</h1>
          <p className="text-sm text-gray-500 mt-0.5">Williams Family Website</p>
        </div>
        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all ${tab === t.key ? "bg-white shadow text-primary-800" : "text-gray-500 hover:text-gray-700"}`}>
            {t.label}
            {t.count !== null && <Badge n={t.count} />}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-400 text-sm py-8 text-center">Loading…</p>}

      {/* MEMORIES */}
      {!loading && tab === "memories" && (
        <section>
          {memories.length === 0 ? (
            <EmptyState emoji="✅" message="No pending memories." />
          ) : (
            <div className="space-y-4">
              {memories.map((m) => (
                <div key={m.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-semibold text-primary-800">{m.name}</p>
                      {m.timeframe && <p className="text-xs text-warm-600 mt-0.5">{m.timeframe}</p>}
                    </div>
                    <p className="text-xs text-gray-400 shrink-0">{formatDate(m.created_at)}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-serif italic border-l-4 border-primary-100 pl-4">
                    {m.memory}
                  </p>
                  <ActionButtons id={m.id}
                    onApprove={() => handleMemoryAction(m.id, "approve")}
                    onDelete={() => handleMemoryAction(m.id, "delete")} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* RECIPES */}
      {!loading && tab === "recipes" && (
        <section>
          {recipes.length === 0 ? (
            <EmptyState emoji="✅" message="No pending recipes." />
          ) : (
            <div className="space-y-4">
              {recipes.map((r) => (
                <div key={r.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <p className="font-serif font-bold text-lg text-primary-800">{r.recipe_name}</p>
                      <p className="text-xs text-warm-600 mt-0.5">by {r.contributor} · {r.category}</p>
                    </div>
                    <p className="text-xs text-gray-400 shrink-0">{formatDate(r.created_at)}</p>
                  </div>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Ingredients</p>
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-gray-50 rounded-lg p-3">{r.ingredients}</pre>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Instructions</p>
                      <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-3">{r.instructions}</p>
                    </div>
                  </div>
                  <ActionButtons id={r.id}
                    onApprove={() => handleRecipeAction(r.id, "approve")}
                    onDelete={() => handleRecipeAction(r.id, "delete")} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* PHOTOS */}
      {!loading && tab === "photos" && (
        <section>
          {photos.length === 0 ? (
            <EmptyState emoji="✅" message="No pending photos." />
          ) : (
            <div className="space-y-4">
              {photos.map((ph) => (
                <div key={ph.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-semibold text-primary-800">{ph.uploader_name}</p>
                      {ph.event && <p className="text-xs text-warm-600 mt-0.5">{ph.event}</p>}
                    </div>
                    <p className="text-xs text-gray-400 shrink-0">{formatDate(ph.created_at)}</p>
                  </div>
                  {ph.signed_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={ph.signed_url} alt={ph.caption ?? "Submitted photo"} className="w-full max-h-72 object-contain rounded-xl bg-gray-100 mb-3" />
                  )}
                  {ph.caption && <p className="text-sm text-gray-600 italic">&ldquo;{ph.caption}&rdquo;</p>}
                  <ActionButtons id={ph.id}
                    onApprove={() => handlePhotoAction(ph.id, "approve", ph.storage_path)}
                    onDelete={() => handlePhotoAction(ph.id, "delete", ph.storage_path)} />
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* RSVPs */}
      {!loading && tab === "rsvps" && (
        <section>
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 mb-6 flex items-center gap-4">
            <div className="text-4xl">🎉</div>
            <div>
              <p className="font-serif font-bold text-2xl text-primary-900">{rsvps.length} families · {totalRsvpGuests} guests</p>
              <p className="text-sm text-primary-600">Reunion 2026 · July 17 · Rock Hill, SC</p>
            </div>
          </div>
          {rsvps.length === 0 ? (
            <EmptyState emoji="📋" message="No RSVPs yet." />
          ) : (
            <div className="space-y-3">
              {rsvps.map((r) => (
                <div key={r.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-primary-800">{r.name}</p>
                        <span className="text-xs bg-primary-100 text-primary-700 font-bold px-2 py-0.5 rounded-full">
                          {r.attending_count} {r.attending_count === 1 ? "guest" : "guests"}
                        </span>
                      </div>
                      {r.email && <p className="text-xs text-gray-500 mt-0.5">{r.email}</p>}
                      {r.bringing_dish && <p className="text-xs text-warm-600 mt-0.5">🍽 {r.bringing_dish}</p>}
                      {r.notes && <p className="text-xs text-gray-500 mt-0.5 italic">{r.notes}</p>}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-gray-400">{formatDate(r.created_at)}</p>
                      <button onClick={() => handleRsvpDelete(r.id)} disabled={working !== null}
                        className="text-xs text-red-400 hover:text-red-600 mt-1 transition-colors">
                        {working === r.id + "delete" ? "Removing…" : "Remove"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

function EmptyState({ emoji, message }: { emoji: string; message: string }) {
  return (
    <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
      <div className="text-4xl mb-3">{emoji}</div>
      <p className="text-gray-500 font-medium">{message}</p>
    </div>
  );
}
