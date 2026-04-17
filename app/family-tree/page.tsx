import type { Metadata } from "next";
import { family, type FamilyPerson } from "@/lib/familyTreeData";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "The Williams family tree — five generations descended from Thomas Lesslie Williams Sr. and Margaret Ann Rambo (Grandma Peggy).",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function childrenOf(peck: number): FamilyPerson[] {
  return family
    .filter((p) => p.parentPeck === peck)
    .sort((a, b) => (a.born ?? 9999) - (b.born ?? 9999));
}

function lifespan(p: FamilyPerson): string {
  if (p.born && p.died) return `${p.born}–${p.died}`;
  if (p.born) return `b. ${p.born}`;
  return "";
}

function displayName(p: FamilyPerson): string {
  return p.nick ? `${p.name} (${p.nick})` : p.name;
}

function marriageInfo(p: FamilyPerson): string | null {
  if (!p.spouse && !p.married) return null;
  const parts: string[] = [];
  if (p.divorced) parts.push("÷");
  if (p.married) parts.push(`m. ${p.married}`);
  if (p.spouse) parts.push(p.spouse);
  return parts.join(" · ");
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

// ── Gen colours ──────────────────────────────────────────────────────────────
const GEN1_COLORS = [
  "from-blue-700 to-blue-900",
  "from-emerald-700 to-emerald-900",
  "from-purple-700 to-purple-900",
  "from-rose-700 to-rose-900",
  "from-amber-600 to-amber-800",
  "from-teal-700 to-teal-900",
  "from-indigo-700 to-indigo-900",
  "from-pink-700 to-pink-900",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function PeckBadge({ peck }: { peck: number }) {
  return (
    <span className="text-[10px] text-gray-300 font-mono select-none" title={`Pecking order #${peck}`}>
      #{peck}
    </span>
  );
}

function Gen4List({ children }: { children: FamilyPerson[] }) {
  if (!children.length) return null;
  return (
    <ul className="mt-2 space-y-0.5 pl-3 border-l-2 border-orange-200">
      {children.map((p) => (
        <li key={p.peck} className="text-xs text-gray-600 flex gap-1.5 items-baseline">
          <span className="text-orange-400 shrink-0">◦</span>
          <span>
            <span className="font-medium">{p.nick ?? p.name.split(" ")[0]}</span>
            {" "}
            <span className="text-gray-400">{p.name.split(" ").slice(1).join(" ")}</span>
            {p.born && <span className="text-gray-400 ml-1">({p.born})</span>}
          </span>
          <PeckBadge peck={p.peck} />
        </li>
      ))}
    </ul>
  );
}

function Gen3Card({ p }: { p: FamilyPerson }) {
  const kids = childrenOf(p.peck);
  const marriage = marriageInfo(p);
  return (
    <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-full bg-purple-200 text-purple-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
          {initials(p.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              {p.nick ?? p.name.split(" ")[0]}{" "}
              <span className="font-normal text-gray-500 text-xs">
                {p.name.split(" ").slice(1).join(" ")}
              </span>
            </p>
            <PeckBadge peck={p.peck} />
          </div>
          {lifespan(p) && (
            <p className="text-xs text-gray-400">{lifespan(p)}</p>
          )}
          {marriage && (
            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
              {p.divorced && <span className="text-amber-500 font-bold">÷</span>}
              {p.married && <span>{p.married}</span>}
              {p.spouse && <span className="truncate">{p.spouse}</span>}
            </p>
          )}
          {kids.length > 0 && <Gen4List children={kids} />}
        </div>
      </div>
    </div>
  );
}

function Gen2Card({ p }: { p: FamilyPerson }) {
  const kids = childrenOf(p.peck);
  const marriage = marriageInfo(p);
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Gen 2 header */}
      <div className="bg-green-50 border-b border-green-100 px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green-200 text-green-900 text-sm font-bold flex items-center justify-center shrink-0">
          {initials(p.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="font-serif font-bold text-gray-800 text-sm leading-tight">
              {displayName(p)}
            </p>
            <PeckBadge peck={p.peck} />
          </div>
          <div className="flex flex-wrap gap-x-2 text-xs text-gray-500 mt-0.5">
            {lifespan(p) && <span>{lifespan(p)}</span>}
            {p.divorced && <span className="text-amber-500 font-semibold">÷ divorced</span>}
            {p.married && p.spouse && (
              <span>
                m.&nbsp;{p.married}&nbsp;·&nbsp;{p.spouse}
              </span>
            )}
          </div>
        </div>
        {kids.length > 0 && (
          <span className="text-xs text-gray-400 shrink-0">{kids.length} child{kids.length !== 1 ? "ren" : ""}</span>
        )}
      </div>
      {/* Gen 3 children */}
      {kids.length > 0 && (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {kids.map((k) => (
            <Gen3Card key={k.peck} p={k} />
          ))}
        </div>
      )}
    </div>
  );
}

function Gen1Section({
  person,
  colorClass,
}: {
  person: FamilyPerson;
  colorClass: string;
}) {
  const kids = childrenOf(person.peck);
  const marriage = marriageInfo(person);
  const totalDescendants = family.filter(
    (p) => p.gen > 1 && isDescendantOf(p.peck, person.peck)
  ).length;

  return (
    <details className="group" open={false}>
      <summary
        className={`cursor-pointer list-none select-none bg-gradient-to-r ${colorClass} text-white rounded-xl px-5 py-4 flex items-center gap-4 hover:opacity-95 transition-opacity`}
      >
        <div className="w-12 h-12 rounded-full bg-white/20 text-white text-lg font-bold flex items-center justify-center shrink-0">
          {initials(person.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-serif font-bold text-lg leading-tight">{displayName(person)}</p>
            <span className="text-[10px] text-white/30 font-mono select-none">#{person.peck}</span>
          </div>
          <p className="text-white/70 text-sm mt-0.5">
            {lifespan(person)}
            {marriage && ` · ${marriage}`}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-white/90 text-sm font-semibold">{kids.length} children</p>
          {totalDescendants > 0 && (
            <p className="text-white/60 text-xs">{totalDescendants} total descendants</p>
          )}
          <span className="text-white/80 text-lg group-open:rotate-90 inline-block transition-transform duration-200 mt-1">
            ›
          </span>
        </div>
      </summary>

      {kids.length > 0 && (
        <div className="mt-3 space-y-3 pl-2">
          {kids.map((k) => (
            <Gen2Card key={k.peck} p={k} />
          ))}
        </div>
      )}

      {kids.length === 0 && (
        <div className="mt-3 pl-2 text-sm text-gray-400 italic">No children recorded.</div>
      )}
    </details>
  );
}

// ── Descendant check ─────────────────────────────────────────────────────────

const parentMap = new Map(family.map((p) => [p.peck, p.parentPeck]));

function isDescendantOf(peck: number, ancestorPeck: number): boolean {
  let current: number | undefined = peck;
  while (current !== undefined) {
    const parent = parentMap.get(current);
    if (parent === ancestorPeck) return true;
    current = parent;
  }
  return false;
}

// ── Stats ─────────────────────────────────────────────────────────────────────

const genCounts = [0, 1, 2, 3, 4].map((g) => family.filter((p) => p.gen === g).length);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FamilyTreePage() {
  const gen0 = family.filter((p) => p.gen === 0).sort((a, b) => a.peck - b.peck);
  const gen1 = family.filter((p) => p.gen === 1).sort((a, b) => (a.born ?? 0) - (b.born ?? 0));

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="section-heading">Williams Family Tree</h1>
        <div className="section-divider" />
        <p className="text-lg text-gray-600 max-w-2xl">
          Five generations rooted in Thomas &amp; Peggy Williams. Click any generation to expand.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-5 gap-2 mb-10">
        {[
          { label: "Roots", count: genCounts[0], color: "bg-amber-50 border-amber-200 text-amber-800" },
          { label: "Gen 1", count: genCounts[1], color: "bg-blue-50 border-blue-200 text-blue-800" },
          { label: "Gen 2", count: genCounts[2], color: "bg-green-50 border-green-200 text-green-800" },
          { label: "Gen 3", count: genCounts[3], color: "bg-purple-50 border-purple-200 text-purple-800" },
          { label: "Gen 4", count: genCounts[4], color: "bg-orange-50 border-orange-200 text-orange-800" },
        ].map(({ label, count, color }) => (
          <div key={label} className={`border rounded-xl p-3 text-center ${color}`}>
            <p className="text-2xl font-bold">{count}</p>
            <p className="text-xs font-semibold uppercase tracking-wide">{label}</p>
          </div>
        ))}
      </div>

      {/* Gen 0 — Tom & Peggy */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-2xl p-6 shadow-md">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200 mb-3">The Roots</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {gen0.map((p) => (
              <div key={p.peck} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 text-white text-xl font-bold flex items-center justify-center mx-auto mb-2">
                  {initials(p.name)}
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <p className="font-serif font-bold text-lg">{displayName(p)}</p>
                  <span className="text-[10px] text-amber-200/40 font-mono select-none">#{p.peck}</span>
                </div>
                <p className="text-amber-200 text-sm">{lifespan(p)}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-amber-200 text-sm mt-4">
            Married April 1934 · Parents of 8 children
          </p>
        </div>
      </section>

      {/* ── connector ── */}
      <div className="flex justify-center mb-6">
        <div className="w-px h-8 bg-gray-300" />
      </div>

      {/* Gen 1 — 8 children */}
      <section className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Generation 1 — Children of Tom &amp; Peggy
        </p>
        {gen1.map((p, i) => (
          <Gen1Section key={p.peck} person={p} colorClass={GEN1_COLORS[i % GEN1_COLORS.length]} />
        ))}
      </section>

      <p className="text-xs text-gray-400 text-center mt-12">
        Based on the Williams Family Pecking Order · Updated 2026
      </p>
    </div>
  );
}
