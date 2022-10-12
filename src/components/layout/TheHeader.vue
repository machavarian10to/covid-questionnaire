<template>
  <header>
    <div
      class="border-b-[2px] border-solid border-border-color py-3 flex justify-between"
    >
      <img src="@/assets/frame.svg" />
      <h4 class="font-bold text-[40px]">{{ page }} / 4</h4>
    </div>
  </header>
</template>

<script>
export default {
  props: ["page"],
};
</script>