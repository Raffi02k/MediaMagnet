import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { services } from '../content/siteContent';

const problems = [
  'Du har ingen tydlig hemsida och blir svårare att hitta online.',
  'Din nuvarande sida känns gammal och speglar inte kvaliteten i företaget.',
  'Besökare landar på sidan men förstår inte snabbt vad de ska göra.',
  'Tjänsterna är otydliga och kontaktvägen kräver för många steg.',
  'Google, reviews och hemsidan jobbar inte tillsammans.'
];

export default function ServicesPage() {
  return (
    <>
      <PageMeta title="Tjänster" description="Webbdesign, redesign, Google, lokal SEO, reviews, digitala menyboards och löpande hjälp från MediaMagnet." />

      <section className="page-hero page-hero-dark services-page-hero">
        <div className="container narrow-hero">
          <span className="section-kicker light">Tjänster</span>
          <h1>Din digitala närvaro ska göra mer än att bara existera.</h1>
          <p>Jag hjälper företag bygga en tydligare väg från första intryck till kontakt, offert eller beställning.</p>
          <Link className="button button-white button-large" to="/contact">Boka ett gratis första samtal ↗</Link>
        </div>
      </section>

      <section className="section section-white">
        <div className="container problem-grid">
          <div className="rabbit-section-heading sticky-heading">
            <span className="section-kicker">Problemet</span>
            <h2>En svag hemsida kan kosta förtroende innan kunden ens ringer.</h2>
          </div>
          <div className="problem-list">
            {problems.map((problem, index) => (
              <article key={problem}>
                <span>{index + 1}</span>
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-solution">
        <div className="container">
          <div className="rabbit-section-heading">
            <span className="section-kicker light">MediaMagnet-lösningen</span>
            <h2>Jag bygger. Jag förbättrar. Du kan fokusera på företaget.</h2>
            <p>Du kan börja med en ny hemsida och sedan bygga vidare när behovet finns.</p>
          </div>
          <div className="services-grid-new">
            {services.map((service, index) => (
              <article id={service.id} key={service.id} className="service-detail-card">
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul>{service.bullets.map(item => <li key={item}>✓ {item}</li>)}</ul>
                <Link className="service-card-link" to={`/services/${service.slug}`}>Läs mer ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white screen-service-block" id="menu-boards">
        <div className="container screen-service-grid">
          <div>
            <span className="section-kicker">Digitala skärmar</span>
            <h2>För restaurang och butik kan designen fortsätta inne i lokalen.</h2>
            <p>Jag tar även fram visuella menyboards i 16:9-format som kan användas på TV-skärmar för att visa rätter, priser, kampanjer och beställningsinformation.</p>
            <Link className="button button-dark" to="/work">Se exempel ↗</Link>
          </div>
          <div className="screen-stack">
            <img src="/assets/menu-birria-new1.png" alt="Birria Seoul digital menyboard" />
            <img src="/assets/menu-nahrayn-01.png" alt="AL Nahrayn digital menyboard" />
          </div>
        </div>
      </section>
    </>
  );
}
