"use client";

/**
 * localStorage-backed progress store with versioned schema and change events.
 * Designed so a future Supabase implementation can satisfy the same surface
 * (read / write / subscribe) without touching pages.
 *
 * See docs/limye-islayik-master-prompt.md §19 (data controls) and §8 (mastery).
 */

export type MasteryLevel =
  | "Pa wè"
  | "Ap aprann"
  | "Ap revize"
  | "Solid"
  | "Mèt";

export type Confidence = "devine" | "ti jan sèten" | "byen sèten";

export type MistakeType =
  | "definisyon"
  | "konprann"
  | "konfonn"
  | "bliye"
  | "twò vit"
  | "devine"
  | "pyèj"
  | "detay"
  | "revize";

export interface QuestionStat {
  timesSeen: number;
  timesCorrect: number;
  timesWrong: number;
  lastAnsweredISO: string | null;
  lastCorrectISO: string | null;
  lastWrongISO: string | null;
  correctStreak: number;
  lastConfidence: Confidence | null;
  lastMistakeType: MistakeType | null;
  correctInExamMode: boolean;
  correctInMixedMode: boolean;
  masteryLevel: MasteryLevel;
}

export interface MistakeJournalEntry {
  questionId: string;
  pillarSlug: string;
  dateISO: string;
  userAnswerIndex: number;
  correctAnswerIndex: number;
  confidence: Confidence | null;
  mistakeType: MistakeType | null;
  notes?: string;
  resolved?: boolean;
}

export interface PillarProgress {
  lessonsCompleted: string[];
  quizScores: Record<string, number>;
  badgeEarned: boolean;
  lastVisited: string | null;
}

export interface AppProgress {
  version: 1;
  pillars: Record<string, PillarProgress>;
  questionStats: Record<string, QuestionStat>;
  mistakeJournal: MistakeJournalEntry[];
  streak: number;
  lastStudyDate: string | null;
  totalLessonsCompleted: number;
  settings: {
    theme: "auto" | "light" | "dark";
    unlockAllLevels: boolean;
  };
}

const STORAGE_KEY = "limye_islayik_progress";
const CHANGE_EVENT = "limye:progress-changed";

const defaultProgress: AppProgress = {
  version: 1,
  pillars: {},
  questionStats: {},
  mistakeJournal: [],
  streak: 0,
  lastStudyDate: null,
  totalLessonsCompleted: 0,
  settings: {
    theme: "auto",
    unlockAllLevels: false,
  },
};

const defaultQuestionStat: QuestionStat = {
  timesSeen: 0,
  timesCorrect: 0,
  timesWrong: 0,
  lastAnsweredISO: null,
  lastCorrectISO: null,
  lastWrongISO: null,
  correctStreak: 0,
  lastConfidence: null,
  lastMistakeType: null,
  correctInExamMode: false,
  correctInMixedMode: false,
  masteryLevel: "Pa wè",
};

function migrate(raw: unknown): AppProgress {
  if (!raw || typeof raw !== "object") return defaultProgress;
  const obj = raw as Partial<AppProgress> & Record<string, unknown>;
  // v0 (no version field) → v1: just merge with defaults; old fields are compatible.
  return {
    ...defaultProgress,
    ...obj,
    version: 1,
    pillars: (obj.pillars as Record<string, PillarProgress>) ?? {},
    questionStats: (obj.questionStats as Record<string, QuestionStat>) ?? {},
    mistakeJournal: (obj.mistakeJournal as MistakeJournalEntry[]) ?? [],
    settings: { ...defaultProgress.settings, ...(obj.settings ?? {}) },
  };
}

export function getProgress(): AppProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? migrate(JSON.parse(raw)) : defaultProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: AppProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: progress }));
}

export function subscribeProgress(listener: (p: AppProgress) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (e: Event) => listener((e as CustomEvent<AppProgress>).detail);
  const storageHandler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener(getProgress());
  };
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", storageHandler);
  };
}

function ensurePillar(progress: AppProgress, pillarSlug: string): PillarProgress {
  if (!progress.pillars[pillarSlug]) {
    progress.pillars[pillarSlug] = {
      lessonsCompleted: [],
      quizScores: {},
      badgeEarned: false,
      lastVisited: null,
    };
  }
  return progress.pillars[pillarSlug];
}

