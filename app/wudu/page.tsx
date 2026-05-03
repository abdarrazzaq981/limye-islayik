"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WUDU_STEPS } from "@/data/wudu-steps";
import { WuduStepIllustration } from "@/components/illustrations/WuduStepIllustration";
import { Callout } from "@/components/ui/Callout";

// Step-id → photo file in /public/wudu/. Source: Masjid ar-Rahmah (Ottawa) —
// used with permission. See attribution at the bottom of this page.
const STEP_PHOTO: Record<number, string> = {
  1: "/wudu/make-wudu.png",
  2: "/wudu/wudu-wash-hands.png",
  3: "/wudu/wudu-rinse-mouth.png",
  4: "/wudu/wudu-into-nose.png",
  5: "/wudu/wudu-wash-face.png",
  6: "/wudu/wudu-wash-arms.png",
  7: "/wudu/wudu-wash-hair.png",
  8: "/wudu/wudu-clean-ears.png",
  9: "/wudu/wudu-wash-feet.png",
};

export default function WuduPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = WUDU_STEPS[currentStep];
  const photo = STEP_PHOTO[step.id];
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
        {photo ? (
          <div className="relative w-full aspect-[3/2] bg-navy-dark">
            <Image
              src={photo}
              alt={step.title}
              fill
              sizes="(max-width: 640px) 100vw, 480px"
              className="object-cover"
              priority={currentStep === 0}
            />
          </div>
        ) : (
          <div className="bg-navy-dark px-6 py-8 flex flex-col items-center text-gold">
            <WuduStepIllustration stepId={step.id} ariaLabel={step.title} />
          </div>
        )}

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
              <p className="text-gold text-xs font-serif mt-1">&ldquo;{step.creoleDua}&rdquo;</p>
            </div>
          )}
        </div>
      </div>

      {/* Poukisa */}
      <Callout tone="warning" title="Poukisa?" className="mb-4">
        {step.poukisa}
      </Callout>

      {/* Photo attribution */}
      <p className="text-[10px] text-text-muted font-serif text-center mb-4 leading-relaxed">
        Foto:{" "}
        <a
          href="https://www.mymasjid.ca/beginners-guide-learn-pray-salah/chapter-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-navy"
        >
          Masjid ar-Rahmah, Ottawa
        </a>{" "}
        — itilize avèk pèmisyon.
      </p>

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
