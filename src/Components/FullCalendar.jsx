import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
const ReactFullCalendar = () => {
  let  handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
  return (
    <FullCalendar
  plugins={[ dayGridPlugin,interactionPlugin ]}
  initialView="dayGridMonth"
  dateClick={handleDateClick}
  weekends={true}
  events={[
    { title: 'event 1', date: '2023-04-17' },
    { title: 'event 2', date: '2023-04-15' }
  ]}
/>
  )
}

export default ReactFullCalendar