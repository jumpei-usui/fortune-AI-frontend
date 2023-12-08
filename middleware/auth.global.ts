import { getCurrentUser } from "aws-amplify/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    await getCurrentUser();
  } catch {
    if (to.path !== "/" && to.path !== "/test") {
      return navigateTo("/");
    }
  }
});
