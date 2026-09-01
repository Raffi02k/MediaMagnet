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
    heroImageAlt: 'Webbdesign och utveckling for företag',
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
    showcaseTitle: 'Exempel pa hemsidor och redesigns i den har typen av upplagg.',
    showcaseText: 'Sajter med tydligare struktur, starkare forsta intryck och battre vag till kontakt eller offert.',
    showcaseEntries: [
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
    heroImageAlt: 'Google och lokal SEO for lokal synlighet',
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
    showcaseTitle: 'Projekt dar struktur och SEO-grund gor stor skillnad.',
    showcaseText: 'Har passar sajter med tydliga tjanstesidor, lokal relevans och en uppbyggnad som Google lattare kan lasa.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/header-Local-SEO-scaled.jpg', alt: 'Lokal SEO och Google-synlighet', label: 'SEO-grund', title: 'Struktur, metadata och lokal relevans som stotter synlighet i Google.' },
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
    heroImageAlt: 'Reviews och social proof for starkare fortroende',
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
    showcaseText: 'Projekt med starkare forsta intryck, tydligare presentation och bra ytor for reviews, fore-efter eller kundbevis.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/social-proof-examples.jpg', alt: 'Exempel pa social proof och reviews', label: 'Social proof', title: 'Reviews, kundbevis och starkare forstroendesignaler nara viktiga CTA:er.' },
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
    heroImageAlt: 'Digitala menyboards for restaurang och kiosk',
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
    showcaseTitle: 'Exempel dar menyboards och matdriven design tar mer plats.',
    showcaseText: 'Har bor det synas projekt med skarmmaterial, menyupplagg och visuellt fokus pa produkter, ratter och priser.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/menu-nahrayn-mockup.png', alt: 'AL Nahrayn menyboards i restaurangmiljo', label: 'Menyboard', title: 'AL Nahrayn i restaurangmiljo med tydlig layout for ratter och priser.' },
      { kind: 'image', image: '/assets/menu-nahrayn-01.png', alt: 'AL Nahrayn menyboard', label: 'Menyboard', title: 'Mork premium-kansla med tydlig hierarki i menyn.' },
      { kind: 'image', image: '/assets/menu-birria-01.png', alt: 'Birria Seoul menyboard', label: 'Menyboard', title: 'Fargstark board med fokus pa produkter, bilder och snabb lasbarhet.' },
      { kind: 'image', image: '/assets/menu-birria-02.png', alt: 'Birria Seoul menyboard detalj', label: 'Menyboard', title: 'Ytterligare vy som visar kampanjer, priser och menystruktur.' }
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
    heroImageAlt: 'Hosting och lopande hjalp for hemsidor',
    seoTitle: 'Hosting & löpande hjälp',
    metaDescription: 'Löpande hjälp med hosting, domän, SSL, mindre uppdateringar och förbättringar efter lansering.',
    heroTitle: 'Lopande hjalp efter launch.',
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
    showcaseTitle: 'Sajter som ar bra kandidater for lopande forvaltning och uppdateringar.',
    showcaseText: 'Projekt som kan byggas vidare med nya tjanster, kampanjer, uppdaterade kontaktvagar och fler landningssidor over tid.',
    showcaseEntries: [
      { kind: 'image', image: '/assets/Hosting-och-lopande.jpeg', alt: 'Hosting och lopande forvaltning', label: 'Forvaltning', title: 'Drift, uppdateringar och mindre forbattringar efter launch.' },
      { kind: 'project', slug: 'penselverket' },
      { kind: 'project', slug: 'vaxjo-eltjanst' }
    ]
  }
];

export const serviceLinks = services.map(service => ({
  label: service.navLabel,
  to: `/services/${service.slug}`
}));
