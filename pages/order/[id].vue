<template>
  <main>这是第{{ route.params.id }}个订单</main>

  <button @click="onhref">跳转</button>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// 路由验证，返回 false，则是404
definePageMeta({
  validate: (route) => {
    return true;
  },
});

// Refs

// Props

// Data

// Methods
const onhref = () => {
  router.push("/guide");
};
</script>
