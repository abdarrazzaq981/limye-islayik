# Limyè Islayik — Master Prompt

> Long-form spec for building Limyè Islayik ("Islamic Light") — a warm, reverent, gently playful Islamic learning platform in Haitian Creole for brand-new Muslims. Use this document as the single source of truth when starting a fresh build session, briefing a collaborator, or evaluating PRs.

---

## 1. Project Information

| Field | Value |
|---|---|
| **App name** | Limyè Islayik (Krèyol: "Islamic Light") |
| **Subject** | Foundational Islamic practice and belief — the 6 Pillars of Faith, Five Pillars of Islam, Wudu, Salat, basic Quran (memorization + understanding), daily duas, Islamic etiquette. |
| **Primary audience** | **Manmi** (mid-50s Haitian-Creole-speaking woman, brand-new Muslim, low confidence with English/Arabic, comfortable with phones for messaging + browsing). **Kouzen** (early-20s Haitian-American, raised loosely Catholic, exploring Islam, bilingual Krèyol/English). |
| **Secondary audience** | The wider Haitian-Creole-speaking Muslim community — including reverts, born-Muslims learning to practice, and youth who code-switch with English. |
| **Main learning goal** | A new Muslim should, within ~30 days of regular use, be able to: (a) confidently make wudu correctly, (b) pray all 5 obligatory salats with correct sequence and at least Al-Fatiha + one short surah, (c) recite Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas from memory, (d) explain the 6 Pillars of Faith and 5 Pillars of Islam in their own Krèyol words, (e) feel emotionally welcomed into the deen rather than overwhelmed. |
| **Primary language** | **Krèyol Ayisyen** (Haitian Creole) — modern orthography, second-person singular ("ou"), warm and direct. |
| **Sacred-text language** | **Arabic** — Quranic verses, duas, takbir, tashahhud preserved in original Arabic with Amiri font, RTL, full diacritics. |
| **Support languages** | **English** as a secondary toggle for younger bilingual users. **French** is intentionally NOT a default — many older Haitians associate French with colonial and Catholic schooling; Krèyol is the language of warmth here. |
| **Tone** | Warm, reverent, gently playful. Like a kind older sibling who is excited that you're learning, never like a stern shaykh and never like a Saturday-morning cartoon. Lightly gamified (badges, streaks, small confetti moments) but never childish, never irreverent. |
| **Theme** | Modern Islamic — deep emerald green, ivory, antique gold, midnight navy. Sparse arabesque accents and 8-point-star motifs as background ornaments only, never as primary UI. Mobile-first. |
| **Content sources** | Primary: classical Sunni mainstream sources — Quran, Sahih Bukhari/Muslim, traditional fiqh on wudu/salat (Hanafi-leaning since most converts encounter that first, but flagged when madhabs differ). Secondary: vetted Krèyol translations from existing Muslim Haitian content where available; otherwise translated fresh and clearly marked for review. |
| **Special requirements** | RTL Arabic; full diacritics on all Arabic; transliteration in Krèyol orthography (not French); audio-clip placeholders for future recordings; offline-friendly (works on flaky data). |

---

## 2. Main Objective

Build a polished, modern, adaptive learning platform that helps a brand-new Muslim:

1. **Learn** the deen step by step in a language they think and pray in.
2. **Master** the foundational pillars (belief, wudu, salat) before moving to advanced material.
3. **Study** key concepts in a dedicated, no-pressure Learn area (`/aprann`).
4. **Practice** with quizzes by pillar, level, section, or mixed review.
5. **Track** weaknesses, confidence, mistakes, mastery, and readiness over time.
6. **Receive** smart recommended next steps based on their actual performance.
7. **Unlock** higher levels as mastery improves — gently, never punitively.
8. **Export and import** progress locally so they never feel data-locked.
9. **Feel welcomed** — the app should never imply they should already know something.

The app must feel like a serious learning platform, not a quiz toy.

---

## 3. App Structure

A Next.js 16 App Router project. Routes (Krèyol slugs):

