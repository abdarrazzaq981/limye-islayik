import type { ReactNode } from "react";

type Level = 1 | 2 | 3 | 4;

const sizeClasses: Record<Level, string> = {
  1: "text-[var(--text-2xl)] sm:text-[var(--text-3xl)]",
  2: "text-[var(--text-xl)] sm:text-[var(--text-2xl)]",
  3: "text-[var(--text-lg)] sm:text-[var(--text-xl)]",
  4: "text-[var(--text-base)] sm:text-[var(--text-lg)]",
};

export function Heading({
  level = 1,
  children,
  className = "",
  eyebrow,
}: {
  level?: Level;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
}) {
  const Tag = (`h${level}`) as "h1" | "h2" | "h3" | "h4";
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs text-gold font-bold uppercase tracking-wide mb-1">
          {eyebrow}
        </p>
      )}
      <Tag className={`font-serif font-bold text-navy ${sizeClasses[level]}`}>
        {children}
      </Tag>
    </div>
  );
}
