// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  css: ['~/assets/css/main.css', '~/assets/css/common.scss'],
  elementPlus: {
    // icon: 'ElIcon',
    importStyle: 'scss',
    // themes: ["dark"],
  },
  app: {
    baseURL: '/nuxt3-example/',
    head: {
      title: 'Nuxt Example',
      charset: 'utf-18',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'zh',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    // 页面过渡
    pageTransition: {
      // name: 'page',
      // mode: 'default',
    },
  },
  ssr: false,
  router: {
    base: '/nuxt3-example/',
  },
});
