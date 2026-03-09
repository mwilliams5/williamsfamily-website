import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "The Williams family tree — four generations from Robert Rambo Williams and Patricia Ann Fisher to their grandchildren and great-grandchildren.",
};

// ---------------------------------------------------------------------------
// Data parsed from the Ancestry GEDCOM file (Robert Rambo Williams.ged)
// ---------------------------------------------------------------------------

interface Person {
  id: string;
  name: string;
  nickname?: string;
  sex: "M" | "F";
  birthYear?: string;
  deathYear?: string;
}

interface Child extends Person {
  orderNum: number;
  spouseName?: string;
  spouseBirthYear?: string;
  marriageYear?: string;
  children: Grandchild[];
}

interface Grandchild extends Person {
  // great-grandchildren omitted for clarity
}

// ---------------------------------------------------------------------------
// Generation 1 — Robert Rambo Williams & Patricia Ann Fisher
// ---------------------------------------------------------------------------

const patriarch: Person = {
  id: "P1",
  name: "Robert Rambo Williams",
  nickname: "Rob / Pops / Daddyo",
  sex: "M",
  birthYear: "1936",
  deathYear: "2005",
};

const matriarch: Person = {
  id: "P4",
  name: "Patricia Ann Fisher",
  nickname: "Tricia",
  sex: "F",
  birthYear: "1937",
};

// ---------------------------------------------------------------------------
// Generation 2 — The 10 Children (in birth order per GEDCOM)
// ---------------------------------------------------------------------------

