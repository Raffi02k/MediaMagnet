const careFeatures = [
  'Hosting av din hemsida',
  'Teknisk funktionskontroll',
  'Nödvändiga uppdateringar',
  'Mindre innehålls- och SEO-ändringar',
  'E-postsupport',
  'Upp till 30 min manuellt arbete per månad'
];

export const pricingPlans = [
  {
    id: 'hemsida', name: 'Hemsida', label: '01 / Din digitala grund',
    price: '5 000', period: 'engångskostnad', inclusive: '6 250 kr inkl. moms',
    description: 'En professionell hemsida som presenterar ditt företag och gör det enkelt att ta nästa steg.',
    features: ['Anpassning av presenterad demo', 'Färdigställande enligt godkänd omfattning', 'Mobilanpassad design', 'Grundläggande SEO', 'Publicering av hemsidan'],
    note: 'Hosting och löpande service väljs separat.', cta: 'Prata om din hemsida', service: 'Ny hemsida'
  },
  {
    id: 'manadsservice', name: 'Månadsservice', label: '02 / Hjälp efter lansering',
    price: '300', period: 'per månad', inclusive: '375 kr/mån inkl. moms',
    description: 'För dig som vill ha hjälp med drift och små uppdateringar, med månadsvis betalning.',
    features: careFeatures, note: 'Totalt upp till 30 min arbete per månad, inklusive support.',
    cta: 'Välj månadsservice', service: 'Hosting & löpande hjälp'
  },
  {
    id: 'arsservice', name: 'Årsservice', label: '03 / Ett år, ett upplägg',
    price: '2 000', period: 'för 12 månader', inclusive: '2 500 kr/år inkl. moms',
    description: 'Samma löpande hjälp som månadsservice, samlad i ett pris för hela året.',
    features: careFeatures, note: 'Motsvarar cirka 167 kr/mån exkl. moms. Faktureras för 12 månader.',
    cta: 'Välj årsservice', service: 'Hosting & löpande hjälp'
  },
  {
    id: 'avancerad', name: 'Avancerad', label: '04 / Mer än en hemsida',
    price: '10 000', period: 'engångskostnad', inclusive: '12 500 kr inkl. moms',
    description: 'En avancerad hemsida med backend och bokningar för dig som behöver fler funktioner i vardagen.',
    features: ['Allt i Hemsida', 'Backend och databas', 'Bokningsfunktion för dina tjänster', 'Administrationsvy för bokningar', 'Anpassade formulär och arbetsflöden', 'Testning och genomgång inför lansering'],
    note: 'Ett mer omfattande projekt. Funktioner och tidsplan bestäms i offerten. Hosting och löpande service väljs separat.',
    cta: 'Välj Avancerad', service: 'Ny hemsida'
  },
  {
    id: 'cms', name: 'CMS / Admin Dashboard', label: '05 / Kontroll över ditt system',
    price: '15 000', period: 'engångskostnad', inclusive: '18 750 kr inkl. moms',
    description: 'En hemsida med ett innehållshanteringssystem (CMS) eller en anpassad adminpanel, så att du själv kan hantera innehåll och verksamhet.',
    features: ['Allt i Avancerad', 'CMS eller anpassad Admin Dashboard', 'Inloggning för administratörer', 'Hantera innehåll och uppgifter själv', 'Anpassade administrationsflöden', 'Genomgång av ditt system'],
    note: 'Vi väljer CMS eller adminpanel efter dina behov. Funktioner och tidsplan bestäms i offerten. Hosting och löpande service väljs separat.',
    cta: 'Välj CMS / Admin Dashboard', service: 'Ny hemsida'
  },
  {
    id: 'deluxe', name: 'Deluxe', label: '06 / Hela lösningen',
    price: '20 000', period: 'engångskostnad', inclusive: '25 000 kr inkl. moms',
    description: 'Vårt kompletta webbpaket – från skräddarsydd design och avancerade funktioner till lansering och hjälp under första året.',
    features: ['Allt i CMS / Admin Dashboard', 'Skräddarsydd design och sidstruktur', 'Kundinloggning och användarhantering', 'Integrationer enligt överenskommen omfattning', 'Fördjupad SEO och innehållsstruktur', 'Genomgång av administrationen', 'Första årets hosting och årsservice'],
    note: 'Allt i webbprojektets överenskomna omfattning ingår. Årsservice omfattar 30 min arbete/mån i 12 månader. Fortsatt service väljs separat.',
    cta: 'Välj Deluxe', service: 'Ny hemsida'
  }
];
