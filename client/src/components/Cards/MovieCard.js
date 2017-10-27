import React, { Component } from 'react'

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            movie: newProps.movie
        });    
    }

    render() {
        console.log("state" , this.state.movie);
        if (this.state.movie != undefined) { 
            return (
                <div className="movie-modal">
                    <div
                        className='small'
                        aria-labelledby="movie-modal-title">

                        <div className="card-header">
                            <h3 id="movie-modal-title">{this.state.movie.title}</h3>
                            <small><b>Rating: </b>{this.state.movie.vote_average}/10 ({this.state.movie.vote_count} votes)</small>
                            <p><b>Release Date:</b> {this.state.movie.release_date}</p>
                        </div>
                        <div className="card-body">
                            <div className="center-block">
                                <a href={"http://image.tmdb.org/t/p/w500" + this.state.movie.poster_path}
                                    data-lightbox={this.state.movie.title + " poster"}
                                    data-title={this.state.movie.title + " Movie Poster"}>
                                    <img className="center-block img-responsive"
                                        width="240px"
                                        height="320px"
                                        src={"https://image.tmdb.org/t/p/w500" + this.state.movie.poster_path}
                                        alt={this.state.movie.title + " Poster"}
                                        onLoad={this.onImageLoad} />
                                </a>
                            </div>
                            <hr />
                            {this.state.movie.overview}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default MovieCard;