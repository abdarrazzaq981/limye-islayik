import { SURAHS } from "@/data/surahs";
import SurahCard from "@/components/SurahCard";
import Link from "next/link";

export default function SouratesPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <Link href="/" className="text-text-muted font-serif text-sm hover:text-navy flex items-center gap-1 mb-4">
        ← Akèy
      </Link>

      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-navy">Sourate Koran</h1>
        <p className="text-text-muted text-sm font-serif mt-1">
          {SURAHS.length} sourate · Tèks Arabe + Tradiksyon Kreyòl + Istwa
        </p>
      </div>

      <div className="bg-navy rounded-2xl p-4 mb-5 text-center">
        <p className="text-gold font-serif text-sm leading-relaxed">
          &ldquo;Mèyè nan nou se moun ki aprann Koran epi anseye li.&rdquo;
        </p>
        <p className="text-cream/40 text-xs font-serif mt-2">— Pwofèt Muhammad ﷺ</p>
      </div>

      <div className="space-y-3">
        {SURAHS.map((surah) => (
          <SurahCard key={surah.slug} surah={surah} />
        ))}
      </div>
    </div>
  );
}
