<template>
  <button class="ml-28" type="submit">
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L15 11.3158L1 21.6316"
        :stroke="stroke ? '#232323' : 'gray'"
        stroke-width="2.4"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: ["stroke"],
};
</script>