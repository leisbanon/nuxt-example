// 内联中间件（定义在页面内）
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Middleware auth to => ', to.path);
  console.log('Middleware auth from => ', from.path);

  // 中止导航
  if (false) {
    return abortNavigation('导航拦截，并抛出错误！');
  }

  // 重定向到给定的路由
  if (false) {
    return navigateTo('/guide');
  }
});
