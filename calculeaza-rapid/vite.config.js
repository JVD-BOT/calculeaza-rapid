import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
import Renderer from '@prerenderer/renderer-jsdom'

const routes = [
    '/',
    '/ghid-salariu-brut-net',
    '/ghid-pfa-taxe',
    '/ghid-credit-ipotecar',
    '/ghid-deducere-personala',
    '/despre',
    '/politica-confidentialitate',
  ]

// https://vite.dev/config/
export default defineConfig({
    plugins: [
          react(),
          prerender({
                  staticDir: 'dist',
                  routes,
                  renderer: new Renderer(),
          }),
        ],
})
