import { useState, useEffect } from "react";
import axios from "axios";



export const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  // const bookInterview = (id, interview) => {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   return axios.put(`/api/appointments/${id}`, appointment)
  //   .then(() => {setState({...state, appointments});})
  //   .then(() => axios.get("/api/days"))
  //   .then((res) =>setState(prev => ({ ...prev, days: res.data})));
  // }


  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview}
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

  
    return axios.put(`api/appointments/${id}`, {interview})
      .then(res=> {setState({...state, appointments });})
  }

  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`, )
      .then(()=> axios.get("api/days"))
      .then((res) => setState(prev => ({ ...prev, days: res.data})));
  }




  const setDay = day => setState({ ...state, day });


  useEffect(() => {

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
    .then((all) => {
      setState((prev)=> {
        return { 
          ...prev,
           days: all[0].data, 
           appointments: all[1].data,
           interviewers: all[2].data
          };
        });
    })
  }, []);

  return { state, setDay, bookInterview,  cancelInterview};

};




