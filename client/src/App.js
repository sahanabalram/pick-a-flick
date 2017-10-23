import React, { Component } from 'react';
import SideNavbar from './components/SideNav';
import CardExampleExpandable from './components/Cards';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return(
      <div>
         <SideNavbar />
        <MuiThemeProvider>
          <CardExampleExpandable />
        </MuiThemeProvider>
        
     </div>
    )
  }
}

export default App;
