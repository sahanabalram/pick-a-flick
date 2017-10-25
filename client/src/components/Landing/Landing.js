import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import './Landing.css';
class LandingContainer extends Component {
    render() {
        return (
            <div id="img-container" className="container">
                <Row id="img-container">
                    <Col s={12} m={4} l={4}>
                        <img
                            id='main-poster'
                            src='https://pix-media.priceonomics-media.com/blog/892/posters.jpg'
                            alt='main-poster'/>
                    </Col>
                    <Col s={12} m={8} l={8}>
                        <p>
                            Tierd of scrolling through movies and wasting hours of time</p>
                    </Col>
                </Row>

            </div>
        )
    }

}

export default LandingContainer;