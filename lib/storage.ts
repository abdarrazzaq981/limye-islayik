"use client";

export interface PillarProgress {
  lessonsCompleted: string[];
  quizScores: Record<string, number>;
  badgeEarned: boolean;
  lastVisited: string | null;
}

export interface AppProgress {
  pillars: Record<string, PillarProgress>;
  streak: number;
  lastStudyDate: string | null;
  totalLessonsCompleted: number;
}

const STORAGE_KEY = "limye_islayik_progress";

const defaultProgress: AppProgress = {
  pillars: {},
  streak: 0,
  lastStudyDate: null,
  totalLessonsCompleted: 0,
};

export function getProgress(): AppProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultProgress, ...JSON.parse(raw) } : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: AppProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(pillarSlug: string, lessonId: string): AppProgress {
  const progress = getProgress();
  if (!progress.pillars[pillarSlug]) {
    progress.pillars[pillarSlug] = {
      lessonsCompleted: [],
      quizScores: {},
      badgeEarned: false,
      lastVisited: null,
    };
  }
  const pillar = progress.pillars[pillarSlug];
  if (!pillar.lessonsCompleted.includes(lessonId)) {
    pillar.lessonsCompleted.push(lessonId);
    progress.totalLessonsCompleted += 1;
  }
  pillar.lastVisited = new Date().toISOString();

  // Update streak
  const today = new Date().toDateString();
  if (progress.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    progress.streak = progress.lastStudyDate === yesterday ? progress.streak + 1 : 1;
    progress.lastStudyDate = today;
  }

  saveProgress(progress);
  return progress;
}

export function saveQuizScore(pillarSlug: string, quizId: string, score: number): AppProgress {
  const progress = getProgress();
  if (!progress.pillars[pillarSlug]) {
    progress.pillars[pillarSlug] = {
      lessonsCompleted: [],
      quizScores: {},
      badgeEarned: false,
      lastVisited: null,
    };
  }
  progress.pillars[pillarSlug].quizScores[quizId] = score;
  saveProgress(progress);
  return progress;
}

export function earnBadge(pillarSlug: string): AppProgress {
  const progress = getProgress();
  if (progress.pillars[pillarSlug]) {
    progress.pillars[pillarSlug].badgeEarned = true;
  }
  saveProgress(progress);
  return progress;
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
