import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export class Navigation extends Component {    
    render() {
        return (
            <Navbar collapseOnSelect className="navigation justify-content-between" expand="xl" sticky="top" > 
                <Navbar.Brand className="nav-bar-logo">
                    <img
                        alt=" "
                        src='./ectclogo.svg'
                        width="60"
                        height="60"
                        className="d-inline-block align-center"
                    />{' '}
                    <ectc>ECTC2021</ectc>
                </Navbar.Brand>
                <date>FEBRUARY 19 - 21</date>
                <register>REGISTER</register>
            </Navbar>

        )
    }
}

export default Navigation
