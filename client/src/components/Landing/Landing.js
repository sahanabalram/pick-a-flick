import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import './Landing.css';
class LandingContainer extends Component {
    render() {
        return (

            <div className="valign-wrapper" id="welcome">
                <Row>
                    <Col s={12}>
                        <h2 className='left-align'>Can't decide what to watch?</h2><br />
                        <h4>Let BotFlick Pick-A-Flick for you!</h4>
                    </Col>
                </Row>
            </div>

        )
    }

}

export default LandingContainer;