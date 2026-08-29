export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
  head: {
    htmlAttrs: {
      lang: 'en'
    },

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],

    meta: [
      {
        name: 'theme-color',
        content: '#ffffff'
      },

      {
        name: 'description',
        content:
          'Luxury lash extensions, lash lift, brow lamination and professional brow design in Montréal.'
      },

      {
        property: 'og:site_name',
        content: 'Lashes & Brows Montréal'
      },

      {
        property: 'og:type',
        content: 'website'
      },

      {
        property: 'og:title',
        content: 'Lashes & Brows Montréal'
      },

      {
        property: 'og:description',
        content:
          'Personalized lash and brow artistry in Montréal.'
      },

      {
        property: 'og:url',
        content: 'https://www.lashesandbrows.ca/'
      },

      {
        property: 'og:image',
        content:
          'https://www.lashesandbrows.ca/og-image.jpg'
      },

      {
        property: 'og:image:width',
        content: '1200'
      },

      {
        property: 'og:image:height',
        content: '630'
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },

      {
        name: 'twitter:title',
        content: 'Lashes & Brows Montréal'
      },

      {
        name: 'twitter:description',
        content:
          'Personalized lash and brow artistry in Montréal.'
      },

      {
        name: 'twitter:image',
        content:
          'https://www.lashesandbrows.ca/og-image.jpg'
      }
    ]
  }
},

  routeRules: {
    '/': { prerender: true },
    '/es': { prerender: true }
  },

  nitro: {
    prerender: {
      routes: ['/', '/es']
    }
  }
})