<template>
  <nav>
    <ol>
      <li>指南</li>
      <li>配置</li>
      <li>路由</li>
      <li>API</li>
    </ol>
  </nav>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(route);
});
</script>

<style scoped lang="less">
ol {
  width: 180px;
  border-right: 1px #ddd solid;
  li {
    border-bottom: 1px #ddd solid;
    height: 44px;
    line-height: 44px;
    padding-left: 12px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #ddd;
    }
  }
}
</style>