function bumpStreak(progress: AppProgress): void {
  const today = new Date().toDateString();
  if (progress.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    progress.streak = progress.lastStudyDate === yesterday ? progress.streak + 1 : 1;
    progress.lastStudyDate = today;
  }
}

export function markLessonComplete(pillarSlug: string, lessonId: string): AppProgress {
  const progress = getProgress();
  const pillar = ensurePillar(progress, pillarSlug);
  if (!pillar.lessonsCompleted.includes(lessonId)) {
    pillar.lessonsCompleted.push(lessonId);
    progress.totalLessonsCompleted += 1;
  }
  pillar.lastVisited = new Date().toISOString();
  bumpStreak(progress);
  saveProgress(progress);
  return progress;
}

export function saveQuizScore(pillarSlug: string, quizId: string, score: number): AppProgress {
  const progress = getProgress();
  const pillar = ensurePillar(progress, pillarSlug);
  pillar.quizScores[quizId] = score;
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
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: defaultProgress }));
}

export interface AttemptInput {
  questionId: string;
  pillarSlug: string;
  correct: boolean;
  confidence: Confidence | null;
  mistakeType?: MistakeType | null;
  mode?: "practice" | "exam" | "mixed" | "review";
  userAnswerIndex?: number;
  correctAnswerIndex?: number;
}

export function recordQuestionAttempt(input: AttemptInput): AppProgress {
  const progress = getProgress();
  const stat: QuestionStat = {
    ...defaultQuestionStat,
    ...(progress.questionStats[input.questionId] ?? {}),
  };
  const now = new Date().toISOString();
  stat.timesSeen += 1;
  stat.lastAnsweredISO = now;
  stat.lastConfidence = input.confidence;
  if (input.correct) {
    stat.timesCorrect += 1;
    stat.lastCorrectISO = now;
    stat.correctStreak += 1;
    stat.lastMistakeType = null;
    if (input.mode === "exam") stat.correctInExamMode = true;
    if (input.mode === "mixed") stat.correctInMixedMode = true;
  } else {
    stat.timesWrong += 1;
    stat.lastWrongISO = now;
    stat.correctStreak = 0;
    stat.lastMistakeType = input.mistakeType ?? null;
  }
  stat.masteryLevel = computeMasteryLevel(stat);
  progress.questionStats[input.questionId] = stat;

  if (
    !input.correct &&
    input.userAnswerIndex !== undefined &&
    input.correctAnswerIndex !== undefined
  ) {
    progress.mistakeJournal.push({
      questionId: input.questionId,
      pillarSlug: input.pillarSlug,
      dateISO: now,
      userAnswerIndex: input.userAnswerIndex,
      correctAnswerIndex: input.correctAnswerIndex,
      confidence: input.confidence,
      mistakeType: input.mistakeType ?? null,
      resolved: false,
    });
  }
  bumpStreak(progress);
  saveProgress(progress);
  return progress;
}

export function resolveMistake(questionId: string): AppProgress {
  const progress = getProgress();
  progress.mistakeJournal = progress.mistakeJournal.map((m) =>
    m.questionId === questionId ? { ...m, resolved: true } : m
  );
  saveProgress(progress);
  return progress;
}

export function updateSettings(patch: Partial<AppProgress["settings"]>): AppProgress {
  const progress = getProgress();
  progress.settings = { ...progress.settings, ...patch };
  saveProgress(progress);
  return progress;
}

export function exportProgressJson(): string {
  return JSON.stringify(getProgress(), null, 2);
}

export function importProgressJson(jsonText: string): { ok: true } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(jsonText);
    const migrated = migrate(parsed);
    saveProgress(migrated);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Pa ka li fichye a" };
  }
}

/* --- Mastery computation (kept here so storage stays self-contained) --- */

function computeMasteryLevel(stat: QuestionStat): MasteryLevel {
  if (stat.timesSeen === 0) return "Pa wè";
  if (stat.timesCorrect === 0) return "Ap aprann";
  if (stat.correctStreak < 2) return "Ap revize";
  const masteredFloor =
    stat.timesCorrect >= 3 &&
    stat.correctStreak >= 3 &&
    (stat.correctInExamMode || stat.correctInMixedMode) &&
    stat.lastConfidence === "byen sèten";
  if (masteredFloor) return "Mèt";
  return "Solid";
}
