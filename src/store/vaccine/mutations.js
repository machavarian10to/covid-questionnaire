export default {
  setData(state, payload) {
    state.had_vaccine = payload.vaccine;
    state.vaccination_stage = payload.stage;
    state.i_am_waiting = payload.reason;
  },
};
