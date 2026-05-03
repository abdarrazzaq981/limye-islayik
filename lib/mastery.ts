import type { AppProgress, MistakeType, QuestionStat } from "./storage";
import { PILLARS } from "@/data/pillars";

/**
 * Mastery and readiness computations. Pure functions over an AppProgress
 * snapshot so they're cheap to call from useEffect or a hook.
 *
 * See docs/limye-islayik-master-prompt.md §8 (mastery) and §14 (readiness).
 */

export interface PillarMastery {
  slug: string;
  title: string;
  accuracy: number; // 0–100
  questionsSeen: number;
  questionsMastered: number;
  weaknessScore: number; // 0–100, higher = weaker
}

export function pillarMastery(progress: AppProgress, pillarSlug: string): PillarMastery {
  const pillar = PILLARS.find((p) => p.slug === pillarSlug);
  const questionIds = pillar?.quiz.map((q, i) => `${pillarSlug}:${i}`) ?? [];
  const stats = questionIds
    .map((id) => progress.questionStats[id])
    .filter(Boolean) as QuestionStat[];

  const seen = stats.length;
  const mastered = stats.filter((s) => s.masteryLevel === "Mèt").length;
  const totalCorrect = stats.reduce((n, s) => n + s.timesCorrect, 0);
  const totalAttempts = stats.reduce((n, s) => n + s.timesSeen, 0);
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
  const weaknessScore = totalAttempts > 0 ? 100 - accuracy : 100;

  return {
    slug: pillarSlug,
    title: pillar?.title ?? pillarSlug,
    accuracy,
    questionsSeen: seen,
    questionsMastered: mastered,
    weaknessScore,
  };
}

export function readinessScore(progress: AppProgress): number {
  const pillars = PILLARS.map((p) => pillarMastery(progress, p.slug));
  const seenPillars = pillars.filter((p) => p.questionsSeen > 0);
  if (seenPillars.length === 0) return 0;

  const avgAccuracy = seenPillars.reduce((n, p) => n + p.accuracy, 0) / seenPillars.length;
  const masteredFraction =
    seenPillars.reduce((n, p) => n + p.questionsMastered, 0) /
    Math.max(1, seenPillars.reduce((n, p) => n + p.questionsSeen, 0));
  const pillarsCovered = seenPillars.length / PILLARS.length;
  const streakBonus = Math.min(progress.streak / 30, 1);

  const score =
    avgAccuracy * 0.5 +
    masteredFraction * 100 * 0.25 +
    pillarsCovered * 100 * 0.15 +
    streakBonus * 100 * 0.1;

  return Math.round(Math.max(0, Math.min(100, score)));
}

export function readinessMessage(score: number): string {
  if (score < 40) return "Ou ap bati fondasyon ou. Konsantre sou Aprann ak Pratik.";
  if (score < 60) return "Ou ap pwogrese — gen kèk kote ki bezwen plis travay.";
  if (score < 75) return "Ou prèske rive. Eseye Repete sa ki fèb ak Tout melanje.";
  if (score < 90) return "Ou solid! Eseye Mòd Egzamen pou wè kote ou ye.";
  return "Ou fò anpil. Kontinye revize pou ou pa bliye.";
}

export function topMistakeType(progress: AppProgress): MistakeType | null {
  const counts = new Map<MistakeType, number>();
  for (const m of progress.mistakeJournal) {
    if (!m.mistakeType || m.resolved) continue;
    counts.set(m.mistakeType, (counts.get(m.mistakeType) ?? 0) + 1);
  }
  let best: MistakeType | null = null;
  let bestN = 0;
  for (const [k, n] of counts) {
    if (n > bestN) {
      best = k;
      bestN = n;
    }
  }
  return best;
}

export const mistakeTypeLabels: Record<MistakeType, string> = {
  definisyon: "Mwen pa t konnen definisyon an",
  konprann: "Mwen pa t konprann kesyon an",
  konfonn: "Mwen te konfonn de konsèp",
  bliye: "Mwen te bliye règ la",
  "twò vit": "Mwen te ale twò vit",
  devine: "Mwen te devine",
  pyèj: "Yo te pyeje m",
  detay: "Mwen rate yon ti detay",
  revize: "Mwen bezwen revize leson an",
};

export function weakestPillar(progress: AppProgress): PillarMastery | null {
  const all = PILLARS.map((p) => pillarMastery(progress, p.slug)).filter(
    (p) => p.questionsSeen > 0
  );
  if (all.length === 0) return null;
  return all.sort((a, b) => b.weaknessScore - a.weaknessScore)[0];
}
