import React, {Component} from 'react';
import ChatBotContainer from '../ChatBot';
import {Button, Row, Col} from 'react-materialize';
import GenreButtonContainer from '../../components/GenreButton';
import GenreCards from '../../components/Cards/GenreCards';
import './Main.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={6}>
                    <ChatBotContainer/>
                        {/* <Button className='movie-button' waves='light' className='orange'>Drama</Button>
                        <Button className='movie-button' waves='light' className='orange'>Action</Button>
                        <Button className='movie-button' waves='light' className='orange'>Science Fiction</Button>
                        <Button className='movie-button' waves='light' className='orange'>Family</Button>
                        <Button className='movie-button' waves='light' className='orange'>Romantic</Button> */}
                    </Col>
                    <GenreButtonContainer />
                </Row>

                <div>
            

                </div>

            </div>

        )
    }

}

export default Dashboard;
