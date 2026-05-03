"use client";

import type { MistakeType } from "@/lib/storage";
import { mistakeTypeLabels } from "@/lib/mastery";

const ORDER: MistakeType[] = [
  "definisyon",
  "konprann",
  "konfonn",
  "bliye",
  "twò vit",
  "devine",
  "pyèj",
  "detay",
  "revize",
];

export function MistakeTypePrompt({
  onSelect,
  onSkip,
}: {
  onSelect: (m: MistakeType) => void;
  onSkip?: () => void;
}) {
  return (
    <div className="bg-white border border-cream-border rounded-2xl p-4 mt-4">
      <p className="font-serif text-navy font-bold text-sm mb-3">
        Poukisa ou te rate sa? <span className="text-text-muted font-normal">(opsyonèl)</span>
      </p>
      <div className="space-y-1.5">
        {ORDER.map((k) => (
          <button
            key={k}
            onClick={() => onSelect(k)}
            className="w-full text-left bg-cream-dark border border-cream-border rounded-xl py-2.5 px-3 hover:border-gold transition-colors font-serif text-sm text-navy"
          >
            {mistakeTypeLabels[k]}
          </button>
        ))}
      </div>
      {onSkip && (
        <button
          onClick={onSkip}
          className="w-full mt-3 text-xs text-text-muted font-serif hover:text-navy"
        >
          Pase pou kounye a →
        </button>
      )}
    </div>
  );
}
