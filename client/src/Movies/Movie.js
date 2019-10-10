import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }
//mounting and matching props id
  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }
//fetchMovie function axios.get from local host 5000 api at dynamic id`${id}`
  fetchMovie = id => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then(res => {
        this.setState({ movie: res.data });
      }).catch(err => {
        console.log(err);
      });
  };
//using addToSavedList from props and using it on this.state.movie
  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    //if statement either returning basic loading or the movie selected
    if (!this.state.movie) {
      return <div>Loading..</div>;
    }

    return (
      <div className="save-wrapper">
      {/*MovieCard Display for any given movie*/}
        <MovieCard movie={this.state.movie} />
      {/*using saveMovie*/}
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
      </div>
    );
  }
}
