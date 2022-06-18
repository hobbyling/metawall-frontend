<template>
  <div class="bg-subbackground rounded-2xl py-4 px-6 h-fit">
    <div class="text-left mb-6 font-medium">Who is following you</div>

    <div
      class="flex items-center justify-between mb-6"
      v-for="(item, key) in list"
      :key="`follower-${key}`"
    >
      <div class="flex items-center justify-start">
        <div class="rounded-full w-10 h-10 bg-secondary" />
        <div class="ml-2.5">{{ item.name }}</div>
      </div>
      <div
        class="
          border
          rounded-lg
          border-secondary
          p-2
          text-secondary
          cursor-pointer
          ease-in
          duration-300
          text-xs
          font-semibold
          hover:bg-secondary hover:text-white
        "
      >
        Follow
      </div>
    </div>

    <div
      class="
        text-secondary
        mt-3
        text-xs
        font-semibold
        cursor-pointer
        ease-in
        duration-300
        hover:text-primary-500
      "
    >
      See More
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const list = ref([
  {
    name: "Steve Jobs",
    avatar: "",
    id: "123123123",
  },
  {
    name: "Steve Jobs2",
    avatar: "",
    id: "123123123",
  },
  {
    name: "Steve Jobs3",
    avatar: "",
    id: "123123123",
  },
]);
</script>

<style lang="scss" scoped>
</style>