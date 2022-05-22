<template>
  <div>hello</div>
  <div>{{ name }}</div>
</template>

<script setup>
import userStore from "../stores/user.js";
import { storeToRefs } from "pinia";
const user = userStore();
// reactive 格式

const { name, wallet } = storeToRefs(user);

name.value = "aaron";

const { updateName } = user;

function updateData() {
  user.$patch({
    name: "Aaron",
  });
}

function reset() {
  user.$reset();
}

// return {
//   user,
//   name,
//   wallet,
//   updateName,
//   updateData,
//   reset,
// };
</script>

<style lang="scss" scoped>
</style>