// https://nuxt.com/docs/api/configuration/nuxt-config
const defaultTheme = require('tailwindcss/defaultTheme')
export default defineNuxtConfig({
  app: {
    buildAssetsDir: 'static-assets',
    rootId: 'fountains-neighborhood',
    pageTransition: true,
    layoutTransition: true,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: {
        class:
          'dark h-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100',
      },
      bodyAttrs: {
        class: 'h-full bg-slate-50 dark:bg-slate-950 relative',
      },
      link: [
        {
          rel: 'preconnect',
          crossorigin: 'anonymous',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
        {
          rel: 'stylesheet',
          crossorigin: 'anonymous',
          href: 'https://rsms.me/inter/inter.css',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      title: 'Fountains Neighborhood - Las Vegas, NV',
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  tailwindcss: {
    cssPath: '~/assets/main.css',
    config: {
      jit: true,
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    },
  },
})
