// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@vite-pwa/nuxt',
  ],
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  experimental: {
    typedPages: true,
    // viewTransition: true,
    // renderJsonPayloads: true,
    // componentIslands: true,
    // allows client components to be interactive inside server components. not yet ready... very buggy
    // https://nuxt.com/docs/guide/directory-structure/components#client-components-within-server-components
    // componentIslands: {
    //   selectiveClient: true,
    // },
    // noVueServer: true,
  },

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },

  // colorMode: { classSuffix: '' },
  css: ['@/assets/styles/global.css'],

  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    // injectRegister: 'auto',
    // includeAssets: ['public/favicon.ico', 'public/apple-touch-icon-180x180.png', 'public/maskable-icon-512x512.png', 'public/pwa-64x64.png', 'public/pwa-192x192.png', 'public/pwa-512x512.png', 'public/android-chrome-512x512.png'],
    // registerWebManifestInRouteRules: true,
    manifest: {
      name: 'Vuxt Feature Test',
      short_name: 'VFT',
      description: 'Vuxt Feature Test',
      // start_url: '/',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      // this is needed to build or it gives an error
      // navigateFallback: null,
      // sourcemap: true
    },
    // client: {
    //   installPrompt: true,
    // },
    devOptions: {
      enabled: true,
      suppressWarnings: false,
      // navigateFallback: '/',
      // navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  compatibilityDate: '2025-01-22',
})
