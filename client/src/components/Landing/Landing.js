import React, {Component} from 'react';
import {Row, Col,Button} from 'react-materialize';
import {Route,BrowserRoute,Link,Redirect,Switch} from 'react-router-dom';
import './Landing.css';
class LandingContainer extends Component {
    render() {
        return (
            <div id="welcome" className="valign-wrapper">
                <Row>
                <Col s={12}>
                    <h2 className='left-align'>Can't decide what to watch</h2>
                    <h4>Let us Pick-A-Flick for you!</h4>
                    <Link to='/register'><p><Button  id='main-register'waves='light' className='orange'>Register</Button></p></Link>
                </Col>
                </Row>
            </div>
        )
    }
}
export default LandingContainer;