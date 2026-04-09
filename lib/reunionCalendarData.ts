// Williams Family Reunion 2026 — Calendar Data
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
  11: [
    {
      title: "West Coast Family Arrival",
      location: "Rock Hill, SC",
      notes: "Most family members from the West Coast arrive.",
    },
  ],
  12: [
    {
      title: "Reunion Setup Day",
      location: "Rock Hill, SC",
      notes: "Volunteers to help Cox with equipment and site setup.",
    },
  ],
  13: [
    {
      title: "General Family Activities",
      location: "Rock Hill, SC",
      notes: "Open day for local attractions and informal gatherings.",
    },
  ],
  14: [
    {
      title: "General Family Activities",
      location: "Rock Hill, SC",
      notes: "Open day; planning for younger crowd activities in Rock Hill or Charlotte.",
    },
    {
      title: "Trivia Night",
      location: "TBD",
      notes: "Organized by Chad.",
    },
    {
      title: "Farm Day",
      location: "Crawford Farm",
      notes: "Bobby & Chris Crawford to host; Jeanne to call Bobbi for date/plan",
    },
  ],
  15: [
    {
      title: "East Coast Family Arrival",
      location: "Rock Hill, SC",
      notes: "Final arrivals expected.",
    },
    {
      title: "Roll Patrol & Sourdough Classes",
      location: "Big House",
      notes: "Michael Platt (Sourdough) and Elizabeth/Mary (Rolls) leading.",
    },
    {
      title: "Barbecue by Michael Carruth.",
      notes: "West Coast Williams",
    },
  ],
  16: [
    {
      title: "Sponsored Family Night",
      location: "Big House",
      notes: "One night handled by Sandy or Elizabeth.",
    },
    {
      title: "Prep Day",
      location: "Big House",
      notes: "Final supply run to Sam's Club/Costco; local liquor run at ABC Mart.",
    },
    {
      title: "Caribbean Dinner",
      location: "Big House",
      notes: "Hosted by Charleston & Joni.",
    },
  ],
  17: [
    {
      title: "Main Reunion Day",
      location: "Big House",
      notes: "Main event day!",
      highlight: true,
    },
    {
      title: "Aunt Annie’s 82nd Birthday",
      location: "Reunion Site",
      notes: "Group to provide cake as chosen by Annie.",
    },
    {
      title: "Reunion Olympics",
      location: "Reunion Site",
      notes: "Committee: Elizabeth, Mary, Christy, Garrett, Allie, & Shelby.",
    },
    {
      title: "Professional Family Photos",
      location: "11:00 AM",
      notes: "Photographer: Dave Oxendine.",
    },
    {
      title: "Remembrance Table",
      location: "Reunion Site",
      notes: "All family to bring framed photos/mementos; Garrett to provide photo of Uncle Ricky.",
    },
    {
      title: "Dinner & Celebration",
      location: "Reunion Site",
      notes: "Catered by Melanie/Yvette for ~60 people; Barbecue by Michael Carruth.",
    },
    {
      title: "Pizza Truck",
    },
  ],
};
