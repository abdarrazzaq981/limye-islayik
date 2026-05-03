"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Akèy", icon: "🏠" },
  { href: "/sourates", label: "Koran", icon: "📖" },
  { href: "/wudu", label: "Wudu", icon: "💧" },
  { href: "/salat", label: "Salat", icon: "🕌" },
  { href: "/pwogre", label: "Pwogre", icon: "⭐" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-navy border-t border-navy-light z-50">
      <div className="flex max-w-lg mx-auto">
        {NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center py-3 gap-0.5 transition-colors ${
                active ? "text-gold" : "text-cream/50 hover:text-cream/80"
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span className="text-[10px] font-serif">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
