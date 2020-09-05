import React, {useState} from "react";
import Button from '../Button';
import InterviewerList from '../InterviewList';

export default function Form(props) {
  const {interviewers, onSave, onCancel} = props;

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


  function reset() {
    setName("");
    setInterviewer(null);
  }

  function cancel(event) {
    reset();
    oncancel();
    event.target.value="";
  }


  function save() {
    onSave(name, interviewer);
  }
  


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            type="text"
            placeholder="Enter Student Name"

            onChange={event => setName(event.target.value)}

          />
        </form>
        <InterviewerList interviewers={interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          <Button confirm onClick={save}>Save</Button>
        </section>
      </section>
    </main>


  )
}