import React, { useState, useCallback } from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
import EventForm from "./components/EventForm";
import Toolbar from "./components/Toolbar";

function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  const addEvent = useCallback(() => {
    if (title.trim() === "") return;

    setEvents((prevEvents) => [
      ...prevEvents,
      {
        id: Date.now(),
        title: title,
      },
    ]);

    setTitle("");
  }, [title]);

  const nextMonth = useCallback(() => {
    alert("Next Month");
  }, []);

  const previousMonth = useCallback(() => {
    alert("Previous Month");
  }, []);

  return (
    <div className="container">
      <h1>📅 React Calendar Performance</h1>

      <Toolbar
        nextMonth={nextMonth}
        previousMonth={previousMonth}
      />

      <EventForm
        title={title}
        setTitle={setTitle}
        addEvent={addEvent}
      />

      <CalendarComponent events={events} />
    </div>
  );
}

export default App;