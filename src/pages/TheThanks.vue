<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="relative bg-thanks-image w-[1920px] h-[1080px] bg-center bg-no-repeat bg-cover"
  >
    <div
      v-if="showText"
      class="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <transition name="text">
        <h3 class="font-bold text-[64px] tracking-[16px]">მადლობა</h3>
      </transition>

      <transition name="top-star">
        <the-star
          v-if="showStars"
          class="w-[50px] h-[50px] absolute bottom-[100px] left-[40px]"
        ></the-star>
      </transition>

      <transition name="bottom-star">
        <the-star
          v-if="showStars"
          class="w-[30px] h-[30px] absolute top-[100px] right-[40px]"
        ></the-star>
      </transition>
    </div>
  </div>
</template>

<script>
import TheStar from "@/components/icons/TheStar.vue";
export default {
  components: {
    TheStar,
  },
  data() {
    return {
      showText: false,
      showStars: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showText = true;
    }, 1000);
    setTimeout(() => {
      this.showStars = true;
    }, 1500);
  },
};
</script>

<style scoped>
.text-enter-from,
.top-star-enter-from,
.bottom-star-enter-from {
  opacity: 0;
}

.text-enter-active,
.top-star-enter-active,
.bottom-star-enter-active {
  transition: all 0.3s ease-in;
}

.text-enter-to,
.top-star-enter-to,
.bottom-star-enter-to {
  opacity: 1;
}

.top-star-enter-from {
  transform: translate(60px, 60px);
}

.bottom-star-enter-from {
  transform: translate(-60px, -60px);
}

.top-star-enter-to,
.bottom-star-enter-to {
  transform: translate(0, 0);
}
</style>
