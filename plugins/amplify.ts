import { Amplify } from "aws-amplify";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: config.public.USER_POOL_ID,
        userPoolClientId: config.public.USER_POOL_WEB_CLIENT_ID,
        loginWith: {
          oauth: {
            domain: config.public.DOMAIN,
            scopes: ["email", "openid"],
            redirectSignIn: [config.public.REDIRECT_SIGN_IN],
            redirectSignOut: [config.public.REDIRECT_SIGN_OUT],
            responseType: "code",
          },
        }
      }
    },
  });
});
