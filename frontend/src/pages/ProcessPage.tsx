import { PageMeta } from '../components/PageMeta';

export default function ProcessPage() {
  return (
    <>
      <PageMeta
        title="Arbetssätt & Process | Raffi Digital"
        description="Så här arbetar Raffi Digital från idé till lansering och tillväxt."
        bodyClassName="page-process page-agency"
      />
      <section className="subhero">
        <div className="glow glow-blue" />
        <div className="container">
          <span className="eyebrow">Process</span>
          <div className="page-title-line">
            <div>
              <h1>En tydlig väg framåt.</h1>
              <p>Ett webbprojekt blir bäst när kunden hela tiden vet vad som händer och vad nästa steg är. Här är strukturen jag jobbar efter.</p>
            </div>
            <div className="number">03</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="workflow" style={{ borderRight: '1px solid var(--line)' }}>
            <div className="workflow-step"><strong>01</strong><h3>Förstå &amp; Planera</h3><p>Vi går igenom affären, tjänsterna, kunderna och konkurrenterna. Vi sätter en rimlig omfattning och bestämmer vad som ska finnas med till launch.</p></div>
            <div className="workflow-step"><strong>02</strong><h3>Design &amp; Frontend</h3><p>Vi bygger gränssnittet i kod, sätter färger, typografi, komponenter och testar hur det fungerar på mobil och dator.</p></div>
            <div className="workflow-step"><strong>03</strong><h3>Backend &amp; Drift</h3><p>Vi sätter upp kontaktformulär, mejlflöden, SSL, domän, DNS och hosting så att all teknik ligger på rätt ställe.</p></div>
            <div className="workflow-step"><strong>04</strong><h3>Lansera &amp; Växa</h3><p>Vi lanserar sidan, sätter upp Google Företagsprofil och Search Console samt planerar hur recensioner och innehåll kan hållas levande.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
