// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: mode === 'development' ? {
    proxy: {
      '/api': {
        target: 'https://reflexoperu-v3.marketingmedico.vip/backend/public',
        changeOrigin: true,
        secure: false,
      },
    },
  } : undefined,
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
}));