export const site = {
  name: 'MediaMagnet',
  founder: 'Raffi Medzad Aghlian',
  location: 'Trollhättan · arbetar med företag i hela Sverige',
  email: 'mediamagnet2023@gmail.com',
  phone: '0762287601',
  instagram: 'https://www.instagram.com/mediamagnetse?igsi=dTMwbDdxaDh5cHhk&utm_source=qr'
};

export const navigation = [
  { label: 'Hem', to: '/' },
  { label: 'Tjänster', to: '/services' },
  { label: 'Projekt', to: '/work' },
  { label: 'Process', to: '/process' },
  { label: 'Om', to: '/about' },
  { label: 'Kontakt', to: '/contact' }
] as const;

export const heroBenefits = [
  'Byggt för att göra det lättare att bli vald',
  'SEO- och Google-grund ingår i tänket',
  'Mobilanpassat och enkelt att fortsätta utveckla'
];

export const trustedClients = [
  'Birria Seoul',
  'AL Nahrayn Fisk',
  'Växjö Eltjänst',
  'Penselverket'
];

export const googleReviewSummary = {
  kicker: 'Vad kunder säger',
  title: 'Byggt på förtroende',
  text: 'Riktiga ord om upplevelsen från första kontakt till färdigt resultat.',
  rating: '5.0',
  reviewCount: '5 omdömen',
  ctaLabel: 'Läs alla recensioner',
  ctaHref: '/services/reviews-social-proof',
  // Replace with the public Google reviews URL when it is ready.
  liveCtaHref: ''
};

export const googleReviews = [
  {
    name: 'Johan L',
    quote: 'Snabb återkoppling, tydlig kommunikation och ett professionellt genomfört arbete från första kontakt till färdigt resultat.',
    source: 'Google Reviews'
  },
  {
    name: 'Mikaela S',
    quote: 'Vi fick bra hjälp med både planering och utförande. Teamet var lösningsorienterat och höll det vi kom överens om.',
    source: 'Google Reviews'
  },
  {
    name: 'Farid A',
    quote: 'Seriöst bemötande, snyggt resultat och en process som kändes trygg hela vägen. Vi är väldigt nöjda med helheten.',
    source: 'Google Reviews'
  },
  {
    name: 'Sara N',
    quote: 'Det märktes att de hade koll på detaljerna. Allt blev tydligt förklarat och leveransen kändes genomtänkt från start.',
    source: 'Google Reviews'
  },
  {
    name: 'Daniel R',
    quote: 'Tydlig offert, bra planering och ett resultat som motsvarade våra förväntningar.',
    source: 'Google Reviews'
  }
];

export const processSteps = [
  {
    number: '1',
    title: 'Vi pratar om företaget',
    text: 'Vi går igenom vad du säljer, vilka kunder du vill nå och vad den nya hemsidan faktiskt ska hjälpa dig att uppnå.'
  },
  {
    number: '2',
    title: 'Jag bygger lösningen',
    text: 'Jag tar fram struktur, design, texter och funktioner som passar varumärket och gör sidan tydlig på både mobil och desktop.'
  },
  {
    number: '3',
    title: 'Vi lanserar och förbättrar',
    text: 'När sidan är godkänd går den live. Därefter kan vi fortsätta med Google, reviews, SEO, innehåll och löpande förbättringar.'
  }
];

export const faqItems = [
  {
    question: 'Hur börjar ett projekt?',
    answer: 'Vi börjar med ett kort samtal där du berättar om företaget, nuläget och vad du vill förbättra. Därefter kan jag föreslå en tydlig väg framåt.'
  },
  {
    question: 'Bygger du bara hemsidan eller kan du hjälpa efteråt?',
    answer: 'Jag kan hjälpa både med själva bygget och det som kommer efter: hosting, mindre ändringar, Google Företagsprofil, Search Console, reviews och fortsatt utveckling.'
  },
  {
    question: 'Kan du förbättra en gammal hemsida?',
    answer: 'Ja. Jag kan antingen göra en redesign av det som finns eller bygga om från grunden om det ger en bättre och mer hållbar lösning.'
  },
  {
    question: 'Jobbar du med SEO?',
    answer: 'Ja, framför allt teknisk och lokal SEO-grund: tydlig struktur, metadata, tjänstesidor, internlänkar, Search Console och innehåll som matchar vad kunder faktiskt söker efter.'
  },
  {
    question: 'Kan du hjälpa till med Google-recensioner?',
    answer: 'Ja. Jag kan hjälpa företaget att skapa en tydlig och enkel rutin för att be riktiga kunder om ärliga recensioner och använda dem som social proof.'
  },
  {
    question: 'Gör du något utöver hemsidor?',
    answer: 'Ja. För restauranger och butiker gör jag även digitala menyboards och visuella skärmar för produkter, priser och kampanjer.'
  }
];

