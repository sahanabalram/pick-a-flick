import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import ReactDOM from 'react-dom';

class FooterContainer extends Component {
    render() {
        return (
            <div>
                <Footer copyrights="&copy 2017 Flick a Pick"
	                moreLinks={
		                <a className="grey-text text-lighten-4 right" href="#!">Contact Us</a>
	                }
	                links={
		                <ul>
			                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
			                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
			                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
			                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
		                </ul>
	                }
	                className='example'
                >
		            <h5 className="white-text">Footer Content</h5>
		            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </Footer>
            </div>
        )
    }
}

export default FooterContainer;