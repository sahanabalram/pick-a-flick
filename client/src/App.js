import React, { Component } from 'react';
import SideNavbar from './components/SideNav';
import CardExampleExpandable from './components/Cards';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import NavbarContainer from './components/Navbar';
import Register from './components/Register';
import LandingContainer from './components/Landing';
import ReactDOM from 'react-dom';
import AboutContainer from './components/About';
import FooterContainer from './components/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <NavbarContainer />
        <AboutContainer />
    <LandingContainer />
         <SideNavbar />
         <Login/>
        <Register/> 
        <SideNavbar />
        <MuiThemeProvider>
          <CardExampleExpandable />
        </MuiThemeProvider>
        <FooterContainer />
      </div>
    )
  }
}

export default App;