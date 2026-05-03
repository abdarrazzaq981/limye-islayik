"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("[Limyè Islayik] route error:", error);
  }, [error]);

  return (
    <div className="max-w-lg mx-auto px-4 py-10 text-center">
      <div className="text-5xl mb-4">🌙</div>
      <h1 className="font-serif text-2xl font-bold text-navy mb-2">
        Yon ti pwoblèm rive
      </h1>
      <p className="text-text-muted font-serif text-sm mb-6">
        Pa enkyete w — ou ka eseye ankò oswa retounen sou paj akèy la.
        Pwogrè ou pa pèdi.
      </p>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => unstable_retry()}
          className="bg-navy text-gold font-serif font-bold py-3 rounded-2xl hover:bg-navy-light transition-colors"
        >
          🔄 Eseye ankò
        </button>
        <Link
          href="/"
          className="bg-cream-dark border border-cream-border text-navy font-serif font-bold py-3 rounded-2xl hover:border-navy transition-colors"
        >
          ← Akèy
        </Link>
      </div>
    </div>
  );
}
