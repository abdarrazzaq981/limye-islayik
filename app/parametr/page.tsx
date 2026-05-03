"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  exportProgressJson,
  importProgressJson,
  resetProgress,
  updateSettings,
} from "@/lib/storage";
import { useProgress } from "@/lib/use-progress";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Callout } from "@/components/ui/Callout";

/**
 * Settings route. Krèyol slug is "/paramèt" with a non-ASCII character; we
 * keep the folder ASCII (`parametr`) for filesystem portability and surface
 * "Paramèt" as the user-facing label.
 */
export default function ParametrPage() {
  const progress = useProgress();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [theme, setTheme] = useState<"auto" | "light" | "dark">(progress.settings.theme);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mirror external store value
    setTheme(progress.settings.theme);
  }, [progress.settings.theme]);

  const applyTheme = (next: "auto" | "light" | "dark") => {
    setTheme(next);
    updateSettings({ theme: next });
    const root = document.documentElement;
    if (next === "auto") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", next);
    }
  };

  const handleExport = () => {
    const json = exportProgressJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `limye-pwogre-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setFeedback("✓ Pwogre ou ekspòte.");
  };

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = importProgressJson(String(reader.result ?? ""));
      setFeedback(result.ok ? "✓ Pwogre ou enpòte." : `Erè: ${result.error}`);
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    resetProgress();
    setConfirmReset(false);
    setFeedback("Pwogre ou efase.");
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>
      <Heading level={1} eyebrow="Paramèt">
        Konfigirasyon
      </Heading>

      {feedback && (
        <Callout tone="info" className="my-4">
          {feedback}
        </Callout>
      )}

      <div className="space-y-4 mt-6">
        <Card>
          <div className="px-5 py-4">
            <p className="font-serif font-bold text-navy mb-3">Tèm</p>
            <div className="flex gap-2">
              {(["light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => applyTheme(t)}
                  className={`flex-1 py-2 rounded-xl border text-sm font-serif font-bold transition-colors ${
                    (theme === t || (theme === "auto" && t === "light"))
                      ? "bg-navy text-gold border-navy"
                      : "bg-cream-dark border-cream-border text-navy hover:border-navy"
                  }`}
                >
                  {t === "light" ? "Klè" : "Fonse"}
                </button>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="px-5 py-4 space-y-3">
            <p className="font-serif font-bold text-navy">Done</p>
            <button
              onClick={handleExport}
              className="w-full bg-navy text-gold font-serif font-bold py-3 rounded-2xl hover:bg-navy-light transition-colors"
            >
              ⬇ Ekspòte pwogre (JSON)
            </button>
            <label className="block">
              <span className="block w-full text-center bg-cream-dark border border-cream-border text-navy font-serif font-bold py-3 rounded-2xl cursor-pointer hover:border-navy transition-colors">
                ⬆ Enpòte yon fichye
              </span>
              <input
                type="file"
                accept="application/json"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleImport(f);
                }}
              />
            </label>
          </div>
        </Card>

        <Card>
          <div className="px-5 py-4">
            <label className="flex items-center gap-2 font-serif text-sm text-navy">
              <input
                type="checkbox"
                checked={progress.settings.unlockAllLevels}
                onChange={(e) => updateSettings({ unlockAllLevels: e.target.checked })}
                className="w-4 h-4"
              />
              Louvri tout nivo yo (devlòpman)
            </label>
            <p className="text-xs text-text-muted font-serif mt-1">
              Pou teste — louvri tout nivo san bezwen rive nan mastery a.
            </p>
          </div>
        </Card>

        <Card>
          <div className="px-5 py-4">
            <p className="font-serif font-bold text-navy mb-2">Reset</p>
            <p className="text-xs text-text-muted font-serif mb-3">
              Sa ap efase tout leson, kesyon, ak erè ou. Pa ka anile.
            </p>
            <button
              onClick={handleReset}
              className={`w-full font-serif font-bold py-3 rounded-2xl transition-colors ${
                confirmReset
                  ? "bg-[var(--color-error)] text-white hover:opacity-90"
                  : "bg-cream-dark border border-cream-border text-[var(--color-error)] hover:border-[var(--color-error)]"
              }`}
            >
              {confirmReset ? "Konfime — efase tout pwogre" : "Reset pwogre"}
            </button>
            {confirmReset && (
              <button
                onClick={() => setConfirmReset(false)}
                className="w-full mt-2 text-xs text-text-muted font-serif"
              >
                Anile
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
