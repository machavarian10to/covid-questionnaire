import { createApp } from "vue";
import router from "@/router/index.js";
import store from "./store.js";

import BaseContainer from "@/components/ui/BaseContainer.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseLink from "@/components/ui/BaseLink.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import TheHeader from "@/components/layout/TheHeader.vue";

import "@/index.css";

import App from "@/App.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-input", BaseInput);
app.component("base-button", BaseButton);
app.component("base-link", BaseLink);
app.component("base-background", BaseBackground);
app.component("base-title", BaseTitle);
app.component("the-header", TheHeader);

app.use(router);

app.use(store);

app.mount("#app");
