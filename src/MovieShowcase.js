import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import {movieData} from './data.js'

export default class MovieShowcase extends Component {


  render() {
    return (
      <div id="movie-showcase">
        {movieData.map(movie => 
        (
          <MovieCard 
          key= {movie.id}
          title= {movie.title}
          IMDBRating= {movie.IMDBRating}
          genres= {movie.genres}
          poster= {movie.poster}
          />
        )
      )}
      </div>
    )
  }
}
MovieCard.defaultProps= {
  title: "Unknown",
  IMDBRating: null,
  poster: "default",
  genres: ["No Genre(s) Found"]
}