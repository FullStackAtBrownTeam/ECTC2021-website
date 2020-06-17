import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export class Navigation extends Component {    
    
    constructor(props) {
        super(props);
        this.state = {
            halfreached: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll=(event) => { 
        console.log("here");
        let scrollTop = window.pageYOffset
            console.log(scrollTop);
        if(scrollTop >= 1){
            this.setState({halfreached: true})
        }
        else{
            this.setState({halfreached: false})
        }
    }

    render() {

        return (
            <Navbar collapseOnSelect position="fixed" top="0" z-index="99999" expand="false" className="navigation justify-content-between" sticky="top" > 
                
                <Navbar.Brand className="nav-bar-logo">
                    <img
                        alt=" "
                        src='./ectclogo.svg'
                        width="50"
                        height="50"
                        className="d-inline-block align-center"
                    />{' '}
                    <span style={{transition:".7s"}} className ={this.state.halfreached ? "hidden" : ""} id="nav-startlogo">EAST COAST TAIKO CONFERENCE 2021</span>
                    <span style={{transition:".7s"}} className ={this.state.halfreached ? "" : "hidden"} id="nav-logo">ECTC 2021</span>
                    <span style={{transition:".7s"}} className ={this.state.halfreached ? "" : "hidden"} id="nav-date">FEBRUARY 19 - 21</span>
                    <span id="nav-register">REGISTER</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="hamburger" >
                </Navbar.Toggle>
				<Navbar.Collapse id="hamburger">
					<Nav id="hamburger-items">
                        <Nav.Link href="#about"><h4 className="about">ABOUT</h4></Nav.Link>
                        <Nav.Link href="#workshops"><h4 className="workshops">WORKSHOPS</h4></Nav.Link>
                        <Nav.Link href="#instructors"><h4 className="instructors">INSTRUCTORS</h4></Nav.Link>
                        <Nav.Link href="#taiko-talks"><h4 className="taiko-talks">TAIKO TALKS</h4></Nav.Link>
                        <Nav.Link href="#final-concert"><h4 className="final-concert">FINAL CONCERT</h4></Nav.Link>
                        <Nav.Link href="#schedule"><h4 className="schedule">SCHEDULE</h4></Nav.Link>
                        <Nav.Link href="#venues"><h4 className="venues">VENUES</h4></Nav.Link>
                        <Nav.Link href="#parking"><h4 className="parking">PARKING</h4></Nav.Link>
                        <Nav.Link href="#hotels"><h4 className="hotels">HOTELS</h4></Nav.Link>
                        <Nav.Link href="#vendors"><h4 className="vendors">VENDORS</h4></Nav.Link>
                        <Nav.Link href="#contact"><h4 className="contact">CONTACT</h4></Nav.Link>
					</Nav>
				</Navbar.Collapse>
                
            </Navbar>

        )
    }
}

export default Navigation
