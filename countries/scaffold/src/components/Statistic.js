import React from "react";
import "./Statistic.css";

function Statistic(props) {
  return (
    <div className="Statistic">
      <h2>
        <span className="Statistic-number">?</span>
        <span className="Statistic-label">{props.label}</span>
      </h2>
    </div>
  );
}

export default Statistic;
