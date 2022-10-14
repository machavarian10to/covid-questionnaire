export default {
  changeName(state, payload) {
    state.first_name = payload.value;
  },
  changeLastName(state, payload) {
    state.last_name = payload.value;
  },
  changeEmail(state, payload) {
    state.email = payload.value;
  },
};
