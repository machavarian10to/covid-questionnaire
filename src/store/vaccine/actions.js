export default {
  setVaccine(context, payload) {
    context.commit("setVaccine", payload);
  },
  setStage(context, payload) {
    context.commit("setStage", payload);
  },
  setReason(context, payload) {
    context.commit("setReason", payload);
  },
};
