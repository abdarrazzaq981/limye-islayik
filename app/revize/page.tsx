"use client";

import Link from "next/link";
import { useProgress } from "@/lib/use-progress";
import { resolveMistake } from "@/lib/storage";
import { mistakeTypeLabels } from "@/lib/mastery";
import { PILLARS } from "@/data/pillars";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

export default function RevizePage() {
  const progress = useProgress();
  const open = progress.mistakeJournal.filter((m) => !m.resolved);

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>
      <Heading level={1} eyebrow="Revize">
        Korije Erè
      </Heading>
      <p className="text-text-muted font-serif text-sm mt-2 mb-6">
        Tout kesyon ou rate — pou ou ka tounen wè yo pi byen.
      </p>

      {open.length === 0 ? (
        <EmptyState
          emoji="✨"
          title="Pa gen erè pou revize"
          description="Lè ou rate yon kesyon, l ap parèt isit la pou ou ka aprann li nan tan."
          action={
            <Link
              href="/"
              className="inline-block bg-navy text-gold font-serif font-bold py-3 px-5 rounded-2xl"
            >
              ← Akèy
            </Link>
          }
        />
      ) : (
        <div className="space-y-3">
          {open.map((m, i) => {
            const pillar = PILLARS.find((p) => p.slug === m.pillarSlug);
            const [, qIdxStr] = m.questionId.split(":");
            const qIdx = Number(qIdxStr);
            const question = pillar?.quiz[qIdx];
            return (
              <Card key={`${m.questionId}-${i}`}>
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge tone="warning">{pillar?.title ?? m.pillarSlug}</Badge>
                    {m.mistakeType && (
                      <span className="text-xs text-text-muted font-serif">
                        {mistakeTypeLabels[m.mistakeType]}
                      </span>
                    )}
                  </div>
                  {question ? (
                    <>
                      <p className="font-serif text-navy text-sm font-bold mb-2">
                        {question.question}
                      </p>
                      <p className="font-serif text-sm text-text-secondary leading-relaxed">
                        Bon repons: <span className="text-green font-bold">{question.choices[m.correctAnswerIndex]}</span>
                      </p>
                      <p className="font-serif text-xs text-text-muted mt-2 leading-relaxed">
                        {question.explanation}
                      </p>
                    </>
                  ) : (
                    <p className="text-text-muted text-sm font-serif">
                      Kesyon sa a pa egziste ankò.
                    </p>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => resolveMistake(m.questionId)}
                      className="flex-1 bg-green/10 border border-green/30 text-green font-serif text-sm font-bold py-2 rounded-xl hover:bg-green/20 transition-colors"
                    >
                      ✓ Mwen konprann li kounye a
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
