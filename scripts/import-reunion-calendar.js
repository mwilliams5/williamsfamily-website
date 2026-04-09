/**
 * Import Reunion Calendar from CSV
 *
 * Usage:
 *   1. Download the Google Sheet as CSV (File → Download → CSV)
 *   2. Save it to: scripts/reunion-calendar.csv
 *   3. Run: node scripts/import-reunion-calendar.js
 *
 * This will overwrite lib/reunionCalendarData.ts with updated data.
 */

const fs = require("fs");
const path = require("path");

const CSV_PATH = path.join(__dirname, "reunion-calendar.csv");
const OUT_PATH = path.join(__dirname, "../lib/reunionCalendarData.ts");

if (!fs.existsSync(CSV_PATH)) {
  console.error("❌  CSV not found at scripts/reunion-calendar.csv");
  console.error("    Download from Google Sheets: File → Download → CSV, then save it there.");
  process.exit(1);
}

function parseCSV(text) {
  const lines = text.trim().split("\n");
  const rows = [];
  for (const line of lines.slice(1)) { // skip header
    // Simple CSV parse handling quoted fields
    const cols = [];
    let cur = "", inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { inQuote = !inQuote; continue; }
      if (ch === "," && !inQuote) { cols.push(cur.trim()); cur = ""; continue; }
      cur += ch;
    }
    cols.push(cur.trim());
    rows.push(cols);
  }
  return rows;
}

function extractDay(dateStr) {
  // e.g. "Sat, July 11" → 11
  const m = dateStr.match(/(\d+)\s*$/);
  return m ? parseInt(m[1]) : null;
}

const csv = fs.readFileSync(CSV_PATH, "utf8");
const rows = parseCSV(csv);

// Group events by day
const byDay = {};
let currentDay = null;

for (const [date, title, location, notes] of rows) {
  if (!title) continue;
  if (date) {
    const d = extractDay(date);
    if (d) currentDay = d;
  }
  if (!currentDay) continue;
  if (!byDay[currentDay]) byDay[currentDay] = [];
  byDay[currentDay].push({ title: title.trim(), location: location.trim(), notes: notes.trim() });
}

// Mark the last day as the main highlight
const days = Object.keys(byDay).map(Number).sort((a, b) => a - b);
const mainDay = days[days.length - 1];

// Generate TypeScript
const eventEntries = days.map((day) => {
  const events = byDay[day].map((ev, i) => {
    const isMain = day === mainDay && i === 0;
    const lines = [
      `      title: ${JSON.stringify(ev.title)}`,
      ev.location ? `      location: ${JSON.stringify(ev.location)}` : null,
      ev.notes ? `      notes: ${JSON.stringify(ev.notes)}` : null,
      isMain ? `      highlight: true` : null,
    ].filter(Boolean);
    return `    {\n${lines.join(",\n")},\n    }`;
  });
  return `  ${day}: [\n${events.join(",\n")},\n  ]`;
});

const output = `// Williams Family Reunion 2026 — Calendar Data
// To update: replace scripts/reunion-calendar.csv and run:
//   node scripts/import-reunion-calendar.js

export interface CalendarEvent {
  title: string;
  location?: string;
  notes?: string;
  highlight?: boolean;
}

export interface CalendarDay {
  date: number;
  events: CalendarEvent[];
}

// July 2026 — events keyed by day of month
export const reunionEvents: Record<number, CalendarEvent[]> = {
${eventEntries.join(",\n")},
};
`;

fs.writeFileSync(OUT_PATH, output, "utf8");
console.log(`✅  Updated lib/reunionCalendarData.ts with ${days.length} event days.`);
console.log(`    Days with events: ${days.join(", ")}`);
