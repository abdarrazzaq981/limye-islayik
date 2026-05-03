"use client";

import { useEffect, useRef } from "react";

interface Props {
  show: boolean;
  message: string;
  onClose: () => void;
}

export default function CelebrationOverlay({ show, message, onClose }: Props) {
  const launched = useRef(false);

  useEffect(() => {
    if (!show || launched.current) return;
    launched.current = true;

    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#C19A4D", "#1B2B4A", "#2A6A3A", "#F7F5F0"],
      });
    });

    const timer = setTimeout(onClose, 3500);
    return () => {
      clearTimeout(timer);
      launched.current = false;
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="text-center px-8 py-10 bg-cream rounded-2xl shadow-2xl max-w-sm mx-4 border border-gold">
        <div className="text-5xl mb-4">🌟</div>
        <p className="text-navy font-serif text-xl font-bold leading-relaxed">{message}</p>
        <p className="text-text-muted text-sm mt-3 font-serif">Touche pou kontinye</p>
      </div>
    </div>
  );
}
