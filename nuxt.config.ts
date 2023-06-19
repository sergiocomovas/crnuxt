// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    config: {
      brand: {
        primary: "#1976d2",
        secondary: "#26A69A",
        accent: "#9C27B0",
        positive: "#21BA45",
        warning: "#F2C037"
      },
    },
  },
});
