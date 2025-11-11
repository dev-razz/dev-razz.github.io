import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so built assets use relative paths.
  // This makes the `dist` output work when opened via file:// as well as when served.
  base: './',
})
