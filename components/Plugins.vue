<template>
  <li>
    <h2>Plugins：</h2>
    <p><a target="_blank" href="https://nuxt.com/docs/guide/directory-structure/plugins">https://nuxt.com/docs/guide/directory-structure/plugins</a></p>
    <p>Nuxt 会自动读取 Plugins 目录中的文件，并在创建 Vue 应用时加载他们；（plugin/scroll.js）</p>
    <p>只有目录的顶层文件，或者子目录中的索引文件才会被注册为插件；（plugins/player/index.js）</p>
    <p class="mb-[12px]">传递给插件的唯一参数是 nuxtApp</p>

    <div>
      <span class="mr-[12px]">点击防抖（Plugin）</span>
      <el-button v-debounce:300.begin="test__debounce" class="mr-[80px]" type="primary" size="default">测试 - debounce</el-button>
    </div>
  </li>
</template>

<script>
const test__debounce = () => {
  console.log('test__debounce...');
};
</script>
