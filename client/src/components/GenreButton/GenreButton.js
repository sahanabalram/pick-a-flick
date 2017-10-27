import React, {Component} from 'react';
import {Button, Col, Row} from 'react-materialize';
import MovieAPI from "../../utils/MovieAPI";
import GenreCards from '../Cards/GenreCards';
import '../../components/Landing/Landing.css';
import './GenreButton.css';
import ChatBotContainer from '../ChatBot';

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
        return (
            <div className='container'>
                <Row>
                    <Col s={12} m={4} l={4}>
                    <ChatBotContainer/>
                    </Col>
                    <Col s={12} m={8} l={8}>
                        <h1>Movie Suggestion</h1>
                        <ul>
                        <li><Button onClick={this.handleEvent} value="28" waves='light'>Action</Button></li>
                        <li><Button onClick={this.handleEvent} value="18" waves='light'>Drama</Button></li>
                        <li><Button onClick={this.handleEvent} value="35" waves='light'>Comedy</Button></li>
                        <li><Button onClick={this.handleEvent} value="10751" waves='light'>Family</Button></li>
                        <li><Button onClick={this.handleEvent} value="878" waves='light'>Science Fiction</Button></li>
                        <li><Button onClick={this.handleEvent} value="9648" waves='light'>Mystery</Button></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                <GenreCards movies={this.state.movies}/>
                </Row>
            </div>
        )
    }
}

export default GenreButtonContainer;