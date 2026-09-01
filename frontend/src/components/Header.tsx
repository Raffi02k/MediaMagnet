import type { MouseEvent as ReactMouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, serviceLinks } from '../content/siteContent';

export function Header() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuOpen = open && !isClosing;
  const headerSolid = scrolled && !open && !isClosing;

  function closeMobileMenu() {
    if ((!open && !isClosing) || isClosing) return;

    setIsClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 280);
  }

  function handleSamePageClick(event: ReactMouseEvent, to: string) {
    setServicesOpen(false);
    closeMobileMenu();

    if (location.pathname !== to) return;

    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    setOpen(false);
    setIsClosing(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || isClosing ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isClosing, open]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <header className={`site-header${headerSolid ? ' is-solid' : ''}${open || isClosing ? ' menu-open' : ''}`}>
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          aria-label="MediaMagnet startsida"
          onClick={event => handleSamePageClick(event, '/')}
        >
          <img src="/assets/mediamagnet-mark.png" alt="" />
          <span>MediaMagnet</span>
        </Link>

        <nav className="desktop-nav" aria-label="Huvudnavigation">
          {navigation.map(item => item.to === '/services' ? (
            <div
              key={item.to}
              ref={servicesRef}
              className={`desktop-nav-group${servicesOpen ? ' open' : ''}`}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="desktop-nav-parent"
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                onClick={() => setServicesOpen(value => !value)}
              >
                <span>{item.label}</span>
                <b>+</b>
              </button>
              <div className="desktop-subnav" role="menu">
                {serviceLinks.map(service => (
                  <Link key={service.to} to={service.to} role="menuitem" onClick={event => handleSamePageClick(event, service.to)}>{service.label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={event => handleSamePageClick(event, item.to)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="header-cta" to="/contact" onClick={event => handleSamePageClick(event, '/contact')}>Starta projekt <span>↗</span></Link>
          <button
            type="button"
            className={`menu-button${mobileMenuOpen ? ' open' : ''}`}
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              if (mobileMenuOpen) {
                closeMobileMenu();
                return;
              }

              setOpen(true);
              setIsClosing(false);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-panel${open ? ' open' : ''}${isClosing ? ' closing' : ''}`}
        onClick={event => {
          if (event.target === event.currentTarget) closeMobileMenu();
        }}
      >
        <div className="container mobile-panel-inner" onClick={event => event.stopPropagation()}>
          {navigation.map((item, index) => (
            item.to === '/services' ? (
              <div key={item.to} className="mobile-nav-group">
                <button
                  type="button"
                  className={`mobile-nav-parent${mobileServicesOpen ? ' open' : ''}`}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-subnav"
                  onClick={() => setMobileServicesOpen(value => !value)}
                >
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <span>{item.label}</span>
                  <b>{mobileServicesOpen ? 'x' : '+'}</b>
                </button>
                <div
                  id="mobile-services-subnav"
                  className={`mobile-subnav${mobileServicesOpen ? ' open' : ''}`}
                  aria-hidden={!mobileServicesOpen}
                >
                  <Link to={item.to} onClick={event => handleSamePageClick(event, item.to)}>Alla tjänster</Link>
                  {serviceLinks.map(service => (
                    <Link key={service.to} to={service.to} onClick={event => handleSamePageClick(event, service.to)}>{service.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={event => handleSamePageClick(event, item.to)}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <span>{item.label}</span>
                <b>↗</b>
              </NavLink>
            )
          ))}
          <Link className="mobile-panel-cta" to="/contact" onClick={event => handleSamePageClick(event, '/contact')}>Boka ett gratis första samtal ↗</Link>
        </div>
      </div>
    </header>
  );
}
