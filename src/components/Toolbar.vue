<template>
  <div
    class="
      bg-white
      h-[54px]
      w-full
      flex
      items-center
      justify-between
      px-5
      fixed
      bottom-0
    "
  >
    <div
      v-for="i in tabs.length"
      :key="'tool-bar-' + i"
      @click="activeTab = tabs[i - 1]"
      class="cursor-pointer"
    >
      <icon
        :name="tabs[i - 1]"
        class="w-6 h-6"
        :color="activeTab === tabs[i - 1] ? '#FF9A9E' : ''"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const tabs = ref(["home", "hot", "time", "user"]);

const activeTab = ref("home");
</script>

<style lang="scss" scoped>
</style>