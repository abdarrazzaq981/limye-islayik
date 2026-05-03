/**
 * Concept cards for Learn Mode (/aprann).
 * One seed concept per pillar to give the route something real to render.
 *
 * EXPAND: add more concepts per pillar, organized by level/section.
 * See docs/limye-islayik-master-prompt.md §5 (Learn Mode) and §7 (Concept shape).
 */

export type Level = 1 | 2 | 3 | 4 | 5;

export interface Concept {
  id: string;
  pillar: string;
  level: Level;
  section: string;
  title: string;
  titleArabic?: string;
  shortExplanation: string;
  detailedExplanation: string;
  keyTerms?: { term: string; arabic?: string; definition: string }[];
  examples?: string[];
  commonMistakes?: string[];
  memoryTips?: string[];
  relatedQuestionIds?: string[];
}

export const CONCEPTS: Concept[] = [
  {
    id: "tawhid-foundation",
    pillar: "sa-islam-ye",
    level: 1,
    section: "Aqeedah — Sa nou kwè",
    title: "Tawhid — Yon Sèl Allah",
    titleArabic: "التَّوْحِيد",
    shortExplanation:
      "Tawhid se kwayans ke gen yon sèl Allah, san asosye, san pati. Se rasin tout Islam.",
    detailedExplanation:
      "Tawhid pa sèlman di 'gen yon sèl Bondye' — li mande pou ou adore Allah sèl, fè tout aksyon ou pou Li sèl, ak konfye nan Li sèl. Li koupe tout fòm shirk (asosye lòt bagay ak Allah). Tout pwofèt yo te vini ak menm mesaj sa a: La ilaha illa Allah — pa gen lòt bondye sof Allah.",
    keyTerms: [
      { term: "Tawhid", arabic: "التَّوْحِيد", definition: "Inite Allah, kwè ke Li yon sèl" },
      { term: "Shirk", arabic: "الشِّرْك", definition: "Asosye lòt bagay ak Allah — pi gwo peche a" },
      { term: "Ilah", arabic: "إِلَٰه", definition: "Bondye oswa moun yo adore" },
    ],
    examples: [
      "Lè ou priye, priye Allah sèl — pa pwofèt, pa zanj, pa moun.",
      "Lè ou pè yon bagay, sonje ke se Allah ki gen kontwòl tout bagay.",
    ],
    commonMistakes: [
      "Konfonn Tawhid ak senpman 'kwè ke Bondye egziste' — Tawhid ale pi lwen.",
      "Bliye ke Tawhid mande aksyon, pa sèlman pawòl.",
    ],
    memoryTips: [
      "Sonje shahadah a: 'La ilaha illa Allah' = 'Pa gen bondye eksepte Allah.' Premye pati a refize tout fo bondye, dezyèm pati a afime sèl Allah.",
    ],
  },
  {
    id: "wudu-intention",
    pillar: "wudu",
    level: 1,
    section: "Fondasyon",
    title: "Niyyah — Entansyon nan Wudu",
    titleArabic: "النِّيَّة",
    shortExplanation:
      "Niyyah se entansyon nan kè ou ke ou ap fè wudu pou Allah. Li transfòme yon aksyon òdinè an adorasyon.",
    detailedExplanation:
      "Lè ou fè wudu, premye etap la se nan kè ou — ou panse: 'M ap fè wudu pou priye, pou plè Allah.' Pa bezwen di yon fraz espesifik ak vwa ou; entansyon an se nan kè ou. Pwofèt ﷺ te di: 'Aksyon yo jije pa entansyon yo.' Si ou senpman lave figi ou pou rafrechi, se pa wudu — menm si ou fè menm mouvman yo.",
    keyTerms: [
      { term: "Niyyah", arabic: "النِّيَّة", definition: "Entansyon — sa ki nan kè ou anvan ou aji" },
    ],
    commonMistakes: [
      "Panse ou dwe di niyyah a ak vwa fò — pa nesesè.",
      "Bliye fè niyyah epi pase dirèkteman nan lave men.",
    ],
    memoryTips: [
      "Anvan ou ouvri tiyo dlo a, fè yon ti pòz: 'M ap fè wudu pou Allah.' Sa ase.",
    ],
  },
  {
    id: "salat-takbir",
    pillar: "salat",
    level: 1,
    section: "Kòmansman priyè",
    title: "Takbiratul Ihram — Antre nan Priyè",
    titleArabic: "تَكْبِيرَةُ الْإِحْرَام",
    shortExplanation:
      "Premye Allahu Akbar la nan priyè a — li 'ouvri pòt la' epi separe ou ak lemonn pandan w ap priye.",
    detailedExplanation:
      "Lè ou di 'Allahu Akbar' ak men ou leve nan nivo zòrèy ou, ou antre nan yon eta espesyal — Ihram. Pandan tout priyè a, ou pa gen dwa pale ak moun, manje, ri, oswa fè aksyon ki pa nan priyè. Tout atansyon ou se sou Allah. Se pou sa li rele 'ihram' — yon limit sakre.",
    keyTerms: [
      { term: "Takbir", arabic: "التَّكْبِير", definition: "Di Allahu Akbar — Allah pi gran" },
      { term: "Ihram", arabic: "الْإِحْرَام", definition: "Eta sakre, mete limit sou aksyon" },
    ],
    commonMistakes: [
      "Leve men yo twò ba (anba zepòl) — yo dwe nan nivo zòrèy.",
      "Pale apre takbir la (envalide priyè a).",
    ],
    memoryTips: [
      "Imajine ou ap mete tout pwoblèm lavi a dèyè ou lè ou leve men ou. Sou tè a, devan ou: sèlman Allah.",
    ],
  },
  {
    id: "fatiha-importance",
    pillar: "koran",
    level: 1,
    section: "Sourate fondamantal",
    title: "Al-Fatiha — Mè Koran",
    titleArabic: "الْفَاتِحَة",
    shortExplanation:
      "Al-Fatiha se premye sourate Koran an. San li, priyè ou pa valid. Se yon konvèsasyon dirèk avèk Allah.",
    detailedExplanation:
      "Pwofèt ﷺ te di: 'Pa gen priyè pou moun ki pa li Al-Fatiha.' Chak rak'ah nan chak priyè mande Al-Fatiha. Li gen 7 vèsè ki konsantre tout esans Islam — lwanj, soumisyon, demand gidans. Allah di nan yon hadith qudsi: 'Mwen divize Al-Fatiha ant Mwen ak sèvitè M.' Premye twa vèsè yo se pou Allah, dènye twa yo se pou ou — kat avi nan mitan kominikasyon ant ou ak Sènyè ou.",
    keyTerms: [
      { term: "Fatiha", arabic: "فَاتِحَة", definition: "Ouvèti — premye sourate" },
      { term: "Umm al-Quran", arabic: "أُمُّ الْقُرْآن", definition: "Mè Koran — yon lòt non pou Al-Fatiha" },
    ],
    memoryTips: [
      "Si ou ka memorize sèlman yon sourate, se Al-Fatiha. Li 7 vèsè kout, e ou ap repete l plis pase 17 fwa pa jou.",
    ],
  },
  {
    id: "zakah-meaning",
    pillar: "zakah-sawm-hajj",
    level: 1,
    section: "Zakat",
    title: "Zakat — Pirifye Lajan",
    titleArabic: "الزَّكَاة",
    shortExplanation:
      "Zakat se 2.5% lajan ou genyen pou yon ane konplè ke ou bay pòv yo. Li obligatwa, pa charite opsyonèl.",
    detailedExplanation:
      "Mo 'zakat' vle di 'pirifye' ak 'grandi'. Lè ou bay zakat, ou pirifye lajan ou nan sa Allah te bay ou — 2.5% ki pa pou ou — epi ou fè kè ou grandi nan jenewozite. Li diferan de sadaqah (charite volontè): zakat se yon dwa pòv yo genyen sou rich yo. Si ou genyen yon sèten kantite (nisab) pou yon ane konplè, ou dwe peye l.",
    keyTerms: [
      { term: "Zakat", arabic: "الزَّكَاة", definition: "Pirifikasyon — donasyon obligatwa 2.5%" },
      { term: "Nisab", arabic: "النِّصَاب", definition: "Minim ou dwe genyen pou zakat aplikab" },
      { term: "Sadaqah", arabic: "الصَّدَقَة", definition: "Charite volontè (ki pa zakat)" },
    ],
    memoryTips: [
      "2.5% se yon sou 40. Sa pa anpil — men li chanje lavi moun ki pi pòv yo.",
    ],
  },
  {
    id: "daily-dua",
    pillar: "lavi-chak-jou",
    level: 1,
    section: "Dua chak jou",
    title: "Bismillah — Kòmanse Chak Bagay",
    titleArabic: "بِسْمِ اللَّه",
    shortExplanation:
      "Di 'Bismillah' anvan ou kòmanse nenpòt aksyon — manje, bwè, sòti, antre — pou mete bènediksyon Allah ladan l.",
    detailedExplanation:
      "Pwofèt ﷺ te ankouraje nou di Bismillah anvan tout bagay enpòtan. Lè ou di l anvan ou manje, manje a vin yon bènediksyon. Lè ou di l anvan ou kondui, vwayaj la pwoteje. Se yon ti gwo abitid — kat mo ki transfòme aksyon òdinè an adorasyon. Si ou bliye di l nan kòmansman, di l lè ou sonje: 'Bismillahi awwalahu wa akhirahu' (Nan non Allah, kòmansman ak fen).",
    examples: [
      "Anvan manje: Bismillah.",
      "Lè ou monte machin: Bismillah.",
      "Anvan ou ekri yon mesaj enpòtan: Bismillah.",
    ],
    memoryTips: [
      "Lè ou wè yon timoun mizilman jis kòmanse aprann, premye bagay yo aprann li se Bismillah.",
    ],
  },
];
