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
  identity?: {
    headline: string;
    description: string;
    keywords: string[];
    decisions: { label: string; title: string; text: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: 'birria-seoul',
    name: 'Birria Seoul',
    domain: 'birria-seoul-eight.vercel.app',
    category: 'Restaurang',
    city: 'Göteborg',
    summary: 'Seoul möter mexikansk streetfood i Göteborg. En personlig, matdriven hemsida som lyfter Birria Seouls unga energi och gör det enkelt att hitta menyn och ta sig dit.',
    url: 'https://birria-seoul-eight.vercel.app',
    tone: 'red',
    tags: ['Webbdesign', 'Restaurang', 'Mobil UX'],
    challenge: 'Birria Seoul är inte en traditionell mexikansk eller koreansk restaurang. På Stampgatan i Göteborg möts birria, tacos och quesabirria med koreanska smaker i ett eget streetfood-koncept. Hemsidan behövde förmedla just den personligheten: ung, energisk och nyfiken. Besökaren ska förstå vad som gör stället speciellt, inte bara mötas av ännu en restaurangmall.',
    solution: 'Jag tog fram en matdriven hemsida där stora matbilder, ett tydligt visuellt uttryck och en lättillgänglig meny får jobba tillsammans. Konceptet Korean × Mexican street food ger innehållet en röd tråd, medan galleri, kontakt och vägar vidare till beställning gör sidan användbar. På mobilen ska det vara lika enkelt att upptäcka maten som att planera ett besök.',
    deliverables: ['Personlig webbdesign med streetfood-känsla', 'Menystruktur och matbilder i fokus', 'Mobilanpassning och tydliga kontaktvägar', 'Digitala menyboards i samma uttryck'],
    identity: {
      headline: 'Seoul möter tacos. Inte en restaurangmall.',
      description: 'För Birria Seoul vill jag fånga känslan av nästa generations streetfood-ställe: högljutt i uttrycket, lekfullt i mötet mellan smaker och helt fokuserat på maten. Det ska kännas som deras ställe, redan på skärmen.',
      keywords: ['Ung energi', 'Seoul × Mexico', 'Mat i närbild'],
      decisions: [
        {
          label: 'Koncept → personlighet',
          title: 'Två matkulturer. En egen attityd.',
          text: 'Jag utgår från deras kombination av birria, tacos och koreanska smaker, inte från hur en restaurangsajt brukar se ut. Det ger berättelsen en tydlig kärna: Seoul möter mexikansk streetfood på Stampgatan. Tonen får vara direkt och lekfull, med maten i centrum i stället för formella restaurangfraser.'
        },
        {
          label: 'Personlighet → formspråk',
          title: 'Mer streetfood-affisch än finrestaurang.',
          text: 'Stora matbilder låter textur, färg och maten själv skapa aptit. I menyboardsen driver jag uttrycket vidare med svart och creme, orange, turkos och lime, rivna papperskanter och kraftig typografi. Det är konkreta val för ett ungt streetfood-koncept, inte dekoration som lika gärna kunde tillhöra vilket företag som helst.'
        },
        {
          label: 'Formspråk → upplevelse',
          title: 'Samma känsla. Från första scroll till första dipp.',
          text: 'Hemsidan gör det lätt att upptäcka maten, läsa menyn och hitta till restaurangen. I lokalen tar menyboardsen vid med samma matfokus och korta budskap som ”Dip. Crunch. Repeat.” Jag knyter ihop det digitala och det fysiska, så att personligheten inte stannar vid en snygg startsida utan följer gästen vidare.'
        }
      ]
    }
  },
  {
    slug: 'al-nahrayn-fisk',
    name: 'AL Nahrayn Fisk',
    domain: 'al-nahrayn.vercel.app',
    category: 'Restaurang',
    city: 'Göteborg',
    summary: 'Irakisk fisktradition i ett modernt digitalt uttryck. En personlig restauranghemsida där masgouf, elden och den varma gästfriheten får sätta tonen.',
    url: 'https://al-nahrayn.vercel.app',
    tone: 'gold',
    tags: ['Webbdesign', 'Menyboards', 'Varumärke'],
    challenge: 'Al-Nahrayn ska inte försvinna bland allmänna fiskrestauranger i Göteborg. Det särskilda ligger i den irakiska fisktraditionen och masgouf, där maten och tillagningen över eld bär en egen berättelse. Utmaningen är att låta den identiteten ta plats i en modern hemsida, utan att uttrycket blir opersonligt eller att kulturen reduceras till dekoration.',
    solution: 'Jag byggde en mörk, matdriven hemsida med stora bilder av fisken och elden, varma guldaccenter och en uttrycksfull seriftypografi. Restaurangnamnet på svenska och arabiska får synas i presentationen, medan tydliga vägar till meny, galleri och kontakt gör sidan enkel att använda. Jag tog också fram digitala menyboards, så att restaurangens uttryck fortsätter från hemsidan till skärmarna i lokalen.',
    deliverables: ['Personlig webbdesign med irakisk identitet', 'Masgouf och tillagningen i bildfokus', 'Digitala menyboards i samma uttryck', 'Mobilanpassning, meny och kontaktvägar'],
    identity: {
      headline: 'Irakiska rötter. Ett modernt uttryck.',
      description: 'För Al-Nahrayn vill jag låta traditionen vara själva utgångspunkten, inte något som läggs ovanpå en färdig mall. Fisken, elden och restaurangens eget namn bygger känslan. Den moderna formen hjälper berättelsen att nå fram utan att ta över den.',
      keywords: ['Masgouf i centrum', 'Värme från elden', 'Tradition i modern form'],
      decisions: [
        {
          label: 'Matkulturen → identiteten',
          title: 'Inte bara fisk. En irakisk mattradition.',
          text: 'Jag lyfter masgouf och tillagningen över eld redan i det första intrycket. Det gör restaurangens inriktning tydlig både för gäster som känner maten och för dem som upptäcker den för första gången. Namnet på svenska och arabiska är en del av restaurangens egen identitet, inte ett dekorativt inslag. Det personliga kommer från deras mat och uttryck, inte från en generell bild av Mellanöstern.'
        },
        {
          label: 'Identiteten → formspråket',
          title: 'Eldens värme, med plats att andas.',
          text: 'Den mörka bakgrunden låter fiskens yta och eldens sken träda fram. Varma guldtoner knyter ihop detaljerna, medan stora serifrubriker ger presentationen karaktär. Jag kombinerar det med luft, rena knappar och en tydlig struktur. Det är så jag förenar tradition och ett modernt uttryck: maten står för känslan, designen ger den utrymme.'
        },
        {
          label: 'Formspråket → gästupplevelsen',
          title: 'Från känslan på skärmen till maten i lokalen.',
          text: 'Det första intrycket ska väcka nyfikenhet, men gästen behöver också snabbt kunna läsa menyn, se fler bilder och hitta kontaktvägen. Därför låter jag den visuella berättelsen och de praktiska funktionerna arbeta tillsammans. Menyboardsen fortsätter samma varma uttryck inne i restaurangen. Helheten ska kännas som Al-Nahrayn hela vägen, inte som en hemsida och en meny som råkar ha samma logotyp.'
        }
      ]
    }
  },
  {
    slug: 'vaxjo-eltjanst',
    name: 'Växjö Eltjänst',
    domain: 'vaxjo-eltjanst-view.vercel.app',
    category: 'Elektriker',
    city: 'Växjö',
    summary: 'En personlig redesign för ett lokalt elföretag i Växjö. Tydlig struktur, ett lugnt tekniskt uttryck och nära till människorna bakom företaget.',
    url: 'https://vaxjo-eltjanst-view.vercel.app',
    tone: 'blue',
    tags: ['Redesign', 'Lokalt företag', 'SEO-grund'],
    challenge: 'Den befintliga webbplatsen presenterar framför allt företagsuppgifter och kontaktvägar till Mathias Sandström och Marcus Svensson. Det ger en konkret grund, men lämnar lite utrymme för att presentera företaget. Min uppgift i redesignen är att ge Växjö Eltjänst en tydligare digital identitet utan att tappa det personliga: ett lokalt elföretag med namngivna personer att kontakta.',
    solution: 'Jag tog fram en redesign med tydligare innehållshierarki, utrymme för tjänsteinformation och korta vägar till kontakt. Jag vill att besökaren snabbt ska förstå vilket företag det är, var det finns och hur man tar nästa steg. Det visuella uttrycket är mer återhållsamt än i ett restaurangprojekt: struktur och läsbarhet får bära känslan av ordning, medan den direkta kontakten gör sidan personlig.',
    deliverables: ['Redesign med en egen visuell riktning', 'Tydlig struktur för företag och tjänster', 'Personliga kontaktvägar och mobilfokus', 'Lokal förankring i innehållet'],
    identity: {
      headline: 'Lokalt förankrat. Personligt på riktigt.',
      description: 'Växjö Eltjänst behöver inte låta som en stor, anonym kedja. Jag vill lyfta ett företag där det finns riktiga namn bakom kontakten och en tydlig hemvist i Växjö. Personligheten ligger i det raka, tillgängliga och mänskliga.',
      keywords: ['Växjö i fokus', 'Människor bakom företaget', 'Tydlighet före stora ord'],
      decisions: [
        {
          label: 'Företaget → personligheten',
          title: 'Mathias och Marcus. Inte bara ett kontaktformulär.',
          text: 'Den officiella sidan har redan något personligt att bygga vidare på: direktkontakt med Mathias och Marcus. I min riktning för redesignen får den närheten vara en styrka. Jag vill göra det tydligt vem besökaren kan prata med, snarare än låta företaget försvinna bakom allmänna säljfraser och anonyma kontaktvägar.'
        },
        {
          label: 'Personligheten → designen',
          title: 'Ordning i uttrycket. Plats för människorna.',
          text: 'För det här projektet väljer jag en lugnare, tekniskt präglad presentation med blå toner, tydliga linjer och lättläst typografi. Här ska designen hjälpa besökaren att orientera sig, inte konkurrera om uppmärksamheten. Där Birria får vara lekfullt och högljutt får Växjö Eltjänst ett mer sakligt och samlat uttryck, anpassat till ett företag inom el och installation.'
        },
        {
          label: 'Designen → nästa steg',
          title: 'Från ett första intryck till en riktig kontakt.',
          text: 'Jag utgår från besökarens frågor: Är det här ett elföretag i Växjö? Var hittar jag informationen jag behöver? Vem kontaktar jag om mitt ärende? Därför får företagsinformationen, den lokala förankringen och kontaktvägarna tydliga roller i strukturen. Målet är en hemsida som gör det enklare att inleda ett samtal, utan att lova tjänster, behörigheter eller resultat som inte är bekräftade.'
        }
      ]
    }
  },
  {
    slug: 'penselverket',
    name: 'Penselverket',
    domain: 'peselverket.vercel.app',
    category: 'Måleri',
    city: 'Uddevalla',
    summary: 'En personlig hemsida för en målerifirma i Uddevalla, där omsorgen om hantverket får synas i både bilder, innehåll och vägen till en offert.',
    url: 'https://peselverket.vercel.app',
    tone: 'green',
    tags: ['Webbdesign', 'Offertflöde', 'Local SEO'],
    challenge: 'Penselverket arbetar med allt från invändig målning och tapetsering till fasader och renoveringsmålning. Utmaningen är att göra bredden lätt att förstå utan att hemsidan blir en opersonlig lista över tjänster. Företagets fokus på noggrant arbete och tydlig kommunikation behöver märkas redan i det första intrycket, oavsett om besökaren vill måla om ett rum eller planera ett större projekt.',
    solution: 'Jag byggde en hemsida med separata tjänstesidor, plats för projekt och ett tydligt offertflöde. En varm, ljus färggrund och dämpade blå accenter ger innehållet lugn, medan bilder av fasader och detaljer lyfter själva hantverket. Strukturen hjälper privatpersoner, företag och fastighetsägare att hitta rätt, med Uddevalla som tydlig lokal utgångspunkt.',
    deliverables: ['Personlig webbdesign med hantverket i fokus', 'Tjänstesidor för olika måleribehov', 'Projektpresentation och tydligt offertflöde', 'Mobilanpassning och lokal struktur'],
    identity: {
      headline: 'Omsorg om ytan. Personlighet i varje detalj.',
      description: 'För Penselverket vill jag förmedla känslan av ett genomtänkt hantverk, inte bara ett nymålat resultat. Hemsidan ska kännas varm, noggrann och lätt att ta till sig, med samma omsorg i presentationen som företaget vill lägga i måleriarbetet.',
      keywords: ['Omsorg om detaljerna', 'Förankrat i Uddevalla', 'Tydligt från start'],
      decisions: [
        {
          label: 'Hantverket → personligheten',
          title: 'Mer än färg på en vägg.',
          text: 'Jag tar fasta på Penselverkets fokus på noggrant arbete, från förberedelserna till den färdiga ytan. Berättelsen handlar därför inte bara om vad som målas, utan om omsorgen bakom arbetet. Bilder av fasader, snickerier och detaljer ger hantverket en konkret plats på hemsidan och hjälper besökaren att föreställa sig sitt eget projekt.'
        },
        {
          label: 'Personligheten → designen',
          title: 'Varmt, luftigt och genomarbetat.',
          text: 'Den ljusa, varma bakgrunden möter en dämpad blå accent, medan stora bilder och tydlig typografi får bära uttrycket. Jag ger detaljerna utrymme i stället för att fylla varje yta. Det skapar en lugn presentation som passar ett måleriföretag: färg och form ska kännas genomtänkta, och det ska vara enkelt att läsa vidare utan att tappa bort sig.'
        },
        {
          label: 'Designen → kundens projekt',
          title: 'Från ”vi vill måla om” till en tydlig förfrågan.',
          text: 'En privatperson som vill tapetsera ett rum har andra frågor än en fastighetsägare som planerar fasadmålning. Jag delar därför upp tjänsterna och gör vägen till offert tydlig, så att besökaren kan utgå från sitt eget behov. Den lokala förankringen i Uddevalla och ett rakt språk knyter ihop innehållet. Hemsidan ska hjälpa kunden att beskriva projektet och inleda en dialog, inte ersätta den personliga kontakten.'
        }
      ]
    }
  }
];
