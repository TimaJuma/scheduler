import React from "react";
import InterviewerListItem from './InterviewerListItem';
import PropTypes from "prop-types";

import 'components/InterviewList.scss';


function InterviewerList(props) {
  const {interviewers, interviewer, setInterviewer} = props

  const interviewersGroup = interviewers.map(interviewerTeacher => {
    return (
      <InterviewerListItem 
        key={interviewerTeacher.id}
        name={interviewerTeacher.name}
        avatar={interviewerTeacher.avatar}
        selected={interviewerTeacher.id === interviewer}
        setInterviewer={event=> setInterviewer(interviewerTeacher.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersGroup}
      </ul>
    </section>
  )
}


InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};


export default InterviewerList;