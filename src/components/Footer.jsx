import { CLINIC, IMAGE_CREDITS, SITE } from '../config.js';
import { telLink, waLink } from '../utils.js';
import { WHATSAPP_MESSAGES } from '../config.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand-word light">{CLINIC.wordmark}</p>
          <p className="footer-tag">{CLINIC.tagline}</p>
          <p className="footer-about">Physiotherapy and rehabilitation in Sitabuldi, Nagpur, led by {CLINIC.doctor}.</p>
        </div>
        <nav aria-label="Footer">
          <p className="footer-title">Quick links</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why">Why Choose Us</a>
          <a href="#contact">Location & Contact</a>
        </nav>
        <div>
          <p className="footer-title">Contact</p>
          <a href={telLink}>{CLINIC.phoneDisplay}</a>
          <a href={waLink(WHATSAPP_MESSAGES.contact)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <p className="footer-address">{CLINIC.addressOneLine}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {SITE.year} {CLINIC.name}. All rights reserved.</p>
        <p className="demo-note">
          {SITE.demoNote} Photos:{' '}
          {IMAGE_CREDITS.map(([, credit, href], i) => (
            <span key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">{credit}</a>
              {i < IMAGE_CREDITS.length - 1 ? ', ' : ''}
            </span>
          ))}
          .
        </p>
      </div>
    </footer>
  );
}
