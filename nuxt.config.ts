// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return

      const { queryCollection } = await import('@nuxt/content/runtime')
      const posts = await queryCollection('blog').all()

      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []

      const routes = [
        '/',
        '/blog',
        '/about',
        '/projects',
        '/speaking',
        ...posts.map(post => post.path)
      ]

      nitroConfig.prerender.routes.push(...routes)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
