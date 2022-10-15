export default {
  setNonFormalMeetings(context, payload) {
    context.commit("setNonFormalMeetings", payload);
  },
  setOfficeMeetings(context, payload) {
    context.commit("setOfficeMeetings", payload);
  },
  changeLiveMeetings(context, payload) {
    context.commit("changeLiveMeetings", payload);
  },
  changeOpinion(context, payload) {
    context.commit("changeOpinion", payload);
  },
};
