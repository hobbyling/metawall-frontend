<template>
  <div
    class="
      bg-img
      w-full
      h-screen
      flex
      items-center
      justify-center
      lg:bg-background lg:py-0 lg:h-screen
    "
  >
    <div class="bg-white rounded shadow overflow-hidden lg:flex">
      <div
        class="
          img-side
          hidden
          lg:w-[419px] lg:flex lg:justify-center lg:items-center
        "
      >
        <img src="/src/assets/metawall1.png" alt="Logo" class="w-[210px]" />
      </div>
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
        <img
          class="w-20 mx-auto mb-4 lg:hidden"
          src="/src/assets/metawall1.png"
          alt=""
        />
        <h1 class="pb-30px">Let's get started!</h1>
        <form class="pb-5">
          <div class="mb-4">
            <label class="form-label" for="name"> Name </label>
            <input id="name" type="text" placeholder="name" />
          </div>
          <div class="mb-4">
            <label class="form-label" for="email"> Email </label>
            <input id="email" type="text" placeholder="Email" />
          </div>
          <div class="mb-4">
            <label class="form-label" for="password"> Password </label>
            <input
              id="password"
              type="password"
              placeholder="******************"
            />
            <!-- <p class="form-serror-hint">Please choose a password.</p> -->
          </div>
          <div class="mb-6">
            <label class="form-label" for="conform-password">
              Conform Password
            </label>
            <input
              id="conform-password"
              type="password"
              placeholder="******************"
            />
            <!-- <p class="form-serror-hint">Please choose a password.</p> -->
          </div>
          <div class="flex items-center justify-between">
            <button class="btn" type="button" @click="signUp">Sign up</button>
          </div>
        </form>
        <div class="text-xs">
          <span class="text-title-500">Already have an account? </span><br />
          <router-link to="/login">Login!</router-link>
        </div>
        <Divide text="Or Sign up with" />
        <div class="flex flex-row justify-center">
          <div class="inline-flex justify-center basis-1/4">
            <icon name="google" />
          </div>
          <div class="inline-flex justify-center basis-1/4">
            <icon name="facebook" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Divide from "./../components/Divide.vue";
import router from "../router";

const signUp = async () => {
  router.push({ path: "/get-start" });
};
</script>

<style lang="scss" scoped>
.bg-img,
.img-side {
  background: no-repeat url("/src/assets/login-bg.png");
  background-size: cover;
}

.bg-img {
  @media (min-width: 1024px) {
    background: #f6f6f6;
  }
}
</style>