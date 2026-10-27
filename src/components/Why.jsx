import { CalendarCheck, MessageCircle, Move, Smile, Target } from 'lucide-react';
import { WHY_POINTS } from '../config.js';
import { Reveal, SectionHead } from './ui.jsx';

const ICONS = { CalendarCheck, MessageCircle, Move, Smile, Target };

export default function Why() {
  return (
    <section id="why" className="section section-dark" aria-labelledby="why-title">
      <div className="container">
        <SectionHead eyebrow="Why Choose Us" title="What good physiotherapy care looks like" center />
        <ul className="why-grid">
          {WHY_POINTS.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal as="li" key={p.title} delay={i * 70} className="why-item">
                <span className="why-icon"><Icon size={22} aria-hidden="true" /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
