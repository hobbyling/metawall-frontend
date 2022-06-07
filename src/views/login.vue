<template>
  <div class="bg-img w-full h-screen flex items-center justify-center">
    <div class="w-345 max-w-xs bg-white rounded shadow-md">
      <div class="px-8 py-5 flex flex-col justify-center">
        <img class="w-20 mx-auto mb-4" src="/src/assets/metawall1.png" alt="" />
        <h1 class="pb-30px">Welcome Back</h1>
        <form class="pb-5">
          <div class="mb-4">
            <label class="form-label" for="email"> Email </label>
            <input id="email" type="text" placeholder="Email" />
          </div>
          <div class="mb-4">
            <label class="form-label" for="password"> Password </label>
            <input id="password" type="password" placeholder="********" />
            <!-- <p class="form-serror-hint">Please choose a password.</p> -->
          </div>
          <div class="mb-6">
            <label class="block text-title font-bold text-left">
              <input type="checkbox" />
              <span class="text-sm"> Remember me </span>
            </label>
          </div>
          <div class="flex items-center justify-between">
            <button class="btn" type="button">Login</button>
          </div>
        </form>
        <div class="text-xs">
          <span class="text-title">Don’t have an account? </span><br />
          <router-link to="/register">Sign up for free!</router-link>
        </div>
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
          <span
            class="
              relative
              inline-block
              px-0.5
              text-title
              bg-white
              text-xs
              z-10
            "
          >
            Or
          </span>
        </div>
        <div class="flex flex-row justify-center">
          <div class="inline-flex justify-center basis-1/4">
            <img src="/src/assets/icon/google.svg" alt="" />
          </div>
          <div class="inline-flex justify-center basis-1/4">
            <img src="/src/assets/icon/facebook.svg" alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bg-img {
  background: no-repeat url("src/assets/login-bg.png");
  background-size: cover;
}
</style>