import { createRouter, createWebHistory } from "vue-router";

import TheWelcome from "@/pages/TheWelcome.vue";
import UserIdentify from "@/pages/UserIdentify.vue";
import CovidQuestions from "@/pages/CovidQuestions.vue";
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
      path: "/identify",
      name: "identify",
      component: UserIdentify,
    },
    {
      path: "/covid",
      name: "covid",
      component: CovidQuestions,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: TheThanks,
    },
  ],
});

export default router;
