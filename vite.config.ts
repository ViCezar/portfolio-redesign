import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-redesign/', // 👉 nome do seu repositório aqui
  plugins: [react()],
})
