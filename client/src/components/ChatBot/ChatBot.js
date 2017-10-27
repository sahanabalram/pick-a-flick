import React , {Component} from 'react';
import "./ChatBot.css"
class ChatbotContainer extends Component {
    render() {
        return (
            <iframe
            width="300"
            height="400"
            src="https://console.dialogflow.com/api-client/demo/embedded/174e0285-cc65-4d9b-87ab-b6b7a9ad4426">
        </iframe>
        )
    }
}

export default ChatbotContainer;

// <iframe
// width="350"
// height="430"
// src="https://console.dialogflow.com/api-client/demo/embedded/174e0285-cc65-4d9b-87ab-b6b7a9ad4426">
// </iframe>