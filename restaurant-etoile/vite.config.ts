import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const slug = 'restaurant-etoile'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.GITHUB_PAGES === 'true' ? `/projets/${slug}/` : '/',
})
