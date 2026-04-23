"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

function Unit({ value, label, small }: { value: number; label: string; small?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`bg-white/15 backdrop-blur-sm rounded-xl text-center border border-white/20 shadow-inner ${small ? "px-2.5 py-1.5 min-w-[52px]" : "px-4 py-3 min-w-[72px]"}`}>
        <span className={`font-bold tabular-nums leading-none ${small ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"}`}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className={`mt-1.5 font-bold uppercase tracking-widest opacity-80 ${small ? "text-[10px]" : "text-xs"}`}>
        {label}
      </span>
    </div>
  );
}

interface CountdownTimerProps {
  targetDate?: string;   // ISO date string, defaults to reunion date
  label?: string;
  expiredMessage?: string;
  small?: boolean;
}

const REUNION_DATE = "2026-07-17T00:00:00";

export default function CountdownTimer({
  targetDate = REUNION_DATE,
  label = "Countdown to Reunion Day",
  expiredMessage = "🎉 Reunion Day is Here!",
  small = false,
}: CountdownTimerProps) {
  const target = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (!timeLeft) return null;

  if (timeLeft.expired) {
    return (
      <div className="text-center py-4">
        <p className={`font-serif font-bold ${small ? "text-lg" : "text-2xl"}`}>{expiredMessage}</p>
      </div>
    );
  }

  const sep = small ? "text-xl" : "text-3xl";

  return (
    <div className="flex flex-col items-center gap-3">
      <p className={`font-bold uppercase tracking-widest opacity-80 ${small ? "text-[10px]" : "text-sm"}`}>
        {label}
      </p>
      <div className="flex gap-2 md:gap-3 text-white">
        <Unit value={timeLeft.days}    label="Days"  small={small} />
        <div className={`${sep} font-bold opacity-50 mt-2`}>:</div>
        <Unit value={timeLeft.hours}   label="Hours" small={small} />
        <div className={`${sep} font-bold opacity-50 mt-2`}>:</div>
        <Unit value={timeLeft.minutes} label="Mins"  small={small} />
        <div className={`${sep} font-bold opacity-50 mt-2`}>:</div>
        <Unit value={timeLeft.seconds} label="Secs"  small={small} />
      </div>
    </div>
  );
}
