"use client";

import { useState, useEffect } from "react";

const REUNION_DATE = new Date("2026-07-17T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(): TimeLeft {
  const diff = REUNION_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[72px] text-center border border-white/20 shadow-inner">
        <span className="text-4xl md:text-5xl font-bold tabular-nums leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs font-bold uppercase tracking-widest opacity-80">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) return null;

  if (timeLeft.expired) {
    return (
      <div className="text-center py-4">
        <p className="text-2xl font-serif font-bold">🎉 Reunion Day is Here!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-bold uppercase tracking-widest opacity-80">
        Countdown to Reunion Day
      </p>
      <div className="flex gap-3 md:gap-5 text-white">
        <Unit value={timeLeft.days} label="Days" />
        <div className="text-3xl font-bold opacity-50 mt-3">:</div>
        <Unit value={timeLeft.hours} label="Hours" />
        <div className="text-3xl font-bold opacity-50 mt-3">:</div>
        <Unit value={timeLeft.minutes} label="Mins" />
        <div className="text-3xl font-bold opacity-50 mt-3">:</div>
        <Unit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
}
