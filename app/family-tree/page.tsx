import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "The Williams family tree — four generations descended from Thomas Lesslie Williams Sr. and Margaret Ann Rambo (Grandma Peggy).",
};

// ---------------------------------------------------------------------------
// Data parsed from the Ancestry GEDCOM file (Robert Rambo Williams.ged)
// Rooted at Thomas Lesslie Williams Sr. (@P2@) and Margaret Ann Rambo (@P3@)
// Their family record is @F6@ — married 14 April 1934
// ---------------------------------------------------------------------------

interface Person {
  id: string;
  name: string;
  nickname?: string;
  sex: "M" | "F";
  birthYear?: string;
  deathYear?: string;
}

interface GreatGrandchild extends Person {
  // Gen-4 — just names and years
}

interface Grandchild extends Person {
  spouseName?: string;
  marriageYear?: string;
  children: GreatGrandchild[];
}

interface Child extends Person {
  orderNum: number;
  spouseName?: string;
  spouseBirthYear?: string;
  marriageYear?: string;
  notes?: string;
  children: Grandchild[];
}

// ---------------------------------------------------------------------------
// Generation 0 — The Roots
// ---------------------------------------------------------------------------

const patriarch: Person = {
  id: "P2",
  name: "Thomas Lesslie Williams Sr.",
  nickname: "Tom",
  sex: "M",
  birthYear: "1907",
  deathYear: "1980",
};

const matriarch: Person = {
  id: "P3",
  name: "Margaret Ann Rambo",
  nickname: "Peggy / Mom",
  sex: "F",
  birthYear: "1911",
  deathYear: "2004",
};

// ---------------------------------------------------------------------------
// Generation 1 — The 8 Children of Thomas & Peggy (birth order)
// ---------------------------------------------------------------------------

