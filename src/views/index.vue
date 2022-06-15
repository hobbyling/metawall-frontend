<template>
  <Navbar />
  <div class="bg-background main px-5 py-7 flex justify-around">
    <Sidebar class="hidden lg:block lg:w-1/4" />
    <div class="lg:w-1/2">
      <AddPost class="mb-8 hidden lg:flex" />
      <Card />
    </div>

    <div class="hidden lg:block"></div>
  </div>

  <Toolbar class="lg:hidden lg:w-1/4" />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Toolbar from "../components/Toolbar.vue";
import Sidebar from "../components/Sidebar.vue";
import AddPost from "../components/AddPost.vue";
import Card from "../components/Card.vue";
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 65px);
  margin-top: 65px;
}
</style>