// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    css: [
        '~/assets/styles/global.css'
    ],
    router: { base: '/dutra-e-amaral/' },
    target: 'static'
})

