import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <section className="not-found section-white">
      <PageMeta title="Sidan hittades inte" description="Sidan kunde inte hittas." />
      <div className="container">
        <span>404</span>
        <h1>Den sidan finns inte.</h1>
        <Link className="button button-dark" to="/">Till startsidan ↗</Link>
      </div>
    </section>
  );
}
