import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [legacy(), react()],
})