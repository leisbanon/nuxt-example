<template>
  <div class="layout flex flex-col">
    <!-- <AppHeader /> -->

    <div class="content flex flex-1">
      <!-- <AppNavigation /> -->

      <div class="py-[12px] px-[24px] flex-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}
</style>
