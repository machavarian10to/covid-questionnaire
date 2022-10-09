import { createRouter, createWebHistory } from "vue-router";

import TheWelcome from "@/pages/TheWelcome.vue";
import TheThanks from "@/pages/TheThanks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheWelcome,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: TheThanks,
    },
  ],
});

export default router;
