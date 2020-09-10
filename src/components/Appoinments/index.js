import React from "react";

import './styles.scss';
import Confirm from './Confirm';
import Empty from './Empty';
import Error from './Error';
import Form from './Form';
import Header from './Header';
import Show from './Show';
import Status from './Status';

import useVisualMode from 'hooks/useVisualMode'


// variables to switch to any mode
const CONFIRM = "CONFIRM";
const CREATE = "CREATE";
const DELETE = "DELETE";
const EDIT = "EDIT";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE";
const EMPTY = "EMPTY";
const SAVING = "SAVING";
const SHOW = "SHOW";






export default function Appointment(props) {
  const {interview, interviewers=[], bookInterview, id, cancelInterview, editInterview} = props
 
  // unpack functions to use to navigate over modes
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );


  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    
    // if (interview && name) {
      transition(SAVING);
      
      bookInterview(id, interview)
       .then(()=> transition(SHOW))
       .catch(() => transition(ERROR_SAVE, true));
    // }  
  }
   

// confirm message Box
const confirmBox = (e) => {
  e.preventDefault();
  transition(CONFIRM);
}

const confirmDelete = () => {
  transition(DELETE, true);
  
  cancelInterview(id)
    .then(()=> transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true))
      
}


  return (
    <article className="apppoinments" data-testid="appointment">
      <Header time={props.time}/>

      {mode === EMPTY && <Empty onAdd={()=> transition(CREATE)} />}
      {mode === CREATE && (
        <Form
          onCancel={back}
          interviewers={interviewers}
          onSave={save}
        />
      )}
      {mode === SHOW && <Show 
        student={interview.student} 
        interviewer={interview.interviewer.name}
        onEdit={() => transition(EDIT)}
        onDelete={confirmBox}
        />
      }


      {mode === SAVING && <Status message={"Saving"}/>}
      {mode === ERROR_SAVE && <Error message="Could not save an appoitment" onClose={back} />}
      {mode === DELETE && <Status message={"Deleting"}/>} 
      {mode === ERROR_DELETE && <Error message="Could not delete an appoitment" onClose={back} />}

      {mode === CONFIRM && <Confirm 
        message={'Are you sure you would like to delete it?'}
        onCancel={back}
        onConfirm={confirmDelete}
        />}

      {mode === EDIT && <Form 
        name={interview.student}
        interviewers={interviewers}
        interviewer={interview.interviewer.id}
        onSave={save}
        onCancel={back}
      />}

    </article>
  )
}