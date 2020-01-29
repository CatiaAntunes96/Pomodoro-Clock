import React from "react";

const BreakBtn = props => {
  return (
    <div className="break-container">
      <h2 id="break-label" className="break-session-label">
        Break Length
      </h2>
      <div className="btn-style">
        <button
          id="break-increment"
          type="button"
          onClick={props.incrementBreak}
        >
          +
        </button>
        <span id="break-length">{props.breakLength}</span>
        <button
          id="break-decrement"
          type="button"
          onClick={props.decrementBreak}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default BreakBtn;
