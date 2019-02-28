import React from "react";
import "./Favourites.css";

class Favourites extends React.Component {
  render() {
    return (
      <div className="Favourites">
        <div className="Favourites-breeds">
          <h2>Favourite Breeds</h2>
          <p>???</p>
          <p>???</p>
        </div>
        <div className="Favourites-saved">
          <h2>Saved Photos</h2>
          <div className="Favourites-photos">
            <img src="http://via.placeholder.com/80x80" />
            <img src="http://via.placeholder.com/80x80" />
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
