import React, { Component } from 'react';
import {Navbar, NavItem,Icon} from 'react-materialize';

class NavbarContainer extends Component {
    render() {
        return (
            <div>
            <Navbar brand="Flick-Pick" right>
            <NavItem href='get-started.html'>Login</NavItem>
            <NavItem href='components.html'>Register</NavItem>
            </Navbar>
            </div>
        )
    }
}

export default NavbarContainer;