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
      },
      modulePreload: {
        resolveDependencies(url, deps) {
          const nonHomepageSpreads = [
            "photography",
            "about-me",
            "contact",
            "graphic-design",
            "illustration",
            "double-indemnity",
            "human-rights",
            "kill-them-with-kindness",
            "kreativ-festival-art-direction",
            "sjecas-li-se-doli-bel",
            "chippsters-logo",
            "mountain-fairy",
            "austen-in-watercolor",
            "mural"
          ];
          return deps.filter(dep => {
            if (dep.includes("vendor-lottie")) return false;
            const filename = dep.split('/').pop() || '';
            const isOtherSpread = nonHomepageSpreads.some(spread => filename.startsWith(spread));
            return !isOtherSpread;
          });
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
