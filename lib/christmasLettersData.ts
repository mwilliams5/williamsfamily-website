export interface ChristmasLetter {
  slug: string;
  year: number;
  title: string;
  author: string;
  content: string; // Full letter text — paste the original letter here
}

export const christmasLetters: ChristmasLetter[] = [
  {
    slug: "2006-mary-jake",
    year: 2006,
    title: "Mary & Jake's Christmas Extravaganza!",
    author: "Mary & Jake",
    content: `[Letter content to be added — paste the original 2006 letter from Mary & Jake here.]`,
  },
  {
    slug: "2005-flindt-family",
    year: 2005,
    title: "Flindt Family Christmas Letter",
    author: "Flindt Family",
    content: `[Letter content to be added — paste the original 2005 Flindt Family letter here.]`,
  },
  {
    slug: "2005-damian-williams",
    year: 2005,
    title: "Damian Williams and Family Christmas Letter",
    author: "Damian Williams & Family",
    content: `[Letter content to be added — paste the original 2005 Damian Williams letter here.]`,
  },
  {
    slug: "2004-mcdevitt",
    year: 2004,
    title: "McDevitt Christmas Letter",
    author: "McDevitt Family",
    content: `[Letter content to be added — paste the original 2004 McDevitt letter here.]`,
  },
  {
    slug: "2004-damian-williams",
    year: 2004,
    title: "Damian Williams and Family Christmas Letter",
    author: "Damian Williams & Family",
    content: `[Letter content to be added — paste the original 2004 Damian Williams letter here.]`,
  },
  {
    slug: "2003-damian-williams",
    year: 2003,
    title: "Damian Williams and Family Christmas Letter",
    author: "Damian Williams & Family",
    content: `[Letter content to be added — paste the original 2003 Damian Williams letter here.]`,
  },
  {
    slug: "2003-mcdevitt",
    year: 2003,
    title: "McDevitt Christmas Letter",
    author: "McDevitt Family",
    content: `[Letter content to be added — paste the original 2003 McDevitt letter here.]`,
  },
  {
    slug: "2002-damian-williams",
    year: 2002,
    title: "Damian Williams and Family Christmas Letter",
    author: "Damian Williams & Family",
    content: `[Letter content to be added — paste the original 2002 Damian Williams letter here.]`,
  },
  {
    slug: "2001-damian-williams",
    year: 2001,
    title: "Damian Williams and Family Christmas Letter",
    author: "Damian Williams & Family",
    content: `[Letter content to be added — paste the original 2001 Damian Williams letter here.]`,
  },
];

export function getLetterBySlug(slug: string): ChristmasLetter | undefined {
  return christmasLetters.find((l) => l.slug === slug);
}
