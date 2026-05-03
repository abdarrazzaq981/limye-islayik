"use client";

import { useState } from "react";
import type { QuizQuestion as Q } from "@/data/pillars";

const ENCOURAGEMENTS_WRONG = [
  "Pa dekouraje! Chak erè se yon leson. Eseye ankò!",
  "Pa gen pwoblèm — aprann pran tan li. Ou ka fè sa!",
  "Bon efò! Yon fwa ankò ou pral jwenn li.",
];

interface Props {
  question: Q;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({ question, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    onAnswer(idx === question.correct);
  };

  const isCorrect = selected === question.correct;
  const wrongMsg =
    ENCOURAGEMENTS_WRONG[Math.floor(Math.random() * ENCOURAGEMENTS_WRONG.length)];

  return (
    <div className="space-y-4">
      <p className="font-serif text-lg text-navy leading-relaxed">{question.question}</p>

      <div className="space-y-2">
        {question.choices.map((choice, idx) => {
          let bg = "bg-white border-cream-border hover:border-navy";
          if (revealed) {
            if (idx === question.correct) bg = "bg-green/10 border-green";
            else if (idx === selected) bg = "bg-red-50 border-red-400";
            else bg = "bg-white border-cream-border opacity-50";
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 font-serif text-sm transition-all ${bg}`}
            >
              <span className="font-bold text-gold mr-2">
                {String.fromCharCode(65 + idx)}.
              </span>
              {choice}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div
          className={`rounded-xl p-4 border ${
            isCorrect
              ? "bg-green/10 border-green"
              : "bg-amber-50 border-amber-300"
          }`}
        >
          <p className="font-bold font-serif text-sm mb-1">
            {isCorrect ? `✓ ${question.encouragement}` : `✗ ${wrongMsg}`}
          </p>
          <p className="text-sm text-text-secondary font-serif leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
