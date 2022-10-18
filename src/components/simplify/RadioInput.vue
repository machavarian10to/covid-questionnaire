<template>
  <div class="m-5 flex items-center" v-for="option in options" :key="option.id">
    <input
      type="radio"
      class="w-[23px] h-[23px]"
      :name="option.name"
      :value="option.value"
      :id="option.id"
      @click="$emit('update:modelValue', $event.target.value)"
    />
    <label class="text-[20px] ml-5" :for="option.id">
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
};
</script>
