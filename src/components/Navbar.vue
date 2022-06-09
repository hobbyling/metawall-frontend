<template>
  <div
    class="
      bg-white
      h-[65px]
      w-full
      flex
      items-center
      justify-between
      px-5
      fixed
      top-0
      md:h-[77px]
    "
  >
    <img src="/src/assets/metawall.png" alt="logo" class="h-[42px]" />
    <div class="items-center justify-between hidden w-1/2 h-full md:flex">
      <div class="relative h-full flex justify-center items-center w-1/3">
        <icon name="home" color="pink" />
        <div class="h-px w-full bg-title absolute bottom-0"></div>
      </div>
      <div class="relative h-full flex justify-center items-center w-1/3">
        <icon name="hot" />
        <div class="h-px w-full bg-title absolute bottom-0 opacity-0"></div>
      </div>
      <div class="relative h-full flex justify-center items-center w-1/3">
        <icon name="time-sort" />
        <div class="h-px w-full bg-title absolute bottom-0 opacity-0"></div>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <icon name="search" />
      <icon name="add" class="ml-5" />
      <div class="rounded w-6 h-6 bg-secondary ml-5" />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>