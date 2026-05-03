export interface WuduStep {
  id: number;
  title: string;
  instruction: string;
  arabic?: string;
  transliteration?: string;
  creoleDua?: string;
  poukisa: string;
  times: number;
  wikimediaPhoto?: string;
}

export const WUDU_STEPS: WuduStep[] = [
  {
    id: 1,
    title: "Niyyah ak Bismillah",
    instruction: "Fè entansyon nan kè ou ke ou ap fè wudu pou Allah. Epi di 'Bismillah' nan vwa ou.",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillāh",
    creoleDua: "Nan non Allah",
    poukisa: "Entansyon diferansye adorasyon de aksyon òdinè. Bismillah kòmanse tout bagay avèk non Allah.",
    times: 1,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg/500px-A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg",
  },
  {
    id: 2,
    title: "Lave De Men",
    instruction: "Lave de pla men ou twa fwa — pwenti dwèt rive nan pwenyèt. Kòmanse ak men dwat.",
    poukisa: "Men yo se premye pati kò nou ki touche lemonn. Netwaye yo an premye montre ou pare pou pwopte.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_Man_Performing_His_Ablutions_%2812966553463%29.jpg/500px-A_Man_Performing_His_Ablutions_%2812966553463%29.jpg",
  },
  {
    id: 3,
    title: "Rense Bouch",
    instruction: "Pran dlo nan men dwat ou, rense bouch ou twa fwa. Netwaye dan ou avèk lang ou.",
    poukisa: "Bouch nou fè dhikr (souvni Allah). Netwaye l pou pawòl ki soti la yo pwòp.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Performing_Ablution_%28Wudu%29_During_Ramadan.jpg/500px-Performing_Ablution_%28Wudu%29_During_Ramadan.jpg",
  },
  {
    id: 4,
    title: "Aspire Dlo nan Nen",
    instruction: "Aspire yon ti dlo nan nen ou ak men dwat, epi soufle l deyò ak men gòch. Fè sa twa fwa.",
    poukisa: "Nen an pran souf lavi — netwaye l se senbòl pwopte entèn ak ekstèn.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Performing_Ablution_%28Wudu%29_During_Ramadan.jpg/500px-Performing_Ablution_%28Wudu%29_During_Ramadan.jpg",
  },
  {
    id: 5,
    title: "Lave Figi",
    instruction: "Lave tout figi ou twa fwa — depi frèt sèvèl rive anba manton, depi zòrèy a zòrèy. Si ou gen bab, pase dlo ladan l.",
    poukisa: "Figi se pati kò nou lòt moun wè pi plis. Netwaye l montre ou prezante pwòp devan Allah.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg/500px-A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg",
  },
  {
    id: 6,
    title: "Lave Bra",
    instruction: "Lave bra dwat ou twa fwa — depi pwenti dwèt rive nan koud (enkli). Epi fè menm bagay pou bra gòch la.",
    poukisa: "Bra nou travay pou nou. Netwaye yo symbolize pwopte nan travay nou fè.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_Man_Performing_His_Ablutions_%2812966553463%29.jpg/500px-A_Man_Performing_His_Ablutions_%2812966553463%29.jpg",
  },
  {
    id: 7,
    title: "Pase Men sou Tèt",
    instruction: "Mouye de pla men ou epi pase yo sou tout tèt ou — depi devan rive dèyè — yon sèl fwa.",
    poukisa: "Tèt la gen sèvo nou, panse nou. Touche l nan wudu sonje nou ke nou bezwen gidans Allah.",
    times: 1,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Performing_Ablution_%28Wudu%29_During_Ramadan.jpg/500px-Performing_Ablution_%28Wudu%29_During_Ramadan.jpg",
  },
  {
    id: 8,
    title: "Netwaye Zòrèy",
    instruction: "Avèk menm dlo sou men ou, pase pous ou nan zòrèy ou ak pòs endèks ou dèyè zòrèy ou. Yon fwa sèlman.",
    poukisa: "Zòrèy tande pawòl. Netwaye yo se senbòl pou koute verite ak sagès.",
    times: 1,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_Man_Performing_His_Ablutions_%2812966553463%29.jpg/500px-A_Man_Performing_His_Ablutions_%2812966553463%29.jpg",
  },
  {
    id: 9,
    title: "Lave Pye",
    instruction: "Lave pye dwat ou twa fwa — depi pwenti dwèt rive nan cheviy (enkli). Epi fè menm bagay pou pye gòch. Asire dlo pase ant dwèt yo.",
    poukisa: "Pye nou pote nou nan tout direksyon. Netwaye yo pou tout kote ou ale, ou ale avèk pwopte.",
    times: 3,
    wikimediaPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg/500px-A_Muslim_man_performs_ablution_%28wudu%29_during_the_holy_month_of_Ramadan.jpg",
  },
];

export interface SalatPosition {
  id: number;
  name: string;
  nameArabic: string;
  instruction: string;
  arabic?: string;
  transliteration?: string;
  creoleText?: string;
  times: number;
  poukisa: string;
}

