import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  // Ajusta os caminhos dos arquivos para funcionarem dentro do domínio do GitHub Pages
  base: '/NOME_DO_SEU_REPOSITORIO/', 
  styles: {
    preprocessorOptions: {
      scss: {
        // Permite usar as variáveis globais em qualquer arquivo scss automaticamente
        additionalData: `@import "./src/styles/tokens.scss";`
      }
    }
  }
})
