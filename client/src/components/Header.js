import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Helpfully</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="mr-auto">
                        <Nav.Link href="#explore">Explore</Nav.Link>
                        <Nav.Link href="#signout">Sign Out</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;