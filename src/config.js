// Single source of truth for every business detail on the site.
// Edit this file only; all components read from here.

export const CLINIC = {
  name: 'REVIVE BY DR. SIMRAN',
  wordmark: 'REVIVE',
  tagline: 'PHYSIOTHERAPY & REHABILITATION',
  doctor: 'Dr. Simran',
  addressLines: [
    'Guru Chaya Building, near Agrawal Bichayat Kendra,',
    'Main Road, Kirtanwali Gali, Sitabuldi,',
    'Nagpur, Maharashtra 440012, India',
  ],
  addressOneLine:
    'Guru Chaya Building, near Agrawal Bichayat Kendra, Main Road, Kirtanwali Gali, Sitabuldi, Nagpur, Maharashtra 440012, India',
  phoneDisplay: '+91 93736 74732',
  // International digits only, no "+" or spaces. Used for wa.me and tel: links.
  phoneDigits: '919373674732',
  timingsNote: 'Contact the clinic to confirm availability.',
};

// Supplied by the developer for this demo. Update if the Google listing differs.
export const GOOGLE = {
  rating: '5.0',
  reviewCount: 28,
  // Paste the verified Google Business Profile / review link here once confirmed.
  // Until then the button opens a Google Maps search for the clinic.
  reviewsUrl: '',
};

export const SITE = {
  year: new Date().getFullYear(),
  demoNote:
    'Demonstration website. Business details and content must be approved by the clinic before launch.',
};

export const WHATSAPP_MESSAGES = {
  hero: 'Hello, I would like to enquire about a physiotherapy appointment at REVIVE BY DR. SIMRAN.',
  nav: 'Hello, I would like to book a physiotherapy appointment at REVIVE BY DR. SIMRAN.',
  service: 'Hello, I would like to know more about your physiotherapy services.',
  about: 'Hello, I would like to know more about REVIVE BY DR. SIMRAN.',
  contact:
    'Hello, I would like to enquire about an appointment. Please share the available timings.',
  floating: 'Hello, I would like to enquire about a physiotherapy appointment at REVIVE BY DR. SIMRAN.',
};

// Stock photography. Replace with real clinic photos before launch.
// Each URL was taken from the photo's Unsplash/Pexels page.
const u = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
const p = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  hero: {
    src: (w) => u('1649751361457-01d3a696c7e6', w),
    alt: 'A physiotherapist assessing a patient’s leg during a consultation',
  },
  about: {
    src: (w) => u('1773227055624-07b515ba87c5', w),
    alt: 'A caregiver supporting an older woman using a walker',
  },
  back: {
    src: (w) => u('1706353399656-210cca727a33', w),
    alt: 'A therapist providing hands-on treatment to a woman’s back',
  },
  knee: {
    src: (w) => p('20860607', w),
    alt: 'A physiotherapist treating a patient’s knee',
  },
  exercise: {
    src: (w) => u('1645005512964-5057008b4425', w),
    alt: 'Two adults holding an exercise stick during a guided session',
  },
  strength: {
    src: (w) => u('1645005513713-9e2b92a687d3', w),
    alt: 'Two adults holding light weights during a rehabilitation exercise',
  },
  shoulder: {
    src: (w) => u('1645005512968-0c1fe99f0093', w),
    alt: 'A therapist working on a person’s shoulder',
  },
};

export const IMAGE_CREDITS = [
  ['Hero: leg assessment', 'Unsplash — yury kirillov', 'https://unsplash.com/photos/a-man-getting-his-leg-examined-by-a-doctor-pbUWW-CBoqY'],
  ['About: walker support', 'Unsplash — Age Cymru', 'https://unsplash.com/photos/caregiver-assists-elderly-woman-with-walker-2obyM4zYt3Y'],
  ['Back treatment', 'Unsplash — Marc Zeman', 'https://unsplash.com/photos/a-woman-getting-a-back-massage-from-a-man-uLWW09LLG04'],
  ['Knee treatment', 'Pexels — Funkcinės Terapijos Centras', 'https://www.pexels.com/photo/20860607/'],
  ['Guided exercise', 'Unsplash — Sincerely Media', 'https://unsplash.com/photos/a-man-and-a-woman-holding-a-green-stick-5uLbdKsUXMg'],
  ['Strength exercise', 'Unsplash — Sincerely Media', 'https://unsplash.com/photos/a-man-and-a-woman-holding-dumbs-in-their-hands-inoZpsBQRqk'],
  ['Shoulder treatment', 'Unsplash — Sincerely Media', 'https://unsplash.com/photos/person-massaging-shoulder-in-white-shirt-wGFibXDQlBI'],
];

// Suggested categories only. Confirm with the clinic before launch.
export const SERVICES = [
  { title: 'Pain Management', text: 'Support for everyday aches and discomfort, built around how you move and what you need.', image: 'back', icon: 'HeartPulse' },
  { title: 'Orthopaedic Rehabilitation', text: 'Guided rehabilitation to help you regain movement after joint or bone-related concerns.', image: 'knee', icon: 'Bone' },
  { title: 'Back and Neck Discomfort', text: 'Help understanding posture and movement habits that may contribute to back and neck strain.', image: 'shoulder', icon: 'Activity' },
  { title: 'Mobility and Flexibility', text: 'Gentle, guided work towards easier, more comfortable movement in daily life.', image: 'exercise', icon: 'Move' },
  { title: 'Exercise-Based Rehabilitation', text: 'Supervised exercises matched to your goals and comfort level.', image: 'strength', icon: 'Dumbbell' },
  { title: 'Functional Recovery', text: 'Support to rebuild the confidence to walk, climb, lift and return to what matters to you.', image: 'about', icon: 'Footprints' },
];

export const WHY_POINTS = [
  { icon: 'Target', title: 'Your recovery goals matter', text: 'Care starts with what you want to be able to do again, not a one-size-fits-all routine.' },
  { icon: 'MessageCircle', title: 'Clear communication', text: 'Ask questions and understand your care options in plain language.' },
  { icon: 'Move', title: 'Support for mobility', text: 'Rehabilitation focused on helping you move with greater confidence.' },
  { icon: 'CalendarCheck', title: 'Easy to enquire', text: 'Send a WhatsApp message from your phone to ask about an appointment.' },
  { icon: 'Smile', title: 'A patient-friendly approach', text: 'A calm, respectful setting where your concerns are heard.' },
];
