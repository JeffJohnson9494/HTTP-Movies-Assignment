import React, { Component } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import NewMovie from "./Movies/NewMovie";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    console.log(this.state.savedList);
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/*Route to Home component which is MovieList*/}
        <Route exact path="/" component={MovieList} />
        {/*Route to the NewMovie component form used to add a new movie*/}
        <Route path="/movie/add" component={NewMovie} />
        {/*Route to Movie component  */}
        <Route path="/movies/:id"render={props => {
            return <Movie {...props} addToSavedList={this.addToSavedList} />;
          }}
        />
      </div>
    );
  }
}