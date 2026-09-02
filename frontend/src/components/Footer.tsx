import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, site } from '../content/siteContent';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.44.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.75a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.44 1 1 0 0 1-.24 1z" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m0 2 8 5 8-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const location = useLocation();
  const phoneHref = site.phone.replace(/\s+/g, '');
  const [mobileBarVisible, setMobileBarVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setMobileBarVisible(window.scrollY > 80);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
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
              <img className="brand-full-logo" src="/assets/logo_with_text_vit1.png" alt="MediaMagnet" />
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
            <a href={`tel:${phoneHref}`}>{site.phone}</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <p>{site.location}</p>
          </div>
        </div>

        <div className="container footer-line">
          <span>© {new Date().getFullYear()} MediaMagnet</span>
          <span>React · TypeScript · Vite · FastAPI</span>
        </div>
      </footer>

      <div className={`mobile-contact-bar${mobileBarVisible ? ' visible' : ''}`} aria-label="Snabbkontakt">
        <a href={`tel:${phoneHref}`} aria-label="Ring MediaMagnet"><PhoneIcon /></a>
        <a href={`mailto:${site.email}`} aria-label="Maila MediaMagnet"><MailIcon /></a>
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="MediaMagnets Instagram"><InstagramIcon /></a>
      </div>
    </>
  );
}
