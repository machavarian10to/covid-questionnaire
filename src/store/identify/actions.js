export default {
  changeName(context, payload) {
    context.commit("changeName", payload);
  },
  changeLastName(context, payload) {
    context.commit("changeLastName", payload);
  },
  changeEmail(context, payload) {
    context.commit("changeEmail", payload);
  },
};
