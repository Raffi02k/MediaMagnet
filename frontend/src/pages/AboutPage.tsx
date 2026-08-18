import { PageMeta } from '../components/PageMeta';

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Om Mig | Raffi Digital"
        description="Om Raffi Kradeghlian - Systemutveckling, UX och digital närvaro för småföretag."
        bodyClassName="page-about page-agency"
      />
      <section className="subhero">
        <div className="glow glow-blue" />
        <div className="container">
          <span className="eyebrow">About</span>
          <div className="page-title-line">
            <div>
              <h1>Systemutvecklare med öga för design.</h1>
              <p>Jag hjälper företag att få en digital närvaro som inte bara ser bra ut, utan som också har rätt teknik, ägarskap och struktur i baksystemet.</p>
            </div>
            <div className="number">04</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-teaser">
          <div className="portrait-card">
            <img src="/assets/raffi-portrait.jpeg" alt="Raffi" />
            <div className="portrait-badge">Available for selected projects</div>
          </div>
          <div className="about-panel">
            <div>
              <span className="eyebrow">Filosofi</span>
              <h2>Enkelt att använda. Enkelt att förstå.</h2>
            </div>
            <div>
              <p>Många småföretagare hamnar i en situation där domän, konton, formulär och mejl ligger utspridda hos olika leverantörer utan tydlig överblick. Mitt mål är att samla allt, bygga en riktigt bra webbplats och ge kunden full koll på sina egna tillgångar.</p>
              <div className="principles">
                <div className="principle"><b>Frontend</b><span>React, TypeScript, Vite, responsiv UX och snabba laddtider.</span></div>
                <div className="principle"><b>Backend</b><span>Python, FastAPI, REST API:er, validering och formulärlogik.</span></div>
                <div className="principle"><b>Närvaro</b><span>Domän, hosting, e-post, Google Företagsprofil och SEO.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
