import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export class Navigation extends Component {    
    render() {
        return (
            <Navbar collapseOnSelect expand="false" className="navigation justify-content-between" sticky="top" > 
                
                <Navbar.Brand className="nav-bar-logo">
                    <img
                        alt=" "
                        src='./ectclogo.svg'
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                    />{' '}
                    <span id="nav-logo">ECTC 2021</span>
                    <span id="nav-date">FEBRUARY 19 - 21</span>
                    <span id="nav-register">REGISTER</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="hamburger" />
				<Navbar.Collapse id="hamburger">
					<Nav id="hamburger-items">
						<Nav.Link href="#home">ABOUT</Nav.Link>
						<Nav.Link href="#link">WORKSHOPS</Nav.Link>
                        <Nav.Link href="#link">INSTRUCTORS</Nav.Link>
                        <Nav.Link href="#link">TAIKO TALKS</Nav.Link>
                        <Nav.Link href="#link">FINAL CONCERT</Nav.Link>
                        <Nav.Link href="#link">SCHEDULE</Nav.Link>
                        <Nav.Link href="#link">VENUES</Nav.Link>
                        <Nav.Link href="#link">PARKING</Nav.Link>
                        <Nav.Link href="#link">HOTELS</Nav.Link>
                        <Nav.Link href="#link">VENDORS</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
					</Nav>
				</Navbar.Collapse>
                
            </Navbar>

        )
    }
}

export default Navigation
