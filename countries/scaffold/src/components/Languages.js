import React, { Component } from "react";
import "./Languages.css";

class Languages extends Component {
  render() {
    return (
      <div className="Languages">
        <div className="Languages-header">
          <h2>Languages Spoken in Member Countries</h2>
          <input type="text" placeholder="Search by language" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mozafar</td>
              <td>Sudan</td>
              <td>Arabic, English</td>
            </tr>
            <tr>
              <td>Daniel</td>
              <td>United Kingdom</td>
              <td>English</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Languages: ???</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Languages;
