import React from "react";

function Toolbar({ nextMonth, previousMonth }) {
  console.log("Toolbar Rendered");

  return (
    <div className="toolbar">
      <button onClick={previousMonth}>
        ⬅ Previous
      </button>

      <button onClick={nextMonth}>
        Next ➡
      </button>
    </div>
  );
}

export default React.memo(Toolbar);