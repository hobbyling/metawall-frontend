<template>
  <div class="w-full h-screen flex items-center justify-center bg-background">
    <div class="bg-white rounded shadow overflow-hidden lg:flex">
      <div
        class="
          w-[345px]
          px-8
          py-5
          flex flex-col
          justify-center
          lg:px-16 lg:w-[440px]
        "
      >
        <h1 class="pb-30px">Welcome to MetaWall!</h1>
        <form>
          <div class="mb-4 flex justify-center relative">
            <div class="w-[118px] h-[118px] avatar rounded-full" />
            <icon name="plus" class="absolute bottom-0 right-[30%] h-5 w-5" />
          </div>
          <div class="mb-6">
            <label class="form-label" for="password"> Gender </label>
            <div class="flex justify-between">
              <div class="form-check form-check-inline">
                <input type="radio" id="ask" name="gender" value="ask" />
                <label class="form-check-label" for="ask">Ask</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio" id="embla" name="gender" value="embla" />
                <label class="form-check-label" for="embla">Embla</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio" id="elf" name="gender" value="elf" />
                <label class="form-check-label" for="elf">Elf</label>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button class="btn" type="button">Join</button>
          </div>
        </form>

        <Divide text="Or" />
        <div class="text-xs">
          <router-link to="/">Setting Next Time</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divide from "./../components/Divide.vue";
</script>

<style lang="scss" scoped>
.avatar {
  background: linear-gradient(360deg, #cfd9df 0%, #e2edf0 100%);
}
</style>