<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
const count = ref(1);
console.log("a => ", count.value);

onMounted(() => {
  console.log("A...");
});

// console.log("b => ", Proxy);
</script>
