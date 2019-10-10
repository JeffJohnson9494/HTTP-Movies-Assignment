import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        
        <h3>Your Saved Movies!</h3>
      
        <div className="button-wrapper">
          <div className="home-button">
            {/*Link to add route which is the NewMovie Component*/}
            <Link to="/movie/add">Add New Movie</Link>
          </div>
          <div className="home-button">
            {/*Link to home which is MovieList Component*/}
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}
