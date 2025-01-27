import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxt/image'
  ],
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  colorMode: {
    preference: 'light'
  },
  routeRules: {
    '/**': isDev ? {} : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } }
  },
  runtimeConfig: {
    public: {
      // apiBaseUrl,
    }
  },
  devtools: {
    enabled: true
  },
  // image: {
  //     provider: 'proxy',
  //     providers: {
  //         proxy: {
  //             provider: 'ipx',
  //             options: {
  //                 // baseURL: `${apiBaseUrl}/ipx`,
  //             },
  //         },
  //     },
  // },
  googleFonts: {
    display: 'swap',
    families: {
      Barrio: true,
      Poppins: {
        wght: [200, 400],
        ital: [400]
      }
    }
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'cs'
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'cs',
        name: 'Čeština',
        file: 'cs.json'
      }
    ],
    lazy: true,
    langDir: 'i18n',
    defaultLocale: 'cs'
  },
  supabase: {
    redirect: false
  },
  nitro: {
    routeRules: {
      '/**': { isr: false }
    }
  }
})