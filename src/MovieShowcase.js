import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX

    return movieData.map((x) => (
      <MovieCard
        key={x.id}
        title={x.title}
        IMDBRating={x.IMDBRating}
        genres={x.genres}
        poster={x.poster}
      />
    ));
  };

  render(props) {
    // return (
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

// <h2>{this.props.title}</h2>
// <h3>{this.props.IMDBRating}</h3>

// title: 'Choux and Maru go to Istanbul',
// IMDBRating: 3,
// genres: ['cats', 'adventure', 'romance'],
// poster: 'choux-maru-istanbul'
