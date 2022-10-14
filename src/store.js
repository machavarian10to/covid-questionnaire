import { createStore } from "vuex";

import identifyModule from "@/store/identify/index.js";
import covidModule from "@/store/covid/index.js";

const store = createStore({
  modules: {
    identify: identifyModule,
    covid: covidModule,
  },
});

export default store;
