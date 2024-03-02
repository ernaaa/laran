import { fileURLToPath, URL } from 'url'


import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import { defineConfig } from "vite";

alias: {
    "@"; resolve(__dirname, "src"),

  plugins; [vueJsx()],
  build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
      ],
    },
  },
    resolve: {
        alias: {
            '@'; fileURLToPath(new URL('./src', import.meta.url))
        }
    }
}
  optimizeDeps: {
    include: ["@apollo/client/core", "@apollo/client/link/error"],
  },
})
