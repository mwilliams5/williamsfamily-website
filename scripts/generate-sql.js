// scripts/generate-sql.js
// Run: node scripts/generate-sql.js > scripts/seed.sql
// Then paste scripts/seed.sql into Supabase SQL editor

const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

// ── Family tree metadata: gen, parentPeck, spousePeck, nick ─────────────────
// Gen 0 = founders (Thomas & Peggy)
// Gen 1 = their 8 children
// Gen 2 = grandchildren
// Gen 3 = great-grandchildren
// Gen 4 = great-great-grandchildren
// null gen = married into family (no blood line)
const META = {
  1:   { gen:0, nick:'Tom',     spousePeck:2 },
  2:   { gen:0, nick:'Peggy',   spousePeck:1 },
  3:   { gen:1, nick:'Pookie',  parentPeck:1 },
  4:   { gen:1, nick:'Robbie',  parentPeck:1, spousePeck:13 },
  5:   { gen:1, nick:'Rici',    parentPeck:1, spousePeck:11 },
  6:   { gen:1, nick:'Chici',   parentPeck:1, spousePeck:20 },
  7:   { gen:1, nick:'Priss',   parentPeck:1, spousePeck:27 },
  8:   { gen:1, nick:'Joe Joe', parentPeck:1 },
  9:   { gen:1, nick:'Joanie',  parentPeck:1, spousePeck:38 },
  10:  { gen:1,                  parentPeck:1 },
  11:  { spousePeck:5 },
  12:  { gen:2, nick:'Marti',   parentPeck:5,  spousePeck:92 },
  13:  { spousePeck:4 },
  14:  { gen:2, nick:'Gidget',  parentPeck:5,  spousePeck:115 },
  15:  { gen:2, nick:'Jeanne',  parentPeck:4,  spousePeck:43 },
  16:  { spousePeck:3 },
  17:  { gen:2, nick:'Richi',   parentPeck:5 },
  18:  { gen:2, nick:'Kathi',   parentPeck:4 },
  19:  { gen:2, nick:'Tommy',   parentPeck:3 },
  20:  { spousePeck:6 },
  21:  { gen:2, nick:'Bob',     parentPeck:4,  spousePeck:53 },
  22:  { gen:2, nick:'Buddy',   parentPeck:3,  spousePeck:69 },
  23:  { gen:2, nick:'Bobbi',   parentPeck:5,  spousePeck:142 },
  24:  { gen:2, nick:'Damian',  parentPeck:4,  spousePeck:164 },
  25:  { gen:2, nick:'Chad',    parentPeck:6,  spousePeck:58 },
  26:  { gen:2,                  parentPeck:7 },
  27:  { spousePeck:7 },
  28:  { gen:2, nick:'Mike',    parentPeck:4,  spousePeck:79 },
  29:  { gen:2,                  parentPeck:6,  spousePeck:82 },
  30:  { gen:2,                  parentPeck:7 },
  31:  { gen:2,                  parentPeck:4,  spousePeck:83 },
  32:  { gen:2,                  parentPeck:3,  spousePeck:108 },
  33:  { gen:2,                  parentPeck:7,  spousePeck:72 },
  34:  { spousePeck:10 },
  35:  { gen:2, nick:'Tricia',  parentPeck:4,  spousePeck:70 },
  36:  { gen:2, nick:'Joe',     parentPeck:4,  spousePeck:116 },
  37:  { gen:2,                  parentPeck:4,  spousePeck:125 },
  38:  { spousePeck:9 },
  39:  { gen:2,                  parentPeck:10, spousePeck:81 },
  40:  { gen:2,                  parentPeck:9,  spousePeck:150 },
  41:  { gen:2,                  parentPeck:10, spousePeck:84 },
  42:  { gen:2,                  parentPeck:4 },
  43:  { spousePeck:15 },
  44:  { gen:3,                  parentPeck:15, spousePeck:106 },
  45:  { gen:2,                  parentPeck:9,  spousePeck:140 },
  46:  { gen:3,                  parentPeck:15, spousePeck:118 },
  47:  { gen:3,                  parentPeck:18, spousePeck:109 },
  48:  { gen:3,                  parentPeck:15, spousePeck:114 },
  49:  { gen:2,                  parentPeck:9,  spousePeck:112 },
  50:  { gen:3,                  parentPeck:18 },
  51:  { gen:3,                  parentPeck:12, spousePeck:124 },
  52:  { gen:3,                  parentPeck:18 },
  53:  { spousePeck:21 },
  54:  { gen:3,                  parentPeck:14, spousePeck:138 },
  55:  { gen:3,                  parentPeck:21, spousePeck:141 },
  56:  { gen:3,                  parentPeck:18, spousePeck:119 },
  57:  { gen:3,                  parentPeck:14 },
  58:  { spousePeck:25 },
  59:  { gen:3,                  parentPeck:24 },
  60:  { gen:3, nick:'Tanner',  parentPeck:18 },
  61:  { gen:3,                  parentPeck:21 },
  62:  { gen:3,                  parentPeck:23, spousePeck:143 },
  63:  { gen:3,                  parentPeck:24 },
  64:  { gen:3,                  parentPeck:23, spousePeck:158 },
  65:  { gen:3, nick:'Winston', parentPeck:18 },
  66:  { gen:3, nick:'Kaity',   parentPeck:25 },
  67:  { gen:3,                  parentPeck:25 },
  68:  { gen:3,                  parentPeck:26 },
  69:  { spousePeck:22 },
  70:  { spousePeck:35 },
  71:  { gen:3,                  parentPeck:30, spousePeck:137 },
  72:  { spousePeck:33 },
  73:  { gen:3,                  parentPeck:24, spousePeck:154 },
  74:  { gen:3,                  parentPeck:22 },
  75:  { gen:3,                  parentPeck:37, spousePeck:157 },
  76:  { gen:3,                  parentPeck:17, spousePeck:152 },
  77:  { gen:3,                  parentPeck:26 },
  78:  { gen:3,                  parentPeck:33, spousePeck:147 },
  79:  { spousePeck:28 },
  80:  { gen:3,                  parentPeck:14 },
  81:  { spousePeck:39 },
  82:  { spousePeck:29 },
  83:  { spousePeck:31 },
  84:  { spousePeck:41 },
  85:  { gen:3,                  parentPeck:41 },
  86:  { gen:3,                  parentPeck:39, spousePeck:153 },
  87:  { gen:3,                  parentPeck:31 },
  88:  { gen:3,                  parentPeck:22 },
  89:  { gen:3,                  parentPeck:30 },
  90:  { gen:3,                  parentPeck:33 },
  91:  { gen:3,                  parentPeck:28 },
  92:  { spousePeck:12 },
  93:  { gen:3,                  parentPeck:29 },
  94:  { gen:4,                  parentPeck:47 },
  95:  { gen:3,                  parentPeck:35 },
  96:  { gen:3,                  parentPeck:29 },
  97:  { gen:3,                  parentPeck:41 },
  98:  { gen:3,                  parentPeck:35 },
  99:  { gen:3,                  parentPeck:31 },
  100: { gen:3,                  parentPeck:29 },
  101: { gen:3,                  parentPeck:39 },
  102: { gen:3,                  parentPeck:12 },
  103: { gen:3,                  parentPeck:35 },
  104: { gen:3,                  parentPeck:31 },
  105: { gen:3,                  parentPeck:35 },
  106: { spousePeck:44 },
  107: { gen:3,                  parentPeck:39 },
  108: { spousePeck:32 },
  109: { spousePeck:47 },
  110: { gen:3,                  parentPeck:35 },
  111: { gen:4,                  parentPeck:44 },
  112: { spousePeck:49 },
  113: { gen:4,                  parentPeck:47 },
  114: { spousePeck:48 },
  115: { spousePeck:14 },
  116: { spousePeck:36 },
  117: { gen:3,                  parentPeck:49 },
  118: { spousePeck:46 },
  119: { spousePeck:56 },
  120: { gen:4,                  parentPeck:44 },
  121: { gen:3,                  parentPeck:36 },
  122: { gen:3,                  parentPeck:36 },
  123: { gen:4,                  parentPeck:48 },
  124: { spousePeck:51 },
  125: { spousePeck:37 },
  126: { gen:3,                  parentPeck:41 },
  127: { gen:4,                  parentPeck:46 },
  128: { gen:3,                  parentPeck:49 },
  129: { gen:4,                  parentPeck:48 },
  130: { gen:3,                  parentPeck:37 },
  131: { gen:3,                  parentPeck:36 },
  132: { gen:4,                  parentPeck:56 },
  133: { gen:4,                  parentPeck:44 },
  134: { gen:3,                  parentPeck:49 },
  135: { gen:3,                  parentPeck:37 },
  136: { gen:4,                  parentPeck:46 },
  137: { spousePeck:71 },
  138: { spousePeck:54 },
  139: { gen:4,                  parentPeck:56 },
  140: { spousePeck:45 },
  141: { spousePeck:55 },
  142: { spousePeck:23 },
  143: { spousePeck:62 },
  144: { gen:4,                  parentPeck:51 },
  145: { gen:3,                  parentPeck:45 },
  146: { gen:3,                  parentPeck:45 },
  147: { spousePeck:78 },
  148: { gen:4,                  parentPeck:61 },
  149: { gen:4,                  parentPeck:64 },
  150: { spousePeck:40 },
  151: { gen:4,                  parentPeck:51 },
  152: { spousePeck:76 },
  153: { spousePeck:86 },
  154: { spousePeck:73 },
  155: { gen:4,                  parentPeck:51 },
  156: { gen:4, nick:'Margo',   parentPeck:76 },
  157: { spousePeck:75 },
  158: { spousePeck:64 },
  159: { gen:4,                  parentPeck:62 },
  160: { gen:4, nick:'Ellie',   parentPeck:86 },
  161: { gen:3,                  parentPeck:40 },
  162: { gen:4,                  parentPeck:73 },
  163: { gen:4,                  parentPeck:75 },
  164: { nick:'Mia',            spousePeck:24 },
};

