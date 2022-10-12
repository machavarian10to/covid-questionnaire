<template>
  <transition name="logo">
    <img v-if="showLogo" src="@/assets/start.svg" />
  </transition>

  <div class="w-[1920px] h-[1080px] flex justify-center items-center">
    <div v-if="!showLogo">
      <div class="flex justify-center my-[100px]">
        <img src="@/assets/main_logo.svg" />
      </div>

      <div class="w-[160px] h-[100px] text-center">
        <transition name="text">
          <router-link
            v-if="showText"
            to="/identify"
            class="font-bold text-[30px] hover:drop-shadow-[3px_2px_0px_rgba(150,150,150,1)]"
          >
            კითხვარის დაწყება
          </router-link>
        </transition>
      </div>
    </div>
  </div>
</template>
s
<script>
export default {
  data() {
    return {
      showLogo: true,
      showText: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLogo = false;
    }, 500);
    setTimeout(() => {
      this.showText = true;
    }, 1500);
  },
};
</script>


<style scoped>
.logo-leave-from {
  transform: scale(1);
}
.logo-leave-active,
.text-enter-active {
  transition: all 0.4s ease-in;
}
.logo-leave-to {
  transform: scale(0.1);
}
.text-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.text-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
