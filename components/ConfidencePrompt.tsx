"use client";

import type { Confidence } from "@/lib/storage";

const OPTIONS: { value: Confidence; label: string; emoji: string }[] = [
  { value: "devine", label: "Mwen te devine", emoji: "🤷" },
  { value: "ti jan sèten", label: "Yon ti jan sèten", emoji: "🤔" },
  { value: "byen sèten", label: "Byen sèten", emoji: "💪" },
];

export function ConfidencePrompt({
  onSelect,
}: {
  onSelect: (c: Confidence) => void;
}) {
  return (
    <div className="bg-white border border-cream-border rounded-2xl p-4 mt-4">
      <p className="font-serif text-navy font-bold text-sm mb-3 text-center">
        Konbyen ou te sèten?
      </p>
      <div className="grid grid-cols-3 gap-2">
        {OPTIONS.map((o) => (
          <button
            key={o.value}
            onClick={() => onSelect(o.value)}
            className="bg-cream-dark border border-cream-border rounded-xl py-3 px-2 hover:border-gold transition-colors"
          >
            <div className="text-xl mb-1" aria-hidden="true">
              {o.emoji}
            </div>
            <p className="font-serif text-xs text-navy leading-tight">{o.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
