<template>
  <div class="bg-subbackground rounded-2xl py-4 px-6 h-fit">
    <div class="flex flex-row mb-7 cursor-pointer">
      <div class="rounded-full w-10 h-10 bg-secondary" />
      <div class="flex flex-col justify-center items-start ml-5">
        <span class="text-left">Karim Saif</span>
        <span class="text-left text-xs text-title-500 hover:text-primary-500"
          >View your profile</span
        >
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

<style lang="scss" scoped>
.side-bar-item {
  @apply flex justify-start items-center mb-5 ease-in duration-300;

  > span {
    @apply text-title-500 ml-4 ease-in duration-300;
  }

  &:hover {
    > span {
      @apply text-primary-500;
    }
  }
}
</style>