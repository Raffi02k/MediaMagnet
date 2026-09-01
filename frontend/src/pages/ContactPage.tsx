import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';
import { site } from '../content/siteContent';

export default function ContactPage() {
  return (
    <>
      <PageMeta title="Kontakt" description="Boka ett första samtal med MediaMagnet om hemsida, redesign, Google, reviews eller digitala menyboards." />
      <section className="page-hero page-hero-dark contact-hero">
        <div className="container narrow-hero">
          <span className="section-kicker light">Starta projekt</span>
          <h1>Berätta vad du vill förbättra.</h1>
          <p>Du behöver inte veta exakt vilken teknik du behöver. Berätta om företaget, nuläget och vad du vill få ut av hemsidan.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-page-grid">
          <div className="contact-info-card">
            <span className="section-kicker">Direktkontakt</span>
            <h2>Ett kort samtal räcker för att börja.</h2>
            <p>Jag kan hjälpa med ny hemsida, redesign, Google-synlighet, reviews, hosting eller digitala menyboards.</p>
            <div className="contact-links">
              <a href={`mailto:${site.email}`}><small>E-post</small><strong>{site.email}</strong><span>↗</span></a>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}><small>Telefon</small><strong>{site.phone}</strong><span>↗</span></a>
              <a href={site.instagram} target="_blank" rel="noreferrer"><small>Instagram</small><strong>@mediamagnetse</strong><span>↗</span></a>
            </div>
          </div>
          <div className="form-card"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
