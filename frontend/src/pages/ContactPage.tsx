import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';
import { site } from '../content/siteContent';

export default function ContactPage() {
  const [mapType, setMapType] = useState<'m' | 'k'>('m');
  return (
    <>
      <PageMeta title="Kontakt" description="Boka ett första samtal med MediaMagnet om hemsida, redesign, Google, reviews eller digitala menyboards." />
      <section
        className="page-hero page-backdrop-hero contact-hero"
        style={{ '--page-hero-image': 'url(/assets/om-hero-new.png)' } as CSSProperties}
      >
        <div className="container page-hero-shell">
          <div className="page-hero-copy">
            <span className="section-kicker light">Starta projekt</span>
            <h1>Berätta vad du vill förbättra.</h1>
            <p>Du behöver inte veta exakt vilken teknik du behöver. Berätta om företaget, nuläget och vad du vill få ut av hemsidan.</p>
            <div className="page-hero-points">
              <span>Direktkontakt med Raffi</span>
              <span>Från idé till lansering</span>
              <span>Trollhättan · hela Sverige</span>
            </div>
            <div className="hero-buttons">
              <a className="button button-white" href="#kontaktformular">Skicka en förfrågan ↗</a>
              <a className="button button-ghost-light" href={`tel:${site.phone.replace(/\s+/g, '')}`}>Ring mig ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white contact-details-section">
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
            <div className="contact-next-steps">
              <h3>Vad händer sen?</h3>
              <ol>
                <li>Vi pratar om företaget och vad du vill förbättra.</li>
                <li>Jag tar fram ett förslag på upplägg och nästa steg.</li>
                <li>Vi går igenom omfattning och tidsplan innan vi börjar.</li>
              </ol>
              <Link className="button button-light" to="/process">Se hela processen ↗</Link>
            </div>
          </div>
          <div className="form-card" id="kontaktformular">
            <div className="contact-form-heading">
              <span className="section-kicker">Din idé börjar här</span>
              <h2>Berätta lite om ditt projekt.</h2>
              <p>Några rader räcker för att komma igång. Fält med * behöver fyllas i.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section contact-location-section" aria-labelledby="contact-location-title">
        <div className="container">
          <div className="contact-location-heading">
            <div>
              <span className="section-kicker light">Nära, även på distans</span>
              <h2 id="contact-location-title">Trollhättan som bas. Hela Sverige som arbetsplats.</h2>
              <p>{site.location}. Vi kan gå igenom idéer, design och feedback digitalt. Kartan visar orten, inte en besöksadress.</p>
            </div>
            <a className="button button-ghost-light" href="https://www.google.com/maps/search/?api=1&query=Trollh%C3%A4ttan%2C%20Sverige" target="_blank" rel="noreferrer">Öppna i Google Maps ↗</a>
          </div>
          <div className="contact-map-shell">
            <div className="contact-map-toolbar">
              <span>Trollhättan, Sverige</span>
              <div className="contact-map-toggle" role="group" aria-label="Kartläge">
                <button type="button" aria-pressed={mapType === 'm'} aria-controls="contact-map" onClick={() => setMapType('m')}>Karta</button>
                <button type="button" aria-pressed={mapType === 'k'} aria-controls="contact-map" onClick={() => setMapType('k')}>Satellit</button>
              </div>
            </div>
            <iframe
              id="contact-map"
              src={`https://maps.google.com/maps?q=Trollh%C3%A4ttan%2C%20Sverige&z=12&t=${mapType}&output=embed`}
              title={`Google Maps över Trollhättan, ${mapType === 'm' ? 'kartläge' : 'satellitläge'}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
