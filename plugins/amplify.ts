import { Amplify } from "aws-amplify";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  Amplify.configure({
    Auth: {
      region: config.public.REGION,
      userPoolId: config.public.USER_POOL_ID,
      userPoolWebClientId: config.public.USER_POOL_WEB_CLIENT_ID,
      oauth: {
        domain: config.public.DOMAIN,
        scope: ["email", "openid"],
        redirectSignIn: config.public.REDIRECT_SIGN_IN,
        redirectSignOut: config.public.REDIRECT_SIGN_OUT,
        responseType: "code",
      },
    },
  });
});
