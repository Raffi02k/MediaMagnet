import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { site } from '../content/siteContent';

export default function AboutPage() {
  return (
    <>
      <PageMeta title="Om MediaMagnet" description="MediaMagnet drivs av Raffi, systemutvecklare i Trollhättan med fokus på hemsidor och digital tillväxt för företag." />
      <section
        className="page-hero page-backdrop-hero about-page-hero"
        style={{ '--page-hero-image': 'url(/assets/om-hero-new.png)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Om MediaMagnet</span>
            <h1>Ditt företags personlighet. Min design och kod.</h1>
            <p>Jag heter Raffi och driver MediaMagnet. Jag hjälper företag att bli tydligare på webben, med ett eget uttryck och kortare väg från första intryck till kontakt.</p>
            <div className="page-hero-points">
              <span>Direktkontakt med mig</span>
              <span>Design och utveckling</span>
              <span>Byggt för ditt företag</span>
            </div>
            <div className="hero-buttons">
              <Link className="button button-white" to="/contact">Jobba med mig ↗</Link>
              <Link className="button button-ghost-light" to="/work">Se mina projekt ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-founder-section">
        <div className="container founder-grid">
          <div className="founder-photo-wrap">
            <img src="/assets/raffi-portrait.jpeg" alt="Raffi, grundare av MediaMagnet" loading="lazy" />
            <span>{site.location}</span>
          </div>
          <div className="founder-copy">
            <span className="section-kicker light">Vem bygger din sida?</span>
            <h2>Hej, jag heter Raffi.</h2>
            <p className="founder-lead">Jag gillar när en hemsida känns som företaget bakom den. Inte som ännu en sida med utbytt logotyp.</p>
            <p>Som systemutvecklare kombinerar jag design och kod med det som företaget faktiskt behöver i vardagen. Jag vill förstå vilka ni är, vad era kunder behöver veta och vad som gör er värda att välja. Det blir grunden för både uttrycket och strukturen.</p>
            <p>Birrias streetfood-energi, Al-Nahrayns irakiska fisktradition, Växjö Eltjänsts personliga kontakt och Penselverkets omsorg om hantverket behöver olika uttryck. Det är den skillnaden jag vill få fram, samtidigt som varje sida är lätt att använda på mobilen.</p>
            <div className="founder-note">
              <span>En person. Hela vägen.</span>
              <p>Du pratar direkt med mig om idéer, design och kod. Vi går igenom en live-version tillsammans innan lansering, och jag hjälper även till med domänkopplingen när sidan är redo.</p>
            </div>
            <Link className="button button-white" to="/process">Se hur vi jobbar tillsammans ↗</Link>
          </div>
        </div>
      </section>

      <section className="section section-white build-principles">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Hur jag bygger</span>
            <h2>Personligt i uttrycket. Genomtänkt i grunden.</h2>
            <p>En hemsida ska både kännas rätt för företaget och fungera för människan som besöker den. Det här tar jag med mig i varje projekt.</p>
          </div>
          <div className="principle-three">
            <article><span>01 / Förstå företaget</span><h3>Det börjar med er.</h3><p>Jag tar reda på vad som gör företaget speciellt och vad besökaren behöver. Det styr bilder, ord och design, inte tvärtom.</p></article>
            <article><span>02 / Bygga helheten</span><h3>Form och funktion tillsammans.</h3><p>Jag bygger i React och TypeScript, med tydligt innehåll, mobilanpassning och kontaktvägar som passar verksamheten. Tekniken ska hjälpa, inte krångla till det.</p></article>
            <article><span>03 / Följa hela vägen</span><h3>Du ser det växa fram.</h3><p>Du får en live-länk, kan testa och lämna feedback innan sidan går live. Vi tar även hand om kopplingen till din domän, som du själv äger.</p></article>
          </div>
        </div>
      </section>

      <section className="section about-next-section">
        <div className="container about-next-grid">
          <div>
            <span className="section-kicker light">Nästa steg</span>
            <h2>Vad gör ditt företag till just ditt?</h2>
            <p>Berätta om verksamheten och vad du vill förbättra. Vi börjar där, inte med en färdig lösning.</p>
          </div>
          <div className="about-next-actions">
            <Link className="button button-white" to="/contact">Berätta om ditt företag ↗</Link>
            <Link className="button button-ghost-light" to="/work">Se uttrycken i mina projekt ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
