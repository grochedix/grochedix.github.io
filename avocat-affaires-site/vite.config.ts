import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const slug = 'avocat-affaires-site'

export default defineConfig({
  plugins: [react()],
  base:
    process.env.GITHUB_PAGES === 'true' ? `/projets/${slug}/` : '/',
})
