import { CLINIC } from './config.js';

export const waLink = (message) =>
  `https://wa.me/${CLINIC.phoneDigits}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:+${CLINIC.phoneDigits}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CLINIC.name}, ${CLINIC.addressOneLine}`
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  CLINIC.addressOneLine
)}&output=embed`;
