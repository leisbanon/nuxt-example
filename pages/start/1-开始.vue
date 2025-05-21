<template>
  <div>
    <ul>
      <li>
        <strong>Nuxt：</strong>
        <p>https://nuxt.zhcndoc.com/docs/getting-started/introduction</p>
      </li>

      <li>
        <strong>资源管理</strong>
        <p>/public：应用程序公开可用的静态资源公共，服务在服务器的根目录，如放js，img 静态资源</p>
        <p>/assets：目录于应用程序构建时处理的资源，如 CSS 文件</p>
      </li>

      <li>
        <strong>路由</strong>
        <p>https://nuxt.zhcndoc.com/docs/getting-started/routing</p>
        <p>跳转：NuxtLink，a 标签；navigateTo 函数</p>
        <p>路由中间件（路由守卫）：defineNuxtRouteMiddleware</p>
      </li>

      <li>
        <strong>SEO和元数据</strong>
        <p>SEO：useSeoMeta({ ... })</p>
        <p>路由元数据：definePageMeta({ ... })</p>
        <p>页面 head 标签：useHead({ ... })</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  name: '开始',
});

useSeoMeta({
  title: '开始',
});
</script>
