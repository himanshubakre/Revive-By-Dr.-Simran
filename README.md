# REVIVE BY DR. SIMRAN — Website Demo

React + Vite single-page demo. WhatsApp-first, mobile-first.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
    npm run preview

## Deploy
- **Netlify / Vercel:** import the folder or repo. Build command `npm run build`, output directory `dist`.
- **Quick drag-and-drop:** run `npm run build`, then drop the `dist` folder on app.netlify.com/drop.

## Edit content
Everything lives in `src/config.js`: clinic name, address, phone and WhatsApp number (`phoneDigits`),
Google rating and review count, `GOOGLE.reviewsUrl`, service cards, WhatsApp messages and image URLs.
Update `<link rel="canonical">` in `index.html` once a domain is chosen.

## Photos
Stock photos hotlinked from Unsplash and Pexels (credits listed in `IMAGE_CREDITS` and the footer).
They are not photos of the clinic or Dr. Simran. To use local images, put files in `public/images/`
and change each `src` function in `IMAGES` to return the local path. If an image fails to load,
the site shows a neutral placeholder instead of a broken icon.

## Confirm with Dr. Simran before launch
- Phone/WhatsApp number, address, and the 5.0 / 28 reviews figure (supplied, not verified)
- Opening hours (deliberately not shown; add to `CLINIC.timingsNote` once confirmed)
- Which services she actually offers (current cards are suggested categories)
- Her approved bio, qualifications and photo
- The exact Google Business Profile review link (`GOOGLE.reviewsUrl`)
- Real clinic photos to replace the stock images

## Limitations
- The enquiry form has no backend; it opens WhatsApp with a prefilled message.
- Image URLs could not be test-loaded from the build sandbox; open the demo once to confirm all seven photos show.
