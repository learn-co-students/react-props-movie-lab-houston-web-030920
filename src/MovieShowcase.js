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