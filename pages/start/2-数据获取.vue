<template>
  <div>
    <ul>
      <li>
        <strong>数据获取</strong>
        <p class="mb-[12px]">Nuxt 自带两个组合项和一个内置库，用于在浏览器和服务器环境的数据获取，分别是 useFetch、useAsyncData 和 $fetch；</p>
        <p>简单来说：</p>
        <p>$fetch：是发出网路请求最简单的办法，是对原生 fetch 封装，使用场景在如手动控制请求时机，例如点击事件后；</p>
        <p>useFetch：专门为 Nuxt 组件设计，提供组件在服务器渲染请求的 Hook，使用场景在组件中直接获取数据，自动处理 SSR 网页数据；</p>
        <p>useAsyncData：是为提供异步数据管理的 Hook，特点其不限制数据来源，可以是 $fetch，获取数据库查询或者其他异步操作；使用场景在需要组合多个数据源，或者存在异步逻辑数据时；</p>

        <hr />
        <el-button type="primary" size="default" @click="onFetch">$fetch 请求</el-button>
        <p>用户信息：{{ userinfo }}</p>

        <pre>
          <code>
            // useFetch
            const { data } = await useFetch('/api/getUserInfo');
            userinfo.value = data.value;

            // $fetch
            const onFetch = async () => {
              await $fetch('http://127.0.0.1:9000/');
            };
          </code>
        </pre>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  name: '数据获取',
});

useSeoMeta({
  title: '数据获取',
});

const userinfo = ref({});

const { data } = await useFetch('/api/getUserInfo');
userinfo.value = data.value;

// Methods
const onFetch = async () => {
  await $fetch('http://127.0.0.1:9000/');
};
</script>
