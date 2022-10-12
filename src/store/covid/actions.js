export default {
  setCovid(context, payload) {
    context.commit("setCovid", payload);
  },
  setTest(context, payload) {
    context.commit("setTest", payload);
  },
  changeAntibodiesDate(context, payload) {
    context.commit("changeAntibodiesDate", payload);
  },
  changeAntibodiesNumber(context, payload) {
    context.commit("changeAntibodiesNumber", payload);
  },
  changeCovidSicknessDate(context, payload) {
    context.commit("changeCovidSicknessDate", payload);
  },
};
