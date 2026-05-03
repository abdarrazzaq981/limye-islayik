"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PILLARS } from "@/data/pillars";
import { getProgress } from "@/lib/storage";
import { getPillarCompletionPercent } from "@/lib/progress";
import ProgressRing from "@/components/ProgressRing";

const RING_COLORS: Record<string, string> = {
  green: "#2A6A3A",
  navy: "#1B2B4A",
  gold: "#C19A4D",
};

export default function PillarPage({ params }: { params: { slug: string } }) {
  const pillar = PILLARS.find((p) => p.slug === params.slug);
  if (!pillar) notFound();

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const progress = getProgress();
    setCompletedLessons(progress.pillars[params.slug]?.lessonsCompleted ?? []);
    setPercent(getPillarCompletionPercent(params.slug));
  }, [params.slug]);

  const ringColor = RING_COLORS[pillar.color] ?? "#C19A4D";

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Back */}
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>

      {/* Pillar header */}
      <div className="bg-navy rounded-2xl p-5 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-wide">
              Pilye {pillar.number}
            </p>
            <h1 className="text-cream font-serif text-2xl font-bold mt-1">
              {pillar.icon} {pillar.title}
            </h1>
            <p className="text-cream/70 font-serif text-sm mt-1">{pillar.subtitle}</p>
          </div>
          <div className="relative mt-1">
            <ProgressRing percent={percent} size={56} strokeWidth={4} color={ringColor} />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-cream">
              {percent}%
            </span>
          </div>
        </div>
        <p className="text-cream/60 font-serif text-sm mt-3 leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {/* Lessons */}
      <h2 className="font-serif text-navy font-bold text-sm uppercase tracking-wide mb-3">
        Leson yo
      </h2>
      <div className="space-y-2 mb-6">
        {pillar.lessons.map((lesson, idx) => {
          const done = completedLessons.includes(lesson.id);
          return (
            <Link
              key={lesson.id}
              href={`/pilye/${pillar.slug}/${lesson.id}`}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                done
                  ? "bg-green/5 border-green/30"
                  : "bg-white border-cream-border hover:border-gold"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  done ? "bg-green text-white" : "bg-cream-dark text-navy"
                }`}
              >
                {done ? "✓" : idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif font-bold text-navy text-sm">{lesson.title}</p>
                {lesson.subtitle && (
                  <p className="text-xs text-text-muted font-serif mt-0.5">{lesson.subtitle}</p>
                )}
              </div>
              <span className="text-text-muted text-sm">→</span>
            </Link>
          );
        })}
      </div>

      {/* Quiz link */}
      {pillar.quiz.length > 0 && (
        <Link
          href={`/quiz/${pillar.slug}`}
          className="block bg-gold text-navy font-serif font-bold text-center py-3.5 rounded-2xl hover:bg-gold-light transition-colors"
        >
          🎯 Pran Quiz Pilye {pillar.number}
        </Link>
      )}
    </div>
  );
}