| Route | Purpose |
|---|---|
| `/` | Tablo (Dashboard) — readiness score, next recommended action, pillar progress rings, streak, daily verse. |
| `/pilye/[slug]` | Pillar detail — lessons grouped by level/section, pillar quiz CTA, pillar mastery ring. |
| `/pilye/[slug]/[lecon]` | Lesson — explanation, key terms, Arabic+Krèyol+transliteration, common mistakes, memory tips, "Mark reviewed" + "Quiz this lesson" + "Eksplike pi senp" (Explain simpler). |
| `/aprann` | Learn Mode — concept library, browseable by pillar/level/section, no quizzes by default. |
| `/quiz/[slug]` | Quiz — Practice Mode by default, with Exam toggle. Per-question confidence prompt; on wrong, mistake-type prompt. |
| `/revize` | Mistake Review — re-attempt previously-missed questions; shows your old mistake type and asks if you understand it now. |
| `/wudu` | Wudu step-through — clean SVG line-art illustrations for each step, Arabic dua, Krèyol meaning, "what breaks wudu" reference. |
| `/salat` | Salat step-through — prayer-times card (location-based, with manual fallback), step-by-step positions with SVG illustrations, what to recite at each. |
| `/sourates` | Surah index — all 114 listed; authored ones expand into Arabic + transliteration + Krèyol meaning + when-to-recite + memorization helpers. |
| `/sourates/[slug]` | Single surah view (used when content depth warrants it). |
| `/pwogre` | Progress & Analytics — readiness score, mastery breakdown, weakest pillar/topic, mistake-pattern insights, streak history, badges earned. |
| `/paramèt` | Settings — theme (auto/light/dark), language toggle (Krèyol / English), audio on/off, export progress as JSON, import from JSON, reset (with confirmation), "unlock all levels" dev toggle. |

A persistent `BottomNav` covers the 5 most-used routes: Tablo, Aprann, Sourates, Wudu/Salat (combined "Pratik"), Pwogrè. `/paramèt` lives behind a gear icon in the header.

---

## 4. Pillars, Levels, Sections, Concepts, Questions

Hierarchy:

```
Pillar (e.g. "Salat — Lapriyè")
└── Level (1–5, progressively harder)
    └── Section (e.g. "Pozisyon yo nan lapriyè")
        ├── Concepts (study cards in /aprann)
        └── Questions (quiz items)
```

### The 6 Pillars (existing taxonomy, do not rename slugs)

| # | Slug | Krèyol title | English shorthand |
|---|---|---|---|
| 1 | `sa-islam-ye` | Sa Islam ye | What Islam is |
| 2 | `wudu` | Wudu | Ablution |
| 3 | `salat` | Lapriyè (Salat) | Prayer |
| 4 | `koran` | Koran | Quran |
| 5 | `zakah-sawm-hajj` | Zakat, Jèn, Hajj | Charity, Fasting, Pilgrimage |
| 6 | `lavi-chak-jou` | Lavi chak jou | Daily life as a Muslim |

### Level structure (every pillar)

- **Level 1: Fondasyon** — what it is, why it matters, the absolute basics in one paragraph.
- **Level 2: Règ debaz** — core rules a beginner must know to practice correctly.
- **Level 3: Rekonèt** — recognition — can the learner tell correct from incorrect when shown examples?
- **Level 4: Aplikasyon** — applying it: making wudu themselves, praying themselves, reciting themselves.
- **Level 5: Mèt rasin** — mastery and edge cases (what if you forget a rakah, what breaks fasting in unusual cases, etc.).

Every section provides: title, short explanation, key Arabic/Krèyol terms, examples, common mistakes ("Erè moun konn fè"), memory tips ("Ti trik pou sonje"), mini-check questions, "Quiz this section" button.

### Level-unlock rules (gentler than the universal spec — these users are brand-new)

- Level 1: unlocked from day one.
- Level 2: unlocks at **60%** mastery of Level 1.
- Level 3: unlocks at **65%** mastery of Level 2.
- Level 4: unlocks at **70%** mastery of Level 3.
- Level 5: unlocks at **75%** mastery of Level 4.
- Pillar mixed review: unlocks once any 3 levels of that pillar reach Strong.

Locked levels still show: title, what you'll learn, what's needed to unlock. Settings has a dev-only "**Louvri tout nivo yo**" (unlock all) toggle.

---

## 5. Learn Mode (`/aprann`)

A pressure-free study area. Concept cards, no quizzes unless explicitly requested. Each concept card includes:

- Title (Krèyol primary, Arabic for terms, English in small italic when helpful).
- Pillar / Level / Section breadcrumb.
- **Eksplikasyon kout** — short explanation (1–2 sentences).
- **Eksplikasyon konplè** — detailed explanation.
- **Mo enpòtan** — key vocabulary (Arabic + transliteration + Krèyol gloss).
- **Egzanp** — examples.
- **Erè moun konn fè** — common mistakes.
- **Ti trik pou sonje** — memory tips.
- **Konsèp ki gen rapò** — related concepts.
- Buttons: "Kesyone m sou sa" (quiz me on this) · "Mwen revize l" (mark reviewed) · "Eksplike pi senp" (explain simpler — shows a more beginner version).

