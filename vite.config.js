import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this site from /Revive-By-Dr.-Simran/, so assets need that base path.
// For a custom domain or Netlify/Vercel, change this to '/'.
export default defineConfig({
  base: '/Revive-By-Dr.-Simran/',
  plugins: [react()],
});
