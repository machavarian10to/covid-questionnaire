export default {
  setNonFormalMeetings(state, payload) {
    state.non_formal_meetings = payload;
  },
  setOfficeMeetings(state, payload) {
    state.number_of_days_from_office = payload;
  },
  changeLiveMeetings(state, payload) {
    state.what_about_meetings_in_live = payload;
  },
  changeOpinion(state, payload) {
    state.tell_us_your_opinion_about_us = payload;
  },
};
