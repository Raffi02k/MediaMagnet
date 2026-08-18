import { KeyboardEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

const marqueeTop = [
  ['66db3fe6993cb981b8d40103_IT-compliance-min.png', 'UI Showcase 1'],
  ['66e0822593c0244340e82b54_Product Design refactor-min (1).png', 'UI Showcase 2'],
  ['66e0832160aa62492d87067a_Tapely-min.png', 'UI Showcase 3'],
  ['6724ba149454b273f1be39d6_ideal.shop-1.png', 'UI Showcase 4'],
  ['6724ba2009d88453b26654d6_ideal.shop.png', 'UI Showcase 5'],
  ['6724ba2aa4ab7453884b4799_LMS.png', 'UI Showcase 6']
] as const;

const marqueeBottom = [
  ['6724ba3c46749d7b7689f790_Sign-up - Tapely.png', 'UI Showcase 7'],
  ['6724ba4e07df089ff86d8281_Tables.png', 'UI Showcase 8'],
  ['6724ba589454b273f1be7d68_404.png', 'UI Showcase 9'],
  ['6724ba6872bbeba64f90b0be_Checklist thumbnail.png', 'UI Showcase 10'],
  ['6724ba7599b4bcacd21da3d6_ideal.shop 2.png', 'UI Showcase 11'],
  ['6724baff00e12744e7096682_Feedback concept-min.png', 'UI Showcase 12']
] as const;

const clientLogos = [
  ['66db550b055ba90893833c42_Logo - Nyt 1.png', 'Partner Logo 1'],
  ['66db552412fdcaac17073aa6_Regular - white version.png', 'Partner Logo 2'],
  ['66db55171db9c4b6c1f042f5_Mask group.png', 'Partner Logo 3'],
  ['66db551f9d850cab66ece4aa_Frame 4.png', 'Partner Logo 4']
] as const;

const mentionables = [
  ['CV- & Offertbyggare', '66e1d8066830d04603691d96_ezgif.com-animated-gif-maker.gif', 'Offert & CV byggare animation'],
  ['Komplett Kursplattform & LMS', '6724c362e529687877529a37_ezgif.com-animated-gif-maker.gif', 'LMS Plattform animation'],
  ['Marknadsplats för kandidater & företag', '6724c3a846749d7b7691dc2e_ezgif.com-animated-gif-maker (1).gif', 'Marknadsplats modul'],
  ['AI-driven feedback & granskning', '6724c3d2719e5a3893bd90bb_ezgif.com-animated-gif-maker (2).gif', 'AI Feedback'],
  ['AI Ansökningsassistent', '6724c41007df089ff87660a5_ezgif.com-animated-gif-maker (3).gif', 'AI Assistent'],
  ['Kontrollpanel & målgruppshantering', '6724c4416404c34f2b4641dc_ezgif.com-animated-gif-maker (4).gif', 'Kontrollpanel']
] as const;

function MentionableItem({
  active,
  alt,
  image,
  label,
  onToggle
}: {
  active: boolean;
  alt: string;
  image: string;
  label: string;
  onToggle: () => void;
}) {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <>
      <div className={`mentionable-item${active ? ' active' : ''}`} role="button" tabIndex={0} onClick={onToggle} onKeyDown={onKeyDown}>
        <span>{label}</span>
        <span className="icon-arrow">👁 Se preview ↗</span>
        <div className="mentionable-preview-popover">
          <img src={image} alt={alt} />
        </div>
      </div>
      <div className="mentionable-accordion-content">
        <img src={image} alt={alt} />
      </div>
    </>
  );
}

