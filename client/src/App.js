import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Protected';
import NavbarContainer from './components/Navbar';
import LandingContainer from './components/Landing';
import {logout} from './helpers/auth';
import {firebaseAuth} from './config/constants';
import AboutContainer from './components/About';
import FooterContainer from './components/Footer';

function PrivateRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
      ? <Component {...props}/>
      : <Redirect
        to={{
        pathname: '/login',
        state: {
          from: props.location
        }
      }}/>}/>
  )
}

function PublicRoute({
  component: Component,
  authed,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
      ? <Component {...props}/>
      : <Redirect to='/dashboard'/>}/>
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true, loading: false})
      } else {
        this.setState({authed: false, loading: false})
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }

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
        {/* <Route exact={true} path='/Contact' component={ContactContainer}/> */}
        <FooterContainer />
        </div>
    )
  }
}
