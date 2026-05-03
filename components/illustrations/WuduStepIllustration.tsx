/**
 * Hand-authored line-art illustrations for the 9 wudu steps.
 * Pure inline SVG, no external assets, theme-aware via currentColor + brand vars.
 * Modest figures (no facial detail). Stroke-only line art with gold accent details.
 *
 * Replaces the emoji-in-a-circle "illustrations" that made the wudu page feel amateur.
 * See docs/limye-islayik-master-prompt.md §17 for imagery rules.
 */

const STROKE = "currentColor";
const ACCENT = "var(--color-gold)";
const WATER = "var(--color-info)";

const baseProps = {
  width: "180",
  height: "180",
  viewBox: "0 0 200 200",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img" as const,
};

function Drop({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <path
      d={`M${x} ${y} q -${4 * scale} ${5 * scale} 0 ${10 * scale} q ${4 * scale} -${5 * scale} 0 -${10 * scale} z`}
      fill={WATER}
      opacity="0.7"
    />
  );
}

/* Each illustration shares a baseline figure: head + torso + folded shawl. */
function Figure({ children }: { children?: React.ReactNode }) {
  return (
    <g stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Head */}
      <circle cx="100" cy="48" r="20" />
      {/* Neck */}
      <path d="M93 66 v6 M107 66 v6" />
      {/* Shoulders / shawl drape */}
      <path d="M60 82 q40 -14 80 0" />
      {/* Torso/robe outline */}
      <path d="M62 82 q-6 50 -2 80 h80 q4 -30 -2 -80" />
      {/* Robe centerline pleat */}
      <path d="M100 82 v82" stroke={ACCENT} strokeDasharray="3 4" opacity="0.5" />
      {children}
    </g>
  );
}

const illustrations: Record<number, React.ReactNode> = {
  // 1 — Niyyah + Bismillah: open palms at chest level
  1: (
    <>
      <Figure>
        <path d="M75 110 q15 -20 25 -20 q10 0 25 20" />
        <path d="M70 112 q-3 8 0 12 h10 q3 -4 0 -12" />
        <path d="M120 112 q3 8 0 12 h10 q-3 -4 0 -12" />
        <path d="M82 116 v6 M88 116 v6 M112 116 v6 M118 116 v6" />
      </Figure>
      <text x="100" y="178" textAnchor="middle" fontSize="11" fill={ACCENT} fontFamily="Georgia, serif" fontStyle="italic">
        ﷽
      </text>
    </>
  ),
  // 2 — Wash hands: hands under water stream
  2: (
    <>
      <Figure>
        <path d="M70 100 l 0 30 q 0 6 6 8 q 28 6 48 0 q 6 -2 6 -8 v -30" />
        <path d="M84 138 v -10 M92 140 v -12 M100 142 v -12 M108 140 v -12 M116 138 v -10" />
      </Figure>
      <Drop x={94} y={70} />
      <Drop x={104} y={64} />
      <Drop x={100} y={86} scale={0.7} />
    </>
  ),
  // 3 — Rinse mouth: cupped hand to face
  3: (
    <>
      <Figure>
        <path d="M82 92 q 8 -8 18 -8 q 10 0 18 8 q -2 8 -10 10 q -8 2 -16 0 q -8 -2 -10 -10 z" />
        <path d="M100 56 q -3 4 0 7 q 3 -3 0 -7" stroke={WATER} fill={WATER} opacity="0.8" />
      </Figure>
      <Drop x={80} y={120} scale={0.6} />
      <Drop x={120} y={122} scale={0.6} />
    </>
  ),
  // 4 — Inhale water through nose
  4: (
    <>
      <Figure>
        <path d="M85 76 q 10 -8 30 0" />
        <circle cx="100" cy="50" r="2" fill={WATER} />
        <path d="M100 38 q -2 -6 0 -10" stroke={WATER} opacity="0.6" />
      </Figure>
      <Drop x={86} y={100} scale={0.7} />
      <Drop x={114} y={100} scale={0.7} />
    </>
  ),
  // 5 — Wash face: both hands cupping the face
  5: (
    <>
      <Figure>
        <path d="M68 56 q 14 14 32 14 q 18 0 32 -14" />
        <path d="M70 60 q -2 6 4 12" />
        <path d="M130 60 q 2 6 -4 12" />
      </Figure>
      <Drop x={82} y={90} scale={0.6} />
      <Drop x={118} y={90} scale={0.6} />
    </>
  ),
  // 6 — Wash arm: one hand gripping the opposite forearm
  6: (
    <>
      <Figure>
        <path d="M65 105 l 10 -8 l 50 14 l -8 12 z" />
        <path d="M75 97 q -10 -2 -14 6" />
        <path d="M125 111 q 10 4 14 -4" />
      </Figure>
      <Drop x={70} y={90} scale={0.5} />
      <Drop x={132} y={108} scale={0.5} />
    </>
  ),
  // 7 — Wipe head: both hands meeting on top of head
  7: (
    <>
      <Figure>
        <path d="M76 36 q 24 -14 48 0" stroke={ACCENT} strokeWidth="2.5" />
        <path d="M68 38 l 14 0 l 4 6" />
        <path d="M132 38 l -14 0 l -4 6" />
      </Figure>
      <Drop x={100} y={20} scale={0.6} />
    </>
  ),
  // 8 — Clean ears: thumb to ear, finger behind
  8: (
    <>
      <Figure>
        <ellipse cx="80" cy="48" rx="3" ry="6" stroke={ACCENT} fill="none" />
        <ellipse cx="120" cy="48" rx="3" ry="6" stroke={ACCENT} fill="none" />
        <path d="M68 48 l 6 -2 l 2 4" />
        <path d="M132 48 l -6 -2 l -2 4" />
      </Figure>
    </>
  ),
  // 9 — Wash feet: water flowing over feet
  9: (
    <>
      <Figure>
        <path d="M80 162 l 14 0 l 4 6 l -14 4 z" />
        <path d="M120 162 l -14 0 l -4 6 l 14 4 z" />
        <path d="M84 158 v -4 M90 158 v -4 M96 158 v -4 M104 158 v -4 M110 158 v -4 M116 158 v -4" />
      </Figure>
      <Drop x={88} y={140} scale={0.6} />
      <Drop x={112} y={140} scale={0.6} />
    </>
  ),
};

export function WuduStepIllustration({
  stepId,
  className = "",
  ariaLabel,
}: {
  stepId: number;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      {...baseProps}
      className={className}
      aria-label={ariaLabel ?? `Wudu etap ${stepId}`}
    >
      {illustrations[stepId] ?? (
        <Figure>
          <Drop x={100} y={100} />
        </Figure>
      )}
    </svg>
  );
}
