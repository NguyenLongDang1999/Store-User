
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n',
        'nuxt-icons'
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.ts'
            },
            {
                code: 'vi',
                file: 'vi-VN.ts'
            }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'vi',
        vueI18n: {
            fallbackLocale: 'vi'
        },
        customRoutes: 'config',
        pages: {
            'about/index': {
                en: '/about',
                vi: '/gioi-thieu'
            },
            'contact/index': {
                en: '/contact',
                vi: '/lien-he'
            }
        }
    },
    image: {
        dir: 'assets/images'
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    googleFonts: {
        prefetch: true,
        preconnect: true,
        families: {
            'IBM Plex Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    }
})
