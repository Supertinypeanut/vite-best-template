import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": path.resolve("src"),
      "comps": path.resolve("src/components"),
      "apis": path.resolve("src/services"),
      "views": path.resolve("src/views"),
      "utils": path.resolve("src/utils"),
      "routes": path.resolve("src/routes"),
      "styles": path.resolve("src/styles"),
    },
  },
  plugins: [vue()]
})