import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

export default function DogBattle() {
  return (
    <div className="DogBattle">
      <h2 className="DogBattle-title">Choose the best dog</h2>
      <div className="DogBattle-images">
        <Dog image="http://via.placeholder.com/300x300" />
        <Dog image="http://via.placeholder.com/300x300" />
      </div>
    </div>
  );
}
