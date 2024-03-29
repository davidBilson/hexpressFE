import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // env variables from .env file
    "process.env.VITE_GOOGLE_CLIENT_ID": JSON.stringify(process.env.VITE_GOOGLE_CLIENT_ID)
  },
  css: {
    modules: true,
  },
})
