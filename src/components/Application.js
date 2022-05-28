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


const [day, setDay] = useState("Monday");
const [days, setDays] = useState([]);
// you may not have the appointments state, its ok if you dont
// const [appointments, setAppointments] = useState({});

  const appointments = getAppointmentsForDay(state, state.day);

  const schedule = appointments.map((appointment) => {
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
        <DayList days={days} value={day} onChange={setDay} />
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        {/* Object.values(appointments).map(appointment => ( */}
          {/* <Appointment key={Appointment.id} {...Appointment} />
        ); */}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

// const [days, setDays] = useState([]);

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];