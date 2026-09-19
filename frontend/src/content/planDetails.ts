type DetailSection = { title: string; text: string };
type PlanDetails = {
  intro: string;
  audience: string;
  included: DetailSection[];
  steps: DetailSection[];
  preparation: string[];
  scope: string;
  faq: DetailSection[];
};

export const planDetails: Record<string, PlanDetails> = {
  hemsida: {
    intro: 'En tydlig digital grund för ditt företag. Vi utgår från en presenterad demo och gör den till en färdig hemsida med ditt innehåll, din profil och tydliga kontaktvägar.',
    audience: 'Passar dig som vill presentera företaget, visa dina tjänster och få fler relevanta förfrågningar utan att behöva ett bokningssystem eller en egen adminpanel.',
    included: [
      { title: 'En demo som blir din hemsida', text: 'Vi anpassar den presenterade demon med företagets logotyp, färger, bilder och texter. Sidor och innehåll bestäms tillsammans innan färdigställandet börjar.' },
      { title: 'Tydlig på mobil och dator', text: 'Layout, navigation och kontaktvägar anpassas till olika skärmstorlekar. Besökaren ska enkelt kunna förstå vad du erbjuder och hur man kontaktar dig.' },
      { title: 'SEO-grund och publicering', text: 'Hemsidan får en grundläggande struktur för sökmotorer med relevanta sidtitlar, beskrivningar och rubriker. Vi kontrollerar länkar och sidor inför publicering på den överenskomna hostinglösningen.' }
    ],
    steps: [
      { title: 'Vi går igenom demon', text: 'Du berättar om företaget och vad hemsidan ska hjälpa till med. Vi bestämmer sidor, innehåll och omfattning i en offert.' },
      { title: 'Jag färdigställer hemsidan', text: 'Ditt material läggs in och designen anpassas. Du får gå igenom resultatet och lämna samlad återkoppling inom den överenskomna omfattningen.' },
      { title: 'Kontroll och lansering', text: 'Vi går igenom hemsidan inför publicering. Hosting och eventuell fortsatt service väljs innan lanseringen.' }
    ],
    preparation: ['Logotyp, bilder och texter till de överenskomna sidorna.', 'Kontaktuppgifter, tjänster och annan information som ska visas.', 'Tillgång till domäninställningar eller kontakt med den som hanterar dem.'],
    scope: 'Priset gäller anpassning och färdigställande av den godkända demon. Hosting, domän och externa licenser tillkommer separat. Backend, bokningar och CMS finns i de större paketen. Tidsplanen bestäms utifrån omfattning och när ditt material är klart.',
    faq: [
      { title: 'Kan jag få fler sidor eller funktioner?', text: 'Ja. Berätta vad du behöver så bestämmer vi omfattningen i offerten. Tillkommande arbete efter godkänd omfattning stäms av separat.' },
      { title: 'Kan jag få hjälp efter lanseringen?', text: 'Ja, välj månadsservice eller årsservice för hosting och löpande små ändringar. Båda omfattar upp till 30 minuter manuellt arbete per månad.' }
    ]
  },
  manadsservice: {
    intro: 'Löpande hjälp med hemsidan, betald månadsvis. Hosting och en kontakt för små ändringar gör det enklare att hålla informationen aktuell efter lanseringen.',
    audience: 'Passar dig som redan har en hemsida och vill ha hjälp med drift, nödvändiga uppdateringar och mindre justeringar med månadsvis betalning.',
    included: [
      { title: 'Hosting och teknisk funktionskontroll', text: 'Hosting ingår tillsammans med kontroll av hemsidans grundläggande funktioner. Vi går igenom den befintliga lösningen vid start för att bekräfta att den kan omfattas av upplägget.' },
      { title: 'Små ändringar när något händer', text: 'Exempel är att ändra ett telefonnummer, byta en bild, uppdatera en kort text eller justera en sidtitel. Arbetet prioriteras inom månadens tillgängliga tid.' },
      { title: 'Uppdateringar och e-postsupport', text: 'Nödvändiga uppdateringar, teknisk kontroll, mindre innehålls- och SEO-ändringar samt e-postsupport delar på totalt upp till 30 minuter manuellt arbete per månad.' }
    ],
    steps: [
      { title: 'Vi går igenom hemsidan', text: 'Vi kontrollerar teknik, hostingbehov och åtkomst. Betalning, startdatum och övriga villkor bekräftas innan servicen börjar.' },
      { title: 'Du skickar dina önskemål', text: 'Beskriv ändringen via e-post och bifoga färdig text eller bild. Samla gärna önskemålen så att tiden kan användas effektivt.' },
      { title: 'Jag hjälper inom servicetiden', text: 'Vi prioriterar det som behövs. Om en uppgift kräver mer arbete än paketet omfattar får du en separat offert innan det arbetet påbörjas.' }
    ],
    preparation: ['Webbadress och information om nuvarande hosting.', 'Nödvändig åtkomst till hemsidan och domänen, enligt överenskommelse.', 'Tydliga ändringsönskemål med färdiga texter eller bilder.'],
    scope: '300 kr per månad exklusive moms. Upp till 30 minuter manuellt arbete per månad totalt, inklusive support. Nya sidor, större ombyggnader, nya systemfunktioner, domän och externa licenser offereras separat. Avtals- och uppsägningsvillkor bekräftas i offerten.',
    faq: [
      { title: 'Är det 30 minuter för varje typ av hjälp?', text: 'Nej, 30 minuter är den sammanlagda manuella arbetstiden för månadens kontroll, uppdateringar, ändringar och support.' },
      { title: 'Vad skiljer detta från årsservice?', text: 'Innehållet och arbetstiden är samma. Årsservice faktureras för 12 månader och kostar 2 000 kr exklusive moms, jämfört med 3 600 kr för tolv månadsbetalningar.' }
    ]
  },
  arsservice: {
    intro: 'Ett helt år med hosting och löpande hjälp, samlat i ett pris. Samma innehåll som månadsservice, men 1 600 kr lägre kostnad än tolv månadsbetalningar.',
    audience: 'Passar dig som vill planera hemsidans löpande kostnad för ett helt år och få hjälp med små ändringar längs vägen.',
    included: [
      { title: 'Hosting under 12 månader', text: 'Hemsidans hosting ingår under serviceperioden. Vid start går vi igenom den tekniska lösningen, vilken åtkomst som behövs och när perioden ska börja.' },
      { title: 'Kontroll, uppdateringar och support', text: 'Teknisk funktionskontroll, nödvändiga uppdateringar och e-postsupport ingår inom totalt upp till 30 minuter manuellt arbete varje månad.' },
      { title: 'Aktuellt innehåll och mindre SEO-ändringar', text: 'Du kan exempelvis få hjälp med ändrade öppettider, en ny bild eller en justerad sidbeskrivning. Ändringar och övrigt servicearbete delar på samma månatliga tid.' },
      { title: 'Ett lägre årspris', text: '2 000 kr för 12 månader motsvarar cirka 167 kr per månad exklusive moms. Tolv betalningar à 300 kr blir 3 600 kr – du sparar därför 1 600 kr exklusive moms.' }
    ],
    steps: [
      { title: 'Vi bestämmer start och upplägg', text: 'Vi går igenom hemsidan och bekräftar serviceperiod, åtkomst och avtalsvillkor i offerten. Fakturering sker för 12 månader.' },
      { title: 'Löpande hjälp under året', text: 'Skicka mindre ändringar via e-post med det material som behövs. Vi prioriterar uppgifterna inom månadens servicetid.' },
      { title: 'Avstämning vid större behov', text: 'Nya funktioner och större ändringar får en separat offert. Fortsättning efter serviceperioden hanteras enligt de avtalade villkoren.' }
    ],
    preparation: ['Webbadress och uppgifter om nuvarande teknisk lösning.', 'Tillgång till de konton som behövs för överenskommen drift.', 'Material till ändringar och en kontaktperson för återkoppling.'],
    scope: '2 000 kr exklusive moms för 12 månader, med upp till 30 minuter manuellt arbete per månad inklusive support. Domän, externa licenser och arbete utanför servicens omfattning tillkommer separat. Betalning, fortsättning och övriga avtalsvillkor bekräftas i offerten.',
    faq: [
      { title: 'Får jag samma hjälp som med månadsservice?', text: 'Ja. Hosting, innehåll och månatlig arbetstid är samma. Skillnaden är priset och att årsservice faktureras för hela 12-månadersperioden.' },
      { title: 'Ingår årsservice i Deluxe?', text: 'Ja, första årets hosting och årsservice ingår i Deluxe. Du behöver alltså inte lägga till ett separat servicepaket för samma period.' }
    ]
  },
  avancerad: {
    intro: 'En hemsida som också gör ett jobb bakom kulisserna. Backend, databas och bokningsfunktion knyter ihop besökarens förfrågan med din dagliga administration.',
    audience: 'Passar tjänsteföretag som vill ta emot bokningar och hantera dem i ett enklare administrativt flöde, i stället för att enbart visa information.',
    included: [
      { title: 'Hemsidans grund ingår', text: 'Du får innehållet i Hemsida: anpassning av presenterad demo, mobilanpassning, grundläggande SEO och publicering enligt godkänd omfattning.' },
      { title: 'Backend och databas', text: 'Backend är delen som behandlar uppgifter på servern. Databasen lagrar den information som behövs för de överenskomna funktionerna, exempelvis bokningar.' },
      { title: 'Bokningar och administrationsvy', text: 'Vi bestämmer vilka tjänster som ska kunna bokas, vilka uppgifter som behövs och hur du ska hantera bokningarna. En administrationsvy samlar den bokningsinformation som ingår i lösningen.' },
      { title: 'Formulär, arbetsflöden och testning', text: 'Formulär anpassas till verksamheten. Vi går igenom flödet från besökarens inmatning till din hantering och testar de överenskomna funktionerna inför lansering.' }
    ],
    steps: [
      { title: 'Vi kartlägger bokningsflödet', text: 'Vi går igenom hur en bokning ska fungera för kunden och för dig. Funktioner, databehov och tidsplan blir en del av offerten.' },
      { title: 'Jag bygger och kopplar ihop', text: 'Hemsida, backend och databas kopplas samman. Du får prova flödet och ge återkoppling på hur det fungerar i praktiken.' },
      { title: 'Vi testar och lanserar', text: 'Vi går igenom formulär, bokningar och administration innan publicering. Du får en genomgång av det du behöver för att använda lösningen.' }
    ],
    preparation: ['Beskrivning av tjänsterna och hur bokningar hanteras idag.', 'Regler, uppgifter och steg som behövs i bokningsflödet.', 'Texter, bilder och en kontaktperson som kan prova funktionerna.'],
    scope: '10 000 kr exklusive moms för överenskommen projektomfattning. Utveckling och testning kräver mer tid än en enklare hemsida; tidsplanen fastställs i offerten. Hosting och service väljs separat. Betallösningar, externa integrationer och licenser stäms av separat.',
    faq: [
      { title: 'Ingår ett fullständigt CMS?', text: 'Paketet innehåller en administrationsvy för bokningar. Vill du även själv hantera hemsidans innehåll eller ha bredare administrationsflöden passar CMS / Admin Dashboard bättre.' },
      { title: 'Kan bokningen anpassas till min verksamhet?', text: 'Ja, vi börjar med att definiera hur ditt flöde ska fungera. Vilka funktioner som ryms i paketet bekräftas innan utvecklingen börjar.' }
    ]
  },
  cms: {
    intro: 'Ta kontroll över innehåll och administration. Med ett CMS eller en anpassad adminpanel får du ett system där du kan sköta de överenskomna uppgifterna själv.',
    audience: 'Passar dig som uppdaterar innehåll ofta eller behöver en samlad arbetsyta för verksamhetens uppgifter, utöver en enklare bokningsvy.',
    included: [
      { title: 'Allt i Avancerad', text: 'Hemsida, backend, databas, bokningar och anpassade formulär ingår enligt överenskommen omfattning. CMS eller adminpanel bygger vidare på den grunden.' },
      { title: 'CMS för hemsidans innehåll', text: 'Ett Content Management System passar när du vill redigera exempelvis texter, bilder och tjänsteinformation själv. Vi bestämmer vilka innehållsdelar som ska vara redigerbara.' },
      { title: 'Eller en anpassad Admin Dashboard', text: 'En adminpanel passar när arbetet främst handlar om verksamhetens uppgifter och flöden. Vi utformar de vyer och åtgärder du behöver inom den godkända omfattningen.' },
      { title: 'Administratörsinloggning och genomgång', text: 'Administrationen får en inloggning. Du får en genomgång av hur du använder lösningen och hanterar de uppgifter eller innehållsdelar som ingår.' }
    ],
    steps: [
      { title: 'Vi väljer rätt typ av system', text: 'Vi går igenom vem som ska använda systemet och vad de ska kunna göra. Utifrån det väljer vi CMS eller adminpanel och bekräftar omfattningen.' },
      { title: 'Jag bygger administrationen', text: 'Inloggning, innehållsdelar och arbetsflöden kopplas till hemsidans backend. Du får prova vanliga uppgifter så att upplägget blir användbart i vardagen.' },
      { title: 'Genomgång och överlämning', text: 'Vi testar den överenskomna funktionaliteten och går igenom hur du arbetar i systemet innan lansering.' }
    ],
    preparation: ['En lista över innehåll eller uppgifter som du vill kunna hantera själv.', 'Beskrivning av vilka personer som ska använda administrationen.', 'Exempel på vanliga arbetsuppgifter och material att testa med.'],
    scope: '15 000 kr exklusive moms. Paketet omfattar ett CMS eller en anpassad adminpanel enligt offerten. Val av system, redigerbara delar, behörigheter och tidsplan bestäms före start. Hosting, löpande service och externa licenser väljs eller offereras separat.',
    faq: [
      { title: 'Vad är skillnaden mellan CMS och adminpanel?', text: 'CMS fokuserar på att redigera hemsidans innehåll. En adminpanel fokuserar på verksamhetens uppgifter och processer. Vi väljer det upplägg som passar dina behov.' },
      { title: 'Ingår kundinloggning också?', text: 'Det här paketet innehåller administratörsinloggning. Kundinloggning och bredare användarhantering ingår i Deluxe enligt överenskommen omfattning.' }
    ]
  },
  deluxe: {
    intro: 'Ett samlat webbprojekt med design, innehållsstruktur, systemfunktioner och hjälp efter lansering. Deluxe tar lösningen från idé till en hemsida som både kunder och administratörer kan använda.',
    audience: 'Passar dig som behöver en mer komplett lösning med egen design, kundinloggning och kopplingar till andra system – med första årets hosting och service samlat i paketet.',
    included: [
      { title: 'Hemsida, bokningar och administration', text: 'Allt i CMS / Admin Dashboard ingår: grunden från Hemsida och Avancerad samt CMS eller anpassad adminpanel. Funktionerna planeras som en sammanhängande lösning.' },
      { title: 'Skräddarsydd design och fördjupad SEO', text: 'Design och sidstruktur anpassas till företagets mål. Vi arbetar med innehållets struktur och sökbarhet så att tjänster och viktig information blir tydligt presenterade.' },
      { title: 'Kundinloggning och integrationer', text: 'Vi definierar vad inloggade kunder ska kunna se och göra samt vilka kopplingar till andra system som behövs. Användarhantering och integrationer ingår enligt den godkända omfattningen.' },
      { title: 'Första årets hosting och årsservice', text: 'Efter lanseringen ingår hosting och årsservice i 12 månader. Teknisk kontroll, nödvändiga uppdateringar, mindre ändringar och e-postsupport omfattar tillsammans upp till 30 minuter manuellt arbete per månad.' }
    ],
    steps: [
      { title: 'Vi planerar helheten', text: 'Vi går igenom design, innehåll, användare, bokningar och integrationer. Offerten beskriver leveransen och tidsplanen innan projektet startar.' },
      { title: 'Design och system byggs ihop', text: 'Vi arbetar igenom gränssnitt och funktioner med avstämningar. Du bidrar med material och återkoppling, och får prova de viktigaste användarflödena.' },
      { title: 'Testning, utbildning och lansering', text: 'Vi kontrollerar den överenskomna lösningen och går igenom administrationen tillsammans. Därefter publiceras hemsidan.' },
      { title: 'Hjälp under första året', text: 'Hosting och årsservice tar vid enligt avtalad start. Fortsatt service efter de första 12 månaderna väljs separat.' }
    ],
    preparation: ['Företagets mål, grafiskt material, texter och bilder.', 'Beskrivning av kundernas och administratörernas viktigaste uppgifter.', 'Uppgifter om externa system som ska kopplas in samt nödvändig åtkomst.', 'En kontaktperson för beslut, återkoppling och testning.'],
    scope: '20 000 kr exklusive moms. Allt i webbprojektets godkända omfattning samt första årets hosting och årsservice ingår. Domän, externa licenser och arbete utanför omfattningen offereras separat. Funktioner, integrationer och tidsplan bekräftas i offerten; fortsatt service efter 12 månader väljs separat.',
    faq: [
      { title: 'Vad menas med att allt ingår?', text: 'Det betyder att de överenskomna delarna av webbprojektet och första årets hosting och årsservice samlas i paketet. Vi specificerar leveransen före start så att det är tydligt vilka funktioner och integrationer du får.' },
      { title: 'Hur fungerar hjälpen efter lanseringen?', text: 'Du kan få hjälp via e-post med mindre ändringar och löpande teknik. Totalt ingår upp till 30 minuter manuellt arbete per månad under första året. Större vidareutveckling får en separat offert.' }
    ]
  }
};
