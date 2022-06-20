<template>
  <Navbar />
  <div
    class="
      bg-background
      main
      px-5
      py-7
      flex
      justify-center
      h-fit
      mt-[65px]
      mb-[54px]
      lg:mb-0
    "
  >
    <router-view />
  </div>

  <NewPostModal v-if="modalPost" />

  <Toolbar class="lg:hidden lg:w-1/4" />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Toolbar from "../components/Toolbar.vue";
import NewPostModal from "../components/NewPostModal.vue";

import modalStore from "./../stores/modalStore";
import { storeToRefs } from "pinia";
const modal = modalStore();
const { modalPost } = storeToRefs(modal);
const { openModalPost } = modal;
</script>

<style lang="scss" scoped>
</style>