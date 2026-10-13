import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

// Configuración para emular __dirname en módulos de JavaScript modernos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
  ? '/malm85/malm85-curso-configuraci-n-entorno-linux-2025.io/'
  : '/',
  
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Enseña a Vite que @ significa la carpeta src
    },
  },
});
