import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom';
import {Navbar, NavItem, Icon,Row,Col,Preloader} from 'react-materialize';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Protected';
import NavbarContainer from './components/Navbar';
import LandingContainer from './components/Landing';
import {logout} from './utils/helpers/auth';
import {firebaseAuth} from './config/constants';
import Footer from './components/Footer';
import './App.css';
import GenreButtonContainer from './components/GenreButton';


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
      : <Redirect to='/main'/>}/>
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
    return this.state.loading === true
      ? <Row>
      <Col s={4}>
        <Preloader size='big'/>
      </Col>
      <Col s={4}>
        <Preloader flashing/>
      </Col>
      <Col s={4}>
        <Preloader size='small'/>
      </Col>
    </Row>
      : (
        <BrowserRouter>
          <div>

            <Navbar brand='Pick-A-Flick' right>
              <ul id='navbar-main'>
                  {/* <Link to='/login'>
                    Login
                  </Link> */}
                  <Link to='/main'>
                    Dashboard
                  </Link>
                  <Link to='/'>
            {this.state.authed
              ? <button
                  style={{
                  border: 'none',
                  background: 'transparent'
                }}
                  onClick={() => {
                  logout()
                }}
                  className="navbar-brand">Logout</button>
              : <span></span>}
              </Link>
                  
              </ul>

            </Navbar>

            <div className="container">
              <div className="row">
                <Switch>
                  <Route path='/' exact component={LandingContainer}/>
                  <PublicRoute authed={this.state.authed} path='/login' component={Login}/>
                  <PublicRoute authed={this.state.authed} path='/register' component={Register}/>
                  <PrivateRoute
                    authed={this.state.authed}
                    path='/main'
                    component={Dashboard}/>
                  <Route render={() => <h3>No Match</h3>}/>
                </Switch>
              
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      );
  }
}
