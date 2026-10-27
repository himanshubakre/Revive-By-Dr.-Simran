import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { CLINIC, WHATSAPP_MESSAGES } from '../config.js';
import { mapsDirectionsUrl, mapsEmbedUrl, telLink } from '../utils.js';
import { Reveal, SectionHead, WhatsAppButton } from './ui.jsx';

export default function Location() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead eyebrow="Location & Contact" title="Visit the clinic in Sitabuldi" />
        <div className="contact-grid">
          <Reveal className="contact-card">
            <h3>{CLINIC.name}</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={20} aria-hidden="true" />
                <address>{CLINIC.addressLines.map((l) => <span key={l}>{l}</span>)}</address>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <a href={telLink}>{CLINIC.phoneDisplay}</a>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <span>{CLINIC.timingsNote}</span>
              </li>
            </ul>
            <div className="btn-row">
              <a className="btn btn-outline btn-md" href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation size={18} aria-hidden="true" />
                <span>Get Directions</span>
              </a>
              <WhatsAppButton message={WHATSAPP_MESSAGES.contact} size="md">WhatsApp Us</WhatsAppButton>
            </div>
          </Reveal>
          <Reveal delay={100} className="map-wrap">
            <iframe title={`Map showing ${CLINIC.name}`} src={mapsEmbedUrl} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