export const services = [
  {
    id: 'webb',
    slug: 'webbdesign-utveckling',
    navLabel: 'Webbdesign & utveckling',
    title: 'Hemsidor som säljer in företaget bättre',
    short: 'Ny hemsida eller redesign med tydliga tjänster, CTA:er och mobilfokus.',
    bullets: ['React + TypeScript', 'Responsiv design', 'Tjänstesidor', 'Kontakt- och offertflöden'],
    heroImage: '/assets/Webbdesign-och-utveckling.jpeg',
    heroImageAlt: 'Webbdesign och utveckling för företag',
    seoTitle: 'Webbdesign & utveckling',
    metaDescription: 'MediaMagnet bygger företagshemsidor med tydlig struktur, stark design och bättre väg till kontakt, offert och bokning.',
    heroTitle: 'Webbdesign som gör företaget lättare att välja.',
    heroText: 'Ny hemsida eller redesign med tydlig struktur, stark design och bättre väg till kontakt.',
    intro: 'Jag bygger nya hemsidor och redesigns med fokus på tydlighet, förtroende och konvertering. Sidan ska inte bara se bra ut. Den ska hjälpa kunden att förstå vad du gör och varför just ditt företag är rätt val.',
    outcomes: ['Tydligare tjänstesidor', 'Bättre mobilupplevelse', 'Färre steg till kontakt eller offert'],
    deliverables: [
      'Struktur för startsida, tjänster och kontaktvägar',
      'Design som passar varumärket och målgruppen',
      'Utveckling med snabb, responsiv frontend',
      'CTA-flöden för samtal, formulär eller offert'
    ],
    whyTitle: 'När en hemsida känns gammal smittar det av sig på hela företaget.',
    whyText: 'Många lokala företag gör ett bra jobb i verkligheten men tappar förtroende online för att sidan känns rörig, långsam eller otydlig. En ny webbplats hjälper dig presentera kvaliteten du redan har.',
    faq: [
      'Passar både ny hemsida och redesign av befintlig sajt.',
      'Kan byggas ut senare med fler tjänstesidor, case och SEO-innehåll.',
      'Byggs för att vara lätt att fortsätta förbättra över tid.'
    ],
    relatedServices: ['google', 'reviews'],
    showcaseTitle: 'Exempel på hemsidor och redesigns i den här typen av upplägg.',
    showcaseText: 'Sajter med tydligare struktur, starkare första intryck och bättre väg till kontakt eller offert.',
    showcaseEntries: [
      { kind: 'project', slug: 'al-nahrayn-fisk' },
      { kind: 'project', slug: 'vaxjo-eltjanst' },
      { kind: 'project', slug: 'penselverket' },
      { kind: 'project', slug: 'birria-seoul' }
    ]
  },
  {
    id: 'google',
    slug: 'google-lokal-seo',
    navLabel: 'Google & lokal SEO',
    title: 'Google & lokal synlighet',
    short: 'En bättre grund för att bli hittad när kunder söker efter dina tjänster.',
    bullets: ['Google Företagsprofil', 'Search Console', 'Lokal SEO', 'Metadata & innehållsstruktur'],
    heroImage: '/assets/header-Local-SEO-scaled.jpg',
    heroImageAlt: 'Google och lokal SEO för lokal synlighet',
    seoTitle: 'Google & lokal SEO',
    metaDescription: 'Hjälp med Google Företagsprofil, lokal SEO, metadata och struktur så ditt företag blir lättare att hitta i rätt sökningar.',
    heroTitle: 'Lokal SEO som ger bättre synlighet i Google.',
    heroText: 'Rätt struktur, metadata och sidor för att fler lokala sökningar ska kunna bli kunder.',
    intro: 'Jag hjälper dig lägga en starkare lokal SEO-grund så att hemsidan, Google Företagsprofilen och innehållet jobbar åt samma håll. Målet är inte bara trafik. Målet är relevant trafik från människor som faktiskt kan bli kunder.',
    outcomes: ['Bättre lokal synlighet', 'Tydligare sökordsstruktur', 'Starkare koppling mellan hemsida och Google'],
    deliverables: [
      'Genomgång av sökintention och lokala sökningar',
      'Förbättring av metadata, rubriker och intern struktur',
      'Hjälp med Google Företagsprofil och Search Console',
      'Förslag på tjänstesidor och innehåll som matchar vad kunder söker'
    ],
    whyTitle: 'Det räcker inte att finnas online om ingen hittar rätt väg in.',
    whyText: 'När struktur, metadata och lokal relevans saknas blir det svårare för Google att förstå vad företaget erbjuder och var ni arbetar. Det gör att ni tappar sökningar ni egentligen borde kunna vinna.',
    faq: [
      'Fokus ligger på praktisk lokal SEO, inte fluffiga rapporter.',
      'Passar bra ihop med nya tjänstesidor och starkare case-innehåll.',
      'Kan göras som grundpaket eller löpande förbättringsarbete.'
    ],
    relatedServices: ['webb', 'reviews'],
    showcaseTitle: 'Projekt där struktur och SEO-grund gör stor skillnad.',
    showcaseText: 'Här passar sajter med tydliga tjänstesidor, lokal relevans och en uppbyggnad som Google lättare kan läsa.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/header-Local-SEO-scaled.jpg', alt: 'Lokal SEO och Google-synlighet', label: 'SEO-grund', title: 'Struktur, metadata och lokal relevans som stöttar synlighet i Google.' },
      { kind: 'project', slug: 'vaxjo-eltjanst' },
      { kind: 'project', slug: 'penselverket' }
    ]
  },
  {
    id: 'reviews',
    slug: 'reviews-social-proof',
    navLabel: 'Reviews & social proof',
    title: 'Reviews & förtroende',
    short: 'Tydligare social proof som hjälper nya kunder att känna sig tryggare.',
    bullets: ['Review-länk / QR', 'Google-recensioner', 'Projektcase', 'Social proof på hemsidan'],
    heroImage: '/assets/social-proof-examples.jpg',
    heroImageAlt: 'Reviews och social proof för starkare förtroende',
    seoTitle: 'Reviews & social proof',
    metaDescription: 'Bygg starkare förtroende med Google-recensioner, projektcase och tydlig social proof på hemsidan.',
    heroTitle: 'Reviews som bygger förtroende snabbare.',
    heroText: 'Synliga recensioner, case och social proof som gör nya besökare tryggare att välja dig.',
    intro: 'Många företag gör bra jobb men visar det för svagt online. Jag hjälper dig skapa ett tydligare system för recensioner, case och förtroendesignaler så att nya besökare snabbare känner att du är ett säkert val.',
    outcomes: ['Starkare första intryck', 'Fler synliga bevis på kvalitet', 'Tydligare förtroende nära CTA:er'],
    deliverables: [
      'Setup för review-länk eller QR-flöde',
      'Placering av recensioner på rätt delar av sidan',
      'Upplägg för case, före/efter och social proof-block',
      'Tydligare koppling mellan kundresultat och tjänster'
    ],
    whyTitle: 'Besökaren jämför dig med andra innan de hör av sig.',
    whyText: 'Om konkurrenten visar recensioner, case och tydliga resultat medan din sida är tunnare, känns valet osäkrare även om du egentligen levererar bättre arbete. Social proof minskar den friktionen.',
    faq: [
      'Fungerar både för lokala tjänsteföretag och restauranger.',
      'Kan kombineras med landningssidor, projektcase och kontaktflöden.',
      'Målet är äkta recensioner och tydlig presentation, inte fejkad hype.'
    ],
    relatedServices: ['google', 'webb'],
    showcaseTitle: 'Case som ar bra att lyfta nar du vill visa kvalitet tydligare.',
    showcaseText: 'Projekt med starkare första intryck, tydligare presentation och bra ytor för reviews, före-efter eller kundbevis.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/social-proof-examples.jpg', alt: 'Exempel på social proof och reviews', label: 'Social proof', title: 'Reviews, kundbevis och starkare förtroendesignaler nära viktiga CTA:er.' },
      { kind: 'project', slug: 'vaxjo-eltjanst' },
      { kind: 'project', slug: 'birria-seoul' }
    ]
  },
  {
    id: 'screens',
    slug: 'digitala-menyboards',
    navLabel: 'Digitala menyboards',
    title: 'Digitala menyboards',
    short: 'Visuella skärmar för restaurang, kiosk och butik som visar erbjudandet tydligt.',
    bullets: ['TV-format 16:9', 'Meny & priser', 'Kampanjer', 'Visuell mat- och produktpresentation'],
    heroImage: '/assets/menu-nahrayn-mockup.png',
    heroImageAlt: 'Digitala menyboards för restaurang och kiosk',
    seoTitle: 'Digitala menyboards',
    metaDescription: 'Design av digitala menyboards för restaurang, kiosk och butik i 16:9-format med tydliga priser, kampanjer och produktbilder.',
    heroTitle: 'Menyboards som gör bestallningen tydligare.',
    heroText: 'Digitala skärmar för meny, priser och kampanjer i ett mer säljande format.',
    intro: 'Jag designar digitala menyboards som är lätta att läsa på håll och samtidigt lyfter produkter, rätter och kampanjer på ett mer genomtänkt sätt. Det ska kännas som en förlängning av varumärket, inte bara information på en TV.',
    outcomes: ['Tydligare meny och priser', 'Mer visuellt säljande presentation', 'Enhetligare känsla mellan lokal och varumärke'],
    deliverables: [
      'Layout i 16:9 för TV och digitala skärmar',
      'Visuell hierarki för rätter, produkter och priser',
      'Format för kampanjer och tillfälliga erbjudanden',
      'Design som matchar restaurangens eller butikens identitet'
    ],
    whyTitle: 'När menyn är rörig tar beställningen längre tid och känns svagare.',
    whyText: 'I snabb service gör tydlighet stor skillnad. Om kunden måste leta efter priser eller försöka tolka en spretig meny tappar du både tempo och intryck. En bättre board hjälper både försäljning och upplevelse.',
    faq: [
      'Passar för restaurang, kiosk, cafe och enklare butiksskärmar.',
      'Kan kombineras med hemsida och kampanjmaterial i samma uttryck.',
      'Designas för att vara lätt att uppdatera med nya priser eller rätter.'
    ],
    relatedServices: ['webb', 'care'],
    showcaseTitle: 'Exempel där menyboards och matdriven design tar mer plats.',
    showcaseText: 'Här bör det synas projekt med skärmmaterial, menyupplägg och visuellt fokus på produkter, rätter och priser.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/menu-nahrayn-mockup.png', alt: 'AL Nahrayn menyboards i restaurangmiljö', label: 'Menyboard', title: 'AL Nahrayn i restaurangmiljö med tydlig layout för rätter och priser.' },
      { kind: 'image', image: '/assets/menu-nahrayn-01.png', alt: 'AL Nahrayn menyboard', label: 'Menyboard', title: 'Mörk premium-känsla med tydlig hierarki i menyn.' },
      { kind: 'image', image: '/assets/menu-birria-new1.png', alt: 'Birria Seoul menyboard', label: 'Menyboard', title: 'Färgstark board med fokus på produkter, bilder och snabb läsbarhet.' },
      { kind: 'image', image: '/assets/menu-birria-new2.png', alt: 'Birria Seoul menyboard detalj', label: 'Menyboard', title: 'Ytterligare vy som visar kampanjer, priser och menystruktur.' }
    ]
  },
  {
    id: 'care',
    slug: 'hosting-lopande-hjalp',
    navLabel: 'Hosting & löpande hjälp',
    title: 'Hosting & löpande hjälp',
    short: 'Jag kan hjälpa till även efter launch så att sidan fortsätter vara uppdaterad och fungerande.',
    bullets: ['Domän & DNS', 'SSL & hosting', 'Mindre uppdateringar', 'Löpande förbättringar'],
    heroImage: '/assets/Hosting-och-lopande.jpeg',
    heroImageAlt: 'Hosting och löpande hjälp för hemsidor',
    seoTitle: 'Hosting & löpande hjälp',
    metaDescription: 'Löpande hjälp med hosting, domän, SSL, mindre uppdateringar och förbättringar efter lansering.',
    heroTitle: 'Löpande hjälp efter launch.',
    heroText: 'Hosting, uppdateringar och små förbättringar så hemsidan fortsätter jobba för företaget.',
    intro: 'Lansering är inte slutet. Det är starten på nästa fas. Jag kan hjälpa till med drift, uppdateringar och mindre förbättringar så att hemsidan hålls aktuell, säker och användbar när verksamheten utvecklas.',
    outcomes: ['Mindre teknisk stress', 'Snabbare småuppdateringar', 'En sajt som hålls levande över tid'],
    deliverables: [
      'Hjälp med domän, DNS, SSL och hostingmiljö',
      'Mindre text- och bildändringar när behov uppstår',
      'Justeringar utifrån nya tjänster, kampanjer eller öppettider',
      'Löpande förbättringar när nya idéer eller behov dyker upp'
    ],
    whyTitle: 'Många hemsidor blir snabbt inaktuella efter launch.',
    whyText: 'När ingen äger uppdateringarna blir kontaktuppgifter gamla, innehåll tappar relevans och små problem blir liggande. Med löpande hjälp blir sidan lättare att hålla i skick och fortsätta utveckla.',
    faq: [
      'Bra för företag som inte vill hantera tekniken själva.',
      'Kan kombineras med nya landningssidor eller innehåll över tid.',
      'Du får en enklare väg för små ändringar när verksamheten förändras.'
    ],
    relatedServices: ['webb', 'google'],
    showcaseTitle: 'Sajter som är bra kandidater för löpande förvaltning och uppdateringar.',
    showcaseText: 'Projekt som kan byggas vidare med nya tjanster, kampanjer, uppdaterade kontaktvagar och fler landningssidor over tid.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/Hosting-och-lopande.jpeg', alt: 'Hosting och löpande förvaltning', label: 'Förvaltning', title: 'Drift, uppdateringar och mindre förbättringar efter launch.' },
      { kind: 'project', slug: 'penselverket' },
      { kind: 'project', slug: 'vaxjo-eltjanst' }
    ]
  }
];

