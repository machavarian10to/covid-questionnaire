<template>
  <div class="m-5 flex items-center">
    <slot></slot>
    <label class="text-[20px] ml-5" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ["id", "label"],
};
</script>
