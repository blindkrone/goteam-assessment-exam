export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { hid: 'robots', name: 'robots', content: 'nofollow, noindex' } // Global Prevent SEO Crawlers
      ],
    }
  },
  css: [
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables";'
        }
      }
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
})
