/**
 * Hand-authored line-art illustrations for the 8 salat positions.
 * Pure inline SVG, modest figures, no facial detail.
 * See docs/limye-islayik-master-prompt.md §17.
 */

const STROKE = "currentColor";
const ACCENT = "var(--color-gold)";

const baseProps = {
  width: "180",
  height: "180",
  viewBox: "0 0 220 220",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img" as const,
};

function Mat() {
  // Prayer mat baseline
  return (
    <g stroke={ACCENT} strokeWidth="2" opacity="0.6">
      <path d="M30 200 h160" />
      <path d="M40 200 v -4 M60 200 v -4 M80 200 v -4 M100 200 v -4 M120 200 v -4 M140 200 v -4 M160 200 v -4 M180 200 v -4" />
    </g>
  );
}

const positions: Record<number, React.ReactNode> = {
  // 1 — Takbiratul Ihram: hands raised to ears
  1: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="110" cy="50" r="18" />
      {/* Body */}
      <path d="M92 70 q-4 70 0 130 h36 q4 -60 0 -130" />
      {/* Arms raised to ear level */}
      <path d="M92 70 q -22 -4 -28 -22" />
      <path d="M128 70 q 22 -4 28 -22" />
      {/* Hands open */}
      <path d="M62 46 q -4 -2 -2 -8" />
      <path d="M158 46 q 4 -2 2 -8" />
      <Mat />
      <text x="110" y="40" textAnchor="middle" fontSize="9" fill={ACCENT} fontFamily="Georgia">ﷲ</text>
    </g>
  ),
  // 2 — Qiyam: hands folded on chest
  2: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="110" cy="50" r="18" />
      <path d="M92 70 q-4 70 0 130 h36 q4 -60 0 -130" />
      {/* Folded hands at chest */}
      <path d="M92 80 q 18 14 36 0" />
      <path d="M100 90 q 10 6 20 0" stroke={ACCENT} />
      <Mat />
    </g>
  ),
  // 3 — Ruku: bowing 90°
  3: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Head bowed forward */}
      <circle cx="62" cy="92" r="18" />
      {/* Back horizontal */}
      <path d="M80 92 q 60 -6 90 0 q 6 0 0 18 q -50 6 -90 0 q -8 -2 0 -18 z" />
      {/* Legs */}
      <path d="M150 110 v 90 M170 110 v 90" />
      <path d="M120 110 v 90 M140 110 v 90" stroke={ACCENT} opacity="0.5" />
      {/* Hands on knees */}
      <path d="M150 116 q -6 6 -2 14" />
      <Mat />
    </g>
  ),
  // 4 — I'tidal: standing back up, arms at sides
  4: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="110" cy="50" r="18" />
      <path d="M92 70 q-4 70 0 130 h36 q4 -60 0 -130" />
      <path d="M86 74 q -10 30 -8 70" />
      <path d="M134 74 q 10 30 8 70" />
      <Mat />
    </g>
  ),
  // 5 — Sujud: prostration, forehead to ground
  5: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Head down at mat */}
      <circle cx="60" cy="178" r="14" />
      {/* Back arching up to hips */}
      <path d="M74 178 q 40 -50 80 -10" />
      <path d="M74 192 q 40 -32 80 0" />
      {/* Hands flat by head */}
      <path d="M44 198 q -6 -8 0 -14" />
      <path d="M76 198 q -6 -8 0 -14" />
      {/* Folded legs */}
      <path d="M154 168 q 30 22 30 32" />
      <Mat />
      <text x="60" y="170" textAnchor="middle" fontSize="9" fill={ACCENT} fontFamily="Georgia">سجود</text>
    </g>
  ),
  // 6 — Julus: sitting between sujuds
  6: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="110" cy="80" r="18" />
      {/* Sitting torso */}
      <path d="M92 100 q -2 30 0 50" />
      <path d="M128 100 q 2 30 0 50" />
      <path d="M88 150 q 30 8 44 0" />
      {/* Folded leg under */}
      <path d="M88 150 q -10 30 30 50 h 30 q -2 -10 -10 -14" />
      <Mat />
    </g>
  ),
  // 7 — Tashahhud: sitting, index finger raised
  7: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="110" cy="80" r="18" />
      <path d="M92 100 q -2 30 0 50" />
      <path d="M128 100 q 2 30 0 50" />
      <path d="M88 150 q 30 8 44 0" />
      <path d="M88 150 q -10 30 30 50 h 30 q -2 -10 -10 -14" />
      {/* Hand on knee, index up */}
      <path d="M132 132 l 8 -2" stroke={ACCENT} strokeWidth="3" />
      <circle cx="142" cy="128" r="2" fill={ACCENT} />
      <Mat />
    </g>
  ),
  // 8 — Tasleem: turning head right
  8: (
    <g stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="118" cy="80" r="18" />
      {/* Subtle motion arc indicating turn */}
      <path d="M126 60 q 14 0 24 14" stroke={ACCENT} strokeDasharray="3 3" opacity="0.7" />
      <path d="M92 100 q -2 30 0 50" />
      <path d="M128 100 q 2 30 0 50" />
      <path d="M88 150 q 30 8 44 0" />
      <path d="M88 150 q -10 30 30 50 h 30 q -2 -10 -10 -14" />
      <Mat />
    </g>
  ),
};

export function SalatStepIllustration({
  positionId,
  className = "",
  ariaLabel,
}: {
  positionId: number;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      {...baseProps}
      className={className}
      aria-label={ariaLabel ?? `Salat pozisyon ${positionId}`}
    >
      {positions[positionId] ?? <Mat />}
    </svg>
  );
}
