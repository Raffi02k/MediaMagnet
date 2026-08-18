import { Link } from 'react-router-dom';
import { contactInfo } from '../content/siteContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-label">Raffi Digital</div>
            <h2>Webb som är byggd<br />för nästa steg.</h2>
          </div>
          <div>
            <div className="footer-label">Utforska</div>
            <div className="footer-nav">
              <Link to="/services">Tjänster</Link>
              <Link to="/work">Work</Link>
              <Link to="/process">Process</Link>
              <Link to="/about">Om mig</Link>
            </div>
          </div>
          <div>
            <div className="footer-label">Kontakt</div>
            <div className="footer-nav">
              <div className="footer-contact-meta">
                <span className="contact-name">{contactInfo.company}</span>
                <a href={`mailto:${contactInfo.email}`}>✉ {contactInfo.email}</a>
                <a href={`tel:${contactInfo.phoneHref}`}>☎ {contactInfo.phoneLabel}</a>
              </div>
              <Link to="/contact">Starta ett projekt ↗</Link>
              <a href="https://penselverket.edgeone.dev" target="_blank" rel="noreferrer">Penselverket live ↗</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© {year} Raffi Digital</span>
          <span>React · TypeScript · Node/Vite · Python/FastAPI · Modern UX/UI</span>
        </div>
      </div>
    </footer>
  );
}
