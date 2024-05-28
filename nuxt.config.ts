export default defineNuxtConfig({
  modules: ["nuxt-quasar-ui"],
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/test_nuxt/",
  },
  vite: {
    base: "/test_nuxt/",
  },
});
