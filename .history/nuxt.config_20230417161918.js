// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/dutra-e-amaral/' 
    },
    components: true,
    css: [
        '~/assets/styles/global.css'
    ]
})

