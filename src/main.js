import { createApp } from "vue";
import router from "@/router/index.js";
import store from "./store.js";

import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import TheHeader from "@/components/layout/TheHeader.vue";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";

import "@/index.css";

import App from "@/App.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);
app.component("the-header", TheHeader);

app.use(router);

app.use(store);

app.mount("#app");
