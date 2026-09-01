import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { processSteps } from '../content/siteContent';

export default function ProcessPage() {
  return (
    <>
      <PageMeta title="Process" description="Så arbetar MediaMagnet från första samtal till design, utveckling, launch och fortsatt förbättring." />
      <section
        className="page-hero page-backdrop-hero"
        style={{ '--page-hero-image': 'url(/assets/processbild.jpg)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Process</span>
            <h1>En tydlig process fran start till launch.</h1>
            <p>Du vet vad som händer, vad jag behöver och vad nästa steg är.</p>
            <div className="page-hero-points">
              <span>Tydliga steg</span>
              <span>Feedback under vägen</span>
              <span>Launch utan strul</span>
            </div>
            <div className="hero-buttons">
              <Link className="button button-white" to="/contact">Starta projekt ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container process-big-grid">
          {processSteps.map(step => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-details">
        <div className="container process-detail-grid">
          <article><span>DISCOVERY</span><h3>Vad ska sidan hjälpa till med?</h3><p>Tjänster, målgrupp, geografiskt område, nuvarande sida, konkurrenter och viktigaste CTA.</p></article>
          <article><span>BUILD</span><h3>Design + kod + innehåll.</h3><p>React, TypeScript och Vite i frontend. FastAPI när formulär eller andra backendfunktioner behövs.</p></article>
          <article><span>LAUNCH</span><h3>Test innan den går live.</h3><p>Mobil, desktop, länkar, formulär, domän, SSL och grundläggande metadata kontrolleras före launch.</p></article>
          <article><span>GROW</span><h3>Fortsätt efter hemsidan.</h3><p>Search Console, Google Företagsprofil, reviews, nya sidor och löpande förbättringar när det ger nytta.</p></article>
        </div>
      </section>
    </>
  );
}
