import { MapPin, Star } from 'lucide-react';
import { GOOGLE, IMAGES, WHATSAPP_MESSAGES } from '../config.js';
import { mapsDirectionsUrl } from '../utils.js';
import { Photo, WhatsAppButton } from './ui.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Physiotherapy in Sitabuldi, Nagpur</p>
          <h1 id="hero-title">
            Move Better. <span>Feel Stronger.</span> Live Without Limits.
          </h1>
          <p className="lead">
            Physiotherapy and rehabilitation support focused on helping you move with greater
            confidence, improve mobility, and work towards your recovery goals.
          </p>
          <div className="btn-row">
            <WhatsAppButton message={WHATSAPP_MESSAGES.hero} size="lg">Enquire on WhatsApp</WhatsAppButton>
            <a className="btn btn-ghost btn-lg" href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" />
              <span>Find Our Clinic</span>
            </a>
          </div>
          <p className="trust-line">
            <span className="stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" />)}
            </span>
            Rated {GOOGLE.rating} on Google · {GOOGLE.reviewCount} Reviews
          </p>
        </div>

        <div className="hero-media">
          <div className="hero-frame">
            <Photo image={IMAGES.hero} widths={[600, 900, 1200]} sizes="(min-width: 900px) 520px, 92vw" eager />
          </div>
          <p className="photo-note">Stock photograph for illustration</p>
        </div>
      </div>
    </section>
  );
}
