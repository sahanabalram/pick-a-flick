import React, {Component} from 'react';
import {Button, Col, Row} from 'react-materialize';
import MovieAPI from "../../utils/MovieAPI";
import GenreCards from '../Cards/GenreCards';
import '../../components/Landing/Landing.css';
import './GenreButton.css';

class GenreButtonContainer extends Component {

    state = {
        value : "",
        movies: []
    };


    getMoviesbyGenre = (newGenre) => {
      MovieAPI.movieSearchByGenreId(newGenre, (data)=>{
        console.log(data);
        if (data.results && data.results.length > 0 ) {
          this.setState({movies: data.results});
        }

      });
    }

   componentWillReceiveProps(newGenre) {
     console.log("NEW STATE===", newGenre)
     this.getMoviesbyGenre(newGenre);
    }

    handleEvent = (e) => {
      this.setState({value: e.target.value});
      this.componentWillReceiveProps(e.target.value);
      }

    render() {
        // let genreID = this.state.value;
        // console.log("GENRE BUTTON====", newGenre)
        return (
            <div className='container'>
                <Row>
                    <Col s={6}>
                      <h1 id="movieHeader">Movie Genres</h1>
                      <Col s={6} id="genreButton">  <Button onClick={this.handleEvent} value="28" waves='light'>Action</Button></Col>
                      <Col s={6} id="genreButton"><Button onClick={this.handleEvent} value="18" waves='light'>Drama</Button></Col>
                      <Col s={6} id="genreButton"><Button onClick={this.handleEvent} value="35" waves='light'>Comedy</Button></Col>
                      <Col s={6} id="genreButton"><Button onClick={this.handleEvent} value="10751" waves='light'>Family</Button></Col>
                      <Col s={6} id="genreButton"><Button onClick={this.handleEvent} value="878" waves='light'>Science Fiction</Button></Col>
                      <Col s={6} id="genreButton"><Button onClick={this.handleEvent} value="9648" waves='light'>Mystery</Button></Col>
                    </Col>
                </Row>
                <Row>
                  <GenreCards movies={this.state.movies}></GenreCards>
                </Row>
            </div>
        )
    }
}

export default GenreButtonContainer;
