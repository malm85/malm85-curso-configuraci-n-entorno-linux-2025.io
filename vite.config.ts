import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Configuramos las rutas compatibles para entornos TypeScript/Node modernos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command }) => ({
  // CORREGIDO: Eliminamos '/malm85' del inicio. Solo debe ir el nombre del repositorio
  base: command === 'build' 
    ? '/malm85-curso-configuraci-n-entorno-linux-2025.io/' 
    : '/',
    
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
