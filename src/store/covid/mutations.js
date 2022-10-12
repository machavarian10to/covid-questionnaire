export default {
  setCovid(state, payload) {
    state.had_covid = payload;
  },
  setTest(state, payload) {
    state.had_antibody_test = payload;
  },
  changeAntibodiesDate(state, payload) {
    state.antibodies.test_date = payload.value;
  },
  changeAntibodiesNumber(state, payload) {
    state.antibodies.number = payload.value;
  },
  changeCovidSicknessDate(state, payload) {
    state.covid_sickness_date = payload.value;
  },
};
