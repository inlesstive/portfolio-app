// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  devtools: { enabled: true },
  // build: {
  //   transpile: ["gsap"],
  // },
});