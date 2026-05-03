"use client";

import { useState } from "react";
import Link from "next/link";
import { CONCEPTS, type Concept } from "@/data/concepts";
import { PILLARS } from "@/data/pillars";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function AprannPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const conceptsByPillar = PILLARS.map((p) => ({
    pillar: p,
    concepts: CONCEPTS.filter((c) => c.pillar === p.slug),
  })).filter((g) => g.concepts.length > 0);

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>
      <Heading level={1} eyebrow="Aprann">
        Konsèp pou Etidye
      </Heading>
      <p className="text-text-muted font-serif text-sm mt-2 mb-6">
        Pa gen quiz isit la — sèlman aprann nan pwòp ritm ou.
      </p>

      <div className="space-y-6">
        {conceptsByPillar.map(({ pillar, concepts }) => (
          <section key={pillar.slug}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{pillar.icon}</span>
              <h2 className="font-serif text-navy font-bold text-sm uppercase tracking-wide">
                {pillar.title}
              </h2>
            </div>
            <div className="space-y-2">
              {concepts.map((c) => (
                <ConceptItem
                  key={c.id}
                  concept={c}
                  open={openId === c.id}
                  onToggle={() => setOpenId(openId === c.id ? null : c.id)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ConceptItem({
  concept,
  open,
  onToggle,
}: {
  concept: Concept;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Card>
      <button onClick={onToggle} className="w-full text-left px-5 py-4 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Badge tone="gold">Nivo {concept.level}</Badge>
            <p className="text-xs text-text-muted font-serif truncate">{concept.section}</p>
          </div>
          <p className="font-serif font-bold text-navy">{concept.title}</p>
          {concept.titleArabic && (
            <p className="arabic text-sm text-text-muted mt-0.5">{concept.titleArabic}</p>
          )}
        </div>
        <span className="text-text-muted text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-cream-border pt-4 space-y-4">
          <p className="font-serif text-text-primary leading-7 text-sm">
            {concept.shortExplanation}
          </p>
          <p className="font-serif text-text-secondary leading-7 text-sm">
            {concept.detailedExplanation}
          </p>

          {concept.keyTerms && concept.keyTerms.length > 0 && (
            <div>
              <p className="text-xs text-gold font-bold uppercase tracking-wide mb-2">Mo Kle</p>
              <div className="space-y-1.5">
                {concept.keyTerms.map((kt) => (
                  <div key={kt.term} className="flex flex-wrap gap-1 text-sm font-serif">
                    <span className="font-bold text-navy">{kt.term}</span>
                    {kt.arabic && <span className="arabic text-text-muted">({kt.arabic})</span>}
                    <span className="text-text-secondary">— {kt.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {concept.examples && concept.examples.length > 0 && (
            <div>
              <p className="text-xs text-gold font-bold uppercase tracking-wide mb-2">Egzanp</p>
              <ul className="space-y-1 list-disc pl-5 font-serif text-sm text-text-secondary">
                {concept.examples.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </div>
          )}

          {concept.commonMistakes && concept.commonMistakes.length > 0 && (
            <div>
              <p className="text-xs text-[var(--color-warning)] font-bold uppercase tracking-wide mb-2">
                Erè Komen
              </p>
              <ul className="space-y-1 list-disc pl-5 font-serif text-sm text-text-secondary">
                {concept.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          )}

          {concept.memoryTips && concept.memoryTips.length > 0 && (
            <div>
              <p className="text-xs text-green font-bold uppercase tracking-wide mb-2">
                Ti Trik pou Sonje
              </p>
              <ul className="space-y-1 list-disc pl-5 font-serif text-sm text-text-secondary">
                {concept.memoryTips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}

          <Link
            href={`/quiz/${concept.pillar}`}
            className="inline-block text-center bg-navy text-gold font-serif font-bold py-2.5 px-4 rounded-xl text-sm hover:bg-navy-light transition-colors"
          >
            🎯 Kesyone m sou sa
          </Link>
        </div>
      )}
    </Card>
  );
}
