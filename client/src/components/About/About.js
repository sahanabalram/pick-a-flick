import React, { Component } from 'react';
class AboutContainer extends Component {
    render() {
        return (
            <div className="container-fluid" id="aboot">
                <h3>About us</h3>
                <p>Botflick, the chatbot that chooses a movie based on your mood!</p>
                <p>Have you been scrolling through Netflix for hours? </p>
                <p>Can’t figure out what movie to watch? Can’t even narrow down the genre?</p>
                <p>Our Chatbot will suggest movies you should watch based on your mood! </p>
                <p>Choose one of our fun pre-curated lists, or chat with our chatbot and we’ll figure out what mood you’re in.</p>
                <p>Watch a movie that makes you laugh until your stomach hurts .. Cry until there are no more tears to cry ..</p>
                <p>or Feel like a badass .. whatever mood you’re in .. stop wasting time indecisively scrolling.</p>
                   {/* <img src="http://www.zulkarnine.com/wp-content/uploads/2013/12/collage-copy.jpg" alt="background-image" /> */}
            </div>
        )
    }
    
}

export default AboutContainer;