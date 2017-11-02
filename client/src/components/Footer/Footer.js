import React, { Component } from 'react';
import { Footer, Row, Col } from 'react-materialize';
import ReactDOM from 'react-dom';
import './Footer.css';

class FooterContainer extends Component {
    render() {
        return (
			<div>
				<div className="Footer">
					<Footer className="center-align" copyrights="© 2017 Flick a Pick"

						links={
							<ul>
								<h5 className="white-text">Connect with Us!</h5>
								<p>
								<li><a className="github-button white-text" href="https://www.github.com/annacrespo" aria-label="Follow @annacrespo on GitHub">Follow @annacrespo</a></li>
								<li><a className="github-button white-text" href="https://www.github.com/fneim" aria-label="Follow @fneim on GitHub">Follow @fneim</a></li>
								<li><a className="github-button white-text" href="https://www.github.com/jeanellesebastian" aria-label="Follow @jeanellesebastian on GitHub">Follow @jeanellesebastian</a></li>
								<li><a className="github-button white-text" href="https://www.github.com/jheal006" aria-label="Follow @jheal006 on GitHub">Follow @jheal006</a></li>
								<li><a className="github-button white-text" href="https://www.github.com/klaytonolavi" aria-label="Follow @klaytonolavi on GitHub">Follow @klaytonolavi</a></li>
								<li><a className="github-button white-text" href="https://www.github.com/sahanabalram" aria-label="Follow @sahanabalram on GitHub">Follow @sahanabalram</a></li>
								</p>
							</ul>
						}
					>
						
						<h5 className="white-text">About Us</h5>
						<Row>
							<Col l={12}>
						{/* <p className="grey-text text-lighten-4" >You can use rows and columns here to organize your footer content.</p> */}
              			  <p className="white-text">Botflick, the chatbot that chooses a movie based on your mood!
							Have you been scrolling through Netflix for hours?
							Can’t figure out what movie to watch? Can’t even narrow down the genre?
							Choose one of our fun pre-curated lists, or chat with our chatbot and we’ll figure out what mood you’re in.
							Watch a movie that makes you laugh until your stomach hurts .. Cry until there are no more tears to cry ..
							or Feel like a badass .. whatever mood you’re in .. stop wasting time indecisively scrolling and chill.</p>
							</Col>
						</Row>
					</Footer>
				</div>
		</div>
        )
    }
}

export default FooterContainer;