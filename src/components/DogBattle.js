import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

class DogBattle extends React.Component {
  render() {
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
}

export default DogBattle;
