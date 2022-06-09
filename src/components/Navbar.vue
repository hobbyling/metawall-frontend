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
      <div
        v-for="i in tabs.length"
        :key="'tab-' + i"
        class="
          relative
          h-full
          flex
          justify-center
          items-center
          w-1/3
          cursor-pointer
        "
        :class="{ active: activeTab === tabs[i - 1] }"
        @click="activeTab = tabs[i - 1]"
      >
        <icon
          :name="tabs[i - 1]"
          :color="activeTab === tabs[i - 1] ? '#FF9A9E' : ''"
        />
        <div class="h-px w-full bg-primary-500 absolute bottom-0 opacity-0" />
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
import { reactive, ref } from "@vue/reactivity";

const tabs = ref(["home", "hot", "time"]);

const activeTab = ref("home");
</script>

<style lang="scss" scoped>
.active {
  div {
    opacity: 1;
  }
}
</style>