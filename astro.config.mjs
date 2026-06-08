import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
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
        '~': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
