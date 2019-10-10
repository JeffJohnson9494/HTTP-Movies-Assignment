import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
//getting movies data from api/movies
  componentDidMount() {
    // fill me in with an HTTP Request to `localhost:5000/api/movies`
    axios.get("http://localhost:5000/api/movies").then(res => {
        this.setState({ movies: res.data });
      }).catch(err => {
        console.log(err);
      });
  }
//mapping over movies and putting them into movieDetails with the key set to movie.id
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
//simple function component linking to the movieCard component using movie.id dynamic to call the right info
function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
