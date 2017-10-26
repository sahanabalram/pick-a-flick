import React, { Component } from 'react';
import {Navbar, NavItem,Icon} from 'react-materialize';
import { Link } from 'react-router-dom';

class NavbarContainer extends Component {
    render() {
        return (
            <div>
            <Navbar brand="Flick-Pick" right>
                <ul id='navbar-main'>
                    <li>
                <Link to="/">
                    <NavItem>Home</NavItem>
                </Link>
                    </li>
                    <li>
                <Link to="/About">
                    <NavItem>About</NavItem>
                </Link>
                    </li>
                    <li>
                <Link to="/Login">
                    <NavItem>Login</NavItem>
                </Link>
                    </li>
                    <li>
                <Link to="/Register">
                    <NavItem>Register</NavItem>
                </Link>
                    </li>
                </ul>
            </Navbar>
            </div>
        )
    }
}

export default NavbarContainer;