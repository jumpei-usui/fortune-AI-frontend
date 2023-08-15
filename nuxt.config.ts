// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify"],
  runtimeConfig: {
    public: {
      REGION: process.env.REGION,
      USER_POOL_ID: process.env.USER_POOL_ID,
      USER_POOL_WEB_CLIENT_ID: process.env.USER_POOL_WEB_CLIENT_ID,
      DOMAIN: process.env.DOMAIN,
      REDIRECT_SIGN_IN: process.env.REDIRECT_SIGN_IN,
      REDIRECT_SIGN_OUT: process.env.REDIRECT_SIGN_OUT,
    },
  },
  vite: {
    define: {
      "window.global": {},
    },
  },
});
