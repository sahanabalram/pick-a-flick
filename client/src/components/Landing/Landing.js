import React, {Component} from 'react';
import {Row, Col,Button} from 'react-materialize';
<<<<<<< HEAD
=======
import {Route,BrowserRoute,Link,Redirect,Switch} from 'react-router-dom';
>>>>>>> 7cc7afd7404bee406012a5ef8a309fcfc6dd125c
import './Landing.css';
class LandingContainer extends Component {
    render() {
        return (
            <div id="welcome" className="valign-wrapper">
                <Row>
                <Col s={12}>
                    <h2 className='left-align'>Can't decide what to watch</h2>
                    <h4>Let us Pick-A-Flick for you!</h4>
<<<<<<< HEAD
                    <p><Button  id='main-register'waves='light' className='orange'>Register</Button></p>
=======
                    <Link to='/register'><p><Button  id='main-register'waves='light' className='orange'>Register</Button></p></Link>
>>>>>>> 7cc7afd7404bee406012a5ef8a309fcfc6dd125c
                </Col>
                </Row>
            </div>
        )
    }
}
export default LandingContainer;