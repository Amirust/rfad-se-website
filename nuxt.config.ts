// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: 'transition-page', mode: 'out-in' },
    layoutTransition: { name: 'transition-page', mode: 'out-in' },
  },

  css: ['~/assets/css/global.scss'],
  modules: ['@nuxtjs/i18n', '@hypernym/nuxt-anime'],

  $production: {
    nitro: {
      preset: 'github_pages',
    },
    routeRules: {
      '/': { prerender: true },
    },
  },

  vite: {
    server: {
      allowedHosts: ['test2.rinisle.uk'],
    },
  },
})
