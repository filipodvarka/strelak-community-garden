import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

// const apiBaseUrl = 'http://localhost:3001'
// const apiBaseUrl = 'https://movies-proxy.vercel.app'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase'
  ],
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true
  },
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
