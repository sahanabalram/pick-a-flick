import React, { Component } from 'react';
import NavbarContainer from '../Navbar';
import Register from '../Register';
import Login from '../Login';
import FooterContainer from '../Footer';
class LandingContainer extends Component {
    render() {
        return (
            <div className="container-fluid">
                    {/* <img src="http://www.zulkarnine.com/wp-content/uploads/2013/12/collage-copy.jpg" alt="background-image" /> */}
                <Register />
                <Login />
            </div>
        )
    }
    
}

export default LandingContainer;