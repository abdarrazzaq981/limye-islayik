export function LoadingSkeleton({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 animate-pulse ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-cream-dark rounded"
          style={{ width: `${100 - i * 12}%` }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-white border border-cream-border rounded-2xl p-5 animate-pulse ${className}`} aria-hidden="true">
      <div className="h-5 bg-cream-dark rounded w-2/3 mb-3" />
      <div className="h-4 bg-cream-dark rounded w-full mb-2" />
      <div className="h-4 bg-cream-dark rounded w-5/6" />
    </div>
  );
}
