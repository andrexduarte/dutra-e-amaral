// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    css: [
        '~/assets/styles/global.css'
    ],

    target: 'static' // default is 'server'
})

