import React from "react";

const SessionBtn = props => {
  return (
    <div className="session-container">
      <h2 id="session-label" className="break-session-label">
        Session Length
      </h2>
      <div className="btn-style">
        <button
          id="session-increment"
          type="button"
          onClick={props.incrementSession}
        >
          +
        </button>
        <span id="session-length">{props.sessionLength}</span>
        <button
          id="session-decrement"
          type="button"
          onClick={props.decrementSession}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default SessionBtn;
