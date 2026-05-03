import type { ReactNode } from "react";

export function EmptyState({
  emoji = "🌙",
  title,
  description,
  action,
}: {
  emoji?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="text-center py-10 px-4">
      <div className="text-4xl mb-3" aria-hidden="true">
        {emoji}
      </div>
      <h2 className="font-serif text-lg font-bold text-navy mb-2">{title}</h2>
      {description && (
        <p className="text-text-muted font-serif text-sm mb-5 max-w-sm mx-auto">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
