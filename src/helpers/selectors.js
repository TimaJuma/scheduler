import InterviewerList from "components/InterviewList";

// 1
export function getAppointmentsForDay(state, day) {
  const finalArr = [];
  for(const matchDay of state.days){
    if(day === matchDay.name){
      for(let appointment of matchDay.appointments){
        for (const [key, value] of Object.entries(state.appointments)){
          if(appointment === value.id){
            finalArr.push(value)
          }
        }
      }
    }
  }
return finalArr;
}

// 2
export function getInterview(state, interview) {
  if (!interview) return null;
  const myInterview = {student: interview.student, interviewer: state.interviewers[interview.interviewer]}
  return myInterview;
}


// 3
// export function getInterviewersForDay(state, day) {
//   const finalArr = [];
//   for(const matchDay of state.days){
//     console.log('matchday', matchDay)
//     if(day === matchDay.name){
//       for(let interviewer of matchDay.interviewers){
//         for (const key in state.interviewers){
//           if(interviewer === state.interviewers[key].id){
//             finalArr.push({[key]: state.interviewers[key]})
//           }
//         }
//       }
//     }
//   }
//   console.log('returned Array', finalArr.length)
// return finalArr;
// }



const getInterviewersForDay = (state, day) => {
  const finalArr = [];
  for(const matchDay of state.days){
    if(day === matchDay.name){
      for(let interviewer of matchDay.interviewers){
        for (const [key, value] of Object.entries(state.interviewers)){
          if(interviewer === value.id){
            finalArr.push(value)
          }
        }
      }
    }
  }
return finalArr;
}

export {getInterviewersForDay}