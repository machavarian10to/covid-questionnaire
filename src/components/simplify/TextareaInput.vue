<template>
  <div>
    <h2 class="font-bold text-[22px] mt-10">{{ title }}</h2>
    <textarea
      class="mt-[20px] w-[622px] h-[184px] resize-none bg-transparent border-[1px] border-solid border-border-color text-[24px] p-5"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
