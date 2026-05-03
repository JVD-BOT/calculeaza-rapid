/**
 * prerender.mjs — Vite SSR pre-rendering (no Puppeteer/browser required).
 * Works in Vercel's build environment (Node.js only).
 *
 * Steps:
 * 1. vite build --ssr => builds src/entry-server.jsx to dist-ssr/
 * 2. import render() from the SSR bundle
 * 3. For each route, call render(path), inject into dist/index.html template
 * 4. Write dist/<route>/index.html
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const ssrOutDir = path.resolve(__dirname, 'dist-ssr')

const routes = [
     '/',
     '/ghid-salariu-brut-net',
     '/ghid-pfa-taxe',
     '/ghid-credit-ipotecar',
     '/ghid-deducere-personala',
     '/despre',
     '/politica-confidentialitate',
   ]

async function main() {
     // Write a test file so we can verify Vercel is serving from dist/
  fs.writeFileSync(path.resolve(distDir, 'test.txt'), 'prerender-ok', 'utf-8')
     console.log('Wrote dist/test.txt')

  // List dist/ contents for debugging
  console.log('dist/ contents before prerender:', fs.readdirSync(distDir))

  console.log('Building SSR bundle...')
     await build({
            build: {
                     ssr: 'src/entry-server.jsx',
                     outDir: 'dist-ssr',
                     rollupOptions: { output: { format: 'es' } },
            },
     })

  const entryPath = path.resolve(ssrOutDir, 'entry-server.js')
     const { render } = await import(entryPath)

  const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8')

  for (const route of routes) {
         let appHtml
         try {
                  appHtml = render(route)
         } catch (e) {
                  console.error(`Error rendering ${route}:`, e.message)
                  appHtml = ''
         }

       const html = template.replace(
                '<div id="root"></div>',
                `<div id="root">${appHtml}</div>`
              )

       let outPath
         if (route === '/') {
                  outPath = path.resolve(distDir, 'index.html')
         } else {
                  const dir = path.resolve(distDir, route.slice(1))
                  fs.mkdirSync(dir, { recursive: true })
                  outPath = path.resolve(dir, 'index.html')
         }

       fs.writeFileSync(outPath, html, 'utf-8')
         console.log(`Rendered: ${route} -> ${path.relative(distDir, outPath)}`)
  }

  fs.rmSync(ssrOutDir, { recursive: true, force: true })

  // List dist/ contents after prerender for debugging
  console.log('dist/ contents after prerender:', fs.readdirSync(distDir))

  console.log('Pre-rendering complete.')
}

main().catch((err) => {
     console.error('Pre-rendering failed:', err)
     process.exit(1)
})
