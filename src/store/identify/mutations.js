export default {
  setIdentify(state, payload) {
    state.first_name = payload.name;
    state.last_name = payload.surname;
    state.email = payload.email;
  },
};
