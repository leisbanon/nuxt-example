<template>
  <main>
    <h1>关键概念</h1>
    <p class="text-blue-500">基于目录的自动导入：</p>
    <ul>
      <li>组件 => components</li>
      <li>vue 组合项 => composables</li>
      <li>工具 => utils</li>
    </ul>

    <pre>
      const name = ref('Leisbanon');
      console.log('a => ', name);
    </pre>

    <div class="flex flex-col mt-[12px]">
      <span class="mr-[12px]">函数节流（Utils）</span>
      <div class="bg-gray-200 w-[300px] h-[100px] rounded-[12px] text-center leading-[100px] text-[18px]" @mousemove="test__throttle">{{ form.clientX }}</div>
    </div>

    <p class="text-blue-500 mt-[30px]">生命周期 - 浏览器</p>
    <ul>
      <li>初始化 Nuxt 并支持 Nuxt 应用程序插件（Plugins）https://nuxt.com/docs/guide/directory-structure/plugins</li>
      <li>路由验证</li>
      <li>执行 Nuxt 应用程序中间件（Middleware）https://nuxt.com/docs/guide/directory-structure/middleware#when-middleware-runs</li>
      <li>Mount Vue Application，挂载 Vue 应用程序到 DOM</li>
      <li>Vue 生命周期，浏览器将执行完成的 Vue 生命周期</li>
    </ul>
  </main>
</template>

<script setup>
const u = userInfo();
console.log('u => ', u);

// Data
const form = reactive({
  clientX: null,
});

// Methods
const test__throttle = throttle((e) => {
  form.clientX = e.clientX;
}, 100);
</script>
