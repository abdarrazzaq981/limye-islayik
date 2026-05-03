"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PILLARS } from "@/data/pillars";
import { saveQuizScore } from "@/lib/storage";
import QuizQuestion from "@/components/QuizQuestion";
import CelebrationOverlay from "@/components/CelebrationOverlay";

export default function QuizPage({ params }: { params: { slug: string } }) {
  const pillar = PILLARS.find((p) => p.slug === params.slug);
  if (!pillar || pillar.quiz.length === 0) notFound();

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [answered, setAnswered] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = pillar.quiz[idx];
  const isLast = idx === pillar.quiz.length - 1;

  const handleAnswer = (correct: boolean) => {
    setAnswers((a) => [...a, correct]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (isLast) {
      const score = Math.round(((answers.filter(Boolean).length + (answered ? 1 : 0)) / pillar.quiz.length) * 100);
      saveQuizScore(params.slug, "main", score);
      if (score >= 80) setCelebrate(true);
      setFinished(true);
    } else {
      setIdx((i) => i + 1);
      setAnswered(false);
    }
  };

  const correct = answers.filter(Boolean).length;
  const total = pillar.quiz.length;
  const finalScore = Math.round((correct / total) * 100);

  if (finished) {
    return (
      <>
        <CelebrationOverlay
          show={celebrate}
          message={`Ekselan! ${finalScore}% — Ou fò sou ${pillar.title}! 🌟`}
          onClose={() => setCelebrate(false)}
        />
        <div className="max-w-lg mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{finalScore >= 80 ? "🏆" : finalScore >= 50 ? "📚" : "💪"}</div>
            <h1 className="font-serif text-2xl font-bold text-navy">Rezilta ou</h1>
          </div>

          <div className="bg-navy rounded-2xl p-6 mb-4 text-center">
            <p className="text-gold font-bold text-5xl font-serif">{finalScore}%</p>
            <p className="text-cream/70 font-serif mt-2">
              {correct}/{total} repons kòrèk
            </p>
            <p className="text-cream font-serif mt-3 text-sm">
              {finalScore >= 80
                ? "Brav! Ou maîtrise sijè sa a!"
                : finalScore >= 50
                ? "Bon efò! Kontinye pratike."
                : "Pa dekouraje — relire leson yo epi eseye ankò!"}
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href={`/pilye/${params.slug}`}
              className="block bg-navy text-gold font-serif font-bold py-4 rounded-2xl text-center hover:bg-navy-light transition-colors"
            >
              ← Retounen nan {pillar.title}
            </Link>
            <button
              onClick={() => {
                setIdx(0);
                setAnswers([]);
                setAnswered(false);
                setFinished(false);
                setCelebrate(false);
              }}
              className="w-full bg-cream-dark border border-cream-border text-navy font-serif font-bold py-4 rounded-2xl hover:border-navy transition-colors"
            >
              🔄 Eseye Ankò
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link
        href={`/pilye/${params.slug}`}
        className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4"
      >
        ← {pillar.title}
      </Link>

      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-gold font-bold uppercase tracking-wide">
            Quiz · Pilye {pillar.number}
          </p>
          <h1 className="font-serif text-xl font-bold text-navy">{pillar.title}</h1>
        </div>
        <p className="text-text-muted font-serif text-sm">
          {idx + 1}/{total}
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-cream-border rounded-full mb-6">
        <div
          className="h-full bg-gold rounded-full transition-all"
          style={{ width: `${((idx) / total) * 100}%` }}
        />
      </div>

      <QuizQuestion question={question} onAnswer={handleAnswer} />

      {answered && (
        <button
          onClick={handleNext}
          className="w-full mt-5 bg-navy text-gold font-serif font-bold py-4 rounded-2xl hover:bg-navy-light transition-colors"
        >
          {isLast ? "Wè Rezilta →" : "Kesyon Swivan →"}
        </button>
      )}
    </div>
  );
}