For sacred Arabic: preserve text exactly, never paraphrase Quran or hadith into casual Krèyol without clearly marking the casual rendering as a meaning-explanation, not a translation. If unsure, flag with `// REVIEW:` and never invent.

---

## 6. Quiz Modes

Same nine modes as the universal spec, with Krèyol labels:

1. **Mòd Pratik** (Practice) — immediate feedback, confidence + mistake prompts, mastery updates per question.
2. **Mòd Egzamen** (Exam) — no feedback until submit; optional timer; choose 5/10/20 questions; mixed from unlocked levels; full review at end.
3. **Repete sa ki fèb** (Weakest Topics Drill) — pulls from low-accuracy / low-confidence / recently-missed.
4. **Revizyon rapid** (Cram) — high-yield + missed + low-confidence, short explanations, memory tips.
5. **Mòd Pilye** (Pillar Mode).
6. **Mòd Nivo** (Level Mode).
7. **Mòd Seksyon** (Section Mode).
8. **Tout melanje** (Mixed Review) — across all unlocked content.
9. **Korije erè** (Mistake Review) — re-attempt previously missed; ask "Èske ou konprann li kounye a?"

---

## 7. Question and Concept Data Shapes

Extend the existing `data/pillars.ts` shape; do not break it.

### Question

```ts
interface Question {
  id: string;                                // unique, stable
  pillar: string;                            // pillar slug
  level: 1 | 2 | 3 | 4 | 5;
  section: string;                           // section slug or title
  topic?: string;
  difficulty: "fasil" | "mwayen" | "difisil" | "pyèj";  // easy/medium/hard/trap
  type:
    | "definisyon" | "konsèp" | "rekonèt" | "aplikasyon"
    | "memorize" | "tradiksyon" | "pwononsyasyon" | "pyèj";
  question: string;                          // Krèyol
  questionArabic?: string;                   // when relevant
  choices: string[];                         // 4 ideal, 2-5 allowed
  correctAnswer: number;                     // index into choices
  keyInsight: string;                        // 1-line takeaway in Krèyol
  explanation: string;                       // full Krèyol explanation
  choiceExplanations?: string[];             // why each choice is right/wrong
  ruleOrFormula?: string;                    // the underlying rule
  steps?: string[];                          // for sequenced answers
  commonTrap?: string;                       // common mistake
  memoryTip?: string;                        // mnemonic
  relatedConceptId?: string;                 // → Concept.id
  tags?: string[];
}
```

### Concept

```ts
interface Concept {
  id: string;
  pillar: string;
  level: 1 | 2 | 3 | 4 | 5;
  section: string;
  title: string;                             // Krèyol
  titleArabic?: string;
  shortExplanation: string;                  // Krèyol
  detailedExplanation: string;               // Krèyol
  keyTerms?: { term: string; arabic?: string; definition: string }[];
  examples?: string[];
  commonMistakes?: string[];
  memoryTips?: string[];
  relatedQuestionIds?: string[];
}
```

Both shapes live in `data/`. Adding content is appending an object — no schema migration required.

---

## 8. Mastery System

Per-question state tracked in `localStorage`:

```ts
interface QuestionStat {
  timesSeen: number;
  timesCorrect: number;
  timesWrong: number;
  lastAnsweredISO: string | null;
  lastCorrectISO: string | null;
  lastWrongISO: string | null;
  correctStreak: number;
  lastConfidence: "devine" | "ti jan sèten" | "byen sèten" | null;
  lastMistakeType: MistakeType | null;
  correctInExamMode: boolean;
  correctInMixedMode: boolean;
  masteryLevel: "Pa wè" | "Ap aprann" | "Ap revize" | "Solid" | "Mèt";
}
```

Per-concept: `timesViewed`, `markedReviewed`, `lastReviewedISO`, `relatedQuestionAccuracy`.

Per-section / level / pillar: aggregate accuracy, confidence-adjusted accuracy, weakness score, recent trend.

### Mastery progression

- **Pa wè** (Unseen): never answered.
- **Ap aprann** (Learning): seen, but inconsistent.
- **Ap revize** (Reviewing): correct at least once, but not yet confidently.
- **Solid** (Strong): correct multiple times with at least one "ti jan sèten" or "byen sèten".
- **Mèt** (Mastered): correct ≥3 times, at least one in Exam Mode or Mixed Review, at least one "byen sèten", no recent wrong, correctStreak ≥ 3, related concept reviewed.

