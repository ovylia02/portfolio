import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo.png`}
                        alt="Logo"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">.home</Nav.Link>
                        <Nav.Link href="#">.placeholder</Nav.Link>
                        {/* ADD MORE LINKS */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
