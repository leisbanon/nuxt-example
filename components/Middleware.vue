<template>
  <li>
    <h2>Middleware</h2>
    <p>Nuxt 提供中间件，用于导航到特定的路由之前执行指定的代码；</p>
    <p>路由中间件是接收当前路由（from）和下一个路由（to）作为参数的导航守卫；</p>
    <p>中间件的命令规范为 kebab-case，即小写驼峰式，myMiddleware，my-middleware；</p>

    <p>路由中间提供三种形式，分别是：</p>
    <strong>一：内联中间件（内面内定义）</strong>
    <pre>
      <code>
        // 内联中间件（定义在页面内）

        /middleware/auth.js        
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

        /pages/xxx.vue
        definePageMeta({
          middleware: 'auth',
        });
      </code>
    </pre>

    <strong>二：全局中间件（根据文件名按照字母顺序执行）</strong>
    <pre>
      <code>
        /middleware/logger.global.js
        export default defineNuxtRouteMiddleware((to, from) => {
          console.log('logger to => ', to.path);
        });
      </code>
    </pre>

    <strong>三：中间件运行时</strong>
  </li>
</template>