// Excel serial → ISO date string (accounts for Excel's 1900 leap year bug)
function excelDate(serial) {
  if (!serial || typeof serial !== 'number') return null;
  const d = new Date(Date.UTC(1899, 11, 30 + serial));
  return d.toISOString().split('T')[0];
}

// Extract nickname from "Full Name (Nick)" pattern
function extractNick(name) {
  const m = name && name.match(/\(([^)]+)\)\s*$/);
  return m ? m[1] : null;
}

// SQL-escape a string value
function sq(val) {
  if (val === null || val === undefined) return 'NULL';
  return `'${String(val).replace(/'/g, "''")}'`;
}

function sqlVal(val) {
  if (val === null || val === undefined) return 'NULL';
  return String(val);
}

// ── Main ────────────────────────────────────────────────────────────────────
const xlsxPath = 'C:/Users/mwill/.claude/projects/pecking order.xlsx';
const wb = XLSX.readFile(xlsxPath);
const ws = wb.Sheets['2026 Primary'];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

// columns: [Birth Name, Birth date, Marriage Date, Divorce, Date of Death, Peck Date, Peck Order, Parent(s), Current Last Name, Step-Children, Spouse]
const [headers, ...dataRows] = rows;

const records = [];
for (const row of dataRows) {
  const peck = row[6];
  if (!peck || typeof peck !== 'number') continue;

  const meta = META[peck] || {};
  const rawName = row[0] || '';
  const nickFromName = extractNick(rawName);

  records.push({
    peck,
    name:              rawName,
    nickname:          meta.nick || nickFromName || null,
    gen:               meta.gen !== undefined ? meta.gen : null,
    birth_date:        excelDate(row[1]),
    marriage_date:     excelDate(row[2]),
    divorced:          row[3] === 'Y',
    death_date:        excelDate(row[4]),
    peck_date:         excelDate(row[5]),
    parents:           row[7] || null,
    current_last_name: row[8] || null,
    step_notes:        row[9] || null,
    spouse_name:       row[10] || null,
    parent_peck:       meta.parentPeck || null,
    spouse_peck:       meta.spousePeck || null,
  });
}

