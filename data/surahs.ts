export interface Surah {
  number: number;
  slug: string;
  nameArabic: string;
  nameCreole: string;
  meaning: string;
  verseCount: number;
  revelation: "Mèk" | "Medine";
  arabic: string;
  transliteration: string;
  creoleTranslation: string;
  background: string;
  whenToUse: string;
  theme: string;
}

export const SURAHS: Surah[] = [
  {
    number: 1,
    slug: "al-fatiha",
    nameArabic: "الْفَاتِحَة",
    nameCreole: "Al-Fatiha",
    meaning: "Ouvertur",
    verseCount: 7,
    revelation: "Mèk",
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
];
