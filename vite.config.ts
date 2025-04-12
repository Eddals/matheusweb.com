import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure this alias matches your project structure
    },
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensure the correct entry point
    },
  },
});
