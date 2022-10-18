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
  state() {
    return {
      data: {
        first_name: store.state.identify.first_name,
        last_name: store.state.identify.last_name,
        email: this.state.identify.email,
        had_covid: this.state.covid.had_covid,
        had_antibody_test: this.state.covid.had_antibody_test,
        covid_sickness_date: this.state.covid.covid_sickness_date,
        antibodies: {
          test_date: this.state.covid.antibodies.test_date,
          number: this.state.covid.antibodies.number,
        },
        had_vaccine: this.state.vaccine.had_vaccine,
        vaccination_stage: this.state.vaccine.vaccination_stage,
        i_am_waiting: this.state.vaccine.i_am_waiting,
        non_formal_meetings: this.state.policy.non_formal_meetings,
        number_of_days_from_office:
          this.state.policy.number_of_days_from_office,
        what_about_meetings_in_live:
          this.state.policy.what_about_meetings_in_live,
        tell_us_your_opinion_about_us:
          this.state.policy.tell_us_your_opinion_about_us,
      },
    };
  },
});

export default store;
