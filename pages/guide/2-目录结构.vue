<template>
  <ul>
    <!-- 组件 -->
    <Components class="mb-[24px]" />

    <!-- 布局 -->
    <Layout />

    <!-- 中间件 -->
    <Middleware />

    <!-- 插件 -->
    <Plugins />
  </ul>
</template>

<script setup>
definePageMeta({
  name: '目录结构',
});

useSeoMeta({
  title: '目录结构',
});
</script>
