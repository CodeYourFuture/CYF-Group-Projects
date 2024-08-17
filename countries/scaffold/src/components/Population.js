import React, { Component } from "react";
import "./Population.css";

class Population extends Component {
  render() {
    return (
      <div className="Population">
        <div className="Population-header">
          <h2>Population of Member Countries</h2>
          <input type="text" placeholder="Search by country" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mozafar</td>
              <td>Sudan</td>
              <td>39598700</td>
            </tr>
            <tr>
              <td>Daniel</td>
              <td>United Kingdom</td>
              <td>65110000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Population: ???</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Population;
