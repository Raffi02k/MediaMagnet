import { PageMeta } from '../components/PageMeta';

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Tjänster | Raffi Digital"
        description="Raffi Digital bygger webbplatser, system och digital närvaro för företag."
        bodyClassName="page-services page-agency"
      />
      <section className="subhero">
        <div className="glow glow-blue" />
        <div className="container">
          <span className="eyebrow">Services</span>
          <div className="page-title-line">
            <div>
              <h1>Build. Run. Grow.</h1>
              <p>Jag bygger hemsidan och hjälper till med det som gör att den fungerar professionellt efteråt — från kontaktflöden till Google, hosting och löpande förbättring.</p>
            </div>
            <div className="number">01</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <aside className="sticky-aside"><span className="eyebrow">BUILD</span><h3>Webb &amp; system</h3><p>För företag som behöver en modern, snabb och tydlig webbplats som går att bygga vidare på.</p></aside>
          <div>
            <div className="content-block"><h2>Web design &amp; development</h2><p>Responsiva multi-page-webbplatser med tydlig hierarki, konverteringsvägar och ett gränssnitt som känns genomarbetat på både mobil och desktop.</p><div className="stack-cloud"><span>React</span><span>TypeScript</span><span>Vite / Node</span><span>JavaScript</span><span>Responsive UX</span></div></div>
            <div className="content-block"><h2>Backend &amp; kontaktflöden</h2><p>När sidan behöver mer än statisk frontend bygger jag ett enkelt API-lager, validering, spam-skydd och kontaktflöden som kan kopplas till e-post eller andra tjänster.</p><div className="stack-cloud"><span>Python</span><span>FastAPI</span><span>REST API</span><span>SMTP / email</span><span>Forms</span></div></div>
            <div className="content-block"><h2>Integrationer</h2><p>Projektet kan förberedas för CRM, externa API:er, databaser, automationer och andra system — men jag försöker alltid börja med den enklaste lösningen som skapar verklig nytta.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container content-grid">
          <aside className="sticky-aside"><span className="eyebrow">RUN</span><h3>Drift &amp; ägarskap</h3><p>Kunden ska inte fastna i teknik eller tappa kontroll över sina konton.</p></aside>
          <div>
            <div className="content-block"><h2>Domän, DNS &amp; hosting</h2><p>Jag hjälper kunden sätta upp rätt ägarskap, DNS, SSL, hosting, backup och miljöstruktur så att lanseringen inte blir ett svart hål av inloggningar.</p></div>
            <div className="content-block"><h2>Företagsmejl &amp; formulär</h2><p>Kontakt- och offertförfrågningar kan gå direkt till företagets vanliga inkorg. Reply-To kan sättas till besökarens adress så kunden svarar precis som på ett vanligt mejl.</p></div>
            <div className="content-block"><h2>Underhåll</h2><p>Backup, uppdateringar, tillgänglighet, mindre innehållsändringar och vidareutveckling kan paketeras som en löpande tjänst när projektet behöver det.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <aside className="sticky-aside"><span className="eyebrow">GROW</span><h3>Digital närvaro</h3><p>Hemsidan blir starkare när resten av företagets digitala närvaro hänger ihop med den.</p></aside>
          <div>
            <div className="content-block"><h2>Google Företagsprofil</h2><p>Struktur för företagsuppgifter, Maps, tjänster, bilder och en enkel process för att be riktiga kunder om recensioner.</p></div>
            <div className="content-block"><h2>Search Console &amp; lokal SEO</h2><p>Indexering, sökfraser, lokal relevans, projektsidor och teknisk grund för att kunna förstå hur webbplatsen hittas.</p></div>
            <div className="content-block"><h2>Social presence</h2><p>Webbplats, Google och sociala kanaler ska berätta samma historia. Jag kan hjälpa till med struktur, innehållspelare och hur genomförda kundjobb kan återanvändas som trovärdigt innehåll.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
