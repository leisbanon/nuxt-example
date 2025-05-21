<template>
  <div class="layout flex flex-col">
    <div class="content flex flex-1 overflow-hidden">
      <nav class="flex flex-col w-[180px]">
        <el-menu :unique-opened="false" default-active="0-0">
          <el-sub-menu v-for="(key, index) of Object.keys(routeMap)" :index="index" :key="`i1_${index}`">
            <template #title>
              <span>{{ title[key] }}</span>
            </template>
            <el-menu-item-group v-for="(item, index2) of routeMap[key]" :key="`i2_${index2}`">
              <el-menu-item :index="`${index}-${index2}`" @click="navigateTo(item.path, { external: true })">
                {{ item.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-menu-item index="10" @click="navigateTo('/nuxtConfig', { external: true })">
            <span>Nuxt 配置</span>
          </el-menu-item>
        </el-menu>
      </nav>

      <main class="py-[12px] px-[24px] flex-1 overflow-auto">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const routes = router.getRoutes().reverse();
console.log('routes => ', routes);

const routeMap = new Object();
routes.forEach((route) => {
  let { path, name, meta } = route;
  let params = { path, name, meta };
  let [p1, p2, p3] = path.split('/');

  if (p2 && p3) {
    if (routeMap[p2]) {
      routeMap[p2].unshift(params);
    } else {
      routeMap[p2] = new Array(params);
    }
  }
});

console.log('routeMap => ', routeMap);

// Data

// Methods
const title = {
  start: '开始使用',
  guide: '指南',
  api: 'API相关',
};
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}
</style>
