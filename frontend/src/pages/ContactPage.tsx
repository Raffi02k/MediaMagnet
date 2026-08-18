import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';
import { contactInfo } from '../content/siteContent';

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Kontakt | Raffi Digital"
        description="Kontakta Raffi Digital för nytt webbprojekt eller konsultation."
        bodyClassName="page-contact page-agency"
      />
      <section className="subhero">
        <div className="glow glow-blue" />
        <div className="container">
          <span className="eyebrow">Contact</span>
          <div className="page-title-line">
            <div>
              <h1>Starta ditt projekt.</h1>
              <p>Berätta kort om ditt företag, vad du behöver hjälp med eller ställ en fråga så återkommer jag inom kort.</p>
            </div>
            <div className="number">05</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card">
            <span className="eyebrow">Direktkontakt</span>
            <h2>Låt oss prata om ditt nästa steg.</h2>
            <p>Oavsett om du behöver en helt ny webbplats, hjälp med formulär &amp; system eller struktur runt domän och Google Företagsprofil kan vi ta ett första samtal.</p>
            <div style={{ marginTop: 30 }} className="footer-contact-meta">
              <a href={`mailto:${contactInfo.email}`}>✉ {contactInfo.email}</a>
              <a href={`tel:${contactInfo.phoneHref}`}>☎ {contactInfo.phoneLabel}</a>
              <span>📍 {contactInfo.location}</span>
            </div>
          </div>

          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
