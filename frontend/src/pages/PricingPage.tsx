import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { pricingPlans } from '../content/pricing';
import '../styles/pricing.css';

const comparison = [
  { label: 'Färdigställande, mobilanpassning & publicering', values: ['Ingår', 'Separat', 'Separat', 'Ingår', 'Ingår', 'Ingår'] },
  { label: 'Grundläggande SEO', values: ['Ingår', 'Separat', 'Separat', 'Ingår', 'Ingår', 'Ingår'] },
  { label: 'Backend, databas & bokningar', values: ['Separat', 'Separat', 'Separat', 'Ingår', 'Ingår', 'Ingår'] },
  { label: 'Administrationsvy för bokningar', values: ['Separat', 'Separat', 'Separat', 'Ingår', 'Ingår', 'Ingår'] },
  { label: 'CMS eller anpassad Admin Dashboard', values: ['Separat', 'Separat', 'Separat', 'Separat', 'Ingår', 'Ingår'] },
  { label: 'Administratörsinloggning & egen hantering av innehåll', values: ['Separat', 'Separat', 'Separat', 'Separat', 'Ingår', 'Ingår'] },
  { label: 'Skräddarsydd design & fördjupad SEO', values: ['Separat', 'Separat', 'Separat', 'Separat', 'Separat', 'Ingår'] },
  { label: 'Kundinloggning & integrationer', values: ['Separat', 'Separat', 'Separat', 'Separat', 'Separat', 'Ingår'] },
  { label: 'Hosting & teknisk funktionskontroll', values: ['Separat', 'Ingår', 'Ingår', 'Separat', 'Separat', 'Första året'] },
  { label: 'Uppdateringar, mindre ändringar & e-postsupport', values: ['Separat', 'Ingår', 'Ingår', 'Separat', 'Separat', 'Första året'] },
  { label: 'Manuellt arbete inom service', values: ['Separat', '30 min/mån', '30 min/mån', 'Separat', 'Separat', '30 min/mån i 12 månader'] }
];

const questions = [
  ['Vad ingår i hemsidan för 5 000 kr?', 'Priset gäller anpassning och färdigställande av en presenterad demo, mobilanpassning, grundläggande SEO och publicering. Vi kommer överens om sidor, innehåll och funktioner i offerten innan arbetet börjar. Hosting och månads- eller årsservice tillkommer om du väljer det.'],
  ['Vad ingår i Avancerad för 10 000 kr?', 'Allt i Hemsida samt backend, databas, bokningsfunktion och en administrationsvy för dina bokningar. Vi anpassar formulär och arbetsflöden efter den omfattning vi kommer överens om. Projektet kräver mer utveckling och testning än en enklare hemsida, så tidsplanen fastställs i offerten. Hosting och löpande service väljs separat.'],
  ['Vad ingår i CMS / Admin Dashboard för 15 000 kr?', 'Allt i Avancerad samt ett innehållshanteringssystem (CMS) eller en anpassad adminpanel. Ett CMS passar när du vill redigera hemsidans innehåll själv, medan en adminpanel kan anpassas för att hantera verksamhetens uppgifter och arbetsflöden. Administratörsinloggning och en genomgång av systemet ingår. Vi bestämmer lösning, funktioner och tidsplan tillsammans i offerten. Hosting och löpande service väljs separat.'],
  ['Vad betyder att allt ingår i Deluxe för 20 000 kr?', 'Deluxe samlar hela webbprojektet: allt i CMS / Admin Dashboard, skräddarsydd design, kundinloggning, överenskomna integrationer, fördjupad SEO och en genomgång av administrationen. Första årets hosting och årsservice ingår också, med upp till 30 min manuellt arbete per månad. Vi bekräftar funktioner och tidsplan i offerten. Efter 12 månader väljer du fortsatt service separat. Domän och externa licenser offereras separat.'],
  ['Vad innebär 30 minuter per månad?', 'Servicepaketen omfattar totalt upp till 30 minuter manuellt arbete per månad. Det omfattar teknisk funktionskontroll, nödvändiga uppdateringar, mindre innehålls- och grundläggande SEO-ändringar samt e-postsupport. Större arbeten stäms av och offereras separat.'],
  ['Vad skiljer månadsservice från årsservice?', 'Innehållet och arbetstiden per månad är samma. Månadsservice kostar 300 kr per månad, medan årsservice kostar 2 000 kr för 12 månader. Det är 1 600 kr mindre än tolv månadsbetalningar. Alla belopp är exklusive moms. Betalning och övriga avtalsvillkor bekräftas i offerten.'],
  ['Tillkommer några andra kostnader?', 'Domän och externa licenser offereras separat. Större ändringar, nya funktioner och arbete utanför den överenskomna omfattningen får en separat offert innan vi sätter igång.'],
  ['Kan jag få hjälp med något annat?', 'Absolut. Google Företagsprofil, lokal SEO, reviews, digitala menyboards och mer omfattande webbprojekt kan läggas upp efter ditt behov. Berätta vad du vill ha hjälp med så får du en anpassad offert.']
];

