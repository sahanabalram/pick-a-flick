import React , {Component} from 'react';
import "./ChatBot.css"
class ChatbotContainer extends Component {
    render() {
        return (
            <iframe className="z-depth-5"id="chatterbot"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/13205648-e9a8-4cb9-b8f8-a73fceca689e">
        </iframe>
        )
    }
}

export default ChatbotContainer;