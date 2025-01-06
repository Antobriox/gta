import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Rutas relativas para compatibilidad en producción
  build: {
    outDir: 'build', // Carpeta de salida
    target: 'esnext', // Compilación moderna
    rollupOptions: {
      input: './index.html', // Define que `index.html` es el archivo de entrada
    },
  },
  define: {
    'process.env': {}, // Asegura compatibilidad con variables de entorno
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }, // Suprime errores innecesarios
  },
});
