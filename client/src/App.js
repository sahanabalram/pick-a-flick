import React, { Component } from 'react';
import SideNavbar from './components/SideNav';
import CardExampleExpandable from './components/Cards';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import NavbarContainer from './components/Navbar';
import Register from './components/Register';
import LandingContainer from './components/Landing';

class App extends Component {
  render() {
    return(
      <div>
        <LandingContainer />
         <SideNavbar />
         <Login/>
        <Register/> 
        <SideNavbar />
        <MuiThemeProvider>
          <CardExampleExpandable />
        </MuiThemeProvider>
        
     </div>
    )
// import Login from './components/Login';
// import NavbarContainer from './components/Navbar';
// import Register from './components/Register';
// import LandingContainer from './components/Landing';

// class App extends Component {
//   render() {
//     return(    
//       <div>
//       <LandingContainer/>       
//       </div>    
//       // <Login/>
//         // <Register/> 
//       // <SideNavbar />
//     );
  }
}

export default App;