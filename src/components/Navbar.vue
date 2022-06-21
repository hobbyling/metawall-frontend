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
      z-30
    "
  >
    <router-link to="/">
      <img src="/src/assets/metawall.png" alt="logo" class="h-[42px]" />
    </router-link>
    <div class="items-center justify-between hidden w-1/2 h-full lg:flex">
      <router-link
        v-for="(item, key) in tabs"
        :key="`tabs-${key}`"
        :to="item.link"
        class="
          relative
          h-full
          flex
          justify-center
          items-center
          w-1/3
          cursor-pointer
        "
        :class="{ active: tabMain === item.icon }"
        @click.native="switchTabMain(item.icon)"
      >
        <icon
          :name="item.icon"
          :class="[
            'hover:text-primary-500',
            {
              'text-primary-500': tabMain === item.icon,
              'text-title-300': tabMain !== item.icon,
            },
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
      </router-link>
    </div>
    <div class="flex items-center justify-end">
      <Searchbar />
      <icon name="add" class="ml-5 cursor-pointer" @click="openModalPost()" />
      <div class="rounded w-6 h-6 bg-secondary ml-5" />
    </div>
  </div>
</template>

<script setup>
import Searchbar from "./Searchbar.vue";
import { storeToRefs } from "pinia";
import { reactive, ref } from "@vue/reactivity";
import modalStore from "./../stores/modalStore";
import tabStore from "./../stores/tabStore";
const modal = modalStore();
const tab = tabStore();
const { openModalPost } = modal;
const { switchTabMain } = tab;
const { tabMain } = storeToRefs(tab);

const tabs = ref([
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "hot",
    link: "/hot",
  },
  {
    icon: "time",
    link: "/old",
  },
]);
</script>

<style lang="scss" scoped>
.active {
  div {
    opacity: 1;
  }
}
</style>