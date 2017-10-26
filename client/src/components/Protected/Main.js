import React, {Component} from 'react';
import ChatBotContainer from '../ChatBot';
import {Button, Row, Col} from 'react-materialize';
import './Main.css';
class Dashboard extends Component {
    render() {
        return (
            <div>
                <ChatBotContainer/>
                <Row>
                    <Col s={12}>
                        <Button className='movie-button' waves='light' className='orange'>Drama</Button>
                        <Button className='movie-button' waves='light' className='orange'>Action</Button>
                        <Button className='movie-button' waves='light' className='orange'>Science Fiction</Button>
                        <Button className='movie-button' waves='light' className='orange'>Family</Button>
                        <Button className='movie-button' waves='light' className='orange'>Romantic</Button>
                    </Col>
                </Row>

                <div>
                    <img  className='movie-image' src='http://via.placeholder.com/350x150'/>
                    <img className='movie-image' src='http://via.placeholder.com/350x150'/>
                    <img className='movie-image' src='http://via.placeholder.com/350x150'/>
                    <img className='movie-image' src='http://via.placeholder.com/350x150'/>
                    <img className='movie-image' src='http://via.placeholder.com/350x150'/>
                    <img className='movie-image' src='http://via.placeholder.com/350x150'/>
                   
                </div>

            </div>

        )
    }
}

export default Dashboard;