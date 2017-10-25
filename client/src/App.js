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
      ? <h1>Loading</h1>
      : (
        <BrowserRouter>
          <div>

            <Navbar brand='Pick-A-Flick' right>
              <ul id='navbar-main'>
                <li>
                  <Link to='/login'>
                    <NavItem>Login</NavItem>
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <NavItem>Register</NavItem>
                  </Link>
                </li>
                <li>
                  <Link to='/main'>
                    <NavItem>Dashboard</NavItem>
                  </Link>
                </li>
                <li>
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
                  </li>
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
          </div>
        </BrowserRouter>
      );
  }
}
