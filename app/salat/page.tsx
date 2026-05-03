"use client";

import { useState } from "react";
import Link from "next/link";
import { SALAT_POSITIONS } from "@/data/wudu-steps";

const PRAYER_TIMES = [
  { name: "Fajr", icon: "🌅", time: "Anvan solèy leve", rakah: "2 rak'ah" },
  { name: "Dhuhr", icon: "☀️", time: "Aprè midi", rakah: "4 rak'ah" },
  { name: "Asr", icon: "🌤", time: "Apremidi", rakah: "4 rak'ah" },
  { name: "Maghrib", icon: "🌇", time: "Apre solèy kouche", rakah: "3 rak'ah" },
  { name: "Isha", icon: "🌙", time: "Lannuit", rakah: "4 rak'ah" },
];

export default function SalatPage() {
  const [view, setView] = useState<"lè" | "etap">("lè");
  const [currentStep, setCurrentStep] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  const step = SALAT_POSITIONS[currentStep];

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>

      <h1 className="font-serif text-2xl font-bold text-navy mb-1">Gid Priyè</h1>
      <p className="text-text-muted text-sm font-serif mb-5">Salat — Koneksyon dirèk ak Allah</p>

      {/* Tabs */}
      <div className="flex bg-cream-dark rounded-xl p-1 mb-5">
        <button
          onClick={() => setView("lè")}
          className={`flex-1 py-2 rounded-lg text-sm font-serif font-bold transition-colors ${
            view === "lè" ? "bg-navy text-gold" : "text-text-muted hover:text-navy"
          }`}
        >
          🕐 Lè Priyè
        </button>
        <button
          onClick={() => setView("etap")}
          className={`flex-1 py-2 rounded-lg text-sm font-serif font-bold transition-colors ${
            view === "etap" ? "bg-navy text-gold" : "text-text-muted hover:text-navy"
          }`}
        >
          📋 Etap pa Etap
        </button>
      </div>

      {view === "lè" && (
        <div>
          <div className="bg-navy rounded-2xl p-4 mb-4 text-center">
            <p className="text-cream/60 text-xs font-serif mb-1">Remak</p>
            <p className="text-cream font-serif text-sm leading-relaxed">
              Lè priyè yo chanje chak jou. Itilize yon aplikasyon tankou{" "}
              <strong className="text-gold">Muslim Pro</strong> oswa{" "}
              <strong className="text-gold">Athan</strong> pou lè egzak nan kote ou ye a.
            </p>
          </div>
          <div className="space-y-3">
            {PRAYER_TIMES.map((pt) => (
              <div
                key={pt.name}
                className="bg-white border border-cream-border rounded-xl p-4 flex items-center gap-4"
              >
                <span className="text-2xl">{pt.icon}</span>
                <div className="flex-1">
                  <p className="font-serif font-bold text-navy">{pt.name}</p>
                  <p className="text-text-muted text-xs font-serif">{pt.time}</p>
                </div>
                <span className="text-gold font-bold text-sm font-serif">{pt.rakah}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setView("etap")}
            className="w-full mt-5 bg-navy text-gold font-serif font-bold py-4 rounded-2xl hover:bg-navy-light transition-colors"
          >
            Aprann Kijan Pou Priye →
          </button>
        </div>
      )}

      {view === "etap" && (
        <div>
          {/* Progress */}
          <div className="flex gap-1 mb-5">
            {SALAT_POSITIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentStep(idx); setShowPhoto(false); }}
                className={`flex-1 h-1.5 rounded-full transition-colors ${
                  idx < currentStep ? "bg-green" : idx === currentStep ? "bg-gold" : "bg-cream-border"
                }`}
              />
            ))}
          </div>

          {/* Step card */}
          <div className="bg-navy rounded-2xl overflow-hidden mb-4">
            <div className="bg-navy-dark flex items-center justify-center py-8">
              <SalatSVG stepId={step.id} />
            </div>
            <div className="p-5">
              <p className="text-gold text-xs font-bold uppercase tracking-wide mb-1">
                Etap {step.id}/{SALAT_POSITIONS.length}
                {step.times > 1 ? ` — Di ${step.times} fwa` : ""}
              </p>
              <h2 className="text-cream font-serif text-xl font-bold mb-1">{step.name}</h2>
              <p className="text-cream/50 text-xs arabic mb-3">{step.nameArabic}</p>
              <p className="text-cream/80 font-serif text-sm leading-7">{step.instruction}</p>

              {step.arabic && (
                <div className="mt-4 bg-black/20 rounded-xl p-3">
                  <p className="arabic text-cream text-xl">{step.arabic}</p>
                  <p className="text-cream/50 text-xs font-serif italic mt-1">{step.transliteration}</p>
                  <p className="text-gold text-xs font-serif mt-1">"{step.creoleText}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Poukisa */}
          <div className="bg-amber-50 border-l-4 border-gold rounded-r-xl p-4 mb-4">
            <p className="text-xs text-gold-muted font-bold uppercase tracking-wide mb-1.5">
              💡 Poukisa?
            </p>
            <p className="font-serif text-text-secondary text-sm leading-relaxed">{step.poukisa}</p>
          </div>

          {/* Nav */}
          <div className="flex gap-3">
            <button
              onClick={() => { setCurrentStep((s) => Math.max(0, s - 1)); setShowPhoto(false); }}
              disabled={currentStep === 0}
              className="flex-1 py-3.5 bg-cream-dark border border-cream-border text-navy font-serif font-bold rounded-2xl disabled:opacity-30"
            >
              ← Tounen
            </button>
            {currentStep === SALAT_POSITIONS.length - 1 ? (
              <button
                onClick={() => setCurrentStep(0)}
                className="flex-1 py-3.5 bg-green text-white font-serif font-bold rounded-2xl"
              >
                🔄 Rekòmanse
              </button>
            ) : (
              <button
                onClick={() => { setCurrentStep((s) => s + 1); setShowPhoto(false); }}
                className="flex-1 py-3.5 bg-navy text-gold font-serif font-bold rounded-2xl hover:bg-navy-light transition-colors"
              >
                Swivan →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SalatSVG({ stepId }: { stepId: number }) {
  const svgs: Record<number, React.ReactNode> = {
    1: <span className="text-6xl">🙋</span>,
    2: <span className="text-6xl">🧎</span>,
    3: <span className="text-6xl">🙇</span>,
    4: <span className="text-6xl">🙆</span>,
    5: <span className="text-6xl">🙏</span>,
    6: <span className="text-6xl">🧘</span>,
    7: <span className="text-6xl">🤲</span>,
    8: <span className="text-6xl">👋</span>,
  };
  return <>{svgs[stepId] ?? <span className="text-6xl">🕌</span>}</>;
}
