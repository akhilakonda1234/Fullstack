import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

function CalendarView() {

  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Instagram Post",
      date: "2026-08-05",
    },
    {
      id: "2",
      title: "Facebook Campaign",
      date: "2026-08-10",
    },
    {
      id: "3",
      title: "LinkedIn Article",
      date: "2026-08-15",
    },
  ]);

  // Click on event
  const handleEventClick = (info) => {
    alert("Selected Post: " + info.event.title);
  };

  // Click on empty date
  const handleDateClick = (info) => {
    const title = prompt("Enter Post Title");

    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title: title,
          date: info.dateStr,
        },
      ]);
    }
  };

  // Drag and Drop
  const handleEventDrop = (info) => {
    alert(
      info.event.title +
        " moved to " +
        info.event.startStr
    );
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
        ]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        height="650px"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
}

export default CalendarView;