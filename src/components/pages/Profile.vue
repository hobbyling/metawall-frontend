<template>
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
    <div class="h-16 w-16 bg-secondary rounded-full" />
    <div class="text-xl text-title-500 flex justify-center items-center mt-4">
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
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>