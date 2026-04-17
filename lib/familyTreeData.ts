export interface FamilyPerson {
  peck: number;
  name: string;
  nick?: string;
  gen: number;          // 0=roots, 1=Gen1 children, 2=grandchildren, 3=great, 4=great-great
  born?: number;        // year
  died?: number;        // year
  married?: number;     // year
  divorced?: boolean;
  spouse?: string;
  parentPeck?: number;  // primary Williams-side parent's peck number
  notes?: string;
}

export const family: FamilyPerson[] = [
  // ── Gen 0 — Roots ────────────────────────────────────────────────────────
  { peck:1,  name:"Thomas Lesslie Williams",     nick:"Tom",    gen:0, born:1907, died:1980, married:1934, spouse:"Margaret Ann Rambo (Peggy)" },
  { peck:2,  name:"Margaret Ann Rambo",          nick:"Peggy",  gen:0, born:1911, died:2004, married:1934, spouse:"Thomas Lesslie Williams (Tom)" },

  // ── Gen 1 — Children of Tom & Peggy ──────────────────────────────────────
  { peck:3,  name:"Thomas Lesslie Williams Jr.", nick:"Pookie", gen:1, born:1935, died:2023, married:1960, spouse:"Formerly Betty Small",              parentPeck:1 },
  { peck:4,  name:"Robert Rambo Williams",       nick:"Robbie", gen:1, born:1936, died:2005, married:1959, spouse:"Patricia Ann Fisher (Tricia)",       parentPeck:1 },
  { peck:5,  name:"Richard Cornell Williams",    nick:"Rici",   gen:1, born:1937,            married:1957, spouse:"Barbara Ruth Wrenn",                 parentPeck:1 },
  { peck:6,  name:"Charles Cornwell Williams",   nick:"Chici",  gen:1, born:1940, died:2025, married:1963, spouse:"Linda Raye Driggers",                parentPeck:1 },
  { peck:7,  name:"Mary Margaret Williams",      nick:"Priss",  gen:1, born:1942,            married:1966, divorced:true, spouse:"Formerly Jun Joseph Yugawa", parentPeck:1 },
  { peck:8,  name:"Joseph Francis Williams",     nick:"Joe Joe",gen:1, born:1944, died:1991,                                                            parentPeck:1 },
  { peck:9,  name:"Joan Marie Williams",         nick:"Joanie", gen:1, born:1946,            married:1974, spouse:"Michael Edward Platt",               parentPeck:1 },
  { peck:10, name:"Annie Cornwell Williams",                    gen:1, born:1949,                          spouse:"Formerly James David Porter",         parentPeck:1 },

  // ── Gen 2 — Under Pookie (3) ──────────────────────────────────────────────
  { peck:19, name:"Thomas Lesslie Williams III", nick:"Tommy",  gen:2, born:1962, died:2018, parentPeck:3 },
  { peck:22, name:"Hulan Small Williams",        nick:"Buddy",  gen:2, born:1964, married:1994, spouse:"Donna Carol Preslar",          parentPeck:3 },
  { peck:32, name:"Elizabeth Small Williams",                   gen:2, born:1969, married:2006, spouse:"Sandy Britt",                  parentPeck:3 },

  // ── Gen 2 — Under Robert (4) ─────────────────────────────────────────────
  { peck:15, name:"Margaret Jeanne Williams",    nick:"Jeanne", gen:2, born:1960, married:1978, spouse:"Charles Raymond Flindt Jr. (Chuck)", parentPeck:4 },
  { peck:18, name:"Katherine Redette Williams",  nick:"Kathi",  gen:2, born:1961,                                                            parentPeck:4 },
  { peck:21, name:"Robert Rambo Williams Jr.",   nick:"Bob",    gen:2, born:1963, married:1986, spouse:"Miriam Elizabeth Curtis",            parentPeck:4 },
  { peck:24, name:"Lesslie Graham Damian Williams", nick:"Damian", gen:2, born:1965,                                                        parentPeck:4 },
  { peck:28, name:"Michael Wilson Thaddeus Williams",            gen:2, born:1967, married:1996, divorced:true, spouse:"Sheila Kaye Jones", parentPeck:4 },
  { peck:31, name:"Thomas Allen Christopher Williams",           gen:2, born:1969, married:1997, spouse:"Priscilla Cristina Torres",        parentPeck:4 },
  { peck:35, name:"Patricia Ann Williams",       nick:"Tricia", gen:2, born:1971, married:1994, spouse:"Patrick Sean McDevitt",             parentPeck:4 },
  { peck:36, name:"Joseph Francis Williams II",  nick:"Joe",    gen:2, born:1973, died:2024, married:2008, spouse:"Joanna Florence Williams", parentPeck:4 },
  { peck:37, name:"Mary Elizabeth Williams",                    gen:2, born:1974, married:2011, spouse:"Michael Nadell Ross",               parentPeck:4 },
  { peck:42, name:"Heather Marie Williams",                     gen:2, born:1978,                                                            parentPeck:4 },

  // ── Gen 2 — Under Richard (5) ────────────────────────────────────────────
  { peck:12, name:"Margaret Ruth Williams",      nick:"Marti",  gen:2, born:1958, married:1998, spouse:"Kip Larson",              parentPeck:5 },
  { peck:14, name:"Debra Michelle Williams",     nick:"Gidget", gen:2, born:1959, married:2009, spouse:"William Timothy Sharpe",  parentPeck:5 },
  { peck:17, name:"Richard Cornell Williams Jr.",nick:"Richi",  gen:2, born:1961,                                                 parentPeck:5 },
  { peck:23, name:"Barbara Inez Williams",       nick:"Bobbi",  gen:2, born:1964, spouse:"Chris Crawford",                       parentPeck:5 },

  // ── Gen 2 — Under Charles (6) ────────────────────────────────────────────
  { peck:25, name:"Charles Cornwell Williams Jr.", nick:"Chad", gen:2, born:1965, married:1990, spouse:"Malynda Joyce McCarter",        parentPeck:6 },
  { peck:29, name:"Ann Marie Williams",                         gen:2, born:1967, married:1997, spouse:"Leslie Shaw Blackmon (Shaw)",   parentPeck:6 },

  // ── Gen 2 — Under Priss (7) ──────────────────────────────────────────────
  { peck:26, name:"Sam Hawley",                                 gen:2, born:1966, parentPeck:7 },
  { peck:30, name:"Meiji Thomas Yugawa",                        gen:2, born:1968, parentPeck:7 },
  { peck:33, name:"Koji Yugawa",                                gen:2, born:1969, married:1994, spouse:"Amanda Beth Cohn", parentPeck:7 },

  // ── Gen 2 — Under Joanie (9) ─────────────────────────────────────────────
  { peck:40, name:"John Michael Platt",                         gen:2, born:1977, parentPeck:9 },
  { peck:45, name:"Charleston Rambo Platt",                     gen:2, born:1979, married:2016, spouse:"William Allen Morford", parentPeck:9 },
  { peck:49, name:"Chappell Edward Platt",                      gen:2, born:1981, married:2008, spouse:"Danielle Marie Petro",  parentPeck:9 },

  // ── Gen 2 — Under Annie (10) ─────────────────────────────────────────────
  { peck:39, name:"Christi Ann Porter",                         gen:2, born:1975, married:1995, spouse:"Michael Lloyd Cox",      parentPeck:10 },
  { peck:41, name:"Susan Rambo Porter",                         gen:2, born:1977, married:1997, divorced:true, spouse:"Formerly Chance Wiley Champion",  parentPeck:10 },

  // ── Gen 3 — Under Buddy (22) ─────────────────────────────────────────────
  { peck:74, name:"Jeremy Thomas Williams",                     gen:3, born:1995, parentPeck:22 },
  { peck:88, name:"Jacob Hulan Williams",                       gen:3, born:1998, parentPeck:22 },

  // ── Gen 3 — Under Jeanne (15) ────────────────────────────────────────────
  { peck:44, name:"Julie Marie Flindt",                         gen:3, born:1975, married:2005, spouse:"Luis Humbero Pinedo Jr.", parentPeck:15 },
  { peck:46, name:"Cheryl Lynn Flindt",                         gen:3, born:1979, married:2009, divorced:true, spouse:"Formerly Chad Austin Sisco", parentPeck:15 },
  { peck:48, name:"David Michael Flindt",                       gen:3, born:1981, married:2009, spouse:"Kelly Lynn Flindt",       parentPeck:15 },

  // ── Gen 3 — Under Kathi (18) — father: Jeff Olson ────────────────────────
  { peck:47, name:"Sabrina Redette Olson",                      gen:3, born:1981, married:2007, spouse:"David Joseph Gigliotti", parentPeck:18 },
  { peck:50, name:"Kristen Redette Olson",                      gen:3, born:1982, parentPeck:18 },
  { peck:52, name:"Austin Jeffery Robert Olson",                gen:3, born:1986, parentPeck:18 },
  { peck:56, name:"Racheal Marie Redette Olson",                gen:3, born:1988, spouse:"Jared Jeffrey Adams",                  parentPeck:18 },
  { peck:60, name:"Mason Garrette Tanner Olson",  nick:"Tanner",gen:3, born:1991, parentPeck:18 },
  { peck:65, name:"J Winston Michael Travis Olson",nick:"Winston",gen:3, born:1993, parentPeck:18 },

  // ── Gen 3 — Under Bob Jr. (21) ───────────────────────────────────────────
  { peck:55, name:"Robert Rambo Williams III",                  gen:3, born:1988, married:2016, divorced:true, spouse:"Formerly Eva Rodriguez", parentPeck:21 },
  { peck:61, name:"Erica Nicole Lynn Williams",                 gen:3, born:1992, parentPeck:21 },

  // ── Gen 3 — Under Damian (24) ────────────────────────────────────────────
  { peck:59, name:"Kimberly Christine Marie Williams",          gen:3, born:1990, parentPeck:24 },
  { peck:63, name:"Christopher Robert Damian Williams",         gen:3, born:1993, parentPeck:24 },
  { peck:73, name:"Autumn Lesslie Redette Williams",            gen:3, born:1995, married:2023, spouse:"Chris Perry", parentPeck:24 },

  // ── Gen 3 — Under Michael WT (28) ────────────────────────────────────────
  { peck:91, name:"Georgia Elizabeth Marie Williams",           gen:3, born:1999, parentPeck:28 },

  // ── Gen 3 — Under Tom Christopher (31) ──────────────────────────────────
  { peck:87, name:"Miranda Janei Elizabeth Williams",           gen:3, born:1998, parentPeck:31 },
  { peck:99, name:"Isabella Marie Addlene Williams",            gen:3, born:2002, parentPeck:31 },
  { peck:104,name:"Ariana Grace Malayna Williams",              gen:3, born:2003, parentPeck:31 },

  // ── Gen 3 — Under Tricia (35) ────────────────────────────────────────────
  { peck:95, name:"Nicholas Oliver Seamus McDevitt",            gen:3, born:2000, parentPeck:35 },
  { peck:98, name:"Rebecca Ashley Marjan McDevitt",             gen:3, born:2002, parentPeck:35 },
  { peck:103,name:"Sarah Victoria Noel McDevitt",               gen:3, born:2003, parentPeck:35 },
  { peck:105,name:"Alexandra Melissa Danielle McDevitt",        gen:3, born:2004, parentPeck:35 },
  { peck:110,name:"Nathanial Robert Hugh McDevitt",             gen:3, born:2008, parentPeck:35 },

  // ── Gen 3 — Under Joe II (36) ────────────────────────────────────────────
  { peck:121,name:"Hadley Rose Linick Williams",                gen:3, born:2011, parentPeck:36 },
  { peck:122,name:"Parker Shawn Williams",                      gen:3, born:2011, parentPeck:36 },
  { peck:131,name:"Logan Michael Williams",                     gen:3, born:2012, parentPeck:36 },

  // ── Gen 3 — Under Mary Elizabeth (37) ───────────────────────────────────
  { peck:75, name:"Jakob Thomas Michael Elvis Williams",        gen:3, born:1996, married:2024, spouse:"Emma Elise Steinmetz", parentPeck:37 },
  { peck:130,name:"Charleston Elizabeth Rambo Nadell Brooklyn Ross", gen:3, born:2012, parentPeck:37 },
  { peck:135,name:"Michael Michigan Rambo Williams Blake Richard Jensen Ross", gen:3, born:2014, parentPeck:37 },

  // ── Gen 3 — Under Marti (12) ─────────────────────────────────────────────
  { peck:51, name:"Brian Hilery Williams",                      gen:3, born:1986, married:2011, spouse:"Jessica Tyler Williams", parentPeck:12, notes:"Father: Philip Williams" },
  { peck:102,name:"Shaheim Darin Larson",                       gen:3, born:2003, parentPeck:12 },

  // ── Gen 3 — Under Gidget (14) ────────────────────────────────────────────
  { peck:54, name:"Meghan Leslie Keogh",                        gen:3, born:1986, spouse:"Creighton Hayes",   parentPeck:14, notes:"Father: David Joseph Keogh" },
  { peck:57, name:"Garrett Clark Keogh",                        gen:3, born:1990,                             parentPeck:14, notes:"Father: David Joseph Keogh" },
  { peck:80, name:"Madison Lee Ayers",                          gen:3, born:1997,                             parentPeck:14, notes:"Father: Greg Ayers" },

  // ── Gen 3 — Under Richi Jr. (17) ─────────────────────────────────────────
  { peck:76, name:"Alexandria Marie Williams",                  gen:3, born:1996, parentPeck:17, notes:"Mother: Roberta Ann McClain" },

  // ── Gen 3 — Under Bobbi (23) ─────────────────────────────────────────────
  { peck:62, name:"Tindal Wrenn McLaurin",                      gen:3, born:1992, parentPeck:23, notes:"Father: Brent McLaurin" },
  { peck:64, name:"Allison Whaley McLaurin",                    gen:3, born:1993, parentPeck:23, notes:"Father: Brent McLaurin" },

  // ── Gen 3 — Under Chad Jr. (25) ──────────────────────────────────────────
  { peck:66, name:"Kaitland Margaret Williams", nick:"Kaity",   gen:3, born:1994, parentPeck:25 },
  { peck:67, name:"Kally Raye Williams",                        gen:3, born:1994, parentPeck:25 },

  // ── Gen 3 — Under Ann Marie (29) ─────────────────────────────────────────
  { peck:93, name:"Margaret Jane Blackmon",                     gen:3, born:1999, parentPeck:29 },
  { peck:96, name:"Brent Blackmon",                             gen:3, born:2001, parentPeck:29 },
  { peck:100,name:"Samuel Charles Blackmon",                    gen:3, born:2003, parentPeck:29 },

  // ── Gen 3 — Under Sam Hawley (26) ────────────────────────────────────────
  { peck:68, name:"Perry William Hawley",                       gen:3, born:1994, parentPeck:26 },
  { peck:77, name:"Hannah Isabelle Hawley",                     gen:3, born:1996, parentPeck:26 },

  // ── Gen 3 — Under Meiji (30) ─────────────────────────────────────────────
  { peck:71, name:"Ranae Wuanita Yugawa",                       gen:3, born:1994, spouse:"Jeremy Hagar", parentPeck:30, notes:"Mother: Georgene Ranae Holliday" },
  { peck:89, name:"Reece Thomas Yugawa",                        gen:3, born:1998, parentPeck:30, notes:"Mother: Georgene Ranae Holliday" },

  // ── Gen 3 — Under Koji (33) ──────────────────────────────────────────────
  { peck:78, name:"Chloe Terry Yugawa",                         gen:3, born:1996, parentPeck:33 },
  { peck:90, name:"Luke Akira Yugawa",                          gen:3, born:1998, parentPeck:33 },

  // ── Gen 3 — Under Charleston Rambo Platt (45) ────────────────────────────
  { peck:146,name:"Magnolia Frances Morford",                   gen:3, parentPeck:45 },
  { peck:149,name:"Solstice Rose Morford",                      gen:3, parentPeck:45 },
  { peck:150,name:"Miles Rambo Platt",                          gen:3, parentPeck:40 },

  // ── Gen 3 — Under Chappell Platt (49) ────────────────────────────────────
  { peck:117,name:"Sophia Marie Platt",                         gen:3, born:2009, parentPeck:49 },
  { peck:128,name:"Savannah Rose Platt",                        gen:3, born:2012, parentPeck:49 },
  { peck:134,name:"Sawyer Noah Platt",                          gen:3, born:2014, parentPeck:49 },

  // ── Gen 3 — Under Christi Cox (39) ───────────────────────────────────────
  { peck:86, name:"Courtney Elizabeth Cox",                     gen:3, born:1998, parentPeck:39 },
  { peck:101,name:"Kendall Leslie Cox",                         gen:3, born:2003, parentPeck:39 },
  { peck:107,name:'Michael "Porter" Cox',                       gen:3, born:2005, parentPeck:39 },

  // ── Gen 3 — Under Susan Champion (41) ────────────────────────────────────
  { peck:85, name:"Shelby Morgan Champion",                     gen:3, born:1997, parentPeck:41 },
  { peck:97, name:"Walker Ryan Champion",                       gen:3, born:2001, parentPeck:41 },
  { peck:126,name:"Anna Kate Crickett Champion",                gen:3, born:2011, parentPeck:41 },

  // ── Gen 4 — Under Julie Flindt (44) ──────────────────────────────────────
  { peck:111,name:"Alex Luis Pinedo",                           gen:4, born:2008, parentPeck:44 },
  { peck:120,name:"Andrew David Pinedo",                        gen:4, born:2010, parentPeck:44 },
  { peck:133,name:"Kaitlyn Arianna Pinedo",                     gen:4, born:2013, parentPeck:44 },

  // ── Gen 4 — Under Cheryl Flindt (46) ─────────────────────────────────────
  { peck:127,name:"Cooper Austin Sisco",                        gen:4, born:2011, parentPeck:46 },
  { peck:136,name:"Sawyer Vincent Sisco",                       gen:4, born:2014, parentPeck:46 },

  // ── Gen 4 — Under David Flindt (48) ──────────────────────────────────────
  { peck:123,name:"Liam Michael Flindt",                        gen:4, born:2011, parentPeck:48 },
  { peck:129,name:"Peyton Lynn Flindt",                         gen:4, born:2012, parentPeck:48 },

  // ── Gen 4 — Under Sabrina Olson (47) ─────────────────────────────────────
  { peck:94, name:"Breanne Renee Rojeski",                      gen:4, born:2000, parentPeck:47 },
  { peck:113,name:"Toni Lynn Rambo Gigliotti",                  gen:4, born:2009, parentPeck:47 },

  // ── Gen 4 — Under Racheal Adams (56) ─────────────────────────────────────
  { peck:132,name:"Jocelyn Mari Redette Adams",                 gen:4, born:2013, parentPeck:56 },
  { peck:139,name:"Mason Jeffrey Adams",                        gen:4, born:2016, parentPeck:56 },
];
