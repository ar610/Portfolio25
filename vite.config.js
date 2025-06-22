import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cedarville': ['Cedarville Cursive', 'cursive'],
        'syne': ['Syne', 'sans-serif'], // Add Syne font family
        'mona-sans': ['"Mona Sans"', 'sans-serif'], // Add Mona Sans font family
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})