import { getProgress } from "./storage";
import { PILLARS } from "@/data/pillars";

export function getPillarCompletionPercent(pillarSlug: string): number {
  const progress = getProgress();
  const pillarData = PILLARS.find((p) => p.slug === pillarSlug);
  if (!pillarData) return 0;
  const totalLessons = pillarData.lessons.length;
  if (totalLessons === 0) return 0;
  const completed = progress.pillars[pillarSlug]?.lessonsCompleted.length ?? 0;
  return Math.round((completed / totalLessons) * 100);
}

export function getNextLesson(): { pillarSlug: string; lessonId: string } | null {
  const progress = getProgress();
  for (const pillar of PILLARS) {
    const completed = progress.pillars[pillar.slug]?.lessonsCompleted ?? [];
    const next = pillar.lessons.find((l) => !completed.includes(l.id));
    if (next) return { pillarSlug: pillar.slug, lessonId: next.id };
  }
  return null;
}

export function isPillarComplete(pillarSlug: string): boolean {
  return getPillarCompletionPercent(pillarSlug) === 100;
}

export function getOverallPercent(): number {
  const percents = PILLARS.map((p) => getPillarCompletionPercent(p.slug));
  if (percents.length === 0) return 0;
  return Math.round(percents.reduce((a, b) => a + b, 0) / percents.length);
}
