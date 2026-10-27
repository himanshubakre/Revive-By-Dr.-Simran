import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES } from './config.js';
import { waLink } from './utils.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Why from './components/Why.jsx';
import Reviews from './components/Reviews.jsx';
import Enquiry from './components/Enquiry.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Why />
        <Reviews />
        <Enquiry />
        <Location />
      </main>
      <Footer />
      <a
        className="floating-wa"
        href={waLink(WHATSAPP_MESSAGES.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
