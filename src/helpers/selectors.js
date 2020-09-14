// # 1
const getAppointmentsForDay = (state, day) => {
  const appointmentsId = state.days
    .filter((e) => e.name === day)
    .map((e) => e.appointments)
    .reduce((acc, val) => acc.concat(val), []);
  const appointment = [];
  appointmentsId.forEach((e) => {
    appointment.push(state.appointments[e]);
  });
  return appointment;
};

// # 2
const getInterview = (state, interview) => {
  if (!interview) return null;
  const myInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return myInterview;
};

// # 3
const getInterviewersForDay = (state, day) => {
  const interviewersId = state.days
    .filter((e) => e.name === day)
    .map((e) => e.interviewers)
    .reduce((acc, val) => acc.concat(val), []);
  const interviewers = [];
  interviewersId.forEach((e) => {
    interviewers.push(state.interviewers[e]);
  });
  return interviewers;
};

export { getInterviewersForDay, getInterview, getAppointmentsForDay };
