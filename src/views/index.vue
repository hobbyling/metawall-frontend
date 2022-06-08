<template>
  <NavbarMobile class="md:hidden" />
  <Header class="hidden md:block" />
  <div class="bg-background main" />

  <ToolbarMobile class="md:hidden" />
</template>

<script setup>
import NavbarMobile from "../components/MobileNavbar.vue";
import ToolbarMobile from "../components/MobileToolbar.vue";
import Header from "../components/Header.vue";
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 65px);
  margin-top: 65px;
}
</style>