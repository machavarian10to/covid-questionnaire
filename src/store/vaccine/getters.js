export default {
  getVaccine(state) {
    return state.had_vaccine;
  },
  getStage(state) {
    return state.vaccination_stage;
  },
  getReason(state) {
    return state.i_am_waiting;
  },
};
