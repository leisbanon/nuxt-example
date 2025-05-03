// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  css: ['~/assets/css/main.css', '~/assets/css/common.scss'],
  elementPlus: {
    // icon: "ElIcon",
    importStyle: 'scss',
    // themes: ["dark"],
  },
});
