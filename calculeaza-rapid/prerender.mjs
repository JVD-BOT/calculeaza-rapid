/**
 * prerender.mjs — SSR pre-rendering script (no Puppeteer/browser required).
  *
   * Run after `vite build`:
    *   1. Builds the SSR bundle via `vite build --ssr src/entry-server.jsx`
     *   2. Imports the bundle and calls render(path) for each route
      *   3. Injects rendered HTML into dist/index.html template
       *   4. Writes dist/<route>/index.html for each route
        *
         * Works in Vercel's build environment (Node.js only, no headless Chrome needed).
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
                          // Step 1: Build the SSR bundle
                            console.log('Building SSR bundle...')
                              await build({
                                  build: {
                                        ssr: 'src/entry-server.jsx',
                                              outDir: 'dist-ssr',
                                                    rollupOptions: { output: { format: 'es' } },
                                                        },
                                                          })

                                                            // Step 2: Load the SSR bundle
                                                              const entryPath = path.resolve(ssrOutDir, 'entry-server.js')
                                                                const { render } = await import(entryPath)

                                                                  // Step 3: Read the client-side index.html template
                                                                    const template = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8')

                                                                      // Step 4: Render each route and write the output file
                                                                        for (const route of routes) {
                                                                            let appHtml
                                                                                try {
                                                                                      appHtml = render(route)
                                                                                          } catch (e) {
                                                                                                console.error(`Error rendering ${route}:`, e.message)
                                                                                                      appHtml = ''
                                                                                                          }
                                                                                                          
                                                                                                              // Inject the server-rendered HTML into the root div
                                                                                                                  const html = template.replace(
                                                                                                                        '<div id="root"></div>',
                                                                                                                              `<div id="root">${appHtml}</div>`
                                                                                                                                  )
                                                                                                                                  
                                                                                                                                      // Write to dist/<route>/index.html (or dist/index.html for /)
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
                                                                                                                                                                                        
                                                                                                                                                                                          // Step 5: Clean up the SSR bundle
                                                                                                                                                                                            fs.rmSync(ssrOutDir, { recursive: true, force: true })
                                                                                                                                                                                            
                                                                                                                                                                                              console.log('Pre-rendering complete.')
                                                                                                                                                                                              }
                                                                                                                                                                                              
                                                                                                                                                                                              main().catch((err) => {
                                                                                                                                                                                                console.error('Pre-rendering failed:', err)
                                                                                                                                                                                                  process.exit(1)
                                                                                                                                                                                                  }
