// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://reflexoperu-v3.marketingmedico.vip/backend/public/api/',
        changeOrigin: true,
        secure: true,
        credentials: true, // Agrega esto para manejar cookies
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});