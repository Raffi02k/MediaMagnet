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
        style={{ '--page-hero-image': 'url(/assets/om-hero.png)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Om MediaMagnet</span>
            <h1>Hemsidor som hjälper företag framåt.</h1>
            <p>Design, utveckling och digital grund byggd för tydlighet, förtroende och kontakt.</p>
            <div className="page-hero-points">
              <span>Design och kod</span>
              <span>Google och SEO</span>
              <span>Byggt for riktiga företag</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-founder-section">
        <div className="container founder-grid">
          <div className="founder-photo-wrap">
            <img src="/assets/raffi-portrait.jpeg" alt="Raffi, grundare av MediaMagnet" />
            <span>{site.location}</span>
          </div>
          <div className="founder-copy">
            <span className="section-kicker light">Vem bygger din sida?</span>
            <h2>Hej, jag heter Raffi.</h2>
            <p>Jag är systemutvecklare och gillar kombinationen mellan design, kod och hur ett företag faktiskt använder det digitala i vardagen.</p>
            <p>Mitt mål är inte att fylla en sida med tekniska ord. Målet är att bygga något som är lätt att förstå, känns professionellt och gör det enklare för nya kunder att ta kontakt.</p>
            <p>De senaste projekten har varit restauranger, elektriker och måleriföretag. Det har gjort att jag jobbar mycket med mobil UX, lokala tjänstesidor, offertflöden, Google-synlighet och hur man bygger förtroende online.</p>
            <Link className="button button-white" to="/contact">Jobba med mig ↗</Link>
          </div>
        </div>
      </section>

      <section className="section section-white build-principles">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Hur jag bygger</span>
            <h2>Snabbt att förstå. Mänskligt byggt. Du godkänner innan launch.</h2>
          </div>
          <div className="principle-three">
            <article><span>01</span><h3>Tydlig strategi</h3><p>Rubriker, innehåll och CTA:er ska hjälpa kunden förstå företaget och ta nästa steg.</p></article>
            <article><span>02</span><h3>Riktig utveckling</h3><p>Jag bygger i React/TypeScript och använder backend där det faktiskt behövs, istället för att lägga in teknik bara för teknikens skull.</p></article>
            <article><span>03</span><h3>Du ser innan launch</h3><p>Du får en preview, kan lämna feedback och sidan går inte live förrän helheten känns rätt.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
