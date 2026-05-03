export type SurahStatus = "complete" | "stub";

export interface Surah {
  number: number;
  slug: string;
  nameArabic: string;
  nameCreole: string;
  meaning: string;
  verseCount: number;
  revelation: "Mèk" | "Medine";
  /** "complete" surahs render full content; "stub" only show the index card. */
  status: SurahStatus;
  arabic?: string;
  transliteration?: string;
  creoleTranslation?: string;
  background?: string;
  whenToUse?: string;
  theme?: string;
}

// Authored entries first, stubs appended below; sorted at module load.
const RAW_SURAHS: Surah[] = [
  {
    number: 1,
    slug: "al-fatiha",
    nameArabic: "الْفَاتِحَة",
    nameCreole: "Al-Fatiha",
    meaning: "Ouvertur",
    verseCount: 7,
    revelation: "Mèk",
    status: "complete",
    arabic: `بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ١
ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢
ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣
مَٰلِكِ يَوۡمِ ٱلدِّينِ ٤
إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ٥
ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ٦
صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ٧`,
    transliteration: `Bismillāhi r-raḥmāni r-raḥīm
Al-ḥamdu lillāhi rabbi l-ʿālamīn
Ar-raḥmāni r-raḥīm
Māliki yawmi d-dīn
Iyyāka naʿbudu wa-iyyāka nastaʿīn
Ihdinā ṣ-ṣirāṭa l-mustaqīm
Ṣirāṭa llaḏīna anʿamta ʿalayhim ġayri l-maġḍūbi ʿalayhim wa-lā ḍ-ḍāllīn`,
    creoleTranslation: `Nan non Allah, Sa ki Trè Mizeriko, Sa ki Trè Konpasyon.
Tout lwanj pou Allah, Sènyè tout mond lan.
Sa ki Trè Mizeriko, Sa ki Trè Konpasyon.
Mèt Jou Jijman an.
Se ou sèlman nou adore, se ou sèlman nou mande èd.
Gide nou sou chemen dwat la.
Chemen moun ou fè favè yo — pa chemen moun ki nan kòlè, ni moun ki pèdu.`,
    background: "Al-Fatiha se premye sourate nan Koran. Li rele tou 'Mè Koran' (Umm al-Quran). Se yon priyè konplè — li gen lwanj, konfesyon, ak demand. Pwofèt ﷺ te di priyè san Al-Fatiha pa valid. Chak Mizilman li l omwen 17 fwa chak jou nan 5 priyè yo.",
    whenToUse: "Al-Fatiha li nan chak rak'ah priyè — li obligatwa. Ou ka tou li l pou lapriyè espesyal, pou geri malad, oswa kòm dua jeneral.",
    theme: "Lwanj, soumisyon, ak demand gidans",
  },
  {
    number: 112,
    slug: "al-ikhlas",
    nameArabic: "الْإِخْلَاص",
    nameCreole: "Al-Ikhlas",
    meaning: "Sinserite",
    verseCount: 4,
    revelation: "Mèk",
    status: "complete",
    arabic: `قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١
ٱللَّهُ ٱلصَّمَدُ ٢
لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ ٣
وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدٌ ٤`,
    transliteration: `Qul huwa Allāhu aḥad
Allāhu ṣ-ṣamad
Lam yalid wa-lam yūlad
Wa-lam yakun lahu kufuwan aḥad`,
    creoleTranslation: `Di: Li se Allah, youn sèl.
Allah, Sèl Sipò tout bagay.
Li pa fè pitit, li pa t fèt non plis.
Epi pa gen pèsonn ki tankou Li.`,
    background: "Sourate sa a revele lè Jwif yo ak lòt moun te mande Pwofèt ﷺ: 'Dekri Sènyè ou pou nou.' Li gen sèlman 4 vèsè men li dekri tout esans Tawheed (Ikite Allah). Pwofèt ﷺ te di li valab youn tyè Koran — paske li rezime pi enpòtan nan Koran an: Ikite Allah.",
    whenToUse: "Li nan chak priyè, apre Al-Fatiha. Tou li l 3 fwa maten ak aswè pou pwoteksyon. Bon pou eksplike Allah bay moun ki mande.",
    theme: "Ikite absoliye Allah",
  },
  {
    number: 113,
    slug: "al-falaq",
    nameArabic: "الْفَلَق",
    nameCreole: "Al-Falaq",
    meaning: "Lobo Jou",
    verseCount: 5,
    revelation: "Mèk",
    status: "complete",
    arabic: `قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ١
مِن شَرِّ مَا خَلَقَ ٢
وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٣
وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ ٤
وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ٥`,
    transliteration: `Qul aʿūḏu bi-rabbi l-falaq
Min šarri mā ḫalaq
Wa-min šarri ġāsiqin iḏā waqab
Wa-min šarri n-naffāṯāti fī l-ʿuqad
Wa-min šarri ḥāsidin iḏā ḥasad`,
    creoleTranslation: `Di: Mwen chèche refij nan Sènyè lobo jou a,
Kont mal tout sa Li te kreye,
Ak kont mal lannuit lè li tonbe,
Ak kont mal moun k ap fè maji,
Ak kont mal jalou lè li jalou.`,
    background: "Al-Falaq ak An-Nas (sourate 114) se 'de pwoteksyon yo' — Mu'awwidhatayn. Yo revele ansanm apre Pwofèt ﷺ te anpwazonne pa maji. Allah te revele yo pou pwoteksyon. Pwofèt ﷺ te abitye li yo chak maten, chak aswè, ak anvan dòmi.",
    whenToUse: "Li 3 fwa maten ak 3 fwa aswè pou pwoteksyon. Li anvan ou dòmi. Li sou moun malad pou geri.",
    theme: "Chèche refij ak pwoteksyon Allah",
  },
  {
    number: 114,
    slug: "an-nas",
    nameArabic: "النَّاس",
    nameCreole: "An-Nas",
    meaning: "Limanite",
    verseCount: 6,
    revelation: "Mèk",
    status: "complete",
    arabic: `قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ١
مَلِكِ ٱلنَّاسِ ٢
إِلَٰهِ ٱلنَّاسِ ٣
مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ ٤
ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ ٥
مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ ٦`,
    transliteration: `Qul aʿūḏu bi-rabbi n-nās
Maliki n-nās
Ilāhi n-nās
Min šarri l-waswāsi l-ḫannās
Allaḏī yuwaswisu fī ṣudūri n-nās
Mina l-ǧinnati wa-n-nās`,
    creoleTranslation: `Di: Mwen chèche refij nan Sènyè limanite,
Wa Limanite,
Bondye Limanite,
Kont mal chichiman ki kache,
Ki chichiman nan lestomak moun,
Soti nan jin ak nan moun.`,
    background: "An-Nas se dènye sourate nan Koran. Li mande pwoteksyon kont chatiman — movèze panse ak enfliyans nefas ki ka antre nan kè moun. Ansanm ak Al-Falaq, yo fòme yon pwoteksyon espirityèl konplè.",
    whenToUse: "Li chak maten, chak aswè, ak anvan dòmi avèk Al-Falaq. Bon tou pou ekspulse panse negatif.",
    theme: "Pwoteksyon kont chatiman entèn ak ekstèn",
  },
  {
    number: 108,
    slug: "al-kawthar",
    nameArabic: "الْكَوْثَر",
    nameCreole: "Al-Kawthar",
    meaning: "Abondans",
    verseCount: 3,
    revelation: "Mèk",
    status: "complete",
    arabic: `إِنَّآ أَعۡطَيۡنَٰكَ ٱلۡكَوۡثَرَ ١
فَصَلِّ لِرَبِّكَ وَٱنۡحَرۡ ٢
إِنَّ شَانِئَكَ هُوَ ٱلۡأَبۡتَرُ ٣`,
    transliteration: `Innā aʿṭaynāka l-kawṯar
Fa-ṣalli li-rabbika wa-nḥar
Inna šāniʾaka huwa l-abtar`,
    creoleTranslation: `Nou ban ou abondans,
Donk priye pou Sènyè ou epi sakrifye,
Se enmi ou ki pral san pitit (san eritye).`,
    background: "Sourate ki pi kout nan Koran — 3 vèsè sèlman. Li revele lè moun te pase Pwofèt ﷺ nan betiz paske pitit gason li te mouri. Allah te reponn avèk pwomès abondans — Al-Kawthar (yon rivyè nan Paradi). Malgre doulè, Allah te konfòte Pwofèt ﷺ epi di: se enmi ou ki pral san litè.",
    whenToUse: "Li nan priyè pou sonje bonte Allah. Li lè ou dekouraje pou sonje Allah toujou ba plis.",
    theme: "Bonte Allah ak konsolasyon",
  },
  {
    number: 103,
    slug: "al-asr",
    nameArabic: "الْعَصْر",
    nameCreole: "Al-Asr",
    meaning: "Tan",
    verseCount: 3,
    revelation: "Mèk",
    status: "complete",
    arabic: `وَٱلۡعَصۡرِ ١
إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ ٢
إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَتَوَاصَوۡاْ بِٱلۡحَقِّ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ ٣`,
    transliteration: `Wa-l-ʿaṣr
Inna l-insāna la-fī ḫusr
Illā llaḏīna āmanū wa-ʿamilū ṣ-ṣāliḥāti wa-tawāṣaw bi-l-ḥaqqi wa-tawāṣaw bi-ṣ-ṣabr`,
    creoleTranslation: `Pa tan an,
Tout limanite nan pèt,
Eksepte moun ki kwè, fè bonte, epi ankouraje youn lòt nan verite ak pasyans.`,
    background: "Imam Shafi'i te di: 'Si moun yo te meditasyon sèlman sourate sa a, li ta sifi pou yo.' Li rezime tout lavi reyisi: lafwa, bon travay, verite, ak pasyans. Tan an kouri — sa ki enpòtan se kijan ou itilize l.",
    whenToUse: "Li pou sonje valè tan ou. Medite dessou lè ou santi lavi ou pa gen direksyon.",
    theme: "Valè tan ak kondisyon reyisi",
  },
  {
    number: 105,
    slug: "al-fil",
    nameArabic: "الْفِيل",
    nameCreole: "Al-Fil",
    meaning: "Elefan",
    verseCount: 5,
    revelation: "Mèk",
    status: "complete",
    arabic: `أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِأَصۡحَٰبِ ٱلۡفِيلِ ١
أَلَمۡ يَجۡعَلۡ كَيۡدَهُمۡ فِي تَضۡلِيلٖ ٢
وَأَرۡسَلَ عَلَيۡهِمۡ طَيۡرًا أَبَابِيلَ ٣
تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ ٤
فَجَعَلَهُمۡ كَعَصۡفٖ مَّأۡكُولٍ ٥`,
    transliteration: `A-lam tara kayfa faʿala rabbuka bi-aṣḥābi l-fīl
A-lam yaǧʿal kaydahum fī taḍlīl
Wa-arsala ʿalayhim ṭayran abābīl
Tarmīhim bi-ḥiǧāratin min siǧǧīl
Fa-ǧaʿalahum ka-ʿaṣfin maʾkūl`,
    creoleTranslation: `Èske ou pa wè kijan Sènyè ou te trete moun elefan yo?
Èske Li pa fè plan yo echwe?
Li voye sou yo yon bann zwazo,
Ki te ba yo wòch nan ajil,
Epi Li fè yo tankou pay manje.`,
    background: "Istwa sa a pase ane Pwofèt ﷺ te fèt — 570 AD. Abraha, wa Yemen, te vini avèk yon lame ki gen elefan pou detwi Ka'bah. Anvan yo rive, Allah voye yon bann zwazo (Ababil) ki te lage wòch sou lame a epi kraze yo nèt. Sa montre Ka'bah pwoteje pa Allah.",
    whenToUse: "Li pou sonje pwoteksyon Allah ak pouvwa Li. Bon pou anseye timoun istwa mirak Allah yo.",
    theme: "Pwoteksyon Allah ak defèt ènmi",
  },

  // EXPAND: stubs only — Arabic, transliteration, Krèyol meaning, background, whenToUse,
  //         and theme need to be authored. See docs/limye-islayik-master-prompt.md §22.
  { number: 2, slug: "al-baqarah", nameArabic: "الْبَقَرَة", nameCreole: "Al-Baqarah", meaning: "Bèf la", verseCount: 286, revelation: "Medine", status: "stub" },
  { number: 3, slug: "aal-imran", nameArabic: "آل عِمْرَان", nameCreole: "Al Imran", meaning: "Fanmi Imran", verseCount: 200, revelation: "Medine", status: "stub" },
  { number: 4, slug: "an-nisa", nameArabic: "النِّسَاء", nameCreole: "An-Nisa", meaning: "Fanm yo", verseCount: 176, revelation: "Medine", status: "stub" },
  { number: 5, slug: "al-maidah", nameArabic: "الْمَائِدَة", nameCreole: "Al-Maidah", meaning: "Tab manje a", verseCount: 120, revelation: "Medine", status: "stub" },
  { number: 6, slug: "al-anam", nameArabic: "الْأَنْعَام", nameCreole: "Al-An'am", meaning: "Bèt yo", verseCount: 165, revelation: "Mèk", status: "stub" },
  { number: 7, slug: "al-araf", nameArabic: "الْأَعْرَاف", nameCreole: "Al-A'raf", meaning: "Wotè yo", verseCount: 206, revelation: "Mèk", status: "stub" },
  { number: 8, slug: "al-anfal", nameArabic: "الْأَنْفَال", nameCreole: "Al-Anfal", meaning: "Sa yo pran nan lagè", verseCount: 75, revelation: "Medine", status: "stub" },
  { number: 9, slug: "at-tawbah", nameArabic: "التَّوْبَة", nameCreole: "At-Tawbah", meaning: "Repantans", verseCount: 129, revelation: "Medine", status: "stub" },
  { number: 10, slug: "yunus", nameArabic: "يُونُس", nameCreole: "Yunus", meaning: "Yunus", verseCount: 109, revelation: "Mèk", status: "stub" },
  { number: 11, slug: "hud", nameArabic: "هُود", nameCreole: "Hud", meaning: "Hud", verseCount: 123, revelation: "Mèk", status: "stub" },
  { number: 12, slug: "yusuf", nameArabic: "يُوسُف", nameCreole: "Yusuf", meaning: "Yusuf", verseCount: 111, revelation: "Mèk", status: "stub" },
  { number: 13, slug: "ar-rad", nameArabic: "الرَّعْد", nameCreole: "Ar-Ra'd", meaning: "Tonè", verseCount: 43, revelation: "Medine", status: "stub" },
  { number: 14, slug: "ibrahim", nameArabic: "إِبْرَاهِيم", nameCreole: "Ibrahim", meaning: "Ibrahim", verseCount: 52, revelation: "Mèk", status: "stub" },
  { number: 15, slug: "al-hijr", nameArabic: "الْحِجْر", nameCreole: "Al-Hijr", meaning: "Wòch yo", verseCount: 99, revelation: "Mèk", status: "stub" },
  { number: 16, slug: "an-nahl", nameArabic: "النَّحْل", nameCreole: "An-Nahl", meaning: "Myèl la", verseCount: 128, revelation: "Mèk", status: "stub" },
  { number: 17, slug: "al-isra", nameArabic: "الْإِسْرَاء", nameCreole: "Al-Isra", meaning: "Vwayaj nuit la", verseCount: 111, revelation: "Mèk", status: "stub" },
  { number: 18, slug: "al-kahf", nameArabic: "الْكَهْف", nameCreole: "Al-Kahf", meaning: "Gwòt la", verseCount: 110, revelation: "Mèk", status: "stub" },
  { number: 19, slug: "maryam", nameArabic: "مَرْيَم", nameCreole: "Maryam", meaning: "Mari", verseCount: 98, revelation: "Mèk", status: "stub" },
  { number: 20, slug: "taha", nameArabic: "طه", nameCreole: "Ta-Ha", meaning: "Ta-Ha", verseCount: 135, revelation: "Mèk", status: "stub" },
  { number: 21, slug: "al-anbiya", nameArabic: "الْأَنْبِيَاء", nameCreole: "Al-Anbiya", meaning: "Pwofèt yo", verseCount: 112, revelation: "Mèk", status: "stub" },
  { number: 22, slug: "al-hajj", nameArabic: "الْحَجّ", nameCreole: "Al-Hajj", meaning: "Pèlerinaj", verseCount: 78, revelation: "Medine", status: "stub" },
  { number: 23, slug: "al-muminun", nameArabic: "الْمُؤْمِنُون", nameCreole: "Al-Mu'minun", meaning: "Kwayan yo", verseCount: 118, revelation: "Mèk", status: "stub" },
  { number: 24, slug: "an-nur", nameArabic: "النُّور", nameCreole: "An-Nur", meaning: "Limyè a", verseCount: 64, revelation: "Medine", status: "stub" },
  { number: 25, slug: "al-furqan", nameArabic: "الْفُرْقَان", nameCreole: "Al-Furqan", meaning: "Kritè a", verseCount: 77, revelation: "Mèk", status: "stub" },
  { number: 26, slug: "ash-shuara", nameArabic: "الشُّعَرَاء", nameCreole: "Ash-Shu'ara", meaning: "Powèt yo", verseCount: 227, revelation: "Mèk", status: "stub" },
  { number: 27, slug: "an-naml", nameArabic: "النَّمْل", nameCreole: "An-Naml", meaning: "Foumi yo", verseCount: 93, revelation: "Mèk", status: "stub" },
  { number: 28, slug: "al-qasas", nameArabic: "الْقَصَص", nameCreole: "Al-Qasas", meaning: "Istwa yo", verseCount: 88, revelation: "Mèk", status: "stub" },
  { number: 29, slug: "al-ankabut", nameArabic: "الْعَنْكَبُوت", nameCreole: "Al-Ankabut", meaning: "Areye a", verseCount: 69, revelation: "Mèk", status: "stub" },
  { number: 30, slug: "ar-rum", nameArabic: "الرُّوم", nameCreole: "Ar-Rum", meaning: "Wòm yo", verseCount: 60, revelation: "Mèk", status: "stub" },
  { number: 31, slug: "luqman", nameArabic: "لُقْمَان", nameCreole: "Luqman", meaning: "Luqman", verseCount: 34, revelation: "Mèk", status: "stub" },
  { number: 32, slug: "as-sajdah", nameArabic: "السَّجْدَة", nameCreole: "As-Sajdah", meaning: "Pwostènasyon", verseCount: 30, revelation: "Mèk", status: "stub" },
  { number: 33, slug: "al-ahzab", nameArabic: "الْأَحْزَاب", nameCreole: "Al-Ahzab", meaning: "Konfederasyon yo", verseCount: 73, revelation: "Medine", status: "stub" },
  { number: 34, slug: "saba", nameArabic: "سَبَأ", nameCreole: "Saba", meaning: "Saba", verseCount: 54, revelation: "Mèk", status: "stub" },
  { number: 35, slug: "fatir", nameArabic: "فَاطِر", nameCreole: "Fatir", meaning: "Kreyatè a", verseCount: 45, revelation: "Mèk", status: "stub" },
  { number: 36, slug: "yasin", nameArabic: "يس", nameCreole: "Ya-Sin", meaning: "Ya-Sin", verseCount: 83, revelation: "Mèk", status: "stub" },
  { number: 37, slug: "as-saffat", nameArabic: "الصَّافَّات", nameCreole: "As-Saffat", meaning: "Sa ki nan ranje yo", verseCount: 182, revelation: "Mèk", status: "stub" },
  { number: 38, slug: "sad", nameArabic: "ص", nameCreole: "Sad", meaning: "Sad", verseCount: 88, revelation: "Mèk", status: "stub" },
  { number: 39, slug: "az-zumar", nameArabic: "الزُّمَر", nameCreole: "Az-Zumar", meaning: "Gwoup yo", verseCount: 75, revelation: "Mèk", status: "stub" },
  { number: 40, slug: "ghafir", nameArabic: "غَافِر", nameCreole: "Ghafir", meaning: "Padonnen", verseCount: 85, revelation: "Mèk", status: "stub" },
  { number: 41, slug: "fussilat", nameArabic: "فُصِّلَت", nameCreole: "Fussilat", meaning: "Eksplike an detay", verseCount: 54, revelation: "Mèk", status: "stub" },
  { number: 42, slug: "ash-shura", nameArabic: "الشُّورَى", nameCreole: "Ash-Shura", meaning: "Konsiltasyon", verseCount: 53, revelation: "Mèk", status: "stub" },
  { number: 43, slug: "az-zukhruf", nameArabic: "الزُّخْرُف", nameCreole: "Az-Zukhruf", meaning: "Bèl bagay yo", verseCount: 89, revelation: "Mèk", status: "stub" },
  { number: 44, slug: "ad-dukhan", nameArabic: "الدُّخَان", nameCreole: "Ad-Dukhan", meaning: "Lafimen", verseCount: 59, revelation: "Mèk", status: "stub" },
  { number: 45, slug: "al-jathiyah", nameArabic: "الْجَاثِيَة", nameCreole: "Al-Jathiyah", meaning: "A jenou", verseCount: 37, revelation: "Mèk", status: "stub" },
  { number: 46, slug: "al-ahqaf", nameArabic: "الْأَحْقَاف", nameCreole: "Al-Ahqaf", meaning: "Ti mòn sab yo", verseCount: 35, revelation: "Mèk", status: "stub" },
  { number: 47, slug: "muhammad", nameArabic: "مُحَمَّد", nameCreole: "Muhammad", meaning: "Muhammad", verseCount: 38, revelation: "Medine", status: "stub" },
  { number: 48, slug: "al-fath", nameArabic: "الْفَتْح", nameCreole: "Al-Fath", meaning: "Viktwa a", verseCount: 29, revelation: "Medine", status: "stub" },
  { number: 49, slug: "al-hujurat", nameArabic: "الْحُجُرَات", nameCreole: "Al-Hujurat", meaning: "Chanm yo", verseCount: 18, revelation: "Medine", status: "stub" },
  { number: 50, slug: "qaf", nameArabic: "ق", nameCreole: "Qaf", meaning: "Qaf", verseCount: 45, revelation: "Mèk", status: "stub" },
  { number: 51, slug: "adh-dhariyat", nameArabic: "الذَّارِيَات", nameCreole: "Adh-Dhariyat", meaning: "Van ki simenen", verseCount: 60, revelation: "Mèk", status: "stub" },
  { number: 52, slug: "at-tur", nameArabic: "الطُّور", nameCreole: "At-Tur", meaning: "Mòn nan", verseCount: 49, revelation: "Mèk", status: "stub" },
  { number: 53, slug: "an-najm", nameArabic: "النَّجْم", nameCreole: "An-Najm", meaning: "Etwal la", verseCount: 62, revelation: "Mèk", status: "stub" },
  { number: 54, slug: "al-qamar", nameArabic: "الْقَمَر", nameCreole: "Al-Qamar", meaning: "Lalin la", verseCount: 55, revelation: "Mèk", status: "stub" },
  { number: 55, slug: "ar-rahman", nameArabic: "الرَّحْمَٰن", nameCreole: "Ar-Rahman", meaning: "Trè Mizeriko", verseCount: 78, revelation: "Medine", status: "stub" },
  { number: 56, slug: "al-waqiah", nameArabic: "الْوَاقِعَة", nameCreole: "Al-Waqi'ah", meaning: "Evènman an", verseCount: 96, revelation: "Mèk", status: "stub" },
  { number: 57, slug: "al-hadid", nameArabic: "الْحَدِيد", nameCreole: "Al-Hadid", meaning: "Fè a", verseCount: 29, revelation: "Medine", status: "stub" },
  { number: 58, slug: "al-mujadilah", nameArabic: "الْمُجَادِلَة", nameCreole: "Al-Mujadilah", meaning: "Diskisyon an", verseCount: 22, revelation: "Medine", status: "stub" },
  { number: 59, slug: "al-hashr", nameArabic: "الْحَشْر", nameCreole: "Al-Hashr", meaning: "Ekzile a", verseCount: 24, revelation: "Medine", status: "stub" },
  { number: 60, slug: "al-mumtahanah", nameArabic: "الْمُمْتَحَنَة", nameCreole: "Al-Mumtahanah", meaning: "Egzamine", verseCount: 13, revelation: "Medine", status: "stub" },
  { number: 61, slug: "as-saff", nameArabic: "الصَّفّ", nameCreole: "As-Saff", meaning: "Ranje a", verseCount: 14, revelation: "Medine", status: "stub" },
  { number: 62, slug: "al-jumuah", nameArabic: "الْجُمُعَة", nameCreole: "Al-Jumu'ah", meaning: "Vandredi", verseCount: 11, revelation: "Medine", status: "stub" },
  { number: 63, slug: "al-munafiqun", nameArabic: "الْمُنَافِقُون", nameCreole: "Al-Munafiqun", meaning: "Ipokrit yo", verseCount: 11, revelation: "Medine", status: "stub" },
  { number: 64, slug: "at-taghabun", nameArabic: "التَّغَابُن", nameCreole: "At-Taghabun", meaning: "Pèt mityèl", verseCount: 18, revelation: "Medine", status: "stub" },
  { number: 65, slug: "at-talaq", nameArabic: "الطَّلَاق", nameCreole: "At-Talaq", meaning: "Divòs", verseCount: 12, revelation: "Medine", status: "stub" },
  { number: 66, slug: "at-tahrim", nameArabic: "التَّحْرِيم", nameCreole: "At-Tahrim", meaning: "Entèdiksyon", verseCount: 12, revelation: "Medine", status: "stub" },
  { number: 67, slug: "al-mulk", nameArabic: "الْمُلْك", nameCreole: "Al-Mulk", meaning: "Wayote a", verseCount: 30, revelation: "Mèk", status: "stub" },
  { number: 68, slug: "al-qalam", nameArabic: "الْقَلَم", nameCreole: "Al-Qalam", meaning: "Plim la", verseCount: 52, revelation: "Mèk", status: "stub" },
  { number: 69, slug: "al-haqqah", nameArabic: "الْحَاقَّة", nameCreole: "Al-Haqqah", meaning: "Reyalite a", verseCount: 52, revelation: "Mèk", status: "stub" },
  { number: 70, slug: "al-maarij", nameArabic: "الْمَعَارِج", nameCreole: "Al-Ma'arij", meaning: "Esye yo", verseCount: 44, revelation: "Mèk", status: "stub" },
  { number: 71, slug: "nuh", nameArabic: "نُوح", nameCreole: "Nuh", meaning: "Nuh", verseCount: 28, revelation: "Mèk", status: "stub" },
  { number: 72, slug: "al-jinn", nameArabic: "الْجِنّ", nameCreole: "Al-Jinn", meaning: "Jin yo", verseCount: 28, revelation: "Mèk", status: "stub" },
  { number: 73, slug: "al-muzzammil", nameArabic: "الْمُزَّمِّل", nameCreole: "Al-Muzzammil", meaning: "Ki anvlope", verseCount: 20, revelation: "Mèk", status: "stub" },
  { number: 74, slug: "al-muddaththir", nameArabic: "الْمُدَّثِّر", nameCreole: "Al-Muddaththir", meaning: "Ki kouvri", verseCount: 56, revelation: "Mèk", status: "stub" },
  { number: 75, slug: "al-qiyamah", nameArabic: "الْقِيَامَة", nameCreole: "Al-Qiyamah", meaning: "Rezireksyon", verseCount: 40, revelation: "Mèk", status: "stub" },
  { number: 76, slug: "al-insan", nameArabic: "الْإِنسَان", nameCreole: "Al-Insan", meaning: "Moun nan", verseCount: 31, revelation: "Medine", status: "stub" },
  { number: 77, slug: "al-mursalat", nameArabic: "الْمُرْسَلَات", nameCreole: "Al-Mursalat", meaning: "Sa yo voye", verseCount: 50, revelation: "Mèk", status: "stub" },
  { number: 78, slug: "an-naba", nameArabic: "النَّبَأ", nameCreole: "An-Naba", meaning: "Nouvèl la", verseCount: 40, revelation: "Mèk", status: "stub" },
  { number: 79, slug: "an-naziat", nameArabic: "النَّازِعَات", nameCreole: "An-Nazi'at", meaning: "Sa ki rache", verseCount: 46, revelation: "Mèk", status: "stub" },
  { number: 80, slug: "abasa", nameArabic: "عَبَسَ", nameCreole: "'Abasa", meaning: "Li te franse", verseCount: 42, revelation: "Mèk", status: "stub" },
  { number: 81, slug: "at-takwir", nameArabic: "التَّكْوِير", nameCreole: "At-Takwir", meaning: "Anvlope", verseCount: 29, revelation: "Mèk", status: "stub" },
  { number: 82, slug: "al-infitar", nameArabic: "الْإِنفِطَار", nameCreole: "Al-Infitar", meaning: "Fann", verseCount: 19, revelation: "Mèk", status: "stub" },
  { number: 83, slug: "al-mutaffifin", nameArabic: "الْمُطَفِّفِين", nameCreole: "Al-Mutaffifin", meaning: "Voleur yo", verseCount: 36, revelation: "Mèk", status: "stub" },
  { number: 84, slug: "al-inshiqaq", nameArabic: "الْإِنشِقَاق", nameCreole: "Al-Inshiqaq", meaning: "Fann", verseCount: 25, revelation: "Mèk", status: "stub" },
  { number: 85, slug: "al-buruj", nameArabic: "الْبُرُوج", nameCreole: "Al-Buruj", meaning: "Konstelasyon yo", verseCount: 22, revelation: "Mèk", status: "stub" },
  { number: 86, slug: "at-tariq", nameArabic: "الطَّارِق", nameCreole: "At-Tariq", meaning: "Vizitè nuit la", verseCount: 17, revelation: "Mèk", status: "stub" },
  { number: 87, slug: "al-ala", nameArabic: "الْأَعْلَى", nameCreole: "Al-A'la", meaning: "Pi Wo a", verseCount: 19, revelation: "Mèk", status: "stub" },
  { number: 88, slug: "al-ghashiyah", nameArabic: "الْغَاشِيَة", nameCreole: "Al-Ghashiyah", meaning: "Sa ki kouvri", verseCount: 26, revelation: "Mèk", status: "stub" },
  { number: 89, slug: "al-fajr", nameArabic: "الْفَجْر", nameCreole: "Al-Fajr", meaning: "Lobo jou", verseCount: 30, revelation: "Mèk", status: "stub" },
  { number: 90, slug: "al-balad", nameArabic: "الْبَلَد", nameCreole: "Al-Balad", meaning: "Vil la", verseCount: 20, revelation: "Mèk", status: "stub" },
  { number: 91, slug: "ash-shams", nameArabic: "الشَّمْس", nameCreole: "Ash-Shams", meaning: "Solèy", verseCount: 15, revelation: "Mèk", status: "stub" },
  { number: 92, slug: "al-layl", nameArabic: "اللَّيْل", nameCreole: "Al-Layl", meaning: "Lannuit", verseCount: 21, revelation: "Mèk", status: "stub" },
  { number: 93, slug: "ad-duha", nameArabic: "الضُّحَى", nameCreole: "Ad-Duha", meaning: "Maten klere", verseCount: 11, revelation: "Mèk", status: "stub" },
  { number: 94, slug: "ash-sharh", nameArabic: "الشَّرْح", nameCreole: "Ash-Sharh", meaning: "Ouvèti pwatrin", verseCount: 8, revelation: "Mèk", status: "stub" },
  { number: 95, slug: "at-tin", nameArabic: "التِّين", nameCreole: "At-Tin", meaning: "Fig la", verseCount: 8, revelation: "Mèk", status: "stub" },
  { number: 96, slug: "al-alaq", nameArabic: "الْعَلَق", nameCreole: "Al-Alaq", meaning: "Kayo san", verseCount: 19, revelation: "Mèk", status: "stub" },
  { number: 97, slug: "al-qadr", nameArabic: "الْقَدْر", nameCreole: "Al-Qadr", meaning: "Pouvwa", verseCount: 5, revelation: "Mèk", status: "stub" },
  { number: 98, slug: "al-bayyinah", nameArabic: "الْبَيِّنَة", nameCreole: "Al-Bayyinah", meaning: "Prèv klè", verseCount: 8, revelation: "Medine", status: "stub" },
  { number: 99, slug: "az-zalzalah", nameArabic: "الزَّلْزَلَة", nameCreole: "Az-Zalzalah", meaning: "Tranbleman", verseCount: 8, revelation: "Medine", status: "stub" },
  { number: 100, slug: "al-adiyat", nameArabic: "الْعَادِيَات", nameCreole: "Al-Adiyat", meaning: "Sa ki kouri", verseCount: 11, revelation: "Mèk", status: "stub" },
  { number: 101, slug: "al-qariah", nameArabic: "الْقَارِعَة", nameCreole: "Al-Qari'ah", meaning: "Frapadè a", verseCount: 11, revelation: "Mèk", status: "stub" },
  { number: 102, slug: "at-takathur", nameArabic: "التَّكَاثُر", nameCreole: "At-Takathur", meaning: "Konpetisyon richès", verseCount: 8, revelation: "Mèk", status: "stub" },
  { number: 104, slug: "al-humazah", nameArabic: "الْهُمَزَة", nameCreole: "Al-Humazah", meaning: "Kalonyatè a", verseCount: 9, revelation: "Mèk", status: "stub" },
  { number: 106, slug: "quraysh", nameArabic: "قُرَيْش", nameCreole: "Quraysh", meaning: "Quraysh", verseCount: 4, revelation: "Mèk", status: "stub" },
  { number: 107, slug: "al-maun", nameArabic: "الْمَاعُون", nameCreole: "Al-Ma'un", meaning: "Asistans", verseCount: 7, revelation: "Mèk", status: "stub" },
  { number: 109, slug: "al-kafirun", nameArabic: "الْكَافِرُون", nameCreole: "Al-Kafirun", meaning: "Enfidèl yo", verseCount: 6, revelation: "Mèk", status: "stub" },
  { number: 110, slug: "an-nasr", nameArabic: "النَّصْر", nameCreole: "An-Nasr", meaning: "Sekou", verseCount: 3, revelation: "Medine", status: "stub" },
  { number: 111, slug: "al-masad", nameArabic: "الْمَسَد", nameCreole: "Al-Masad", meaning: "Fib palmye", verseCount: 5, revelation: "Mèk", status: "stub" },
];

export const SURAHS: Surah[] = [...RAW_SURAHS].sort((a, b) => a.number - b.number);