const children: Child[] = [
  {
    id: "P5",
    orderNum: 1,
    name: "Margaret Jeanne Williams",
    nickname: "Jeanne",
    sex: "F",
    birthYear: "1960",
    spouseName: "Charles Raymond Flindt Jr.",
    spouseBirthYear: "1950",
    marriageYear: "1978",
    children: [
      { id: "P20", name: "Julie Marie Flindt", sex: "F", birthYear: "1975" },
      { id: "P18", name: "Cheryl Lynn Flindt", sex: "F", birthYear: "1979" },
      { id: "P19", name: "David Michael Flindt", sex: "M", birthYear: "1981" },
    ],
  },
  {
    id: "P6",
    orderNum: 2,
    name: "Katherine Redette Williams",
    nickname: "Kathi",
    sex: "F",
    birthYear: "1961",
    spouseName: "Jeffery John Olson",
    spouseBirthYear: "1961",
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
    orderNum: 3,
    name: "Robert Rambo Williams Jr.",
    nickname: "Robbie",
    sex: "M",
    birthYear: "1963",
    spouseName: "Miriam Elizabeth Curtis",
    spouseBirthYear: "1955",
    marriageYear: "1986",
    children: [
      { id: "P29", name: "Robert Rambo Williams III", sex: "M", birthYear: "1988" },
      { id: "P30", name: "Erica Nicole Lynn Williams", sex: "F", birthYear: "1992" },
    ],
  },
  {
    id: "P14",
    orderNum: 4,
    name: "Lesslie Graham Damian Williams",
    nickname: "Damian",
    sex: "M",
    birthYear: "1965",
    spouseName: "Lisa L. Clutterham",
    spouseBirthYear: "1966",
    children: [
      { id: "P3070", name: "Kimberly Christinemar Williams", sex: "F", birthYear: "1990" },
      { id: "P3069", name: "Christopher Robertdamian Williams", sex: "M", birthYear: "1993" },
      { id: "P3068", name: "Autumn Lesslieredet Williams", sex: "F", birthYear: "1995" },
    ],
  },
  {
    id: "P8",
    orderNum: 5,
    name: "Michael Wilson Thaddeus Williams",
    nickname: "Michael",
    sex: "M",
    birthYear: "1967",
    spouseName: "Sheila Kaye Jones",
    spouseBirthYear: "1968",
    marriageYear: "1996",
    children: [
      { id: "P32", name: "Georgia Elizabeth Marie Williams", sex: "F", birthYear: "1999" },
    ],
  },
  {
    id: "P9",
    orderNum: 6,
    name: "Thomas Allen Christopher Williams",
    nickname: "Tom Buddy",
    sex: "M",
    birthYear: "1969",
    spouseName: "Priscilla Cristina Torres",
    spouseBirthYear: "1968",
    marriageYear: "1997",
    children: [
      { id: "P34", name: "Miranda Janei Elizabeth Williams", sex: "F", birthYear: "1998" },
      { id: "P35", name: "Isabella Marie Addlene Williams", sex: "F", birthYear: "2002" },
      { id: "P36", name: "Ariana Grace Malayna Williams", sex: "F", birthYear: "2003" },
    ],
  },
  {
    id: "P10",
    orderNum: 7,
    name: "Patricia Ann Williams",
    nickname: "Tricia",
    sex: "F",
    birthYear: "1971",
    spouseName: "Patrick Sean McDevitt",
    spouseBirthYear: "1970",
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
    orderNum: 8,
    name: "Joseph Francis Williams II",
    nickname: "Joe",
    sex: "M",
    birthYear: "1973",
    spouseName: "Heather Leighanne Spoon",
    spouseBirthYear: "1976",
    marriageYear: "1999",
    children: [],
  },
  {
    id: "P12",
    orderNum: 9,
    name: "Mary Elizabeth Williams",
    sex: "F",
    birthYear: "1974",
    children: [
      { id: "P43", name: "Jakob Thomas Michael Elvis Williams", sex: "M", birthYear: "1996" },
    ],
  },
  {
    id: "P13",
    orderNum: 10,
    name: "Heather Marie Williams",
    nickname: "Heather Darlin'",
    sex: "F",
    birthYear: "1978",
    children: [],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function lifespan(person: Person): string {
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

// ---------------------------------------------------------------------------
// Components (inline, server-safe)
// ---------------------------------------------------------------------------

function PersonChip({ person }: { person: Person }) {
  const span = lifespan(person);
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
        {initials(person.name)}
      </div>
      <div>
        <p className="font-serif font-bold text-gray-900 leading-tight">{person.name}</p>
        {person.nickname && (
          <p className="text-xs text-primary-600 italic">&quot;{person.nickname}&quot;</p>
        )}
        {span && <p className="text-xs text-gray-500">{span}</p>}
      </div>
    </div>
  );
}

function GrandchildRow({ gc }: { gc: Grandchild }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-700">
      <span className="text-primary-400 text-xs">&#9656;</span>
      <span className="font-medium">{gc.name}</span>
      {gc.birthYear && (
        <span className="text-gray-400 text-xs">
          ({gc.birthYear}{gc.deathYear ? `–${gc.deathYear}` : ""})
        </span>
      )}
    </li>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FamilyTreePage() {
  const totalGrandchildren = children.reduce((sum, c) => sum + c.children.length, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-2">
          Family Tree
        </h1>
        <p className="text-lg text-gray-500 italic">
          The Williams Family &mdash; Four Generations
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Generations", value: "4" },
          { label: "Children", value: "10" },
          { label: "Grandchildren", value: String(totalGrandchildren) },
          { label: "Family Founded", value: "1959" },
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

      {/* Generation 1 */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 1 &mdash; The Founders</h2>
        <div className="section-divider"></div>

        <div className="card p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
            {/* Robert */}
            <div className="flex-1 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-primary-800 text-white flex items-center justify-center text-xl font-bold mx-auto sm:mx-0 mb-3">
                RW
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-900">
                {patriarch.name}
              </h3>
              <p className="text-primary-600 italic text-sm mb-1">
                &quot;{patriarch.nickname}&quot;
              </p>
              <p className="text-gray-500 text-sm">{lifespan(patriarch)}</p>
              <p className="text-gray-500 text-xs mt-1">
                b. Rock Hill, South Carolina
              </p>
              <p className="text-gray-500 text-xs">
                d. Santa Ana, California
              </p>
            </div>

            {/* Divider */}
            <div className="flex sm:flex-col items-center gap-2">
              <div className="hidden sm:block w-px h-8 bg-primary-200" />
              <span className="text-primary-400 text-sm font-semibold">
                m. 1959
              </span>
              <div className="hidden sm:block w-px h-8 bg-primary-200" />
            </div>

            {/* Patricia */}
            <div className="flex-1 text-center sm:text-right">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white flex items-center justify-center text-xl font-bold mx-auto sm:ml-auto mb-3">
                PF
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-900">
                {matriarch.name}
              </h3>
              <p className="text-primary-600 italic text-sm mb-1">
                &quot;{matriarch.nickname}&quot;
              </p>
              <p className="text-gray-500 text-sm">{lifespan(matriarch)}</p>
              <p className="text-gray-500 text-xs mt-1">
                b. Salisbury, North Carolina
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-100 text-center">
            <p className="text-gray-600 text-sm">
              Married June 6, 1959 at St. Ann&apos;s Catholic Church &mdash; Rock Hill, South Carolina
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Together they raised 10 children in Southern California
            </p>
          </div>
        </div>
      </section>

      {/* Generation 2 */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 2 &mdash; The 10 Children</h2>
        <div className="section-divider"></div>

        <div className="grid gap-6 md:grid-cols-2">
          {children.map((child) => (
            <div key={child.id} className="card p-6 flex flex-col gap-4">
              {/* Child header */}
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
                  <span className="text-warm-600 font-medium">m.{child.marriageYear ? ` ${child.marriageYear}` : ""}</span>
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

              {/* Grandchildren */}
              {child.children.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-2">
                    {child.children.length === 1 ? "1 Child" : `${child.children.length} Children`}
                  </p>
                  <ul className="space-y-1.5">
                    {child.children.map((gc) => (
                      <GrandchildRow key={gc.id} gc={gc} />
                    ))}
                  </ul>
                </div>
              )}

              {child.children.length === 0 && !child.spouseName && (
                <p className="text-gray-400 text-xs italic">No further records</p>
              )}
              {child.children.length === 0 && child.spouseName && (
                <p className="text-gray-400 text-xs italic">No children recorded</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Generation 3 summary */}
      <section className="mb-14">
        <h2 className="section-heading">Generation 3 &mdash; The Grandchildren</h2>
        <div className="section-divider"></div>

        <div className="card p-6">
          <p className="text-gray-600 mb-6 text-center">
            {totalGrandchildren} grandchildren recorded across{" "}
            {children.filter((c) => c.children.length > 0).length} families.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {children
              .filter((c) => c.children.length > 0)
              .map((parent) => (
                <div key={parent.id} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                  <h4 className="font-serif font-semibold text-primary-800 text-sm mb-3 border-b border-primary-200 pb-2">
                    {parent.nickname ?? parent.name.split(" ").slice(0, 1).join("")}&apos;s Family
                    <span className="ml-1 text-primary-500 text-xs font-normal">
                      ({parent.children.length})
                    </span>
                  </h4>
                  <ul className="space-y-1.5">
                    {parent.children.map((gc) => {
                      const firstName = gc.name.split(" ")[0];
                      return (
                        <li key={gc.id} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="text-primary-400 text-xs">&#9656;</span>
                          <span>{firstName}</span>
                          {gc.birthYear && (
                            <span className="text-gray-400 text-xs ml-auto">
                              b. {gc.birthYear}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Generation 0 — Robert's parents context */}
      <section className="mb-10">
        <h2 className="section-heading">Roots &mdash; Robert&apos;s Parents</h2>
        <div className="section-divider"></div>

        <div className="card p-6 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          <div className="flex-1">
            <PersonChip
              person={{
                id: "P2",
                name: "Thomas Lesslie Williams Sr.",
                nickname: "Tom",
                sex: "M",
                birthYear: "1907",
                deathYear: "1980",
              }}
            />
            <p className="text-gray-500 text-xs mt-2 ml-13 pl-[3.25rem]">
              b. Harmony, South Carolina &mdash; Cotton broker, Rock Hill SC
            </p>
          </div>
          <div className="text-center text-sm text-primary-400 font-semibold self-center">
            m. 1934
          </div>
          <div className="flex-1">
            <PersonChip
              person={{
                id: "P3",
                name: "Margaret Ann Rambo",
                nickname: "Peggy / Mom",
                sex: "F",
                birthYear: "1911",
                deathYear: "2004",
              }}
            />
            <p className="text-gray-500 text-xs mt-2 pl-[3.25rem]">
              b. Denver, Colorado &mdash; Winthrop College graduate
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">
          Thomas and Margaret had 8 children including Robert (b. 1936) &mdash; their second child.
          The family lived at the Rambo Mansion on Rambo Road, Rock Hill, South Carolina.
        </p>
      </section>

      {/* Footer note */}
      <div className="mt-12 text-center text-gray-400 text-xs">
        <p>
          Data sourced from the Ancestry GEDCOM file &quot;Robert Rambo Williams.ged&quot; &mdash; compiled by Robert R. Williams.
        </p>
        <p className="mt-1">
          Over 3,000 individuals recorded across multiple generations and branches.
        </p>
      </div>
    </div>
  );
}
