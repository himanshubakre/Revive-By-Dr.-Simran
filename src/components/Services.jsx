import { Activity, Bone, Dumbbell, Footprints, HeartPulse, Move } from 'lucide-react';
import { IMAGES, SERVICES, WHATSAPP_MESSAGES } from '../config.js';
import { Photo, Reveal, SectionHead, WhatsAppButton } from './ui.jsx';

const ICONS = { Activity, Bone, Dumbbell, Footprints, HeartPulse, Move };

export default function Services() {
  return (
    <section id="services" className="section section-sage" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          eyebrow="Services"
          title="Support for the way you move"
          intro="Areas physiotherapy can help with. Please message the clinic to ask about the care that suits you."
          center
        />
        <ul className="service-grid">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal as="li" key={s.title} delay={(i % 3) * 80} className="service-card">
                <div className="service-photo">
                  <Photo image={IMAGES[s.image]} widths={[400, 640, 900]} sizes="(min-width: 900px) 360px, (min-width: 600px) 45vw, 92vw" />
                  <span className="service-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <WhatsAppButton message={`${WHATSAPP_MESSAGES.service} I am interested in: ${s.title}.`} variant="link" size="sm">
                    Enquire on WhatsApp
                  </WhatsAppButton>
                </div>
              </Reveal>
            );
          })}
        </ul>
        <p className="fine-print center">Suggested service categories for this demo. Final services to be confirmed by the clinic.</p>
      </div>
    </section>
  );
}
