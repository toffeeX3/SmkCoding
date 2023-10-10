// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@vite-pwa/nuxt"],


  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pwa: {
    manifest: {
      name: "feli yay",
      short_name: "feli",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "ely.png",
          sizes: "500x500",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
  


})
