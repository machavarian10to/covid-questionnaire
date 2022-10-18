import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  mutations: mutations,
  actions: actions,
};
