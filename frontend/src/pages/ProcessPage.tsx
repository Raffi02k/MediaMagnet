import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { detailedProcessStages, processGuarantees } from '../content/siteContent';

function WireframeVisual() {
  return (
    <div className="process-visual-shell process-visual-blueprint">
      <div className="process-visual-header">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="process-visual-title">blueprint_sitemap_v1.fig · Konverteringsstruktur</span>
        <span className="process-visual-badge">Figma Wireframe</span>
      </div>
      <div className="blueprint-stage">
        <div className="blueprint-node blueprint-root">
          <span className="blueprint-tag">Startsida (Hero)</span>
          <strong>Tydligt värdeerbjudande</strong>
          <span className="blueprint-micro">Primär CTA: "Begär offert / Boka"</span>
        </div>
        <div className="blueprint-connector-vertical" />
        <div className="blueprint-branch">
          <div className="blueprint-node">
            <span className="blueprint-tag">01 · Tjänster</span>
            <strong>Vad du erbjuder</strong>
            <span className="blueprint-micro">Separata SEO-landningssidor</span>
          </div>
          <div className="blueprint-node">
            <span className="blueprint-tag">02 · Bevis</span>
            <strong>Social proof & case</strong>
            <span className="blueprint-micro">Recensioner, före/efter & referenser</span>
          </div>
          <div className="blueprint-node">
            <span className="blueprint-tag">03 · Kontakt</span>
            <strong>Snabb konvertering</strong>
            <span className="blueprint-micro">Mobilanpassat formulär & ring-knapp</span>
          </div>
        </div>
        <div className="blueprint-status-bar">
          <span className="status-pill green">✓ Målgrupp kartlagd</span>
          <span className="status-pill blue">✓ Korta kontaktvägar</span>
          <span className="status-pill lime">✓ Lokal SEO-hierarki</span>
        </div>
      </div>
    </div>
  );
}

type DesignThemeKey = 'streetfood' | 'electrician' | 'seafood' | 'painting';

const designThemes: Record<DesignThemeKey, {
  tabLabel: string;
  badge: string;
  heading: string;
  desc: string;
  buttonText: string;
  colors: { hex: string; name: string }[];
  fontBadge: string;
}> = {
  streetfood: {
    tabLabel: 'Birria Seoul',
    badge: 'UNG STREETFOOD-ENERGI',
    heading: 'KOREAN × MEXICAN TACOS',
    desc: 'Rå energi, starka kontraster och direkt aptitretande matbilder utan standardmallar.',
    buttonText: 'SE VÅR MENY ↗',
    colors: [
      { hex: '#11110f', name: '#11110f (Dark Ink)' },
      { hex: '#ff4b23', name: '#ff4b23 (Fiery Orange)' },
      { hex: '#16cbd7', name: '#16cbd7 (Seoul Cyan)' },
      { hex: '#d4fa00', name: '#d4fa00 (Lime Glow)' }
    ],
    fontBadge: 'Impact & Uppercase · Kompakt kraft'
  },
  electrician: {
    tabLabel: 'Växjö Eltjänst',
    badge: 'TEKNISK ORDNING & TRYGGHET',
    heading: 'BEHÖVER DU EN ELEKTRIKER I VÄXJÖ?',
    desc: 'Tydlig ordning, certifierade elektriker och korta kontaktvägar till Mathias och Marcus.',
    buttonText: 'BOKA TID DIREKT ↗',
    colors: [
      { hex: '#0b2139', name: '#0b2139 (Navy Base)' },
      { hex: '#4ca6ed', name: '#4ca6ed (Electric Blue)' },
      { hex: '#8bd4ff', name: '#8bd4ff (Sky Tint)' },
      { hex: '#ffffff', name: '#ffffff (Pure Light)' }
    ],
    fontBadge: 'Modern Clean Sans · Läsbar ordning'
  },
  seafood: {
    tabLabel: 'Al-Nahrayn',
    badge: 'KOLGRILL & FISKRESTAURANG',
    heading: 'Färsk fisk & autentisk kolgrill på Hisingen',
    desc: 'Varm brons- och guldton, rökig restaurangatmosfär och klassisk elegans för havets smaker.',
    buttonText: 'UTFORSKA MENYN ↗',
    colors: [
      { hex: '#17120d', name: '#17120d (Espresso Dark)' },
      { hex: '#d5b781', name: '#d5b781 (Warm Gold)' },
      { hex: '#b99858', name: '#b99858 (Bronze Accent)' },
      { hex: '#f2eadc', name: '#f2eadc (Sand Cream)' }
    ],
    fontBadge: 'Georgia Serif · Varm tradition'
  },
  painting: {
    tabLabel: 'Penselverket',
    badge: 'MÅLERI & HANTVERK',
    heading: 'Varsam renovering & genuint målerihantverk',
    desc: 'Dämpad kalkton, skifferblå accenter och lugn hantverksprecision med fokus på kvalitet.',
    buttonText: 'BEGÄR KOSTNADSFRI OFFERT ↗',
    colors: [
      { hex: '#f3efe6', name: '#f3efe6 (Chalk Sand)' },
      { hex: '#356b8c', name: '#356b8c (Slate Blue)' },
      { hex: '#536066', name: '#536066 (Mineral Gray)' },
      { hex: '#202c30', name: '#202c30 (Deep Charcoal)' }
    ],
    fontBadge: 'Editorial Serif · Tidlös hantverkskänsla'
  }
};

