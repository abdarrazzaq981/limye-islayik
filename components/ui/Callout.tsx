import type { ReactNode } from "react";

type Tone = "info" | "warning" | "success" | "mistake";

const toneStyles: Record<Tone, { border: string; bg: string; label: string; emoji: string }> = {
  info:    { border: "border-[var(--color-info)]",    bg: "bg-blue-50",  label: "text-[var(--color-info)]",    emoji: "💡" },
  warning: { border: "border-gold",                   bg: "bg-amber-50", label: "text-[var(--color-gold-muted)]", emoji: "⚠️" },
  success: { border: "border-green",                  bg: "bg-green/10", label: "text-green",                  emoji: "✓" },
  mistake: { border: "border-[var(--color-error)]",   bg: "bg-red-50",   label: "text-[var(--color-error)]",   emoji: "✗" },
};

export function Callout({
  tone = "info",
  title,
  children,
  className = "",
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  const s = toneStyles[tone];
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} rounded-r-xl p-4 ${className}`}>
      {title && (
        <p className={`text-xs font-bold uppercase tracking-wide mb-1.5 ${s.label}`}>
          <span aria-hidden="true">{s.emoji}</span> {title}
        </p>
      )}
      <div className="font-serif text-text-secondary text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
