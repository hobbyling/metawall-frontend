<template>
  <div class="w-full max-w-xs bg-white rounded shadow-md">
    <div class="px-8 py-5">
      <h1 class="pb-30px">Welcome Back</h1>
      <form class="pb-5">
        <div class="mb-4">
          <label
            class="block text-title text-sm font-bold mb-2 text-left"
            for="email"
          >
            Email
          </label>
          <input
            class="
              appearance-none
              rounded-12px
              w-full
              py-2
              px-3
              text-title
              bg-background
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-title text-sm font-bold mb-2 text-left"
            for="password"
          >
            Password
          </label>
          <input
            class="
              appearance-none
              border border-red-500
              rounded-12px
              w-full
              py-2
              px-3
              text-title
              bg-background
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="mb-6">
          <label class="block text-title font-bold text-left">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm"> Remember me </span>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <button class="btn" type="button">Sign In</button>
        </div>
      </form>
      <div class="text-xs">
        <span class="text-title">Don’t have an account? </span>
        <router-link to="/">Sign up fo free!</router-link>
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
          class="relative inline-block w-5 text-title bg-white text-xs z-10"
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
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>