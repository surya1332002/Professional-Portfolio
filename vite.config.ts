// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Professional-Portfolio/', // ✅ Add this line!
  plugins: [react()],
});
