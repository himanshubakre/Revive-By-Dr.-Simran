import { CLINIC, IMAGES, WHATSAPP_MESSAGES } from '../config.js';
import { Photo, Reveal, WhatsAppButton } from './ui.jsx';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-media">
          <Photo image={IMAGES.about} widths={[500, 800, 1100]} sizes="(min-width: 900px) 520px, 92vw" />
          <p className="photo-note">Stock photograph for illustration</p>
        </Reveal>
        <Reveal delay={100} className="about-copy">
          <p className="eyebrow">About the clinic</p>
          <h2 id="about-title">Care That Supports Your Journey to Better Movement</h2>
          <p className="lead">
            Every person’s movement and recovery needs are different. Physiotherapy can help people
            work towards improved mobility, function, and confidence through an individualized approach.
          </p>
          <p>
            {CLINIC.name} is a physiotherapy and rehabilitation clinic in Sitabuldi, Nagpur, led by{' '}
            {CLINIC.doctor}. Message the clinic to ask how physiotherapy might fit your goals.
          </p>
          <WhatsAppButton message={WHATSAPP_MESSAGES.about}>Ask a Question on WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
