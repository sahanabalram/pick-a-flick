// Include React as a dependency
import React, { Component } from 'react'
// Include our helpers for API calls
import MovieAPI from "../../utils/MovieAPI";
import GenreButtonContainer from "../GenreButton/GenreButton";
// import MovieModal from "./MovieModal.js"

// Results Component Declaration
class GenreCards extends Component {

  // Here we will save states for the contents we save
  state = {
    movies: [],
    movie: {},
    show: false,
  }




  _createCardsUI(){

  // Declare Movie Props Return
  var movies = this.state.movies || {}


    return movies.map( movie => (
        <div className="movie-modal">
          <div
            className='small'
            aria-labelledby="movie-modal-title">

            <div class="card-header">
              <h3 id="movie-modal-title">{movie.title}</h3>
              <small><b>Rating: </b>{movie.vote_average}/10 ({movie.vote_count} votes)</small>
              <p><b>Release Date:</b> {movie.release_date}</p>
            </div>
            <div class="card-body">
              <div className="center-block">
                <a href={"http://image.tmdb.org/t/p/w500"+ movie.poster_path}
                   data-lightbox={movie.title + " poster"}
                   data-title={movie.title + " Movie Poster"}>
                  <img className="center-block img-responsive"
                       width="240px"
                       height="320px"
                       src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path}
                       alt={movie.title + " Poster"}
                       onLoad={this.onImageLoad} />
                </a>
              </div>
              <hr />
              {movie.overview}
            </div>
          </div>
        </div>)
      )
    }

  render () {
        return (
          <div>
              {this._createCardsUI()}
          </div>
       )
  }

}

// Export the module back to the route
export default GenreCards;
