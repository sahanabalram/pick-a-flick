import React, {Component} from 'react';
import ChatBotContainer from '../ChatBot';
import {Button, Row, Col} from 'react-materialize';
import './Main.css';
import GenreButtonContainer from '../GenreButton';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <GenreButtonContainer />
            </div>

        )
    }
}

export default Dashboard;