export const serviceLinks = services.map(service => ({
  label: service.navLabel,
  to: `/services/${service.slug}`
}));

export type ProcessStage = {
  id: string;
  step: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  clientRole: string;
  raffiRole: string;
  deliverables: string[];
  visualType: 'wireframe' | 'design' | 'performance' | 'launch';
  timeline: string;
  tools: string[];
};

export const detailedProcessStages: ProcessStage[] = [
  {
    id: 'discovery',
    step: '01',
    badge: 'Fas 1 · Discovery & Strategi',
    title: 'Från affärsmål till en kristallklar struktur',
    tagline: 'Innan vi rör en enda rad kod kartlägger vi vad besökaren faktiskt behöver se för att välja dig.',
    description: 'Vi analyserar dina tjänster, målgrupp, konkurrenter och unika styrkor. Målet är att skala bort onödigt brus och bygga en genomtänkt informationsarkitektur med korta vägar till kontakt.',
    clientRole: 'Dela nuläge, befintligt material och vad som skiljer er från konkurrenterna under ett 30-minuters introduktionssamtal.',
    raffiRole: 'Konkurrentanalys, informationsarkitektur, sidstruktur, nyckelordskartläggning och definierade konverteringsmål.',
    deliverables: [
      'Komplett sitemap & sidstruktur',
      'Definierade primära & sekundära CTA-vägar',
      'Teknisk kravspecifikation & innehållsplan',
      'Lokal SEO-karta för nyckeltjänster'
    ],
    visualType: 'wireframe',
    timeline: 'Dag 1–3',
    tools: ['Figma Wireframes', 'Lokal SEO-analys', 'Sitemap Mapping']
  },
  {
    id: 'design',
    step: '02',
    badge: 'Fas 2 · Skräddarsydd Design & UX',
    title: 'Ett varumärkesuttryck som sticker ut – inga mallar',
    tagline: 'Vi skapar en unik visuell identitet skräddarsydd för din verksamhet, anpassad för mobil och desktop.',
    description: 'Från typografi och färger till mikrointeraktioner och bildmanér. Oavsett om det är rå koreansk streetfood-energi som Birria Seoul eller ordning och pålitlighet som Växjö Eltjänst får varje projekt sin egen själ.',
    clientRole: 'Testa och klicka i den interaktiva designprototypen och ge ärlig feedback i korta, enkla avstämningar.',
    raffiRole: 'Formgivning av alla sidor, mobillayouter, designsystem, typografiska val, bildbehandling och interaktiv prototyp.',
    deliverables: [
      'Interaktiv Figma-prototyp för mobil & desktop',
      'Skräddarsytt designsystem (färger, typsnitt, tokens)',
      'Anpassat bildmanér & grafiska element',
      'Feedback- och justeringsrunda fram till godkännande'
    ],
    visualType: 'design',
    timeline: 'Dag 4–8',
    tools: ['Figma Studio', 'Design Tokens', 'Interaktiv prototyp']
  },
  {
    id: 'development',
    step: '03',
    badge: 'Fas 3 · Modern Kod & Prestanda',
    title: 'Blixtsnabb frontend i React, TypeScript & Vite',
    tagline: 'Ren, modern kod utan tunga plugins eller onödig bloat ger 100/100 i Google Lighthouse.',
    description: 'Vi bygger hemsidan med samma moderna arkitektur som ledande tech-bolag. Supersnabb laddtid, perfekt responsivitet på alla skärmar, tillgänglighet och teknisk SEO inbyggt i varje enskild komponent.',
    clientRole: 'Luta dig tillbaka medan sajten kodas och testas på riktiga enheter, eller skicka eventuella sista texter.',
    raffiRole: 'Frontendutveckling i React/TypeScript/Vite, bildoptimering (WebP/AVIF), semantisk HTML, SEO-metadata och enhetstester.',
    deliverables: [
      'Ren & underhållbar React/TypeScript-kodbas',
      '100/100 i Google Lighthouse prestanda & SEO',
      'Testad och optimerad för iOS, Android, tablets & desktop',
      'Formulärintegration & skydd mot spam'
    ],
    visualType: 'performance',
    timeline: 'Dag 9–14',
    tools: ['React + TypeScript', 'Vite', 'Google Lighthouse', 'Semantic HTML']
  },
  {
    id: 'launch',
    step: '04',
    badge: 'Fas 4 · Launch, Google & Tillväxt',
    title: 'Driftsättning och synlighet där kunderna finns',
    tagline: 'Sajten går live på din domän med SSL – och vi kopplar ihop Google och lokala skärmar.',
    description: 'Vi sköter domänkoppling, SSL-certifikat och driftsättning på snabbt globalt CDN. Därefter integrerar vi Google Search Console, optimerar din Google Företagsprofil för lokala sökningar och sätter upp digital signage om du har lokal.',
    clientRole: 'Slutgodkännande och åtkomst till domänhanterare om du redan äger din domän.',
    raffiRole: 'Domänkonfiguration, SSL-certifikat, Google Search Console, sitemap-indexering, Google Företagsprofil och utbildning.',
    deliverables: [
      'Live driftsättning med snabb global CDN & gratis SSL',
      'Google Search Console & XML sitemap inskickad',
      'Google Företagsprofil-granskning & recensionsstrategi',
      'Digital signage/skärmunderlag vid behov (restauranger/butiker)'
    ],
    visualType: 'launch',
    timeline: 'Launch-dag & fortlöpande',
    tools: ['Vercel CDN', 'Google Search Console', 'Google Business Profile', 'Signage Export']
  }
];

export const processGuarantees = [
  {
    num: '01',
    title: 'Inga tröga mallar',
    text: 'Varje rad design och kod skräddarsys för ditt företag. Inga sega WordPress-plugins som kraschar.'
  },
  {
    num: '02',
    title: 'En enda kontaktperson',
    text: 'Du pratar direkt med mig (Raffi) som designar och bygger. Inga mellanhänder eller projektledare.'
  },
  {
    num: '03',
    title: 'Fasta priser utan överraskningar',
    text: 'Tydlig offert och specifikation från dag ett. Du vet exakt vad du får och vad det kostar.'
  },
  {
    num: '04',
    title: 'Snabb turnaround',
    text: 'Från första samtal till live-sajt på ca 2–3 veckor med löpande uppdateringar under vägen.'
  }
];

