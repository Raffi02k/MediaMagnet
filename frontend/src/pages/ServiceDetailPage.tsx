import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { ProjectPreview } from '../components/ProjectPreview';
import { projects } from '../data/projects';
import NotFoundPage from './NotFoundPage';
import { serviceLinks, services } from '../content/siteContent';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(item => item.slug === slug);

  if (!service) return <NotFoundPage />;

  const relatedServices = services.filter(item => service.relatedServices.includes(item.id));
  const otherServices = serviceLinks.filter(item => item.to !== `/services/${service.slug}`);
  const projectMap = new Map(projects.map(project => [project.slug, project]));

  return (
    <>
      <PageMeta title={service.seoTitle} description={service.metaDescription} />

      <section
        className="page-hero page-hero-dark service-page-hero service-detail-hero"
        style={{ '--service-hero-image': `url(${service.heroImage})` } as CSSProperties}
      >
        <div className="container service-hero-shell">
          <div className="service-hero-copy">
            <span className="section-kicker light">{service.navLabel}</span>
            <h1>{service.heroTitle}</h1>
            <p>{service.heroText}</p>
            <div className="service-hero-points">
              {service.bullets.slice(0, 3).map(item => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-buttons">
              <Link className="button button-white button-large" to="/contact">Boka ett gratis första samtal ↗</Link>
              <Link className="button button-link light-link" to="/services">Alla tjänster ↓</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white service-story-section">
        <div className="container service-story-grid">
          <div className="rabbit-section-heading sticky-heading">
            <span className="section-kicker">Det här ingår</span>
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
          </div>
          <div className="service-story-body">
            <div className="service-outcomes">
              {service.outcomes.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
            <div className="service-deliverables">
              {service.deliverables.map(item => (
                <article key={item}>
                  <strong>{item}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section services-solution service-why-section">
        <div className="container service-why-grid">
          <div>
            <span className="section-kicker light">Varför det spelar roll</span>
            <h2>{service.whyTitle}</h2>
            <p>{service.whyText}</p>
          </div>
          <div className="service-faq-strip">
            {service.faq.map(item => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-white service-showcase-section">
        <div className="container service-links-grid">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Relevanta exempel</span>
            <h2>{service.showcaseTitle}</h2>
            <p>{service.showcaseText}</p>
          </div>
          <div className="service-showcase-grid">
            {service.showcaseEntries.map((entry, index) => {
              if (entry.kind === 'project' && 'slug' in entry) {
                if (!entry.slug) return null;
                const project = projectMap.get(entry.slug);
                if (!project) return null;

                return (
                  <Link key={project.slug} className="service-showcase-card" to={`/work/${project.slug}`}>
                    <ProjectPreview project={project} compact />
                    <div className="service-showcase-copy">
                      <small>{project.domain}</small>
                      <span>{project.category}</span>
                      <strong>{project.name}</strong>
                    </div>
                  </Link>
                );
              }

              if (entry.kind === 'image' && 'image' in entry) {
                return (
                  <figure key={`${entry.image}-${index}`} className="service-showcase-media-card">
                    <img src={entry.image} alt={entry.alt} loading="lazy" />
                    <figcaption>
                      <small>{entry.label}</small>
                      <strong>{entry.title}</strong>
                    </figcaption>
                  </figure>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      <section className="section section-white service-related-section">
        <div className="container service-links-grid">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Bra ihop med</span>
            <h2>Vanliga nästa steg efter {service.navLabel.toLowerCase()}.</h2>
          </div>
          <div className="service-links-list related-service-links">
            {relatedServices.map(item => (
              <Link key={item.slug} to={`/services/${item.slug}`}>
                <div>
                  <strong>{item.navLabel}</strong>
                  <span>{item.short}</span>
                </div>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container service-links-grid">
          <div className="rabbit-section-heading">
            <span className="section-kicker">Alla tjänster</span>
            <h2>Fler sidor som stärker samma digitala grund.</h2>
          </div>
          <div className="service-links-list">
            {otherServices.map(item => (
              <Link key={item.to} to={item.to}>
                <span>{item.label}</span>
                <b>↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
