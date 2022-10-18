export default {
  setPolicy(state, payload) {
    state.non_formal_meetings = payload.meetingsAmount;
    state.number_of_days_from_office = payload.officeMeetings;
    state.what_about_meetings_in_live = payload.liveMeetings;
    state.tell_us_your_opinion_about_us = payload.userOpinion;
  },
};
