<template>
  <main>
    <h1>目录结构</h1>
    <div class="plugin" id="plugin">
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
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

definePageMeta({
  middleware: 'auth',
  title: '文件目录',
});

onMounted(() => {
  console.log(route.meta);
});
</script>
