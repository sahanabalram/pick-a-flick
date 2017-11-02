// Include React as a dependency
import React, {Component} from 'react'

// Include our helpers for API calls
import MovieAPI from "../../utils/MovieAPI";
// import MovieModal from "./MovieModal.js"
import {Col, Card, CardTitle,Icon} from 'react-materialize';
import './GenreCards.css';

// Results Component Declaration
class GenreCards extends Component {

  // Here we will save states for the contents we save
  state = {
    movies: [],
    movie: {},
    show: false
  }

  getMoviesbyGenre = () => {
    MovieAPI
      .listOfGenreIds()
      .then((res) => {
        console.log(res.data.genres);
      });

    MovieAPI.movieSearchByGenreId(35, (data) => {
      console.log(data);
      if (data.results && data.results.length > 0) {
        this.setState({movies: data.results});
      }
    });

  }

  componentDidMount() {
    this.getMoviesbyGenre()
  }

  _createCardsUI() {

  // Declare Movie Props Return
  var movies = this.props.movies || [];

    return movies.map(movie => (
      <Col l={4} m={4} s={12}>
        <div className="movie-modal">
          <div className='small' aria-labelledby="movie-modal-title">

            <div className="card-header">
              <h3 id="movie-modal-title">{movie.title}</h3>
              <small>
                <b>Rating:
                </b>{movie.vote_average}/10 ({movie.vote_count}
                votes)</small>
              <p>
                <b>Release Date:</b>
                {movie.release_date}</p>
            </div>
            <div className="card-body">
              <div className="center-block">
                <a
                  href={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
                  data-lightbox={movie.title + " poster"}
                  data-title={movie.title + " Movie Poster"}>
                  <img
                    className="center-block img-responsive"
                    width="240px"
                    height="320px"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title + " Poster"}
                    onLoad={this.onImageLoad}/>
                </a>
              </div>
              <hr/> {movie.overview}
            </div>
          </div>
        </div>
      </Col>
    ))
  }

  _createCardsUIv2() {

        // Declare Movie Props Return
        var movies = this.props.movies || {}


        return movies.slice(0,6).map(movie => (
          <Col l={4} m={4} s={12}>
            <Card className="movieCard" header={<CardTitle id="reveal" reveal image={"https://image.tmdb.org/t/p/w500" + movie.poster_path} waves='light'/>}
          title={movie.title}
          reveal={<p><small>
            <b>Rating:
            </b>{movie.vote_average}/10 ({movie.vote_count}
            votes ){movie.overview}</small></p>}>
            <p><a href={"http://image.tmdb.org/t/p/w500" + movie.poster_path}>Link</a></p>
            </Card>
          </Col>
        ))
      }

  render() {
    return (
      <div>
        {this._createCardsUIv2()}
      </div>
    )
  }

}

// Export the module back to the route
export default GenreCards;
