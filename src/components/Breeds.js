import React from "react";
import "./Breeds.css";

export default function Breeds() {
  return (
    <div className="Breeds">
      <h2 className="Breeds-title">Select a Breed</h2>
      <p>
        <select className="Breeds-select">
          <option>beagle</option>
          <option>bluetick</option>
          <option>bullterrier-staffordshire</option>
          <option>malinois</option>
          <option>wolfhound-irish</option>
        </select>
      </p>
      <img className="Breeds-image" src="http://via.placeholder.com/300x300" />
      <p>
        <button className="Breeds-button">Show me more!</button>
      </p>
    </div>
  );
}
