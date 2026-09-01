import { Link, useLocation } from 'react-router-dom';
import { navigation, site } from '../content/siteContent';

export function Footer() {
  const location = useLocation();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link
            to="/"
            className="brand footer-brand-logo"
            onClick={event => {
              if (location.pathname !== '/') return;
              event.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/mediamagnet-mark.png" alt="" />
            <span>MediaMagnet</span>
          </Link>
          <p>Hemsidor och digital närvaro som gör det lättare för företag att bli hittade, förstådda och valda.</p>
        </div>

        <div className="footer-nav-col">
          <span>Navigation</span>
          {navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>

        <div className="footer-nav-col">
          <span>Kontakt</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <p>{site.location}</p>
        </div>
      </div>

      <div className="container footer-line">
        <span>© {new Date().getFullYear()} MediaMagnet</span>
        <span>React · TypeScript · Vite · FastAPI</span>
      </div>
    </footer>
  );
}
