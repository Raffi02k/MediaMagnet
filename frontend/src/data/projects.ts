export type ProjectTone = 'red' | 'gold' | 'blue' | 'green';

export type Project = {
  slug: string;
  name: string;
  domain: string;
  category: string;
  city: string;
  summary: string;
  url: string;
  tone: ProjectTone;
  tags: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: 'birria-seoul',
    name: 'Birria Seoul',
    domain: 'birria-seoul-eight.vercel.app',
    category: 'Restaurang',
    city: 'Göteborg',
    summary: 'En modern street-food-sajt som låter maten ta plats och gör meny, galleri och kontakt enkla att hitta.',
    url: 'https://birria-seoul-eight.vercel.app',
    tone: 'red',
    tags: ['Webbdesign', 'Restaurang', 'Mobil UX'],
    challenge: 'Restaurangen behövde en digital upplevelse som kändes lika energisk och matdriven som konceptet i lokalen.',
    solution: 'Jag byggde en visuellt stark hemsida med stora matbilder, tydlig menystruktur och enkla vägar vidare till kontakt och beställning.',
    deliverables: ['Ny webbdesign', 'Menystruktur', 'Mobilanpassning', 'Galleri och CTA-flöden']
  },
  {
    slug: 'al-nahrayn-fisk',
    name: 'AL Nahrayn Fisk',
    domain: 'al-nahrayn-gold.vercel.app',
    category: 'Restaurang',
    city: 'Göteborg',
    summary: 'Premium restaurangwebb med fokus på masgouf, grillkänsla och en tydligare irakisk identitet.',
    url: 'https://al-nahrayn-gold.vercel.app',
    tone: 'gold',
    tags: ['Webbdesign', 'Menyboards', 'Varumärke'],
    challenge: 'Företaget behövde ett mer premium och sammanhållet visuellt uttryck som bättre speglade maten och restaurangupplevelsen.',
    solution: 'Jag byggde en mörk, matdriven webb och tog även fram digitala menyboards som kan användas direkt på skärmar i restaurangen.',
    deliverables: ['Ny hemsida', 'Premium visuell riktning', 'Digitala menyboards', 'Mobilanpassning']
  },
  {
    slug: 'vaxjo-eltjanst',
    name: 'Växjö Eltjänst',
    domain: 'vaxjo-eltjanst-view.vercel.app',
    category: 'Elektriker',
    city: 'Växjö',
    summary: 'Redesign från en enklare äldre sajt till en modern tjänsteföretagssida med tydligare struktur och kontaktvägar.',
    url: 'https://vaxjo-eltjanst-view.vercel.app',
    tone: 'blue',
    tags: ['Redesign', 'Lokalt företag', 'SEO-grund'],
    challenge: 'Den äldre hemsidan visade inte företagets tjänster och kvalitet lika tydligt som den kunde och gav ett svagare första intryck.',
    solution: 'Jag tog fram en ny, tydligare struktur med modern design, separata tjänster och starkare CTA:er för offert och kontakt.',
    deliverables: ['Redesign', 'Tjänstesidor', 'Kontaktflöden', 'SEO-vänlig struktur']
  },
  {
    slug: 'penselverket',
    name: 'Penselverket',
    domain: 'peselverket.vercel.app',
    category: 'Måleri',
    city: 'Västra Götaland',
    summary: 'En komplett digital grund för ett måleriföretag med tjänster, projekt, offertflöde och lokal synlighet i fokus.',
    url: 'https://peselverket.vercel.app',
    tone: 'green',
    tags: ['Webbdesign', 'Offertflöde', 'Local SEO'],
    challenge: 'Företaget behövde en professionell digital närvaro där nya kunder snabbt förstår tjänsterna och enkelt kan skicka en förfrågan.',
    solution: 'Jag byggde en multipage-sajt med tydliga tjänster, projekt, kontakt och en struktur som är lätt att bygga vidare på med Google och reviews.',
    deliverables: ['Ny hemsida', 'Offertflöde', 'Tjänstesidor', 'Lokal SEO-grund']
  }
];
