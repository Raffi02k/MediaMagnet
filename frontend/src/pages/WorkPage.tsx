import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function WorkPage() {
  return (
    <>
      <PageMeta title="Projekt" description="Fyra live kundprojekt från MediaMagnet inom restaurang, elektriker och måleri." />
      <section
        className="page-hero page-backdrop-hero"
        style={{ '--page-hero-image': 'url(/assets/sv-projekt-preview.jpg)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Projekt</span>
            <h1>Projekt som visar vad en starkare sajt kan göra.</h1>
            <p>Riktiga kundcase med tydligare struktur, design och väg till kontakt.</p>
            <div className="page-hero-points">
              <span>Live kundprojekt</span>
              <span>Case och resultat</span>
              <span>Fokus pa tydlighet</span>
            </div>
            <div className="hero-buttons">
              <Link className="button button-white" to="/contact">Starta ett liknande projekt ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-page-section">
        <div className="container work-page-grid">
          {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="section section-white menu-work-section">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Digital signage</span>
            <h2>Visuella menyboards för kunder i restaurangmiljö.</h2>
            <p>Utöver hemsidor kan jag skapa skärmmenyer som fortsätter samma visuella identitet inne i lokalen.</p>
          </div>
          <div className="menu-gallery">
            <img src="/assets/menu-nahrayn-mockup.png" alt="AL Nahrayn menyboards i restaurangmiljö" />
            <img src="/assets/menu-nahrayn-01.png" alt="AL Nahrayn menyboard 1" />
            <img src="/assets/menu-nahrayn-02.png" alt="AL Nahrayn menyboard 2" />
            <img src="/assets/menu-birria-new1.png" alt="Birria Seoul menyboard 1" />
            <img src="/assets/menu-birria-new2.png" alt="Birria Seoul menyboard 2" />
          </div>
        </div>
      </section>
    </>
  );
}