const gen1Children: Child[] = [
  // ── 1. Thomas Lesslie Williams Jr. (@P47@, FAMS @F7@) ───────────────────
  {
    id: "P47",
    orderNum: 1,
    name: "Thomas Lesslie Williams Jr.",
    nickname: "Tom Jr.",
    sex: "M",
    birthYear: "1935",
    spouseName: "Elizabeth Small",
    spouseBirthYear: "1938",
    marriageYear: "1960",
    // @F7@ children: @P57@ Tommy, @P58@ Hulan, @P59@ Elizabeth Small Williams
    children: [
      {
        id: "P57",
        name: "Thomas Lesslie Williams III",
        nickname: "Tommy",
        sex: "M",
        birthYear: "1962",
        children: [],
      },
      {
        id: "P58",
        name: "Hulan Small Williams",
        sex: "M",
        birthYear: "1964",
        spouseName: "Donna Carol Preslar",
        marriageYear: "1994",
        // @F54@ children: @P310@ Jeremy, @P311@ Jacob
        children: [
          { id: "P310", name: "Jeremy Thomas Williams", sex: "M", birthYear: "1995" },
          { id: "P311", name: "Jacob Hulan Williams", sex: "M", birthYear: "1998" },
        ],
      },
      {
        id: "P59",
        name: "Elizabeth Small Williams",
        sex: "F",
        birthYear: "1969",
        children: [],
      },
    ],
  },

  // ── 2. Robert Rambo Williams (@P1@, FAMS @F1@) ──────────────────────────
  {
    id: "P1",
    orderNum: 2,
    name: "Robert Rambo Williams",
    nickname: "Rob / Pops / Daddyo",
    sex: "M",
    birthYear: "1936",
    deathYear: "2005",
    spouseName: "Patricia Ann Fisher",
    spouseBirthYear: "1937",
    marriageYear: "1959",
    notes: "Married at St. Ann's Catholic Church, Rock Hill SC. Raised 10 children in Southern California.",
    // @F1@ has 10 children (P5–P14 range) — all listed
    children: [
      {
        id: "P5",
        name: "Margaret Jeanne Williams",
        nickname: "Jeanne",
        sex: "F",
        birthYear: "1960",
        spouseName: "Charles Raymond Flindt Jr.",
        marriageYear: "1978",
        children: [
          { id: "P20", name: "Julie Marie Flindt", sex: "F", birthYear: "1975" },
          { id: "P18", name: "Cheryl Lynn Flindt", sex: "F", birthYear: "1979" },
          { id: "P19", name: "David Michael Flindt", sex: "M", birthYear: "1981" },
        ],
      },
      {
        id: "P6",
        name: "Katherine Redette Williams",
        nickname: "Kathi",
        sex: "F",
        birthYear: "1961",
        spouseName: "Jeffery John Olson",
        marriageYear: "1980",
        children: [
          { id: "P22", name: "Sabrina Redette Olson", sex: "F", birthYear: "1981" },
          { id: "P23", name: "Kristen Redette Olson", sex: "F", birthYear: "1982" },
          { id: "P24", name: "Austin Jeffery Robert Olson", sex: "M", birthYear: "1986" },
          { id: "P25", name: "Racheal Marie Redette Olson", sex: "F", birthYear: "1988" },
          { id: "P26", name: "Mason Garrette Tanner Olson", sex: "M", birthYear: "1991" },
          { id: "P27", name: "J Winston Michael Travis Olson", sex: "M", birthYear: "1993" },
        ],
      },
      {
        id: "P7",
        name: "Robert Rambo Williams Jr.",
        nickname: "Robbie",
        sex: "M",
        birthYear: "1963",
        spouseName: "Miriam Elizabeth Curtis",
        marriageYear: "1986",
        children: [
          { id: "P29", name: "Robert Rambo Williams III", sex: "M", birthYear: "1988" },
          { id: "P30", name: "Erica Nicole Lynn Williams", sex: "F", birthYear: "1992" },
        ],
      },
      {
        id: "P14",
        name: "Lesslie Graham Damian Williams",
        nickname: "Damian",
        sex: "M",
        birthYear: "1965",
        spouseName: "Lisa L. Clutterham",
        children: [
          { id: "P312", name: "Kimberly Christine Marie Williams", sex: "F", birthYear: "1990" },
          { id: "P313", name: "Christopher Robert Damian Williams", sex: "M", birthYear: "1993" },
          { id: "P314", name: "Autumn Lesslie Redette Williams", sex: "F", birthYear: "1995" },
        ],
      },
      {
        id: "P8",
        name: "Michael Wilson Thaddeus Williams",
        nickname: "Michael",
        sex: "M",
        birthYear: "1967",
        spouseName: "Sheila Kaye Jones",
        marriageYear: "1996",
        children: [
          { id: "P32", name: "Georgia Elizabeth Marie Williams", sex: "F", birthYear: "1999" },
        ],
      },
      {
        id: "P9",
        name: "Thomas Allen Christopher Williams",
        nickname: "Tom Buddy",
        sex: "M",
        birthYear: "1969",
        spouseName: "Priscilla Cristina Torres",
        marriageYear: "1997",
        children: [
          { id: "P34", name: "Miranda Janei Elizabeth Williams", sex: "F", birthYear: "1998" },
          { id: "P35", name: "Isabella Marie Addlene Williams", sex: "F", birthYear: "2002" },
          { id: "P36", name: "Ariana Grace Malayna Williams", sex: "F", birthYear: "2003" },
        ],
      },
      {
        id: "P10",
        name: "Patricia Ann Williams",
        nickname: "Tricia",
        sex: "F",
        birthYear: "1971",
        spouseName: "Patrick Sean McDevitt",
        marriageYear: "1994",
        children: [
          { id: "P38", name: "Nicholas Oliver Seamus McDevitt", sex: "M", birthYear: "2000" },
          { id: "P39", name: "Rebecca Ashley Marjan McDevitt", sex: "F", birthYear: "2002" },
          { id: "P40", name: "Sarah Victoria Noel McDevitt", sex: "F", birthYear: "2003" },
          { id: "P41", name: "Alexandra Melissa Danielle McDevitt", sex: "F", birthYear: "2004" },
        ],
      },
      {
        id: "P11",
        name: "Joseph Francis Williams II",
        nickname: "Joe",
        sex: "M",
        birthYear: "1973",
        spouseName: "Heather Leighanne Spoon",
        marriageYear: "1999",
        children: [],
      },
      {
        id: "P12",
        name: "Mary Elizabeth Williams",
        sex: "F",
        birthYear: "1974",
        children: [
          { id: "P43", name: "Jakob Thomas Michael Elvis Williams", sex: "M", birthYear: "1996" },
        ],
      },
      {
        id: "P13",
        name: "Heather Marie Williams",
        nickname: "Heather Darlin'",
        sex: "F",
        birthYear: "1978",
        children: [],
      },
    ],
  },

  // ── 3. Richard Cornell Williams (@P48@, FAMS @F8@) ──────────────────────
  {
    id: "P48",
    orderNum: 3,
    name: "Richard Cornell Williams",
    nickname: "Rick / Rici",
    sex: "M",
    birthYear: "1937",
    spouseName: "Barbara Ruth Wrenn",
    spouseBirthYear: "1937",
    marriageYear: "1957",
    // @F8@ children: @P61@ Marti, @P63@ Gidget, @P62@ Richi, @P64@ Bobbi
    children: [
      {
        id: "P61",
        name: "Margaret Ruth Williams",
        nickname: "Marti",
        sex: "F",
        birthYear: "1958",
        spouseName: "Phillip Hilery Williams",
        marriageYear: "1982",
        // @F277@ child: @P700@ Brian Hilery Williams
        children: [
          { id: "P700", name: "Brian Hilery Williams", sex: "M", birthYear: "1986" },
        ],
      },
      {
        id: "P63",
        name: "Debra Michelle Williams",
        nickname: "Gidget",
        sex: "F",
        birthYear: "1959",
        spouseName: "David Joseph Keogh",
        marriageYear: "1983",
        // @F278@ children: @P705@ Meghan, @P706@ Garrett
        children: [
          { id: "P705", name: "Meghan Leslie Keogh", sex: "F", birthYear: "1986" },
          { id: "P706", name: "Garrett Clark Keogh", sex: "M", birthYear: "1990" },
        ],
      },
      {
        id: "P62",
        name: "Richard Cornell Williams Jr.",
        nickname: "Richi",
        sex: "M",
        birthYear: "1961",
        spouseName: "Roberta Ann McClain",
        marriageYear: "1988",
        // @F119@ child: @P702@ Alexandria Marie Williams
        children: [
          { id: "P702", name: "Alexandria Marie Williams", sex: "F", birthYear: "1996" },
        ],
      },
      {
        id: "P64",
        name: "Barbara Inez Williams",
        nickname: "Bobbi",
        sex: "F",
        birthYear: "1964",
        spouseName: "Brent Tindal McLaurin",
        marriageYear: "1989",
        // @F554@ children: @P709@ Tindal, @P710@ Allison
        children: [
          { id: "P709", name: "Tindal Wrenn McLaurin", sex: "F", birthYear: "1992" },
          { id: "P710", name: "Allison Whaley McLaurin", sex: "F", birthYear: "1993" },
        ],
      },
    ],
  },

  // ── 4. Charles Cornwell Williams (@P49@, FAMS @F9@) ─────────────────────
  {
    id: "P49",
    orderNum: 4,
    name: "Charles Cornwell Williams",
    nickname: "Chici",
    sex: "M",
    birthYear: "1940",
    spouseName: "Linda Raye Driggers",
    spouseBirthYear: "1941",
    marriageYear: "1963",
    // @F9@ children: @P66@ Chad, @P67@ Ann Marie
    children: [
      {
        id: "P66",
        name: "Charles Cornwell Williams Jr.",
        nickname: "Chad",
        sex: "M",
        birthYear: "1965",
        spouseName: "Malynda Joyce McCarter",
        marriageYear: "1990",
        // @F279@ children: @P1159@ Kaitland (twin), @P1160@ Kally (twin)
        children: [
          { id: "P1159", name: "Kaitland Margaret Williams", sex: "F", birthYear: "1994" },
          { id: "P1160", name: "Kally Raye Williams", sex: "F", birthYear: "1994" },
        ],
      },
      {
        id: "P67",
        name: "Ann Marie Williams",
        sex: "F",
        birthYear: "1967",
        spouseName: "Leslie Shaw Blackmon",
        marriageYear: "1997",
        // @F610@ children: @P1163@ Margaret Jane, @P1162@ Brent, @P1164@ Samuel
        children: [
          { id: "P1163", name: "Margaret Jane Blackmon", sex: "F", birthYear: "1999" },
          { id: "P1162", name: "Brent Blackmon", sex: "M", birthYear: "2001" },
          { id: "P1164", name: "Samuel Charles Blackmon", sex: "M", birthYear: "2003" },
        ],
      },
    ],
  },

  // ── 5. Mary Margaret Williams (@P50@, FAMS @F120@) ──────────────────────
  {
    id: "P50",
    orderNum: 5,
    name: "Mary Margaret Williams",
    nickname: "Priss",
    sex: "F",
    birthYear: "1942",
    spouseName: "Jun Joseph Yugawa",
    spouseBirthYear: "1938",
    marriageYear: "1966",
    // @F120@ children: @P69@ Meiji, @P70@ Koji
    // @F1027@ (non-marital) child: @P71@ Sam Hawley (adopted out; b. 1966, found 2003)
    children: [
      {
        id: "P69",
        name: "Meiji Thomas Yugawa",
        sex: "M",
        birthYear: "1968",
        children: [],
      },
      {
        id: "P70",
        name: "Koji Yugawa",
        sex: "M",
        birthYear: "1969",
        spouseName: "Amanda Beth Cohn",
        marriageYear: "1994",
        // @F121@ children: @P715@ Chloe, @P716@ Luke
        children: [
          { id: "P715", name: "Chloe Terry Yugawa", sex: "F", birthYear: "1996" },
          { id: "P716", name: "Luke Akira Yugawa", sex: "M", birthYear: "1998" },
        ],
      },
    ],
  },

  // ── 6. Joseph Frances Williams (@P51@, FAMS @F10@) ──────────────────────
  {
    id: "P51",
    orderNum: 6,
    name: "Joseph Frances Williams",
    nickname: "Joe",
    sex: "M",
    birthYear: "1944",
    deathYear: "1991",
    spouseName: "Linda Roach",
    notes: "Independent telephone contractor. Buried at Neely's Creek ARP Church Cemetery, Lesslie, SC.",
    children: [],
  },

  // ── 7. Joan Marie Williams (@P52@, FAMS @F280@) ─────────────────────────
  {
    id: "P52",
    orderNum: 7,
    name: "Joan Marie Williams",
    nickname: "Joanie",
    sex: "F",
    birthYear: "1946",
    spouseName: "Michael Edward Platt",
    spouseBirthYear: "1949",
    marriageYear: "1974",
    // @F280@ children: @P74@ John Michael, @P75@ Charleston Rambo, @P76@ Chappell Edward
    children: [
      {
        id: "P74",
        name: "John Michael Platt",
        sex: "M",
        birthYear: "1977",
        children: [],
      },
      {
        id: "P75",
        name: "Charleston Rambo Platt",
        sex: "F",
        birthYear: "1979",
        spouseName: "Jason Calvin Horner",
        marriageYear: "2003",
        children: [],
      },
      {
        id: "P76",
        name: "Chappell Edward Platt",
        sex: "M",
        birthYear: "1981",
        children: [],
      },
    ],
  },

  // ── 8. Annie Cornwell Williams (@P53@, FAMS @F281@) ─────────────────────
  {
    id: "P53",
    orderNum: 8,
    name: "Annie Cornwell Williams",
    nickname: "Annie",
    sex: "F",
    birthYear: "1949",
    spouseName: "James David Porter",
    spouseBirthYear: "1949",
    marriageYear: "1971",
    // @F281@ children: @P78@ Christi Ann, @P79@ Susan Rambo
    children: [
      {
        id: "P78",
        name: "Christi Ann Porter",
        sex: "F",
        birthYear: "1975",
        spouseName: "Michael Lloyd Cox",
        marriageYear: "1997",
        // @F600@ children: @P1167@ Courtney, @P1168@ Kendall
        children: [
          { id: "P1167", name: "Courtney Elizabeth Cox", sex: "F", birthYear: "1998" },
          { id: "P1168", name: "Kendall Leslie Cox", sex: "F", birthYear: "2003" },
        ],
      },
      {
        id: "P79",
        name: "Susan Rambo Porter",
        sex: "F",
        birthYear: "1977",
        spouseName: "Chance Wiley Champion",
        marriageYear: "1997",
        // @F599@ children: @P1170@ Shelby Morgan, @P1171@ Walker Ryan
        children: [
          { id: "P1170", name: "Shelby Morgan Champion", sex: "F", birthYear: "1997" },
          { id: "P1171", name: "Walker Ryan Champion", sex: "M", birthYear: "2001" },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lifespan(person: { birthYear?: string; deathYear?: string }): string {
  if (person.birthYear && person.deathYear) {
    return `${person.birthYear}–${person.deathYear}`;
  }
  if (person.birthYear) return `b. ${person.birthYear}`;
  return "";
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Aggregate all Gen-2 grandchildren across the 8 Gen-1 families
const allGrandchildren = gen1Children.flatMap((c) => c.children);
// Aggregate all Gen-3 great-grandchildren
const allGreatGrandchildren = allGrandchildren.flatMap((gc) => gc.children);

// Count Gen-2 grandchildren belonging to Robert's family (Gen-1 #2)
const robert = gen1Children.find((c) => c.id === "P1")!;
const robertGrandchildren = robert.children;

// Total people displayed (Gen 0 = 2, Gen 1 = 8 + spouses, Gen 2 = grandchildren)
const totalGen2 = allGrandchildren.length;
const totalGen3 = allGreatGrandchildren.length;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PersonAvatar({
  initials: inits,
  colorClass = "bg-primary-700",
  size = "md",
}: {
  initials: string;
  colorClass?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sz = size === "lg" ? "w-16 h-16 text-xl" : size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div className={`${sz} rounded-full ${colorClass} text-white flex items-center justify-center font-bold flex-shrink-0`}>
      {inits}
    </div>
  );
}

function GrandchildRow({ gc }: { gc: Grandchild }) {
  return (
    <li className="py-1.5 border-b border-primary-50 last:border-0">
      <div className="flex items-start gap-2">
        <span className="text-primary-400 text-xs mt-0.5">&#9656;</span>
        <div className="flex-1 min-w-0">
          <span className="font-medium text-sm text-gray-800">{gc.name}</span>
          {gc.birthYear && (
            <span className="text-gray-400 text-xs ml-1.5">b. {gc.birthYear}</span>
          )}
          {gc.spouseName && (
            <p className="text-xs text-primary-600 mt-0.5">
              m.{gc.marriageYear ? ` ${gc.marriageYear}` : ""} {gc.spouseName}
            </p>
          )}
          {gc.children.length > 0 && (
            <p className="text-xs text-gray-400 mt-0.5">
              {gc.children.length === 1 ? "1 child" : `${gc.children.length} children`}:{" "}
              {gc.children.map((ggc) => ggc.name.split(" ")[0]).join(", ")}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FamilyTreePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-2">
          Family Tree
        </h1>
        <p className="text-lg text-gray-500 italic">
          The Williams Family &mdash; Descendants of Thomas &amp; Peggy
        </p>
      </div>

      {/* ── Quick Stats ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Generations", value: "4" },
          { label: "Children of Thomas & Peggy", value: "8" },
          { label: "Grandchildren", value: String(totalGen2) },
          { label: "Great-grandchildren", value: String(totalGen3) },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-primary-50 rounded-xl p-4 text-center border border-primary-100"
          >
            <p className="text-3xl font-serif font-bold text-primary-800">{stat.value}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Generation 0 — The Roots ──────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 0 &mdash; The Roots</h2>
        <div className="section-divider" />

        <div className="card p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">

            {/* Thomas Sr. */}
            <div className="flex-1 text-center sm:text-left">
              <PersonAvatar initials="TW" colorClass="bg-primary-800" size="lg" />
              <h3 className="text-xl font-serif font-bold text-primary-900 mt-3">
                {patriarch.name}
              </h3>
              <p className="text-primary-600 italic text-sm mb-1">
                &quot;{patriarch.nickname}&quot;
              </p>
              <p className="text-gray-500 text-sm">{lifespan(patriarch)}</p>
              <p className="text-gray-500 text-xs mt-1">
                b. Harmony, South Carolina
              </p>
              <p className="text-gray-500 text-xs">
                Cotton broker &mdash; Rock Hill, SC
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Buried: Neely&apos;s Creek ARP Church Cemetery, Lesslie, SC
              </p>
            </div>

            {/* Marriage info */}
            <div className="flex sm:flex-col items-center gap-2 self-center">
              <div className="hidden sm:block w-px h-8 bg-primary-200" />
              <div className="text-center">
                <p className="text-primary-400 text-sm font-semibold">m. April 1934</p>
                <p className="text-gray-400 text-xs">at the Rambo Mansion</p>
                <p className="text-gray-400 text-xs">Rock Hill, SC</p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-primary-200" />
            </div>

            {/* Peggy */}
            <div className="flex-1 text-center sm:text-right">
              <div className="flex justify-center sm:justify-end">
                <PersonAvatar initials="MR" colorClass="bg-warm-600" size="lg" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-900 mt-3">
                {matriarch.name}
              </h3>
              <p className="text-primary-600 italic text-sm mb-1">
                &quot;{matriarch.nickname}&quot;
              </p>
              <p className="text-gray-500 text-sm">{lifespan(matriarch)}</p>
              <p className="text-gray-500 text-xs mt-1">
                b. Denver, Colorado
              </p>
              <p className="text-gray-500 text-xs">
                Winthrop College graduate
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Buried: Neely&apos;s Creek ARP Church Cemetery, Lesslie, SC
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-100 text-center">
            <p className="text-gray-600 text-sm">
              The family resided at the Rambo Mansion on Rambo Road, Rock Hill, South Carolina.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Together they had <strong>8 children</strong> and were survived by
              25 grandchildren and one great-grandchild at the time of Thomas Sr.&apos;s death in 1980.
            </p>
          </div>
        </div>
      </section>

      {/* ── Generation 1 — The 8 Children ───────────────────────────────── */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 1 &mdash; Children of Thomas &amp; Peggy</h2>
        <div className="section-divider" />

        <div className="grid gap-6 md:grid-cols-2">
          {gen1Children.map((child) => (
            <div key={child.id} className="card p-6 flex flex-col gap-4">

              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  #{child.orderNum}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-primary-900 text-lg leading-tight">
                    {child.name}
                  </h3>
                  {child.nickname && (
                    <p className="text-primary-600 italic text-sm">
                      &quot;{child.nickname}&quot;
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-0.5">{lifespan(child)}</p>
                </div>
              </div>

              {/* Spouse */}
              {child.spouseName && (
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-warm-50 rounded-lg px-3 py-2">
                  <span className="text-warm-600 font-medium shrink-0">
                    m.{child.marriageYear ? ` ${child.marriageYear}` : ""}
                  </span>
                  <span className="text-gray-400">&mdash;</span>
                  <span>
                    {child.spouseName}
                    {child.spouseBirthYear && (
                      <span className="text-gray-400 text-xs ml-1">
                        (b. {child.spouseBirthYear})
                      </span>
                    )}
                  </span>
                </div>
              )}

              {/* Children summary */}
              {child.children.length > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-500">
                    {child.children.length === 1 ? "1 Child" : `${child.children.length} Children`}
                  </span>
                  {child.id === "P1" && (
                    <span className="text-xs text-gray-400">(Robert&apos;s 10 — see below)</span>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 text-xs italic">No children recorded in GEDCOM</p>
              )}

              {/* Notes */}
              {child.notes && (
                <p className="text-gray-400 text-xs italic border-t border-gray-100 pt-2">
                  {child.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Generation 2 — Grandchildren (by family branch) ─────────────── */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 2 &mdash; Grandchildren of Thomas &amp; Peggy</h2>
        <div className="section-divider" />

        <div className="space-y-8">
          {gen1Children.filter((c) => c.children.length > 0).map((parent) => (
            <div key={parent.id}>
              {/* Branch header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {initials(parent.name)}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-primary-800">
                    {parent.nickname ?? parent.name}&apos;s Family
                  </h3>
                  <p className="text-xs text-gray-400">
                    {parent.children.length === 1
                      ? "1 child"
                      : `${parent.children.length} children`}
                    {parent.spouseName ? ` with ${parent.spouseName}` : ""}
                  </p>
                </div>
              </div>

              {/* Children cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ml-11">
                {parent.children.map((gc) => (
                  <div key={gc.id} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                    <div className="flex items-center gap-2 mb-2">
                      <PersonAvatar
                        initials={initials(gc.name)}
                        colorClass={gc.sex === "M" ? "bg-primary-500" : "bg-warm-500"}
                        size="sm"
                      />
                      <div className="min-w-0">
                        <p className="font-serif font-semibold text-primary-800 text-sm leading-tight truncate">
                          {gc.name}
                        </p>
                        {gc.nickname && (
                          <p className="text-xs text-primary-500 italic truncate">&quot;{gc.nickname}&quot;</p>
                        )}
                        <p className="text-xs text-gray-400">{lifespan(gc)}</p>
                      </div>
                    </div>

                    {gc.spouseName && (
                      <p className="text-xs text-gray-600 bg-white rounded px-2 py-1 mb-2">
                        m.{gc.marriageYear ? ` ${gc.marriageYear}` : ""} {gc.spouseName}
                      </p>
                    )}

                    {gc.children.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-1">
                          {gc.children.length === 1 ? "1 child" : `${gc.children.length} children`}
                        </p>
                        <ul className="space-y-0.5">
                          {gc.children.map((ggc) => (
                            <li key={ggc.id} className="text-xs text-gray-600 flex items-center gap-1">
                              <span className="text-primary-300">&#9656;</span>
                              {ggc.name.split(" ")[0]}
                              {ggc.birthYear && (
                                <span className="text-gray-400 ml-auto">b. {ggc.birthYear}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {gc.children.length === 0 && (
                      <p className="text-xs text-gray-400 italic">No children recorded</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Generation 3 — Great-grandchildren summary ───────────────────── */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 3 &mdash; Great-grandchildren</h2>
        <div className="section-divider" />

        <div className="card p-6">
          <p className="text-gray-600 mb-6 text-center">
            {totalGen3} great-grandchildren recorded across{" "}
            {allGrandchildren.filter((gc) => gc.children.length > 0).length} families.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allGrandchildren
              .filter((gc) => gc.children.length > 0)
              .map((gc) => (
                <div key={gc.id} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                  <h4 className="font-serif font-semibold text-primary-800 text-sm mb-3 border-b border-primary-200 pb-2">
                    {gc.name.split(" ")[0]}&apos;s Children
                    <span className="ml-1 text-primary-500 text-xs font-normal">
                      ({gc.children.length})
                    </span>
                  </h4>
                  <ul className="space-y-1.5">
                    {gc.children.map((ggc) => (
                      <li key={ggc.id} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-primary-400 text-xs">&#9656;</span>
                        <span>{ggc.name}</span>
                        {ggc.birthYear && (
                          <span className="text-gray-400 text-xs ml-auto">b. {ggc.birthYear}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── Robert's Family Detail (existing detail) ─────────────────────── */}
      <section className="mb-14">
        <h2 className="section-heading">Robert&apos;s Branch — The 10 Children in Detail</h2>
        <div className="section-divider" />

        <div className="mb-4 card p-4 flex items-center gap-4">
          <PersonAvatar initials="RW" colorClass="bg-primary-800" size="lg" />
          <div>
            <h3 className="font-serif font-bold text-primary-900 text-lg">Robert Rambo Williams</h3>
            <p className="text-primary-600 italic text-sm">&quot;Rob / Pops / Daddyo&quot;</p>
            <p className="text-gray-500 text-sm">1936–2005 &mdash; m. 1959 Patricia Ann Fisher (b. 1937)</p>
            <p className="text-gray-400 text-xs">Married at St. Ann&apos;s Catholic Church, Rock Hill SC &mdash; Raised 10 children in Southern California</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {robertGrandchildren.map((child, idx) => (
            <div key={child.id} className="card p-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  #{idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-primary-900 text-lg leading-tight">
                    {child.name}
                  </h3>
                  {child.nickname && (
                    <p className="text-primary-600 italic text-sm">&quot;{child.nickname}&quot;</p>
                  )}
                  <p className="text-gray-500 text-xs mt-0.5">{lifespan(child)}</p>
                </div>
              </div>

              {child.spouseName && (
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-warm-50 rounded-lg px-3 py-2">
                  <span className="text-warm-600 font-medium shrink-0">
                    m.{child.marriageYear ? ` ${child.marriageYear}` : ""}
                  </span>
                  <span className="text-gray-400">&mdash;</span>
                  <span>{child.spouseName}</span>
                </div>
              )}

              {child.children.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-2">
                    {child.children.length === 1 ? "1 Child" : `${child.children.length} Children`}
                  </p>
                  <ul className="space-y-1.5">
                    {child.children.map((ggc) => (
                      <li key={ggc.id} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-primary-400 text-xs">&#9656;</span>
                        <span className="font-medium">{ggc.name}</span>
                        {ggc.birthYear && (
                          <span className="text-gray-400 text-xs">({ggc.birthYear})</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {child.children.length === 0 && (
                <p className="text-gray-400 text-xs italic">No children recorded</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="mt-12 text-center text-gray-400 text-xs space-y-1">
        <p>
          Data sourced from the Ancestry GEDCOM file &quot;Robert Rambo Williams.ged&quot; — compiled by Robert R. Williams.
        </p>
        <p>
          Over 3,000 individuals recorded across multiple generations and branches.
        </p>
        <p>
          Thomas &amp; Peggy&apos;s marriage announcement (April 1934) is preserved in the Rock Hill Herald archives.
          The wedding was held at the Rambo family plantation home (now known as the Rambo Mansion).
        </p>
      </div>
    </div>
  );
}
