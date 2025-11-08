import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/simpleReact_demo/',
  plugins: [react(),
    tailwindcss()
  ]

  //use state,use cntext,use effect,
})
