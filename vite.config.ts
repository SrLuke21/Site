import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  // Ajusta os caminhos dos arquivos para funcionarem no GitHub Pages
  base: '/Site/', 
  css: {
    preprocessorOptions: {
      scss: {
        // Permite usar as variáveis globais em qualquer arquivo scss automaticamente
        additionalData: `@import "./src/styles/tokens.scss";`
      }
    }
  }
})
