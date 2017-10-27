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
