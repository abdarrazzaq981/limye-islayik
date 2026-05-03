"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PILLARS } from "@/data/pillars";
import { getProgress } from "@/lib/storage";
import { getPillarCompletionPercent, getNextLesson } from "@/lib/progress";
import { readinessScore, readinessMessage } from "@/lib/mastery";
import { useProgress } from "@/lib/use-progress";
import ProgressRing from "@/components/ProgressRing";

const RING_COLORS: Record<string, string> = {
  green: "#2A6A3A",
  navy: "#1B2B4A",
  gold: "#C19A4D",
};

const MOTIVATIONAL = [
  "\"Sesiman moun ki gen konesans ak moun ki pa gen konesans pa menm.\" — Koran 39:9",
  "\"Aprann konesans se yon obligasyon pou chak Mizilman.\" — Pwofèt ﷺ",
  "\"Mèyè nan nou se moun ki aprann Koran epi anseye li.\" — Pwofèt ﷺ",
];

export default function Dashboard() {
  const progress = useProgress();
  const [percents, setPercents] = useState<Record<string, number>>({});
  const [streak, setStreak] = useState(0);
  const [nextLesson, setNextLesson] = useState<{ pillarSlug: string; lessonId: string } | null>(null);
  const [quote] = useState(() => MOTIVATIONAL[Math.floor(Math.random() * MOTIVATIONAL.length)]);

  useEffect(() => {
    const p: Record<string, number> = {};
    PILLARS.forEach((pillar) => {
      p[pillar.slug] = getPillarCompletionPercent(pillar.slug);
    });
    /* eslint-disable react-hooks/set-state-in-effect -- derived snapshot when progress changes */
    setPercents(p);
    setStreak(getProgress().streak);
    setNextLesson(getNextLesson());
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [progress]);

  const readiness = readinessScore(progress);
  const openMistakes = progress.mistakeJournal.filter((m) => !m.resolved).length;

  const nextPillar = nextLesson
    ? PILLARS.find((p) => p.slug === nextLesson.pillarSlug)
    : null;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 text-center">
          <p className="text-gold font-serif text-2xl tracking-widest">☪</p>
          <h1 className="text-2xl font-serif font-bold text-navy mt-1 tracking-wide">
            LIMYÈ ISLAYIK
          </h1>
          <p className="text-text-muted text-xs font-serif mt-1 tracking-wide">
            Limyè pou tout Ayisyen k ap aprann Islam
          </p>
        </div>
        <Link
          href="/parametr"
          aria-label="Paramèt"
          className="text-text-muted hover:text-navy text-xl"
        >
          ⚙
        </Link>
      </div>

      {/* Readiness widget */}
      {readiness > 0 && (
        <div className="bg-white border border-cream-border rounded-2xl p-4 mb-5 flex items-center gap-4">
          <div className="relative shrink-0">
            <ProgressRing percent={readiness} size={56} strokeWidth={4} color="#C19A4D" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-navy">
              {readiness}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gold font-bold uppercase tracking-wide">
              Nivo prepatasyon ou
            </p>
            <p className="font-serif text-text-secondary text-sm leading-snug mt-0.5">
              {readinessMessage(readiness)}
            </p>
          </div>
        </div>
      )}

      {/* Streak */}
      {streak > 0 && (
        <div className="flex items-center gap-2 justify-center mb-5">
          <span className="text-orange-500">🔥</span>
          <span className="text-sm font-serif text-text-secondary">
            {streak} jou konsekitif — kontinye konsa!
          </span>
        </div>
      )}

      {/* Next Step CTA */}
      {nextPillar && nextLesson && (
        <Link
          href={`/pilye/${nextLesson.pillarSlug}/${nextLesson.lessonId}`}
          className="block bg-navy rounded-2xl p-4 mb-6 hover:bg-navy-light transition-colors"
        >
          <p className="text-xs text-cream/60 font-serif uppercase tracking-wide mb-1">
            Kote pou kòmanse
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream font-serif font-bold">
                {nextPillar.icon} {nextPillar.title}
              </p>
              <p className="text-cream/70 text-sm font-serif mt-0.5">
                {nextPillar.lessons.find((l) => l.id === nextLesson.lessonId)?.title}
              </p>
            </div>
            <span className="text-gold font-bold text-lg">→</span>
          </div>
        </Link>
      )}

      {!nextLesson && (
        <div className="bg-green/10 border border-green rounded-2xl p-4 mb-6 text-center">
          <p className="text-green font-serif font-bold">🎉 Brav! Ou fini tout leson yo!</p>
          <p className="text-text-secondary text-sm font-serif mt-1">
            Kontinye pratike ak quiz yo.
          </p>
        </div>
      )}

      {/* Pillars grid */}
      <h2 className="font-serif text-navy font-bold text-sm uppercase tracking-wide mb-3">
        6 Pilye ou
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {PILLARS.map((pillar) => {
          const pct = percents[pillar.slug] ?? 0;
          const ringColor = RING_COLORS[pillar.color] ?? "#C19A4D";
          return (
            <Link
              key={pillar.slug}
              href={`/pilye/${pillar.slug}`}
              className="bg-white rounded-2xl border border-cream-border p-4 hover:border-gold transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[10px] text-gold font-bold uppercase tracking-wide">
                    Pilye {pillar.number}
                  </p>
                  <p className="font-serif font-bold text-navy text-sm mt-0.5 leading-tight">
                    {pillar.title}
                  </p>
                </div>
                <div className="relative">
                  <ProgressRing percent={pct} size={44} strokeWidth={3} color={ringColor} />
                  <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-navy">
                    {pct}%
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-text-muted font-serif leading-snug">
                {pillar.subtitle}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Motivational quote */}
      <div className="bg-cream-dark border-l-4 border-gold rounded-r-xl p-4 mb-4">
        <p className="text-xs text-gold font-bold uppercase tracking-wide mb-1.5">
          Pawòl Sajès
        </p>
        <p className="font-serif text-text-secondary text-sm italic leading-relaxed">{quote}</p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <Link
          href="/aprann"
          className="bg-white border border-cream-border rounded-xl p-3 text-center hover:border-gold transition-colors"
        >
          <p className="text-xl">📚</p>
          <p className="text-xs font-serif text-navy mt-1">Aprann</p>
        </Link>
        <Link
          href="/sourates"
          className="bg-white border border-cream-border rounded-xl p-3 text-center hover:border-gold transition-colors"
        >
          <p className="text-xl">📖</p>
          <p className="text-xs font-serif text-navy mt-1">Sourate</p>
        </Link>
        <Link
          href="/revize"
          className="bg-white border border-cream-border rounded-xl p-3 text-center hover:border-gold transition-colors relative"
        >
          <p className="text-xl">🔁</p>
          <p className="text-xs font-serif text-navy mt-1">Revize</p>
          {openMistakes > 0 && (
            <span className="absolute top-1 right-1 bg-gold text-navy text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {openMistakes}
            </span>
          )}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/wudu"
          className="bg-white border border-cream-border rounded-xl p-3 text-center hover:border-gold transition-colors"
        >
          <p className="text-xl">💧</p>
          <p className="text-xs font-serif text-navy mt-1">Gid Wudu</p>
        </Link>
        <Link
          href="/salat"
          className="bg-white border border-cream-border rounded-xl p-3 text-center hover:border-gold transition-colors"
        >
          <p className="text-xl">🕌</p>
          <p className="text-xs font-serif text-navy mt-1">Gid Priyè</p>
        </Link>
      </div>
    </div>
  );
}
