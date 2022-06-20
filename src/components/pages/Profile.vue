<template>
  <div class="container flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
    <div
      class="
        bg-white
        rounded-2xl
        py-4
        px-6
        h-fit
        w-full
        flex flex-col
        justify-center
        items-center
      "
    >
      <div
        class="
          flex flex-col
          justify-center
          items-center
          lg:flex-row lg:items-center lg:justify-start
        "
      >
        <div class="h-16 w-16 bg-secondary rounded-full" />
        <div
          class="lg:flex lg:flex-col lg:items-start lg:justify-center lg:ml-7"
        >
          <div
            class="text-xl text-title-500 flex justify-center items-center mt-4"
          >
            <span class="mr-3">Karim Saif</span>
            <icon
              name="edit"
              class="text-xs cursor-pointer"
              :class="'text-primary-500 hover:text-primary-700'"
            />
          </div>
          <div class="text-xs text-title-300 mt-2 mb-6">
            An ask joined from 2022.05.01
          </div>
        </div>
      </div>
      <div class="w-full h-full flex flex-row justify-evenly">
        <div class="flex flex-col items-center flex-1">
          <span class="text-xl text-title-500 font-medium">324</span>
          <span class="text-sm text-title-300">post</span>
        </div>
        <div class="w-px h-12 bg-title-300" />
        <div class="flex flex-col items-center flex-1">
          <span class="text-xl text-title-500 font-medium">324</span>
          <span class="text-sm text-title-300">following</span>
        </div>
        <div class="w-px h-12 bg-title-300" />
        <div class="flex flex-col items-center flex-1">
          <span class="text-xl text-title-500 font-medium">324</span>
          <span class="text-sm text-title-300">follow</span>
        </div>
      </div>
      <button class="btn mt-6" type="button">Follow</button>
    </div>
    <div
      class="
        bg-white
        rounded-2xl
        overflow-hidden
        grid grid-cols-3
        h-[75px]
        my-5
        lg:mt-0
      "
    >
      <router-link
        v-for="(item, key) in tabs"
        :key="`tabs-${key}`"
        :to="item.link"
        class="flex justify-center items-center py-4 ease-in duration-200"
        :class="{
          active: activeTab === item.link,
          'text-white': activeTab === item.link,
          'text-title-500': activeTab !== item.link,
        }"
        @click.native="activeTab = item.link"
      >
        <icon
          :name="item.icon"
          :class="[
            'hover:text-secondary',
            {
              'text-white': activeTab === item.link,
              'text-title-500': activeTab !== item.link,
            },
          ]"
        />
        <span class="ml-3">{{ item.name }}</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const activeTab = ref("posts");

const tabs = ref([
  {
    icon: "post",
    name: "Posts",
    link: "posts",
  },
  {
    icon: "love",
    name: "Likes",
    link: "likes",
  },
  {
    icon: "star",
    name: "Followings",
    link: "followings",
  },
]);
</script>

<style lang="scss" scoped>
.active {
  @apply bg-secondary;
}
</style>