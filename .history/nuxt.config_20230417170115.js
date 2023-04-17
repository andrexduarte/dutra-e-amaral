// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    app: {
        baseURL: '/dutra-e-amaral/' // baseURL: '/<repository>/'
    },
    components: true,
    css: [
        '~/assets/styles/global.css'
    ]
})
