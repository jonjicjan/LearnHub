import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/LearnHub/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000, // Change this number to any port you prefer
  },
});