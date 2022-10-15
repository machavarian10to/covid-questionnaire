export default {
  getNonFormalMeetings(state) {
    return state.non_formal_meetings;
  },
  getOfficeMeetings(state) {
    return state.number_of_days_from_office;
  },
  getLiveMeetings(state) {
    return state.what_about_meetings_in_live;
  },
  getOpinion(state) {
    return state.tell_us_your_opinion_about_us;
  },
};
