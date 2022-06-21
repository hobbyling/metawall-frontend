<template>
  <div class="flex p-1 relative">
    <div
      class="ease-in duration-150 absolute right-7 bg-title-300 p-1"
      :class="{ 'w-20': active, 'w-0': !active }"
    >
      <input type="text" class="w-full" />
    </div>
    <icon name="search" class="cursor-pointer" @click="active = !active" />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const active = ref(false);
</script>

<style lang="scss" scoped>
</style>