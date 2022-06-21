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
    <router-link
      v-for="(item, key) in tabs"
      :key="'tool-bar-' + key"
      :to="item.link"
      @click.native="switchTabMain(item.icon)"
    >
      <icon
        :name="item.icon"
        class="w-6 h-6"
        :class="[
          'hover:text-primary-500',
          {
            'text-primary-500': tabMain === item.icon,
            'text-title-300': tabMain !== item.icon,
          },
        ]"
      />
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import tabStore from "./../stores/tabStore";
const tab = tabStore();
const { switchTabMain } = tab;
const { tabMain } = storeToRefs(tab);

const router = useRouter();
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
</style>