import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true // Opens the project's root path
    // open: '/index.html' // Opens the index.html file
  }
})