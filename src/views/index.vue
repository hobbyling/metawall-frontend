<template>
  <Navbar />
  <div class="bg-background main" />

  <Toolbar class="md:hidden" />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Toolbar from "../components/Toolbar.vue";
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 65px);
  margin-top: 65px;
}
</style>