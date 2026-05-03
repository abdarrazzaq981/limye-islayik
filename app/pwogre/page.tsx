"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PILLARS } from "@/data/pillars";
import { getProgress } from "@/lib/storage";
import { getPillarCompletionPercent, getOverallPercent } from "@/lib/progress";
import ProgressRing from "@/components/ProgressRing";

const BADGES = [
  { slug: "sa-islam-ye", label: "Fondasyon", icon: "🌱", description: "Fini Pilye 1: Sa Islam Ye" },
  { slug: "wudu", label: "Pwoprete", icon: "💧", description: "Fini Pilye 2: Wudu" },
  { slug: "salat", label: "Adoratè", icon: "🕌", description: "Fini Pilye 3: Salat" },
  { slug: "koran", label: "Récitè", icon: "📖", description: "Fini Pilye 4: Koran" },
  { slug: "zakah-sawm-hajj", label: "Pilye 5", icon: "🌙", description: "Fini Pilye 5: Zakah, Sawm, Hajj" },
  { slug: "lavi-chak-jou", label: "Mouri Fò", icon: "⭐", description: "Fini Pilye 6: Lavi Chak Jou" },
];

export default function PwogresPage() {
  const [percents, setPercents] = useState<Record<string, number>>({});
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [overall, setOverall] = useState(0);
  const [totalLessons, setTotalLessons] = useState(0);

  useEffect(() => {
    const progress = getProgress();
    const p: Record<string, number> = {};
    const earned: string[] = [];
    PILLARS.forEach((pillar) => {
      const pct = getPillarCompletionPercent(pillar.slug);
      p[pillar.slug] = pct;
      if (pct === 100) earned.push(pillar.slug);
    });
    setPercents(p);
    setEarnedBadges(earned);
    setStreak(progress.streak);
    setOverall(getOverallPercent());
    setTotalLessons(progress.totalLessonsCompleted);
  }, []);

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>

      <h1 className="font-serif text-2xl font-bold text-navy mb-5">Pwogre ou</h1>

      {/* Overall */}
      <div className="bg-navy rounded-2xl p-5 mb-5 flex items-center gap-5">
        <div className="relative">
          <ProgressRing percent={overall} size={72} strokeWidth={5} color="#C19A4D" />
          <span className="absolute inset-0 flex items-center justify-center text-cream font-bold text-sm">
            {overall}%
          </span>
        </div>
        <div>
          <p className="text-gold font-bold font-serif text-lg">Pwogre Total</p>
          <p className="text-cream/70 font-serif text-sm mt-1">
            {totalLessons} leson konplè
          </p>
          {streak > 0 && (
            <p className="text-orange-300 font-serif text-sm mt-1">
              🔥 {streak} jou konsekitif
            </p>
          )}
        </div>
      </div>

      {/* Badges */}
      <h2 className="font-serif text-navy font-bold text-sm uppercase tracking-wide mb-3">
        Badj ou yo
      </h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {BADGES.map((badge) => {
          const earned = earnedBadges.includes(badge.slug);
          return (
            <div
              key={badge.slug}
              className={`rounded-2xl p-3 text-center border transition-all ${
                earned
                  ? "bg-white border-gold shadow-sm"
                  : "bg-cream-dark border-cream-border opacity-50"
              }`}
            >
              <p className={`text-3xl mb-1.5 ${earned ? "" : "grayscale"}`}>
                {badge.icon}
              </p>
              <p className={`font-serif text-xs font-bold ${earned ? "text-navy" : "text-text-muted"}`}>
                {badge.label}
              </p>
              {earned && (
                <p className="text-[9px] text-gold mt-0.5 font-serif">✓ Ganye</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Per-pillar progress */}
      <h2 className="font-serif text-navy font-bold text-sm uppercase tracking-wide mb-3">
        Detay pa Pilye
      </h2>
      <div className="space-y-2 mb-6">
        {PILLARS.map((pillar) => {
          const pct = percents[pillar.slug] ?? 0;
          return (
            <Link
              key={pillar.slug}
              href={`/pilye/${pillar.slug}`}
              className="flex items-center gap-3 bg-white border border-cream-border rounded-xl p-3 hover:border-gold transition-colors"
            >
              <span className="text-xl">{pillar.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-serif text-navy text-sm font-bold truncate">{pillar.title}</p>
                <div className="h-1.5 bg-cream-border rounded-full mt-1.5">
                  <div
                    className="h-full bg-gold rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <span className="text-text-muted text-xs font-serif flex-shrink-0">{pct}%</span>
            </Link>
          );
        })}
      </div>

      {/* What's left */}
      {overall < 100 && (
        <div className="bg-cream-dark border border-cream-border rounded-2xl p-4">
          <p className="text-navy font-bold font-serif text-sm mb-2">Sa ki rete pou fè</p>
          {PILLARS.filter((p) => (percents[p.slug] ?? 0) < 100).slice(0, 2).map((p) => (
            <Link
              key={p.slug}
              href={`/pilye/${p.slug}`}
              className="flex items-center gap-2 py-1.5 text-sm font-serif text-text-secondary hover:text-navy"
            >
              <span>{p.icon}</span>
              <span>Kontinye {p.title} →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
