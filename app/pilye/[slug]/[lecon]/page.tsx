"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PILLARS } from "@/data/pillars";
import { markLessonComplete } from "@/lib/storage";
import CelebrationOverlay from "@/components/CelebrationOverlay";

export default function LessonPage({
  params,
}: {
  params: { slug: string; lecon: string };
}) {
  const pillar = PILLARS.find((p) => p.slug === params.slug);
  if (!pillar) notFound();
  const lesson = pillar.lessons.find((l) => l.id === params.lecon);
  if (!lesson) notFound();

  const lessonIdx = pillar.lessons.findIndex((l) => l.id === params.lecon);
  const nextLesson = pillar.lessons[lessonIdx + 1] ?? null;

  const [done, setDone] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [celebrateMsg, setCelebrateMsg] = useState("");

  useEffect(() => {
    // Check if already completed
    const { getProgress } = require("@/lib/storage");
    const p = getProgress();
    setDone(p.pillars[params.slug]?.lessonsCompleted.includes(params.lecon) ?? false);
  }, [params.slug, params.lecon]);

  const handleComplete = () => {
    markLessonComplete(params.slug, params.lecon);
    setDone(true);

    // Check pillar completion
    const { getProgress } = require("@/lib/storage");
    const p = getProgress();
    const total = pillar.lessons.length;
    const completed = p.pillars[params.slug]?.lessonsCompleted.length ?? 0;
    if (completed >= total) {
      setCelebrateMsg(
        `Brav! Ou fini Pilye ${pillar.number}: ${pillar.title}! 🌟`
      );
      setCelebrate(true);
    }
  };

  return (
    <>
      <CelebrationOverlay
        show={celebrate}
        message={celebrateMsg}
        onClose={() => setCelebrate(false)}
      />

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Nav */}
        <Link
          href={`/pilye/${params.slug}`}
          className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4"
        >
          ← {pillar.title}
        </Link>

        {/* Breadcrumb */}
        <p className="text-xs text-gold font-bold uppercase tracking-wide mb-1">
          Pilye {pillar.number} · Leson {lessonIdx + 1}/{pillar.lessons.length}
        </p>

        {/* Title */}
        <h1 className="font-serif text-2xl font-bold text-navy mb-1">{lesson.title}</h1>
        {lesson.subtitle && (
          <p className="text-text-muted font-serif text-sm mb-6">{lesson.subtitle}</p>
        )}

        {/* Body */}
        <div className="bg-white rounded-2xl border border-cream-border p-5 mb-4">
          <p className="font-serif text-text-primary leading-8 text-[15px]">{lesson.body}</p>
        </div>

        {/* Poukisa callout */}
        {lesson.poukisa && (
          <div className="bg-amber-50 border-l-4 border-gold rounded-r-xl p-4 mb-4">
            <p className="text-xs text-gold-muted font-bold uppercase tracking-wide mb-1.5">
              💡 Poukisa?
            </p>
            <p className="font-serif text-text-secondary text-sm leading-relaxed">
              {lesson.poukisa}
            </p>
          </div>
        )}

        {/* Arabic quote */}
        {lesson.quote && (
          <div className="bg-navy rounded-2xl p-5 mb-4">
            <p className="arabic text-cream text-2xl leading-loose mb-3">
              {lesson.quote.arabic}
            </p>
            <p className="text-cream/60 text-xs font-serif italic mb-1">
              {lesson.quote.transliteration}
            </p>
            <p className="text-gold font-serif text-sm leading-relaxed">
              "{lesson.quote.creole}"
            </p>
            <p className="text-cream/40 text-xs font-serif mt-2">— {lesson.quote.source}</p>
          </div>
        )}

        {/* Key terms */}
        {lesson.keyTerms && lesson.keyTerms.length > 0 && (
          <div className="bg-cream-dark rounded-2xl p-4 mb-4">
            <p className="text-xs text-navy font-bold uppercase tracking-wide mb-3">
              Mo Kle
            </p>
            <div className="space-y-2">
              {lesson.keyTerms.map((kt) => (
                <div key={kt.term} className="flex gap-2">
                  <span className="font-serif font-bold text-gold text-sm flex-shrink-0">
                    {kt.term}
                  </span>
                  <span className="text-text-secondary font-serif text-sm">— {kt.definition}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete button */}
        {!done ? (
          <button
            onClick={handleComplete}
            className="w-full bg-navy text-gold font-serif font-bold py-4 rounded-2xl text-lg hover:bg-navy-light transition-colors mt-2"
          >
            ✓ Mwen Fin Li Sa
          </button>
        ) : (
          <div className="space-y-2 mt-2">
            <div className="bg-green/10 border border-green rounded-2xl p-3 text-center">
              <p className="text-green font-serif text-sm font-bold">✓ Leson sa a konplè!</p>
            </div>
            {nextLesson ? (
              <Link
                href={`/pilye/${params.slug}/${nextLesson.id}`}
                className="block bg-navy text-gold font-serif font-bold py-4 rounded-2xl text-center hover:bg-navy-light transition-colors"
              >
                Leson Swivan → {nextLesson.title}
              </Link>
            ) : (
              <Link
                href={`/quiz/${params.slug}`}
                className="block bg-gold text-navy font-serif font-bold py-4 rounded-2xl text-center hover:bg-gold-light transition-colors"
              >
                🎯 Pran Quiz Pilye {pillar.number}
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
