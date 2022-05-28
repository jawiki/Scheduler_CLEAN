// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import useApplicationData from "hooks/useApplicationData";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewerForDay,
} from "helpers/selectors";



export default function Application(props) {

    // const { 
    //   state, 
    // //   setDay, 
    // //   // bookInterview, 
    // //   // cancelInterview 
    // } = useApplicationData();

    const [state, setState] = useState({
      day: "Monday",
      days: [],
      // you may put the line below, but will have to remove/comment hardcoded appointments variable
      appointments: {},
    });
    
const dailyAppointments = [];

  // const appointments = getAppointmentsForDay(state, state.day);

  const setDay = day => setState({ ...state, day });

  const setDays = (days) => {
    setState((prev) => ({ ...prev, days }));
  }

  useEffect(() => {
  axios.get("/api/days").then(response => setDays(response.data));
    }, []);

  const schedule = dailyAppointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={appointment.interview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"></nav>
        <DayList
          days={state.days}
          day={state.day}
          // setDay={.....}
        />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