Mastery improves with correct answers, decays after wrong answers. **Never** mark mastered on a single correct guess.

---

## 9. Confidence Ratings

After every answer, ask: **"Konbyen ou te sèten?"**

- **Mwen te devine** (I guessed)
- **Mwen te yon ti jan sèten** (Somewhat sure)
- **Mwen te byen sèten** (Very sure)

Rules:
- Correct + byen sèten → strong mastery gain.
- Correct + devine → small mastery gain.
- Wrong + byen sèten → flag as misconception (high-priority review).
- Wrong + devine → expected learning gap.
- Pattern of low confidence → recommend Learn Mode for that section.

---

## 10. Mistake Journal

When wrong, ask: **"Poukisa ou te rate sa?"** Options:

- Mwen pa t konnen definisyon an
- Mwen pa t konprann kesyon an
- Mwen te konfonn de konsèp
- Mwen te bliye règ la
- Mwen te ale twò vit
- Mwen te devine
- Yo te pyeje m
- Mwen rate yon ti detay
- Mwen bezwen revize leson an

Stored per-attempt with question ID, date, user answer, correct answer, confidence, topic, pillar, level, optional notes. Surface patterns in `/pwogre` ("Erè ki pi komen: konfonn de konsèp").

---

## 11. Review Screen (after each quiz answer in Practice Mode, and in Mistake Review)

Show: correct answer · user answer · ✓/✗ · confidence rating · mistake type if wrong · `keyInsight` · full `explanation` · why each choice is right/wrong · rule or formula · step-by-step if applicable · `commonTrap` · `memoryTip` · related concept link · "Eksplike pi senp" button.

For Arabic: never paraphrase. Show original Arabic, transliteration, Krèyol meaning each on its own line.

---

## 12. Session Summary

After every quiz/drill: score · time spent · ✓/✗ counts · topics missed · most common mistake type · lowest-confidence topics · concepts to review · questions advancing toward mastery · questions slipping back · **recommended next action** in plain Krèyol ("Pi gwo feblès ou se nan **wudu — sa ki kase l**. Revize konsèp sa a, epi fè yon ti egzèsis 5 kesyon anvan ou kontinye nan Nivo 3.").

---

## 13. Smart Dashboard (`/`)

Shows: overall progress · current focus pillar · readiness score (0–100) · mastery % · questions mastered / learning · concepts reviewed / remaining · accuracy by pillar/section/difficulty · confidence-adjusted accuracy · weakest 3 topics · strongest 3 topics · mistake-type breakdown · recent score history (last 7 sessions) · recommended next study mode + concept + quiz · level-unlock progress · daily streak · daily ayah of the day (rotating from authored surahs).

Answers three questions on first glance: **Sa m konnen?** / **Ki kote m fèb?** / **Sa m dwe fè kounye a?**

---

## 14. Readiness Score (0–100)

Weighted combo: overall accuracy (30%) · recent Exam Mode scores (20%) · mastery percentage (15%) · weak-topic improvement trend (10%) · average confidence (10%) · mistake rate (5%) · pillars with sufficient mastery (5%) · consistency / streak (5%).

Bands and Krèyol messages:
- **0–39**: "Ou ap bati fondasyon ou. Konsantre sou Aprann ak Pratik."
- **40–59**: "Ou ap pwogrese — gen kèk kote ki bezwen plis travay."
- **60–74**: "Ou prèske rive. Eseye Repete sa ki fèb ak Tout melanje."
- **75–89**: "Ou solid! Eseye Mòd Egzamen pou wè kote ou ye."
- **90–100**: "Ou fò anpil. Kontinye revize pou ou pa bliye."

---

## 15. Smart Recommendations

Engine inputs: weakest topics, weakest pillars, low-confidence answers, recent mistakes, unmastered concepts, missed questions, current level, pillar progress, readiness score, mistake patterns.

Example outputs (always Krèyol, always ≤2 sentences):
- "Revize fondasyon Pilye 1 anvan ou kontinye."
- "Ou pare pou louvri Nivo 2 nan Salat."
- "Fè yon egzèsis 10 kesyon sou sa ki fèb."
- "Ou konn repons yo men ou pa twò sèten — gade ankò konsèp yo."
- "Erè ou yo montre w ap ale twò vit. Ralanti nan Mòd Egzamen."

---

