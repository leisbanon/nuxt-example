<template>
  <el-button type="primary" size="default">{{ text }}</el-button>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

defineProps(['text']);
</script>
