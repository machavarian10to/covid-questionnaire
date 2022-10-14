<template>
  <header>
    <div
      class="border-b-[2px] border-solid border-border-color py-3 flex justify-between"
    >
      <div class="flex justify-center items-center">
        <header-logo></header-logo>
      </div>
      <h4 class="font-bold text-[40px]">{{ page }} / 4</h4>
    </div>
  </header>
</template>

<script>
import HeaderLogo from "@/components/icons/HeaderLogo.vue";
export default {
  components: { HeaderLogo },
  props: ["page"],
};
</script>
