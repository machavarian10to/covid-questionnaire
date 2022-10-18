import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      i_am_waiting: "",
    };
  },
  mutations: mutations,
  actions: actions,
};
