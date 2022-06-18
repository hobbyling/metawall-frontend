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
      lg:h-[77px]
    "
  >
    <img src="/src/assets/metawall.png" alt="logo" class="h-[42px]" />
    <div class="items-center justify-between hidden w-1/2 h-full lg:flex">
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
          :class="[
            'hover:text-primary-500',
            { 'text-primary-500': activeTab === tabs[i - 1] },
          ]"
        />
        <div
          class="
            h-px
            w-full
            bg-primary-500
            absolute
            bottom-0
            opacity-0
            ease-in
            duration-200
          "
        />
      </div>
    </div>
    <div class="flex items-center justify-end">
      <icon name="search" />
      <icon name="add" class="ml-5 cursor-pointer" @click="openModalPost()" />
      <div class="rounded w-6 h-6 bg-secondary ml-5" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import modalStore from "./../stores/modalStore";
const modal = modalStore();
const { openModalPost } = modal;

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