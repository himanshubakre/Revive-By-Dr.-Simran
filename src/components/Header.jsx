import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINIC, WHATSAPP_MESSAGES } from '../config.js';
import { WhatsAppButton } from './ui.jsx';

const LINKS = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Why Choose Us', '#why'],
  ['Location & Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-row">
        <a href="#home" className="brand" onClick={close} aria-label={`${CLINIC.name} home`}>
          <span className="brand-word">{CLINIC.wordmark}</span>
          <span className="brand-tag">{CLINIC.tagline}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="header-cta">
          <WhatsAppButton message={WHATSAPP_MESSAGES.nav} size="sm">Book an Appointment</WhatsAppButton>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={close} tabIndex={open ? 0 : -1}>{label}</a>
          ))}
        </nav>
        <div onClick={close}>
          <WhatsAppButton message={WHATSAPP_MESSAGES.nav} size="lg" className="btn-block">Book an Appointment</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
