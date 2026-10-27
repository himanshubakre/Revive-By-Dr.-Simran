import { useState } from 'react';
import { ImageOff, MessageCircle } from 'lucide-react';
import { useReveal } from '../hooks.js';
import { waLink } from '../utils.js';

export function WhatsAppButton({ message, children = 'Enquire on WhatsApp', variant = 'primary', size = 'md', className = '' }) {
  return (
    <a
      className={`btn btn-${variant} btn-${size} ${className}`}
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

// Photo with lazy loading, responsive srcSet and a graceful fallback.
export function Photo({ image, widths = [480, 800, 1200], sizes, eager = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={image.alt}>
        <ImageOff size={28} aria-hidden="true" />
      </div>
    );
  }
  const largest = widths[widths.length - 1];
  return (
    <img
      className={className}
      src={image.src(largest)}
      srcSet={widths.map((w) => `${image.src(w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => setFailed(true)}
    />
  );
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, intro, center = false }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}
