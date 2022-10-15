export default {
  setVaccine(state, payload) {
    state.had_vaccine = payload;
  },
  setStage(state, payload) {
    state.vaccination_stage = payload;
  },
  setReason(state, payload) {
    state.i_am_waiting = payload;
  },
};
