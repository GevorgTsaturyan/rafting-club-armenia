// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_URL } from './config/site'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-01',

  // Static-site generation (SSG). `ssr: true` is REQUIRED for prerendering to
  // emit real HTML — this is NOT SPA mode. `nuxt generate` prerenders every
  // route to static HTML; there is no Nitro/Node server in production.
  // Never set `ssr: false` here (that would produce an empty SPA shell).
  ssr: true,

  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],

  // Consumed by @nuxtjs/sitemap (nuxt-site-config) for absolute URLs & hreflang.
  site: {
    url: SITE_URL,
    name: 'Rafting Club Armenia'
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL, // override with NUXT_PUBLIC_SITE_URL
      gaId: '' // override with NUXT_PUBLIC_GA_ID (empty = analytics off)
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d3b47' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        // Fonts: preconnect + display=swap keeps this off the critical rendering path.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap'
        }
      ]
    }
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    baseUrl: SITE_URL,
    detectBrowserLanguage: false,
    // iso === code keeps hreflang to a single clean tag per locale
    // (en / hy / ru) instead of emitting both `hy` and `hy-AM`.
    locales: [
      { code: 'en', iso: 'en', name: 'English', file: 'en.json', dir: 'ltr' },
      { code: 'hy', iso: 'hy', name: 'Հայերեն', file: 'hy.json', dir: 'ltr' },
      { code: 'ru', iso: 'ru', name: 'Русский', file: 'ru.json', dir: 'ltr' }
    ],
    customRoutes: 'config',
    pages: {
      'rafting-in-armenia': {
        en: '/rafting-in-armenia',
        hy: '/hayastanum-rafting',
        ru: '/rafting-v-armenii'
      },
      'rafting-debed-river': {
        en: '/rafting-debed-river',
        hy: '/debed-geti-rafting',
        ru: '/rafting-na-debede'
      },
      tours: {
        en: '/rafting-tours',
        hy: '/rafting-turer',
        ru: '/rafting-tury'
      },
      prices: {
        en: '/prices',
        hy: '/gin',
        ru: '/ceny'
      },
      about: {
        en: '/about',
        hy: '/mer-masin',
        ru: '/o-nas'
      },
      contact: {
        en: '/contact',
        hy: '/kontakt',
        ru: '/kontakty'
      },
      privacy: {
        en: '/privacy-policy',
        hy: '/gaghtniutyan-kaghakakanutyun',
        ru: '/politika-konfidencialnosti'
      }
    }
  },

  sitemap: {
    // The module auto-adds hreflang alternates from the i18n config.
    autoLastmod: true,
    // Keep the redirecting root and the noindex privacy pages out of the sitemap.
    exclude: [
      '/*/privacy-policy',
      '/*/gaghtniutyan-kaghakakanutyun',
      '/*/politika-konfidencialnosti'
    ]
  },

  nitro: {
    // Emit the static site to `dist/` (instead of the default `.output/public`)
    // so the build maps directly to Cloudflare Pages' output directory.
    output: {
      publicDir: 'dist'
    },
    prerender: {
      crawlLinks: true,
      // Locale roots are the crawl entry points; the bare "/" is handled by
      // public/_redirects (Cloudflare/Netlify) and public/index.html (fallback).
      routes: ['/en', '/hy', '/ru'],
      failOnError: false
    }
  },

  experimental: {
    payloadExtraction: true
  }
})
