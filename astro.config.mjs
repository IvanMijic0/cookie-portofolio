import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [preact({
    compat: true
  })],
  vite: {
    ssr: {
      noExternal: [
        'react-pageflip',
        'page-flip',
        'lottie-react',
        'yet-another-react-lightbox',
        'framer-motion',
        'motion'
      ]
    },
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 50000
        }
      }
    },
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        'react': 'preact/compat',
        'react-dom/test-utils': 'preact/compat/test-utils',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/compat/jsx-runtime'
      }
    }
  }
});
