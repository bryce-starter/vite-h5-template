import path from 'node:path'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import viewport from 'postcss-mobile-forever'
import { createVitePlugins } from './build/vite'

export default defineConfig({
  server: {
    host: true,
    port: 3333,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: createVitePlugins(),

  css: {
    postcss: {
      plugins: [
        autoprefixer(),

        // https://github.com/wswmsword/postcss-mobile-forever
        viewport({
          appSelector: '#app',
          viewportWidth: 375,
          maxDisplayWidth: 600,
          rootContainingBlockSelectorList: [
            'van-tabbar',
            'van-popup',
          ],
        }),
      ],
    },
  },

  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 2048,
  },
})
