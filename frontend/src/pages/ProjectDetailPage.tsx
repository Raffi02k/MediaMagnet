import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { projects } from '../data/projects';

function screenshot(url: string, width = 1600) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

function VaxjoCompare() {
  const [position, setPosition] = useState(50);
  const before = useMemo(() => screenshot('https://www.vaxjoeltjanst.se'), []);
  const after = useMemo(() => screenshot('https://vaxjo-eltjanst-view.vercel.app'), []);

  return (
    <div className="case-compare">
      <div className="case-compare-stage">
        <img src={before} alt="Växjö Eltjänst före redesign" />
        <div className="case-compare-after" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><img src={after} alt="Växjö Eltjänst efter redesign" /></div>
        <div className="case-compare-line" style={{ left: `${position}%` }}><span>↔</span></div>
        <span className="case-compare-label before">Före</span>
        <span className="case-compare-label after">Efter</span>
        <input type="range" min="5" max="95" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label="Jämför före och efter" />
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);

  if (!project) {
    return (
      <section className="not-found section-white">
        <PageMeta title="Projekt hittades inte" description="Projektet kunde inte hittas." />
        <div className="container"><h1>Projektet kunde inte hittas.</h1><Link className="button button-dark" to="/work">Till projekt ↗</Link></div>
      </section>
    );
  }

  const isRestaurant = project.slug === 'birria-seoul' || project.slug === 'al-nahrayn-fisk';

  return (
    <>
      <PageMeta title={`${project.name} · Case`} description={project.summary} />
      <section className={`case-hero tone-${project.tone}`}>
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
            <iframe src={project.url} title={`Live preview av ${project.name}`} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section-white case-story">
        <div className="container case-story-grid">
          <article><span className="section-kicker">Utmaningen</span><h2>Vad behövde bli bättre?</h2><p>{project.challenge}</p></article>
          <article><span className="section-kicker">Lösningen</span><h2>Vad jag byggde.</h2><p>{project.solution}</p></article>
        </div>
        <div className="container case-deliverables">
          {project.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      {project.slug === 'vaxjo-eltjanst' && (
        <section className="section case-transformation">
          <div className="container">
            <div className="rabbit-section-heading">
              <span className="section-kicker light">Före → efter</span>
              <h2>En tydlig transformation från äldre till ny digital upplevelse.</h2>
              <p>Dra reglaget för att jämföra den gamla hemsidan med den nya versionen.</p>
            </div>
            <VaxjoCompare />
          </div>
        </section>
      )}

      {isRestaurant && (
        <section className="section section-white case-menu-boards">
          <div className="container">
            <div className="rabbit-section-heading">
              <span className="section-kicker">Samma varumärke inne i lokalen</span>
              <h2>Digitala menyboards som fortsätter den visuella känslan.</h2>
            </div>
            <div className="case-menu-grid">
              {project.slug === 'birria-seoul' ? (
                <>
                  <img src="/assets/menu-birria-01.png" alt="Birria Seoul digital menyboard" />
                  <img src="/assets/menu-birria-02.png" alt="Birria Seoul digital menyboard" />
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
