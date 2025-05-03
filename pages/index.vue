<template>
  <div>
    <el-button type="primary" size="default" @click="$router.push('/catalog')">跳转到目录</el-button>
  </div>
</template>

<script setup>
const router = useRouter();
const routes = router.getRoutes();

console.log(routes);

// let v = import.meta.glob('/pages/*', { eager: true });
// console.log('a => ', v);
</script>
