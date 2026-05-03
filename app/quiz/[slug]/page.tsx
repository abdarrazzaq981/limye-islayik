"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PILLARS } from "@/data/pillars";
import { recordQuestionAttempt, saveQuizScore } from "@/lib/storage";
import type { Confidence, MistakeType } from "@/lib/storage";
import QuizQuestion from "@/components/QuizQuestion";
import CelebrationOverlay from "@/components/CelebrationOverlay";
import { ConfidencePrompt } from "@/components/ConfidencePrompt";
import { MistakeTypePrompt } from "@/components/MistakeTypePrompt";

export default function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pillar = PILLARS.find((p) => p.slug === slug);
  if (!pillar || pillar.quiz.length === 0) notFound();

  type Phase = "answering" | "confidence" | "mistake" | "ready";

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [phase, setPhase] = useState<Phase>("answering");
  const [pendingAttempt, setPendingAttempt] = useState<{
    correct: boolean;
    selectedIdx: number;
    confidence: Confidence | null;
    mistakeType: MistakeType | null;
  } | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = pillar.quiz[idx];
  const isLast = idx === pillar.quiz.length - 1;

  const handleAnswer = (correct: boolean, selectedIdx: number) => {
    setAnswers((a) => [...a, correct]);
    setPendingAttempt({ correct, selectedIdx, confidence: null, mistakeType: null });
    setPhase("confidence");
  };

  const handleConfidence = (confidence: Confidence) => {
    if (!pendingAttempt) return;
    const next = { ...pendingAttempt, confidence };
    setPendingAttempt(next);
    if (!next.correct) {
      setPhase("mistake");
    } else {
      commitAttempt(next);
      setPhase("ready");
    }
  };

  const handleMistake = (mistakeType: MistakeType | null) => {
    if (!pendingAttempt) return;
    const next = { ...pendingAttempt, mistakeType };
    commitAttempt(next);
    setPhase("ready");
  };

  const commitAttempt = (attempt: NonNullable<typeof pendingAttempt>) => {
    recordQuestionAttempt({
      questionId: `${slug}:${idx}`,
      pillarSlug: slug,
      correct: attempt.correct,
      confidence: attempt.confidence,
      mistakeType: attempt.mistakeType,
      mode: "practice",
      userAnswerIndex: attempt.selectedIdx,
      correctAnswerIndex: question.correct,
    });
  };

  const handleNext = () => {
    if (isLast) {
      const correctCount = answers.filter(Boolean).length;
      const score = Math.round((correctCount / pillar.quiz.length) * 100);
      saveQuizScore(slug, "main", score);
      if (score >= 80) setCelebrate(true);
      setFinished(true);
    } else {
      setIdx((i) => i + 1);
      setPhase("answering");
      setPendingAttempt(null);
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
              href={`/pilye/${slug}`}
              className="block bg-navy text-gold font-serif font-bold py-4 rounded-2xl text-center hover:bg-navy-light transition-colors"
            >
              ← Retounen nan {pillar.title}
            </Link>
            <button
              onClick={() => {
                setIdx(0);
                setAnswers([]);
                setPhase("answering");
                setPendingAttempt(null);
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
        href={`/pilye/${slug}`}
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

      {phase === "confidence" && <ConfidencePrompt onSelect={handleConfidence} />}

      {phase === "mistake" && (
        <MistakeTypePrompt
          onSelect={handleMistake}
          onSkip={() => handleMistake(null)}
        />
      )}

      {phase === "ready" && (
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