function DesignVisual() {
  const [activeTheme, setActiveTheme] = useState<DesignThemeKey>('streetfood');
  const theme = designThemes[activeTheme];

  return (
    <div className="process-visual-shell process-visual-design">
      <div className="process-visual-header">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="process-visual-title">design_system_studio.tokens</span>
        <div className="process-theme-toggle">
          {(Object.keys(designThemes) as DesignThemeKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={activeTheme === key ? 'active' : ''}
              onClick={() => setActiveTheme(key)}
            >
              {designThemes[key].tabLabel}
            </button>
          ))}
        </div>
      </div>

      <div className={`design-studio-canvas theme-${activeTheme}`}>
        <div className="design-preview-card">
          <div className="design-card-badge">{theme.badge}</div>
          <h4 className="design-card-heading">{theme.heading}</h4>
          <p className="design-card-desc">{theme.desc}</p>
          <div className="design-card-action">
            <button type="button" className="design-sample-btn">
              {theme.buttonText}
            </button>
          </div>
        </div>

        <div className="design-tokens-panel">
          <div className="tokens-group">
            <span className="token-label">FÄRGPALETT & ACCENTER</span>
            <div className="token-swatches">
              {theme.colors.map((c) => (
                <span key={c.hex} style={{ background: c.hex }} title={c.name} />
              ))}
            </div>
          </div>
          <div className="tokens-group">
            <span className="token-label">TYPOGRAFI-KARAKTÄR</span>
            <div className="token-font-badge">{theme.fontBadge}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="process-visual-shell process-visual-perf">
      <div className="process-visual-header">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="process-visual-title">lighthouse_audit_report · React 18 + Vite</span>
        <span className="process-visual-badge success">100/100 AUDIT</span>
      </div>

      <div className="lighthouse-grid">
        <div className="lighthouse-meter">
          <div className="meter-circle green">
            <span>100</span>
          </div>
          <strong className="meter-name">Prestanda</strong>
          <small className="meter-sub">Sub-second load</small>
        </div>
        <div className="lighthouse-meter">
          <div className="meter-circle green">
            <span>100</span>
          </div>
          <strong className="meter-name">Tillgänglighet</strong>
          <small className="meter-sub">WCAG AA Standard</small>
        </div>
        <div className="lighthouse-meter">
          <div className="meter-circle green">
            <span>100</span>
          </div>
          <strong className="meter-name">Best Practices</strong>
          <small className="meter-sub">Modern säker kod</small>
        </div>
        <div className="lighthouse-meter">
          <div className="meter-circle green">
            <span>100</span>
          </div>
          <strong className="meter-name">SEO</strong>
          <small className="meter-sub">Semantisk struktur</small>
        </div>
      </div>

      <div className="perf-specs-row">
        <div className="perf-spec">
          <span>First Contentful Paint</span>
          <b>0.38s</b>
        </div>
        <div className="perf-spec">
          <span>Speed Index</span>
          <b>0.65s</b>
        </div>
        <div className="perf-spec">
          <span>Cumulative Layout Shift</span>
          <b>0.000</b>
        </div>
        <div className="perf-spec">
          <span>Bundle Payload</span>
          <b>&lt; 90 kB gzip</b>
        </div>
      </div>

      <div className="perf-stack-bar">
        <span className="stack-pill">Vite 5 Bundler</span>
        <span className="stack-pill">React 18 SPA</span>
        <span className="stack-pill">TypeScript Strict</span>
        <span className="stack-pill">WebP / AVIF Responsive</span>
        <span className="stack-pill">Noll tunga plugins</span>
      </div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="process-visual-shell process-visual-launch">
      <div className="process-visual-header">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="process-visual-title">google_serp_signage_delivery</span>
        <span className="process-visual-badge success">LIVE GOOGLE & SCREEN</span>
      </div>

      <div className="launch-dual-preview">
        <div className="serp-preview-card">
          <div className="serp-header">
            <span className="serp-favicon">MM</span>
            <div className="serp-urls">
              <span className="serp-domain">https://dittforetag.se › vaxjo</span>
              <span className="serp-cache">Google Sökresultat</span>
            </div>
          </div>
          <h4 className="serp-title">Ditt Företag AB · Certifierad Expert i Växjö</h4>
          <div className="serp-rating">
            <span className="stars">★★★★★</span>
            <span className="score">5,0</span>
            <span className="count">(28 Google-recensioner)</span>
          </div>
          <p className="serp-snippet">
            Skräddarsydda lösningar med snabb service. Kontakta oss direkt på 0470-XX XX XX eller boka tid online för personlig hjälp.
          </p>
          <div className="serp-tags">
            <span>Öppettider & Kontakt</span>
            <span>Våra Tjänster</span>
            <span>Lokal Expertis</span>
          </div>
        </div>

        <div className="signage-mini-mockup">
          <div className="signage-screen">
            <div className="signage-bar">
              <span>DIGITAL SIGNAGE I LOKALEN</span>
              <span className="live-dot">● LIVE</span>
            </div>
            <div className="signage-inner">
              <h5>Samma varumärke på skärm som på webben</h5>
              <p>Menyboards, bildspel & kampanjer i samma visuella identitet.</p>
              <div className="signage-badge">4K HDMI Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="launch-checklist-bar">
        <span>✓ Global CDN Deploy</span>
        <span>✓ Auto SSL & HTTPS</span>
        <span>✓ Search Console Sitemap</span>
        <span>✓ Google Företagsprofil</span>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const [activeStageId, setActiveStageId] = useState<string>('discovery');

  const currentStage = detailedProcessStages.find(stage => stage.id === activeStageId) || detailedProcessStages[0];

  return (
    <>
      <PageMeta
        title="Process · Hur vi bygger din sajt steg för steg"
        description="Från första samtal och sitemap till skräddarsydd design, blixtsnabb kod och Google-launch. Se hur MediaMagnet bygger hemsidor och digitala skärmar."
      />

      {/* Hero */}
      <section
        className="page-hero page-backdrop-hero process-page-hero"
        style={{ '--page-hero-image': 'url(/assets/processbild.jpg)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Transparent Arbetssätt</span>
            <h1>Från första tanke till blixtsnabb launch.</h1>
            <p>
              Inga krångliga processer eller dolda överraskningar. Här ser du exakt vad vi grejar med under varje fas, vad du kan förvänta dig och hur din nya hemsida växer fram.
            </p>
            <div className="page-hero-points">
              <span>Ca 2–3 veckors turnaround</span>
              <span>100% skräddarsytt – inga mallar</span>
              <span>Direktkontakt med mig (Raffi)</span>
            </div>
            <div className="hero-buttons">
              <Link className="button button-white" to="/contact">Starta projekt ↗</Link>
              <a className="button button-ghost-light" href="#process-pipeline">Utforska stegen ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Pipeline */}
      <section className="section section-white process-pipeline-section" id="process-pipeline">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Interaktiv Pipeline</span>
            <h2>Så byggs din nya sajt, steg för steg.</h2>
            <p>
              Klicka på stegen nedan för att se hur informationsarkitektur, design, kod och Google-koppling hänger ihop.
            </p>
          </div>

          {/* Steg-knappar */}
          <div className="process-nav-tabs" role="tablist" aria-label="Processens faser">
            {detailedProcessStages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`process-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStageId(stage.id)}
                >
                  <span className="process-nav-num">{stage.step}</span>
                  <div className="process-nav-label">
                    <strong>{stage.badge.split('·')[1]?.trim() || stage.badge}</strong>
                    <small>{stage.timeline}</small>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Aktiv fas - Showcase Card */}
          <div className="process-stage-showcase">
            <div className="stage-content-col">
              <span className="stage-kicker">{currentStage.badge}</span>
              <h3 className="stage-title">{currentStage.title}</h3>
              <p className="stage-tagline">{currentStage.tagline}</p>
              <p className="stage-desc">{currentStage.description}</p>

              {/* Roller */}
              <div className="stage-roles-box">
                <div className="role-col">
                  <span className="role-badge client">Vad du gör</span>
                  <p>{currentStage.clientRole}</p>
                </div>
                <div className="role-col">
                  <span className="role-badge raffi">Vad jag gör</span>
                  <p>{currentStage.raffiRole}</p>
                </div>
              </div>

              {/* Leveranser */}
              <div className="stage-deliverables-box">
                <strong className="deliv-title">Konkreta leveranser i denna fas:</strong>
                <ul className="deliv-list">
                  {currentStage.deliverables.map((item) => (
                    <li key={item}>
                      <span className="deliv-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stage-meta-row">
                <span className="stage-meta-pill">{currentStage.timeline}</span>
                {currentStage.tools.map(tool => (
                  <span key={tool} className="stage-meta-tool">{tool}</span>
                ))}
              </div>
            </div>

            {/* Visuell interaktiv mockup för det aktuella steget */}
            <div className="stage-visual-col">
              {currentStage.visualType === 'wireframe' && <WireframeVisual />}
              {currentStage.visualType === 'design' && <DesignVisual />}
              {currentStage.visualType === 'performance' && <PerformanceVisual />}
              {currentStage.visualType === 'launch' && <LaunchVisual />}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Flow - Hur det faktiskt går till */}
      <section className="section process-flow-section">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker light">Enkelt Samarbete</span>
            <h2>Inga onödiga möten. Bara rakt och effektivt.</h2>
            <p>
              Du driver ett företag och har inte tid för utdragna processer eller 20 olika projektledare. Så här ser vårt samarbete ut:
            </p>
          </div>

          <div className="collaboration-grid">
            <article className="collab-card">
              <span className="collab-step">STEG 1</span>
              <h3>Snabb 30-minuters introduktion</h3>
              <p>
                Vi går igenom nuläget, dina mål och vad som skiljer dig från konkurrenterna. Du skickar eventuella bilder och logotyp. Har du inga bilder löser vi det med fotomanér och grafik.
              </p>
              <div className="collab-highlight">✓ Du får fast offert och tidsplan samma dag.</div>
            </article>

            <article className="collab-card">
              <span className="collab-step">STEG 2</span>
              <h3>Live-länk direkt i din telefon</h3>
              <p>
                Inget abstrakt gissande i PDF-filer. Jag skickar en klickbar live-länk så att du kan testa din nya sajt direkt i din egen mobil och ge feedback när det passar dig.
              </p>
              <div className="collab-highlight">✓ Smidiga justeringar tills du är 100% nöjd.</div>
            </article>

            <article className="collab-card">
              <span className="collab-step">STEG 3</span>
              <h3>Launch, Google & överlämning</h3>
              <p>
                Vi kopplar din domän, aktiverar SSL och driftsätter på ett blixtsnabbt CDN. Jag skickar in din sitemap till Google och ser till att kontaktvägarna fungerar felfritt.
              </p>
              <div className="collab-highlight">✓ Hemsidan börjar arbeta för ditt företag direkt.</div>
            </article>
          </div>
        </div>
      </section>

      {/* Guarantees & Values */}
      <section className="section section-white process-guarantees-section">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">MediaMagnet-löftet</span>
            <h2>Varför kunder väljer att bygga med mig.</h2>
            <p>
              Det handlar inte bara om att få en snygg fasad – det handlar om trygghet, kvalitet och resultat.
            </p>
          </div>

          <div className="guarantees-grid">
            {processGuarantees.map(item => (
              <div key={item.title} className="guarantee-card">
                <span className="guarantee-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section process-cta-section">
        <div className="container process-cta-shell">
          <span className="section-kicker light">Redo att starta?</span>
          <h2>Låt oss bygga något som gör skillnad för ditt företag.</h2>
          <p>
            Berätta vad du behöver så tar jag fram ett konkret förslag på upplägg och tidsplan.
          </p>
          <div className="hero-buttons">
            <Link className="button button-white" to="/contact">Ta första kontakten ↗</Link>
            <Link className="button button-ghost-light" to="/work">Se tidigare projekt ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
