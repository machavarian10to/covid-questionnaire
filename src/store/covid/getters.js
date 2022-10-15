export default {
  getCovid(state) {
    return state.had_covid;
  },
  getTest(state) {
    return state.had_antibody_test;
  },
  getCovidSicknessDate(state) {
    return state.covid_sickness_date;
  },
  getAntibodiesDate(state) {
    return state.antibodies.test_date;
  },
  getAntibodiesNumber(state) {
    return state.antibodies.number;
  },
};
