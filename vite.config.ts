import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "wedding-wishes",
  plugins: [react()],
})
