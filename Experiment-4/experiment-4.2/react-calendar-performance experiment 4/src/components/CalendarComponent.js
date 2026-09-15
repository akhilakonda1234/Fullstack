import React, { useMemo } from "react";

function CalendarComponent({ events }) {
  const totalEvents = useMemo(() => {
    console.log("Calculating total events...");
    return events.length;
  }, [events]);

  return (
    <div className="calendar">
      <h2>Calendar Events</h2>

      <p>
        <strong>Total Events:</strong> {totalEvents}
      </p>

      {events.length === 0 ? (
        <p>No events added.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(CalendarComponent);