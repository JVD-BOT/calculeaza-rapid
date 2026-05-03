import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// build.target is set to chrome74 so react-snap's bundled Chromium can execute the JS
export default defineConfig({
        plugins: [react()],
        build: {
                  target: 'chrome74',
        },
})
