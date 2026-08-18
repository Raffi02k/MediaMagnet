export type ProjectTone = 'paint' | 'data' | 'future';

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  url: string;
  live: boolean;
  tone: ProjectTone;
  caseEyebrow: string;
  caseDescription: string;
  caseFacts: Array<{
    label: string;
    value: string;
  }>;
  primaryCta: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export const projects: Project[] = [
  {
    slug: 'penselverket',
    title: 'Penselverket',
    kicker: 'Local business · 2026',
    summary:
      'En komplett digital start för ett lokalt måleriföretag: hemsida, offertflöde, mobil UX och en struktur för Google, hosting och löpande digital närvaro.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Local SEO', 'Digital presence'],
    url: 'https://penselverket.edgeone.dev',
    live: true,
    tone: 'paint',
    caseEyebrow: 'CASE STUDY · LIVE WEBSITE',
    caseDescription:
      'En komplett digital lansering för ett nytt måleriföretag i Trollhättan — från varumärkeskänsla och hemsida till offertformulär, hosting, domän, Google Företagsprofil och struktur för kundrecensioner.',
    caseFacts: [
      { label: 'Roll', value: 'UX/UI, utveckling, SEO & lansering' },
      { label: 'Teknikstack', value: 'React, TypeScript, Python, FastAPI' },
      { label: 'Leverans', value: 'Webb, offertflöde, Google Business' },
      { label: 'Status', value: 'Live & aktiv kundplattform' }
    ],
    primaryCta: {
      label: 'Öppna live sajt ↗',
      href: 'https://penselverket.edgeone.dev',
      external: true
    },
    secondaryCta: {
      label: 'Bygg något liknande ↗',
      href: '/contact'
    }
  },
  {
    slug: 'laddinsikt',
    title: 'Laddinsikt',
    kicker: 'B2B product concept · 2026',
    summary:
      'Ett datadrivet B2B-koncept för laddinfrastruktur där rå data förädlas till opportunities, business cases, leads, pipeline och alerts.',
    tags: ['Product UX', 'React', 'Python', 'Data', 'Sales intelligence'],
    url: '',
    live: false,
    tone: 'data',
    caseEyebrow: 'CASE STUDY · B2B CONCEPT',
    caseDescription:
      'En sales-intelligence-plattform framtagen för aktörer inom laddinfrastruktur. Konceptet samlar signaler, opportunities och affärscases i ett responsivt systemgränssnitt för säljteam och beslutstagare.',
    caseFacts: [
      { label: 'Fokus', value: 'B2B System UX & Datavisualisering' },
      { label: 'Teknik', value: 'React, Python, Data Dashboard' },
      { label: 'Funktioner', value: 'Opportunity scoring & pipeline' },
      { label: 'Typ', value: 'Systemkoncept & arkitektur' }
    ],
    primaryCta: {
      label: 'Discuss similar system ↗',
      href: '/contact'
    }
  },
  {
    slug: 'next-project',
    title: 'Nästa case',
    kicker: 'Open slot',
    summary:
      'Portfolion är byggd för att växa. Nästa kundprojekt kan läggas till som ett nytt case med preview, live-länk, teknik och resultat.',
    tags: ['Your brand', 'New project', 'Coming next'],
    url: '/contact',
    live: false,
    tone: 'future',
    caseEyebrow: 'NEXT CASE',
    caseDescription: 'Portfolion är byggd för att växa. Nästa projekt kan läggas till här.',
    caseFacts: [],
    primaryCta: {
      label: 'Starta projekt ↗',
      href: '/contact'
    }
  }
];
