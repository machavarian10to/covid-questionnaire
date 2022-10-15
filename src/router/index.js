import { createRouter, createWebHistory } from "vue-router";

import TheWelcome from "@/pages/TheWelcome.vue";
import UserIdentify from "@/pages/UserIdentify.vue";
import CovidQuestions from "@/pages/CovidQuestions.vue";
import CovidVaccine from "@/pages/CovidVaccine.vue";
import CovidPolicy from "@/pages/CovidPolicy.vue";
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
      path: "/vaccine",
      name: "vaccine",
      component: CovidVaccine,
    },
    {
      path: "/policy",
      name: "policy",
      component: CovidPolicy,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: TheThanks,
    },
  ],
});

export default router;
