// Nuxt 3 host config for this polyglot template (Vue analogue of stack/next).
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Polyglot App Template',
      meta: [
        {
          name: 'description',
          content: 'Polyglot App Template — Nuxt surface (Vue host / multi-framework demos)',
        },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  dir: {
    pages: 'pages',
  },
});
