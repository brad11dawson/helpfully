import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CreateGoalModal from './CreateGoalModal'

function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Helpfully</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() =>setModalShow(true)}>Create Goal</Nav.Link>
                        <Nav.Link href="#signout">Sign Out</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            <CreateGoalModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Navbar>

        
        
    )
}

export default Header;