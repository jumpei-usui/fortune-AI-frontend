import { Auth } from "aws-amplify";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    await Auth.currentAuthenticatedUser();
  } catch {
    if (to.path !== "/") {
      return navigateTo("/");
    }
  }
});
