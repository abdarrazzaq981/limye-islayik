export interface Lesson {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  poukisa?: string; // "Why" spiritual meaning callout
  keyTerms?: { term: string; definition: string }[];
  quote?: { arabic: string; transliteration: string; creole: string; source: string };
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: string[];
  correct: number;
  explanation: string;
  encouragement: string;
}

export interface Pillar {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export const PILLARS: Pillar[] = [
  {
    slug: "sa-islam-ye",
    number: 1,
    title: "Sa Islam Ye",
    subtitle: "Fondasyon lafwa ou",
    description: "Aprann kisa Islam ye, kilès Allah ye, kilès Pwofèt Muhammad ﷺ ye, ak wòl Jezi nan Islam.",
    icon: "☪",
    color: "green",
    lessons: [
      {
        id: "kisa-islam",
        title: "Kisa Islam Ye?",
        subtitle: "Kòmansman tout bagay",
        body: "Pawòl 'Islam' an Arabe vle di 'soumisyon' ak 'lapè'. Yon Mizilman se yon moun ki chwazi soumèt tèt li devan Allah — Bondye ki kreye syèl ak tè. Islam se yon fason lavi konplè ki kouvri priyè, fwaye, ak relasyon ou ak lòt moun. Li kòmanse ak Pwofèt Adam ﷺ epi li pafè avèk mesaj final Pwofèt Muhammad ﷺ.",
        poukisa: "Islam pa sèlman yon relijyon — se yon gid pou tout aspè lavi ou. Allah voye pwofèt yo pou montre lòm kijan pou viv ak dignite ak amou.",
        keyTerms: [
          { term: "Islam", definition: "Soumisyon ak lapè devan Allah" },
          { term: "Mizilman", definition: "Moun ki aksepte Islam" },
          { term: "Allah", definition: "Non Bondye an Arabe — youn, inik, san parey" },
        ],
        quote: {
          arabic: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ",
          transliteration: "Inna ad-dīna 'inda Allāhi al-Islām",
          creole: "Relijyon ki devan Allah se Islam.",
          source: "Koran 3:19",
        },
      },
      {
        id: "kiles-allah",
        title: "Kilès Allah Ye?",
        subtitle: "Bondye ki Youn, ki pa gen parey",
        body: "Allah se Non Bondye an Arabe. Li kreye tout bagay — syèl, tè, lom, ak tout sa ki egziste. Li pa gen pitit, li pa fèt. Li toujou la, li konnen tout bagay, li ka fè tout bagay. Li renmen moun ki fè bonte epi li padonnen pechè moun ki tounen ban li. Nan Islam, nou pa adore estatik ni moun — nou adore sèlman Allah.",
        poukisa: "Konnen Allah nan tout fòs li ba ou lapè nan kè ou. Lè ou konnen Li ka fè tout bagay epi Li renmen ou, ou pa bezwen pè.",
        keyTerms: [
          { term: "Tawheed", definition: "Ikite Allah — Li se youn sèl, san parey" },
          { term: "Ar-Rahman", definition: "Youn nan non Allah: 'Sa ki Trè Mizeriko'" },
          { term: "Ar-Raheem", definition: "Youn nan non Allah: 'Sa ki Trè Konpasyon'" },
        ],
        quote: {
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
          transliteration: "Qul huwa Allāhu aḥad",
          creole: "Di: Li se Allah, youn sèl.",
          source: "Koran 112:1",
        },
      },
      {
        id: "kiles-muhammad",
        title: "Kilès Pwofèt Muhammad ﷺ Ye?",
        subtitle: "Dènye mesaje Allah",
        body: "Muhammad ﷺ fèt an 570 apre Jezikri nan vil Mèk, Arabi. Li grandi kòm yon òfelen men li te gen bon karaktè — pèp la rele li 'Al-Amin' (moun ou ka fè konfyans). Nan laj 40 an, Allah voye zanj Jibreel ba li pou revele Koran an. Li pase 23 an ap pote mesaj la — pa avèk sipè, men avèk sajès, bonte, ak pasyans. Li pa yon Bondye — li se yon moun tankou nou, men pi bon nan nou.",
        poukisa: "Pwofèt ﷺ montre nou kijan pou viv mesaj Islam la chak jou. Lavi li se egzanp pou nou tout.",
        keyTerms: [
          { term: "ﷺ", definition: "Sallallahu alayhi wa sallam — beneyi sou li" },
          { term: "Al-Amin", definition: "Moun ou ka fè konfyans — ti non Pwofèt la" },
          { term: "Hadith", definition: "Mo ak aksyon Pwofèt ﷺ yo ki anregistre" },
        ],
      },
      {
        id: "jezi-nan-islam",
        title: "Kilès Jezi Ye Nan Islam?",
        subtitle: "Pwofèt ki onore anpil",
        body: "Nan Islam, Jezi — ke nou rele 'Isa ﷺ — se youn nan pi gran pwofèt Allah yo. Li fèt nan yon mannyè mirak depi Vyèj Marya (Maryam). Li te fè mirak: geri malad, ranmase mouri, bay avèg lavision — tout sa avèk pèmisyon Allah. Men Islam di li pa Bondye ak pa Pitit Bondye — li se youn nan sèvitè ak mesaje Allah yo. Nou renmen Jezi ﷺ, nou kwè nan li, epi nou tann retou li nan fen lemonn.",
        poukisa: "Pou yon Ayisyen k ap kite Krisyanis vin nan Islam, sa enpòtan: ou pa abandone Jezi — ou aprann vre wòl li kòm pwofèt Allah.",
        keyTerms: [
          { term: "'Isa ﷺ", definition: "Non Jezi an Arabe nan Koran" },
          { term: "Maryam", definition: "Vyèj Marya — onore anpil nan Islam" },
          { term: "Kalimatullah", definition: "'Mo Allah' — tit onè pou 'Isa ﷺ" },
        ],
        quote: {
          arabic: "إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ",
          transliteration: "Innamā al-Masīḥu 'Īsā ibnu Maryama rasūlu Allāh",
          creole: "Masih Jezi, pitit Marya, se mesaje Allah.",
          source: "Koran 4:171",
        },
      },
      {
        id: "6-pilye-lafwa",
        title: "6 Pilye Lafwa (Aqeedah)",
        subtitle: "Sa yon Mizilman kwè nan li",
        body: "Pou yo ka rele ou Mizilman, ou dwe kwè nan 6 bagay fondamantal: (1) Allah — youn sèl Bondye. (2) Zanj yo — kreyati Allah ki fèt nan limyè, yo pa gen pwòp volonte, yo obeyi sèlman Allah. (3) Liv yo — Towra, Zabur, Enjil, ak Koran — tout te vre, men sèlman Koran an rete nan fòm orijinal li. (4) Pwofèt yo — depi Adam rive Muhammad ﷺ, enkli Moise, Abrahám, Jezi. (5) Jou Jijman — yon jou kote tout moun pral rann kont devan Allah. (6) Destin — Allah konnen tout bagay davans, men li ba nou lib volonte.",
        poukisa: "Kwayans sa yo ba ou yon baz solid. Ou ka reponn nenpòt kesyon sou sa ou kwè an konfyans.",
        keyTerms: [
          { term: "Aqeedah", definition: "Kwayans fondamantal Mizilman" },
          { term: "Zanj", definition: "Zanj yo — Jibreel, Mika'il, Israfeel" },
          { term: "Qadar", definition: "Destin — Allah konnen tout bagay" },
        ],
      },
      {
        id: "5-pilye-islam-intro",
        title: "5 Pilye Islam — Entwodiksyon",
        subtitle: "Sa yon Mizilman fè",
        body: "Si 6 pilye lafwa yo se sa ou kwè, 5 pilye Islam yo se sa ou fè. (1) Shahadah — temwayaj lafwa: di 'Pa gen Bondye anpare Allah, Muhammad se mesaje Li.' (2) Salat — 5 priyè chak jou. (3) Zakah — bay yon pòsyon richès ou pou pòv yo. (4) Sawm — jene nan mwa Ramadan. (5) Hajj — pèlerinas nan Mèk yon fwa nan lavi, si ou ka fè sa.",
        poukisa: "Pilye sa yo se kolòn kay lafwa ou. Yo kenbe ou konekte ak Allah chak jou, chak ane, pandan tout lavi ou.",
        keyTerms: [
          { term: "Shahadah", definition: "Deklarasyon lafwa — premye pilye" },
          { term: "Salat", definition: "Priyè — dezyèm pilye" },
          { term: "Zakah", definition: "Charité obligatwa — twazyèm pilye" },
        ],
      },
      {
        id: "shahadah",
        title: "Shahadah — Temwayaj Lafwa",
        subtitle: "Mo ki chanje lavi ou",
        body: "Shahadah la se: 'Ashhadu an lā ilāha illā Allāh, wa ashhadu anna Muḥammadan rasūlu Allāh.' An Kreyòl: 'Mwen temwaye pa gen Bondye anpare Allah, epi mwen temwaye Muhammad se mesaje Allah.' Lè ou di mo sa yo ak kè ouvè ak konpreyansyon, ou ofisyèlman vin Mizilman. Se de deklarasyon: Allah se youn sèl Bondye, ak Muhammad ﷺ se dènye mesaje Li.",
        poukisa: "Shahadah la pa sèlman mo — se yon angajman. Ou di ou aksepte Allah kòm sèl Sènyè ou ak Pwofèt ﷺ kòm gid ou nan lavi.",
        keyTerms: [
          { term: "Shahadah", definition: "Temwayaj — 'pa gen Bondye anpare Allah'" },
          { term: "Lā ilāha illā Allāh", definition: "Pa gen Bondye (diy adore) anpare Allah" },
          { term: "Muḥammadan rasūlu Allāh", definition: "Muhammad se mesaje Allah" },
        ],
        quote: {
          arabic: "أَشْهَدُ أَن لَّا إِلَٰهَ إِلَّا ٱللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَّسُولُ ٱللَّهِ",
          transliteration: "Ashhadu an lā ilāha illā Allāh, wa ashhadu anna Muḥammadan rasūlu Allāh",
          creole: "Mwen temwaye pa gen Bondye anpare Allah, ak mwen temwaye Muhammad se mesaje Allah.",
          source: "Shahadah",
        },
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Kisa mo 'Islam' vle di an Arabe?",
        choices: ["Lagè", "Soumisyon ak lapè", "Priyè", "Lwanj"],
        correct: 1,
        explanation: "Islam vle di soumisyon devan Allah ak lapè ki soti nan soumisyon sa a.",
        encouragement: "Ekselan! Ou kòmanse ak baz la!",
      },
      {
        id: "q2",
        question: "Ki wòl Jezi (Isa ﷺ) nan Islam?",
        choices: ["Li se Bondye", "Li se Pitit Bondye", "Li se yon gran pwofèt Allah", "Li pa gen enpòtans"],
        correct: 2,
        explanation: "Nan Islam, Jezi se youn nan pi gran pwofèt Allah yo — li onore, renme, men li pa Bondye.",
        encouragement: "Brav! Sa se yon pwen trè enpòtan pou konnen!",
      },
      {
        id: "q3",
        question: "Ki kantite pilye lafwa (Aqeedah) ki genyen nan Islam?",
        choices: ["3", "4", "5", "6"],
        correct: 3,
        explanation: "Gen 6 pilye lafwa: Allah, zanj, liv, pwofèt, Jou Jijman, ak destin.",
        encouragement: "Parfè! Ou aprann vit!",
      },
      {
        id: "q4",
        question: "Ki premye mo Shahadah la?",
        choices: ["Allahu Akbar", "Bismillah", "Ashhadu an lā ilāha illā Allāh", "Alhamdulillah"],
        correct: 2,
        explanation: "Shahadah la kòmanse ak 'Ashhadu an lā ilāha illā Allāh' — Mwen temwaye pa gen Bondye anpare Allah.",
        encouragement: "Bèl! Kontinye konsa!",
      },
    ],
  },

  {
    slug: "wudu",
    number: 2,
    title: "Wudu",
    subtitle: "Pwoprete devan Allah",
    description: "Aprann poukisa nou fè wudu, kijan pou fè l etap pa etap, ak sa ki ka kraze li.",
    icon: "💧",
    color: "navy",
    lessons: [
      {
        id: "poukisa-wudu",
        title: "Poukisa Nou Fè Wudu?",
        subtitle: "Pwoprete kò ak nanm",
        body: "Wudu se ablisyon ritiyèl nou fè anvan priyè. Men wudu pa sèlman lave kò — se yon preparasyon espirityèl tou. Lè ou fè wudu, ou mete tèt ou nan yon eta pwòpte pou kanpe devan Allah. Pwofèt ﷺ te di: 'Priyè san wudu pa aksepte.' Wudu oblije anvan chak priyè, men ou ka fè yon sèl wudu pou plizyè priyè si li pa kraze.",
        poukisa: "Wudu ban ou opòtinite pa jwenn pwoprete fizik sèlman, men tou depoze chaj jou a epi ou prepare kè ou pou pale ak Allah.",
        keyTerms: [
          { term: "Wudu", definition: "Ablisyon ritiyèl anvan priyè" },
          { term: "Tahara", definition: "Pwoprete — kondisyon fondamantal nan Islam" },
          { term: "Niyyah", definition: "Entansyon — ou dwe fè wudu ak entansyon nan kè ou" },
        ],
      },
      {
        id: "etap-wudu",
        title: "8 Etap Wudu",
        subtitle: "Fè l etap pa etap",
        body: "Anvan ou kòmanse: Fè Niyyah (entansyon nan kè ou) epi di 'Bismillah'. Etap 1: Lave de men ou twa fwa. Etap 2: Rense bouch ou twa fwa. Etap 3: Aspire dlo nan nen ou epi soufle l deyò twa fwa. Etap 4: Lave figi ou (depi frèt sèvèl rive anba manton) twa fwa. Etap 5: Lave bra dwat ou depi pwenti dwèt rive koud, twa fwa — epi bra gòch menm jan. Etap 6: Pase men mouye sou tèt ou yon fwa. Etap 7: Netwaye de zòrèy ou yon fwa. Etap 8: Lave pye dwat ou twa fwa epi pye gòch twa fwa.",
        poukisa: "Chak etap nan wudu netwaye yon pati kò ou. Gen yon hadith ki di pechè tonbe avèk dlo wudu a — se yon purifikasyon espirityèl tou.",
        keyTerms: [
          { term: "Bismillah", definition: "Nan non Allah — di sa anvan ou kòmanse" },
          { term: "Fard", definition: "Obligatwa — pati wudu ou pa ka sote" },
          { term: "Sunnah", definition: "Pratik Pwofèt ﷺ — rekòmande men pa obligatwa" },
        ],
        quote: {
          arabic: "بِسْمِ اللَّهِ",
          transliteration: "Bismillāh",
          creole: "Nan non Allah",
          source: "Di sa anvan ou kòmanse wudu",
        },
      },
      {
        id: "kraze-wudu",
        title: "Sa Ki Kraze Wudu",
        subtitle: "Kè sa yo, ou dwe refè wudu",
        body: "Wudu ou kraze lè: (1) Ou al twalèt (pipi, kaka, oswa gaz). (2) Ou dòmi pwofon. (3) Ou pèdi konesans. (4) Ou manyen pati prive ou dirèkteman. (5) Yon gason ak yon fanm touche youn lòt avèk dezi (daprè kèk lekòl panse). Lè wudu ou kraze, ou pa ka priye jiskaske ou refè l. Bon nouvèl la: wudu pran sèlman 2-3 minit!",
        poukisa: "Konnen sa ki kraze wudu ede ou rete nan eta pwòpte pou priyè ou yo. Pa dekouraje — refè wudu se yon opòtinite pou plis rekonpans.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Ki premye bagay ou dwe fè anvan ou kòmanse wudu?",
        choices: ["Lave figi ou", "Di Bismillah epi fè Niyyah", "Lave pye ou", "Rense bouch ou"],
        correct: 1,
        explanation: "Ou dwe fè Niyyah (entansyon) nan kè ou epi di Bismillah anvan ou kòmanse.",
        encouragement: "Brav! Entansyon se fondasyon tout aksyon nan Islam!",
      },
      {
        id: "q2",
        question: "Ki bra ou lave an premye nan wudu?",
        choices: ["Bra gòch", "Bra dwat", "De bra ansanm", "Pa gen lòd"],
        correct: 1,
        explanation: "Nan Islam nou kòmanse ak bò dwat anvan gòch pou tout aksyon yo.",
        encouragement: "Ekselan! Bò dwat toujou an premye!",
      },
      {
        id: "q3",
        question: "Eske wudu kraze lè ou dòmi?",
        choices: ["Non, jamè", "Wi, toujou", "Wi, sèlman si ou dòmi pwofon", "Depann sou lè a"],
        correct: 2,
        explanation: "Dòmi pwofon kraze wudu paske ou pèdi konesans. Yon ti kabicha kout sou chèz pa kraze li.",
        encouragement: "Parfè! Ou aprann detay enpòtan yo!",
      },
    ],
  },

  {
    slug: "salat",
    number: 3,
    title: "Salat — Priyè",
    subtitle: "Koneksyon dirèk ak Allah",
    description: "Aprann 5 priyè chak jou, kijan pou priye etap pa etap, ak siyifikasyon espirityèl chak mouvman.",
    icon: "🕌",
    color: "gold",
    lessons: [
      {
        id: "poukisa-5-priyè",
        title: "Poukisa 5 Priyè Chak Jou?",
        subtitle: "Koneksyon ou ak Allah",
        body: "Allah te mande Pwofèt ﷺ 5 priyè chak jou pandan vwayaj espirityèl li (Isra wal Mi'raj). Orijinalman te 50 priyè, men Moise ﷺ te konseye Pwofèt ﷺ mande Allah redwi yo. Allah te redwi yo a 5 men ba yo rekonpans 50. Priyè yo pa yon chay — yo se 5 moman nan jou a kote ou kanpe devan Allah, depoze pwoblèm ou, ak resevwa fòs pou kontinye.",
        poukisa: "Imajine genyen 5 moman nan chak jou kote ou ka pale dirèkteman ak Bondye ki kreye ou. Pa gen moun entèmedyè, pa gen prèt — jis ou ak Allah.",
        keyTerms: [
          { term: "Salat", definition: "Priyè ritiyèl — dezyèm pilye Islam" },
          { term: "Rak'ah", definition: "Yon seri mouvman konplè nan priyè" },
          { term: "Qiblah", definition: "Direksyon Mèk — kote nou vire pou priye" },
        ],
      },
      {
        id: "le-priyè",
        title: "Lè 5 Priyè Yo",
        subtitle: "Chak priyè gen moman li",
        body: "Fajr — Priyè Granmaten: anvan solèy leve (2 rak'ah). Dhuhr — Priyè Midi: aprè solèy rive mitan syèl la (4 rak'ah). Asr — Priyè Apremidi: anvan solèy kouche kòmanse (4 rak'ah). Maghrib — Priyè Aswè: tousuit apre solèy kouche (3 rak'ah). Isha — Priyè Lannuit: aprè nwit tonbe (4 rak'ah). Ou ka itilize aplikasyon tankou 'Muslim Pro' oswa 'Athan' pou jwenn lè priyè egzak pou kote ou ye a.",
        poukisa: "Chak priyè mete yon ritm espirityèl nan jou ou. Jou a divize pa priyè yo, pa travay sèlman.",
        keyTerms: [
          { term: "Fajr", definition: "Priyè granmaten — 2 rak'ah" },
          { term: "Dhuhr", definition: "Priyè midi — 4 rak'ah" },
          { term: "Asr", definition: "Priyè apremidi — 4 rak'ah" },
          { term: "Maghrib", definition: "Priyè aswè — 3 rak'ah" },
          { term: "Isha", definition: "Priyè lannuit — 4 rak'ah" },
        ],
      },
      {
        id: "kijan-priye",
        title: "Kijan Pou Priye",
        subtitle: "Etap pa etap",
        body: "Asire wudu ou bon. Mete rad pwòp, kouvri awra ou. Vire nan direksyon Mèk (Qiblah). Etap 1 — Takbir: Leve de men ou jiska zòrèy epi di 'Allahu Akbar'. Etap 2 — Qiyam: Kanpe dwat, li Al-Fatiha ak yon sou souplèy. Etap 3 — Ruku: Koube nan pwent senti, men sou jenou, di 'Subhana Rabbiy al-Azeem' 3 fwa. Etap 4 — I'tidal: Leve kanpe epi di 'Sami'allahu liman hamidah'. Etap 5 — Sujud: Mete fron, nen, de pla men, de jenou, ak pwent de pye sou tè, di 'Subhana Rabbiy al-A'la' 3 fwa. Etap 6 — Julus: Chita ant de sujud. Etap 7 — Sujud ankò. Sa se yon rak'ah konplè.",
        poukisa: "Sujud — lè ou mete fron ou atè — se moman ou pi pre Allah. Pwofèt ﷺ te di: 'Sèvitè pi pre Sènyè li lè l nan sujud.'",
        keyTerms: [
          { term: "Takbir", definition: "'Allahu Akbar' — Kòmansman priyè" },
          { term: "Qiyam", definition: "Kanpe — pozisyon li Koran" },
          { term: "Ruku", definition: "Koube" },
          { term: "Sujud", definition: "Pwostènen — pi pwan moman priyè" },
          { term: "Tashahhud", definition: "Asman asiz nan fen priyè" },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Konbyen priyè yon Mizilman fè chak jou?",
        choices: ["3", "4", "5", "7"],
        correct: 2,
        explanation: "Gen 5 priyè obligatwa chak jou: Fajr, Dhuhr, Asr, Maghrib, ak Isha.",
        encouragement: "Ekselan! 5 priyè — 5 koneksyon ak Allah chak jou!",
      },
      {
        id: "q2",
        question: "Ki priyè ou fè anvan solèy leve?",
        choices: ["Isha", "Maghrib", "Fajr", "Asr"],
        correct: 2,
        explanation: "Fajr se priyè granmaten — fèt anvan solèy leve, gen 2 rak'ah.",
        encouragement: "Brav! Fajr se kòmansman yon bèl jou!",
      },
      {
        id: "q3",
        question: "Ki moman ou pi pre Allah pandan priyè?",
        choices: ["Pandan Takbir", "Pandan Ruku", "Pandan Sujud", "Pandan Tashahhud"],
        correct: 2,
        explanation: "Sujud — lè fron ou atè — se moman ou pi pre Allah. Pwofèt ﷺ di sa nan hadith.",
        encouragement: "Parfè! Cheri Sujud ou yo — se moman sakre!",
      },
    ],
  },

  {
    slug: "koran",
    number: 4,
    title: "Koran — Sourate",
    subtitle: "Mo Allah yo",
    description: "Aprann sourate kout avèk tradiksyon Kreyòl, istwa revelasyon yo, ak kijan pou itilize yo.",
    icon: "📖",
    color: "green",
    lessons: [
      {
        id: "kisa-koran",
        title: "Kisa Koran Ye?",
        subtitle: "Liv ki chanpyon tout liv",
        body: "Koran se liv sakre Islam la — Pawòl direktman Allah ke Li revele bay Pwofèt Muhammad ﷺ atravè Zanj Jibreel sou yon peryòd 23 an. Li gen 114 sourate ak plis pase 6,000 vèsè. Sa ki espesyal nan Koran: li konsève nan lang orijinal li (Arabe) depi plis pase 1,400 an, san yon sèl lèt chanje. Anpil moun aprann li tout pa kè — sa yo rele Hafiz. Koran toujou rete vre epi pwoteje pa Allah.",
        poukisa: "Lè ou li Koran, menm si ou pa konprann Arabe, ou resevwa rekonpans. Chak lèt ba ou 10 bonte.",
        keyTerms: [
          { term: "Koran", definition: "Liv sakre Islam la — Pawòl Allah" },
          { term: "Sourate", definition: "Yon chapit nan Koran (gen 114 an total)" },
          { term: "Vèsè / Ayah", definition: "Yon vèsè nan Koran" },
          { term: "Hafiz", definition: "Moun ki konn tout Koran pa kè" },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Konbyen sourate ki genyen nan Koran?",
        choices: ["99", "114", "120", "100"],
        correct: 1,
        explanation: "Koran gen 114 sourate — depi sourate ki pi kout (Al-Kawthar: 3 vèsè) rive pi long (Al-Baqarah: 286 vèsè).",
        encouragement: "Brav! Ou kòmanse konnen Koran ou!",
      },
    ],
  },

  {
    slug: "zakah-sawm-hajj",
    number: 5,
    title: "Zakah, Sawm ak Hajj",
    subtitle: "Twa pilye ki rete yo",
    description: "Aprann pousantaj Zakah, enpòtans Ramadan, ak siyifikasyon Hajj — chak youn avèk istwa ak kontèks.",
    icon: "🌙",
    color: "gold",
    lessons: [
      {
        id: "zakah",
        title: "Zakah — Charité Obligatwa",
        subtitle: "Twazyèm pilye Islam",
        body: "Zakah se yon pòsyon richès ou (2.5%) ke ou bay pou pòv yo chak ane si ou gen plis pase yon kantite minimòm (nisab). Li pa yon favè — se yon dwa pòv yo sou richès ou. Allah di nan Koran: 'Nan richès ou gen pòsyon ki pou dimandè ak moun ki nan nesesite.' Zakah ede elimine povrete, kreye solidarite, ak pwoteje ou kont lanmou egzajere pou lajan.",
        poukisa: "Lè ou peye Zakah, ou di: 'Richès mwen pa tout mwen.' Sa libere kè ou epi ba ou lapè. Islam pouse ou pran swen kominote ou.",
        keyTerms: [
          { term: "Zakah", definition: "2.5% richès ou bay pòv yo chak ane" },
          { term: "Nisab", definition: "Minimòm richès ki deklanche obligasyon Zakah" },
          { term: "Sadaqah", definition: "Charité volontè — pa obligatwa tankou Zakah" },
        ],
        quote: {
          arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
          transliteration: "Wa-aqīmū aṣ-ṣalāta wa-ātū az-zakāh",
          creole: "Fè priyè epi bay Zakah.",
          source: "Koran 2:43",
        },
      },
      {
        id: "sawm",
        title: "Sawm — Jene Ramadan",
        subtitle: "Katriyèm pilye Islam",
        body: "Ramadan se 9yèm mwa kalandriye Islamik la. Pandan mwa sa a, Mizilman jene depi solèy leve (Fajr) jis solèy kouche (Maghrib) — pa manje, pa bwè, pa fè sèks. Lannuit, yo kase jene nan yon repas yo rele Iftar. Anpil Mizilman leve anvan Fajr pou manje anvan (Suhoor). Ramadan se plis pase evite manje — se yon mwa pou reflechi, li Koran, bay charité, ak fè priyè siplemantè (Tarawih).",
        poukisa: "Jene anseye ou disiplin, enpati pou pòv yo, ak depandans sou Allah. Lè vant ou vid, nanm ou ka plen.",
        keyTerms: [
          { term: "Sawm", definition: "Jene — katriyèm pilye Islam" },
          { term: "Iftar", definition: "Repas kase jene aswè" },
          { term: "Suhoor", definition: "Repas anvan aube" },
          { term: "Laylatul Qadr", definition: "'Nwit Destin' — pi pwisan nan tout Ramadan, nan 10 dènye jou yo" },
        ],
      },
      {
        id: "hajj",
        title: "Hajj — Pèlerinas nan Mèk",
        subtitle: "Senkyèm pilye Islam",
        body: "Hajj se pèlerinas nan vil Mèk (Arabi Saoudit) ke tout Mizilman ki gen kapasite (sante ak finansyè) fèt fè omwen yon fwa nan lavi. Li fèt chak ane nan mwa Dhul Hijjah. Pandan Hajj, plizyè milyon Mizilman — nwa, blan, rich, pòv — tout mete menm rad blan (Ihram) epi fè menm ritiyèl yo ansanm. Sa montre egalite total devan Allah. Ritiyèl Hajj yo kòmemorasyon istwa Ibraheem ﷺ ak fanmi li.",
        poukisa: "Hajj se eksperyans ki chanje lavi. Ou wè ke Islam depase ras, nasyon, ak richès. Devan Allah, tout moun egal.",
        keyTerms: [
          { term: "Hajj", definition: "Pèlerinas nan Mèk — 5yèm pilye Islam" },
          { term: "Ihram", definition: "Rad blan inifòm pèlerin yo mete" },
          { term: "Ka'bah", definition: "Estrikti kib nan sant Mèk — premye kay adore Allah" },
          { term: "Tawaf", definition: "Tounen 7 fwa alantou Ka'bah" },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Ki pousantaj richès ou bay kòm Zakah?",
        choices: ["5%", "10%", "2.5%", "1%"],
        correct: 2,
        explanation: "Zakah se 2.5% richès ou — si ou gen plis pase nisab la pandan yon an konplè.",
        encouragement: "Ekselan! 2.5% — pa anpil, men efè li gran!",
      },
      {
        id: "q2",
        question: "Ki mwa ou jene nan Islam?",
        choices: ["Muharram", "Rajab", "Ramadan", "Dhul Hijjah"],
        correct: 2,
        explanation: "Ramadan se 9yèm mwa kalandriye Islamik la — mwa jene obligatwa.",
        encouragement: "Brav! Ramadan — mwa bonte ak disiplin!",
      },
      {
        id: "q3",
        question: "Ki moun ki oblije fè Hajj?",
        choices: [
          "Tout Mizilman chak ane",
          "Sèlman gason",
          "Mizilman ki gen sante ak mwayen finansyè, yon fwa nan lavi",
          "Sèlman vye moun",
        ],
        correct: 2,
        explanation: "Hajj obligatwa yon fwa sèlman si ou gen sante ak mwayen finansyè pou ale.",
        encouragement: "Parfè! Hajj — yon rèv pou tout Mizilman!",
      },
    ],
  },

  {
    slug: "lavi-chak-jou",
    number: 6,
    title: "Lavi Chak Jou",
    subtitle: "Viv kòm Mizilman",
    description: "Aprann dua pou chak jou, konpòtman Islamik, ak kijan pou eksplike lafwa ou bay nenpòt moun ki mande.",
    icon: "🌟",
    color: "green",
    lessons: [
      {
        id: "dua-chak-jou",
        title: "Dua Pou Chak Jou",
        subtitle: "Allah nan chak moman",
        body: "Nan Islam, genyen yon dua (priyè kout) pou prèske tout sitiyasyon nan lavi. Sa ede ou sonje Allah nan tout bagay ou fè. Leve maten: 'Alhamdulillahilladhi ahyana ba'da ma amatana wa ilayhin nushur' — Glwa Allah ki fè nou leve apre dòmi. Anvan manje: 'Bismillah' — Nan non Allah. Apre manje: 'Alhamdulillah' — Glwa pou Allah. Lè ou antre lakay: 'Bismillah walajna wa bismillah kharajna' — Nan non Allah nou antre, nan non Allah nou soti.",
        poukisa: "Dua yo pa sèlman mo — yo sonje ou ke Allah la nan chak moman. Lavi ou vin yon adorasyon kontinyèl.",
        keyTerms: [
          { term: "Dua", definition: "Priyè pèsonèl — konvèsasyon dirèk ak Allah" },
          { term: "Dhikr", definition: "Souvni Allah — repete no li oswa fraz lwanj" },
          { term: "Alhamdulillah", definition: "Glwa pou Allah — di pou tout bonte" },
        ],
      },
      {
        id: "eksplike-lafwa",
        title: "Kijan Pou Eksplike Lafwa Ou",
        subtitle: "Reponn ak konfyans",
        body: "Lè fanmi ou, zanmi ou, oswa vwazen ou mande: 'Poukisa ou vin Mizilman?' — ou ka reponn: 'Islam te ban mwen repons klè sou ki moun Allah ye: Li youn, Li pa gen pitit, Li kreye tout bagay. Islam mande mwen fè bonte, priye, ak bay pòv yo. Sa bay lavi mwen sans ak direksyon.' Pou kesyon sou Jezi: 'Nan Islam mwen renmen Jezi tou — li se yon gran pwofèt. Men mwen kwè Li te voye anvan pou pèp Izrayèl, epi Muhammad ﷺ te dènye mesaje pou tout lòm.' Ou pa bezwen pè — di verite ou ak amou.",
        poukisa: "Ou pa bezwen defann Islam — jis eksplike li. Verite a pale pou tèt li. Reponn ak dousè, konfyans, ak respè.",
        keyTerms: [
          { term: "Da'wah", definition: "Envite lòt moun aprann sou Islam avèk sajès ak bonte" },
          { term: "Sabr", definition: "Pasyans — yon valè enpòtan pou Mizilman" },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Kisa ou di anvan ou manje?",
        choices: ["Alhamdulillah", "Allahu Akbar", "Bismillah", "Subhanallah"],
        correct: 2,
        explanation: "Ou di 'Bismillah' — Nan non Allah — anvan ou kòmanse manje.",
        encouragement: "Brav! Sonje Bismillah pou chak repas!",
      },
    ],
  },
];
