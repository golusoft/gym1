"use client";

import { Flame } from "lucide-react";

const items = [
  "Strength",
  "Discipline",
  "Hypertrophy",
  "Cardio",
  "Powerlifting",
  "HIIT",
  "Yoga",
  "Functional",
  "Mobility",
  "Nutrition",
  "Recovery",
  "Mindset",
];

export default function MarqueeBar() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-display text-3xl md:text-4xl tracking-widest uppercase text-white/30 hover:text-primary transition-colors"
          >
            {t}
            <Flame className="w-5 h-5 text-primary/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
