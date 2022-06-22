<template>
  <div
    class="
      py-12
      bg-modalbackground
      transition
      duration-300
      ease-in-out
      z-50
      h-screen
      absolute
      top-0
      right-0
      bottom-0
      left-0
    "
    id="modal"
  >
    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
      <div class="relative py-8 px-5 md:px-10 bg-white drop-shadow-xl rounded">
        <div class="w-full flex justify-center text-title-500 mb-3 text-3xl">
          Add Post
        </div>

        <div class="flex justify-start mb-4">
          <div class="h-10 w-10 bg-secondary rounded-full" />
          <div class="flex flex-col justify-center items-start ml-5">
            <span class="text-left text-sm">Kario wjoe</span>
          </div>
        </div>

        <div>
          <contenteditable
            tag="p"
            :contenteditable="true"
            class="
              w-full
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

        <div class="flex items-center justify-between w-full mt-3">
          <div>
            <label>
              <input
                type="file"
                @change="uploadFile"
                ref="fileInput"
                class="hidden"
              />
              <div
                class="
                  flex
                  items-center
                  cursor-pointer
                  ease-in
                  duration-150
                  text-secondary
                  hover:text-primary-500
                "
              >
                <icon name="picture" class="'text-primary'" />
                <span class="ml-1 text-primary">Photo</span>
              </div>
            </label>
          </div>
          <div class="w-1/5">
            <button class="btn" @click="submitForm()">Submit</button>
          </div>
        </div>

        <div class="mt-6">
          <div class="bg-secondary h-32 w-32 rounded-2xl relative">
            <icon
              name="cross"
              class="absolute right-2 top-2 w-3 h-3 cursor-pointer"
              :class="['hover:text-title-300']"
              @click="deletePic(item)"
            />
          </div>
        </div>
        <button
          class="
            cursor-pointer
            absolute
            top-0
            right-0
            mt-4
            mr-5
            text-gray-400
            hover:text-gray-600
            transition
            duration-150
            ease-in-out
            rounded
            focus:ring-2 focus:outline-none focus:ring-gray-600
          "
          @click="closeModalPost()"
          aria-label="close modal"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import contenteditable from "vue-contenteditable";
import modalStore from "./../stores/modalStore";
const modal = modalStore();
const { closeModalPost } = modal;

const deletePic = (val) => {
  console.log("delete");
};

const submitForm = () => {
  closeModalPost();
};
</script>

<style lang="scss" scoped>
</style>