export default function HomePage() {
  const [activeMentionable, setActiveMentionable] = useState<number | null>(null);

  return (
    <>
      <PageMeta
        title="Produktdesign, webbsystem & digital närvaro | Raffi Digital"
        description="Raffi Digital bygger moderna webbplatser, system och digital närvaro för företag."
        bodyClassName="page-home page-agency"
      />
      <section className="hero">
        <div className="glow glow-blue" />
        <div className="glow glow-teal" />
        <div className="glow glow-purple" />

        <div className="container hero-inner">
          <div>
            <span className="pill">
              <img src="/assets/raffi-portrait.jpeg" alt="" style={{ width: 18, height: 18, borderRadius: '50%', objectFit: 'cover' }} />
              Founded by System &amp; Fullstack Developer
            </span>

            <h1>Produktdesign &amp; <span className="blue">premium webbplatser</span> för moderna företag</h1>

            <p className="hero-lead">
              Jag designar användarvänliga gränssnitt och hjälper företag att växa med webbplatser &amp; system som fångar ögat, konverterar besökare och fungerar sömlöst efter launch.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Boka ett uppstartssamtal ↗</Link>
              <Link className="btn btn-ghost" to="/work">Se valda projekt</Link>
            </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-track left">
            {[...marqueeTop, ...marqueeTop].map(([fileName, alt], index) => (
              <div className="marquee-item" key={`${fileName}-${index}`}>
                <img src={`/assets/showcase/${fileName}`} alt={alt} />
              </div>
            ))}
          </div>

          <div className="marquee-track right" style={{ marginTop: 14 }}>
            {[...marqueeBottom, ...marqueeBottom].map(([fileName, alt], index) => (
              <div className="marquee-item" key={`${fileName}-${index}`}>
                <img src={`/assets/showcase/${fileName}`} alt={alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="client-section">
        <div className="container">
          <div className="client-title">Erfarenhet &amp; tidigare projekt för ledande plattformar</div>
          <div className="client-logo-bar">
            {clientLogos.map(([fileName, alt]) => (
              <img key={fileName} src={`/assets/showcase/${fileName}`} alt={alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Erfarenhet &amp; Byggda System</span>
            <div>
              <h2>Från komplexa moduler till färdiga produkter.</h2>
              <p>Jag har designat och utvecklat anpassade moduler, offertbyggare, LMS-system och AI-drivna flöden som används av tiotusentals användare.</p>
            </div>
          </div>

          <div className="mentionable-container">
            <div className="mentionable-left">
              <div>
                <div className="eyebrow">Fullstack &amp; UX Lead</div>
                <h3>Utvecklade system för skapande &amp; tillväxt</h3>
                <p>Under flera år har jag lett utveckling och design av systemmoduler för företag och användare — från idé och interaktionsdesign till skalbar kod.</p>
              </div>
              <Link className="btn btn-ghost" style={{ alignSelf: 'flex-start' }} to="/about">Läs mer om min erfarenhet ↗</Link>
            </div>

            <div className="mentionable-list">
              {mentionables.map(([label, image, alt], index) => (
                <MentionableItem
                  key={label}
                  active={activeMentionable === index}
                  alt={alt}
                  image={`/assets/showcase/${image}`}
                  label={label}
                  onToggle={() => setActiveMentionable(current => current === index ? null : index)}
                />
              ))}
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="num">250.000+</div>
              <div className="label">Dokument &amp; offertflöden skapade i byggda system</div>
            </div>
            <div className="stat-card">
              <div className="num">75.000+</div>
              <div className="label">Aktiva användare som nyttjat plattformarna</div>
            </div>
            <div className="stat-card">
              <div className="num">50.000+</div>
              <div className="label">Genomförda utbildningar &amp; digitala interaktioner</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Tjänster &amp; Lösningar</span>
            <div>
              <h2>Väx ditt företag med design &amp; system som fungerar.</h2>
              <p>Jag fokuserar på både användarupplevelse och stabil teknik — från skräddarsydda webbplatser till baksystem och digital närvaro.</p>
            </div>
          </div>

          <div className="services-grid">
            <Link className="service-card" to="/services">
              <span className="label">PRODUCT &amp; SYSTEM DESIGN</span>
              <h3>Bra UX/UI ökar konverteringen och minskar bortfall.</h3>
              <p>Designsystem, interaktiva prototyper, applikationsgränssnitt och MVP-lösningar redo för marknaden.</p>
              <div className="chip-row">
                <span className="chip">UX/UI Design</span>
                <span className="chip">Prototyping</span>
                <span className="chip">MVP Build</span>
                <span className="chip">Design System</span>
              </div>
              <div className="service-art" style={{ backgroundImage: "url('/assets/showcase/66dbfd592f0c374963574a72_Product design - Image-min.png')", backgroundSize: 'cover' }} />
            </Link>

            <Link className="service-card" to="/services">
              <span className="label">WEB DESIGN &amp; DIGITAL PRESENCE</span>
              <h3>Skapa ett starkt första intryck och få fler kunder.</h3>
              <p>Moderna företagshemsidor, formulär, domän, hosting, SEO, Google Business och uppföljning efter launch.</p>
              <div className="chip-row">
                <span className="chip">Webbdesign</span>
                <span className="chip">React / Vite</span>
                <span className="chip">Python / FastAPI</span>
                <span className="chip">Google SEO</span>
              </div>
              <div className="service-art" style={{ backgroundImage: "url('/assets/showcase/66dbfebb6ea52df0b91e0ab4_Web design - Image-min.png')", backgroundSize: 'cover' }} />
            </Link>
          </div>

          <div className="services-breakdown-grid">
            <div className="service-breakdown-card">
              <div className="service-breakdown-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
              </div>
              <h3>UX/UI &amp; Systemarkitektur</h3>
              <p>Fokus på sömlös interaktion, intuitiva flöden och en upplevelse som får användare att stanna och återvända.</p>
            </div>
            <div className="service-breakdown-card">
              <div className="service-breakdown-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              </div>
              <h3>Webbutveckling &amp; Kod</h3>
              <p>Snabb, säker och responsiv kod i React, TypeScript och Python/FastAPI utan onödigt trassel eller lagg.</p>
            </div>
            <div className="service-breakdown-card">
              <div className="service-breakdown-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Drift &amp; Digital synlighet</h3>
              <p>Hjälp med domän, e-post, Google Företagsprofil, hosting, SSL-certifikat och kontinuerliga uppdateringar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <div>
              <h2>Projekt som visar både design och systemtänk.</h2>
              <p>Se livefall och utvecklade koncept med tydliga resultat, teknikstack och gränssnitt.</p>
            </div>
          </div>

          <div className="work-stack">
            <article className="work-card">
              <div className="work-preview paint">
                <div className="browser">
                  <div className="browser-bar">
                    <div className="browser-dots"><span /><span /><span /></div>
                    <div className="browser-url">penselverket.edgeone.dev</div>
                  </div>
                  <div className="browser-screen">
                    <img src="/assets/penselverket-hero.webp" alt="Penselverket live project preview" />
                  </div>
                </div>
                <div className="preview-live"><i /> LIVE WEBSITE</div>
              </div>

              <div className="work-copy">
                <div>
                  <span className="index">CASE 01 · LOCAL BUSINESS</span>
                  <h3>Penselverket</h3>
                  <p>Webb, offertflöde och digital start för ett nystartat måleriföretag — byggt för att skapa förtroende, få in leads och vara enkelt att hantera efter launch.</p>
                  <div className="chip-row">
                    <span className="chip">React</span>
                    <span className="chip">TypeScript</span>
                    <span className="chip">FastAPI</span>
                    <span className="chip">Local presence</span>
                  </div>
                </div>
                <div className="work-actions">
                  <Link className="btn btn-primary" to="/work/penselverket">Se case ↗</Link>
                  <a className="btn btn-ghost" href="https://penselverket.edgeone.dev" target="_blank" rel="noreferrer">Öppna live ↗</a>
                </div>
              </div>
            </article>

            <article className="work-card">
              <div className="work-preview">
                <div className="data-preview">
                  <div className="data-grid">
                    <div className="data-kpi"><strong>91</strong><span>Opportunity score</span></div>
                    <div className="data-kpi"><strong>24</strong><span>Signals</span></div>
                    <div className="data-kpi"><strong>7</strong><span>Leads</span></div>
                  </div>
                  <div className="data-chart" />
                </div>
              </div>

              <div className="work-copy">
                <div>
                  <span className="index">CASE 02 · B2B PRODUCT CONCEPT</span>
                  <h3>Laddinsikt</h3>
                  <p>Koncept för en sales-intelligence-plattform inom laddinfrastruktur — från data och opportunities till business cases, pipeline och alerts.</p>
                  <div className="chip-row">
                    <span className="chip">Product UX</span>
                    <span className="chip">React</span>
                    <span className="chip">Python</span>
                    <span className="chip">Data</span>
                  </div>
                </div>
                <div className="work-actions">
                  <Link className="btn btn-primary" to="/work/laddinsikt">Se case ↗</Link>
                </div>
              </div>
            </article>
          </div>

          <div style={{ marginTop: 30, textAlign: 'center' }}>
            <Link className="btn btn-ghost" to="/work">Se alla valda projekt &amp; framtida slots ↗</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Arbetssätt</span>
            <div>
              <h2>Från första mötet till en trygg launch.</h2>
              <p>Varje projekt får en tydlig och strukturerad process så att domän, formulär och digital närvaro inte blir ett löst pussel efteråt.</p>
            </div>
          </div>

          <div className="workflow">
            <div className="workflow-step"><strong>01</strong><h3>Förstå</h3><p>Mål, målgrupp, tjänster, nuläge och vad webbplatsen faktiskt ska hjälpa ditt företag att uppnå.</p></div>
            <div className="workflow-step"><strong>02</strong><h3>Bygg</h3><p>Designsystem, responsiv frontend, anpassad kod och rena gränssnitt för både mobil och dator.</p></div>
            <div className="workflow-step"><strong>03</strong><h3>Launch</h3><p>Domän, SSL, formulär, företagsmejl, SEO-inställningar och noggrann kvalitetstestning.</p></div>
            <div className="workflow-step"><strong>04</strong><h3>Grow</h3><p>Google Företagsprofil, kontinuerliga förbättringar, underhåll och nya funktioner när företaget växer.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-teaser">
          <div className="portrait-card">
            <img src="/assets/raffi-portrait.jpeg" alt="Raffi" />
            <div className="portrait-badge">Tillgänglig för valda uppdrag</div>
          </div>

          <div className="about-panel">
            <div>
              <span className="eyebrow">Om mig</span>
              <h2>Systemutvecklare med fokus på verklig affärsnytta.</h2>
            </div>

            <div>
              <p>Jag gillar kombinationen mellan frontend, backend och hur ett företag faktiskt använder det digitala i vardagen. Därför stannar mitt jobb inte vid att sidan ser bra ut — jag tänker även på leadflöden, kontoägarskap, drift och synlighet.</p>

              <div className="principles">
                <div className="principle"><b>Kunden äger</b><span>Domän och viktiga konton ska alltid tillhöra ditt företag.</span></div>
                <div className="principle"><b>Trygg hantering</b><span>Rätt behörigheter och dokumenterade rutiner gör arbetet smidigt.</span></div>
                <div className="principle"><b>Skalbara system</b><span>Bygg först det som behövs nu och vidareutveckla när nyttan kräver det.</span></div>
              </div>

              <div style={{ marginTop: 24 }}>
                <Link className="btn btn-ghost" to="/about">Läs mer om mig ↗</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-grid">
          <h2>Har du ett projekt som behöver både design och struktur?</h2>
          <div>
            <p>Jag kan hjälpa till från första skiss till färdig live-sida, formulär, hosting och fortsatt digital närvaro.</p>
            <Link className="btn btn-primary" to="/contact">Starta ett projekt ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
