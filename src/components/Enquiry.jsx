import { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { CLINIC, WHATSAPP_MESSAGES } from '../config.js';
import { telLink, waLink } from '../utils.js';
import { Reveal, WhatsAppButton } from './ui.jsx';

const validate = ({ name, phone }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  const digits = phone.replace(/\D/g, '');
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) errors.phone = 'Enter a valid 10-digit mobile number.';
  return errors;
};

export default function Enquiry() {
  const [values, setValues] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    const text = [
      `Hello, I would like to enquire about an appointment at ${CLINIC.name}.`,
      `Name: ${values.name.trim()}`,
      `Contact number: ${values.phone.trim()}`,
      values.message.trim() && `Message: ${values.message.trim()}`,
    ].filter(Boolean).join('\n');
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="section section-sage" aria-labelledby="enquiry-title">
      <div className="container enquiry-grid">
        <Reveal className="enquiry-copy">
          <p className="eyebrow">Appointments</p>
          <h2 id="enquiry-title">Ready to Take the Next Step?</h2>
          <p className="lead">
            Have a question about physiotherapy or want to enquire about an appointment? Send us a
            WhatsApp message to get started.
          </p>
          <div className="btn-row">
            <WhatsAppButton message={WHATSAPP_MESSAGES.contact} size="lg">Book on WhatsApp</WhatsAppButton>
            <a className="btn btn-outline btn-lg" href={telLink}>
              <Phone size={18} aria-hidden="true" />
              <span>Call {CLINIC.phoneDisplay}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="enquiry-form" onSubmit={onSubmit} noValidate>
            <h3>Send an enquiry</h3>
            <p className="form-note">Opens WhatsApp with your message ready to send. Nothing is stored on this website. Please don’t share medical details here.</p>

            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange}
              aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
            {errors.name && <p className="field-error" id="name-err" role="alert">{errors.name}</p>}

            <label htmlFor="phone">Contact number</label>
            <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 98765 43210"
              value={values.phone} onChange={onChange}
              aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
            {errors.phone && <p className="field-error" id="phone-err" role="alert">{errors.phone}</p>}

            <label htmlFor="message">Message <span className="optional">(optional)</span></label>
            <textarea id="message" name="message" rows={3} maxLength={300} value={values.message} onChange={onChange}
              placeholder="For example, preferred time to be contacted" />

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              <Send size={18} aria-hidden="true" />
              <span>Continue on WhatsApp</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
