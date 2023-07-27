// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    app: {
        baseURL: '/dutra-e-amaral/' // baseURL: '/<repository>/'
    },
    components: true,
    css: [
        '~/assets/font-awesome-4.7.0/css/font-awesome.min.css',
        '~/assets/styles/global.css',
    ]
})
