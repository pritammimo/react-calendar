import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };
  const eventPropGetter=(event, start, end, isSelected)=>{
    let newStyle = {
      backgroundColor: "lightgrey",
      color: 'black',
      borderRadius: "0px",
      border: "none"
    };

    if (event.title ==="Unavailable"){
      newStyle.backgroundColor = "lightgreen"
    }
    if (event.title ==="Holiday"){
      newStyle.backgroundColor = "#e090ee"
    }
    if (event.title ==="Event"){
      newStyle.backgroundColor = "#e71d1d"
    }

    return {
      className: "",
      style: newStyle
    };
  }
  
  const onNavigate=(newDate,view,action)=>{
   console.log("new",action);
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center">React Calendar</h1>
      <Calendar
        views={["day", "agenda", "month",'week']}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        events={eventsData}
        style={{ height: "90vh" }}
        eventPropGetter={eventPropGetter}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        onNavigate={onNavigate}
      />
    </div>
  );
}