// ── Output SQL ───────────────────────────────────────────────────────────────
const lines = [];

lines.push(`-- Williams Family Peck Order — generated ${new Date().toISOString()}`);
lines.push(`-- Run this in Supabase SQL editor (Project → SQL Editor → New query)`);
lines.push(``);
lines.push(`DROP TABLE IF EXISTS family_members;`);
lines.push(``);
lines.push(`CREATE TABLE family_members (`);
lines.push(`  peck              integer PRIMARY KEY,`);
lines.push(`  name              text NOT NULL,`);
lines.push(`  nickname          text,`);
lines.push(`  gen               smallint,`);
lines.push(`  birth_date        date,`);
lines.push(`  marriage_date     date,`);
lines.push(`  divorced          boolean NOT NULL DEFAULT false,`);
lines.push(`  death_date        date,`);
lines.push(`  peck_date         date,`);
lines.push(`  parents           text,`);
lines.push(`  current_last_name text,`);
lines.push(`  step_notes        text,`);
lines.push(`  spouse_name       text,`);
lines.push(`  parent_peck       integer,`);
lines.push(`  spouse_peck       integer`);
lines.push(`);`);
lines.push(``);
lines.push(`-- Enable Row Level Security (public read)`);
lines.push(`ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;`);
lines.push(`CREATE POLICY "public read" ON family_members FOR SELECT USING (true);`);
lines.push(``);
lines.push(`INSERT INTO family_members`);
lines.push(`  (peck, name, nickname, gen, birth_date, marriage_date, divorced, death_date, peck_date, parents, current_last_name, step_notes, spouse_name, parent_peck, spouse_peck)`);
lines.push(`VALUES`);

const valueRows = records.map(r =>
  `  (${r.peck}, ${sq(r.name)}, ${sq(r.nickname)}, ${sqlVal(r.gen)}, ${sq(r.birth_date)}, ${sq(r.marriage_date)}, ${r.divorced}, ${sq(r.death_date)}, ${sq(r.peck_date)}, ${sq(r.parents)}, ${sq(r.current_last_name)}, ${sq(r.step_notes)}, ${sq(r.spouse_name)}, ${sqlVal(r.parent_peck)}, ${sqlVal(r.spouse_peck)})`
);

lines.push(valueRows.join(',\n') + ';');
lines.push(``);
lines.push(`-- Add self-referencing foreign keys after all rows are inserted`);
lines.push(`ALTER TABLE family_members`);
lines.push(`  ADD CONSTRAINT fk_parent FOREIGN KEY (parent_peck) REFERENCES family_members(peck),`);
lines.push(`  ADD CONSTRAINT fk_spouse FOREIGN KEY (spouse_peck) REFERENCES family_members(peck);`);
lines.push(``);
lines.push(`SELECT count(*) AS total_members FROM family_members;`);

const sql = lines.join('\n');
process.stdout.write(sql);
process.stderr.write(`\nGenerated SQL for ${records.length} records.\n`);
