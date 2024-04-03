import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    plugins: [svelte()],
    resolve: {
      alias: {
        src: '/src',
        lib: '/src/lib'
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/scss/_variables.scss";
            @import "./src/scss/_mixins.scss";
          `,
        },
      },
      devSourcemap: config.mode === 'development',
    },
  }
})
