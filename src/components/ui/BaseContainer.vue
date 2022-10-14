<template>
  <div class="mt-24 mb-10 mx-48">
    <the-header :page="page"></the-header>
    <section>
      <div class="flex justify-between">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>