export default function PricingPage() {
  return (
    <>
      <PageMeta title="Priser & paket" description="Hemsida 5 000 kr, Avancerad 10 000 kr, CMS / Admin Dashboard 15 000 kr och Deluxe 20 000 kr. Hosting och service från 2 000 kr/år. Priser exklusive moms." />
      <section className="pricing-hero">
        <div className="container pricing-hero__grid">
          <div>
            <span className="section-kicker">Priser & paket</span>
            <h1>En bra hemsida.<br /><em>Ett tydligt pris.</em></h1>
            <p>Från en professionell hemsida till en komplett lösning med backend och bokningar. Välj nivån som passar ditt företag. Personlig kontakt hela vägen.</p>
            <a className="button button-dark button-large" href="#paket">Se våra paket ↓</a>
            <span className="pricing-hero__note">Alla priser i SEK, exklusive moms.</span>
          </div>
          <figure className="pricing-visual">
            <div className="pricing-visual__bar"><span aria-hidden="true">● ● ●</span><span>Din nästa digitala start</span></div>
            <img src="/assets/Webbdesign-och-utveckling.jpeg" alt="Illustration av webbdesign och utveckling" width="720" height="480" />
            <figcaption><span className="pricing-tick" aria-hidden="true">✓</span> Design, mobilanpassning & SEO-grund</figcaption>
          </figure>
        </div>
      </section>

      <section className="section pricing-packages" id="paket" aria-labelledby="packages-title">
        <div className="container">
          <div className="pricing-section-heading">
            <div><span className="section-kicker">Fyra nivåer. Löpande hjälp.</span><h2 id="packages-title">Välj ditt nästa steg.</h2></div>
            <p>Välj Hemsida, Avancerad, CMS / Admin Dashboard eller Deluxe som engångsprojekt. Lägg till månads- eller årsservice för löpande hjälp. I Deluxe ingår första årets hosting och årsservice.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <article key={plan.id} className={`pricing-card${plan.id === 'deluxe' || plan.id === 'arsservice' ? ' pricing-card--featured' : ''}`}>
                <span className="pricing-card__label">{plan.label}</span>
                <h3><Link className="pricing-card__title-link" to={`/pricing/${plan.id}`}>{plan.name}</Link></h3>
                <p className="pricing-card__description">{plan.description}</p>
                <div className="pricing-card__price">{plan.price} <span>kr</span></div>
                <span className="pricing-card__period">{plan.period} · exkl. moms</span>
                <span className="pricing-card__vat">{plan.inclusive}</span>
                {plan.id === 'arsservice' && <span className="pricing-saving">Spara 1 600 kr jämfört med 12 månadsbetalningar</span>}
                <ul className="pricing-features">{plan.features.map(feature => <li key={feature}><span className="pricing-tick" aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <p className="pricing-card__note">{plan.note}</p>
                <Link className="pricing-card__details-link" to={`/pricing/${plan.id}`} aria-label={`Läs mer om ${plan.name}`}>Läs mer om paketet ↗</Link>
                <Link className={`button ${plan.id === 'deluxe' || plan.id === 'arsservice' ? 'button-white' : 'button-dark'}`} to={`/contact?plan=${plan.id}`}>{plan.cta} ↗</Link>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">Månadsservice och årsservice är alternativa upplägg för löpande hjälp. Omfattning, tidsplan och villkor bekräftas i offert före start. Domän, externa licenser och arbete utanför projektets omfattning offereras separat.</p>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="comparison-title">
        <div className="container">
          <div className="pricing-section-heading"><div><span className="section-kicker">Svart på vitt</span><h2 id="comparison-title">Det här ingår.</h2></div><p>Jämför de fyra webbpaketen och de två servicealternativen.</p></div>
          <div className="pricing-table-scroll" role="region" aria-label="Jämför paketen, scrolla i sidled på liten skärm" tabIndex={0}>
            <table className="pricing-table">
              <caption className="pricing-sr-only">Jämförelse av innehåll i MediaMagnets paket</caption>
              <thead><tr><th scope="col">Innehåll</th>{pricingPlans.map(plan => <th scope="col" key={plan.id}>{plan.name}</th>)}</tr></thead>
              <tbody>{comparison.map(row => <tr key={row.label}><th scope="row">{row.label}</th>{row.values.map((value, index) => <td key={index}>{value === 'Ingår' && <span className="pricing-table-check" aria-hidden="true">✓ </span>}{value}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-support">
          <img src="/assets/Hosting-och-lopande.jpeg" alt="Illustration av hosting och löpande hjälp med hemsidan" loading="lazy" width="640" height="480" />
          <div><span className="section-kicker">Även efter lansering</span><h2>Du driver företaget.<br />Jag hjälper med hemsidan.</h2><p>Nytt telefonnummer, en bild som ska bytas eller en text som behöver uppdateras? Servicepaketen ger dig en kontakt för små ändringar och den löpande tekniken.</p><p>Behöver du något större? Vi går igenom det tillsammans och tar fram en separat offert.</p><Link className="button button-dark" to="/work">Se exempel på mitt arbete ↗</Link></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container pricing-faq"><div><span className="section-kicker">Bra att veta</span><h2>Frågor om priserna?</h2><p>Här är detaljerna som gör det lättare att välja.</p><Link className="button button-dark" to="/contact">Fråga mig direkt ↗</Link></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
      </section>
    </>
  );
}
