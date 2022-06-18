<template>
  <div class="container grid grid-cols-4 gap-4">
    <Sidebar class="hidden lg:block" />
    <div class="col-start-1 col-span-5 lg:col-start-2 lg:col-span-2">
      <AddPost
        class="
          mb-8
          hidden
          cursor-pointer
          transition
          duration-150
          ease-in-out
          lg:flex
        "
        @click="openModalPost"
      />
      <Card />
    </div>

    <Followers class="hidden lg:block" />

    <div class="hidden lg:block"></div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Followers from "./Followers.vue";
import AddPost from "./AddPost.vue";
import Card from "./Card.vue";
import modalStore from "../stores/modalStore";
const modal = modalStore();
const { openModalPost } = modal;
</script>

<style lang="scss" scoped>
</style>