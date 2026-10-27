import { ExternalLink, Star } from 'lucide-react';
import { GOOGLE } from '../config.js';
import { mapsDirectionsUrl } from '../utils.js';
import { Reveal, SectionHead } from './ui.jsx';

export default function Reviews() {
  const url = GOOGLE.reviewsUrl || mapsDirectionsUrl;
  return (
    <section id="reviews" className="section" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHead eyebrow="Patient trust" title="Rated highly on Google" center />
        <Reveal className="rating-card">
          <div className="rating-score">
            <span className="rating-number">{GOOGLE.rating}</span>
            <span className="rating-out">/ 5</span>
          </div>
          <div className="rating-detail">
            <span className="stars big" aria-label={`${GOOGLE.rating} out of 5 stars`}>
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={22} fill="currentColor" />)}
            </span>
            <p>Based on {GOOGLE.reviewCount} Google reviews</p>
            <a className="btn btn-outline btn-md" href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} aria-hidden="true" />
              <span>View Google Reviews</span>
            </a>
          </div>
        </Reveal>
        <p className="fine-print center">Rating supplied for this demo and shown as a summary only. Verify against the live Google listing before launch.</p>
      </div>
    </section>
  );
}
