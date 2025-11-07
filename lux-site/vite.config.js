import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages under enstie.github.io/amos/, set base to '/amos/'
// CI below sets VITE_BASE=/amos/ so this will switch automatically.
const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  plugins: [react()],
  base
});
