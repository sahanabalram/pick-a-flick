import React, { Component } from 'react';
import CardExampleExpandable from './components/Cards';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import NavbarContainer from './components/Navbar';
import Register from './components/Register';
import LandingContainer from './components/Landing';
import ReactDOM from 'react-dom';
import AboutContainer from './components/About';
import FooterContainer from './components/Footer';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import ChatBotContainer from './components/ChatBot';

class App extends Component {
  render() {
    return(
      <div>
        <NavbarContainer />
        <Route exact={true} path='/' component={LandingContainer} />
        <Route exact={true} path='/About' component={AboutContainer}/>
        <Route exact={true} path='/Login' component={Login}/>
        <Route exact={true} path='/Register' component={Register}/>
        {/* <Route eact={true} path='/Contact' component={Contact}/> */}
        {/* <Route exact={true} path='/Main' component={ChatbotContainer}/> */}
        <Route exact={true} path='/Main' component={CardExampleExpandable}/>
        {/* <Route exact={true} path='/Contact' component={ContactContainer}/> */}
        <FooterContainer />
        {/* <NavbarContainer />
        <AboutContainer />
    <LandingContainer />
         <Login/>
        <Register/> 
        <SideNavbar />
        <MuiThemeProvider>
          <CardExampleExpandable />
        </MuiThemeProvider>
        <FooterContainer /> */}

      </div>
    )
  }
}

export default App;