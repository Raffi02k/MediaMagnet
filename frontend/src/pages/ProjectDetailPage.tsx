import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { projects } from '../data/projects';

type ProjectDetailPageProps = {
  slug?: string;
};

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const params = useParams();
  const rawSlug = slug ?? params.slug ?? '';
  const normalizedSlug = rawSlug.replace(/\.html$/, '');
  const project = projects.find(entry => entry.slug === normalizedSlug);

  if (!project) {
    return (
      <>
        <PageMeta title="Case | Raffi Digital" description="Projektet kunde inte hittas." bodyClassName="page-case page-agency" />
        <section className="section">
          <div className="container">
            <span className="eyebrow">Case</span>
            <h1>Projektet kunde inte hittas.</h1>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" to="/work">Till work ↗</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (project.slug === 'next-project') {
    return (
      <>
        <PageMeta title="Nästa case | Raffi Digital" description={project.caseDescription} bodyClassName="page-case page-agency" />
        <section className="section">
          <div className="container">
            <span className="eyebrow">Nästa case</span>
            <h1>Starta nästa projekt.</h1>
            <p className="hero-lead">Portfolion är byggd för att växa. Nästa projekt kan läggas till här.</p>
            <div style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" to="/contact">Starta projekt ↗</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta title={`Case: ${project.title} | Raffi Digital`} description={project.caseDescription} bodyClassName="page-case page-agency" />
      <section className="case-hero">
        <div className="container case-hero-grid">
          <div>
            <span className="eyebrow">{project.caseEyebrow}</span>
            <h1>{project.title}</h1>
            <p>{project.caseDescription}</p>
            <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: 24 }}>
              {project.primaryCta.external ? (
                <a className="btn btn-primary" href={project.primaryCta.href} target="_blank" rel="noreferrer">{project.primaryCta.label}</a>
              ) : (
                <Link className="btn btn-primary" to={project.primaryCta.href}>{project.primaryCta.label}</Link>
              )}
              {project.secondaryCta ? (
                project.secondaryCta.external ? (
                  <a className="btn btn-ghost" href={project.secondaryCta.href} target="_blank" rel="noreferrer">{project.secondaryCta.label}</a>
                ) : (
                  <Link className="btn btn-ghost" to={project.secondaryCta.href}>{project.secondaryCta.label}</Link>
                )
              ) : null}
            </div>
          </div>

          <div className="case-preview">
            {project.slug === 'penselverket' ? (
              <div className="live-frame-shell">
                <div className="live-frame-bar"><span>penselverket.edgeone.dev</span><span>LIVE</span></div>
                <img src="/assets/penselverket-hero.webp" alt="Penselverket live preview" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            ) : (
              <div className="data-preview" style={{ width: '100%', height: 380 }}>
                <div className="data-grid">
                  <div className="data-kpi"><strong>91</strong><span>Opportunity score</span></div>
                  <div className="data-kpi"><strong>24</strong><span>Signals</span></div>
                  <div className="data-kpi"><strong>7</strong><span>Leads</span></div>
                </div>
                <div className="data-chart" style={{ height: 230 }} />
              </div>
            )}
          </div>
        </div>

        <div className="container case-facts">
          {project.caseFacts.map(fact => (
            <div className="case-fact" key={fact.label}>
              <strong>{fact.label}</strong>
              <span>{fact.value}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
