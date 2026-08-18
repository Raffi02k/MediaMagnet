import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Sidan finns inte.</h1>
        <p className="hero-lead">Länken kan vara gammal eller felstavad.</p>
        <div style={{ marginTop: 24 }}>
          <Link className="btn btn-primary" to="/">Till startsidan ↗</Link>
        </div>
      </div>
    </section>
  );
}
