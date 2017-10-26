import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import './Landing.css';
class LandingContainer extends Component {
    render() {
        return (
            <div id="welcome" className="valign-wrapper">
                <Row>
                <Col s={12}>
                    <h2 className='left-align'>Can't decide what to watch</h2>
                    <h4>Let Botflick Pick-A-Flick for you!</h4>
                </Col>
                </Row>
            </div>
        )
    }

}

export default LandingContainer;