import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import './Navbar.css';

class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <Navbar brand="Flick-Pick" right>
                    <NavItem href='get-started.html'>Login</NavItem>
                    <NavItem href='components.html'>Register</NavItem>
                    <NavItem href='get-started.html'>Dashboard</NavItem>
                    <NavItem href='get-started.html'><Icon>menu</Icon></NavItem>
                </Navbar>
            </div>
        )
    }
}

export default NavbarContainer;