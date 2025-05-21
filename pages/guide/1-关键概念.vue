<template>
  <ul>
    <li>
      <strong>关键概念</strong>
      <p><a href="https://nuxt.zhcndoc.com/docs/guide/concepts/auto-imports#vue-和-nuxt-组合函数" target="_blank">https://nuxt.zhcndoc.com/docs/guide/concepts/auto-imports#vue-和-nuxt-组合函数</a></p>
      <p>基于目录的自动导入：</p>
      <p>组件 => components</p>
      <p>vue 组合项 => composables</p>
      <p>工具 => utils</p>

      <pre>
        <code>
        const name = ref('Leisbanon');
        console.log('a => ', name);
        </code>
      </pre>
    </li>

    <li>
      <strong>Utils</strong>
      <p>函数节流（Utils）</p>
      <div class="bg-gray-200 w-[300px] h-[100px] rounded-[12px] text-center leading-[100px] text-[18px]" @mousemove="test__throttle">{{ form.clientX }}</div>
      <pre>
        <code>
          // utils/index.js
          export function throttle(func, delay) {
            ...
          }

          // .Vue
          const test__throttle = throttle((e) => {
            form.clientX = e.clientX;
          }, 100);
        </code>
      </pre>
    </li>

    <li>
      <strong> 生命周期 - 浏览器 </strong>
      <p><a href="https://nuxt.zhcndoc.com/docs/guide/concepts/nuxt-lifecycle" target="_blank">https://nuxt.zhcndoc.com/docs/guide/concepts/nuxt-lifecycle</a></p>
      <ul class="mt-[12px]">
        <li>初始化 Nuxt 并支持 Nuxt 应用程序插件（Plugins）https://nuxt.com/docs/guide/directory-structure/plugins</li>
        <li>路由验证</li>
        <li>执行 Nuxt 应用程序中间件（Middleware）https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs</li>
        <li>Mount Vue Application，挂载 Vue 应用程序到 DOM</li>
        <li>Vue 生命周期，浏览器将执行完成的 Vue 生命周期</li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
definePageMeta({
  name: '关键概念',
});

useSeoMeta({
  title: '关键概念',
});

const u = userInfo();
console.log('u => ', u);

const form = reactive({
  clientX: null,
});

const test__throttle = throttle((e) => {
  form.clientX = e.clientX;
}, 100);
</script>
