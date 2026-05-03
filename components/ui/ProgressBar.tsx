interface Props {
  percent: number;
  label?: string;
  className?: string;
  tone?: "gold" | "green";
}

export function ProgressBar({ percent, label, className = "", tone = "gold" }: Props) {
  const clamped = Math.max(0, Math.min(100, percent));
  const fill = tone === "green" ? "bg-green" : "bg-gold";
  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between text-xs font-serif text-text-muted mb-1.5">
          <span>{label}</span>
          <span className="font-bold text-navy">{Math.round(clamped)}%</span>
        </div>
      )}
      <div
        className="h-1.5 bg-cream-border rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "progress"}
      >
        <div
          className={`h-full ${fill} rounded-full transition-all duration-500`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
