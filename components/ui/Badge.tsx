import type { ReactNode } from "react";

type Tone = "neutral" | "gold" | "green" | "navy" | "warning" | "info";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-cream-dark text-navy border-cream-border",
  gold: "bg-gold/15 text-[var(--color-gold-muted)] border-gold/30",
  green: "bg-green/10 text-green border-green/30",
  navy: "bg-navy text-gold border-navy",
  warning: "bg-amber-50 text-[var(--color-warning)] border-amber-200",
  info: "bg-blue-50 text-[var(--color-info)] border-blue-200",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-serif font-bold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
