<template>
  <div>
    <h3>Nuxt 生命周期</h3>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

let { data } = await useAsyncData("key", () => {
  return "123456";
});

console.log("a => ", data.value);

// Refs

// Props

// Data

// Methods
</script>
