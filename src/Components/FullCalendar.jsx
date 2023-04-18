import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
const ReactFullCalendar = () => {
  let  handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    const calenderCustomeDate = (dt, time, duration = 0) => {
        if (dt || time) {
          return new Date(
            new Date(`${dt}T${time}`).getTime() + duration * 60000
          ).toISOString();
        } else {
          return null;
        }
      };
      const [allCal, setAllCal] = useState([
        {
          id: "a",
        title: "my event",
        start: calenderCustomeDate("2023-04-17", "15:00:00"),
        end: calenderCustomeDate("2023-04-18", "12:00:00"),
        classNames: ["my-3", "bg-primary"],
        borderColor: "transparent",
        allDay: "true",
        editable: true,
        },
        {
          title: "event 3",
          date: "2023-04-19",
          display: "list-item",
          backgroundColor: "#91ffeb",
        },
      
      ])
        
        //   // },
         
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // { title: "event 2", date: "2021-10-02", editable: true },
        //   // {
        //   //   title: "event 2",
        //   //   date: "2021-10-04",
        //   //   editable: true,
        //   //   display: "background",
        //   //   backgroundColor: "#ff91da",
        //   // },
        //   // {
        //   //   title: "Pritam Event",
        //   //   editable: true,
        //   //   backgroundColor: "#91ffeb",
        //   //   start: "2021-10-22T10:30:00",
        //   //   end: "2021-10-22T11:30:00",
        //   //   // daysOfWeek: ["4"],
        //   // },
        //   // {
        //   //   title: "BCH237",
        //   //   daysOfWeek: ["1", "2"],
        //   //   editable: true,
        //   // },
        // ]));
  return (
    <FullCalendar
  plugins={[ dayGridPlugin,interactionPlugin,timeGridPlugin ]}
  initialView= 'dayGridWeek'
  dateClick={handleDateClick}
  weekends={true}
  headerToolbar={{
    left: 'prev,next',
    center: 'title',
    right: 'dayGridWeek,dayGridDay,dayGridMonth'
  }}
  dayMaxEvents={true}
  events={allCal}
  eventClick={(info) =>
    console.log(info)
  }
/>
  )
}

export default ReactFullCalendar