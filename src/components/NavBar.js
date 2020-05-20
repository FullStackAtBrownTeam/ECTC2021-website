import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import './NavBar.css'

export class Navigation extends Component {
    render() {
        return (
            <Navbar className="navigation">
                <Navbar.Brand href="#home">
                    <img
                    alt=" "
                    src='./ectclogo.svg'
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    ECTC2021
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Navigation
