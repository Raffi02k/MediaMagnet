import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { projects } from '../data/projects';
import NotFoundPage from './NotFoundPage';

function screenshot(url: string, width = 1600) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

function ElectricianHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPaused(preference.matches);
    preference.addEventListener('change', handleChange);
    return () => preference.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    if (paused) video.pause();
    else void video.play().catch(() => {
      if (!cancelled) setPaused(true);
    });
    return () => {
      cancelled = true;
      video.pause();
    };
  }, [paused]);

  return (
    <>
      <video
        ref={videoRef}
        className="case-hero-video"
        src="/media/hero-electrician-demo.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <button className="case-video-toggle" type="button" onClick={() => setPaused(value => !value)}>
        {paused ? 'Spela bakgrundsvideo' : 'Pausa bakgrundsvideo'}
        <span>Demomaterial</span>
      </button>
    </>
  );
}

function DesktopProjectPreview({ url, title }: { url: string; title: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="case-desktop-preview" ref={viewportRef}>
      {width > 0 && (
        <iframe src={url} title={title} loading="lazy" style={{ transform: `scale(${width / 1440})` }} />
      )}
    </div>
  );
}

function VaxjoCompare() {
  const [position, setPosition] = useState(50);
  const before = useMemo(() => screenshot('https://www.vaxjoeltjanst.se'), []);

  return (
    <div className="case-compare">
      <div className="case-compare-stage">
        <img src={before} alt="Växjö Eltjänst före redesign" />
        <div className="case-compare-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <iframe
            src="https://vaxjo-eltjanst-view.vercel.app"
            title="Växjö Eltjänst efter redesign, live-förhandsvisning"
            loading="lazy"
            allow="autoplay"
            tabIndex={-1}
          />
        </div>
        <div className="case-compare-line" style={{ left: `${position}%` }}><span>↔</span></div>
        <span className="case-compare-label before">Före</span>
        <span className="case-compare-label after">Efter</span>
        <input type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label="Jämför före och efter" aria-valuetext={`${position} procent före, ${100 - position} procent efter`} />
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const isRestaurant = project.slug === 'birria-seoul' || project.slug === 'al-nahrayn-fisk';

  return (
    <>
      <PageMeta title={`${project.name} · Case`} description={project.summary} />
      <section className={`case-hero tone-${project.tone}${project.slug === 'birria-seoul' ? ' case-hero-birria' : ''}${project.slug === 'vaxjo-eltjanst' ? ' case-hero-electrician' : ''}${project.slug === 'penselverket' ? ' case-hero-penselverket' : ''}${project.slug === 'al-nahrayn-fisk' ? ' case-hero-alnahrayn' : ''}`}>
        {project.slug === 'vaxjo-eltjanst' && <ElectricianHeroVideo />}
        <div className="container case-hero-grid">
          <div>
            <span className="section-kicker light">{project.category} · {project.city}</span>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
            <div className="hero-buttons">
              <a className="button button-white" href={project.url} target="_blank" rel="noreferrer">Öppna live sajt ↗</a>
              <Link className="button button-ghost-light" to="/contact">Bygg något liknande ↗</Link>
            </div>
          </div>
          <div className="case-live-shell">
            <div className="case-live-bar"><span>{project.domain}</span><b>LIVE PREVIEW</b></div>
            <DesktopProjectPreview url={project.url} title={`Live preview av ${project.name}`} />
          </div>
        </div>
      </section>

      <section className={`section section-white case-story case-story-${project.slug}`}>
        <div className="container case-story-grid">
          <article><span className="section-kicker">Utmaningen</span><h2>Vad behövde bli bättre?</h2><p>{project.challenge}</p></article>
          <article><span className="section-kicker">Lösningen</span><h2>Vad jag byggde.</h2><p>{project.solution}</p></article>
        </div>
        <div className={`container case-deliverables case-deliverables-${project.slug}`}>
          {project.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      {project.identity && (
        <section className={`section case-identity case-identity-${project.slug}`} aria-labelledby="case-identity-title">
          <div className="container case-identity-grid">
            <div className="case-identity-intro">
              <span className="case-identity-label">Personligheten bakom designen / {project.name}</span>
              <h2 id="case-identity-title">{project.identity.headline}</h2>
              <p>{project.identity.description}</p>
              <ul className="case-identity-keywords" aria-label="Projektets personlighet">
                {project.identity.keywords.map(keyword => <li key={keyword}>{keyword}</li>)}
              </ul>
            </div>
            <div className="case-identity-decisions">
              {project.identity.decisions.map((item, index) => (
                <article key={item.label}>
                  <span className="case-identity-label">0{index + 1} / {item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.slug === 'vaxjo-eltjanst' && (
        <section className="section case-transformation">
          <div className="container">
            <div className="rabbit-section-heading">
              <span className="section-kicker light">Före → efter</span>
              <h2>En tydlig transformation från äldre till ny digital upplevelse.</h2>
              <p>Dra reglaget för att jämföra en bild av den gamla hemsidan med en live-förhandsvisning av den nya.</p>
            </div>
            <VaxjoCompare />
          </div>
        </section>
      )}

      {isRestaurant && (
        <section
          className={`section section-white case-menu-boards${
            project.slug === 'al-nahrayn-fisk'
              ? ' case-menu-boards-alnahrayn'
              : project.slug === 'birria-seoul'
              ? ' case-menu-boards-birria'
              : ''
          }`}
        >
          <div className="container">
            <div className="rabbit-section-heading">
              <span className="section-kicker">Samma varumärke inne i lokalen</span>
              <h2>Digitala menyboards som fortsätter den visuella känslan.</h2>
            </div>
            <div className="case-menu-grid">
              {project.slug === 'birria-seoul' ? (
                <>
                  <img src="/assets/menu-birria-new1.png" alt="Birria Seoul digital menyboard" />
                  <img src="/assets/menu-birria-new2.png" alt="Birria Seoul digital menyboard" />
                </>
              ) : (
                <>
                  <img src="/assets/menu-nahrayn-01.png" alt="AL Nahrayn digital menyboard" />
                  <img src="/assets/menu-nahrayn-02.png" alt="AL Nahrayn digital menyboard" />
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
