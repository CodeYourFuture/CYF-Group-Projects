import React, { Component } from "react";
import Statistic from "./Statistic";
import "./Statistics.css";

class Statistics extends Component {
  render() {
    return (
      <div className="Statistics">
        <Statistic label="Total Members" />
        <Statistic label="Total Countries" />
        <Statistic label="Total Regions" />
      </div>
    );
  }
}

export default Statistics;
