import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
