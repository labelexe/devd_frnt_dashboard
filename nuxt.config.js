export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DavDam',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    script: [
      // {src: "https://cdn.jsdelivr.net/npm/eruda@3.0.1/eruda.min.js", async: true}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-good-table', ssr: false},
    {src: '~/plugins/auth', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    '@nuxtjs/toast',
    // '@nuxt/ui'
  ],

  toast: {
    position: 'top-center',
    duration: 2000,
    theme: "bubble",
    closeOnSwipe: true,
    fitToScreen: true,
  },


  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://davdam.ecorp.fun/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    },
    icon: {
      /* icon options */
    },
    meta: {
      /* meta options */
      mobileApp: true,
      mobileAppIOS: true,
      nativeUI: true
    }
  },

  tailwindcss: {
    // Options
  },

  // Or with dynamic configuration variables passed via lodash template syntax
  loading: "~/components/LoadingBar.vue",

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 3100
  }
}
