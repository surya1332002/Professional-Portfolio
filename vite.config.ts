// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // <-- This is now correct for username.github.io root hosting
  plugins: [react()],
});

