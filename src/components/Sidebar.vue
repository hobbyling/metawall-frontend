<template>
  <div class="bg-subbackground rounded-2xl py-4 px-6">
    <div class="flex flex-row mb-7">
      <div class="rounded-full w-10 h-10 bg-secondary" />
      <div class="flex flex-col justify-center items-start ml-5">
        <span class="text-left">Karim Saif</span>
        <span class="text-left">View your profile</span>
      </div>
    </div>

    <div>
      <router-link to="/" class="side-bar-item">
        <icon name="heart" />
        <span>Likes</span>
      </router-link>
      <router-link to="/" class="side-bar-item">
        <icon name="star" />
        <span>Followings</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="postcssc" scoped>
.side-bar-item {
  @apply flex justify-start items-center mb-5;
}

.side-bar-item > span {
  @apply text-title ml-4;
}
</style>