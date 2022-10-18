export default {
  setData(state, payload) {
    state.had_covid = payload.covid;
    state.had_antibody_test = payload.test;
    state.antibodies.test_date = payload.antibodiesDate;
    state.antibodies.number = payload.antibodiesNum;
    state.covid_sickness_date = payload.sicknessDate;
  },
};
