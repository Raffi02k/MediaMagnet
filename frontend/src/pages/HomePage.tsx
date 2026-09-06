import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { ProjectPreview } from '../components/ProjectPreview';
import { faqItems, googleReviews, googleReviewSummary, heroBenefits, processSteps, services, trustedClients } from '../content/siteContent';
import { projects } from '../data/projects';

function screen(url: string, width = 1500) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

function BeforeAfterDemo() {
  const [position, setPosition] = useState(54);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const oldSite = 'https://www.vaxjoeltjanst.se';
  const oldShot = useMemo(() => screen(oldSite), []);

  function updatePosition(clientX: number) {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(93, Math.max(7, next)));
  }

  return (
    <div className="upgrade-demo">
      <div className="upgrade-browser">
        <div className="upgrade-browser-bar">
          <div className="browser-dots"><i /><i /><i /></div>
          <span>vaxjoeltjanst.se → redesign</span>
          <b>DRAG</b>
        </div>
        <div
          ref={stageRef}
          className="upgrade-stage"
          onPointerDown={event => {
            event.preventDefault();
            updatePosition(event.clientX);
            setIsDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={event => {
            if (!isDragging) return;
            updatePosition(event.clientX);
          }}
          onPointerUp={event => {
            setIsDragging(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
          onPointerCancel={event => {
            setIsDragging(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
          }}
        >
          <div className="upgrade-layer before-layer">
            <img src={oldShot} alt="Växjö Eltjänsts äldre hemsida" />
          </div>
          <div className="upgrade-layer after-layer" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
            <iframe
              src="https://vaxjo-eltjanst-view.vercel.app"
              title="Växjö Eltjänst efter redesign, live-förhandsvisning"
              loading="lazy"
              allow="autoplay"
              tabIndex={-1}
            />
          </div>
          <span className="compare-label label-before">Före</span>
          <span className="compare-label label-after">Efter</span>
          <div className="compare-line" style={{ left: `${position}%` }}>
            <button
              className="compare-handle"
              type="button"
              onPointerDown={event => {
                event.preventDefault();
                updatePosition(event.clientX);
                setIsDragging(true);
              }}
              aria-label="Dra för att jämföra före och efter"
            >
              ↔
            </button>
          </div>
          <input
            className="compare-range"
            type="range"
            min="7"
            max="93"
            value={position}
            onChange={event => setPosition(Number(event.target.value))}
            aria-label="Dra för att jämföra före och efter"
          />
        </div>
      </div>
      <div className="upgrade-caption">
        <div>
          <small>Riktigt kundcase</small>
          <strong>Växjö Eltjänst</strong>
        </div>
        <span>Redesign · tydligare tjänster · bättre kontaktvägar</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const marqueeProjects = [...projects, ...projects, ...projects];
  const repeatedClients = [...trustedClients, ...trustedClients, ...trustedClients, ...trustedClients];
  const repeatedGoogleReviews = [...googleReviews, ...googleReviews];
  const googleReviewsHref = googleReviewSummary.liveCtaHref || googleReviewSummary.ctaHref;
  const hasLiveGoogleReviewsLink = /^https?:\/\//.test(googleReviewsHref);

  return (
    <>
      <PageMeta
        title="Hemsidor & digital synlighet för företag"
        description="MediaMagnet bygger moderna företagshemsidor och hjälper företag med Google, SEO, reviews, kontaktflöden och digitala menyboards."
      />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="hero-copy">
            <span className="kicker">Webb + Google-synlighet. Gjort för företag som vill växa.</span>
            <h1>MediaMagnet</h1>
            <p className="hero-statement">Professionella hemsidor byggda, utvecklade och anpassade för ditt företag.</p>
            <div className="hero-buttons">
              <Link className="button button-dark button-large" to="/contact">Starta projekt ↗</Link>
              <a className="button button-link" href="#how-it-works">Så funkar det ↓</a>
            </div>
            <ul className="hero-checks">
              {heroBenefits.map(item => <li key={item}>✓ <span>{item}</span></li>)}
            </ul>
          </div>

          <div className="hero-mascot-wrap" aria-hidden="true">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-magnet-card">
              <span>BUILD</span>
              <b>WEB</b>
              <small>GOOGLE · REVIEWS · GROWTH</small>
            </div>
            <Link className="hero-mascot-link" to="/contact" tabIndex={-1}>
              <img className="hero-mascot" src="/assets/raffiMascot.png" alt="" />
            </Link>
          </div>
        </div>

        <div className="container hero-upgrade-wrap">
          <div className="upgrade-heading">
            <div><span>Före / efter</span><strong>Se vad en tydligare hemsida kan göra för första intrycket.</strong></div>
            <Link to="/work/vaxjo-eltjanst">Se hela caset ↗</Link>
          </div>
          <BeforeAfterDemo />
        </div>
      </section>

      <section className="section work-showcase">
        <div className="container work-showcase-heading">
          <div>
            <span className="section-kicker">Projekt</span>
            <h2>Riktiga sajter jag har byggt för kunder.</h2>
            <p>Restauranger och lokala tjänsteföretag — varje projekt med egen identitet, struktur och tydligt mål.</p>
          </div>
          <Link className="button button-light" to="/work">Se alla projekt ↗</Link>
        </div>

        <div className="project-marquee" aria-label="Live kundprojekt">
          <div className="project-track">
            {marqueeProjects.map((project, index) => (
              <a className="marquee-project" href={project.url} target="_blank" rel="noreferrer" key={`${project.slug}-${index}`}>
                <ProjectPreview project={project} compact />
                <div className="marquee-project-copy">
                  <small>{project.domain}</small>
                  <span>{project.category}</span>
                  <strong>{project.name}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section section-white">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Så funkar det</span>
            <h2>Tre steg till en hemsida som jobbar hårdare för företaget.</h2>
          </div>

          <div className="three-steps">
            {processSteps.map(step => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Kundprojekt">
        <div className="container"><p>Byggt för riktiga företag</p></div>
        <div className="trust-marquee">
          <div className="trust-track">
            {repeatedClients.map((client, index) => (
              <span key={`${client}-${index}`}><i />{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section google-reviews-section" aria-labelledby="google-reviews-title">
        <div className="container google-reviews-shell">
          <div className="google-reviews-heading">
            <span className="google-reviews-kicker">{googleReviewSummary.kicker}</span>
            <h2 id="google-reviews-title">{googleReviewSummary.title}</h2>
            <p>{googleReviewSummary.text}</p>
          </div>

          <div className="google-rating-lockup" aria-label={`${googleReviewSummary.rating} av 5 stjärnor baserat på ${googleReviewSummary.reviewCount}`}>
            <span>{googleReviewSummary.rating}</span>
            <div>
              <div className="google-stars" aria-hidden="true">★★★★★</div>
              <p>{googleReviewSummary.reviewCount}</p>
            </div>
          </div>

          <div className="google-review-marquee" aria-label="Google recensioner">
            <div className="google-review-track">
              {repeatedGoogleReviews.map((review, index) => (
                <article className="google-review-card" key={`${review.name}-${index}`}>
                  <p className="google-review-label">{review.source}</p>
                  <div className="google-stars" aria-hidden="true">★★★★★</div>
                  <blockquote>{`“${review.quote}”`}</blockquote>
                  <strong>{review.name}</strong>
                  <p className="google-review-source">Verifierad kund</p>
                </article>
              ))}
            </div>
          </div>

          {hasLiveGoogleReviewsLink ? (
            <a className="button button-light google-reviews-cta" href={googleReviewsHref} target="_blank" rel="noreferrer">
              {googleReviewSummary.ctaLabel} <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link className="button button-light google-reviews-cta" to={googleReviewsHref}>
              {googleReviewSummary.ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </section>

      <section className="section section-blue service-tease">
        <div className="container service-tease-grid">
          <div>
            <span className="section-kicker light">Mer än bara en hemsida</span>
            <h2>Jag bygger det som syns och hjälper till med det runt omkring.</h2>
          </div>
          <div className="service-tease-list">
            {services.map((service, index) => (
              <Link key={service.id} to={`/services/${service.slug}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{service.navLabel}</strong>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="container faq-grid">
          <div className="faq-heading">
            <span className="section-kicker">Vanliga frågor</span>
            <h2>Det du behöver veta innan vi börjar.</h2>
            <p>Fortfarande frågor? <Link to="/contact">Skicka ett meddelande ↗</Link></p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<b>+</b></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <span>Din konkurrent behöver inte ha en bättre hemsida.</span>
            <h2>Gör ditt företag lättare att hitta, förstå och välja.</h2>
            <p>Berätta vad du vill förbättra så går vi igenom vad jag skulle bygga för ditt företag.</p>
            <Link className="button button-white button-large" to="/contact">Starta projekt ↗</Link>
          </div>
          <Link className="final-cta-mascot" to="/contact" aria-hidden="true" tabIndex={-1}>
            <img src="/assets/raffiMascot.png" alt="" />
          </Link>
        </div>
      </section>
    </>
  );
}
