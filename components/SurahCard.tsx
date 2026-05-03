"use client";

import { useState } from "react";
import Link from "next/link";
import type { Surah } from "@/data/surahs";

interface Props {
  surah: Surah;
  expanded?: boolean;
}

export default function SurahCard({ surah, expanded = false }: Props) {
  const isStub = surah.status === "stub";
  const [open, setOpen] = useState(expanded && !isStub);
  const [tab, setTab] = useState<"tradiksyon" | "istwa" | "kijan">("tradiksyon");

  return (
    <div
      className={`bg-white rounded-2xl border border-cream-border overflow-hidden shadow-sm ${
        isStub ? "opacity-70" : ""
      }`}
    >
      {/* Header */}
      <button
        onClick={() => !isStub && setOpen((o) => !o)}
        disabled={isStub}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
            <span className="text-gold font-serif text-sm font-bold">{surah.number}</span>
          </div>
          <div>
            <p className="font-serif font-bold text-navy">{surah.nameCreole}</p>
            <p className="text-xs text-text-muted font-serif">
              {surah.meaning} · {surah.verseCount} vèsè · {surah.revelation}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="arabic text-navy text-lg">{surah.nameArabic}</span>
          {isStub ? (
            <span className="text-text-muted text-[10px] font-serif italic uppercase tracking-wide">
              Pa fini
            </span>
          ) : (
            <span className="text-text-muted text-sm">{open ? "▲" : "▼"}</span>
          )}
        </div>
      </button>

      {open && !isStub && (
        <div>
          {/* Arabic text */}
          <div className="bg-navy px-5 py-6">
            <p className="arabic text-cream text-xl leading-loose text-right">
              {surah.arabic}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-cream-border">
            {(["tradiksyon", "istwa", "kijan"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-xs font-serif capitalize transition-colors ${
                  tab === t
                    ? "text-gold border-b-2 border-gold font-bold"
                    : "text-text-muted hover:text-navy"
                }`}
              >
                {t === "tradiksyon" ? "Tradiksyon" : t === "istwa" ? "Istwa" : "Kijan Itilize"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="px-5 py-4">
            {tab === "tradiksyon" && (
              <div>
                <p className="text-xs text-gold font-bold uppercase tracking-wide mb-3">
                  Tradiksyon Kreyòl
                </p>
                <p className="font-serif text-text-primary leading-7 text-sm whitespace-pre-line">
                  {surah.creoleTranslation}
                </p>
                <p className="text-xs text-text-muted mt-3 italic font-serif">
                  Tèm: {surah.theme}
                </p>
              </div>
            )}
            {tab === "istwa" && (
              <p className="font-serif text-text-primary leading-7 text-sm">{surah.background}</p>
            )}
            {tab === "kijan" && (
              <p className="font-serif text-text-primary leading-7 text-sm">{surah.whenToUse}</p>
            )}
          </div>

          {/* Actions */}
          {/* TODO: per-surah quizzes don't exist yet; link to pillar-level Koran quiz.
              When per-surah quizzes are authored, route to /quiz/koran?surah=${surah.slug}
              and have the quiz route honor that param. See docs/limye-islayik-master-prompt.md §6. */}
          <div className="flex gap-2 px-5 pb-4">
            <Link
              href="/quiz/koran"
              className="flex-1 text-center py-2.5 bg-navy text-gold font-serif text-sm font-bold rounded-xl"
            >
              🎯 Pratike Koran
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
