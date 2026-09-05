import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <section className="not-found section-white">
      <PageMeta title="404 · Sidan hittades inte" description="Sidan kunde inte hittas." noIndex />
      <div className="container">
        <div className="not-found-panel">
          <p className="not-found-eyebrow">404 · Sidan hittades inte</p>
          <h1>Den sidan finns inte.</h1>
          <p>Det verkar bara vara den här sidan som saknas, inte hela webbplatsen.</p>
          <p>Gå tillbaka till startsidan, kika på våra tjänster eller kontakta oss om länken verkar fel.</p>
          <div className="not-found-actions">
            <Link className="button button-dark" to="/">Till startsidan ↗</Link>
            <Link className="button button-light" to="/services">Se våra tjänster</Link>
            <Link className="button button-light" to="/contact">Kontakta oss</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
