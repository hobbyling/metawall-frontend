<template>
  <div class="bg-white rounded-2xl p-4">
    <!-- header -->
    <div class="flex justify-between items-center">
      <div class="flex justify-start items-center">
        <div class="h-10 w-10 bg-secondary rounded-full" />
        <div class="flex flex-col justify-center items-start ml-5">
          <span class="text-left">Karim Saif</span>
          <span class="text-left">2022.06.01 17:58</span>
        </div>
      </div>
      <icon name="dot" class="opacity-40" />
    </div>

    <!-- content -->
    <div class="my-5">
      <div class="mb-3 text-left">jiojiojojoji</div>
      <div class="h-44 bg-background rounded-2xl"></div>
    </div>

    <!-- heart & comment icon -->
    <div class="flex">
      <div>
        <icon
          name="heart"
          class="mr-7"
          :size="{ width: '1.5rem', height: '1.5rem' }"
        />
      </div>
      <div class="relative">
        <div
          class="
            flex
            justify-center
            items-center
            absolute
            -top-3
            -right-3
            text-[11px]
            rounded-full
            border border-white border-solid
            w-6
            h-6
            p-1
            bg-primary-500
            text-white
          "
        >
          99+
        </div>
        <icon name="chat" :size="{ width: '1.5rem', height: '1.5rem' }" />
      </div>
    </div>
    <p class="text-title text-left my-4">2300 likes</p>

    <!-- send comment -->
    <div class="py-2 flex justify-between items-start">
      <div class="flex w-full">
        <div class="rounded-full w-6 h-6 bg-secondary mt-2" />
        <contenteditable
          tag="p"
          :contenteditable="true"
          class="
            w-11/12
            mx-3
            px-3
            py-2
            appearance-none
            bg-background
            rounded-2xl
            text-left
            focus:outline-none
          "
        />
      </div>
      <icon
        name="send"
        :size="{ width: '1.5rem', height: '1.5rem' }"
        class="mt-2"
      />
    </div>

    <!-- comments -->
    <div class="mt-3">
      <div
        class="flex w-full justify-between mt-3"
        v-for="(item, key) in comments"
        :key="`comment-${key}`"
      >
        <div class="flex w-full">
          <div class="rounded-full w-6 h-6 bg-primary-700 mt-2" />
          <div
            class="
              flex flex-col
              justify-start
              items-start
              mx-3
              text-xs
              color-title
            "
          >
            <span>{{ item.account }}</span>
            <span class="opacity-50">{{ item.time }}</span>
            <div class="text-base my-2">{{ item.comment }}</div>
          </div>
        </div>
        <icon
          name="cross"
          :size="{ width: '0.8rem', height: '0.8rem' }"
          class="opacity-50"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const comments = ref([
  {
    avatar: "",
    account: "Steve Jobs",
    time: "2022.05.31 12:00",
    comment: "It is Cool!!!!",
  },
  {
    avatar: "",
    account: "Karim Saif",
    time: "2022.05.31 13:06",
    comment: "Thank you~",
  },
]);
</script>

<style lang="scss" scoped>
</style>