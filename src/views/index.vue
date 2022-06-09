<template>
  <Navbar />
  <div class="bg-background main" />

  <ToolbarMobile class="md:hidden" />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import ToolbarMobile from "../components/MobileToolbar.vue";
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 65px);
  margin-top: 65px;
}
</style>