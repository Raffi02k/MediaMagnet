import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { planDetails } from '../content/planDetails';
import { pricingPlans } from '../content/pricing';
import NotFoundPage from './NotFoundPage';
import '../styles/pricing.css';

export default function PlanDetailPage() {
  const { planId } = useParams();
  const plan = pricingPlans.find(item => item.id === planId);
  const details = plan && planDetails[plan.id];

  if (!plan || !details) return <NotFoundPage />;

  const featured = plan.id === 'arsservice' || plan.id === 'deluxe';
  const contactUrl = `/contact?plan=${plan.id}`;

  return (
    <>
      <PageMeta title={`${plan.name} – ${plan.price} kr`} description={`${plan.description} ${plan.price} kr ${plan.period}, exkl. moms. Läs om innehåll, arbetsprocess och hur du kommer igång.`} />
      <section className="pricing-hero plan-hero">
        <div className="container">
          <nav className="plan-breadcrumb" aria-label="Brödsmulor"><Link to="/pricing">Priser & paket</Link><span aria-hidden="true">/</span><span aria-current="page">{plan.name}</span></nav>
          <div className="pricing-hero__grid">
            <div>
              <span className="section-kicker">{plan.label}</span>
              <h1>{plan.name}</h1>
              <p>{details.intro}</p>
              <a className="button button-dark button-large" href="#innehall">Utforska vad som ingår ↓</a>
            </div>
            <aside className={`pricing-card${featured ? ' pricing-card--featured' : ''}`} aria-label={`Pris och innehåll för ${plan.name}`}>
              <span className="pricing-card__label">Ditt paket i korthet</span>
              <div className="pricing-card__price">{plan.price} <span>kr</span></div>
              <span className="pricing-card__period">{plan.period} · exkl. moms</span>
              <span className="pricing-card__vat">{plan.inclusive}</span>
              {plan.id === 'arsservice' && <span className="pricing-saving">Spara 1 600 kr jämfört med 12 månadsbetalningar</span>}
              <ul className="pricing-features">{plan.features.map(feature => <li key={feature}><span className="pricing-tick" aria-hidden="true">✓</span>{feature}</li>)}</ul>
              <p className="pricing-card__note">{plan.note}</p>
              <Link className={`button ${featured ? 'button-white' : 'button-dark'}`} to={contactUrl}>Skicka förfrågan ↗</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-white plan-section" id="innehall" aria-labelledby="plan-content-title">
        <div className="container">
          <div className="pricing-section-heading"><div><span className="section-kicker">Är det här rätt för dig?</span><h2 id="plan-content-title">Det här får du.</h2></div><p>{details.audience}</p></div>
          <div className="plan-detail-grid">{details.included.map(item => <article className="plan-detail-block" key={item.title}><span className="pricing-tick" aria-hidden="true">✓</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section" aria-labelledby="plan-process-title">
        <div className="container">
          <div className="pricing-section-heading"><div><span className="section-kicker">Från första kontakt till vardag</span><h2 id="plan-process-title">Så går det till.</h2></div></div>
          <ol className="plan-steps">{details.steps.map((step, index) => <li key={step.title}><span className="plan-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="plan-preparation-title">
        <div className="container plan-detail-grid">
          <div className="plan-detail-block"><span className="section-kicker">Din del i samarbetet</span><h2 id="plan-preparation-title">Det här behöver jag från dig.</h2><ul className="pricing-features">{details.preparation.map(item => <li key={item}><span className="pricing-tick" aria-hidden="true">✓</span>{item}</li>)}</ul></div>
          <div className="plan-detail-block plan-scope"><span className="section-kicker">Tydligt från start</span><h2>Omfattning & villkor.</h2><p>{details.scope}</p><p>Du får en offert att ta ställning till innan arbetet börjar.</p></div>
        </div>
      </section>

      <section className="section" aria-labelledby="plan-faq-title">
        <div className="container pricing-faq"><div><span className="section-kicker">Bra att veta</span><h2 id="plan-faq-title">Frågor om {plan.name}?</h2><p>Berätta om ditt behov så går vi igenom hur paketet passar ditt företag.</p><Link className="button button-dark" to={contactUrl}>Prata om {plan.name} ↗</Link></div><div>{details.faq.map(item => <details key={item.title}><summary>{item.title}</summary><p>{item.text}</p></details>)}</div></div>
      </section>

      <section className="section section-white" aria-labelledby="other-plans-title">
        <div className="container">
          <div className="pricing-section-heading"><div><span className="section-kicker">Hitta rätt nivå</span><h2 id="other-plans-title">Utforska fler paket.</h2></div><Link className="button button-dark" to="/pricing">Jämför alla paket ↗</Link></div>
          <div className="plan-related">{pricingPlans.filter(item => item.id !== plan.id).map(item => <Link key={item.id} to={`/pricing/${item.id}`}><strong>{item.name} <span aria-hidden="true">↗</span></strong><span>{item.price} kr {item.period} · exkl. moms</span></Link>)}</div>
        </div>
      </section>
    </>
  );
}
