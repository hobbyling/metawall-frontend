<template>
  <div
    class="
      py-5
      relative
      after:w-full
      after:h-px
      after:bg-slate-100
      after:absolute
      after:inset-x-0
      after:inset-y-1/2
      z-1
    "
  >
    <span class="relative inline-block px-0.5 text-title bg-white text-xs z-10">
      {{ props.text }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>

<style lang="scss" scoped>
</style>