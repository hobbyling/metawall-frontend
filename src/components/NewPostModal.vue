<template>
  <div class="modal-shadow" id="modal">
    <div role="alert" class="modal-container">
      <div class="modal">
        <div class="modal-title">Add Post</div>

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
          <div class="w-2/5 lg:w-1/5">
            <button class="btn" @click="submitForm()">Submit</button>
          </div>
        </div>

        <div class="mt-6">
          <div class="bg-secondary h-32 w-32 rounded-2xl relative">
            <icon
              name="cross"
              class="
                absolute
                right-2
                top-2
                w-3
                h-3
                cursor-pointer
                text-title-500
              "
              :class="['hover:text-title-300']"
              @click="deletePic(item)"
            />
          </div>
        </div>
        <button
          class="modal-close-x"
          @click="closeModalPost()"
          aria-label="close modal"
          role="button"
        >
          <icon name="cross" />
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