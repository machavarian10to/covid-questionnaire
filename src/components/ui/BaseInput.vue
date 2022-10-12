<template>
  <div class="flex flex-col">
    <label :for="title" :class="labelStyling">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["label", "title"],
  computed: {
    labelStyling() {
      return "font-bold text-[22px] mt-10";
    },
  },
};
</script>