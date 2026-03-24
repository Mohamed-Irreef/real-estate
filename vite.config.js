import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',   // ✅ FIXED
  build: {
    outDir: 'docs',   // cleaner (no ./)
    rollupOptions: {
      input: {
        main: './index.html',
        viewer: './propertyviewer.html',
        vtour: './vtour.html',
      }
    }
  }
})