## 16. Spaced Review

Light Leitner-style buckets:
- **Ap aprann**: revize chak 1 jou
- **Ap revize**: revize chak 3 jou
- **Solid**: revize chak 7 jou
- **Mèt**: revize chak 21 jou

Always prioritize: recently missed > low-confidence-correct > trap questions > weak-concept questions > spaced-due. Implementation can stay simple (compute on dashboard load), structure cleanly so it can be improved later.

---

## 17. UI / Design

**Default theme is light/ivory.** Dark mode is an opt-in toggle in `/parametr`, not a `prefers-color-scheme` auto-switch — the brand identity is the warm light theme; users who prefer dark choose it explicitly.

**Palette** (CSS custom properties):
- `--color-bg` ivory `#F7F5F0` (default) / deep night `#0F1A2A` (when `data-theme="dark"`)
- `--color-fg` midnight navy `#1B2B4A` / ivory `#F7F5F0`
- `--color-accent-green` deep emerald `#1F4D3A`
- `--color-accent-gold` antique gold `#C19A4D`
- `--color-accent-navy` `#1B2B4A`
- `--color-info` `#3A6FB0`
- `--color-success` `#2A6A3A`
- `--color-warning` `#B17A1F`
- `--color-error` `#A23A2E`

**Type**: Inter (UI), Amiri (Arabic), Georgia (display headings as fallback). Type scale: 12 / 14 / 16 / 18 / 22 / 28 / 36.

**Spacing**: 4px base — 4, 8, 12, 16, 20, 24, 32, 48, 64.

**Motion**: 200ms ease-out for hovers, 400ms for entrance fades; honor `prefers-reduced-motion`. Confetti only on lesson/pillar completion, never per-question.

**Iconography**: line icons (1.5px stroke, currentColor). 8-point star and arabesque arch motifs as backgrounds at ≤8% opacity, never as functional UI.

