"use client";

import { useState } from "react";
import Link from "next/link";
import { reunionEvents, type CalendarEvent } from "@/lib/reunionCalendarData";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH = "July 2026";

// July 1, 2026 is a Wednesday (index 3)
const FIRST_DAY_OF_WEEK = 3;
const DAYS_IN_MONTH = 31;

// Days with reunion activity
const EVENT_DAYS = new Set(Object.keys(reunionEvents).map(Number));
const MAIN_DAY = 17;

// Color palette for event chips — cycles through for variety
const EVENT_COLORS = [
  "bg-primary-100 text-primary-800 border-primary-200",
  "bg-warm-100 text-amber-800 border-amber-200",
  "bg-emerald-50 text-emerald-800 border-emerald-200",
  "bg-purple-50 text-purple-800 border-purple-200",
  "bg-rose-50 text-rose-800 border-rose-200",
  "bg-sky-50 text-sky-800 border-sky-200",
];

function EventChip({ event, index, onClick }: { event: CalendarEvent; index: number; onClick: () => void }) {
  const color = event.highlight
    ? "bg-warm-500 text-gray-900 border-warm-400 font-bold"
    : EVENT_COLORS[index % EVENT_COLORS.length];
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`w-full text-left text-xs px-1.5 py-0.5 rounded border truncate transition-opacity hover:opacity-80 ${color}`}
    >
      {event.title}
    </button>
  );
}

function EventDetail({ event, onClose }: { event: CalendarEvent; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-serif font-bold text-xl text-primary-900 mb-2">{event.title}</h3>
        {event.location && (
          <p className="text-sm text-warm-600 font-semibold mb-1">📍 {event.location}</p>
        )}
        {event.notes && (
          <p className="text-sm text-gray-600 leading-relaxed mt-2">{event.notes}</p>
        )}
        <button
          onClick={onClose}
          className="mt-5 w-full bg-primary-800 hover:bg-primary-900 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ReunionCalendarPage() {
  const [selected, setSelected] = useState<CalendarEvent | null>(null);

  // Build grid: leading empty slots + 31 days
  const cells: (number | null)[] = [
    ...Array(FIRST_DAY_OF_WEEK).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-warm-600 mb-1">Reunion 2026</p>
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-1">{MONTH}</h1>
        <p className="text-gray-500 text-sm">Williams Family Reunion · Rock Hill, SC</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-6 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-primary-800 inline-block"></span>
          <span className="text-gray-600">Today</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-primary-100 border border-primary-200 inline-block"></span>
          <span className="text-gray-600">Reunion activity</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-warm-500 inline-block"></span>
          <span className="text-gray-600">Main Reunion Day (July 17)</span>
        </span>
        <span className="text-gray-400 italic">Tap any event for details</span>
      </div>

      {/* Calendar grid */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Day headers */}
        <div className="grid grid-cols-7 bg-primary-900">
          {DAYS_OF_WEEK.map((d) => (
            <div key={d} className="text-center text-xs font-bold text-primary-200 py-2.5 uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Weeks */}
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 border-t border-gray-100">
            {week.map((day, di) => {
              const isToday = day !== null && new Date(2026, 6, day).toDateString() === new Date().toDateString();
              const hasEvents = day !== null && EVENT_DAYS.has(day);
              const isMainDay = day === MAIN_DAY;
              const events = day !== null ? reunionEvents[day] ?? [] : [];

              return (
                <div
                  key={di}
                  className={`min-h-[100px] p-1.5 border-r border-gray-100 last:border-r-0
                    ${!day ? "bg-gray-50" : ""}
                    ${isMainDay ? "bg-warm-50" : ""}
                    ${hasEvents && !isMainDay ? "bg-primary-50/40" : ""}
                  `}
                >
                  {day && (
                    <>
                      {/* Day number */}
                      <div className="flex justify-end mb-1">
                        <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full
                          ${isToday ? "bg-primary-800 text-white" : ""}
                          ${isMainDay && !isToday ? "bg-warm-500 text-gray-900" : ""}
                          ${!isToday && !isMainDay ? "text-gray-700" : ""}
                          ${hasEvents && !isMainDay && !isToday ? "text-primary-800" : ""}
                        `}>
                          {day}
                        </span>
                      </div>

                      {/* Events */}
                      <div className="space-y-0.5">
                        {events.map((ev, i) => (
                          <EventChip
                            key={i}
                            event={ev}
                            index={i}
                            onClick={() => setSelected(ev)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Event list below calendar */}
      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-serif font-bold text-primary-900">Schedule</h2>
        {Object.entries(reunionEvents)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([day, events]) => {
            const date = new Date(2026, 6, Number(day));
            const label = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
            return (
              <div key={day}>
                <h3 className={`font-serif font-bold text-lg mb-3 pb-2 border-b-2 ${Number(day) === MAIN_DAY ? "text-warm-700 border-warm-300" : "text-primary-800 border-primary-100"}`}>
                  {label}
                </h3>
                <div className="space-y-2">
                  {events.map((ev, i) => (
                    <div
                      key={i}
                      className={`rounded-xl p-4 border cursor-pointer hover:shadow-md transition-shadow ${ev.highlight ? "bg-warm-50 border-warm-200" : "bg-white border-gray-200"}`}
                      onClick={() => setSelected(ev)}
                    >
                      <p className={`font-semibold text-sm ${ev.highlight ? "text-warm-800" : "text-primary-800"}`}>{ev.title}</p>
                      {ev.location && <p className="text-xs text-gray-500 mt-0.5">📍 {ev.location}</p>}
                      {ev.notes && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{ev.notes}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link href="/reunion-2026" className="text-sm text-gray-500 hover:text-primary-700 transition-colors">
          ← Back to Reunion Info
        </Link>
      </div>

      {/* Event detail modal */}
      {selected && <EventDetail event={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
