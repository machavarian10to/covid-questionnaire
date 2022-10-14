<template>
  <router-link :to="link">
    <img src="@/assets/left-arrow.svg" />
  </router-link>
</template>

<script>
export default {
  props: ["link"],
};
</script>