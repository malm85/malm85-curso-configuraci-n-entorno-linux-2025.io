import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; // 1. Importa el plugin oficial de Tailwind v4
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [
    tailwindcss(), // 2. ¡DEBE ESTAR AQUÍ! Colócalo antes del plugin de React
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
