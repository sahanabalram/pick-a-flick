import React, { Component } from 'react';
import SideNavbar from './components/SideNav';
import Login from './components/Login';
import NavbarContainer from './components/Navbar';
import Register from './components/Register';
import LandingContainer from './components/Landing';

class App extends Component {
  render() {
    return(    
      <div>
      <LandingContainer/>       
      </div>    
      // <Login/>
        // <Register/> 
      // <SideNavbar />
    );
  }
}

export default App;
