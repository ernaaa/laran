import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { fileURLToPath, URL } from 'url';

// Exportieren der Konfiguration mit defineConfig für bessere Typunterstützung
export default defineConfig({
  plugins: [vue(), vueJsx()], // Hinzufügen von vue() zum Plugin-Array
  resolve: {
    alias: {
      // Korrekte Verwendung von Alias
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "react", // Ignorieren von React
        "react-dom",
      ],
    },
  },
  optimizeDeps: {
    include: ["@apollo/client/core", "@apollo/client/link/error"],
  },
});
