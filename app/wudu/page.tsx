"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WUDU_STEPS } from "@/data/wudu-steps";

export default function WuduPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = WUDU_STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === WUDU_STEPS.length - 1;

  const goNext = () => { if (!isLast) setCurrentStep((s) => s + 1); };
  const goPrev = () => { if (!isFirst) setCurrentStep((s) => s - 1); };

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>

      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy">Gid Wudu</h1>
          <p className="text-text-muted text-sm font-serif">Pwoprete devan Allah</p>
        </div>
        <div className="text-right">
          <p className="text-gold font-bold text-sm">
            {currentStep + 1}/{WUDU_STEPS.length}
          </p>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-6">
        {WUDU_STEPS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              idx < currentStep
                ? "bg-green"
                : idx === currentStep
                ? "bg-gold"
                : "bg-cream-border"
            }`}
          />
        ))}
      </div>

      {/* Main card */}
      <div className="bg-navy rounded-2xl overflow-hidden mb-4">
        {/* SVG illustration placeholder */}
        <div className="bg-navy-dark px-6 py-8 flex flex-col items-center">
          <WuduSVG stepId={step.id} />
        </div>

        <div className="p-5">
          <p className="text-gold text-xs font-bold uppercase tracking-wide mb-1">
            Etap {step.id}
            {step.times > 1 ? ` — ${step.times} fwa` : ""}
          </p>
          <h2 className="text-cream font-serif text-xl font-bold mb-3">{step.title}</h2>
          <p className="text-cream/80 font-serif text-sm leading-7">{step.instruction}</p>

          {step.arabic && (
            <div className="mt-4 bg-black/20 rounded-xl p-3">
              <p className="arabic text-cream text-xl">{step.arabic}</p>
              <p className="text-cream/50 text-xs font-serif italic mt-1">{step.transliteration}</p>
              <p className="text-gold text-xs font-serif mt-1">"{step.creoleDua}"</p>
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

      {/* Real photo */}
      {step.wikimediaPhoto && (
        <div className="mb-4 rounded-xl overflow-hidden border border-cream-border bg-cream-dark">
          <img
            src={step.wikimediaPhoto}
            alt={step.title}
            className="w-full object-cover max-h-64"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.parentElement!.style.display = "none";
            }}
          />
          <p className="text-[10px] text-text-muted font-serif p-2 text-center">
            📷 Foto reyèl · Wikimedia Commons (Creative Commons)
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button
          onClick={goPrev}
          disabled={isFirst}
          className="flex-1 py-3.5 bg-cream-dark border border-cream-border text-navy font-serif font-bold rounded-2xl disabled:opacity-30 hover:border-navy transition-colors"
        >
          ← Tounen
        </button>
        {isLast ? (
          <Link
            href="/"
            className="flex-2 py-3.5 bg-green text-white font-serif font-bold rounded-2xl text-center flex-1 hover:bg-green-light transition-colors"
          >
            ✓ Wudu Konplè!
          </Link>
        ) : (
          <button
            onClick={goNext}
            className="flex-1 py-3.5 bg-navy text-gold font-serif font-bold rounded-2xl hover:bg-navy-light transition-colors"
          >
            Swivan →
          </button>
        )}
      </div>
    </div>
  );
}

function WuduSVG({ stepId }: { stepId: number }) {
  const svgs: Record<number, React.ReactNode> = {
    1: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">🤲</text>
        <circle cx="30" cy="30" r="5" fill="#8AAABB" opacity="0.6" />
        <circle cx="70" cy="25" r="3" fill="#8AAABB" opacity="0.5" />
        <circle cx="75" cy="65" r="4" fill="#8AAABB" opacity="0.6" />
      </svg>
    ),
    2: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">👐</text>
        <path d="M15 40 Q20 50 15 60" stroke="#8AAABB" strokeWidth="2" fill="none" opacity="0.7"/>
        <path d="M85 40 Q80 50 85 60" stroke="#8AAABB" strokeWidth="2" fill="none" opacity="0.7"/>
      </svg>
    ),
    3: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">😮</text>
        <path d="M25 50 Q30 45 35 50" stroke="#8AAABB" strokeWidth="2" fill="none"/>
        <path d="M65 50 Q70 45 75 50" stroke="#8AAABB" strokeWidth="2" fill="none"/>
      </svg>
    ),
    4: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">👃</text>
        <circle cx="25" cy="45" r="3" fill="#8AAABB" opacity="0.6"/>
        <circle cx="20" cy="55" r="2" fill="#8AAABB" opacity="0.4"/>
      </svg>
    ),
    5: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">😊</text>
        <path d="M15 35 Q22 50 15 65" stroke="#8AAABB" strokeWidth="2.5" fill="none" opacity="0.7"/>
        <path d="M85 35 Q78 50 85 65" stroke="#8AAABB" strokeWidth="2.5" fill="none" opacity="0.7"/>
      </svg>
    ),
    6: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">💪</text>
        <path d="M20 40 Q15 50 20 65" stroke="#8AAABB" strokeWidth="3" fill="none" opacity="0.8"/>
        <path d="M80 40 Q85 50 80 65" stroke="#8AAABB" strokeWidth="3" fill="none" opacity="0.8"/>
      </svg>
    ),
    7: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">🙆</text>
        <path d="M20 35 Q50 25 80 35" stroke="#8AAABB" strokeWidth="2" fill="none" opacity="0.6"/>
      </svg>
    ),
    8: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">👂</text>
      </svg>
    ),
    9: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#1a3a5c" />
        <text x="50" y="57" textAnchor="middle" fontSize="32" fill="#C19A4D">🦶</text>
        <path d="M20 70 Q30 75 40 70" stroke="#8AAABB" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M60 70 Q70 75 80 70" stroke="#8AAABB" strokeWidth="2" fill="none" opacity="0.6"/>
      </svg>
    ),
  };
  return <>{svgs[stepId] ?? <span className="text-5xl">💧</span>}</>;
}
