import React, {Component} from 'react';
import {Button, Col, Row} from 'react-materialize';
import './GenreButton.css';
class GenreButtonContainer extends Component {
    render() {
        return (
            <div className='container'>
                <Row>
                    <Col s={12} m={4} l={4}>
                        <iframe
                            id="chatterbot" title='movie-bot'
                            width="350"
                            height="430"
                            src="https://console.dialogflow.com/api-client/demo/embedded/13205648-e9a8-4cb9-b8f8-a73fceca689e"></iframe>
                    </Col>
                    <Col s={12} m={8} l={8}>
                        <h1>Movie Suggestion</h1>
                        <ul>
                        <li><Button waves='light'>Action</Button></li>
                        <li><Button waves='light'>Drama</Button></li>
                        <li><Button waves='light'>Comedy</Button></li>
                        <li><Button waves='light'>Family</Button></li>
                        <li><Button waves='light'>Science Fiction</Button></li>
                        <li><Button waves='light'>Mystery</Button></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GenreButtonContainer;