export const SALAT_POSITIONS: SalatPosition[] = [
  {
    id: 1,
    name: "Takbiratul Ihram",
    nameArabic: "تَكْبِيرَةُ الْإِحْرَام",
    instruction: "Kanpe dwat, vire nan direksyon Mèk. Leve de men jis nan nivo zòrèy ou, di 'Allahu Akbar' epi mete men sou pwatrin ou (dwat sou gòch).",
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allāhu Akbar",
    creoleText: "Allah Pi Gran",
    times: 1,
    poukisa: "Takbir kòmanse priyè. Lè ou leve men ou, ou mete dèyè tout pwoblèm lavi a epi kanpe sèlman devan Allah.",
  },
  {
    id: 2,
    name: "Qiyam — Li Al-Fatiha",
    nameArabic: "الْقِيَام",
    instruction: "Kanpe ak men kwaze sou pwatrin. Li Al-Fatiha ak vwa ba (oswa nan kè ou pou priyè silensiez). Apre li yon lòt sourate kout.",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Al-ḥamdu lillāhi rabbi l-ʿālamīn",
    creoleText: "Tout lwanj pou Allah, Sènyè tout mond",
    times: 1,
    poukisa: "Kanpe dwat devan Allah montre respè ak atansyon. Li Koran pandan priyè se konvèsasyon dirèk ak Allah.",
  },
  {
    id: 3,
    name: "Ruku — Koube",
    nameArabic: "الرُّكُوع",
    instruction: "Di 'Allahu Akbar' epi koube nan pwent senti — do plat, men sou jenou. Di 'Subhana Rabbiyal Azeem' 3 fwa.",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subḥāna Rabbiya l-ʿaẓīm",
    creoleText: "Glwa pou Sènyè mwen ki Gran anpil",
    times: 3,
    poukisa: "Ruku se soumisyon fizik. Lè ou koube, ou di ak kò ou: 'Allah, ou pi gran pase tout bagay mwen gen la a.'",
  },
  {
    id: 4,
    name: "I'tidal — Leve",
    nameArabic: "الِاعْتِدَال",
    instruction: "Leve kanpe epi di 'Sami Allahu liman hamidah'. Apre ou kanpe dwat di 'Rabbana lakal hamd'.",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    transliteration: "Samiʿa Allāhu liman ḥamidah",
    creoleText: "Allah tande moun ki lwanje Li",
    times: 1,
    poukisa: "Leve apre Ruku montre balans — soumisyon ak lavi kontinyèl nan adorasyon. Allah tande lwanj nou.",
  },
  {
    id: 5,
    name: "Sujud — Pwostènen",
    nameArabic: "السُّجُود",
    instruction: "Di 'Allahu Akbar' epi mete fron, nen, de pla men, de jenou, ak pwenti pye sou tè. Di 'Subhana Rabbiyal A'la' 3 fwa.",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "Subḥāna Rabbiya l-Aʿlā",
    creoleText: "Glwa pou Sènyè mwen ki Wo anpil",
    times: 3,
    poukisa: "Sujud se pwen pi wo nan priyè. Fron ou — pati pi onore nan kò ou — sou tè. Se moman ou pi pre Allah. Fè dua isit la!",
  },
  {
    id: 6,
    name: "Julus — Chita ant de Sujud",
    nameArabic: "الْجُلُوس",
    instruction: "Leve tèt ou di 'Allahu Akbar'. Chita sou pye gòch ou, pye dwat drese. Di 'Rabbighfirli' (Sènyè padonnen mwen).",
    arabic: "رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbi ghfir lī",
    creoleText: "Sènyè padonnen mwen",
    times: 1,
    poukisa: "Chita ant de sujud se moman padon. Ou mande Allah padon anvan ou retounen nan sujud ankò.",
  },
  {
    id: 7,
    name: "Tashahhud — Asman Final",
    nameArabic: "التَّشَهُّد",
    instruction: "Apre dènye rak'ah, chita epi di Tashahhud la ki kòmanse ak 'At-tahiyyatu lillahi...' Epi di Salawat sou Pwofèt ﷺ.",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ",
    transliteration: "At-taḥiyyātu lillāhi wa-ṣ-ṣalawātu wa-ṭ-ṭayyibāt",
    creoleText: "Tout salitasyon pou Allah, ak priyè ak bonte",
    times: 1,
    poukisa: "Tashahhud fini priyè nan yon konvèsasyon. Ou salye Allah, Pwofèt ﷺ, ak tout Mizilman — se kominote ou tout ansanm.",
  },
  {
    id: 8,
    name: "Tasleem — Fini Priyè",
    nameArabic: "التَّسْلِيم",
    instruction: "Vire tèt ou bò dwat epi di 'As-salamu alaykum wa rahmatullah'. Epi vire bò gòch di menm bagay la.",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salāmu ʿalaykum wa-raḥmatu Llāh",
    creoleText: "Lapè ak mizerikòd Allah sou ou",
    times: 2,
    poukisa: "Fini priyè avèk lapè — ou voye bènediksyon bay zanj ki avèk ou ak tout kominote Mizilman yo.",
  },
];
