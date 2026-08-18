import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { announcementText, navigationItems } from '../content/siteContent';

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const syncTop = () => {
      if (headerRef.current) {
        root.style.setProperty('--mobile-menu-top', `${Math.max(0, Math.round(headerRef.current.getBoundingClientRect().bottom))}px`);
      }
    };
    const unlock = () => {
      document.body.classList.remove('menu-open');
      root.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
    const onResize = () => {
      if (window.innerWidth > 1050) {
        setOpen(false);
      } else if (open) {
        syncTop();
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      syncTop();
      document.body.classList.add('menu-open');
      root.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      unlock();
    }

    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
      unlock();
    };
  }, [open]);

  const close = () => setOpen(false);
  const mobileMenu = (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      {navigationItems.map(item => (
        <NavLink key={item.to} onClick={close} to={item.to}>{item.label}</NavLink>
      ))}
    </div>
  );

  return (
    <>
      <div className="announcement">{announcementText}</div>
      <header className="site-header" ref={headerRef}>
        <div className="container nav">
          <Link className="profile-brand" to="/">
            <img className="avatar" src="/assets/raffi-portrait.jpeg" alt="Raffi" />
            <span className="profile-brand-text">
              <strong>Raffi Digital</strong>
              <span>Systemutvecklare &amp; webbdesigner</span>
            </span>
          </Link>
          <nav className="nav-links">
            {navigationItems.map(item => (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <div className="available-badge">
              <span className="dot" /> 1 retainer-plats ledig
            </div>
            <Link className="btn btn-primary" to="/contact">Starta projekt ↗</Link>
            <button className="menu-toggle" aria-label={open ? 'Stäng meny' : 'Öppna meny'} aria-expanded={open} onClick={() => setOpen(value => !value)}>
              <span className="menu-lines"><i /></span>
            </button>
          </div>
        </div>
      </header>
      {typeof document !== 'undefined' ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
