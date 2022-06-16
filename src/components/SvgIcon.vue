<template>
  <svg
    :class="[svgClass, addClass]"
    v-bind="$attrs"
    :style="{ color: color, width: size.width, height: size.height }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#666666",
  },
  size: {
    type: Object,
    default() {
      return {
        width: "1.2em",
        height: "1.2em",
      };
    },
  },
  addClass: {
    type: String,
    required: false,
  },
});

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  // console.log(props.name, "props.name");
  if (props.name) {
    return `svg-icon icon-${props.name}`;
  }
  return "svg-icon";
});
</script>

<style lang='scss'>
.svg-icon {
  // width: 1.2em;
  // height: 1.2em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
