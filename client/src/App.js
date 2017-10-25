import React, { Component } from 'react';
import CardExampleExpandable from './components/Cards';
// import Login from './components/Login';
import NavbarContainer from './components/Navbar';
// import Register from './components/Register';
// import LandingContainer from './components/Landing';
// import ChatBotContainer from './components/ChatBot';
import GenreButtonContainer from './components/GenreButton';
import GenreCards from './components/Search/GenreCards'

class App extends Component {
  render() {
    return(
      <div>
      <NavbarContainer/>
      {/* <ChatBotContainer/> */}
      <GenreButtonContainer />
      
        
        
      
        

        
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