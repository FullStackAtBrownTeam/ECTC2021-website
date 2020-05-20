import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar className="navigation" sticky="top">
                
                <Navbar.Brand className="nav-bar-logo">
                    <img
                        alt=" "
                        src='./ectclogo.svg'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ECTC2021
                </Navbar.Brand>
                <Navbar.Brand className="date">
                    February 19 - 21
                </Navbar.Brand>
                <Navbar.Text className="register">
                    Register
                </Navbar.Text>
            </Navbar>
        )
    }
}

export default Navigation