**Imagery rules** (critical — fixes today's amateur look):
- Wudu and salat steps **must** use clean hand-authored SVG line-art illustrations (`components/illustrations/`).
- **Never** use emoji as illustrations. Emoji are fine inline in body copy when they add warmth, never as the primary visual for a step.
- Wikimedia / CC photos allowed only as supplementary diagrams (e.g., the all-positions salat overview), always with proper attribution and `next/image` optimization.
- AI-generated images of human figures performing wudu/salat are **prohibited** until quality is verified by a human reviewer — they tend to produce anatomically wrong hand positions and immodest dress.
- Modesty: figures shown without facial detail and in modest clothing.

**Layout**: mobile-first, max content width 720px on phones, 960px on tablets, 1100px on desktop. Sticky bottom nav on mobile; sidebar nav on desktop ≥1024px.

**Accessibility**: WCAG AA contrast on all text · alt text on every image · `aria-label` on icon buttons · semantic headings (`h1` once per page, then `h2`, `h3`) · focus rings visible · color never the sole indicator (always pair with ✓/✗ or text).

---

## 18. Gamification

Light, never childish:

- Badges: "Premye lesyon" (first lesson), "Pilye solid" (pillar reaches Strong), "Erè korije" (mistake corrected), "Pare pou egzamen" (readiness ≥ 75), "7 jou seri" (7-day streak), "Yon mwa" (30-day streak).
- Streaks: daily; missing a day shows "Ou pèdi seri ou — pa gen pwoblèm, rekòmanse jodi a 🌱".
- Confetti only on: completing a lesson, pillar reaching Strong, badge unlock.
- No XP/hearts/lives/timed-pressure mechanics in the default UI.

---

## 19. Data Controls

`/paramèt`:
- Save progress (localStorage, automatic).
- Export progress as JSON (downloads `limye-pwogre-YYYY-MM-DD.json`).
- Import progress from JSON (with version check + "Êske ou sèten?" confirmation).
- Reset progress (double confirmation, names what will be lost).
- Export missed questions only.
- Export mistake journal only.
- "Louvri tout nivo yo" dev toggle.

Schema is versioned (`{ version: 1, ... }`); migrations live in `lib/storage.ts`.

---

## 20. Performance

- Target: 500+ questions, 114 surahs, 30 concepts per pillar with no perceptible slowdown.
- All `data/*.ts` files tree-shake into the routes that use them.
- Use `next/image` everywhere, including the salat-positions diagram.
- Memoize per-pillar mastery calcs in the `useProgress` hook.
- No external libs at runtime beyond what's already in `package.json` (Next, React, framer-motion, canvas-confetti, Tailwind).

---

## 21. Content Expansion Seams

Clear comments mark every expansion point:
- `// EXPAND: add more questions for <pillar>/<level>/<section>`
- `// EXPAND: add more concepts for <pillar>/<level>`
- `// EXPAND: stub-only surah, add full content`
- `// REVIEW: Krèyol translation needs human review`
- `// REVIEW: madhab differences not yet covered`

Adding a new pillar = appending to `data/pillars.ts` and running through the existing UI. No code changes required.

---

## 22. Subject-Specific Adaptation

- **Arabic / Quranic**: full diacritics, RTL `direction: rtl`, Amiri, never alter the text.
- **Practice (wudu/salat)**: SVG illustrations per step + Arabic dua + transliteration + Krèyol meaning + "What invalidates this" callouts.
- **Memorization (surahs)**: surah card flips between Arabic-only / transliteration / Krèyol-meaning views; "Sache m teste tèt mwen" hides one ayah at a time.
- **Belief (aqeedah)**: longer prose lessons with key-term glossary; questions are conceptual, not trivia.

---

## 23. Settings (`/paramèt`)

- Tèm: Otomatik / Klè / Fonse (theme).
- Lang: Krèyol / English (UI shell only — Arabic is always Arabic).
- Son: on/off (for future audio recordings).
- Default question count: 5 / 10 / 20.
- Egzamen Mode: timer on/off.
- Pratik Mode: show explanation immediately on/off.
- Louvri tout nivo yo (dev).
- Reset / Export / Import.

---

## 24. Bug-Fix and Cleanup Rules (carried over from current build)

When uplifting the existing code:

1. Replace any `require("@/lib/storage")` inside Client Components with top-level `import`.
2. Quiz score formula must be `correctCount / total` — no off-by-one.
3. Under Next.js 16, dynamic-route `params` is a Promise — `await` it in every dynamic page.
4. Add `app/error.tsx`, `app/loading.tsx`, and per-route boundaries for `/pilye/[slug]`, `/pilye/[slug]/[lecon]`, `/quiz/[slug]`.
5. Don't ship broken affordances — gate any link whose target route doesn't yet handle its query/param.
6. Read the relevant Next.js 16 guide in `node_modules/next/dist/docs/` before touching App Router behavior (per `AGENTS.md`).

---

## 25. Important Rules

1. Krèyol primary, Arabic preserved exactly, English supplemental.
2. Never invent Quran, hadith, or classical wording. If uncertain, flag `// REVIEW:` and ask a human.
3. Never use emoji as the primary illustration of a step.
4. Never use AI-generated photos of humans performing wudu/salat without human review.
5. Never punish or shame the learner. Mistakes are framed as learning, never as failure.
6. Never lock the learner out permanently. Always show what unlocks the next step.
7. Use `localStorage` as the source of truth today; design the storage layer so cloud sync can drop in later without touching pages.
8. Mobile-first, then refine for tablet and desktop.
9. Honor `prefers-reduced-motion` and `prefers-color-scheme`.
10. Maintain WCAG AA contrast minimum.
11. Keep `data/` files appendable — no breaking schema changes once content has been authored.
12. Every "Eksplike pi senp" button must produce a genuinely simpler explanation, not a reworded original.
13. Sacred text gets RTL layout, Amiri font, full diacritics, and is never paraphrased into casual Krèyol without being clearly labeled as a meaning, not a translation.

---

## 26. Final Output Requirements (when starting from scratch)

Before writing code, briefly explain:
1. Route structure and what's a Server vs. Client Component.
2. How pillars/levels/sections compose, and where to add content.
3. How Learn Mode differs from Quiz Mode in the UI.
4. How the storage abstraction works and where the cloud-sync seam lives.
5. How mastery, confidence, and readiness compose.
6. How dark mode is wired (CSS custom properties + `prefers-color-scheme` + an explicit override in settings).
7. How an illustrator/translator/content-author can extend the app without touching React.
8. Any assumptions made (which madhab, which Krèyol orthography choices, etc.).

Then deliver: working Next.js 16 project · all routes above · UI primitives in `components/ui/` · SVG illustrations in `components/illustrations/` · `data/` files with at least one fully-authored pillar and 5 fully-authored surahs · `localStorage`-based progress with versioned schema and JSON export/import · readiness score on the dashboard · light gamification · WCAG-AA accessibility · light + dark mode.

This document is the canonical contract. Subsequent PRs should reference it by section number ("§17 imagery rule") and update it when intent changes.
