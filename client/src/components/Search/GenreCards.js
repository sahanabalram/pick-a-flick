// Include React as a dependency
import React, { Component } from 'react'

// Include our helpers for API calls
import MovieAPI from "../../utils/MovieAPI";
// import MovieModal from "./MovieModal.js"
const genreID = 10751;
// Results Component Declaration
class GenreCards extends Component {
  // Here we will save states for the contents we save
  state = {
    movies: [],
    movie: {},
    show: false
  }

  getMoviesbyGenre = () => {
    MovieAPI.listOfGenreIds().then((res)=>{
      console.log(res.data.genres);
    });

    MovieAPI.movieSearchByGenreId(genreID, (data)=>{
      console.log(data);
      if (data.results && data.results.length > 0 ) {
        this.setState({movies: data.results});
      }
    });

  }

 componentDidMount(genreID) {
    this.getMoviesbyGenre()
  }


  _createCardsUI(){

  // Declare Movie Props Return
  var movies = this.state.movies || {}

  // ??? Duplicate functionality of above?
  // let movies = this.state.movies.map((value, index, array) => {
  //   return (
  //         <li onClick={this.onClick.bind(this, value)} key={value.id} href={"#/movies/" + value.id}>{value.title}</li>
  //   )
  // });

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
