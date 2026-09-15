import React from "react";

function EventForm({ title, setTitle, addEvent }) {
  console.log("EventForm Rendered");

  return (
    <div className="event-form">
      <input
        type="text"
        placeholder="Enter Event"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addEvent}>
        Add Event
      </button>
    </div>
  );
}

export default React.memo(EventForm);