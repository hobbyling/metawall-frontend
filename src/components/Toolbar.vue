<template>
  <div
    class="
      bg-white
      h-[54px]
      w-full
      flex
      items-center
      justify-between
      px-5
      fixed
      bottom-0
    "
  >
    <div
      v-for="(item, key) in tabs"
      :key="'tool-bar-' + key"
      @click="pathTo(item)"
      class="cursor-pointer"
    >
      <icon
        :name="item.icon"
        class="w-6 h-6"
        :color="activeTab === item.icon ? '#FF9A9E' : ''"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
const router = useRouter();
const tabs = ref([
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "hot",
    link: "/",
  },
  {
    icon: "time",
    link: "/",
  },
  {
    icon: "user",
    link: "/profile",
  },
]);

const activeTab = ref("home");

const pathTo = (param) => {
  activeTab.value = param.icon;

  if (param.link === "time") {
    router.push({
      path: param.link,
      query: "new",
    });
  }

  router.push(param.link);
};
</script>

<style lang="scss" scoped>
</style>