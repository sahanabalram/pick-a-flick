import React, {Component} from 'react';
import {Button,Icon,Form,Row,Input,Col} from 'react-materialize';
import {Link} from 'react-router-dom';
import './LoginButton.css';


class LoginRegisterButton extends Component {
  login = () => {
  }
  register = () => {
  }
  render() {
    return (
      <div className='container'>
          <div className='row'>
             <div className='col s12 m1 ls2'>
              </div>
              <div className='col s12 m10 l8'>
              <Link to="/login">
                    <Button className='login-button' waves='light' onClick={this.login}>
                        Login
                    </Button>
              </Link>
       <Link to = "/register">
       <Button className='register-button' waves='light' onClick={this.register}>
           Register
         </Button>
         </Link>
              </div>
          </div>
          
          <div className='col s12 m1 l2'></div>
      </div>
    )
  }
};

export default LoginRegisterButton;