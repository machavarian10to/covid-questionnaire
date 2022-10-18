import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: null,
      },
      covid_sickness_date: "",
    };
  },
  mutations: mutations,
  actions: actions,
};
