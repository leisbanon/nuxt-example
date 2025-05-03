export default defineNuxtRouteMiddleware((to, from) => {
  console.log('logger to => ', to.path);
});
