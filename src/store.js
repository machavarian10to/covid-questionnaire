import { createStore } from "vuex";

import identifyModule from "@/store/identify/index.js";
import covidModule from "@/store/covid/index.js";
import vaccineModule from "@/store/vaccine/index.js";
import policyModule from "@/store/policy/index.js";

const store = createStore({
  modules: {
    identify: identifyModule,
    covid: covidModule,
    vaccine: vaccineModule,
    policy: policyModule,
  },
});

export default store;
